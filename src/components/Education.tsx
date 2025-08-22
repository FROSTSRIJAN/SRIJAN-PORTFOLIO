import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

// Preload the model for better performance
useGLTF.preload('/need_some_space/scene.gltf');

// 3D Galaxy Model Component for Education - OPTIMIZED & CENTERED
const EducationGalaxySpace = () => {
  const { scene } = useGLTF('/need_some_space/scene.gltf');
  
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      performance={{ min: 0.5, max: 1.0 }}
      dpr={[1, 1.5]}
      gl={{ 
        antialias: false, 
        alpha: true,
        powerPreference: "default"
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <primitive 
          object={scene} 
          scale={2.2} 
          position={[0, 0, 0]} 
          rotation={[0.1, 0, 0]}
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.4}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  );
};

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);
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

  // Optimized 3D loading with mobile detection
  useEffect(() => {
    if (!isVisible) return;
    
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasGoodPerformance = !isMobile && window.navigator.hardwareConcurrency >= 4;
    
    if (hasGoodPerformance) {
      const timer = setTimeout(() => setShow3D(true), 800);
      return () => clearTimeout(timer);
    } else {
      // Delayed loading for mobile devices
      const timer = setTimeout(() => setShow3D(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const education = [
    {
      id: 1,
      institution: "SRM Institute of Science and Technology",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      duration: "Aug 2023 – Aug 2027",
      location: "Chennai, Tamil Nadu",
      status: "current",
      description: "Pursuing comprehensive education in computer science and engineering with focus on software development, algorithms, data structures, and emerging technologies. Building strong foundation in programming, system design, and modern development practices.",
      achievements: ["Programming Enthusiast", "Web Development Projects", "3D Graphics Implementation"],
      coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Networks", "Software Engineering", "Web Technologies"],
      cgpa: "8.5/10"
    },
    {
      id: 2,
      institution: "Holy Mission Senior Secondary School, Patna",
      degree: "Senior Secondary (Class XII)",
      field: "Science Stream",
      duration: "2021 – 2023",
      location: "Patna, Bihar",
      status: "completed",
      description: "Completed higher secondary education in Science stream, building strong foundation in Physics, Chemistry, and Mathematics that prepared me for engineering studies.",
      achievements: ["Science Excellence", "Mathematics Proficiency", "Academic Distinction"],
      coursework: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"],
      percentage: "85.5%"
    },
    {
      id: 3,
      institution: "GD Goenka Public School, Patna",
      degree: "Secondary Education (Class I – X)",
      field: "All Subjects",
      duration: "2013 – 2021",
      location: "Patna, Bihar",
      status: "completed",
      description: "Completed foundational education with strong academic performance across all subjects. Developed fundamental skills in mathematics, science, and communication that formed the basis for future learning.",
      achievements: ["Academic Excellence", "All-Round Development", "Leadership Skills"],
      coursework: ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Computer Applications"],
      percentage: "92.0%"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 relative bg-black/95 overflow-hidden">
      {/* Optimized Centered 3D Galaxy Background */}
      {show3D && isVisible && (
        <div className="absolute inset-0 z-0 opacity-20 will-change-transform">
          <EducationGalaxySpace />
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
              Education
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              My academic journey and educational achievements. Building knowledge and skills for the future.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-black/60 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  onClick={() => setSelectedEducation(selectedEducation === edu.id ? null : edu.id)}
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-xl font-bold text-white mb-2 flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="break-words">{edu.institution}</span>
                        </CardTitle>
                        <h3 className="text-base md:text-lg font-semibold text-accent mb-1 break-words">
                          {edu.degree} - {edu.field}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-sm text-white/60">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-row lg:flex-col items-start lg:items-end space-x-2 lg:space-x-0 lg:space-y-2">
                        <Badge 
                          variant="outline" 
                          className={`${
                            edu.status === 'current' 
                              ? 'border-green-500 text-green-400 bg-green-500/10' 
                              : 'border-blue-500 text-blue-400 bg-blue-500/10'
                          }`}
                        >
                          {edu.status === 'current' ? 'In Progress' : 'Completed'}
                        </Badge>
                        
                        {edu.cgpa && (
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                            CGPA: {edu.cgpa}
                          </Badge>
                        )}
                        {edu.percentage && (
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                            {edu.percentage}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-4 sm:px-6">
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    
                    {/* Achievements */}
                    {edu.achievements && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-white/70 mb-2 flex items-center space-x-1">
                          <BookOpen className="w-4 h-4 flex-shrink-0" />
                          <span>Key Achievements</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="text-xs border-accent/50 text-accent hover:bg-accent/10 transition-colors break-words"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expanded Details */}
                    {selectedEducation === edu.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden space-y-4 pt-4 border-t border-white/10"
                      >
                        {edu.coursework && (
                          <div>
                            <h4 className="text-sm font-medium text-white/70 mb-2">Key Coursework</h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {edu.coursework.map((course, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="text-xs bg-primary/10 text-primary border-primary/30 break-words"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Educational Philosophy */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-black/60 backdrop-blur-md border border-white/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center justify-center space-x-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span>Learning Philosophy</span>
                </h3>
                <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
                  My educational journey from GD Goenka Public School to SRM Institute of Science and Technology has shaped 
                  my passion for technology and innovation. Each institution has contributed to building my foundation in 
                  problem-solving, critical thinking, and technical expertise. Currently pursuing Computer Science and Engineering, 
                  I believe that education is not just about acquiring knowledge, but about developing the ability to adapt, 
                  create, and contribute to the ever-evolving world of technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
