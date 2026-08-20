import React from 'react';
export function Chip({label,active=false,style,...rest}){
  return (
    <span {...rest} style={{display:"inline-flex",alignItems:"center",padding:"8px 16px",borderRadius:"var(--radius-pill)",fontFamily:"var(--font-body)",fontWeight:600,fontSize:13,lineHeight:"18px",backgroundColor:active?"var(--primary-700)":"var(--primary-50)",color:active?"var(--text-onprimary)":"var(--primary-800)",whiteSpace:"nowrap",...style}}>
      {label}
    </span>
  );
}
export default Chip;
