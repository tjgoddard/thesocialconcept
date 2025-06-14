import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Rocket, BarChart3, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const strategies = [
  {
    icon: Target,
    title: "Strategy & Planning",
    description: "Audit your program to uncover opportunities in acquisition and retention channels. Develop a full funnel strategy aligned with your brands goals.",
    details: [
      "Full Program Audit",
      "Audience Segmentation",
      "Channel Strategy Development",
    ],
    gradient: "from-accent/5 to-accent/10",
    iconColor: "bg-accent/20 text-accent",
    buttonColor: "text-purple-700 hover:text-purple-800 bg-purple-100 hover:bg-purple-200",
    checkColor: "text-accent",
  },
  {
    icon: Rocket,
    title: "Execution & Management",
    description: "Platform-specific campaign execution with audience targeting and ongoing optimization management.",
    details: [
      "Campaign Setup & Launch",
      "A/B Testing Management",
      "Ongoing Optimizations",
    ],
    gradient: "from-green-500/5 to-green-500/10",
    iconColor: "bg-green-500/20 text-green-600",
    buttonColor: "text-green-700 hover:text-green-800 bg-green-100 hover:bg-green-200",
    checkColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Measurement & Analysis",
    description: "Comprehensive performance tracking, data analysis, and strategic recommendations for continuous improvement.",
    details: [
      "Performance Tracking",
      "ROI Analysis",
      "Recurring Reporting",
      "Strategic Recommendations",
    ],
    gradient: "from-purple-50 to-purple-100",
    iconColor: "bg-purple-200 text-purple-600",
    buttonColor: "text-purple-700 hover:text-purple-800 bg-purple-100 hover:bg-purple-200",
    checkColor: "text-purple-600",
  },
];

export default function StrategySection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="strategy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive three-step process that ensures every campaign is
            strategically sound, flawlessly executed, and continuously optimized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-to-br ${strategy.gradient} text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`w-20 h-20 ${strategy.iconColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <strategy.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {strategy.description}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === index ? "auto" : 0,
                      opacity: expandedCard === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="text-left text-gray-600 space-y-2 mb-6">
                      {strategy.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <Check className={`w-4 h-4 ${strategy.checkColor} mr-2 flex-shrink-0`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <div className="mt-auto">
                    <Button
                      onClick={() => toggleCard(index)}
                      variant="ghost"
                      className={`font-semibold ${strategy.buttonColor} transition-colors`}
                    >
                      {expandedCard === index ? "Show Less" : "Learn More"}
                      {expandedCard === index ? (
                        <ChevronUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      )}
                    </Button>
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
