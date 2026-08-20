import os, re, json
SP=os.path.dirname(os.path.abspath(__file__))
D=f'{SP}/staging'
W=json.load(open(f'{SP}/worklist.json'))

def title_of(f):
    try:
        m=re.search(r'^title:\s*"(.*)"$', open(f,encoding='utf-8').read(2000), re.M)
        return m.group(1) if m else os.path.basename(f)[:-3]
    except Exception:
        return os.path.basename(f)[:-3]

paths=[]
for root,dirs,files in os.walk(D):
    dirs.sort()
    for fn in sorted(files):
        if fn.endswith('.md') and fn not in ('INDEX.md','LEESMIJ.md'):
            paths.append(os.path.relpath(os.path.join(root,fn),D).replace(os.sep,'/'))
paths.sort()

groups={}
for p in paths:
    top=p.split('/')[0] if '/' in p else '(los)'
    groups.setdefault(top,[]).append(p)

lines=['# MIND contentbibliotheek','',
 f'{len(paths)} pagina\'s. Bron: wijzijnmind.nl, content van Stichting MIND.','',
 'Gecureerd op 2026-08-13 (259 pagina\'s) en aangevuld op 2026-08-20 met 77 pagina\'s',
 'die uit het Excel van MIND bleken te ontbreken. Zie [LEESMIJ.md](LEESMIJ.md).','',
 '## Begin hier','',
 '- [psychische-klachten/challenges/PROGRAMMAS.md](psychische-klachten/challenges/PROGRAMMAS.md) alle challenges en themaspecials, met hun dagen op volgorde',
 '- [psychische-klachten/flyers-en-informatie/GIDSEN.md](psychische-klachten/flyers-en-informatie/GIDSEN.md) alle 46 online gidsen',
 '- [psychische-klachten/zelftests-overzicht.md](psychische-klachten/zelftests-overzicht.md) alle 12 zelftests','',
 '## Volledige inhoud','']
for top in sorted(groups):
    lines.append(f'### {top}\n')
    for p in groups[top]:
        lines.append(f'- [{title_of(os.path.join(D,p))}]({p})')
    lines.append('')
open(f'{D}/INDEX.md','w',encoding='utf-8').write('\n'.join(lines).rstrip()+'\n')
print("INDEX.md:", len(paths), "pagina's")
