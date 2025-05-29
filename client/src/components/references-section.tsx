import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    title: "E-commerce Email Campaign",
    description: "Increased email revenue by 450% through strategic segmentation and personalization.",
    metric: "+450% Revenue",
    duration: "6 months",
    metricColor: "text-accent",
  },
  {
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    title: "TikTok Viral Campaign",
    description: "Generated 50M+ views and 25% increase in brand awareness for lifestyle brand.",
    metric: "50M+ Views",
    duration: "3 months",
    metricColor: "text-green-600",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    title: "Meta Ads Optimization",
    description: "Reduced cost per acquisition by 60% while doubling conversion volume.",
    metric: "-60% CPA",
    duration: "4 months",
    metricColor: "text-purple-600",
  },
];

export default function ReferencesSection() {
  return (
    <section id="references" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real campaigns. See how we've helped brands achieve
            their marketing goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <img
                  src={study.image}
                  alt="Case study showcase"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className={`font-semibold ${study.metricColor}`}>
                      {study.metric}
                    </span>
                    <span className="text-gray-500">{study.duration}</span>
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
