Pill-shaped button, MIND's only button primitive — used for every CTA in the app, from onboarding to check-in flows.

```jsx
<Button label="Even inchecken" variant="primary" fullWidth />
<Button label="Terug naar dashboard" variant="secondary" fullWidth />
<Button label="Sla vandaag over" variant="link" />
```

Variants: `primary` (lime fill, ink text — main CTA, one per screen), `secondary` (ink outline, transparent fill — secondary action), `link` (no fill/border, petrol text — tertiary/skip action). `fullWidth` stretches to the card/screen edge (used on most screens); inline buttons (e.g. "Kom in contact") size to content. No hover/press states are defined in source — keep interactions subtle (slight opacity dim is a reasonable default).
