"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
    className?: string;
    color?: "purple" | "blue" | "pink" | "green" | "rose";
    size?: "sm" | "md" | "lg";
}

/**
 * Animated gradient blob for background decoration
 */
export default function GradientBlob({
    className = "",
    color = "purple",
    size = "md",
}: GradientBlobProps) {
    const colorClasses = {
        purple: "bg-gradient-to-br from-blue-400 to-indigo-600", // Adjusted from original purple
        blue: "bg-gradient-to-br from-sky-400 to-blue-600",
        pink: "bg-gradient-to-br from-rose-400 to-pink-600",
        rose: "bg-gradient-to-br from-pink-400 to-rose-600",
        green: "bg-gradient-to-br from-emerald-400 to-teal-600",
    };

    const sizeClasses = {
        sm: "w-64 h-64",
        md: "w-96 h-96",
        lg: "w-[600px] h-[600px]",
    };

    return (
        <motion.div
            className={`absolute rounded-full blur-3xl opacity-20 ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                borderRadius: ["30%", "40%", "30%"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}
