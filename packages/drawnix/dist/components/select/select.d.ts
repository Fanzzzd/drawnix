import { Placement } from '@floating-ui/react';
import * as React from 'react';
interface SelectRootProps {
    children: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    size?: '1' | '2' | '3';
    disabled?: boolean;
    placement?: Placement;
    sideOffset?: number;
    hideSelectedIndicator?: boolean;
    disableItemHoverHighlight?: boolean;
    disableInitialHighlight?: boolean;
    disableTypeahead?: boolean;
}
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'classic' | 'surface' | 'soft' | 'ghost';
    color?: string;
    radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
    placeholder?: string;
    asChild?: boolean;
}
interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'solid' | 'soft';
    color?: string;
    highContrast?: boolean;
    container?: HTMLElement | null;
}
interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    textValue?: string;
}
type SelectGroupProps = React.HTMLAttributes<HTMLDivElement>;
type SelectLabelProps = React.HTMLAttributes<HTMLDivElement>;
type SelectSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
export declare const Select: {
    Root: React.FC<SelectRootProps>;
    Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLButtonElement>>;
    Group: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
};
export {};
