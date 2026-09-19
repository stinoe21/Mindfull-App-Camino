import { PAGINAS, type Pad } from "../lib/paginas.ts";
import { logUit, type Rol } from "../lib/sessie.ts";

export function Bovenbalk({ actief, email, rol }: { actief: Pad; email: string | null; rol: Rol }) {
  return (
    <header className="balk">
      <a className="balk__merk" href="#/dashboard">
        <span className="balk__stip" aria-hidden="true" />
        Weertje beheer
      </a>
      <nav className="pillen" aria-label="Pagina's">
        {PAGINAS.map((p) => (
          <a key={p.pad} href={`#/${p.pad}`} className={p.pad === actief ? "pil pil--actief" : "pil"} aria-current={p.pad === actief ? "page" : undefined}>
            {p.titel}
          </a>
        ))}
      </nav>
      <div className="balk__wie">
        <span className="balk__account" title={email ?? undefined}>{rol}</span>
        <button type="button" className="knop knop--stil" onClick={() => void logUit()}>Uitloggen</button>
      </div>
    </header>
  );
}
