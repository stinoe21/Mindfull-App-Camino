import * as React from 'react';
export interface BackgroundHeroBandProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "zonnig" | "wolken" | "mist" | "wind" | "regen";
}
export declare const BackgroundHeroBand: React.FC<BackgroundHeroBandProps>;
export default BackgroundHeroBand;
