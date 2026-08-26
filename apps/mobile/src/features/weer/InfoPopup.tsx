// De popup achter het info-icoon: een gedimde achtergrond met een witte
// kaart erbovenop, duidelijk gescheiden van het scherm eronder. Gedeeld
// door de weerbericht-intro en het anonimiteitsscherm, zodat het i'tje
// overal hetzelfde doet.
//
// Het design system heeft nog geen overlaypatroon (HERKOMST.md noemt de
// tips-overlay als nog te ontwerpen). Dit is dus het eerste, bewust klein
// gehouden: Modal uit react-native, een Card en een Button, allemaal
// bestaand. Komt er een ontworpen overlay uit Figma, dan volgt dit bestand.

import { Modal, Pressable, View } from "react-native";

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
    <Modal visible={zichtbaar} transparent animationType="fade" onRequestClose={onSluiten}>
      {/* De dim is een aparte laag onder de kaart: opacity op de laag zelf,
          zodat de kaart erboven op volle sterkte blijft. Tikken ernaast sluit. */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Sluiten"
        onPress={onSluiten}
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
      <View
        pointerEvents="box-none"
        style={{ flex: 1, justifyContent: "center", padding: space[6] }}
      >
        <Card tone="white">
          <AppText rol="h3">{kop}</AppText>
          {children}
          <Button label="Sluiten" variant="secondary" onPress={onSluiten} style={{ marginTop: space[2] }} />
        </Card>
      </View>
    </Modal>
  );
}
