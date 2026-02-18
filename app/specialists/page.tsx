"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientBlob from "@/components/ui/GradientBlob";
import {
    Stethoscope,
    Video,
    ShieldCheck,
    Users,
    Activity,
    ClipboardLink,
    Clock,
    Globe,
    Lock,
    Zap,
    MessageSquare,
    ClipboardCheck,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

/**
 * Specialists landing page focusing on telemedicine, practice management, and the clinical network
 */
export default function SpecialistsPage() {
    const clinicalTools = [
        {
            title: "Secured Telemedicine Hub",
            description: "High-definition video consultations with end-to-end encryption and integrated diagnostic tools.",
            icon: <Video className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Smart Practice Management",
            description: "Automated scheduling, intake forms, and follow-up tracking to minimize administrative load.",
            icon: <ClipboardCheck className="w-8 h-8 text-emerald-500" />
        },
        {
            title: "Collaboration Network",
            description: "Seamlessly consult with other specialists or refer patients back to primary care with full history.",
            icon: <Users className="w-8 h-8 text-indigo-500" />
        },
        {
            title: "Clinical Analytics",
            description: "Deep insights into patient outcomes and recovery trends to improve clinical decision-making.",
            icon: <Activity className="w-8 h-8 text-rose-500" />
        }
    ];

    const benefitPoints = [
        {
            title: "Global Reach, Local Impact",
            desc: "Treat patients from across the region focused on occupational health and resilience."
        },
        {
            title: "Predictive Triage Integration",
            desc: "Our AI assistant pre-screens cases so you can focus on where your expertise matters most."
        },
        {
            title: "Hassle-Free Billing",
            desc: "Integrated payment processing and automated HMO claim submissions."
        },
        {
            title: "Clinical Autonomy",
            desc: "Manage your own availability and practice style with our flexible digital infrastructure."
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20">
                <GradientBlob color="purple" size="lg" className="-top-24 -right-24 opacity-20" />
                <GradientBlob color="green" size="md" className="top-1/2 -left-24 opacity-20" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-bold mb-6">
                                FOR CLINICAL SPECIALISTS
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                                Scale Your Practice with <br />
                                <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                                    Digital Precision.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join an elite network of specialists delivering high-impact clinical care via the world&apos;s most secure telemedicine infrastructure.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" href="/demo" className="bg-emerald-600 hover:bg-emerald-700 border-none font-bold">
                                    Join the Network
                                </Button>
                                <Button size="lg" variant="outline" href="#tools">
                                    Explore Clinical Tools
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Network Stats / Confidence */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <ScrollReveal>
                            <div className="p-8">
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">500+</div>
                                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Vetted Specialists</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <div className="p-8 border-x border-gray-100 dark:border-gray-800">
                                <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
                                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Encrypted Uptime</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="p-8">
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">&lt; 5min</div>
                                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Patient Onboarding</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Specialized Tools Grid */}
            <section id="tools" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-3xl rounded-full" />
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Tools Designed for <br />
                                <span className="text-emerald-600">Clinical Excellence.</span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                We&apos;ve removed the friction between you and your patients. Our platform acts as your digital front office, clinical assistant, and billing department.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {clinicalTools.map((tool, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <Card className="p-10 hover:shadow-2xl transition-all border-none bg-white dark:bg-gray-900 shadow-xl group">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        {tool.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{tool.title}</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {tool.description}
                                    </p>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Secured Telemedicine Focus */}
            <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]" />
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <div className="relative">
                                <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full opacity-50" />
                                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 shadow-3xl">
                                    {/* Mock Telemedicine UI */}
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                            </div>
                                            <div className="px-3 py-1 rounded bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-tighter flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                                LIVE SESSION SECURED
                                            </div>
                                        </div>
                                        <div className="flex-1 rounded-2xl bg-gray-900 flex items-center justify-center border border-gray-700 relative group cursor-pointer">
                                            <div className="text-center group-hover:scale-110 transition-transform">
                                                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 border border-gray-700">
                                                    <Users className="w-10 h-10 text-gray-500" />
                                                </div>
                                                <p className="text-sm font-medium text-gray-400">Patient Video Stream</p>
                                            </div>
                                            <div className="absolute bottom-4 right-4 w-32 h-20 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center shadow-lg">
                                                <div className="text-[10px] text-gray-600">Specialist (You)</div>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex justify-center gap-6">
                                            {[1, 2, 3, 4].map((n) => (
                                                <div key={n} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
                                                    {n === 4 ? <ShieldCheck className="w-5 h-5 text-emerald-400" /> : <div className="w-2 h-2 bg-gray-600 rounded-full" />}
                                                </div>
                                            ))}
                                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer shadow-lg shadow-red-600/20">
                                                <Zap className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                    Clinical Grade. <br />
                                    <span className="text-emerald-400">Sovereign Privacy.</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                                    Our telemedicine hub isn&apos;t just about video calls. It&apos;s a clinical-first environment where data privacy and clinician experience are the primary architecture.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Zero-Knowledge Encryption",
                                            desc: "We don't store your session data. What happens in the consult stays in the consult."
                                        },
                                        {
                                            title: "Integrated Diagnostics",
                                            desc: "Review medical history, current vitals, and AI triage summaries in a single pane of glass."
                                        },
                                        {
                                            title: "Verified Credentials",
                                            desc: "Join a community where every specialist is rigorously vetted for quality and professional standing."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Why Join Section */}
            <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
                <Container>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Built for the Modern Clinician</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">Digital infrastructure that respects your expertise and your time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefitPoints.map((point, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 h-full hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <ArrowRight className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{point.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{point.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-emerald-600 to-indigo-700 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to transform your practice?
                        </h2>
                        <p className="text-xl mb-12 text-emerald-100">
                            Apply to join our network of specialists and start delivering world-class clinical care today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100" href="/demo">
                                Apply to Join Network
                            </Button>
                            <Link href="/technology" className="text-lg font-semibold hover:text-emerald-100 underline decoration-2 underline-offset-8 transition-all">
                                Learn about our Security
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

// Dummy check circle for missing imports
function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
