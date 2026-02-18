"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glassmorphism?: boolean;
}

/**
 * Card component with optional glassmorphism effect and hover animations
 */
export default function Card({
    children,
    className = "",
    hover = true,
    glassmorphism = false,
}: CardProps) {
    const baseClasses = "rounded-2xl p-6 transition-all duration-300";

    const styleClasses = glassmorphism
        ? "bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/50"
        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg";

    return (
        <motion.div
            whileHover={hover ? { y: -4, scale: 1.02 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(baseClasses, styleClasses, className)}
        >
            {children}
        </motion.div>
    );
}
