import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/image.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 50);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "About Us", href: "about" },
    { label: "Our Approach", href: "strategy" },
    { label: "Contact", href: "contact" },
  ];

  const serviceLinks = [
    { label: "Email Marketing", href: "/email", isExternal: true },
    { label: "SMS Marketing", href: "/sms", isExternal: true },
    { label: "TikTok Advertising", href: "/tiktok", isExternal: true },
    { label: "Meta Advertising", href: "/meta", isExternal: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-2">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="hover:opacity-80 transition-opacity">
                <img
                  src={logoImage}
                  alt="The Social Concept"
                  className="h-32 w-auto"
                />
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-600 hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                    {serviceLinks.map((service) => (
                      service.isExternal ? (
                        <Link key={service.label} href={service.href}>
                          <a className="block px-4 py-2 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors duration-200">
                            {service.label}
                          </a>
                        </Link>
                      ) : (
                        <button
                          key={service.label}
                          onClick={() => scrollToSection(service.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors duration-200"
                        >
                          {service.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Services Section */}
              <div className="border-b border-gray-100 pb-2 mb-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-accent transition-colors duration-200 w-full text-left font-semibold"
                >
                  Services
                </button>
                <div className="ml-4 space-y-1">
                  {serviceLinks.map((service) => (
                    service.isExternal ? (
                      <Link key={service.label} href={service.href}>
                        <a 
                          className="block px-3 py-1 text-sm text-gray-500 hover:text-accent transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.label}
                        </a>
                      </Link>
                    ) : (
                      <button
                        key={service.label}
                        onClick={() => scrollToSection(service.href)}
                        className="block px-3 py-1 text-sm text-gray-500 hover:text-accent transition-colors duration-200 w-full text-left"
                      >
                        {service.label}
                      </button>
                    )
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-accent transition-colors duration-200 w-full text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
