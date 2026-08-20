import json, os, re
SP=os.path.dirname(os.path.abspath(__file__))
W=json.load(open(f'{SP}/worklist.json'))
D=f'{SP}/staging'
OPG="2026-08-20"

WAARSCHUWING=(
"> **Let op, dit is een interne naslag.** MIND schrijft bij deze lijsten: "
"\"linkjes niet verspreiden, dit is alleen om in te kijken, graag mensen verwijzen naar de aanmeldpagina\". "
"De dagpagina's staan wel publiek op wijzijnmind.nl, maar ze staan bewust niet in de navigatie: "
"je hoort je aan te melden en de onderdelen per mail te krijgen. "
"Of we deze content in de app mogen overnemen is een vraag voor MIND en staat nog niet in `docs/scope.md`.\n")

def rel(frm,to):
    return os.path.relpath(to, os.path.dirname(frm)).replace(os.sep,'/')

def title_of(pad):
    f=os.path.join(D,pad)
    if not os.path.exists(f): return None
    m=re.search(r'^title:\s*"(.*)"$', open(f,encoding='utf-8').read(), re.M)
    return m.group(1) if m else None

# ---------- 1. challenges en themaspecials ----------
out=['---','title: "Challenges en themaspecials: volledige programma\'s"',
     f'bron: Overzicht voorlichtingsmaterialen voor back2being.xlsx (tabbladen Challenges en Themaspecials)',
     f'opgehaald: {OPG}','---','',
     '# Challenges en themaspecials',''  ,
     'De volgorde van de dagen staat alleen in het Excel van MIND, niet op de website.',
     'Dit bestand legt die volgorde vast en linkt naar de opgehaalde pagina.','',
     WAARSCHUWING]
mypath='psychische-klachten/challenges/PROGRAMMAS.md'
for soort,label in (('challenge','Challenges'),('themaspecial','Themaspecials')):
    out.append(f'## {label}\n')
    for p in W['programs']:
        if p['soort']!=soort: continue
        out.append(f"### {p['titel']}\n")
        out.append(f"- Aantal onderdelen: {len(p['dagen'])}")
        if p['aanmeldpagina']:
            out.append(f"- Aanmeldpagina: {p['aanmeldpagina']}")
        out.append('')
        out.append('| # | Onderdeel | Bestand |')
        out.append('|---|---|---|')
        for i,d in enumerate(p['dagen'],1):
            if d['pad'] and os.path.exists(os.path.join(D,d['pad'])):
                link=f"[{os.path.basename(d['pad'])}]({rel(mypath,d['pad'])})"
            else:
                link=f"niet opgehaald: {d['url']}"
            out.append(f"| {i} | {d['titel']} | {link} |")
        out.append('')
os.makedirs(os.path.dirname(f'{D}/{mypath}'),exist_ok=True)
open(f'{D}/{mypath}','w',encoding='utf-8').write('\n'.join(out).rstrip()+'\n')

# ---------- 2. online gidsen ----------
mypath='psychische-klachten/flyers-en-informatie/GIDSEN.md'
out=['---','title: "Online gidsen: volledige lijst"',
     'bron: Overzicht voorlichtingsmaterialen voor back2being.xlsx (tabblad Online gidsen)',
     f'opgehaald: {OPG}','---','','# Online gidsen','',
     'Elke gids heeft een leespagina en een aanmeldpagina. Sommige zijn alleen een pdf,',
     'die zijn niet als Markdown opgehaald.','', WAARSCHUWING,
     '| Onderwerp | Bestand | Aanmeldpagina | Opmerking |','|---|---|---|---|']
for g in W['gidsen']:
    pad=g['pad']
    if pad and os.path.exists(os.path.join(D,pad)):
        cel=f"[{os.path.basename(pad)}]({rel(mypath,pad)})"
    elif '.pdf' in (g['url'] or '').lower():
        cel=f"pdf: {g['url']}"
    else:
        cel=g['url'] or ''
    out.append(f"| {g['titel']} | {cel} | {g['aanmeldpagina']} | {g['opmerking']} |")
open(f'{D}/{mypath}','w',encoding='utf-8').write('\n'.join(out).rstrip()+'\n')

# ---------- 3. zelftests ----------
mypath='psychische-klachten/zelftests-overzicht.md'
out=['---','title: "Zelftests: volledige lijst"',
     'bron: Overzicht voorlichtingsmaterialen voor back2being.xlsx (tabblad Zelftesten)',
     f'opgehaald: {OPG}','---','','# Zelftests','',
     'Twaalf tests. Ze draaien allemaal op formulier.wijzijnmind.nl en de vragen worden',
     'met JavaScript ingeladen, dus de inhoud is niet als Markdown op te halen.',
     'Alleen de introtekst staat op de pagina zelf.','',
     'De bestaande overzichtspagina staat in [zelftests.md](zelftests.md) en noemt er maar drie.','',
     '| Test | Link |','|---|---|']
for t in W['tests']:
    out.append(f"| {t['titel']} | {t['url']} |")
open(f'{D}/{mypath}','w',encoding='utf-8').write('\n'.join(out).rstrip()+'\n')
print("overzichten geschreven")
