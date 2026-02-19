"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientBlob from "@/components/ui/GradientBlob";
import {
    Cpu,
    Lock,
    Smartphone,
    Database,
    Cloud,
    ShieldAlert,
    Zap,
    Share2,
    Fingerprint,
    Code2,
    Binary,
    Network,
    ShieldCheck,
    Globe,
    Server,
    Layers,
    Activity,
    BrainCircuit,
    FileText
} from "lucide-react";

/**
 * Technology page detailing the platform's infrastructure, AI capabilities, and security
 */
export default function TechnologyPage() {
    const techPillars = [
        {
            title: "Privacy-First Architecture",
            description: "Built on military-grade AES-256 encryption. We ensure that individual mental health and medical data remains strictly confidential, with only anonymized trends exposed to organizations.",
            icon: <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            features: ["End-to-End Encryption", "Anonymization Layer", "SOC2 Compliance Ready", "Zero-Knowledge Proofs"]
        },
        {
            title: "Predictive AI Engine",
            description: "Our proprietary machine learning models analyze behavioral patterns and wellness metrics to identify burnout risks up to 3 months before they manifest.",
            icon: <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
            features: ["Behavioral Nuance Detection", "Predictive Triage", "Real-time Risk Scoring", "Custom Training Loops"]
        },
        {
            title: "Omni-Channel Access",
            description: "A seamless experience across Web, iOS, and Android. Built with a mobile-first philosophy to ensure support is reachable even in low-bandwidth environments.",
            icon: <Smartphone className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
            features: ["Progressive Web App", "Native Mobile Apps", "Offline Mode Support", "Edge Cache Delivery"]
        },
        {
            title: "Interoperable Core",
            description: "Designed to sync effortlessly with global HRIS platforms and local HMO providers. We act as the glue between your existing tools and employee health.",
            icon: <Share2 className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
            features: ["RESTful API Support", "Webhook Integrations", "Single Sign-On (SSO)", "HL7/FHIR Standards"]
        }
    ];

    const securityFeatures = [
        {
            title: "Data Residency",
            description: "Regional data storage ensures compliance with local laws like GDPR and NDPR.",
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "Identity Management",
            description: "SAML 2.0 and OIDC support for enterprise-wide secure authentication.",
            icon: <Fingerprint className="w-5 h-5" />
        },
        {
            title: "Encryption at Rest",
            description: "All database volumes are encrypted using AWS KMS managed keys.",
            icon: <ShieldCheck className="w-5 h-5" />
        },
        {
            title: "Real-time Monitoring",
            description: "Continuous automated security scanning and threat detection.",
            icon: <Activity className="w-5 h-5" />
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-36 overflow-hidden bg-white dark:bg-gray-950">
                <GradientBlob color="blue" size="lg" className="-top-48 -left-48 opacity-40" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                <Container className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 border border-blue-100 dark:border-blue-800">
                            <Binary className="w-4 h-4" />
                            <span>ENGINEERING EXCELLENCE</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
                            The Tech Behind <br />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Workforce Resilience.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            A fusion of deep medical expertise and modern software engineering. We've built an infrastructure capable of transforming thousands of lives in real-time.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button size="lg" href="/whitepaper" className="gap-2">
                                <FileText className="w-5 h-5" />
                                Investor Whitepaper
                            </Button>
                            <Button size="lg" variant="outline" onClick={() => {
                                document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
                            }}>Security Overview</Button>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Tech Pillars Grid */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {techPillars.map((pillar, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="p-8 lg:p-12 rounded-[2rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all group h-full">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                                            <div className="group-hover:text-white transition-colors duration-500">
                                                {pillar.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                                {pillar.description}
                                            </p>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {pillar.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                        <Zap className="w-4 h-4 text-blue-500" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* AI Engine Deep Dive */}
            <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
                <GradientBlob color="purple" size="lg" className="bottom-0 right-0 opacity-10" />
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-bold mb-6 border border-purple-100 dark:border-purple-800">
                                    <BrainCircuit className="w-4 h-4" />
                                    <span>ADVANCED ML PIPELINE</span>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    The Predictive <br /><span className="text-purple-600">Resilience Engine</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Our AI doesn't just react—it anticipates. By analyzing multi-dimensional data points ranging from interaction frequency to clinical assessment shifts, we identify emerging crisis patterns.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { t: "Dynamic Feature Engineering", d: "Automatic extraction of behavioral markers from anonymized sessions." },
                                        { t: "Ethical AI Guardrails", d: "Strict bias prevention and differential privacy for all model training." },
                                        { t: "Predictive Scoring", d: "Proprietary algorithms that assign 1-100 risk scores per cohort." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.t}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="lg:w-1/2 relative bg-gray-900 rounded-[2.5rem] p-8 aspect-video flex items-center justify-center border border-gray-800 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 opacity-30">
                                <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
                            </div>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
                                >
                                    <div className="text-xs font-bold mb-2 text-blue-400">INPUT LAYER</div>
                                    <div className="text-2xl font-black">2.4M</div>
                                    <div className="text-[10px] opacity-60 uppercase tracking-tighter">Data points processed</div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
                                >
                                    <div className="text-xs font-bold mb-2 text-purple-400">ACCURACY</div>
                                    <div className="text-2xl font-black">98.2%</div>
                                    <div className="text-[10px] opacity-60 uppercase tracking-tighter">Prediction Confidence</div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
                                >
                                    <div className="text-xs font-bold mb-2 text-emerald-400">RESPONSE</div>
                                    <div className="text-2xl font-black">&lt;200ms</div>
                                    <div className="text-[10px] opacity-60 uppercase tracking-tighter">Inference Latency</div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
                                >
                                    <div className="text-xs font-bold mb-2 text-rose-400">UPTIME</div>
                                    <div className="text-2xl font-black">99.99%</div>
                                    <div className="text-[10px] opacity-60 uppercase tracking-tighter">System Availability</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Architecture Visualization Section */}
            <section id="architecture" className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="relative">
                                {/* Visual Mockup of Tech Stack */}
                                <div className="space-y-4">
                                    <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg border border-white/10">
                                        <div className="flex items-center gap-4 text-white">
                                            <Layers className="w-6 h-6" />
                                            <div>
                                                <div className="text-xs opacity-70 uppercase font-bold tracking-widest mb-1">Layer 1: Experience</div>
                                                <div className="font-bold">React-Native & Next.js Omni-Hub</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-8 p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800">
                                        <div className="flex items-center gap-4 text-white">
                                            <Server className="w-6 h-6 text-purple-400" />
                                            <div>
                                                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Layer 2: Engine</div>
                                                <div className="font-bold text-purple-400">Distributed AI Microservices</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-16 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                                            <Database className="w-6 h-6 text-blue-500" />
                                            <div>
                                                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Layer 3: Data</div>
                                                <div className="font-bold">Sharded Multi-Tenant Data Vault</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center pt-8">
                                        <div className="w-1 h-12 border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
                                    </div>
                                    <div className="text-center">
                                        <div className="inline-block px-6 py-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-bold border border-emerald-500/20">
                                            Global Infrastructure Mesh
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    Secure by Design. <br />
                                    <span className="text-blue-600">Enterprise Ready.</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    We don't just build features; we build systems. Our technology is designed to handle the complex, sensitive nature of healthcare data while providing the speed organizational leaders need.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {securityFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                                <span className="text-blue-600">{feature.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{feature.title}</h4>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-6 rounded-2xl bg-blue-600 text-white italic">
                                    "Our goal was to create a platform that feels like it belongs in 2030—where security is implicit, and empathy is powered by data."
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Container>
            </section>

            {/* Global Infrastructure */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <Container>
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Deployed on a <span className="text-blue-600">Global Scale</span></h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Leveraging edge computing and localized data silos to ensure zero latency and full compliance across every continent.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Edge Networks", desc: "Content delivery through a global mesh of CDN nodes for instant loading.", icon: <Network /> },
                            { title: "Auto-Scaling", desc: "Real-time resource allocation based on concurrent session spikes.", icon: <Zap /> },
                            { title: "DR Sites", desc: "Redundant hot-swappable data centers for maximum business continuity.", icon: <Cloud /> }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all text-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-6 text-blue-600">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
                <Container>
                    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-8 lg:p-20 text-center text-white relative overflow-hidden shadow-3xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">Want to dive deeper into our stack?</h2>
                            <p className="text-xl text-blue-100 opacity-80 mb-10 max-w-2xl mx-auto">
                                Schedule a technical deep-dive with our engineering team to understand how we protect your data and your people.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" href="/whitepaper">
                                    Download Whitepaper
                                </Button>
                                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" href="/demo">
                                    Technical Briefing
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
