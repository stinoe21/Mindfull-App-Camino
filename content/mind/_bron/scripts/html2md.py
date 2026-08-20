"""Zet een wijzijnmind.nl-artikelpagina om naar Markdown. Alleen stdlib."""
import re, html
from html.parser import HTMLParser
from urllib.parse import urljoin

BASE='https://wijzijnmind.nl'
SKIP={'script','style','noscript','svg','form','button','select','iframe'}
BLOCK={'p','div','section','article','ul','ol','li','h1','h2','h3','h4','h5','h6',
       'table','tr','blockquote','figure','figcaption','label','br','hr'}

class Md(HTMLParser):
    def __init__(self, base_url):
        super().__init__(convert_charrefs=True)
        self.base=base_url
        self.out=[]          # regels
        self.buf=[]          # huidige inline-buffer
        self.skip=0
        self.liststack=[]    # ('ul'|'ol', teller)
        self.href=None
        self.linktext=[]
        self.incell=False
        self.row=[]
        self.tables=[]

    # ---- helpers ----
    def w(self,s):
        (self.linktext if self.href is not None else self.buf).append(s)

    def flush(self, prefix=''):
        t=''.join(self.buf)
        self.buf=[]
        t=t.replace(' ',' ')
        t=re.sub(r'[ \t]+',' ',t)
        t=re.sub(r' *\n *','\n',t).strip()
        if not t: return
        if prefix: t=prefix+t
        self.out.append(t)

    # ---- tags ----
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag in SKIP: self.skip+=1; return
        if self.skip: return
        if tag=='br': self.w('  \n'); return
        if tag=='hr': self.flush(); self.out.append('---'); return
        if tag=='img':
            src=a.get('src','')
            if src:
                alt=(a.get('alt') or '').strip()
                self.flush()
                self.out.append(f'![{alt}]({urljoin(self.base,src)})')
            return
        if tag=='a':
            self.flush_inline_keep()
            self.href=a.get('href',''); self.linktext=[]; return
        if tag in ('strong','b'): self.w('**'); return
        if tag in ('em','i'):     self.w('_');  return
        if tag in ('ul','ol'):
            self.flush(); self.liststack.append([tag,0]); return
        if tag=='li':
            self.flush(); return
        if tag in ('h1','h2','h3','h4','h5','h6'):
            self.flush(); return
        if tag=='table': self.flush(); self.tables.append([]); return
        if tag=='tr' and self.tables: self.row=[]; return
        if tag in ('td','th') and self.tables: self.incell=True; self.buf=[]; return
        if tag in BLOCK: self.flush()

    def flush_inline_keep(self):
        pass

    VOID={'br','hr','img','meta','link','input','source'}

    def handle_endtag(self,tag):
        if tag in self.VOID: return
        if tag in SKIP:
            self.skip=max(0,self.skip-1); return
        if self.skip: return
        if tag=='a' and self.href is not None:
            txt=''.join(self.linktext).strip()
            h=self.href; self.href=None; self.linktext=[]
            if not txt: return
            if not h or h.startswith('#') or h.startswith('javascript'):
                self.buf.append(txt)
            else:
                self.buf.append(f'[{txt}]({urljoin(self.base,h)})')
            return
        if tag in ('strong','b'): self.w('**'); return
        if tag in ('em','i'):     self.w('_');  return
        if tag in ('td','th') and self.tables:
            self.row.append(''.join(self.buf).replace(' ',' ').strip()); self.buf=[]; self.incell=False; return
        if tag=='tr' and self.tables:
            if any(self.row): self.tables[-1].append(self.row)
            self.row=[]; return
        if tag=='table' and self.tables:
            rows=self.tables.pop()
            if rows:
                w=max(len(r) for r in rows)
                rows=[r+['']*(w-len(r)) for r in rows]
                self.out.append('| '+' | '.join(rows[0])+' |')
                self.out.append('|'+'---|'*w)
                for r in rows[1:]: self.out.append('| '+' | '.join(r)+' |')
            return
        if tag=='li':
            if self.liststack:
                kind,n=self.liststack[-1]
                if kind=='ol':
                    self.liststack[-1][1]=n+1
                    self.flush(f'{n+1}.  ')
                else:
                    self.flush('*   ')
            else:
                self.flush('*   ')
            return
        if tag in ('ul','ol'):
            self.flush()
            if self.liststack: self.liststack.pop()
            return
        if tag in ('h1','h2','h3','h4','h5','h6'):
            self.flush('#'*int(tag[1])+' '); return
        if tag in BLOCK: self.flush()

    def handle_data(self,d):
        if self.skip: return
        if not d: return
        self.w(d)

    def result(self):
        self.flush()
        lines=[]
        for b in self.out:
            b=re.sub(r'\*\*\s*\*\*','',b)
            b=re.sub(r'\n{3,}','\n\n',b)
            if b.strip() and b.strip() not in ('#','##','###','####'):
                lines.append(b)
        # dedupe opeenvolgende identieke blokken
        res=[]
        for b in lines:
            if res and res[-1]==b: continue
            res.append(b)
        return '\n\n'.join(res)

def convert(html_text, url, opgehaald):
    m=re.search(r'<article\b.*?</article>', html_text, re.S)
    frag=m.group(0) if m else html_text
    tm=re.search(r'<title>(.*?)</title>', html_text, re.S)
    title=html.unescape(tm.group(1)).strip() if tm else ''
    title=re.sub(r'\s*\|\s*MIND\s*$','',title).strip()
    p=Md(url); p.feed(frag); body=p.result()
    # h1 uit body halen als die het title dupliceert, we zetten hem zelf bovenaan
    body=re.sub(r'^#\s+'+re.escape(title)+r'\s*\n+','',body)
    fm=f'---\ntitle: "{title}"\nbron: {url}\nopgehaald: {opgehaald}\n---\n\n# {title}\n\n'
    return fm+body.strip()+'\n'
