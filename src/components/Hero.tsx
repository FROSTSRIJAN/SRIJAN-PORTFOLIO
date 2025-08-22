import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Download, Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lazy load video after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 500); // Delay video load by 500ms

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Jupiter Video Background with Lazy Loading */}
      <div className="absolute inset-0 w-full h-full">
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000"
            onLoadedData={handleVideoLoad}
            style={{ 
              filter: 'brightness(0.5) contrast(1.1)',
              opacity: isVideoLoaded ? 1 : 0
            }}
            preload="metadata"
          >
            <source src="/assest/jupiter.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Fallback space gradient background while video loads */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 40%, #0f0f23 100%)',
            opacity: isVideoLoaded ? 0 : 1
          }}
        />
        
        {/* Gradient Overlays for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      </div>

      {/* Minimal floating elements for better performance */}
      <motion.div 
        className="absolute top-32 right-20 w-12 h-12 rounded-full bg-primary/20 blur-sm"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 left-20 w-8 h-8 rounded-full bg-accent/20 blur-sm"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image with Frame Video and Better Positioning */}
          <motion.div 
            className="mb-8 mt-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64 mb-6">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ 
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Frame Video Background */}
                {showVideo && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-full opacity-60"
                    style={{ filter: 'brightness(0.8) contrast(1.2)' }}
                  >
                    <source src="/assest/Frame.mp4" type="video/mp4" />
                  </video>
                )}
                
                {/* Your Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="/assest/srijan 1.jpg"
                    alt="Srijan Mani Tripathi"
                    className="w-full h-full object-cover"
                    style={{ 
                      boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.1)' 
                    }}
                  />
                </div>
                
                {/* Glowing border effect */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-primary/40"
                  style={{ 
                    boxShadow: 'inset 0 0 20px rgba(139, 92, 246, 0.2), 0 0 30px rgba(139, 92, 246, 0.4)' 
                  }}
                ></div>
                
                {/* Simple Orbital Ring - Reduced animation for performance */}
                <motion.div
                  className="absolute -inset-2 border border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2" 
                       style={{ boxShadow: '0 0 8px currentColor' }}></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Name Display */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="block text-white/90 font-light mb-2"
            >
              Hello, I'm
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent font-extrabold tracking-tight"
              style={{ 
                textShadow: '0 0 30px rgba(139, 92, 246, 0.5)' 
              }}
            >
              SRIJAN MANI TRIPATHI
            </motion.span>
          </motion.h1>

          {/* Space-themed Subtitle */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              <span className="text-primary" style={{ textShadow: '0 0 20px currentColor' }}>
                🚀 Space Explorer of Code
              </span>
            </p>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              <span className="text-accent font-semibold">B.Tech CSE @ SRM IST</span> • 
              <span className="text-secondary font-semibold"> AI/ML & Full-Stack Developer</span>
            </p>
            
            <motion.p 
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light"
            >
              Navigating the cosmos of technology, 
              <span className="text-primary font-medium"> one innovation at a time.</span>
            </motion.p>
          </motion.div>

          {/* Space-themed CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-4 text-lg shadow-2xl backdrop-blur-sm border border-white/20 hover:border-primary/50 transition-all duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
                style={{ 
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)' 
                }}
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => scrollToSection('projects')}
                style={{ 
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' 
                }}
              >
                <Zap className="w-5 h-5 mr-3" />
                Explore Galaxy
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 ${social.color} transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' 
                }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors duration-300 group"
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium tracking-wider uppercase">Discover More</span>
                <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;