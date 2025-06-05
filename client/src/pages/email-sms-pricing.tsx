import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Mail, MessageSquare, Target } from 'lucide-react';
import Navbar from '@/components/navbar';
import ContactSection from '@/components/contact-section';

export default function EmailSMSPricingPage() {
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Email & SMS Services
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Turn your email list and phone numbers into revenue-generating machines with our proven retention marketing strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Single Channel Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Single Channel</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">Starting at $2,000*</div>
                  <p className="text-gray-600">per month (Email OR SMS)</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Choose Email OR SMS focus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Complete platform setup & migration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom flow & automation creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Campaign management & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">A/B testing & performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Priority support & dedicated Slack channel</span>
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

              {/* Both Channels Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent to-primary text-white rounded-3xl p-8 relative transform scale-105"
              >
                <div className="absolute top-4 right-4 bg-white text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Email + SMS</h3>
                  <div className="text-4xl font-bold mb-2">Starting at $3,500*</div>
                  <p className="text-white/90">per month (Email + SMS)</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Complete platform setup & migration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Custom flow & automation creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Campaign management & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">A/B testing & performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Priority support & dedicated Slack channel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Cross-channel automation sequences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Advanced segmentation & personalization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Recurring Strategy Calls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Monthly Performance Reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">List growth optimization</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-white text-accent hover:bg-gray-100 py-3 rounded-lg font-semibold"
                >
                  Maximize Revenue
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
                Our Email & SMS Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We don't just send emails and texts. We build relationships that convert into consistent revenue.
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
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 text-blue-600 rounded-2xl mb-6 mx-auto">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Email Mastery
                </h3>
                <p className="text-gray-600">
                  From welcome sequences to win-back campaigns, we craft emails that your customers actually want to open and act on.
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
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  SMS That Sells
                </h3>
                <p className="text-gray-600">
                  High-impact text messages that cut through the noise with time-sensitive offers and personalized product recommendations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/20 text-accent rounded-2xl mb-6 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Smart Automation
                </h3>
                <p className="text-gray-600">
                  Behavior-triggered sequences that deliver the right message at the right time, automatically turning browsers into buyers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Disclaimer */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-500">
              *Pricing depends on scope of services, list size, platform requirements, and specific business needs. Final pricing determined during consultation.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
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
                <h3 className="text-xl font-bold text-primary mb-4">Which platforms do you work with?</h3>
                <p className="text-gray-600 leading-relaxed">We work with all major email and SMS platforms. We'll recommend the best platform for your needs and handle the migration if needed.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Do I need a large email list to get started?</h3>
                <p className="text-gray-600 leading-relaxed">
                  No. We can work with lists of any size and focus on growing your list with quality subscribers while maximizing revenue from your existing contacts. Quality engagement matters more than list size.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-xl font-bold text-primary mb-4">How quickly will I see results?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most clients see immediate improvements in open rates and click-through rates within the first 2 weeks. Revenue impact typically becomes significant within 30-60 days as our automations take effect.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">Can I combine this with your advertising services?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! Email and SMS work incredibly well with paid advertising. When combined, we create a full-funnel approach that maximizes customer lifetime value and provides multiple touchpoints for conversion.
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