"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    href?: string;
}

const MotionLink = motion.create(Link);

/**
 * Animated button component with multiple variants.
 * If 'href' is provided, it renders as a Next.js Link.
 */
export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    href,
    type = "button",
    ...props
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variantClasses = {
        primary:
            "bg-gradient-to-r from-blue-600 to-sky-600 text-white hover:from-blue-700 hover:to-sky-700 focus:ring-blue-500 shadow-lg shadow-blue-500/30",
        secondary:
            "bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 focus:ring-gray-500",
        outline:
            "border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedClasses = cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    if (href) {
        return (
            <MotionLink
                href={href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={combinedClasses}
            >
                {children}
            </MotionLink>
        );
    }

    return (
        <motion.button
            type={type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClasses}
            {...(props as HTMLMotionProps<"button">)}
        >
            {children}
        </motion.button>
    );
}
