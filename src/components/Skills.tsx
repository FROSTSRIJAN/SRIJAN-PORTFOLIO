import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load video immediately for better visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 500); // Reduced from 1000ms to 500ms
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "/skills icon/4375050_logo_python_icon.png" },
        { name: "JavaScript", icon: "/skills icon/4373213_js_logo_logos_icon.png" },
        { name: "TypeScript", icon: "/skills icon/icons8-typescript-50.png" },
        { name: "C++", icon: "/skills icon/icons8-c++-50.png" },
        { name: "C", icon: "/skills icon/icons8-c-50.png" },
        { name: "Java", icon: "/skills icon/8546893_java_icon.png" },
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "/skills icon/icons8-react-40.png" },
        { name: "Node.js", icon: "/skills icon/1012818_code_development_logo_nodejs_icon.png" },
        { name: "Express.js", icon: "/skills icon/icons8-express-js-40.png" },
        { name: "HTML5", icon: "/skills icon/icons8-html-5-50.png" },
        { name: "CSS3", icon: "/skills icon/icons8-css3-50.png" },
        { name: "Vue.js", icon: "/skills icon/icons8-vue-js-64.png" },
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "Machine Learning", icon: "/skills icon/icons8-machine-learning-50.png" },
        { name: "Django", icon: "/skills icon/icons8-django-50.png" },
        { name: "Flask", icon: "/skills icon/icons8-flask-50.png" },
        { name: "REST API", icon: "/skills icon/icons8-rest-api-50.png" },
        { name: "SQL", icon: "/skills icon/315887_document_sql_file_icon.png" },
        { name: "MongoDB", icon: "/skills icon/1012822_code_development_logo_mongodb_programming_icon.png" },
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "/skills icon/icons8-git-50.png" },
        { name: "GitHub", icon: "/skills icon/icons8-github-40.png" },
        { name: "PostgreSQL", icon: "/skills icon/icons8-postgresql-50.png" },
        { name: "SQLite", icon: "/skills icon/icons8-sqlite-50.png" },
        { name: "Visual Studio", icon: "/skills icon/icons8-visual-studio-50.png" },
        { name: "Figma", icon: "/skills icon/icons8-figma-50.png" },
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Earth Video Background */}
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
              filter: 'brightness(0.6) contrast(1.3) saturate(1.2)',
              opacity: isVideoLoaded ? 1 : 0
            }}
            preload="metadata"
          >
            <source src="/assest/earth.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Enhanced fallback gradient while video loads */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `
              radial-gradient(ellipse at center, #1a1a4e 0%, #2a2a6e 40%, #0a0a2e 70%, #000 100%),
              linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)
            `,
            opacity: isVideoLoaded ? 0 : 1
          }}
        />
        
        {/* Dark overlay for text readability - Reduced opacity to show Earth better */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Impactful One-Liner */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mastering the <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Digital Universe</span>
            </h2>
            
            {/* Impactful One-Liner */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 font-medium mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-primary">⚡</span> "Transforming complex problems into elegant solutions with code, creativity, and cosmic precision." <span className="text-accent">🚀</span>
            </motion.p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              >
                <Card className="bg-black/60 backdrop-blur-md border border-white/30 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-white">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white mb-2`}>
                        {category.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="flex flex-col items-center p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                          whileHover={{ scale: 1.05, y: -5 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (categoryIndex * 0.2) + (index * 0.1), duration: 0.5 }}
                        >
                          <div className="w-12 h-12 mb-2 flex items-center justify-center bg-white/10 rounded-lg border border-white/20">
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="w-8 h-8 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                              style={{
                                filter: 'brightness(1.4) contrast(1.2) saturate(1.1)'
                              }}
                              onError={(e) => {
                                // Fallback if icon fails to load
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling!.textContent = skill.name.charAt(0).toUpperCase();
                              }}
                            />
                            <div 
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center text-white font-bold text-sm"
                              style={{ display: 'none' }}
                            ></div>
                          </div>
                          <span className="text-white/90 text-xs font-medium text-center group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Badge */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Full-Stack Development", "API Design", "Database Design", 
                "System Architecture", "Problem Solving", "Team Leadership"
              ].map((skill, index) => (
                <Badge
                  key={skill}
                  className="bg-gradient-to-r from-primary/20 to-accent/20 text-white border border-primary/30 px-4 py-2 text-sm hover:bg-primary/30 transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;