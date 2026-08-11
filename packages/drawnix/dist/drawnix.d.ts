import { BoardChangeData } from '@plait-board/react-board';
import { PlaitBoard, PlaitElement, PlaitTheme, Selection, ThemeColorMode, Viewport } from '@plait/core';
import { default as React } from 'react';
import { DrawnixToolState } from './hooks/use-drawnix';
import { Language } from './i18n/types';
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
    onChange?: (value: BoardChangeData) => void;
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
