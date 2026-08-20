import * as React from 'react';
export interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'link';
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
