// Content: MIND schrijft tips bij een onderwerp en publiceert ze zelf. Na het
// publiceren haalt de app ze op bij de volgende keer openen, zonder nieuwe
// versie in de stores. Zie docs/datamodel.md, tabel content_tips.

import { useCallback, useEffect, useState, type FormEvent } from "react";

import { Aanleveren } from "../components/Aanleveren.tsx";
import { Kaart, Pagina } from "../components/Pagina.tsx";
import { TipVoorbeeld } from "../components/TipVoorbeeld.tsx";
import { ONDERWERPEN } from "../lib/onderwerpen.ts";
import type { Rol } from "../lib/sessie.ts";
import { LEEG, bewaarTip, gooiWeg, haalTips, naarBlokken, naarInvoer, zetStatus, type Invoer, type Status, type Tip } from "../lib/tips.ts";

const UITLEG = "Schrijf een tip bij een onderwerp, bekijk hoe hij in de app staat en publiceer hem. Gepubliceerde tips komen in de app achter de tips die er al staan, bij de volgende keer dat iemand de app opent.";
const STATUS_NAAM: Record<Status, string> = { concept: "Concept", gepubliceerd: "Staat in de app", ingetrokken: "Ingetrokken" };
const titelVan = (slug: string) => ONDERWERPEN.find((o) => o.slug === slug)?.titel ?? slug;
const datum = (iso: string) => new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long" });

type Bewerking = { id: string | null; status: Status; invoer: Invoer };

export function Content({ rol }: { rol: Rol }) {
  const magSchrijven = rol !== "analist";
  const [tips, zetTips] = useState<Tip[] | null>(null);
  const [fout, zetFout] = useState<string | null>(null);
  const [open, zetOpen] = useState<Bewerking | null>(null);
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);

  const laad = useCallback(async () => {
    zetFout(null);
    const uit = await haalTips();
    if (uit.ok) zetTips(uit.waarde);
    else zetFout(uit.melding);
  }, []);

  useEffect(() => {
    void laad();
  }, [laad]);

  const wijzig = (deel: Partial<Invoer>) => zetOpen((o) => (o ? { ...o, invoer: { ...o.invoer, ...deel } } : o));

  // Bewaren, en daarna eventueel de status zetten. Alles loopt via de database,
  // die de rol en de inhoud controleert en in gewone taal zegt wat er mis is.
  const voerUit = async (daarna?: Status) => {
    if (!open || bezig) return;
    zetBezig(true);
    zetMelding(null);
    const bewaard = await bewaarTip(open.id, open.invoer);
    if (!bewaard.ok) {
      zetBezig(false);
      return zetMelding(bewaard.melding);
    }
    if (daarna) {
      const gezet = await zetStatus(bewaard.waarde, daarna);
      if (!gezet.ok) {
        zetBezig(false);
        zetOpen({ ...open, id: bewaard.waarde });
        return zetMelding(gezet.melding);
      }
    }
    await laad();
    zetBezig(false);
    zetOpen(null);
  };

  const verwijder = async () => {
    if (!open?.id || bezig) return;
    if (!window.confirm("Deze tip weggooien? Dat kan niet ongedaan worden.")) return;
    zetBezig(true);
    const uit = await gooiWeg(open.id);
    zetBezig(false);
    if (!uit.ok) return zetMelding(uit.melding);
    await laad();
    zetOpen(null);
  };

  if (open) {
    const blokken = naarBlokken(open.invoer);
    const live = open.status === "gepubliceerd";
    const opslaan = (e: FormEvent) => {
      e.preventDefault();
      void voerUit();
    };
    return (
      <Pagina label="Content" titel={!magSchrijven ? "Tip bekijken" : open.id ? "Tip bewerken" : "Nieuwe tip"} uitleg={!magSchrijven ? "Zo komt deze tip in de app te staan. Je kunt hem bekijken, niet wijzigen. Geef je akkoord of je opmerkingen door aan wie de content plaatst." : live ? "Deze tip staat in de app. Wat je bewaart, staat er bij de volgende keer openen." : UITLEG}
        rechts={<button type="button" className="knop knop--stil" onClick={() => zetOpen(null)}>Terug naar de lijst</button>}>
        <div className="kaarten kaarten--breed-smal">
          <Kaart titel="De tip">
            <form className="formulier" onSubmit={opslaan}>
              <fieldset className="velden" disabled={!magSchrijven}>
              <label htmlFor="topic">Onderwerp</label>
              <select id="topic" required value={open.invoer.topic} onChange={(e) => wijzig({ topic: e.target.value })}>
                <option value="">Kies een onderwerp</option>
                {ONDERWERPEN.map((o) => <option key={o.slug} value={o.slug}>{o.titel}</option>)}
              </select>

              <label htmlFor="title">Kop</label>
              <input id="title" required minLength={3} maxLength={120} value={open.invoer.title} onChange={(e) => wijzig({ title: e.target.value })} />

              <label htmlFor="tekst">Tekst</label>
              <textarea id="tekst" required rows={12} value={open.invoer.tekst} onChange={(e) => wijzig({ tekst: e.target.value })} />
              <p className="hulp">Een lege regel begint een nieuwe alinea. Begin regels met een streepje voor een opsomming. Platte tekst: geen opmaak.</p>

              <label htmlFor="linkLabel">Link, als je wilt</label>
              <div className="rij rij--velden">
                <input id="linkLabel" placeholder="Tekst van de link" maxLength={80} value={open.invoer.linkLabel} onChange={(e) => wijzig({ linkLabel: e.target.value })} />
                <input id="linkUrl" type="url" placeholder="https://wijzijnmind.nl/..." maxLength={300} value={open.invoer.linkUrl} onChange={(e) => wijzig({ linkUrl: e.target.value })} />
              </div>

              </fieldset>

              {magSchrijven ? (
                <>
              <p className="hulp hulp--let-op">Noem in een tip geen hulplijn of telefoonnummer. De Hulplijn van MIND en 113 staan al onder elk onderwerp, met een vaste tekst.</p>

              {melding ? <p className="melding" role="alert">{melding}</p> : null}

              <div className="rij">
                {live ? (
                  <>
                    <button type="submit" className="knop" disabled={bezig}>Bewaren, staat direct in de app</button>
                    <button type="button" className="knop knop--rand" disabled={bezig} onClick={() => void voerUit("ingetrokken")}>Uit de app halen</button>
                  </>
                ) : (
                  <>
                    <button type="button" className="knop" disabled={bezig} onClick={() => void voerUit("gepubliceerd")}>Publiceren</button>
                    <button type="submit" className="knop knop--rand" disabled={bezig}>Bewaren als concept</button>
                    {open.id ? <button type="button" className="knop knop--stil" disabled={bezig} onClick={() => void verwijder()}>Weggooien</button> : null}
                  </>
                )}
              </div>
                </>
              ) : (
                <p className="hulp">Status: {STATUS_NAAM[open.status].toLowerCase()}.</p>
              )}
            </form>
          </Kaart>
          <Kaart titel="Zo staat hij in de app" uitleg={open.invoer.topic ? `Onder ${titelVan(open.invoer.topic)}, achter de tips die er al staan.` : "Kies een onderwerp om te zien waar hij komt."}>
            <TipVoorbeeld kop={open.invoer.title} blokken={blokken} />
          </Kaart>
        </div>
      </Pagina>
    );
  }

  const nieuweKnop = magSchrijven ? (
    <button type="button" className="knop" onClick={() => { zetMelding(null); zetOpen({ id: null, status: "concept", invoer: LEEG }); }}>Nieuwe tip</button>
  ) : undefined;

  return (
    <Pagina label="Content" titel={magSchrijven ? "Tips in de app zetten" : "Tips van MIND in de app"} uitleg={magSchrijven ? UITLEG : "Hier staan de tips die MIND bij een onderwerp in de app heeft gezet, en wat er klaarstaat. Open een tip om te zien hoe hij in de app komt te staan."} rechts={nieuweKnop}>
      <Aanleveren />
      {fout ? (
        <Kaart titel="De tips konden niet geladen worden" uitleg={fout}>
          <div className="rij"><button type="button" className="knop" onClick={() => void laad()}>Probeer opnieuw</button></div>
        </Kaart>
      ) : tips === null ? (
        <p className="kop__uitleg" role="status">De tips worden geladen.</p>
      ) : tips.length === 0 ? (
        <Kaart titel="Nog geen tips van MIND" uitleg={magSchrijven ? "De app toont nu alleen de tips die hij zelf bij zich heeft. Schrijf de eerste met Nieuwe tip." : "Er is nog niets geschreven. Schrijven kan met de rol redacteur."}>{null}</Kaart>
      ) : (
        (["gepubliceerd", "concept", "ingetrokken"] as Status[]).map((status) => {
          const rij = tips.filter((t) => t.status === status);
          if (rij.length === 0) return null;
          return (
            <section key={status} className="lijstgroep">
              <p className="sectielabel">{STATUS_NAAM[status]} · {rij.length}</p>
              <ul className="lijst">
                {rij.map((t) => (
                  <li key={t.id}>
                    <button type="button" className="lijst__rij" onClick={() => { zetMelding(null); zetOpen({ id: t.id, status: t.status, invoer: naarInvoer(t) }); }}>
                      <span className={`stip stip--${t.status}`} aria-hidden="true" />
                      <span className="lijst__titel">{t.title}</span>
                      <span className="lijst__meta">{titelVan(t.topic)} · gewijzigd op {datum(t.updated_at)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      )}
    </Pagina>
  );
}
