import { useEffect, useState } from "react";

import { Bovenbalk } from "./components/Bovenbalk.tsx";
import { padUitAdres, type Pad } from "./lib/paginas.ts";
import { useSessie } from "./lib/sessie.ts";
import { Inloggen } from "./pages/Inloggen.tsx";
import { Fout, GeenToegang, Laden, NietIngesteld } from "./pages/Meldingen.tsx";
import { OverDeCijfers } from "./pages/OverDeCijfers.tsx";
import { Overzicht } from "./pages/Overzicht.tsx";
import { Volgt } from "./pages/Volgt.tsx";

function usePad(): Pad {
  const [pad, zetPad] = useState<Pad>(() => padUitAdres(window.location.hash));
  useEffect(() => {
    const volg = () => zetPad(padUitAdres(window.location.hash));
    window.addEventListener("hashchange", volg);
    return () => window.removeEventListener("hashchange", volg);
  }, []);
  return pad;
}

export function App() {
  const stand = useSessie();
  const pad = usePad();

  if (stand.fase === "laden") return <Laden />;
  if (stand.fase === "niet-ingesteld") return <NietIngesteld />;
  if (stand.fase === "uitgelogd") return <Inloggen />;
  if (stand.fase === "geen-toegang") return <GeenToegang email={stand.email} />;
  if (stand.fase === "fout") return <Fout />;

  return (
    <>
      <Bovenbalk actief={pad} email={stand.email} rol={stand.rol} />
      {pad === "overzicht" ? <Overzicht /> : pad === "cijfers" ? <OverDeCijfers /> : <Volgt pad={pad} />}
    </>
  );
}
