import json, re, os, sys
from urllib.parse import urlparse, unquote
SP=os.path.dirname(os.path.abspath(__file__))
E=json.load(open(f'{SP}/excel.json'))
ZIP=f'{SP}/mind-content/mind-content'

def cell(row,i,key='text'):
    return row['c'].get(str(i),{}).get(key,'')

def clean(u):
    u=(u or '').strip()
    u=u.replace('http://','https://')
    return u.rstrip('?').rstrip()

def relpath(u):
    """URL op wijzijnmind.nl -> pad in de contentboom, of None."""
    p=urlparse(u)
    if p.netloc!='wijzijnmind.nl': return None
    path=unquote(p.path).strip('/')
    if not path or path.startswith('media/'): return None
    return path+'.md'

programs=[]   # challenges + themaspecials
for sheet,soort in (('Challenges','challenge'),('Themaspecials','themaspecial')):
    cur=None
    for row in E[sheet]:
        if row['r']<3: continue
        titel=cell(row,0); aanmeld=clean(cell(row,1,'url') or cell(row,1))
        dag=cell(row,2);  link=clean(cell(row,3,'url') or cell(row,3))
        if titel:
            cur={'titel':titel,'soort':soort,'aanmeldpagina':aanmeld,'dagen':[]}
            programs.append(cur)
        if dag and link and cur:
            cur['dagen'].append({'titel':dag,'url':link,'pad':relpath(link)})

gidsen=[]
for row in E['Online gidsen']:
    if row['r']<3: continue
    t=cell(row,0).strip()
    if not t: continue
    gidsen.append({'titel':t,
                   'url':clean(cell(row,1,'url') or cell(row,1)),
                   'aanmeldpagina':clean(cell(row,2,'url') or cell(row,2)),
                   'opmerking':cell(row,3)})
    gidsen[-1]['pad']=relpath(gidsen[-1]['url'])

tests=[{'titel':cell(r,0).strip(),'url':clean(cell(r,1,'url') or cell(r,1))}
       for r in E['Zelftesten'] if r['r']>=2 and cell(r,0).strip()]

verhalen=[]
for r in E['Ervaringsverhalen']:
    if r['r']<2 or not cell(r,1).strip(): continue
    u=clean(cell(r,2,'url') or cell(r,2))
    verhalen.append({'onderwerp':cell(r,0),'titel':cell(r,1),'url':u,'pad':relpath(u)})

data={'programs':programs,'gidsen':gidsen,'tests':tests,'verhalen':verhalen}
json.dump(data,open(f'{SP}/worklist.json','w'),ensure_ascii=False,indent=1)

# ---- gapanalyse ----
def status(pad):
    if pad is None: return 'geen-md'
    return 'AANWEZIG' if os.path.exists(os.path.join(ZIP,pad)) else 'ONTBREEKT'

print("="*70); print("CHALLENGES EN THEMASPECIALS"); print("="*70)
tot=miss=0
for p in programs:
    print(f"\n{p['soort'].upper():13} {p['titel']}  ({len(p['dagen'])} dagen)")
    for d in p['dagen']:
        s=status(d['pad']); tot+=1; miss+= s=='ONTBREEKT'
        print(f"   [{s:9}] {d['titel']}")
print(f"\n>> {miss} van {tot} dagpagina's ontbreekt in de zip")

for label,items in (('ONLINE GIDSEN',gidsen),('ERVARINGSVERHALEN',verhalen)):
    print("\n"+"="*70); print(label); print("="*70)
    t=m=0; pdf=0
    for i in items:
        s=status(i['pad']); t+=1
        if s=='ONTBREEKT': m+=1
        if s=='geen-md': pdf+=1
        print(f"   [{s:9}] {i['titel']}")
    print(f">> {t} totaal, {m} ontbreekt, {pdf} is pdf/extern")

print("\n"+"="*70); print("ZELFTESTEN (allemaal formulier.wijzijnmind.nl, geen md mogelijk)"); print("="*70)
for t in tests: print("   ", t['titel'])
