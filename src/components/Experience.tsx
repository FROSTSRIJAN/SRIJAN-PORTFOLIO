import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import GlowingBorder from "@/components/ui/glowing-border";
import LetsCollaborateButton from "@/components/ui/lets-collaborate-button";
import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

// 3D Warped Spacetime Model Component - OPTIMIZED FOR PERFORMANCE
const WarpedSpacetime = () => {
  const { scene } = useGLTF('/warped_spacetime/scene.gltf');
  
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 60 }}
      style={{ background: 'transparent' }}
      performance={{ min: 0.5, max: 1.0 }}
      dpr={[1, 1.5]}
      gl={{ 
        antialias: false, 
        alpha: true,
        powerPreference: "default"
      }}
    >
      <Suspense fallback={
        <mesh>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#4a148c" transparent opacity={0.1} />
        </mesh>
      }>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <primitive 
          object={scene} 
          scale={1.2} 
          position={[0, 0, 0]} 
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.8}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  );
};

// Preload the model for better performance
useGLTF.preload('/warped_spacetime/scene.gltf');

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [show3D, setShow3D] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Optimized 3D loading with performance checks
  useEffect(() => {
    if (!isVisible) return;
    
    // Check device capabilities
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasGoodPerformance = !isMobile && window.navigator.hardwareConcurrency >= 4;
    
    if (hasGoodPerformance) {
      const timer = setTimeout(() => setShow3D(true), 500);
      return () => clearTimeout(timer);
    } else {
      // Delayed loading for lower-end devices
      const timer = setTimeout(() => setShow3D(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const experiences = [
    {
      id: 1,
      title: "AI/ML Intern",
      company: "Infosys Springboard",
      duration: "Dec 2025 - Present",
      type: "Remote",
      description: "Built and evaluated AI/ML workflows focused on practical deployment readiness and measurable model quality.",
      highlights: [
        "Implemented model training and validation pipelines for supervised ML tasks",
        "Improved data preprocessing quality for better downstream model performance",
        "Tracked performance metrics and documented experimentation for reproducibility",
      ],
      technologies: ["Python", "Machine Learning", "Model Evaluation"],
      additionalTech: ["Data Preprocessing", "Experiment Tracking"],
      status: "current",
      link: "#"
    },
    {
      id: 2,
      title: "Joint Treasurer",
      company: "Developer Network Space (DNS)",
      duration: "Jul 2025 - Present",
      type: "On-site",
      description: "Managed budgeting and treasury operations while supporting execution of developer events and technical community initiatives.",
      highlights: [
        "Planned and monitored budgets for workshops, competitions, and club operations",
        "Coordinated with technical and operations teams to ensure resource availability",
        "Supported end-to-end event execution with a focus on financial transparency",
      ],
      technologies: ["Leadership", "Finance Operations", "Event Planning"],
      additionalTech: ["Community Building", "Cross-team Coordination"],
      status: "current",
      link: "#"
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "Koshish Charitable Trust",
      duration: "Jun 2025 - Aug 2025",
      type: "On-site",
      description: "Developed and delivered production-ready web features for the NGO website with responsiveness and UX improvements.",
      highlights: [
        "Built and shipped responsive pages and reusable UI blocks for core NGO workflows",
        "Enhanced UI/UX consistency across desktop and mobile breakpoints",
        "Collaborated in-person to prioritize and deliver stakeholder-facing changes quickly",
      ],
      technologies: ["React", "Node.js", "JavaScript", "CSS"],
      additionalTech: ["UI/UX", "Responsive Design"],
      status: "completed",
      link: "https://koshish-org.com"
    },
    {
      id: 4,
      title: "Coder Intern",
      company: "SKOLAR",
      duration: "Aug 2023 - Oct 2023",
      type: "Remote",
      description: "Strengthened programming fundamentals and DSA through structured coding tasks and problem-solving assignments.",
      highlights: [
        "Solved programming assignments in C, C++, and Python with a focus on logic clarity",
        "Improved algorithmic problem-solving speed through regular coding practice",
        "Built strong foundations in core data structures and complexity analysis",
      ],
      technologies: ["C", "C++", "Python"],
      additionalTech: ["Data Structures", "Algorithms"],
      status: "completed",
      link: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative bg-black/95 overflow-hidden">
      {/* Warped Spacetime 3D Background - Optimized */}
      {show3D && isVisible && (
        <div className="absolute inset-0 z-0 opacity-25 will-change-transform">
          <WarpedSpacetime />
        </div>
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              My professional journey and key roles. Click on a card to learn more about each position.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central glowing line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary opacity-60"></div>
            
            {/* Glowing dots on timeline - Reduced for performance */}
            {experiences.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary"
                style={{
                  top: `${20 + (index * 300)}px`,
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.6)'
                }}
              />
            ))}

            {/* Experience Cards */}
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                >
                  {/* Date Label */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} text-sm text-white/60`}>
                    {exp.duration}
                  </div>

                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <GlowingBorder disabled={false} containerClassName="rounded-xl">
                    <Card 
                      className="bg-black/70 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.03] cursor-pointer group rounded-xl"
                      onClick={() => setSelectedExp(selectedExp === index ? null : index)}
                    >
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-white font-bold text-lg flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                                {exp.status === 'current' ? (
                                  <span className="text-white text-sm">⚡</span>
                                ) : (
                                  <span className="text-white text-sm">💼</span>
                                )}
                              </div>
                              {exp.title}
                              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </CardTitle>
                            <p className="text-accent font-medium">{exp.company}</p>
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  exp.status === 'current' 
                                    ? 'border-green-400 text-green-400' 
                                    : 'border-blue-400 text-blue-400'
                                }`}
                              >
                                {exp.type}
                              </Badge>
                              {exp.status === 'current' && (
                                <Badge className="bg-green-500/20 text-green-400 border border-green-400/30 text-xs">
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
                          {exp.description}
                        </p>

                        <ul className="space-y-2">
                          {exp.highlights.map((point: string, pointIndex: number) => (
                            <li key={pointIndex} className="text-sm text-white/75 flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                              >
                                <span className="mr-1">⚡</span>
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          {exp.additionalTech.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {exp.additionalTech.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors"
                                >
                                  <span className="mr-1">🌐</span>
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* View Details Button */}
                        <Button
                          variant="ghost" 
                          className="text-primary hover:text-white hover:bg-primary/20 transition-all duration-300 p-0 h-auto font-normal"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (exp.link !== '#') {
                              window.open(exp.link, '_blank');
                            }
                          }}
                        >
                          View Details →
                        </Button>
                      </CardContent>
                    </Card>
                    </GlowingBorder>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Summary */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                From developing real-world applications to managing community operations, 
                I bring a diverse skill set in both technical development and leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LetsCollaborateButton onClick={() => window.open('mailto:srijantripathi64@gmail.com', '_self')} />
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 transition-all duration-300 hover:scale-[1.03]" onClick={() => window.open('/assets/resume.pdf', '_blank')}>
                  View Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Preload the 3D model
useGLTF.preload('/need_some_space/scene.gltf');

export default Experience;