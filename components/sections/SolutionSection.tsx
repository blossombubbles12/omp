"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { slideInLeft, slideInRight } from "../animations/variants";
import { Activity, Banknote, BarChart3, Brain, FileHeart, ShieldCheck } from "lucide-react";

/**
 * Solution section explaining the unified platform
 */
export default function SolutionSection() {
    const features = [
        {
            icon: <Brain className="w-10 h-10 text-blue-500" />,
            title: "Mental Health Access",
            description: "Direct access to licensed therapists and mental health specialists",
        },
        {
            icon: <Banknote className="w-10 h-10 text-green-500" />,
            title: "Financial Support",
            description: "Curated financial wellness partners and resources",
        },
        {
            icon: <FileHeart className="w-10 h-10 text-red-500" />,
            title: "HMO Clarity",
            description: "Clear visibility into healthcare coverage and benefits",
        },
        {
            icon: <Activity className="w-10 h-10 text-sky-500" />,
            title: "Daily Check-ins",
            description: "Emotional wellness tracking and early intervention",
        },
        {
            icon: <BarChart3 className="w-10 h-10 text-indigo-500" />,
            title: "Data Insights",
            description: "Anonymized workforce analytics for employers",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-teal-500" />,
            title: "Preventive Analytics",
            description: "Identify trends before they become crises",
        },
    ];

    return (
        <section id="solution" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] dark:opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 border border-blue-100 dark:border-blue-800">
                            THE SOLUTION
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            A Unified{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                                Resilience Ecosystem
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Beyond single-point solutions. We provide a complete interconnected infrastructure for sustainable performance.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="h-full"
                            >
                                <div className="h-full p-8 lg:p-10 rounded-[2.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative">
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50 dark:bg-blue-950/30 rounded-full blur-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
