import { PlaitBoard } from '@plait/core';
type ClipboardImageFormat = 'svg' | 'png';
export declare const canCopySelectionAs: (format: ClipboardImageFormat) => boolean;
export declare const saveAsSvg: (board: PlaitBoard) => Promise<void>;
export declare const saveAsPng: (board: PlaitBoard) => void;
export declare const copySelectionAsSvg: (board: PlaitBoard) => Promise<void>;
export declare const copySelectionAsPng: (board: PlaitBoard) => Promise<void>;
export declare const addImage: (board: PlaitBoard) => Promise<void>;
export {};
