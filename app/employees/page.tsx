"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientBlob from "@/components/ui/GradientBlob";
import {
    BrainCircuit,
    ShieldCheck,
    HeartPulse,
    Wallet,
    BookOpen,
    FileText,
    PlayCircle,
    Music,
    Image as ImageIcon,
    Newspaper,
    Wind,
    Stethoscope,
    ArrowRight,
    CheckCircle2,
    Users
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

/**
 * Employees page focusing on wellbeing, AI orchestration, and support materials
 */
export default function EmployeesPage() {
    const lifeAreas = [
        {
            title: "Mental Health",
            description: "Proactive emotional resilience and expert counseling when you need it most.",
            icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
            color: "rose"
        },
        {
            title: "Financial Wellness",
            description: "Tools and expert guidance to help you manage debt, save, and build long-term wealth.",
            icon: <Wallet className="w-8 h-8 text-emerald-500" />,
            color: "emerald"
        },
        {
            title: "Financial Literacy",
            description: "Master the fundamentals of personal finance with interactive resources and workshops.",
            icon: <BookOpen className="w-8 h-8 text-blue-500" />,
            color: "blue"
        }
    ];

    const wellnessMaterials = [
        {
            type: "Video",
            title: "Mindful Morning Routine",
            description: "A 10-minute guided session to start your day with clarity.",
            icon: <PlayCircle className="w-6 h-6" />,
            duration: "10 min"
        },
        {
            type: "Audio",
            title: "Deep Sleep Soundscape",
            description: "Ambient sounds designed by neuroscientists to improve sleep quality.",
            icon: <Music className="w-6 h-6" />,
            duration: "45 min"
        },
        {
            type: "Article",
            title: "The Science of Burnout",
            description: "Understanding the early warning signs and how to pivot.",
            icon: <Newspaper className="w-6 h-6" />,
            author: "Dr. Sarah Chen"
        },
        {
            type: "Interactive",
            title: "4-7-8 Breathing Technique",
            description: "A simple yet powerful tool for instant stress relief.",
            icon: <Wind className="w-6 h-6" />,
            isInteractive: true
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-rose-950/20">
                <GradientBlob color="rose" size="lg" className="-top-24 -right-24 opacity-20" />
                <GradientBlob color="blue" size="md" className="top-1/2 -left-24 opacity-20" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-bold mb-6">
                                BEYOND TRADITIONAL BENEFITS
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                                Your Wellbeing, <br />
                                <span className="bg-gradient-to-r from-rose-600 to-blue-600 bg-clip-text text-transparent">
                                    Intelligently Orchestrated.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                                Meet your private, secure AI assistant that connects you with the world's best specialists and resources tailored specifically for you.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" href="#ai-orchestrator" className="bg-rose-600 hover:bg-rose-700 border-none">
                                    Meet Your AI Assistant
                                </Button>
                                <Button size="lg" variant="outline" href="#life-areas">
                                    Explore Life Areas
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* AI Orchestrator Section */}
            <section id="ai-orchestrator" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-rose-600/20 blur-3xl rounded-full opacity-50" />
                                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                            <BrainCircuit className="text-white w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">OMP AI Assistant</h4>
                                            <span className="text-xs text-green-500 flex items-center gap-1 font-medium">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                Secured & Private
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl rounded-tl-none max-w-[80%]">
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                "I've analyzed your recent stress patterns. I've found 3 top-tier specialists who match your specific needs and have availability tomorrow. Would you like to see their profiles?"
                                            </p>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="p-4 bg-blue-600 text-white rounded-2xl rounded-tr-none max-w-[80%]">
                                                <p className="text-sm">"Yes, please. Especially someone who specializes in executive cognitive load."</p>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl rounded-tl-none max-w-[90%]">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                    <Stethoscope className="text-blue-600 w-5 h-5" />
                                                </div>
                                                <div className="text-xs">
                                                    <p className="font-bold text-gray-900 dark:text-white">Dr. Julia Vance</p>
                                                    <p className="text-gray-500 dark:text-gray-400">Cognitive Behavioral Specialist</p>
                                                </div>
                                                <div className="ml-auto bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold">
                                                    98% MATCH
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">Orchestrating booking now...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                                    Intelligent <span className="text-rose-600">Secured Specialist</span> Orchestration
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                    Our AI doesn't just search; it orchestrates. It navigates your secure network to find the absolute best specialist for your unique situation, ensuring quality and confidentiality.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Privacy First",
                                            desc: "Your data is anonymized and encrypted. Your employer never sees your personal requests."
                                        },
                                        {
                                            title: "The Best Match",
                                            desc: "Our algorithm considers clinical background, availability, and your personal pulse check-ins."
                                        },
                                        {
                                            title: "Frictionless Booking",
                                            desc: "From identification to appointment confirmation in under 60 seconds."
                                        }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mt-1">
                                                <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Life Areas Grid */}
            <section id="life-areas" className="py-24 bg-gray-50 dark:bg-gray-950">
                <Container>
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Holistic Life Areas
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                True wellbeing spans all areas of life. We provide expert support for the pillars that matter most.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {lifeAreas.map((area, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <Card className="h-full border-b-4 border-b-transparent hover:border-b-blue-600 dark:hover:border-b-blue-500 transition-all">
                                    <div className={`w-14 h-14 rounded-2xl bg-${area.color}-100 dark:bg-${area.color}-900/30 flex items-center justify-center mb-6`}>
                                        {area.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{area.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {area.description}
                                    </p>
                                    <Link href="/demo" className="text-sm font-bold flex items-center gap-2 text-blue-600 hover:gap-3 transition-all">
                                        Access Support <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* HMO Section */}
            <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 blur-3xl rounded-full" />
                <Container>
                    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6">
                                    ORGANIZATIONAL HMO COVERAGE
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                    Your Health Benefits, <br />
                                    <span className="text-blue-400">Crystal Clear.</span>
                                </h2>
                                <p className="text-xl text-blue-100/80 mb-10">
                                    Stop digging through PDFs. Get instant access to your coverage details, find nearby partner hospitals, and understand what's covered in seconds.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        "Real-time Coverage View",
                                        "Hospital Network Locator",
                                        "Digital Member Card",
                                        "Claims Status Tracking"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-blue-400 w-5 h-5 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <h4 className="text-lg font-bold mb-4">Coverage Overview</h4>
                                <div className="space-y-4">
                                    {[
                                        { label: "Outpatient Care", val: "Unlimited" },
                                        { label: "Dental Coverage", val: "Up to ₱50,000" },
                                        { label: "Emergency Room", val: "100% Covered" },
                                        { label: "Maternity", val: "Included" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex justify-between items-center pb-2 border-b border-white/10">
                                            <span className="text-blue-200">{stat.label}</span>
                                            <span className="font-bold">{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full mt-8 bg-white text-blue-900 hover:bg-blue-50 border-none">
                                    View Full Policy
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Wellness Library */}
            <section className="py-24 bg-gray-50 dark:bg-gray-950">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Wellness Materials</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">Guided support for every step of your journey.</p>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
                            {["All", "Videos", "Audios", "Articles", "Exercises"].map((cat) => (
                                <button key={cat} className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold whitespace-nowrap hover:border-blue-500 transition-colors">
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wellnessMaterials.map((material, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-4 transition-transform group-hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                {material.icon}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                            <span className="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold text-white uppercase tracking-wider">
                                                {material.type}
                                            </span>
                                            {material.duration && (
                                                <span className="text-[10px] text-white font-medium">{material.duration}</span>
                                            )}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                                        {material.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                        {material.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Breathing Exercise CTA */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <Container>
                    <div className="bg-rose-50 dark:bg-rose-950/20 rounded-3xl p-12 text-center border border-rose-100 dark:border-rose-900/30">
                        <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Wind className="w-10 h-10 text-rose-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Need a moment to breathe?</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                            Try our signature 1-minute guided resonance breathing tool. Scientifically proven to lower cortisol levels instantly.
                        </p>
                        <Button size="lg" className="bg-rose-600 hover:bg-rose-700 border-none">
                            Start Breathing Exercise
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-rose-600 to-indigo-700 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Your health is not a chore. <br />
                            It's an orchestration.
                        </h2>
                        <p className="text-xl mb-12 text-rose-100">
                            Join thousands of employees who have transformed their work-life resilience through OMP.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100" href="/demo">
                                Get Started Now
                            </Button>
                            <Link href="/" className="text-lg font-semibold hover:text-rose-100 underline decoration-2 underline-offset-8 transition-all">
                                Go Back Home
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
