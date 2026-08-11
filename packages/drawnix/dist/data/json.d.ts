import { PlaitBoard } from '@plait/core';
import { FileSystemHandle } from './filesystem';
import { DrawnixExportedData } from './types';
export type DrawnixFileHandle = FileSystemHandle | null;
export declare const getDefaultName: () => string;
export declare const saveAsJSON: (board: PlaitBoard, name?: string) => Promise<{
    fileHandle: FileSystemFileHandle | null;
}>;
export declare const saveJSON: (board: PlaitBoard, existingFileHandle?: DrawnixFileHandle, name?: string) => Promise<{
    fileHandle: FileSystemFileHandle | null;
}>;
export declare const loadFromJSON: (board: PlaitBoard) => Promise<{
    data: DrawnixExportedData;
    fileHandle: FileSystemHandle | null;
}>;
export declare const isValidDrawnixData: (data?: any) => data is DrawnixExportedData;
export declare const serializeAsJSON: (board: PlaitBoard) => string;
