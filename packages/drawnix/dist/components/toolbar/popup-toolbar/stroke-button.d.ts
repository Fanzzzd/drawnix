import { default as React } from 'react';
import { PlaitBoard } from '@plait/core';
import { StrokeStyle } from '@plait/common';
export type PopupStrokeButtonProps = {
    board: PlaitBoard;
    currentColor: string | undefined;
    currentStyle?: StrokeStyle;
    title: string;
    hasStrokeStyle: boolean;
    children?: React.ReactNode;
};
export declare const PopupStrokeButton: React.FC<PopupStrokeButtonProps>;
