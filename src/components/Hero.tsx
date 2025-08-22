import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import profileImage from "@/assets/srijan-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-primary-glow/10 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8">
              <img
                src={profileImage}
                alt="Srijan Mani Tripathi"
                className="w-full h-full rounded-full object-cover shadow-glass border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Innovating with AI.
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Shipping with care.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in animation-delay-200">
            B.Tech CSE @ SRM IST • AI/ML & Full-Stack • Winner of national coding contests
          </p>

          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Building the future, one line of code at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animation-delay-600">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow font-semibold px-8 py-3"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-800">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;