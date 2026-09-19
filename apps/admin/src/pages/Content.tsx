import { Kaart, Pagina } from "../components/Pagina.tsx";
import type { Rol } from "../lib/sessie.ts";

export function Content({ rol }: { rol: Rol }) {
  return (
    <Pagina label="Content" titel="Tips in de app zetten" uitleg="Hier schrijft MIND tips bij een onderwerp. Na het publiceren staan ze in de app, zonder nieuwe versie in de stores.">
      <Kaart titel="Wordt nu gebouwd" uitleg={`Je bent ingelogd als ${rol}. Schrijven en publiceren kan met de rol redacteur of beheerder.`}>{null}</Kaart>
    </Pagina>
  );
}
