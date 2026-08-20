import * as React from 'react';
export interface ContentGridProps {
  /** Gutter in px. Default 12. */
  gap?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function ContentGrid(props: ContentGridProps): JSX.Element;

export interface ContentCardProps {
  /** Span both columns as a full-width row. */
  full?: boolean;
  tone?: 'white' | 'primary' | 'purple' | 'sun' | 'coral' | 'outline';
  /** Small overline above the title. */
  label?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function ContentCard(props: ContentCardProps): JSX.Element;
export default ContentGrid;
