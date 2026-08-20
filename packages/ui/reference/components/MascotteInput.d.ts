import * as React from 'react';
/**
 * Mascotte/Input states — one mascot per daily check-in question.
 * Distinct from MascotteVlieger (7 mood/weather states shown on outcome screens).
 */
export interface MascotteInputProps {
  /** Which check-in dimension this mascot introduces. */
  state?: 'temperatuur' | 'wind' | 'zicht' | 'wisselvallig';
  /** Path prefix to the design system root, for pages not at project root (e.g. "../../"). */
  assetBase?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function MascotteInput(props: MascotteInputProps): JSX.Element;
export default MascotteInput;
