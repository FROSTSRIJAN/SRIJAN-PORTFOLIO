import { Suspense, lazy, useEffect, useRef, useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ShootingStars from "@/components/ui/shooting-stars";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Achievements = lazy(() => import("@/components/Achievements"));
const Education = lazy(() => import("@/components/Education"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [performanceMode, setPerformanceMode] = useState('high');
  const performanceModeRef = useRef(performanceMode);

  useEffect(() => {
    performanceModeRef.current = performanceMode;
  }, [performanceMode]);

  useEffect(() => {
    // Enhanced performance detection for dual 3D models
    const checkPerformance = () => {
      const mobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hardwareConcurrency = window.navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const connection = (navigator as any).connection;
      
      setIsMobile(mobile);
      
      // Performance scoring for dual 3D models
      let score = 0;
      if (hardwareConcurrency >= 8) score += 3;
      else if (hardwareConcurrency >= 6) score += 2;
      else if (hardwareConcurrency >= 4) score += 1;
      
      if (deviceMemory >= 8) score += 2;
      else if (deviceMemory >= 4) score += 1;
      
      if (!mobile) score += 2;
      if (!connection || connection.effectiveType === '4g') score += 1;
      
      // Set performance mode
      if (score >= 7) setPerformanceMode('high');      // Both 3D models
      else if (score >= 4) setPerformanceMode('medium'); // One 3D model only
      else setPerformanceMode('low');                     // No 3D models
      
      // Add performance classes
      if (mobile) {
        document.body.classList.add('mobile-optimized');
        document.documentElement.style.setProperty('--duration-slow', '0.3s');
        document.documentElement.style.setProperty('--duration-normal', '0.2s');
      }

      // Log performance info
      console.log('🎮 Performance Mode:', performanceModeRef.current, '| Score:', score, '| CPU Cores:', hardwareConcurrency);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    
    // Monitor performance and adjust if needed
    let frameCount = 0;
    let lastTime = performance.now();
    
    let rafId = 0;

    const monitorPerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 5000) { // Check every 5 seconds
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        if (fps < 30 && performanceMode === 'high') {
          console.warn('⚠️ Low FPS detected, switching to medium performance mode');
          setPerformanceMode('medium');
        } else if (fps < 15 && performanceMode === 'medium') {
          console.warn('⚠️ Very low FPS detected, switching to low performance mode');
          setPerformanceMode('low');
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      rafId = requestAnimationFrame(monitorPerformance);
    };
    
    rafId = requestAnimationFrame(monitorPerformance);
    
    return () => {
      window.removeEventListener('resize', checkPerformance);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background relative mobile-optimized performance-${performanceMode}`}>      
      <ShootingStars />
      {/* Main Content */}
      <div className="relative z-10">
        <NavBar />
        <main className={`${isMobile ? 'space-y-8' : 'space-y-0'}`}>
          <Hero />
          <Suspense fallback={<div className="h-24" />}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Education />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        
        {/* Footer */}
        <footer className="bg-card/50 backdrop-blur-md border-t border-glass-border py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="text-sm text-muted-foreground leading-relaxed">
                © 2025 Srijan Mani Tripathi. Built with React, TypeScript, and modern web technology.
              </div>
              <div className="text-xs text-primary">
                "Navigating the cosmos of technology, one innovation at a time."
              </div>
              {/* Mobile-friendly social links in footer */}
              {isMobile && (
                <div className="flex justify-center space-x-4 pt-2">
                  <a 
                    href="https://github.com/SrijanManiTripathi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/srijan-mani-tripathi-144b162a1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:srijantripathi64@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    Email
                  </a>
                </div>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
