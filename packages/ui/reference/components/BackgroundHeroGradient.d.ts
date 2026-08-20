import * as React from 'react';
export interface BackgroundHeroGradientProps {
  className?: string;
  style?: React.CSSProperties;
  /** Band height in px; the fade to beige always ends at the bottom. Default 480. */
  height?: number;
  state?: "default" | "mist" | "regen" | "wind" | "wolken" | "zonnig";
}
export declare const BackgroundHeroGradient: React.FC<BackgroundHeroGradientProps>;
export default BackgroundHeroGradient;
