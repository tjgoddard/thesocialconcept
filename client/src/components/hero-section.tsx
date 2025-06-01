import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 opacity-30 rounded-full blur-lg animate-floating-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 opacity-30 rounded-full blur-md animate-floating-animation-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 opacity-20 rounded-full blur-xl animate-floating-animation-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-teal-200 opacity-25 rounded-full blur-lg animate-floating-animation"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-purple-200 opacity-35 rounded-full blur-md animate-floating-animation-delayed"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-200 opacity-25 rounded-full blur-sm animate-floating-animation-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-purple-200 opacity-20 rounded-full blur-xl animate-floating-animation"></div>
        <div className="absolute top-12 left-1/3 w-20 h-20 bg-teal-200 opacity-30 rounded-full blur-md animate-floating-animation"></div>
        <div className="absolute top-24 left-1/2 w-24 h-24 bg-purple-200 opacity-28 rounded-full blur-lg animate-floating-animation-delayed"></div>
        <div className="absolute top-32 left-2/3 w-14 h-14 bg-green-200 opacity-35 rounded-full blur-sm animate-floating-animation-slow"></div>
        <div className="absolute top-20 left-1/3 w-12 h-12 bg-purple-200 opacity-40 rounded-full blur-lg animate-floating-animation"></div>
      </div>
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
            <span className="block">Strategy First,</span>
            <span className="block gradient-text">Performance Obsessed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >We're a full funnel performance marketing agency focused on big ideas, sharp execution, and measurable performance.</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl h-14"
            >
              Our Services
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent text-white px-8 py-4 text-lg font-semibold hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl h-14"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
