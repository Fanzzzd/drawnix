export declare const DEFAULT_TOAST_DURATION = 4000;
export type DrawnixToastType = 'info' | 'success' | 'error';
export type DrawnixToastOptions = {
    message: string;
    description?: string;
    type?: DrawnixToastType;
    duration?: number;
};
export type DrawnixToast = {
    id: number;
    message: string;
    description?: string;
    type: DrawnixToastType;
};
export declare const useToast: () => {
    toast: DrawnixToast | null;
    showToast: (toastOptions: DrawnixToastOptions) => void;
};
export declare const Toast: ({ toast, container, }: {
    toast: DrawnixToast | null;
    container?: HTMLElement | null;
}) => import("react/jsx-runtime").JSX.Element;
