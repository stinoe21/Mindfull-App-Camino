// De MIND Hulplijn op elk scherm: een klein chipje rechtsboven, over de hero,
// in dezelfde vorm als de terugknop linksboven. Productprincipe 9 zegt
// systeembreed; sinds 13 september 2026 (Stijn, UX-ronde) is dat letterlijk
// elk scherm, want de kaart onderaan Home en Profiel was op een zware dag
// tijdens de check-in of in Houvast niet te vinden. Hij staat in de root
// layout en verbergt zichzelf op de Hulplijn-pagina zelf.

import { usePathname, useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { TERUGKNOP_MAAT } from "@mind/ui/components/TerugKnop";

export function HulplijnKnop() {
  const router = useRouter();
  const pad = usePathname();
  const insets = useSafeAreaInsets();
  if (pad === "/hulplijn" || pad.startsWith("/_dev")) return null;
  return (
    // Dezelfde marge als de terugknop in ScreenCanvas (KOP_MARGE = space[2]).
    <View pointerEvents="box-none" style={{ position: "absolute", top: insets.top + space[2], right: space[3] }}>
      <Pressable
        onPress={() => router.push("/hulplijn")}
        accessibilityRole="button"
        accessibilityLabel="MIND Hulplijn"
        hitSlop={space[1]}
        style={({ pressed }) => ({
          height: TERUGKNOP_MAAT,
          paddingHorizontal: space[4],
          borderRadius: radius.pill,
          backgroundColor: colors.surfaceBackground,
          borderWidth: 1,
          borderColor: colors.borderDefault,
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <AppText rol="labelCaption" kleur="brand">Hulplijn</AppText>
      </Pressable>
    </View>
  );
}
