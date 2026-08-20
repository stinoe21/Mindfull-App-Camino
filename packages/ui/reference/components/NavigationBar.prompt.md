Bottom tab bar — 5 destinations (Home, Tips, Check in, Challenges, Profiel), pill-shaped floating bar over a frosted background.

```jsx
<NavigationBar style={{position:"absolute",left:0,bottom:0,width:402}} />
```

Fixed inventory of 5 items — this is the app's only navigation surface (no drawer, no top tabs). Labels are editable via `text1`–`text4` but the item set itself should not grow past 5 on a 402px-wide screen.
