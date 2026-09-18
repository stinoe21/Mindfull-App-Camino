import type { ReactNode } from "react";

/** De kop van elke pagina: een label, een grote titel en één zin uitleg. */
export function Pagina({ label, titel, uitleg, rechts, children }: { label: string; titel: string; uitleg: string; rechts?: ReactNode; children: ReactNode }) {
  return (
    <main className="pagina">
      <div className="kop">
        <div className="kop__tekst">
          <span className="chip">{label}</span>
          <h1>{titel}</h1>
          <p className="kop__uitleg">{uitleg}</p>
        </div>
        {rechts}
      </div>
      {children}
    </main>
  );
}

export function Kaart({ titel, uitleg, children }: { titel: string; uitleg?: string; children: ReactNode }) {
  return (
    <section className="kaart">
      <h2>{titel}</h2>
      {uitleg ? <p className="kaart__uitleg">{uitleg}</p> : null}
      {children}
    </section>
  );
}

export function Tegel({ waarde, naam, toelichting }: { waarde: string; naam: string; toelichting?: string }) {
  return (
    <div className="tegel">
      <span className="tegel__waarde">{waarde}</span>
      <span className="tegel__naam">{naam}</span>
      {toelichting ? <span className="tegel__toelichting">{toelichting}</span> : null}
    </div>
  );
}
