import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Download, Sparkles, Zap } from "lucide-react";
import profileImage from "@/assets/srijan-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-aurora"></div>
      
      {/* Floating Geometric Shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-32 w-24 h-24"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-accent to-space-cyan opacity-30 transform rotate-45"></div>
      </motion.div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-primary via-accent to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            animate={{
              y: ['-100%', '100vh'],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image with 3D Effects */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-8 perspective-1000">
              <motion.div
                className="relative w-full h-full transform-3d"
                whileHover={{ 
                  rotateY: 15,
                  rotateX: 15,
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="Srijan Mani Tripathi"
                  className="w-full h-full rounded-full object-cover shadow-cosmic border-4 border-primary/30 glow-primary"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/30 via-transparent to-accent/20 animate-cosmic-pulse"></div>
                
                {/* Orbital Elements */}
                <motion.div
                  className="absolute -inset-8 border-2 border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 glow-primary"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 glow-accent"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Headline with Hologram Effect */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent animate-hologram glow-text"
              whileHover={{ scale: 1.05 }}
            >
              Innovating with
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-6xl md:text-8xl lg:text-9xl font-extrabold"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ 
                backgroundSize: '200% 200%' 
              }}
            >
              AI & CODE
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-xl md:text-3xl text-foreground/90 font-medium">
              <span className="text-primary glow-text">B.Tech CSE @ SRM IST</span> • 
              <span className="text-secondary glow-text"> AI/ML & Full-Stack</span> • 
              <span className="text-accent glow-text"> Winner of National Coding Contests</span>
            </p>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Building the future, one line of code at a time. 
              <span className="text-primary"> Transforming ideas into reality.</span>
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold px-8 py-4 text-lg shadow-cosmic hover:shadow-glow-primary transform hover:scale-105 transition-all duration-300 neon-border"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-6 h-6 mr-3" />
                Download Resume
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold glass-morphism hover:border-primary transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                <Zap className="w-6 h-6 mr-3" />
                Explore Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-foreground" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-space-blue" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20 text-foreground/70 ${social.color} transition-all duration-300 glass-morphism hover:shadow-glow-primary group`}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-7 h-7 group-hover:animate-pulse" />
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="text-primary/80 hover:text-primary transition-colors duration-300 group"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium tracking-wider uppercase">Explore More</span>
                <motion.div
                  className="relative"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px hsl(var(--primary))',
                      '0 0 40px hsl(var(--primary))',
                      '0 0 20px hsl(var(--primary))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-8 h-8 group-hover:animate-bounce" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;