import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/55 backdrop-blur-xl supports-[backdrop-filter]:bg-background/45">
      <div className="w-full px-3 sm:px-5 lg:px-7">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-hero-gradient bg-clip-text text-transparent">
            Srijan Mani Tripathi
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-[1.03] ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary shadow-[0_0_18px_rgba(99,102,241,0.3)]"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm" 
              className="ml-4 bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-[1.03]"
              onClick={() => window.open('/assets/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/90 backdrop-blur-xl border border-white/10 rounded-xl mt-2 mb-4 shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                    activeSection === item.id
                      ? "text-primary bg-primary/15"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm" 
                className="w-full mt-3 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.03]"
                onClick={() => {
                  window.open('/assets/resume.pdf', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;