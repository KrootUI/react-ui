import * as React from 'react';
import classNames from 'classnames';
import { BadgeCheckIcon, CloseIcon, ExclamationTriangleIcon, InfoCircleIcon, ShieldExclamationIcon, DotsCircleHorizontalIcon } from '../icons';
import { ThemeContext } from '../../context/ThemeContext';

enum AlertIntent {
    none,
    info,
    success,
    warning,
    danger
}

export interface AlertProps {
    intent: keyof typeof AlertIntent;
    onClose?: () => void;
}

const Alert: React.FC<AlertProps> = React.memo(React.forwardRef<HTMLDivElement, AlertProps>(function Alert({ intent, onClose, children }, ref) {
    const { theme: { alert } } = React.useContext(ThemeContext);

    let iconDisplay: any;

    switch(intent) {
        case "none":
            iconDisplay = <DotsCircleHorizontalIcon height={6} width={6} />
            break;
        case "info":
            iconDisplay = <InfoCircleIcon height={6} width={6} />;
            break;
        case "success":
            iconDisplay = <BadgeCheckIcon height={6} width={6} />
            break;
        case "warning":
            iconDisplay = <ExclamationTriangleIcon height={6} width={6} />
            break;
        case "danger":
            iconDisplay = <ShieldExclamationIcon height={6} width={6} />
            break;
        default:
            iconDisplay = <DotsCircleHorizontalIcon height={6} width={6} />
    }

    return (
        <div className={classNames(alert.base, alert[intent], alert.withClose)} ref={ref} role="alert">
            <div className={classNames(alert.icon.base, alert.icon[intent], 'absolute left-0 top-0 ml-4 mt-4')}>
                {iconDisplay}
            </div>

            <div className={classNames(alert.content, 'pl-8')}>
                {children}
            </div>

            <div className={classNames(alert.icon.base, { 'absolute top-0 right-0 mt-4 mr-4': onClose })}>
                <button onClick={ () => onClose() }>
                    <CloseIcon width={6} height={6} />
                </button>
            </div>
        </div>
    )
}));

export default Alert;