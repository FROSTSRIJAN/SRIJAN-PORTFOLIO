import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

// 3D Galaxy Model Component for Education - SIMPLE BACKGROUND ONLY
const EducationGalaxySpace = () => {
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
          scale={1.8} 
          position={[0, 0, 0]} 
          rotation={[0, Math.PI / 4, 0]}
        />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
        />
      </Suspense>
    </Canvas>
  );
};

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);
  const [show3D, setShow3D] = useState(false);

  // Simple 3D loading
  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Buddha Institute of Technology",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      duration: "2023 – 2027",
      location: "Gaya, Bihar",
      status: "current",
      description: "Pursuing comprehensive education in computer science with focus on software development, algorithms, and emerging technologies.",
      achievements: ["Dean's List", "Programming Club Member", "Technical Event Organizer"],
      coursework: ["Data Structures", "Algorithms", "Web Development", "Database Management", "Software Engineering"],
      cgpa: "8.2/10"
    },
    {
      id: 2,
      institution: "D.A.V. Public School",
      degree: "Senior Secondary (XII)",
      field: "Science (PCM)",
      duration: "2021 – 2023",
      location: "Gaya, Bihar",
      status: "completed",
      description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics, building strong foundation for engineering studies.",
      achievements: ["Science Olympiad Participant", "Mathematics Quiz Winner", "Academic Excellence Award"],
      coursework: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"],
      percentage: "84.2%"
    },
    {
      id: 3,
      institution: "D.A.V. Public School",
      degree: "Secondary (X)",
      field: "All Subjects",
      duration: "2019 – 2021",
      location: "Gaya, Bihar",
      status: "completed",
      description: "Successfully completed secondary education with strong performance across all subjects, demonstrating well-rounded academic capabilities.",
      achievements: ["Class Representative", "Sports Day Participation", "Cultural Program Organizer"],
      coursework: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
      percentage: "88.6%"
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-black/95 overflow-hidden">
      {/* Clean 3D Galaxy Background */}
      {show3D && (
        <div className="absolute inset-0 z-0 opacity-15">
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
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span>{edu.institution}</span>
                        </CardTitle>
                        <h3 className="text-lg font-semibold text-accent mb-1">
                          {edu.degree} - {edu.field}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
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
                  
                  <CardContent>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {/* Achievements */}
                    {edu.achievements && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-white/70 mb-2 flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>Key Achievements</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="text-xs border-accent/50 text-accent hover:bg-accent/10 transition-colors"
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
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="secondary" 
                                  className="text-xs bg-primary/10 text-primary border-primary/30"
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
                  Education is not just about acquiring knowledge, but about developing the ability to think critically, 
                  solve problems creatively, and adapt to an ever-changing technological landscape. My academic journey 
                  has taught me that continuous learning and curiosity are the keys to success in the field of technology.
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
