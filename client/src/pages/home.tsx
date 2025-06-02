import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import StrategySection from "@/components/strategy-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StrategySection />
        {/* <ExperienceSection /> */}
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">The Social Concept</div>
            <p className="mb-4">Strategy First, Performance Obsessed</p>
            <p className="text-sm">&copy; 2024 The Social Concept. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
