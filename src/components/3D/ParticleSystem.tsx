import { useMemo } from "react";

const ParticleSystem = () => {
  // Generate static particles for better performance
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({ // Reduced from 100
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      color: ['#8b5cf6', '#06b6d4', '#ec4899'][Math.floor(Math.random() * 3)],
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 15 + 20}s` // Slower animations
    })), []
  );

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Optimized CSS-only particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float-up opacity-30"
          style={{
            left: particle.left,
            top: '100%',
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: `0 0 6px ${particle.color}`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;