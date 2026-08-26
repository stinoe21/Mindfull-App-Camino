// De popup achter het info-icoon: een gedimde achtergrond met een witte
// kaart erbovenop, duidelijk gescheiden van het scherm eronder. Gedeeld
// door de weerbericht-intro en het anonimiteitsscherm, zodat het i'tje
// overal hetzelfde doet.
//
// Het design system heeft nog geen overlaypatroon (HERKOMST.md noemt de
// tips-overlay als nog te ontwerpen). Dit is dus het eerste, bewust klein
// gehouden: Modal uit react-native, een Card en een Button, allemaal
// bestaand. Komt er een ontworpen overlay uit Figma, dan volgt dit bestand.
//
// Twee dingen die niet weg mogen: de inhoud scrolt (bij grote systeemletters
// valt de Sluiten-knop anders buiten beeld en op iOS is er geen backknop), en
// de dimlaag is onzichtbaar voor VoiceOver en TalkBack, zodat "Sluiten" er
// een keer staat en niet als knop ter grootte van het scherm.

import { Modal, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

export type InfoPopupProps = {
  zichtbaar: boolean;
  kop: string;
  onSluiten: () => void;
  children: React.ReactNode;
};

export function InfoPopup({ zichtbaar, kop, onSluiten, children }: InfoPopupProps) {
  return (
    <Modal
      visible={zichtbaar}
      transparent
      animationType="fade"
      onRequestClose={onSluiten}
      statusBarTranslucent
      navigationBarTranslucent
    >
      {/* De dim is een aparte laag onder de kaart: opacity op de laag zelf,
          zodat de kaart erboven op volle sterkte blijft. Tikken ernaast sluit.
          Er is nog geen scrim-token; baseInk op 0.4 is een voorlopige keuze,
          gemeld bij de design-eigenaar. */}
      <Pressable
        onPress={onSluiten}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: palette.baseInk,
          opacity: 0.4,
        }}
      />
      <SafeAreaView pointerEvents="box-none" style={{ flex: 1 }}>
        <ScrollView
          pointerEvents="box-none"
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: space[6] }}
          keyboardShouldPersistTaps="handled"
        >
          <View pointerEvents="box-none" accessibilityViewIsModal>
            <Card tone="white">
              <AppText rol="h3">{kop}</AppText>
              {children}
              <Button label="Sluiten" variant="secondary" onPress={onSluiten} style={{ marginTop: space[2] }} />
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}
