import { Kaart, Pagina } from "../components/Pagina.tsx";

const WAT: Record<string, { titel: string; uitleg: string; komt: string }> = {
  weer: { titel: "Mentaal weer", uitleg: "Het mentale weer van Nederland: het verloop per dag, de verdeling over de vijf weerbeelden, het patroon over de uren en het beeld per provincie.", komt: "Het verloop per dag, de verdeling, het uurpatroon en de provincies. Een uur dat ver boven de basislijn piekt valt hier op." },
  gebruik: { titel: "Gebruik", uitleg: "Waar mensen afhaken en wat ze gebruiken: de onboarding, de check-in, en de meest geopende tips, gidsen, challenges en zelftests.", komt: "De trechter van de onboarding, check-in gestart tegenover afgerond, de meest geopende content, en op welke dag mensen een challenge loslaten." },
  hulplijn: { titel: "Hulplijn", uitleg: "Hoe vaak de Hulplijn geopend wordt en via welk kanaal. Kleine aantallen staan er als minder dan 10.", komt: "Geopend per dag, en de verdeling over bellen, WhatsApp, chat, mail, de Luisterlijn en 113." },
  techniek: { titel: "Techniek", uitleg: "Of de app doet wat hij moet doen. Een dag waarop het insturen van het weer vaak mislukt, hoort hier bovenaan te staan.", komt: "Het resultaat van het insturen per dag: gelukt, al bijgedragen, mislukt, niet verbonden en niet ingelogd." },
};

export function Volgt({ pad }: { pad: keyof typeof WAT }) {
  const p = WAT[pad];
  return (
    <Pagina label={p.titel} titel={p.titel} uitleg={p.uitleg}>
      <Kaart titel="Komt in de volgende stap" uitleg={p.komt}>{null}</Kaart>
    </Pagina>
  );
}
