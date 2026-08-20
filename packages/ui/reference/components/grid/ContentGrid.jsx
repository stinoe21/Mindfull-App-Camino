import React from 'react';
/**
 * Content grid — MIND's layout for content collections.
 * A strict 2-column grid: every block is one column wide (or a full-width row),
 * rows share one height, gutter 12. No mosaic, no carousel.
 */
export function ContentGrid({gap=12,children,style,...rest}){
  return (
    <div {...rest} style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gridAutoRows:"minmax(120px,auto)",gap,alignItems:"stretch",boxSizing:"border-box",...style}}>
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
export function ContentCard({full=false,tone="white",label,title,children,style,...rest}){
  return (
    <div {...rest} style={{borderRadius:"var(--radius-md)",padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,justifyContent:"flex-start",boxSizing:"border-box",minWidth:0,...tones[tone],...(full?{gridColumn:"span 2"}:null),...style}}>
      {label?<span style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:11,letterSpacing:".06em",color:"var(--text-secondary)"}}>{label}</span>:null}
      {title?<span style={{fontFamily:"var(--font-display)",fontSize:16,lineHeight:"21px",color:"var(--text-primary)"}}>{title}</span>:null}
      {children}
    </div>
  );
}
export default ContentGrid;
