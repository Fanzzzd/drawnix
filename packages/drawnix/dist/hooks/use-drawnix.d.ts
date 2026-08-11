import { PlaitBoard, PlaitPointerType } from '@plait/core';
import { Dispatch, SetStateAction } from 'react';
import { MindPointerType } from '@plait/mind';
import { ArrowLineShape, DrawPointerType } from '@plait/draw';
import { FreehandShape } from '../plugins/freehand/type';
import { Editor } from 'slate';
import { LinkElement } from '@plait/common';
import { FreehandDrawOptions } from '../plugins/freehand/presets';
import { DrawnixFileHandle } from '../data/json';
import { DrawnixToastOptions } from '../components/toast/toast';
export declare enum DialogType {
    mermaidToDrawnix = "mermaidToDrawnix",
    markdownToDrawnix = "markdownToDrawnix"
}
export type DrawnixPointerType = PlaitPointerType | MindPointerType | DrawPointerType | FreehandShape;
export type DrawnixFreehandPointer = FreehandShape.feltTipPen | FreehandShape.eraser;
export type DrawnixToolState = {
    pointer: DrawnixPointerType;
    lastShapePointer: DrawPointerType;
    lastArrowPointer: ArrowLineShape;
    lastFreehandPointer: DrawnixFreehandPointer;
    activeFreehandPresetIndex: number;
    freehandPresets: FreehandDrawOptions[];
};
export declare const createDefaultToolState: () => DrawnixToolState;
export declare const mergeToolState: (toolState?: Partial<DrawnixToolState>) => DrawnixToolState;
export interface DrawnixBoard extends PlaitBoard {
    appState: DrawnixState;
    showToast?: (toast: DrawnixToastOptions) => void;
}
export type LinkState = {
    targetDom: HTMLElement;
    editor: Editor;
    targetElement: LinkElement;
    isEditing: boolean;
    isHovering: boolean;
    isHoveringOrigin: boolean;
};
export type DrawnixState = {
    toolState: DrawnixToolState;
    isMobile: boolean;
    isPencilMode: boolean;
    fileHandle: DrawnixFileHandle;
    openDialogType: DialogType | null;
    openCleanConfirm: boolean;
    copyTransparent: boolean;
    exportTransparent: boolean;
    linkState?: LinkState | null;
};
export declare const DrawnixContext: import('react').Context<{
    appState: DrawnixState;
    setAppState: Dispatch<SetStateAction<DrawnixState>>;
    showToast: (toast: DrawnixToastOptions) => void;
} | null>;
export declare const useDrawnix: () => {
    appState: DrawnixState;
    setAppState: Dispatch<SetStateAction<DrawnixState>>;
    showToast: (toast: DrawnixToastOptions) => void;
};
export declare const useSetPointer: () => (pointer: DrawnixPointerType) => void;
