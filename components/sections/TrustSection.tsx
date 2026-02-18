"use client";

import Container from "../ui/Container";
import ScrollReveal from "../animations/ScrollReveal";
import { Shield, UserCheck, BarChart, CheckCircle2 } from "lucide-react";

/**
 * Trust and confidentiality section
 */
export default function TrustSection() {
    const trustPoints = [
        {
            icon: <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
            title: "End-to-End Encryption",
            description: "All sessions and data are encrypted and secure",
        },
        {
            icon: <UserCheck className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
            title: "Confidential Sessions",
            description: "Employee privacy is absolute and protected",
        },
        {
            icon: <BarChart className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
            title: "Anonymized Analytics",
            description: "Employers see trends, not individual details",
        },
        {
            icon: <CheckCircle2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
            title: "Compliance Ready",
            description: "Built to meet data protection standards",
        },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-950">
            <Container>
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Trust & Confidentiality
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Your employees&apos; privacy is our foundation.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {trustPoints.map((point, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="text-center p-6">
                                <div className="text-5xl mb-4">{point.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {point.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
