import * as React from 'react';
export interface NavigationBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Text content; defaults to "Tips". */
  text2?: string;
  /** Text content; defaults to "Check in". */
  text3?: string;
  /** Text content; defaults to "Challenges". */
  text4?: string;
}
export declare const NavigationBar: React.FC<NavigationBarProps>;
export default NavigationBar;
