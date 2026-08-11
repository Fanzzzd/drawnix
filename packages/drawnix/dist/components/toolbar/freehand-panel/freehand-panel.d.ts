import { default as React } from 'react';
import { DrawnixPointerType } from '../../../hooks/use-drawnix';
import { FreehandDrawOptions } from '../../../plugins/freehand/presets';
export type FreehandPickerProps = {
    freehandPresets: FreehandDrawOptions[];
    activePresetIndex: number;
    onPresetSelect: (presetIndex: number) => void;
    onStrokeColorSelect: (presetIndex: number, strokeColor?: string) => void;
    onStrokeWidthSelect: (presetIndex: number, strokeWidth: number) => void;
    onPointerUp: (pointer: DrawnixPointerType) => void;
};
export declare const FreehandPanel: React.FC<FreehandPickerProps>;
