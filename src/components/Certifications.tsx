import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Shield, Brain, Code, Award, FileText } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AI/ML Certification",
      issuer: "IIT Patna",
      duration: "6 months",
      completedDate: "2024",
      description: "Comprehensive program covering machine learning fundamentals, deep learning, neural networks, and practical AI implementation.",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Python", "Data Science"],
      level: "Advanced",
      icon: <Brain className="w-6 h-6" />,
      color: "text-purple-400",
      verified: true
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Coursera",
      duration: "Course Series",
      completedDate: "2024",
      description: "Understanding cybersecurity principles, threat analysis, security frameworks, and best practices for secure software development.",
      skills: ["Cybersecurity", "Risk Assessment", "Security Frameworks", "Threat Analysis"],
      level: "Intermediate",
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-400",
      verified: true
    },
    {
      title: "Divide & Conquer, Sorting & Searching",
      issuer: "Coursera",
      duration: "Algorithm Specialization",
      completedDate: "2024",
      description: "Advanced algorithmic techniques including divide and conquer strategies, efficient sorting algorithms, and search optimizations.",
      skills: ["Algorithms", "Data Structures", "Complexity Analysis", "Optimization"],
      level: "Advanced",
      icon: <Code className="w-6 h-6" />,
      color: "text-green-400",
      verified: true
    },
    {
      title: "Randomized Algorithms",
      issuer: "Coursera",
      duration: "Advanced Course",
      completedDate: "2024",
      description: "Probabilistic algorithms, Monte Carlo methods, randomized data structures, and their applications in computer science.",
      skills: ["Randomized Algorithms", "Probability Theory", "Monte Carlo Methods", "Advanced Mathematics"],
      level: "Advanced",
      icon: <Award className="w-6 h-6" />,
      color: "text-orange-400",
      verified: true
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Beginner": return "bg-green-500/20 text-green-300 border-green-500/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Certifications & Learning
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications and specialized courses
            </p>
          </div>

          {/* Certifications Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Advanced Level</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Top Institutions</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={cert.color}>
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg">{cert.title}</div>
                          <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                        </div>
                      </div>
                      {cert.verified && (
                        <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.completedDate}</span>
                        </div>
                        <span>•</span>
                        <span>{cert.duration}</span>
                      </div>
                      <Badge className={getLevelColor(cert.level)}>
                        {cert.level}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Learned */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">Skills & Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Approach */}
          <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <FileText className="w-6 h-6 text-primary" />
                <span>Continuous Learning Approach</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                My certification journey reflects a commitment to staying current with emerging technologies 
                and industry best practices. Each certification represents not just completion of coursework, 
                but practical application of knowledge through projects and real-world implementations.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">AI/ML Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deep dive into machine learning algorithms, neural networks, and practical AI implementation.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">Security Mindset</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Understanding cybersecurity principles to build secure, robust applications.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">Algorithm Mastery</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithmic thinking for efficient problem-solving and optimization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;