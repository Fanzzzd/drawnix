import { PlaitBoard, PlaitElement, PlaitOperation, PlaitTheme, Selection, ThemeColorMode, Viewport } from '@plait/core';
import { default as React } from 'react';
import { DrawnixToolState } from './hooks/use-drawnix';
import { Language } from './i18n/types';
export type DrawnixBoardChangeData = {
    children: PlaitElement[];
    operations: PlaitOperation[];
    viewport: Viewport;
    selection: Selection | null;
    theme: PlaitTheme;
};
export type DrawnixProps = {
    value: PlaitElement[];
    viewport?: Viewport;
    theme?: PlaitTheme;
    initialToolState?: Partial<DrawnixToolState>;
    initialPreference?: {
        copyTransparent?: boolean;
        exportTransparent?: boolean;
    };
    initialLanguage?: Language;
    onChange?: (value: DrawnixBoardChangeData) => void;
    onSelectionChange?: (selection: Selection | null) => void;
    onValueChange?: (value: PlaitElement[]) => void;
    onViewportChange?: (value: Viewport) => void;
    onThemeChange?: (value: ThemeColorMode) => void;
    onToolStateChange?: (toolState: DrawnixToolState) => void;
    onPreferenceChange?: (preference: {
        copyTransparent: boolean;
        exportTransparent: boolean;
    }) => void;
    onLanguageChange?: (language: Language) => void;
    afterInit?: (board: PlaitBoard) => void;
    tutorial?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export type { DrawnixToolState } from './hooks/use-drawnix';
export declare const Drawnix: React.FC<DrawnixProps>;
