import { default as React } from 'react';
import { FreehandShape } from '../plugins/freehand/type';
import { Translations } from '../i18n';
export declare const FREEHAND_PRESET_IDS: readonly ["preset-1", "preset-2", "preset-3"];
export type FreehandPresetId = (typeof FREEHAND_PRESET_IDS)[number];
export type FreehandToolItem = {
    titleKey: keyof Translations;
    icon: React.ReactNode;
    pointer: FreehandShape.feltTipPen | FreehandShape.eraser;
};
export declare const FREEHANDS: FreehandToolItem[];
