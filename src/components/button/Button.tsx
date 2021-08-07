import * as React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

enum ButtonSize {
    mini,
    normal,
    large
}

enum ButtonType {
    primary,
    outline,
    link,
}

export interface ButtonProps {
    children?: React.ReactNode,
    size?: keyof typeof ButtonSize;
    type?: keyof typeof ButtonType;
    active?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = React.memo(React.forwardRef<HTMLDivElement, ButtonProps>(function Button({ size, type, active, disabled, rounded, hasIcon, children }, ref) {
    const { theme: { button } } = React.useContext(ThemeContext);

    const applyStates = () => { 
        if(disabled) return button[type].disabled;
        if(rounded) return button.rounded + ' ' + button[type].base;
        if(active) return button[type].active;
        return button[type].base;
    };

    const buttonClasses = classNames(button.base, button.size[size], applyStates());
    
    return (
        <button 
            role="button"
            type="button" 
            className={buttonClasses} 
            disabled={disabled}
        >
            {children}
        </button>
    )
}));

export default Button;