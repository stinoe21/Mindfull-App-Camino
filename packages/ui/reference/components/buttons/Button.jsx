import React from 'react';
const base={borderRadius:999,display:"inline-flex",flexDirection:"row",justifyContent:"center",alignItems:"center",fontFamily:"var(--font-body)",fontWeight:600,fontSize:14,lineHeight:"20px",whiteSpace:"nowrap",border:"none",cursor:"pointer",boxSizing:"border-box"};
const variants={
primary:{backgroundColor:"var(--accent-lime)",color:"var(--base-ink)",boxShadow:"none"},
secondary:{backgroundColor:"transparent",color:"var(--base-ink)",boxShadow:"inset 0 0 0 1.5px var(--base-ink)"},
link:{backgroundColor:"transparent",color:"var(--primary-700)",padding:"8px 8px"},
};
export function Button({label="Knoptekst",variant="primary",fullWidth=false,disabled=false,style,...rest}){
  const v=variants[variant]||variants.primary;
  const pad=variant==="link"?"8px 8px":"14px 24px";
  return (
    <button {...rest} disabled={disabled} style={{...base,...v,padding:pad,width:fullWidth?"100%":"fit-content",height:variant==="link"?36:48,opacity:disabled?0.45:1,...style}}>
      {label}
    </button>
  );
}
export default Button;
