import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        return {
            width: hasWindow ? window.innerWidth : null,
            height: hasWindow ? window.innerHeight : null
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    }

    useEffect(() => {
        if (!hasWindow)
            return;

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hasWindow]);

    return windowDimensions;
}