import { default as React } from 'react';
import { PlaitBoard } from '@plait/core';
export type PopupFontSizeControlProps = {
    board: PlaitBoard;
    currentFontSize?: number;
    title: string;
    options?: number[];
};
export declare const PopupFontSizeControl: React.FC<PopupFontSizeControlProps>;
