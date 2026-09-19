import { useState, type FormEvent } from "react";

import { supabase } from "../lib/supabase.ts";

export function Inloggen() {
  const [email, zetEmail] = useState("");
  const [wachtwoord, zetWachtwoord] = useState("");
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);

  const logIn = async (e: FormEvent) => {
    e.preventDefault();
    if (!supabase || bezig) return;
    zetBezig(true);
    zetMelding(null);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: wachtwoord });
    zetBezig(false);
    // Op de foutcode, niet op de Engelse tekst. Bij succes neemt useSessie het over.
    if (error) zetMelding(error.code === "invalid_credentials" ? "Deze combinatie van e-mailadres en wachtwoord klopt niet." : "Inloggen lukte niet. Probeer het opnieuw.");
  };

  return (
    <main className="smal">
      <span className="chip">Beheer</span>
      <h1>Weertje beheer</h1>
      <p className="kop__uitleg">Voor medewerkers van MIND. Je logt in met je eigen account; of je hier in mag, staat bij de eigenaar van de app.</p>
      <form className="formulier" onSubmit={logIn}>
        <label htmlFor="email">E-mailadres</label>
        <input id="email" type="email" autoComplete="username" required value={email} onChange={(e) => zetEmail(e.target.value)} />
        <label htmlFor="wachtwoord">Wachtwoord</label>
        <input id="wachtwoord" type="password" autoComplete="current-password" required value={wachtwoord} onChange={(e) => zetWachtwoord(e.target.value)} />
        {melding ? <p className="melding" role="alert">{melding}</p> : null}
        <button type="submit" className="knop" disabled={bezig}>{bezig ? "Bezig met inloggen" : "Inloggen"}</button>
      </form>
    </main>
  );
}
