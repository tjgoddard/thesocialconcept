import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Users } from "lucide-react";
import danielleImage from "@assets/1664641185363.jpeg";
import travisImage from "@assets/fotor-20250506155321.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">We're a team of brand builders and marketing pros who help ambitious brands launch faster, scale smarter, and grow with intention.</p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Meet the Founders
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={danielleImage}
                  alt="Danielle Chmelik"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary">
                    Danielle Chmelik
                  </h4>
                  <p className="text-gray-600">Co-Founder & Retention Strategy</p>
                  <p className="text-sm text-gray-500">5+ Years in Retention Strategy Consulting for 50MM+ Brands</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={travisImage}
                  alt="Travis Goddard"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary">
                    Travis Goddard
                  </h4>
                  <p className="text-gray-600">Co-Founder & Performance Marketing</p>
                  <p className="text-sm text-gray-500">5+ Years Scaling 100MM+ Ecommerce Brands</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
