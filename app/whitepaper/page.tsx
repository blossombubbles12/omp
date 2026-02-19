"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import {
    FileText,
    Printer,
    Download,
    ShieldCheck,
    ArrowRight,
    BrainCircuit,
    TrendingUp,
    Lock,
    Cpu,
    Globe,
    Zap,
    Users
} from "lucide-react";

/**
 * Investor Whitepaper Page
 * Designed for on-screen reading and professional PDF/Print output
 */
export default function WhitepaperPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-blue-100 dark:selection:bg-blue-900">
            {/* Action Bar (Hidden on Print) */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4 print:hidden">
                <Container className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-sm tracking-tight">OMP INVESTOR BRIEFING 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
                            <Printer className="w-4 h-4" />
                            Print to PDF
                        </Button>
                        <Button size="sm" className="hidden sm:flex gap-2" href="/demo">
                            Invest Now
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </Container>
            </div>

            {/* Whitepaper Content */}
            <article className="py-20 print:py-0 print:text-black">
                <Container className="max-w-4xl">
                    {/* Cover Page */}
                    <header className="mb-24 text-center aspect-[1/1.414] flex flex-col justify-center items-center border-[12px] border-blue-600/10 p-12 relative overflow-hidden print:border-none print:h-screen">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full -ml-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full -mr-32 -mb-32 blur-3xl" />

                        <div className="mb-12 relative">
                            <Image
                                src="/omplogo.png"
                                alt="OMP Logo"
                                width={200}
                                height={80}
                                className="object-contain dark:invert print:invert-0"
                                priority
                            />
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest uppercase mb-4">
                                Confidential Investor Document
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                                The Future of <br />
                                <span className="text-blue-600">Workforce <br />Resilience</span>
                            </h1>
                            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium">
                                Technical Innovation, Market Disruption, and the AI Infrastructure for Employee Mental Health.
                            </p>
                        </div>

                        <div className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-800 w-full flex justify-between items-end">
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Prepared For</div>
                                <div className="font-bold text-sm">Strategic Partners & Investors</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Release Date</div>
                                <div className="font-bold text-sm">Q1 2026</div>
                            </div>
                        </div>
                    </header>

                    {/* Section 1: Executive Summary */}
                    <section className="mb-24 space-y-8">
                        <h2 className="text-3xl font-bold flex items-center gap-3 border-b-2 border-blue-600 pb-4 inline-block">
                            01. Executive Summary
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 italic">
                            Occupational Medicine Practice (OMP) is not just a healthcare provider; it is the technological backbone for the modern, resilient organization. By fusing deep clinical expertise with predictive AI, we solve the $1T global productivity loss caused by workplace burnout.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                                <h4 className="font-bold mb-4 text-blue-600">The Problem</h4>
                                <p className="text-sm">Traditional EAPs are reactive, with &lt;5% engagement rates. Organizations lack the visibility to intervene before mental health crises manifest into attrition.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-600 text-white">
                                <h4 className="font-bold mb-4 text-blue-50">The OMP Solution</h4>
                                <p className="text-sm">A predictive, AI-orchestrated ecosystem that identifies resilience gaps in real-time and automates specialist interventions at scale.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Technological Advantage */}
                    <section className="mb-24 space-y-12">
                        <h2 className="text-3xl font-bold flex items-center gap-3 border-b-2 border-blue-600 pb-4 inline-block">
                            02. Technological Advantage
                        </h2>

                        <div className="space-y-16">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                                        <BrainCircuit className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Predictive AI Pipeline</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 font-serif">
                                    Our proprietary models transition mental health from sentiment to science. Using multi-modal data streams, OMP achieves a 94.2% accuracy in predicting burnout risk within a 90-day window.
                                </p>
                                <ul className="space-y-4 ml-4">
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                        <span className="text-sm"><strong>Anonymized Pattern Recognition:</strong> Identifying cohort-level shifts without compromising individual privacy.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                        <span className="text-sm"><strong>Automated Triage:</strong> Seamlessly matching high-risk employees with the right specialist via our proprietary allocation engine.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Military-Grade Security</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 font-serif">
                                    Healthcare data requires absolute trust. OMP's architecture is built on a Zero-Knowledge framework, ensuring that even our own engineers cannot decrypt sensitive patient-specialist interactions.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { l: "AES-256", d: "Encryption" },
                                        { l: "HIPAA", d: "Compliant" },
                                        { l: "GDPR", d: "Ready" },
                                        { l: "SOC2", d: "Certified" }
                                    ].map((item, i) => (
                                        <div key={i} className="text-center p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                            <div className="font-black text-blue-600 text-xs tracking-widest">{item.l}</div>
                                            <div className="text-[10px] text-gray-400 uppercase font-bold">{item.d}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: The Ecosystem */}
                    <section className="mb-24 space-y-8 bg-gray-50 dark:bg-gray-900 -mx-12 px-12 py-16 rounded-[3rem] print:bg-white print:border print:border-gray-200">
                        <h2 className="text-3xl font-bold mb-4">03. The Unified Ecosystem</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-12">
                            OMP integrates three distinct user experiences into a single, high-performance API mesh.
                        </p>

                        <div className="space-y-8">
                            {[
                                { t: "The Command Center (Employers)", d: "Real-time population health analytics, HMO spend optimization, and compliance reporting." },
                                { t: "The Resilience Hub (Employees)", d: "On-demand specialist access, resonance breathing tools, and financial wellness tracking." },
                                { t: "The Clinical Suite (Specialists)", d: "Secured telemedicine portal, EHR integration, and automated practice management." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-lg mb-2">{item.t}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-serif">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Market Dynamics & ROI */}
                    <section className="mb-24 space-y-12">
                        <h2 className="text-3xl font-bold flex items-center gap-3 border-b-2 border-blue-600 pb-4 inline-block">
                            04. Market Potential & ROI
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 text-center bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                                <div className="text-4xl font-black mb-1">5.4x</div>
                                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Est. ROI per $1 Spent</div>
                            </div>
                            <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-800">
                                <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                <div className="text-4xl font-black mb-1">82%</div>
                                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Expected Engagement</div>
                            </div>
                            <div className="p-8 text-center bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-800">
                                <Zap className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                                <div className="text-4xl font-black mb-1">40%</div>
                                <div className="text-xs text-gray-500 uppercase font-black tracking-widest">Attrition Reduction</div>
                            </div>
                        </div>

                        <div className="p-8 border-l-4 border-blue-600 bg-gray-50 dark:bg-gray-900 italic font-serif">
                            "In an era where remote and hybrid work is the norm, organizational health isn't a benefit—it's infrastructure. OMP is building the power grid for workforce human-capital."
                        </div>
                    </section>

                    {/* Section 5: Conclusion */}
                    <section className="mb-24 text-center py-20 border-t border-gray-100 dark:border-gray-800">
                        <h2 className="text-4xl font-bold mb-8">Building the Future of Work.</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-serif">
                            We invite visionary investors to join us in scaling the OMP platform globally. To discuss strategic partnerships, funding rounds, or technical deep-dives, please contact our founding team.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 print:hidden">
                            <Button size="lg" className="px-12 py-6 text-lg" href="/demo">
                                Request Investment Briefing
                            </Button>
                            <Button size="lg" variant="outline" className="px-12 py-6 text-lg" onClick={handlePrint}>
                                Print Copy
                            </Button>
                        </div>

                        <div className="mt-20 flex flex-col items-center">
                            <Image
                                src="/omplogo.png"
                                alt="OMP Logo"
                                width={120}
                                height={50}
                                className="opacity-50 dark:invert print:invert-0"
                            />
                            <div className="mt-4 text-[10px] text-gray-400 uppercase font-black tracking-tighter">
                                © 2026 Occupational Medicine Practice. All Rights Reserved.
                            </div>
                        </div>
                    </section>
                </Container>
            </article>

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    body {
                        background-color: white !important;
                        color: black !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    article {
                        padding: 0 !important;
                    }
                    section {
                        page-break-inside: avoid;
                    }
                    h1, h2, h3 {
                        color: #1d4ed8 !important; /* blue-700 */
                    }
                }
            `}</style>
        </div>
    );
}

