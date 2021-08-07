import * as React from 'react';
import { ThemeContext } from '../../context/ThemeContext'

export interface AvatarProps {
    size: 'mini' | 'normal' | 'large';
    alt?: string;
    src?: string;
    initials?: string;
}

const Avatar: React.FC<AvatarProps> = React.memo(React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar({ size, alt, src, initials }, ref) {
    const classes = [];
    const { theme: { avatar } } = React.useContext(ThemeContext);

    switch(size) {
        case 'mini':
            classes.push(avatar.size.small); 
            break;
        case 'normal':
            classes.push(avatar.size.regular); 
            break;
        case 'large':
            classes.push(avatar.size.large); 
            break;
    }
    
    return (
        <div className={classes.join(' ')} ref={ref}>
            {src && <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />}
            {!src && initials && <span className="flex items-center justify-center">{initials.toUpperCase()}</span>}
            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        </div>
    )
}));

export default Avatar;