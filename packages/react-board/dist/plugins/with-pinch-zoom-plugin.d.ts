import { PlaitBoard, Point } from '@plait/core';
interface PointerRecord {
    pointerId: number;
    lastPoint: Point;
    currentPoint: Point;
    hasMoved: boolean;
}
export declare const TOUCH_RECORDS: WeakMap<PlaitBoard, PointerRecord[]>;
export declare const isTwoFingerMode: (board: PlaitBoard) => boolean;
export declare const withPinchZoom: (board: PlaitBoard) => PlaitBoard;
export {};
