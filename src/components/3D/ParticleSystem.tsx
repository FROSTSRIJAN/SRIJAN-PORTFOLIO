import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const ParticleSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Initialize particles
    particlesRef.current = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
    }));

    const animate = () => {
      particlesRef.current.forEach(particle => {
        particle.y -= particle.speed;
        
        if (particle.y < -10) {
          particle.y = rect.height + 10;
          particle.x = Math.random() * rect.width;
        }
        
        // Slight horizontal drift
        particle.x += Math.sin(Date.now() * 0.001 + particle.id) * 0.5;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Static Particles for Performance */}
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            backgroundColor: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)],
            opacity: Math.random() * 0.6 + 0.2,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            boxShadow: '0 0 6px currentColor'
          }}
        />
      ))}
      
      {/* Larger Floating Elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            backgroundColor: '#8b5cf6',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;