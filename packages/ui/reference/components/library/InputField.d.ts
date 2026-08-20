import * as React from 'react';
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  state?: "disabled" | "default" | "error";
  error?: string;
  hasLabel?: boolean;
  valueType?: "default" | "placeholder";
  hasDescription?: boolean;
  label?: string;
  hasError?: boolean;
  description?: string;
}
export declare const InputField: React.FC<InputFieldProps>;
export default InputField;
