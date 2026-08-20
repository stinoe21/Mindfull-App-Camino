import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  variant?: "primary" | "neutral" | "subtle";
  hasIconStart?: boolean;
  iconStart?: React.ReactNode;
  hasIconEnd?: boolean;
  iconEnd?: React.ReactNode;
  state?: "default" | "hover" | "disabled";
  size?: "md" | "sm";
}
export declare const LibraryButton: React.FC<ButtonProps>;
export default LibraryButton;
