import { motion } from "framer-motion";
import { useEffect } from "react";
import { Target, Layers, TrendingUp, BarChart3 } from "lucide-react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";

export default function MetaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:hello@thesocialconcept.co';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight"
              >
                <span className="block">Meta Ads That</span>
                <span className="block gradient-text">Actually Convert</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                We run full-funnel Meta campaigns that combine creative testing, precise targeting and optimization - so every dollar works harder.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Let's Talk Ads
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The System That Scales */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                The System That Scales
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 text-blue-600 rounded-2xl mb-6 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Creative Strategy & Testing
                </h3>
                <p className="text-gray-600 text-center">
                  We build ad campaigns from the bottom up by rigorously testing ad creative to find your winners and funneling them into the proper winning campaigns.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/20 text-accent rounded-2xl mb-6 mx-auto">
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Funnel Design
                </h3>
                <p className="text-gray-600 text-center">
                  We architect your Meta funnel from cold to hot - acquisition, retargeting, and retention - with a media plan tailored to your growth stage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/5 to-green-500/10 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-600 rounded-2xl mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Optimization & Scaling
                </h3>
                <p className="text-gray-600 text-center">
                  Every ad, audience, and placement is optimized to maximize ROAS, decrease your CPA, and scale what works.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Meta Still Wins */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
                Meta Is Still the King of Paid Social
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Yes, CPMs have gone up. But Meta still drives the lion's share of DTC revenue when done right. The difference? Strategy, creative, and optimization — not budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">3.5B+</div>
                <p className="text-gray-600">Active users across Facebook & Instagram</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">60–80%</div>
                <p className="text-gray-600">Of DTC ad budgets still go to Meta</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">20-30%</div>
                <p className="text-gray-600">Increase in ROAS when Optimized</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proof That Converts */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
                Proof That Converts
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                I've managed millions in Meta spend across multiple DTC brands — scaling acquisition while holding a tight ROAS. From viral creative to retargeting flows, I've built the backbone of Meta strategies that sell.
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                We bring that same precision to every client we work with.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
                Let's Build Your Growth Engine
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                If Meta ads feel like a money pit, you're doing it wrong. We help you build a system that brings in customers profitably — and predictably.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
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