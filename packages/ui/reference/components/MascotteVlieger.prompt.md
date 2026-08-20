Kite mascot ("Vlieger") — MIND's brand character, expresses the app's mood states with body language. Used on dashboard hero, check-in confirmations, weather outcomes and empty/onboarding states.

```jsx
<MascotteVlieger state="zonnig" style={{width:120,height:81}} />
```

States: `default`, `zonnig` (sunny), `wolken` (cloudy), `mist`, `wind`, `regen` (rain), `intake` (onboarding pose). Never invent new poses — pair with the matching `BackgroundHeroGradient`/`BackgroundHeroBand` state for a coherent weather moment.
