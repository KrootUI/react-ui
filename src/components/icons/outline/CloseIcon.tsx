import * as React from 'react';
import { IconProps, defaultProps } from '../';

const CloseIcon: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-${width} w-${height}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
};

CloseIcon.defaultProps = defaultProps;
export default CloseIcon;