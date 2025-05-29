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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To bridge the gap between creative innovation and performance
                marketing, helping brands connect authentically with their
                audiences while driving measurable growth and impact.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-primary">Strategy First</h4>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-primary">Performance Obsessed</h4>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-primary">Culturally Tuned</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
