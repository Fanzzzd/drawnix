import { PlaitBoard } from '@plait/core';
import { DrawnixPointerType } from '../hooks/use-drawnix';
export declare const syncBoardPointerToToolState: (board: PlaitBoard, syncToolStatePointer: (pointer: DrawnixPointerType) => void) => void;
export declare const buildToolStateSyncPlugin: (syncToolStatePointer: (pointer: DrawnixPointerType) => void) => (board: PlaitBoard) => PlaitBoard;
