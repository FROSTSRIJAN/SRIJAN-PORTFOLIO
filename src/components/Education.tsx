import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "SRM Institute of Science & Technology",
      duration: "Aug 2023 – Aug 2027",
      location: "Chennai, India",
      status: "Pursuing",
      description: "Specializing in AI/ML, full-stack development, and software engineering with hands-on projects and research.",
      highlights: [
        "Active member of Developer Network Space (DNS)",
        "Joint Treasurer managing community operations",
        "Focus on AI/ML and software development",
        "Engaging in research projects and hackathons"
      ],
      gpa: "Excellent Academic Standing",
      current: true
    },
    {
      degree: "Senior Secondary (XII)",
      field: "Science Stream",
      institution: "Holy Mission Sr. Sec. School",
      duration: "2021 – 2023",
      location: "Patna, India", 
      status: "Completed",
      description: "Completed senior secondary education with focus on Mathematics, Physics, and Chemistry, building strong analytical foundation.",
      highlights: [
        "Vice Captain of Yellow House",
        "Winner of Inter-House Kabaddi competition",
        "Basketball championship winner",
        "2nd place in Inter-State Abacus competition"
      ],
      gpa: "Distinction"
    },
    {
      degree: "Secondary Education (I–X)",
      field: "General Education",
      institution: "GD Goenka Public School", 
      duration: "2013 – 2021",
      location: "Patna, India",
      status: "Completed",
      description: "Foundation years with excellent academic performance and diverse extracurricular achievements.",
      highlights: [
        "Multiple Olympiad medals (SOF Math & English)",
        "7× Drawing competition winner",
        "3× Inter-House Kabaddi champion",
        "Swimming competition winner",
        "Roll of Honour recipient"
      ],
      gpa: "Outstanding Performance"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Educational Journey
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in computer science while excelling in academics, sports, and leadership
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className={`bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 animate-fade-in ${
                  edu.current ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                    <div className="space-y-2">
                      <CardTitle className="flex items-center space-x-3">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <div>
                          <div className="text-xl font-bold flex items-center space-x-2">
                            <span>{edu.degree}</span>
                            {edu.current && (
                              <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="text-lg text-primary font-semibold">{edu.field}</div>
                        </div>
                      </CardTitle>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <Badge 
                        variant={edu.current ? "default" : "secondary"} 
                        className={edu.current ? "bg-primary" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Academic Performance */}
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-semibold text-primary">Academic Performance</span>
                    </div>
                    <div className="text-sm font-medium">{edu.gpa}</div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements & Activities:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Educational Philosophy */}
          <Card className="mt-12 bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center space-x-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span>Learning Philosophy</span>
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                "Education is not just about acquiring knowledge, but about developing the ability to think critically, 
                solve complex problems, and adapt to an ever-changing technological landscape. My journey from foundational 
                learning to specialized computer science education has been guided by curiosity, practical application, 
                and the belief that learning never stops."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;