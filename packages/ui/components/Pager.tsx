// Pager: kaarten die je horizontaal swipet, één per scherm, met stippen
// eronder die bijhouden waar je bent. De volgende kaart piept aan de rechter
// rand, zodat je ziet dat er meer is.
//
// Voor de tips van Houvast (Stijn, 14 september 2026): vijf tips onder elkaar
// waren een lap tekst; één tip per scherm met "2 van 5" leest als een stapel
// handvatten. De stippen zijn dezelfde vorm als die van de onboarding en de
// check-in (OnboardingVoortgang).
//
// Techniek: een ScrollView met snapToInterval, geen dependency. De breedte
// komt uit onLayout, dus de pager werkt in elke container.

import { Children, useState, type ReactNode } from "react";
import { ScrollView, View, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";

import { colors, radius, space } from "../tokens/tokens.ts";

export type PagerProps = {
  /** Eén kind per pagina; een geneste lijst (map) wordt platgeslagen. */
  children: ReactNode;
  /** Hoeveel van de volgende kaart er aan de rand piept. Standaard space[6]. */
  piep?: number;
  /** Gelijk aan de velvulling, zodat de pager tot de rand van het vel doorloopt. */
  bleed?: number;
  /** Wordt aangeroepen zodra een andere pagina in beeld staat. */
  onPagina?: (index: number) => void;
};

export function Pager({ children, piep = space[6], bleed = space[5], onPagina }: PagerProps) {
  const [breedte, zetBreedte] = useState(0);
  const [huidig, zetHuidig] = useState(0);
  const paginas = Children.toArray(children);
  const stap = space[3];
  // De pagina is de volle breedte van het vel min de piep van de volgende kaart.
  const paginaBreedte = Math.max(0, breedte - bleed * 2 - piep);

  const bijScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!paginaBreedte) return;
    const index = Math.round(e.nativeEvent.contentOffset.x / (paginaBreedte + stap));
    const begrensd = Math.min(paginas.length - 1, Math.max(0, index));
    if (begrensd !== huidig) {
      zetHuidig(begrensd);
      onPagina?.(begrensd);
    }
  };

  return (
    <View style={{ gap: space[4] }} onLayout={(e) => zetBreedte(e.nativeEvent.layout.width)}>
      {breedte ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={paginaBreedte + stap}
          snapToAlignment="start"
          // Expliciet op nul: zonder deze prop stond de pager bij het openen via een
          // link soms op de een na laatste kaart (iOS, snapToInterval).
          contentOffset={{ x: 0, y: 0 }}
          decelerationRate="fast"
          scrollEventThrottle={16}
          onScroll={bijScroll}
          onMomentumScrollEnd={bijScroll}
          style={{ marginHorizontal: -bleed }}
          contentContainerStyle={{ paddingHorizontal: bleed, gap: stap, alignItems: "stretch" }}
        >
          {paginas.map((kind, i) => (
            <View key={i} style={{ width: paginaBreedte }}>
              {kind}
            </View>
          ))}
        </ScrollView>
      ) : null}
      {paginas.length > 1 ? (
        <View style={{ flexDirection: "row", justifyContent: "center", gap: space[2] }} accessibilityLabel={`${huidig + 1} / ${paginas.length}`}>
          {paginas.map((_, i) => (
            <View
              key={i}
              style={{
                width: i === huidig ? space[5] : space[2],
                height: space[2],
                borderRadius: radius.pill,
                backgroundColor: i === huidig ? colors.brandDefault : colors.borderDefault,
              }}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}
