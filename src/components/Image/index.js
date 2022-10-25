import { useState, forwardRef } from 'react';
import images from '~/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleErrorImage = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleErrorImage}
        />
    );
}

export default forwardRef(Image);
