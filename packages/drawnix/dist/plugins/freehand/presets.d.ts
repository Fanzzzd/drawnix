export declare const DEFAULT_FREEHAND_STROKE_WIDTH = 2;
export declare const MIN_FREEHAND_STROKE_WIDTH = 1;
export declare const MAX_FREEHAND_STROKE_WIDTH = 24;
export declare const FREEHAND_STROKE_WIDTH_STEP = 0.25;
export type FreehandDrawOptions = {
    strokeColor?: string;
    strokeWidth: number;
};
export declare const DEFAULT_FREEHAND_PRESETS: FreehandDrawOptions[];
export declare const resolveFreehandDrawOptions: (drawOptions?: Partial<FreehandDrawOptions>) => Partial<FreehandDrawOptions>;
