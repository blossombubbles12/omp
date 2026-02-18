"use client";

import Container from "../ui/Container";
import ParallaxText from "../animations/ParallaxText";
import ScrollReveal from "../animations/ScrollReveal";

/**
 * Reality section with parallax storytelling
 */
export default function RealitySection() {
    const realities = [
        "Stress doesn't clock out at 5PM",
        "Financial pressure affects performance",
        "Untreated mental health affects families",
        "Organizations are losing productivity silently",
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <Container className="relative z-10">
                <ParallaxText speed={0.3}>
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
                            Behind Every Employee ID
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                                Is A Human Being.
                            </span>
                        </h2>
                    </ScrollReveal>
                </ParallaxText>

                <ScrollReveal delay={0.3}>
                    <div className="max-w-4xl mx-auto mt-16 space-y-12">
                        {realities.map((reality, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0" />
                                    <p className="text-2xl md:text-3xl font-light text-gray-200">
                                        {reality}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                    <div className="mt-20 text-center">
                        <p className="text-xl md:text-2xl text-gray-300 italic">
                            &quot;It&apos;s time to build systems that protect people, not just profits.&quot;
                        </p>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
