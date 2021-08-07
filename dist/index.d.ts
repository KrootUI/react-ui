/// <reference types="react" />
declare module "themes/default" {
    const _default: {
        alert: {
            base: string;
            content: string;
            withClose: string;
            success: string;
            danger: string;
            warning: string;
            none: string;
            info: string;
            icon: {
                base: string;
                success: string;
                danger: string;
                warning: string;
                none: string;
                info: string;
            };
        };
        pagination: {
            base: string;
        };
        tableFooter: {
            base: string;
        };
        tableRow: {
            base: string;
        };
        tableHeader: {
            base: string;
        };
        tableContainer: {
            base: string;
        };
        tableCell: {
            base: string;
        };
        tableBody: {
            base: string;
        };
        dropdownItem: {
            base: string;
        };
        dropdown: {
            base: string;
            align: {
                left: string;
                right: string;
            };
        };
        avatar: {
            base: string;
            size: {
                large: string;
                regular: string;
                small: string;
            };
        };
        modal: {
            base: string;
        };
        modalBody: {
            base: string;
        };
        modalFooter: {
            base: string;
        };
        modalHeader: {
            base: string;
        };
        badge: {
            base: string;
            success: string;
            danger: string;
            warning: string;
            neutral: string;
            primary: string;
        };
        backdrop: {
            base: string;
        };
        textarea: {
            base: string;
            active: string;
            disabled: string;
            valid: string;
            invalid: string;
        };
        select: {
            base: string;
            active: string;
            select: string;
            disabled: string;
            valid: string;
            invalid: string;
        };
        label: {
            base: string;
            check: string;
            disabled: string;
        };
        input: {
            base: string;
            active: string;
            disabled: string;
            valid: string;
            invalid: string;
            radio: string;
            checkbox: string;
        };
        helperText: {
            base: string;
            valid: string;
            invalid: string;
        };
        card: {
            base: string;
            default: string;
        };
        cardBody: {
            base: string;
        };
        button: {
            base: string;
            block: string;
            size: {
                larger: string;
                large: string;
                regular: string;
                small: string;
                icon: {
                    larger: string;
                    large: string;
                    regular: string;
                    small: string;
                };
                pagination: string;
            };
            icon: {
                larger: string;
                large: string;
                regular: string;
                small: string;
                left: string;
                right: string;
            };
            primary: {
                base: string;
                active: string;
                disabled: string;
            };
            outline: {
                base: string;
                active: string;
                disabled: string;
            };
            link: {
                base: string;
                active: string;
                disabled: string;
            };
            dropdownItem: {
                base: string;
            };
        };
    };
    export default _default;
}
declare module "context/ThemeContext" {
    import React from 'react';
    interface ThemeContextInterface {
        theme: any;
        toggleMode?: any;
    }
    export const ThemeContext: React.Context<ThemeContextInterface>;
    interface ThemeProviderProps {
        children: React.ReactNode;
        value?: any;
    }
    export const ThemeProvider: React.FC<ThemeProviderProps>;
}
declare module "components/icons/outline/AcademicCapIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const AcademicCapIcon: React.FC<IconProps>;
    export default AcademicCapIcon;
}
declare module "components/icons/outline/AdjustmentsIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const AdjustmentsIcon: React.FC<IconProps>;
    export default AdjustmentsIcon;
}
declare module "components/icons/outline/AnnotationIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const AnnotationIcon: React.FC<IconProps>;
    export default AnnotationIcon;
}
declare module "components/icons/outline/BadgeCheckIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const BadgeCheckIcon: React.FC<IconProps>;
    export default BadgeCheckIcon;
}
declare module "components/icons/outline/CloseIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const CloseIcon: React.FC<IconProps>;
    export default CloseIcon;
}
declare module "components/icons/outline/DotsCircleHorizontalIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const DotsCircleHorizontalIcon: React.FC<IconProps>;
    export default DotsCircleHorizontalIcon;
}
declare module "components/icons/outline/ExclamationTriangleIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const ExclamationTriangleIcon: React.FC<IconProps>;
    export default ExclamationTriangleIcon;
}
declare module "components/icons/outline/InfoCircleIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const InfoCircleIcon: React.FC<IconProps>;
    export default InfoCircleIcon;
}
declare module "components/icons/outline/ShieldExclamationIcon" {
    import * as React from 'react';
    import { IconProps } from "components/icons/index";
    const ShieldExclamationIcon: React.FC<IconProps>;
    export default ShieldExclamationIcon;
}
declare module "components/icons/index" {
    export const defaultProps: {
        width: number;
        height: number;
    };
    export interface IconProps {
        width?: number;
        height?: number;
    }
    export { default as AcademicCapIcon } from "components/icons/outline/AcademicCapIcon";
    export { default as AdjustmentsIcon } from "components/icons/outline/AdjustmentsIcon";
    export { default as AnnotationIcon } from "components/icons/outline/AnnotationIcon";
    export { default as BadgeCheckIcon } from "components/icons/outline/BadgeCheckIcon";
    export { default as CloseIcon } from "components/icons/outline/CloseIcon";
    export { default as DotsCircleHorizontalIcon } from "components/icons/outline/DotsCircleHorizontalIcon";
    export { default as ExclamationTriangleIcon } from "components/icons/outline/ExclamationTriangleIcon";
    export { default as InfoCircleIcon } from "components/icons/outline/InfoCircleIcon";
    export { default as ShieldExclamationIcon } from "components/icons/outline/ShieldExclamationIcon";
}
declare module "components/alert/Alert" {
    import * as React from 'react';
    enum AlertIntent {
        none = 0,
        info = 1,
        success = 2,
        warning = 3,
        danger = 4
    }
    export interface AlertProps {
        intent: keyof typeof AlertIntent;
        onClose?: () => void;
    }
    const Alert: React.FC<AlertProps>;
    export default Alert;
}
declare module "components/avatar/Avatar" {
    import * as React from 'react';
    export interface AvatarProps {
        size: 'mini' | 'normal' | 'large';
        alt?: string;
        src?: string;
        initials?: string;
    }
    const Avatar: React.FC<AvatarProps>;
    export default Avatar;
}
declare module "index" {
    export { ThemeContext as Context } from "context/ThemeContext";
    export { default as Alert } from "components/alert/Alert";
    export { default as Avatar } from "components/avatar/Avatar";
}
//# sourceMappingURL=index.d.ts.map