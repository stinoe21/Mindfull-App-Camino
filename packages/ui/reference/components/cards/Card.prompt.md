Rounded content card (radius 16, 18/20px padding) — MIND's one card shape, recolored by tone instead of restyled per screen.

```jsx
<Card tone="primary"><h3>Het mentale weer van Nederland</h3><p>Rustig met wat mist</p></Card>
```

Tones map to real screen usage: `white` (check-in prompt, personal-outcome tip), `primary`/petrol-50 (collective weerbericht teaser), `purple` (daily quote), `sun`/weather-sun (MIND Hulplijn), `outline` (login fields, search bar — white fill + hairline border instead of a flat tint). Pick the tone by what the card represents, not decoration — a new tone needs a reason.
