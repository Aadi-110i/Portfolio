import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Use quickTo for high-performance mouse movement updates
        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

        // Reduced duration for follower to make it faster (less "slow")
        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.2, ease: "power3" });
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.2, ease: "power3" });

        const moveCursor = (e: MouseEvent) => {
            xToCursor(e.clientX);
            yToCursor(e.clientY);
            xToFollower(e.clientX);
            yToFollower(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Handle hover animations with GSAP to avoid CSS transition conflicts
    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (isHovering) {
            gsap.to(cursor, { scale: 0, duration: 0.3 });
            gsap.to(follower, {
                scale: 2.5,
                backgroundColor: 'white',
                duration: 0.3
            });
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                duration: 0.3
            });
        }
    }, [isHovering]);

    useEffect(() => {
        const handleHover = () => setIsHovering(true);
        const handleUnhover = () => setIsHovering(false);

        const hoverables = document.querySelectorAll('a, button');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;
