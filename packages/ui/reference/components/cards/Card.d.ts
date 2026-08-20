import * as React from 'react';
export interface CardProps {
  tone?: 'white' | 'primary' | 'purple' | 'sun' | 'outline';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const Card: React.FC<CardProps>;
export default Card;
