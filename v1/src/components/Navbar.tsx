import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Depoimento", href: "#depoimento" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">FUPFY</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            className="hidden sm:inline-flex"
            onClick={() => scrollToSection("#inicio")}
          >
            Começar agora
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              variant="hero" 
              className="w-full mt-4"
              onClick={() => scrollToSection("#inicio")}
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;