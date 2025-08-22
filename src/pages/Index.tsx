import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ParticleSystem from "@/components/3D/ParticleSystem";
import SpaceScene from "@/components/3D/SpaceScene";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Background Elements */}
      <SpaceScene />
      <ParticleSystem />
      
      {/* Main Content */}
      <div className="relative z-10">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-card/50 backdrop-blur-md border-t border-glass-border py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="text-sm text-muted-foreground">
                © 2025 Srijan Mani Tripathi. Built with React, TypeScript, and cutting-edge 3D technology.
              </div>
              <div className="text-xs text-primary glow-text animate-hologram">
                "Building the future, one line of code at a time."
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
