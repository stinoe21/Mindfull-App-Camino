import * as React from 'react';
export interface ContentSectionProps {
  title?: string;
  /** One-line duiding under the section title. */
  note?: string;
  /** Text action on the right, e.g. "Alles bekijken". */
  action?: string;
  onAction?: () => void;
  /** Gap between header and content. Default 12. */
  gap?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function ContentSection(props: ContentSectionProps): JSX.Element;

export interface ContentShelfProps {
  /** Gap between cards. Default 12. */
  gap?: number;
  /** Horizontal bleed in px — match the container padding so the shelf runs to its edge. Default 20. */
  bleed?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function ContentShelf(props: ContentShelfProps): JSX.Element;

export interface ShelfCardProps {
  tone?: 'white' | 'primary' | 'purple' | 'sun' | 'coral' | 'outline';
  label?: string;
  title?: string;
  /** Small caption under the title, e.g. "3 min". */
  meta?: string;
  /** Card width in px. Default 172. */
  width?: number;
  /** Minimum card height in px. Default 152. */
  height?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function ShelfCard(props: ShelfCardProps): JSX.Element;
export default ContentSection;
