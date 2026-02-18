"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxTextProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

/**
 * Parallax text effect component
 * Creates smooth scroll-based transform animations
 */
export default function ParallaxText({
    children,
    speed = 0.5,
    className = "",
}: ParallaxTextProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
