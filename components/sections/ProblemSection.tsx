"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import ScrollReveal from "../animations/ScrollReveal";
import StatCounter from "../ui/StatCounter";

/**
 * Problem section highlighting workforce crisis statistics
 */
export default function ProblemSection() {
    const problems = [
        {
            title: "Employee Burnout",
            description: "Chronic workplace stress leading to exhaustion and reduced performance",
            gradient: "from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20",
            borderColor: "border-rose-200 dark:border-rose-800",
            iconBg: "bg-rose-500/10 dark:bg-rose-500/20",
            icon: "🔥",
        },
        {
            title: "Financial Pressure",
            description: "Loan traps and financial stress affecting work and home life",
            gradient: "from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20",
            borderColor: "border-amber-200 dark:border-amber-800",
            iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
            icon: "💰",
        },
        {
            title: "Mental Health Crisis",
            description: "Limited access to mental health support and stigma around seeking help",
            gradient: "from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20",
            borderColor: "border-purple-200 dark:border-purple-800",
            iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
            icon: "🧠",
        },
        {
            title: "Healthcare Confusion",
            description: "HMO complexity and lack of clarity on coverage and access",
            gradient: "from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20",
            borderColor: "border-cyan-200 dark:border-cyan-800",
            iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
            icon: "🏥",
        },
        {
            title: "Physical Health Neglect",
            description: "Preventable health issues ignored due to time and access constraints",
            gradient: "from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20",
            borderColor: "border-emerald-200 dark:border-emerald-800",
            iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
            icon: "❤️",
        },
        {
            title: "Workplace Silence",
            description: "Culture of silence preventing employees from seeking support",
            gradient: "from-slate-100 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20",
            borderColor: "border-slate-200 dark:border-slate-800",
            iconBg: "bg-slate-500/10 dark:bg-slate-500/20",
            icon: "🤐",
        },
    ];

    const stats = [
        { value: 67, suffix: "%", label: "of employees report burnout" },
        { value: 82, suffix: "%", label: "struggle with financial stress" },
        { value: 45, suffix: "%", label: "have untreated mental health issues" },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 dark:bg-red-900/10 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-30" />

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold mb-6 border border-red-100 dark:border-red-800">
                            THE CURRENT CRISIS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            The Crisis Behind The Productivity Metrics
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Organizations are losing their most valuable asset, their people.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Statistics */}
                <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="text-center p-8 rounded-[2rem] bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-blue-100 dark:border-blue-900/50 shadow-xl hover:shadow-blue-500/10 transition-all"
                            >
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                                    <StatCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Floating Problem Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                    rotate: index % 2 === 0 ? 0.5 : -0.5,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                className={`
                                    relative p-10 rounded-[2.5rem]
                                    bg-gradient-to-br ${problem.gradient}
                                    backdrop-blur-sm
                                    border-2 ${problem.borderColor}
                                    shadow-lg hover:shadow-2xl
                                    transition-all duration-300
                                    group h-full
                                `}
                            >
                                {/* Icon - Now aligned left */}
                                <div className={`
                                    w-16 h-16 rounded-2xl ${problem.iconBg}
                                    flex items-center justify-center
                                    mb-4
                                    group-hover:scale-110 transition-transform duration-300
                                `}>
                                    <span className="text-3xl">{problem.icon}</span>
                                </div>

                                {/* Title - Left aligned */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-left">
                                    {problem.title}
                                </h3>

                                {/* Description - Left aligned */}
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                                    {problem.description}
                                </p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-current opacity-20" />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
