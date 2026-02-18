"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import { ArrowRight } from "lucide-react";

/**
 * How It Works section with interactive process steps
 */
export default function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Connect & Access",
            description: "Employees securely log in via web or mobile to access confidential support, book specialists, and explore wellness resources",
            icon: "🔐",
            gradient: "from-blue-500 to-sky-500",
            bgGradient: "from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20",
            borderColor: "border-blue-200 dark:border-blue-800",
        },
        {
            number: "02",
            title: "Engage & Heal",
            description: "Attend therapy sessions, use financial tools, complete wellness check-ins, and track personal growth on their journey to wellbeing",
            icon: "💚",
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
            borderColor: "border-emerald-200 dark:border-emerald-800",
        },
        {
            number: "03",
            title: "Insights & Impact",
            description: "Organizations receive anonymized workforce health metrics and trends to make data-driven decisions that improve employee wellbeing",
            icon: "📊",
            gradient: "from-purple-500 to-violet-500",
            bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
            borderColor: "border-purple-200 dark:border-purple-800",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] dark:opacity-[0.03]" />

            {/* Background Blob decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 border border-blue-100 dark:border-blue-800">
                            THE PROCESS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Simple Integration. <br />
                            <span className="text-blue-600">Deep Impact.</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            We&apos;ve designed the onboarding to be as low-friction for HR as it is high-value for employees.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Horizontal 3-Step Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <ScrollReveal delay={index * 0.15}>
                                <motion.div
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={`
                                        relative h-full p-10 rounded-[2.5rem]
                                        bg-white dark:bg-gray-900
                                        border border-gray-100 dark:border-gray-800
                                        shadow-xl hover:shadow-2xl
                                        transition-shadow duration-500
                                        group
                                    `}
                                >
                                    {/* Step Badge */}
                                    <div className={`
                                        inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                        bg-gradient-to-r ${step.gradient}
                                        text-white text-[10px] font-black uppercase tracking-widest mb-8
                                        shadow-lg shadow-blue-500/20
                                    `}>
                                        STEP {step.number}
                                    </div>

                                    {/* Icon Container */}
                                    <div className="relative mb-8">
                                        <div className={`absolute -inset-4 bg-gradient-to-br ${step.gradient} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity`} />
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                            className={`
                                                relative w-20 h-20
                                                rounded-2xl bg-gradient-to-br ${step.gradient}
                                                flex items-center justify-center
                                                shadow-xl
                                            `}
                                        >
                                            <span className="text-4xl">{step.icon}</span>
                                        </motion.div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </ScrollReveal>

                            {/* Arrow between steps (desktop only) */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                                    className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20"
                                >
                                    <div className={`
                                        flex items-center justify-center
                                        w-12 h-12 rounded-full
                                        bg-white dark:bg-gray-800
                                        border border-gray-100 dark:border-gray-700
                                        shadow-xl text-blue-600 dark:text-blue-400
                                    `}>
                                        <ArrowRight className="w-6 h-6 animate-pulse" />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                <ScrollReveal delay={0.6}>
                    <div className="mt-20 text-center">
                        <Button size="lg" href="/businesses">
                            View Full Organizational Roadmap
                        </Button>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
