# Content grid

```jsx
<ContentGrid>
  <ContentCard full tone="primary" label="VANDAAG" title="Het mentale weerbericht" />
  <ContentCard tone="purple" label="CHALLENGE" title="Weerpraatje" />
  <ContentCard tone="sun" label="TIP" title="Beter slapen" />
  <ContentCard tone="white" label="BRON: MIND" title="Piekeren doorbreken" />
</ContentGrid>
```

Two equal columns, one shared row height, gutter 12. A block is either one
column or a full-width row (`full`) — nothing else. Tones are the standard card
fills. Use this instead of a mosaic layout or a horizontal carousel: the rhythm
stays calm and nothing is hidden off-screen.
