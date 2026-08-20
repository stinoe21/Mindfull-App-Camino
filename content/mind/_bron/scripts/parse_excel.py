import zipfile, json, re, sys
from xml.etree import ElementTree as ET
NS='{http://schemas.openxmlformats.org/spreadsheetml/2006/main}'
RNS='{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
z=zipfile.ZipFile(sys.argv[1])
shared=[]
if 'xl/sharedStrings.xml' in z.namelist():
    for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall(NS+'si'):
        shared.append(''.join(t.text or '' for t in si.iter(NS+'t')))
wb=ET.fromstring(z.read('xl/workbook.xml'))
relmap={r.get('Id'):r.get('Target') for r in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
def colnum(ref):
    n=0
    for ch in re.match(r'([A-Z]+)',ref).group(1): n=n*26+(ord(ch)-64)
    return n-1
out={}
for sh in wb.find(NS+'sheets'):
    name=sh.get('name'); t=relmap[sh.get(RNS+'id')]
    t=t if t.startswith('xl/') else 'xl/'+t.lstrip('/')
    rp=t.replace('worksheets/','worksheets/_rels/')+'.rels'
    hl={}
    if rp in z.namelist():
        hl={r.get('Id'):r.get('Target') for r in ET.fromstring(z.read(rp))}
    ws=ET.fromstring(z.read(t))
    links={h.get('ref'):hl.get(h.get(RNS+'id'),'') for h in ws.iter(NS+'hyperlink')}
    rows=[]
    for row in ws.iter(NS+'row'):
        cells={}
        for c in row.findall(NS+'c'):
            ref=c.get('r'); ci=colnum(ref)
            v=c.find(NS+'v'); ise=c.find(NS+'is'); val=''
            if c.get('t')=='s' and v is not None: val=shared[int(v.text)]
            elif ise is not None: val=''.join(x.text or '' for x in ise.iter(NS+'t'))
            elif v is not None: val=v.text or ''
            val=val.strip()
            # URL uit hyperlink wint, anders uit celtekst
            url=links.get(ref,'')
            if not url and val.startswith('http'): url=val.split()[0]
            cells[ci]={'text':val,'url':url}
        if any(c['text'] or c['url'] for c in cells.values()):
            rows.append({'r':int(row.get('r')),'c':{str(k):v for k,v in cells.items()}})
    out[name]=rows
json.dump(out, open(sys.argv[2],'w'), ensure_ascii=False, indent=1)
print({k:len(v) for k,v in out.items()})
