import * as React from 'react';
export interface IconButtonStandardProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  type?: "round" | "square";
  showFocusIndicator?: boolean;
  size?: "sm" | "lg" | "md" | "xl" | "xs";
  state?: "enabled" | "disabled" | "focused" | "hovered" | "pressed";
  width?: "default" | "narrow" | "wide";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IconButtonStandard: React.FC<IconButtonStandardProps>;
export default IconButtonStandard;
