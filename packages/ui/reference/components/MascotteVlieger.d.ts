import * as React from 'react';
export interface MascotteVliegerProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "wolken" | "wind" | "mist" | "regen" | "default" | "zonnig" | "intake";
}
export declare const MascotteVlieger: React.FC<MascotteVliegerProps>;
export default MascotteVlieger;
