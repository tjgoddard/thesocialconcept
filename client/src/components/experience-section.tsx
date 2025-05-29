import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const clientLogos = [
  "BRAND A",
  "BRAND B", 
  "BRAND C",
  "BRAND D",
  "BRAND E",
  "BRAND F",
];

const testimonials = [
  {
    text: "Their strategic approach to our email marketing campaigns resulted in a 340% increase in conversion rates. The team truly understands modern consumer behavior.",
    author: "Marcus Johnson",
    title: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
  },
  {
    text: "The TikTok campaigns they created for us went viral and drove incredible brand awareness. Their cultural insight is unmatched in the industry.",
    author: "Lisa Rodriguez",
    title: "CMO, Fashion Forward",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've worked with brands across diverse industries, delivering
            results that exceed expectations and drive sustainable growth.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="flex items-center justify-center h-16 px-4"
              >
                <div className="text-gray-400 font-bold text-lg border-2 border-gray-300 px-4 py-2 rounded">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 text-lg leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt="Client testimonial"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
