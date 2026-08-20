import * as React from 'react';
export interface TextareaFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "error" | "disabled";
  value?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
  label?: string;
  description?: string;
  hasError?: boolean;
  error?: string;
  valueType?: "default" | "placeholder";
}
export declare const TextareaField: React.FC<TextareaFieldProps>;
export default TextareaField;
