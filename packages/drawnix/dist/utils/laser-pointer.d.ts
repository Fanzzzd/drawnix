import { PlaitBoard } from '@plait/core';
export declare const LASER_POINTER_CLASS_NAME = "laser-pointer";
export declare class LaserPointer {
    private mouseTrack;
    private mouseMoveHandler;
    private resizeHandler;
    private cvsDom;
    private ctx;
    private canvasPos;
    private drawing;
    private container;
    init(board: PlaitBoard): void;
    destroy(): void;
    private startDraw;
    private draw;
    private setCanvasSize;
}
