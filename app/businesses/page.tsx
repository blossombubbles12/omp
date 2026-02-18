"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientBlob from "@/components/ui/GradientBlob";
import StatCounter from "@/components/ui/StatCounter";
import {
    Users,
    TrendingUp,
    ShieldCheck,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Target,
    Zap,
    HeartPulse
} from "lucide-react";
import Link from "next/link";

/**
 * Businesses page highlighting benefits for employers and organizations
 */
export default function BusinessesPage() {
    const businessBenefits = [
        {
            title: "Retention & Loyalty",
            description: "Reduce turnover by up to 25% by addressing the root causes of executive burnout and workplace stress before they lead to exits.",
            icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            color: "blue"
        },
        {
            title: "Strategic Productivity",
            description: "Recover lost hours by optimizing employee focus. A resilient workforce is 3x more likely to be engaged and high-performing.",
            icon: <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
            color: "emerald"
        },
        {
            title: "Risk & Compliance",
            description: "Proactively manage psychosocial hazards and fulfill your 'Duty of Care' with auditable wellbeing support infrastructure.",
            icon: <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
            color: "purple"
        },
        {
            title: "HMO Optimization",
            description: "Reduce insurance premiums by focusing on preventative care. Address health issues early to prevent expensive hospitalizations.",
            icon: <HeartPulse className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
            color: "rose"
        }
    ];

    const stats = [
        { value: 3.2, suffix: "x", label: "Return on Investment" },
        { value: 25, suffix: "%", label: "Lower Attrition Rate" },
        { value: 40, suffix: "%", label: "Fewer Sick Days" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
                <GradientBlob color="blue" size="lg" className="-top-24 -right-24" />
                <GradientBlob color="purple" size="md" className="top-1/2 -left-24" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold mb-6">
                                FOR EMPLOYERS & BUSINESS LEADERS
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                                Protect Your Most <br />
                                <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                                    Valuable Asset.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                                Move beyond traditional HR perks. Build a high-performance culture backed by resilient workforce infrastructure.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" href="/demo">
                                    Schedule ROI Briefing
                                </Button>
                                <Button size="lg" variant="outline" onClick={() => {
                                    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Explore Benefits
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-white dark:bg-gray-900 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-2">
                                        <StatCounter end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg">{stat.label}</h3>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Core Benefits Grid */}
            <section id="benefits" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 dark:bg-blue-600/10 blur-3xl rounded-full" />

                <Container className="relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Strategic Benefits for Scale
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                We help you quantify wellbeing. Transform soft sentiments into hard metrics that impact the bottom line.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {businessBenefits.map((benefit, index) => (
                            <ScrollReveal key={index} delay={index * 0.15}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="h-full p-8 lg:p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-shadow"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-${benefit.color}-100 dark:bg-${benefit.color}-900/30 flex items-center justify-center mb-8`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Dashboard Showcase */}
            <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                                    The "Command Center" <br />
                                    <span className="text-blue-600">for Workforce Health.</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Anonymized Analytics",
                                            desc: "See workforce stress trends without compromising employee privacy."
                                        },
                                        {
                                            title: "Risk Prediction",
                                            desc: "Identify departments at risk of burnout before performance dips."
                                        },
                                        {
                                            title: "Customized Intervention",
                                            desc: "Deploy support exactly where it's needed based on real data."
                                        }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                                                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Button size="lg" variant="outline" href="/demo">
                                        View Dashboard Demo
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full opacity-50" />
                                <div className="relative bg-gray-900 rounded-3xl p-4 shadow-2xl border border-gray-800">
                                    {/* Mock Dashboard UI */}
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="text-xs text-gray-400 uppercase tracking-widest">Resilience Dashboard v1.0</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                                            <div className="text-xs text-gray-400 mb-1">Company Health Score</div>
                                            <div className="text-2xl font-bold text-emerald-400">84/100</div>
                                        </div>
                                        <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                                            <div className="text-xs text-gray-400 mb-1">Engagement Rate</div>
                                            <div className="text-2xl font-bold text-blue-400">92%</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                                        <div className="text-xs text-gray-400 mb-4">Burnout Risk Trends (Anonymized)</div>
                                        <div className="h-32 flex items-end gap-2">
                                            {[40, 65, 30, 80, 50, 70, 45, 90, 60, 85].map((h, idx) => (
                                                <div key={idx} className="flex-1 bg-gradient-to-t from-blue-600 to-sky-400 rounded-t-xs" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Why Us? */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Why Partner with Us?</h2>
                        <p className="text-xl text-gray-400">We speak the language of business and medicine.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Clinical Integrity",
                                desc: "Led by occupational medicine experts with deep clinical roots.",
                                icon: <Zap className="w-8 h-8" />
                            },
                            {
                                title: "Data Privacy First",
                                desc: "Rigorous standards for anonymization to protect your people and your brand.",
                                icon: <BarChart3 className="w-8 h-8" />
                            },
                            {
                                title: "Scalable Infrastructure",
                                desc: "Built to handle 5 or 50,000 employees with ease.",
                                icon: <Target className="w-8 h-8" />
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                                <div className="text-blue-400 mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-blue-600 to-sky-700 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 capitalize">
                            Invest in your organization's future today.
                        </h2>
                        <p className="text-xl mb-12 text-blue-100 italic">
                            "The best organizations aren't those without problems, but those with the resilience to solve them."
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" href="/demo">
                                Request a Demo
                            </Button>
                            <Link href="/" className="text-lg font-semibold hover:text-blue-100 underline decoration-2 underline-offset-8 transition-all">
                                Go Back Home
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
