import React from 'react';
/**
 * Section header — every collection on a screen is introduced by one of these:
 * a serif section title, an optional one-line duiding, and an optional text
 * action on the right ("Alles bekijken"). It is what gives a screen rhythm
 * instead of one flat wall of cards.
 */
export function ContentSection({title,note,action,onAction,children,gap=12,style,...rest}){
  return (
    <section {...rest} style={{display:"flex",flexDirection:"column",gap,minWidth:0,...style}}>
      <header style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:12}}>
        <div style={{display:"flex",flexDirection:"column",gap:2,minWidth:0}}>
          <h2 style={{margin:0,fontFamily:"var(--font-display)",fontWeight:400,fontSize:19,lineHeight:"24px",color:"var(--text-primary)"}}>{title}</h2>
          {note?<span style={{fontFamily:"var(--font-body)",fontSize:12,lineHeight:"17px",color:"var(--text-secondary)"}}>{note}</span>:null}
        </div>
        {action?<button type="button" onClick={onAction} style={{flexShrink:0,border:"none",background:"none",padding:0,cursor:"pointer",fontFamily:"var(--font-body)",fontWeight:600,fontSize:13,color:"var(--primary-600, var(--text-primary))"}}>{action}</button>:null}
      </header>
      {children}
    </section>
  );
}
/**
 * Shelf — a horizontally scrolling row for open-ended collections, where the
 * next card deliberately peeks in at the right edge so the row reads as
 * browsable. Use a shelf for "there is more where this came from"; use
 * ContentGrid for a finite set the user should see in full.
 */
export function ContentShelf({gap=12,bleed=20,children,style,...rest}){
  return (
    <div {...rest} style={{display:"flex",gap,overflowX:"auto",scrollSnapType:"x proximity",scrollPaddingLeft:0,margin:"0 " + -bleed + "px",padding:"0 " + bleed + "px 2px " + bleed + "px",scrollbarWidth:"none",...style}}>
      {children}
    </div>
  );
}
const tones={
  white:{backgroundColor:"var(--surface-card)"},
  primary:{backgroundColor:"var(--primary-50)"},
  purple:{backgroundColor:"var(--purple-50)"},
  sun:{backgroundColor:"var(--weather-sun)"},
  coral:{backgroundColor:"var(--coral-50)"},
  outline:{backgroundColor:"var(--surface-card)",boxShadow:"inset 0 0 0 1px var(--border-default)"},
};
export function ShelfCard({tone="white",label,title,meta,width=172,height=152,children,style,...rest}){
  return (
    <article {...rest} style={{flexShrink:0,width,minHeight:height,scrollSnapAlign:"start",borderRadius:"var(--radius-md)",padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,justifyContent:"flex-end",boxSizing:"border-box",...tones[tone],...style}}>
      {label?<span style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:11,letterSpacing:".06em",color:"var(--text-secondary)"}}>{label}</span>:null}
      {title?<span style={{fontFamily:"var(--font-display)",fontSize:16,lineHeight:"21px",color:"var(--text-primary)",textWrap:"pretty"}}>{title}</span>:null}
      {meta?<span style={{fontFamily:"var(--font-body)",fontSize:12,lineHeight:"17px",color:"var(--text-secondary)"}}>{meta}</span>:null}
      {children}
    </article>
  );
}
export default ContentSection;
