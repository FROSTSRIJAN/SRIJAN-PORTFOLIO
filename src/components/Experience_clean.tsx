import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

// 3D Galaxy Model Component - SIMPLE BACKGROUND ONLY
const GalaxySpace = () => {
  const { scene } = useGLTF('/need_some_space/scene.gltf');
  
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <primitive 
          object={scene} 
          scale={2.0} 
          position={[0, 0, 0]} 
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
};

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [show3D, setShow3D] = useState(false);

  // Simple 3D loading
  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Self-Employed/Freelance",
      duration: "Jan 2024 – Present",
      type: "Freelance",
      description: "Developing full-stack web applications using modern technologies. Specializing in React, TypeScript, Next.js, and 3D web experiences.",
      technologies: ["React", "TypeScript", "Next.js"],
      additionalTech: ["Three.js", "TailwindCSS", "Node.js"],
      status: "current",
      link: "#"
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Zidio Development",
      duration: "Dec 2024 – Jan 2025",
      type: "Remote",
      description: "Collaborated on frontend projects, implemented responsive designs, and worked with React-based applications.",
      technologies: ["HTML", "CSS", "JavaScript"],
      additionalTech: ["React", "Responsive Design"],
      status: "completed",
      link: "#"
    },
    {
      id: 3,
      title: "AI Intern",
      company: "Edunet Foundation",
      duration: "June – July 2025",
      type: "Remote",
      description: "Assisted in developing AI/ML models for real-world problems. Worked on dataset preprocessing, training, evaluation, and optimization.",
      technologies: ["Python", "Machine Learning", "Data Processing"],
      additionalTech: ["Model Training", "Evaluation"],
      status: "completed",
      link: "#"
    },
    {
      id: 4,
      title: "Coder (C, C++, Python)",
      company: "Skolar",
      duration: "Aug – Oct 2023",
      type: "Remote",
      description: "Practiced competitive coding and algorithmic problem-solving. Strengthened DSA knowledge through structured assignments.",
      technologies: ["C", "C++", "Python"],
      additionalTech: ["Data Structures", "Algorithms"],
      status: "completed",
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-black/95 overflow-hidden">
      {/* Clean 3D Galaxy Background */}
      {show3D && (
        <div className="absolute inset-0 z-0 opacity-20">
          <GalaxySpace />
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
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black z-10 hidden md:block">
                  <div className="absolute inset-1 bg-accent rounded-full animate-pulse"></div>
                </div>

                {/* Experience Card */}
                <Card 
                  className="bg-black/60 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`${
                          exp.status === 'current' 
                            ? 'border-green-500 text-green-400 bg-green-500/10' 
                            : 'border-blue-500 text-blue-400 bg-blue-500/10'
                        }`}
                      >
                        {exp.status === 'current' ? 'Current' : 'Completed'}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-white/60 space-y-1">
                      <p className="font-medium text-accent">{exp.company}</p>
                      <div className="flex justify-between items-center">
                        <span>{exp.duration}</span>
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs text-white/60 font-medium">Primary Technologies:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs border-accent/50 text-accent hover:bg-accent/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {selectedExp === exp.id && exp.additionalTech && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <span className="text-xs text-white/60 font-medium">Additional Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {exp.additionalTech.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {selectedExp === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
