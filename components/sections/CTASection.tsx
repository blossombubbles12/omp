"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import GradientBlob from "../ui/GradientBlob";

/**
 * Call to action section
 */
export default function CTASection() {
    return (
        <section id="cta" className="relative py-32 bg-gray-950 text-white overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-sky-900/20 to-gray-950 z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.1] z-0" />

            <GradientBlob color="pink" size="lg" className="top-0 right-0 opacity-20" />
            <GradientBlob color="blue" size="md" className="bottom-0 left-0 opacity-20" />

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="text-center max-w-5xl mx-auto p-12 lg:p-20 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                                Protect Your Workforce.
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                                    Build A Healthier Organization.
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl mb-12 text-blue-100/80 max-w-2xl mx-auto font-light">
                                Join forward-thinking organizations investing in workforce resilience and long-term performance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-blue-900 hover:bg-gray-100 shadow-xl px-10"
                                    href="/demo"
                                >
                                    Request Demo
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 px-10"
                                    href="/demo"
                                >
                                    Partner With Us
                                </Button>
                            </div>

                            <div className="mt-12 flex items-center justify-center gap-2 text-blue-200/60 text-sm">
                                <span className="w-8 h-px bg-current opacity-20" />
                                <span>Questions? Reach out at <a href="mailto:info@omp.ng" className="text-blue-300 hover:text-white transition-colors underline underline-offset-4">info@omp.ng</a></span>
                                <span className="w-8 h-px bg-current opacity-20" />
                            </div>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
