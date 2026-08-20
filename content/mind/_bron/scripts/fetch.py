import json, os, time, subprocess, importlib.util, sys
SP=os.path.dirname(os.path.abspath(__file__))
spec=importlib.util.spec_from_file_location("h2m",f"{SP}/html2md.py")
h2m=importlib.util.module_from_spec(spec); spec.loader.exec_module(h2m)
W=json.load(open(f'{SP}/worklist.json'))
DEST=f'{SP}/staging'
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36"
OPGEHAALD="2026-08-20"

targets=[]
for p in W['programs']:
    for d in p['dagen']:
        if d['pad']: targets.append((d['url'], d['pad']))
for g in W['gidsen']:
    if g['pad']: targets.append((g['url'], g['pad']))
for v in W['verhalen']:
    if v['pad']: targets.append((v['url'], v['pad']))

# alleen wat nog niet bestaat
todo=[(u,p) for u,p in targets if not os.path.exists(os.path.join(DEST,p))]
seen=set(); uniq=[]
for u,p in todo:
    if p in seen: continue
    seen.add(p); uniq.append((u,p))
print(f"op te halen: {len(uniq)}")

ok=fail=0; errors=[]
for i,(url,pad) in enumerate(uniq,1):
    r=subprocess.run(['curl','-sS','-A',UA,'-L','--max-time','30','-w','\n%{http_code}',url],
                     capture_output=True, text=True)
    body=r.stdout
    code=body.rsplit('\n',1)[-1].strip() if '\n' in body else ''
    html=body.rsplit('\n',1)[0]
    if code!='200' or len(html)<500:
        fail+=1; errors.append((code,url)); print(f"  [{i}/{len(uniq)}] FOUT {code} {url}"); continue
    md=h2m.convert(html,url,OPGEHAALD)
    if len(md)<250:
        fail+=1; errors.append(('leeg',url)); print(f"  [{i}/{len(uniq)}] LEEG {url}"); continue
    full=os.path.join(DEST,pad)
    os.makedirs(os.path.dirname(full),exist_ok=True)
    open(full,'w',encoding='utf-8').write(md)
    ok+=1
    print(f"  [{i}/{len(uniq)}] ok {len(md):6d}b  {pad}")
    time.sleep(0.4)

print(f"\nklaar: {ok} opgehaald, {fail} mislukt")
for c,u in errors: print(f"  {c}  {u}")
