import { BackgroundHeroGradient } from './BackgroundHeroGradient.jsx';
import { ContentSection, ContentShelf, ShelfCard } from './grid/ContentSection.jsx';
import { ContentGrid, ContentCard } from './grid/ContentGrid.jsx';

// Screen/Canvas — the standard MIND screen: the hero gradient is the page
// background, and the whole screen sits in one beige sheet card inset by an
// 8px margin, so a thin ring of the gradient stays visible all around.
// Inside the sheet: the screen title, one full-width lead card, then sections —
// each with its own header and either a browsable shelf or a finite grid.
// Grid rules — 4px base, sheet margin 8, sheet padding 16, gutter 12.
export function ScreenCanvas(_p = {}) {
  const props = _p;
  const card = {
    borderRadius: "var(--radius-md)",
    backgroundColor: "var(--surface-card)",
    padding: "18px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    justifyContent: "flex-start",
    boxSizing: "border-box",
    minWidth: 0,
    minHeight: 120,
  };
  const cardTitle = { fontFamily: "var(--font-display)", fontSize: 16, lineHeight: "21px", color: "var(--text-primary)" };
  const cardBody = { fontFamily: "var(--font-body)", fontSize: 12, lineHeight: "17px", color: "var(--text-secondary)" };
  return (
    <div className={props.className} style={{
      width: 402,
      height: 874,
      overflow: "hidden",
      backgroundColor: "var(--surface-background)",
      position: "relative",
      ...props.style,
    }}>
      <BackgroundHeroGradient
        state={props.state ?? "default"}
        height={874}
        style={{ position: "absolute", left: 0, top: 0, height: 874 }}
      />
      <div style={{
        position: "absolute",
        left: 8,
        right: 8,
        top: props.sheetTop ?? 56,
        bottom: 8,
        borderRadius: 20,
        backgroundColor: "var(--surface-background)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        padding: 20,
        boxSizing: "border-box",
        overflowY: "auto",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: "28px", color: "var(--text-primary)" }}>
            {props.text1 ?? "Schermtitel"}
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: "18px", color: "var(--text-secondary)" }}>
            {props.text2 ?? "Korte ondertitel of duiding."}
          </span>
        </div>
        <div style={{ ...card, minHeight: 104, backgroundColor: "var(--primary-50)" }}>
          <span style={cardTitle}>{props.text3 ?? "Sectiekaart"}</span>
          <span style={cardBody}>{props.text4 ?? "Eén leidende kaart bovenaan, daaronder secties met een eigen kop."}</span>
        </div>
        <ContentSection title="Challenges voor jou" note="Kleine stappen, geen opdrachten." action="Alles bekijken">
          <ContentShelf>
            <ShelfCard tone="purple" label="CHALLENGE" title="Weerpraatje" meta="3 min" />
            <ShelfCard tone="sun" label="TIP" title="Beter slapen" meta="5 min" />
            <ShelfCard tone="coral" label="CHALLENGE" title="Even naar buiten" meta="10 min" />
          </ContentShelf>
        </ContentSection>
        <ContentSection title="Naslagwerk" action="Alle onderwerpen">
          <ContentGrid>
            <ContentCard tone="white" label="BRON: MIND" title="Piekeren doorbreken" />
            <ContentCard tone="white" label="BRON: MIND" title="Slaap en stress" />
          </ContentGrid>
        </ContentSection>
      </div>
    </div>
  );
}
export default ScreenCanvas;
