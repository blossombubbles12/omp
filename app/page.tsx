import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import RealitySection from "@/components/sections/RealitySection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import EmployerSection from "@/components/sections/EmployerSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";

/**
 * Main landing page
 * Occupational Medicine Practice - Workforce Resilience Platform
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <RealitySection />
      <SolutionSection />
      <HowItWorksSection />
      <EmployerSection />
      <FeaturesSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
