import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Award, Shield, Globe } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "kathasaar",
      title: "KathaSaar",
      subtitle: "AI-powered Indian Mythology Chatbot",
      stack: ["RAG", "FAISS", "Ollama (Mistral)", "Python", "Streamlit"],
      impact: "Awarded the highest academic grade",
      description: "NLP-driven chatbot explaining scriptures with context-aware answers and bilingual voice output. Built retrieval pipelines with embeddings + FAISS and evaluation UX in Streamlit.",
      features: [
        "Context-aware scripture explanations",
        "Bilingual voice output (Hindi/English)",
        "RAG-based retrieval system",
        "FAISS vector database integration",
        "Real-time evaluation metrics",
        "Streamlit interactive interface"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "text-yellow-400",
      image: "/assest/kathasaar.jpeg",
      github: "https://github.com",
      demo: "https://kathasaar-demo.com"
    },
    {
      id: "fraud-detection",
      title: "Credit Card Fraud Detection",
      subtitle: "ML-powered Security System",
      stack: ["Python", "Pandas", "scikit-learn", "Random Forest", "Matplotlib"],
      impact: "~50k transactions processed with high accuracy",
      description: "Trained and validated a fraud classifier on realistic synthetic transactions with feature engineering, class imbalance handling, and metric-driven tuning (precision/recall/ROC-AUC).",
      features: [
        "Random Forest classification model",
        "Advanced feature engineering",
        "Class imbalance handling techniques",
        "Comprehensive model evaluation",
        "ROC-AUC optimization",
        "Real-time fraud scoring"
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-400",
      image: "/assest/Credit card fraud detection.jpeg",
      github: "https://github.com",
      demo: "https://fraud-detection-demo.com"
    },
    {
      id: "koshish-ngo",
      title: "Koshish NGO Website",
      subtitle: "Live Charitable Organization Platform",
      stack: ["React", "Node.js", "CSS", "JavaScript", "MongoDB"],
      impact: "Live production website serving real users",
      description: "Designed and deployed a responsive NGO site with content management and donation flow. Improved UX and accessibility as part of paid on-site internship deliverable.",
      features: [
        "Responsive web design",
        "Content management system",
        "Donation processing flow",
        "Accessibility compliance",
        "SEO optimization",
        "Mobile-first approach"
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "text-green-400",
      image: "/assest/koshish website.jpeg",
      github: "https://github.com",
      demo: "https://koshish-org.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions with cutting-edge AI/ML and modern web technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <div className={project.color}>
                      {project.icon}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">{project.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {project.subtitle}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-primary mb-1">IMPACT</div>
                    <div className="text-sm font-medium">{project.impact}</div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">TECH STACK</div>
                    <div className="flex flex-wrap gap-1">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.stack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3 text-2xl">
                  <div className={selectedProject.color}>
                    {selectedProject.icon}
                  </div>
                  <span>{selectedProject.title}</span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech: string) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    onClick={() => window.open(selectedProject.github, '_blank')}
                    className="flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;