import * as React from 'react';
export interface ChipProps {
  label: string;
  active?: boolean;
  style?: React.CSSProperties;
}
export declare const Chip: React.FC<ChipProps>;
export default Chip;
