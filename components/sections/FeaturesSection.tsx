"use client";

import { Stethoscope, HeartPulse, Wallet, FileText, LayoutDashboard, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { staggerContainer, staggerItem } from "../animations/variants";

/**
 * Platform features grid section
 */
export default function FeaturesSection() {
    const features = [
        {
            icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
            title: "Specialist Booking",
            description: "Book sessions with therapists, counselors, and wellness coaches",
        },
        {
            icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
            title: "Daily Wellness Check-in",
            description: "Track emotional state and receive personalized support",
        },
        {
            icon: <Wallet className="w-8 h-8 text-green-500" />,
            title: "Financial Access Tools",
            description: "Connect with vetted financial wellness partners",
        },
        {
            icon: <FileText className="w-8 h-8 text-orange-500" />,
            title: "HMO Coverage Visibility",
            description: "Clear breakdown of healthcare benefits and coverage",
        },
        {
            icon: <LayoutDashboard className="w-8 h-8 text-purple-500" />,
            title: "Employer Analytics Dashboard",
            description: "Anonymized insights into workforce wellbeing trends",
        },
        {
            icon: <Lock className="w-8 h-8 text-gray-500" />,
            title: "Secure & Confidential",
            description: "End-to-end encryption and privacy-first architecture",
        },
    ];

    return (
        <section id="features" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Platform Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Everything your workforce needs to thrive, in one place.
                        </p>
                    </div>
                </ScrollReveal>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={staggerItem}>
                            <Card className="h-full group hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300">
                                <div className="mb-4 p-3 inline-block rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
