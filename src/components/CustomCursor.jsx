import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over interactive elements
            if (
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.closest('button') ||
                e.target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Use spring transition for smooth following
    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: "rgba(139, 92, 246, 0.5)",
            mixBlendMode: "screen"
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: 1.5,
            backgroundColor: "rgba(59, 130, 246, 0.4)",
            mixBlendMode: "screen",
            border: "1px solid rgba(255, 255, 255, 0.8)",
        }
    };

    return (
        <>
            <style>{`
        body {
          cursor: none; /* Hide default cursor */
        }
        @media (max-width: 768px) {
          body {
            cursor: auto; /* Show on mobile */
          }
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
            <motion.div
                className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center backdrop-blur-sm"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            >
                <div className="w-1 h-1 bg-white rounded-full bg-opacity-80" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
