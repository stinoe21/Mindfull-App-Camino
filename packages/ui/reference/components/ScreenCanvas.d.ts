import * as React from 'react';
export interface ScreenCanvasProps {
  className?: string;
  style?: React.CSSProperties;
  /** Top edge of the beige sheet in px; the gradient shows above it. Default 56. */
  sheetTop?: number;
  /** Weather state of the background gradient. */
  state?: "default" | "mist" | "regen" | "wind" | "wolken" | "zonnig";
  /** Screen title; defaults to "Schermtitel". */
  text1?: string;
  /** Subtitle; defaults to "Korte ondertitel of duiding.". */
  text2?: string;
  /** First card title; defaults to "Sectiekaart". */
  text3?: string;
  /** First card body; defaults to "Alle inhoud staat in kaarten op het beige vel.". */
  text4?: string;
}
export declare const ScreenCanvas: React.FC<ScreenCanvasProps>;
export default ScreenCanvas;
