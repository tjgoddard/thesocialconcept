import { motion } from "framer-motion";
import { useEffect } from "react";
import { Mail, Target, TrendingUp, BarChart3 } from "lucide-react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";

export default function TikTokPage() {
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
                <span className="block">Win on TikTok</span>
                <span className="block gradient-text">Without Guessing</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                We turn scrolls into sales through performance-driven creative and ad strategy built for TikTok's unique algorithm.
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
                  Let's Work Together
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3-Step Growth System */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                Our Proven TikTok Growth System
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/20 text-accent rounded-2xl mb-6 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Creative & Funnel Audit
                </h3>
                <p className="text-gray-600 text-center">
                  We audit your TikTok ads, content, and funnel to uncover what's working, what's missing, and where you're leaving money on the table.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/5 to-green-500/10 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-600 rounded-2xl mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Full-Funnel Strategy
                </h3>
                <p className="text-gray-600 text-center">
                  From cold traffic to retention, we build campaigns that guide buyers through your marketing funnel.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 text-purple-600 rounded-2xl mb-6 mx-auto">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Data-Led Scaling
                </h3>
                <p className="text-gray-600 text-center">
                  We monitor performance daily, kill what doesn't work, and scale what does. Decisions come from data, not gut feelings.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why TikTok? Why Now? */}
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
                Why TikTok? Why Now?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                TikTok isn't just a platform - it's where people discover products, trends, and brands they love. If you're not showing up the right way, you're invisible. We make sure you're seen <em>and</em> clicked.
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
                <div className="text-5xl font-bold gradient-text mb-4">150M+</div>
                <p className="text-gray-600">Users in the U.S.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">4x</div>
                <p className="text-gray-600">Better CTR than Meta (with the right creative)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">70%</div>
                <p className="text-gray-600">Say ads blend in with native content*</p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 text-center mt-8"
            >
              *If they're done right.
            </motion.p>
          </div>
        </section>

        {/* Client Result */}
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
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">Before launching The Social Concept, I helped build and scaled the TikTok ads program for a private equity-backed brand. In under two years, we grew it from nothing to over $30M in annual net sales.</p>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                Now, we help brands do the same.
              </p>

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