import React from 'react';
export function Slider({value=50,leftLabel="Guur",rightLabel="Lekker zacht",hint="Schuif naar wat vandaag het best past.",style}){
  return (
    <div style={{borderRadius:"var(--radius-md)",backgroundColor:"var(--surface-card)",boxShadow:"var(--shadow-card-border)",padding:"20px 20px 18px",display:"flex",flexDirection:"column",gap:16,boxSizing:"border-box",...style}}>
      <span style={{fontFamily:"var(--font-body)",fontSize:14,lineHeight:"20px",color:"var(--text-secondary)"}}>{hint}</span>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        <div style={{position:"relative",height:20}}>
          <div style={{position:"absolute",left:0,top:8,right:0,height:4,borderRadius:999,backgroundColor:"var(--slider-track-base)"}}/>
          <div style={{position:"absolute",left:0,top:8,width:`${value}%`,height:4,borderRadius:999,backgroundColor:"var(--accent-lime)"}}/>
          <div style={{position:"absolute",left:`calc(${value}% - 10px)`,top:0,width:20,height:20,borderRadius:"50%",backgroundColor:"var(--accent-lime)",boxShadow:"inset 0 0 0 1.5px var(--base-ink)"}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <span style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:12,lineHeight:"16px",color:"var(--text-secondary)"}}>{leftLabel}</span>
          <span style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:12,lineHeight:"16px",color:"var(--text-secondary)"}}>{rightLabel}</span>
        </div>
      </div>
    </div>
  );
}
export default Slider;
