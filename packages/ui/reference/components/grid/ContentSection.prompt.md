# Sections, shelves

Every collection gets a `ContentSection` header — serif title, optional one-line
note, optional text action on the right. That header rhythm is what keeps a
screen from reading as one flat wall of cards.

```jsx
<ContentSection title="Challenges voor jou" note="Kleine stappen, geen opdrachten." action="Alles bekijken">
  <ContentShelf>
    <ShelfCard tone="purple" label="CHALLENGE" title="Weerpraatje" meta="3 min" />
    <ShelfCard tone="sun" label="TIP" title="Beter slapen" meta="5 min" />
    <ShelfCard tone="white" label="BRON: MIND" title="Piekeren doorbreken" meta="4 min" />
  </ContentShelf>
</ContentSection>
```

**Shelf or grid?** A shelf (horizontal, next card peeking at the right edge) for
open-ended collections — "there is more where this came from". A
`ContentGrid` for a finite set the user should see in full. Never both in the
same section. The shelf's negative margin is tuned for the 16px sheet padding,
so it bleeds to the sheet edge.
