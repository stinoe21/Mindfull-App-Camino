import * as React from 'react';
export interface SliderProps {
  value?: number;
  leftLabel?: string;
  rightLabel?: string;
  hint?: string;
  style?: React.CSSProperties;
}
export declare const Slider: React.FC<SliderProps>;
export default Slider;
