"use client";

import Container from "../ui/Container";
import ScrollReveal from "../animations/ScrollReveal";
import GradientBlob from "../ui/GradientBlob";

/**
 * Employer positioning section
 */
export default function EmployerSection() {
    const notList = [
        "Not payroll software",
        "Not just HMO",
        "Not just therapy booking",
        "Not another dashboard to ignore",
    ];

    return (
        <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.08] pointer-events-none" />
            <GradientBlob color="blue" size="lg" className="-top-48 -right-48 opacity-20" />

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-blue-400 text-xs font-bold mb-6 border border-white/10">
                            POSITIONING
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                            Not Another HR Tool.
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* What it's NOT */}
                        <div className="p-10 lg:p-14 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-8 text-gray-400 flex items-center gap-3">
                                <span className="w-8 h-px bg-gray-700" />
                                This is NOT:
                            </h3>
                            <ul className="space-y-6">
                                {notList.map((item, index) => (
                                    <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                                        <li className="flex items-center space-x-4 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                                <span className="text-xl font-bold">✕</span>
                                            </div>
                                            <span className="text-xl text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </div>

                        {/* What it IS */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <ScrollReveal delay={0.5}>
                                <div className="relative p-10 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-sky-600/20 backdrop-blur-2xl border border-blue-500/30">
                                    <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent uppercase tracking-tighter">
                                        It IS:
                                    </h3>
                                    <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
                                        Workforce Resilience <br />
                                        <span className="text-blue-400">Infrastructure.</span>
                                    </p>
                                    <p className="text-gray-300 text-xl font-light leading-relaxed">
                                        The invisible foundation that protects your most valuable asset from the volatility of modern life.
                                    </p>

                                    <div className="mt-10 flex flex-wrap gap-4">
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Audit-Ready</div>
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Clinical Oversight</div>
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Predictive</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
