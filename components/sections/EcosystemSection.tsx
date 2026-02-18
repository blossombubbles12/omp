"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import {
    Video,
    HeartPulse,
    ArrowRight,
    Target
} from "lucide-react";

/**
 * Ecosystem section for the homepage highlighting the three pillars
 */
export default function EcosystemSection() {
    const pillars = [
        {
            title: "For Employees",
            subtitle: "Personalized Support",
            description: "An intelligently orchestrated hub for mental health, financial wellness, and local HMO access.",
            features: ["AI Specialist Matching", "Wellness Materials Library", "1-Min Resonance Breathing"],
            icon: <HeartPulse className="w-10 h-10 text-rose-500" />,
            color: "rose",
            href: "/employees",
            bg: "bg-rose-50/50 dark:bg-rose-950/10",
            border: "border-rose-100 dark:border-rose-900/30"
        },
        {
            title: "For Businesses",
            subtitle: "Workforce Infrastructure",
            description: "Predictive analytics and ROI-driven support systems to protect your organization's most valuable asset.",
            features: ["Predictive Attrition Risk", "HMO Policy Optimization", "Audit-Ready Compliance"],
            icon: <Target className="w-10 h-10 text-blue-500" />,
            color: "blue",
            href: "/businesses",
            bg: "bg-blue-50/50 dark:bg-blue-950/10",
            border: "border-blue-100 dark:border-blue-900/30"
        },
        {
            title: "For Specialists",
            subtitle: "Clinical Precision",
            description: "A secured telemedicine environment designed for high-impact care delivery and practice management.",
            features: ["Encrypted Video Hub", "Clinical Practice Tools", "Verified Referral Network"],
            icon: <Video className="w-10 h-10 text-emerald-500" />,
            color: "emerald",
            href: "/specialists",
            bg: "bg-emerald-50/50 dark:bg-emerald-950/10",
            border: "border-emerald-100 dark:border-emerald-900/30"
        }
    ];

    return (
        <section id="ecosystem" className="py-24 bg-white dark:bg-gray-900 relative">
            <Container>
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 border border-blue-100 dark:border-blue-800 uppercase tracking-widest">
                            The Ecosystem
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Three Pillars. One <span className="text-blue-600">Unified Platform.</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            OMP connects organizations, employees, and clinical specialists through a single, secure resilience infrastructure.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className={`h-full p-10 rounded-[3rem] ${pillar.bg} border ${pillar.border} transition-all duration-300 group relative overflow-hidden`}
                            >
                                <div className="relative z-10">
                                    <div className="mb-8 p-4 inline-block rounded-2xl bg-white dark:bg-gray-800 shadow-xl group-hover:scale-110 transition-transform">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                                        {pillar.subtitle}
                                    </h4>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                        {pillar.description}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {pillar.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button href={pillar.href} variant="outline" className="w-full justify-between group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                                        Explore More
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
