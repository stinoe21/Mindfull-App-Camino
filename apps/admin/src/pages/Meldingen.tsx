import { logUit } from "../lib/sessie.ts";

export function Laden() {
  return <main className="smal"><p className="kop__uitleg" role="status">Even kijken wie je bent.</p></main>;
}

export function NietIngesteld() {
  return (
    <main className="smal">
      <span className="chip">Beheer</span>
      <h1>De omgeving is niet ingevuld</h1>
      <p className="kop__uitleg">Het beheer weet niet met welk project het moet praten. Vul <code>VITE_SUPABASE_URL</code> en <code>VITE_SUPABASE_PUBLISHABLE_KEY</code> in, zie <code>apps/admin/.env.example</code>.</p>
    </main>
  );
}

export function GeenToegang({ email }: { email: string | null }) {
  return (
    <main className="smal">
      <span className="chip">Beheer</span>
      <h1>Je hebt hier geen toegang</h1>
      <p className="kop__uitleg">Je bent ingelogd{email ? ` als ${email}` : ""}, maar dit account heeft geen rol in het beheer. Toegang geeft de eigenaar van de app; er is bewust geen knop voor.</p>
      <button type="button" className="knop" onClick={() => void logUit()}>Uitloggen</button>
    </main>
  );
}

export function Fout() {
  return (
    <main className="smal">
      <span className="chip">Beheer</span>
      <h1>Er ging iets mis</h1>
      <p className="kop__uitleg">Het beheer kon niet nagaan of je toegang hebt. Controleer je verbinding en probeer het opnieuw.</p>
      <div className="rij">
        <button type="button" className="knop" onClick={() => window.location.reload()}>Probeer opnieuw</button>
        <button type="button" className="knop knop--stil" onClick={() => void logUit()}>Uitloggen</button>
      </div>
    </main>
  );
}
