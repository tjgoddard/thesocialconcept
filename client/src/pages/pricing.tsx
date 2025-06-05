import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Zap, Target, TrendingUp } from 'lucide-react';
import Navbar from '@/components/navbar';
import ContactSection from '@/components/contact-section';

export default function PricingPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary via-primary to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">Pricing</h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Choose the partnership level that fits your growth goals. Every plan includes our proven strategy framework and dedicated account management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Starter Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Growth Partner</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$3,500</div>
                  <p className="text-gray-600">per month + 10% of ad spend</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Up to $15K monthly ad spend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">2 primary advertising channels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Weekly strategy calls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Creative production & testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Email & SMS setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly performance reports</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold"
                >
                  Get Started
                </Button>
              </motion.div>

              {/* Scale Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent to-primary text-white rounded-3xl p-8 relative transform scale-105"
              >
                <div className="absolute top-4 right-4 bg-white text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Scale Partner</h3>
                  <div className="text-4xl font-bold mb-2">$7,500</div>
                  <p className="text-white/90">per month + 12% of ad spend</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Up to $50K monthly ad spend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Full-channel marketing (TikTok, Meta, Email, SMS)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Bi-weekly strategy calls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Advanced creative testing & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Complete funnel optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Priority support & dedicated Slack channel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Weekly performance reports</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-white text-accent hover:bg-gray-100 py-3 rounded-lg font-semibold"
                >
                  Scale Your Brand
                </Button>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Enterprise Partner</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                  <p className="text-gray-600">tailored to your needs</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">$50K+ monthly ad spend</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Full-stack growth partnership</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Weekly 1:1 strategy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom creative production team</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced attribution & analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">24/7 priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quarterly business reviews</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold"
                >
                  Let's Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
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
                What Every Partnership Includes
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                No matter which plan you choose, you get our proven methodology and commitment to your growth.
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
                <div className="flex items-center justify-center w-16 h-16 bg-accent/20 text-accent rounded-2xl mb-6 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Strategy First
                </h3>
                <p className="text-gray-600">
                  Every campaign starts with a comprehensive audit and custom strategy built for your specific goals and market position.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-600 rounded-2xl mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Performance Obsessed
                </h3>
                <p className="text-gray-600">
                  We monitor, test, and optimize daily. Every decision is backed by data, and every dollar is accounted for with full transparency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 text-purple-600 rounded-2xl mb-6 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Rapid Execution
                </h3>
                <p className="text-gray-600">
                  No long onboarding periods. We get to work immediately with our proven frameworks and start generating results from day one.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
                Common Questions
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-xl font-bold text-primary mb-4">How quickly will I see results?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most clients see initial improvements within the first 30 days, with significant growth typically occurring within 60-90 days as we optimize and scale what's working.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-xl font-bold text-primary mb-4">What makes your approach different?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on full-funnel strategy, not just ad management. Our team has scaled brands from startup to 8-figures, and we bring that enterprise-level experience to every partnership.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Do you work with all industries?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in eCommerce brands, particularly in fashion, beauty, lifestyle, and consumer goods. Our strategies are built specifically for product-based businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">What's the minimum commitment?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We require a minimum 6-month partnership to ensure we have enough time to implement our strategy and deliver meaningful results. Real growth takes time and consistent optimization.
                </p>
              </motion.div>
            </div>
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