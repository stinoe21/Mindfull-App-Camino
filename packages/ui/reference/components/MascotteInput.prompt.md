The mascot that introduces each **check-in question** — a separate family from `MascotteVlieger`, which carries the seven mood/weather states shown on outcome screens. Source: `/Foundations/Mascotte-Input-states` (552:1558).

```jsx
<MascotteInput state="temperatuur" />   // Hoe is de temperatuur vandaag?
<MascotteInput state="wind" />          // Hoe waait 'ie vandaag?
<MascotteInput state="zicht" />         // Hoe ver kun je kijken?
<MascotteInput state="wisselvallig" />  // Hoe wisselvallig is je weer vandaag?
```

Use the input state on the four check-in steps and the mood state everywhere else; don't substitute one for the other. Pass `assetBase` when the page is not at the design-system root (e.g. `assetBase="../../"`).

**Asset gap:** the `zicht` artwork was never delivered as a file — it currently falls back to `mascot-main.svg`. Replace `assets/mascot/mascot-zicht.png` when the export arrives and point `SRC.zicht` at it.
