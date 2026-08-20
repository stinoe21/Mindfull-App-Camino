import React from 'react';
const tones={
white:{backgroundColor:"var(--surface-card)"},
primary:{backgroundColor:"var(--primary-50)"},
purple:{backgroundColor:"var(--purple-50)"},
sun:{backgroundColor:"var(--weather-sun)"},
outline:{backgroundColor:"var(--surface-card)",boxShadow:"inset 0 0 0 1px var(--border-default)"},
};
export function Card({tone="white",children,style,...rest}){
  return (
    <div {...rest} style={{borderRadius:"var(--radius-md)",padding:"18px 20px",display:"flex",flexDirection:"column",gap:8,boxSizing:"border-box",...tones[tone],...style}}>
      {children}
    </div>
  );
}
export default Card;
