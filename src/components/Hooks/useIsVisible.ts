import { useState, useEffect, useRef } from "react";

export default function useIsVisible() {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return { isVisible: isVisible, domRef: domRef };
}
