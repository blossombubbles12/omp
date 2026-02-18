"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Container from "../ui/Container";
import GradientBlob from "../ui/GradientBlob";
import Button from "../ui/Button";
import { Play } from "lucide-react";

/**
 * Hero section with animated rotating text
 */
export default function HeroSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    };

    const rotatingWords = [
        "Burning Out.",
        "Stressed.",
        "Financially Strained.",
        "Overworked.",
        "Unsupported.",
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [rotatingWords.length]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.1] dark:opacity-[0.05]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white dark:via-transparent dark:to-gray-950 pointer-events-none" />

            {/* Animated Background Blobs */}
            <GradientBlob color="purple" size="lg" className="top-0 -right-48" />
            <GradientBlob color="blue" size="md" className="bottom-0 -left-32" />

            <Container className="relative z-10 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-8 border border-blue-100 dark:border-blue-800"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            NIGERIA'S FIRST RESILIENCE INFRASTRUCTURE
                        </motion.div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                            <span className="text-gray-900 dark:text-white">
                                The Average Workforce Is{" "}
                            </span>
                            <br />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWordIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent"
                                >
                                    {rotatingWords[currentWordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </h1>

                        {/* Subtext */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mb-10"
                        >
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                                Companies focus on productivity.
                            </p>
                            <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                                But who is protecting the people?
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button size="lg" href="/demo">
                                Request Demo
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection("solution")}
                            >
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>


                    {/* Hero Video Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative"
                    >
                        <div
                            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer aspect-video lg:aspect-[4/3] bg-gray-900"
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                src="https://res.cloudinary.com/dvbb1brsj/video/upload/v1646408863/VID-20220304-WA0002_gqebty.mp4"
                                className="w-full h-full object-cover"
                                loop
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />

                            {/* Overlay States */}
                            <AnimatePresence>
                                {!isPlaying && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-black/50 transition-colors duration-500"
                                    >
                                        <div className="relative">
                                            {/* Ripple effect */}
                                            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/30" />

                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:bg-blue-500 transition-colors">
                                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Pause Hint (Visible on hover when playing) */}
                            {isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
                                    <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <div className="flex gap-2">
                                            <div className="w-2 h-8 bg-white rounded-full" />
                                            <div className="w-2 h-8 bg-white rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Branding Overlay */}
                            <div className="absolute top-4 left-4 flex items-center gap-3 pointer-events-none">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <img
                                        src="/omplogo.png"
                                        alt="OMP Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-[10px] text-white font-bold tracking-widest">
                                    WATCH STORY
                                </div>
                            </div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-16 lg:mt-24 text-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block"
                    >
                        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
