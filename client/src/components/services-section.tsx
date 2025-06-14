import { motion } from "framer-motion";
import { Mail, MessageSquare, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email campaigns that nurture leads and drive conversions with personalized messaging and automation.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: MessageSquare,
    title: "SMS Marketing",
    description: "Direct and immediate customer engagement through targeted SMS campaigns that deliver results.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Facebook,
    title: "Meta Advertising",
    description: "Facebook and Instagram advertising campaigns optimized for maximum reach and conversion rates.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FaTiktok,
    title: "TikTok Advertising",
    description: "Creative TikTok advertising strategies that capture attention and drive engagement with younger audiences.",
    color: "bg-black/10 text-black",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive marketing solutions that drive growth and
            engagement across all digital channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-transparent hover:border-accent/20">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Schedule a Call CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to accelerate your growth?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our targeted marketing strategies can drive real results for your business.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule A Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
