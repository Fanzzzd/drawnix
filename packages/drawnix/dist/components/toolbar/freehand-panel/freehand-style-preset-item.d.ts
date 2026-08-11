import { default as React } from 'react';
export declare const getFreehandPreviewRadius: (strokeWidth: number) => number;
export interface FreehandStylePreset {
    id: string;
    color?: string;
    size: number;
}
export interface FreehandStylePresetItemProps {
    preset: FreehandStylePreset;
    selected: boolean;
    container: HTMLElement | null;
    onSelect: () => void;
    onColorChange: (color?: string) => void;
    onSizeChange: (size: number) => void;
}
export declare const FreehandStylePresetItem: React.FC<FreehandStylePresetItemProps>;
