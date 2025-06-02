import { motion } from "framer-motion";
import { useEffect } from "react";
import { Mail, Zap, PenTool, BarChart3 } from "lucide-react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";

export default function EmailPage() {
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
                <span className="block">Retention Starts</span>
                <span className="block gradient-text">In The Inbox</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >From automated flows to weekly campaigns, we turn your email list into a full-funnel revenue operating system.</motion.p>

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
                  Let's Talk Email
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Email That Works While You Sleep */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Email That Drives LTV</h2>
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
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Automated Flows
                </h3>
                <p className="text-gray-600 text-center">
                  Welcome, post-purchase, abandoned cart, winbacks — we design and optimize flows that drive revenue on autopilot.
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
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">Planning & Execution</h3>
                <p className="text-gray-600 text-center">
                  We handle your weekly and promotional campaigns from subject line to CTA — built for clicks, not just opens.
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
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Design, Copy, & Strategy
                </h3>
                <p className="text-gray-600 text-center">
                  No more Canva emails. We bring clean, branded design and copy that converts — backed by testing and data.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Email Still Wins */}
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
                Your Most Profitable Channel Is Your Inbox
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Email isn't dead — bad email is. Done right, it generates 25–40% of a DTC brand's revenue. It's your only owned channel, and your best long-term asset.
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
                <div className="text-5xl font-bold gradient-text mb-4">90%</div>
                <p className="text-gray-600">Of consumers check email daily</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">25–40%</div>
                <p className="text-gray-600">Of total DTC revenue = email</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">$36</div>
                <p className="text-gray-600">Average ROI per $1 spent</p>
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
                Before launching The Social Concept, I led retention at a DTC brand doing 9 figures — designing lifecycle strategies that drove millions in email-attributed revenue.
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                We bring that same playbook to every brand we work with.
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
                Let's Make Your List Work Harder
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Whether you're just getting started or looking to scale, we turn your email program into a machine — one that prints money while you focus on growth.
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