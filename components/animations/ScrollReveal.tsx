"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
    once?: boolean;
    threshold?: number;
}

/**
 * Wrapper component for scroll-triggered animations
 * Uses Framer Motion's useInView hook to trigger animations when element enters viewport
 */
export default function ScrollReveal({
    children,
    variants,
    className = "",
    delay = 0,
    once = true,
    threshold = 0.1,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants || defaultVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
