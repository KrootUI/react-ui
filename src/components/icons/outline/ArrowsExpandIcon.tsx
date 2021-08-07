import * as React from 'react';
import { IconProps, defaultProps } from '../Icons';

const ArrowsExpandIcon: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-${width} w-${height}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
    )
};

ArrowsExpandIcon.defaultProps = defaultProps;
export default ArrowsExpandIcon;