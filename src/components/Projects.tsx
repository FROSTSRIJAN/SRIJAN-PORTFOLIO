import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Award, Shield, Atom } from "lucide-react";
import GlowingBorder from "@/components/ui/glowing-border";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  impact: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  color: string;
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "kathasaar",
      title: "Kathasaar",
      subtitle: "A-graded by IIT Patna professors",
      stack: ["RAG", "FAISS", "Mistral", "Python", "Streamlit"],
      impact: "Featured: academic A-grade with production-ready NLP architecture",
      description:
        "An AI-driven mythology assistant with retrieval-augmented generation, bilingual support, and context-aware responses for deeper narrative understanding.",
      features: [
        "RAG pipeline with vector similarity search over curated corpus",
        "Context-preserving multi-turn responses",
        "Streamlit interface for rapid experimentation and demonstrations",
        "Academic evaluation and iteration with faculty feedback",
      ],
      icon: <Award className="w-6 h-6" />,
      color: "text-yellow-400",
      image: "/assest/kathasaar.jpeg",
      github: "https://github.com/SrijanManiTripathi/Kathasaar-For-IIT-PATNA.git",
      featured: true,
    },
    {
      id: "quantum-federated",
      title: "Quantum Adaptive Federated Learning",
      subtitle: "Privacy-preserving collaborative learning",
      stack: ["Python", "Federated Learning", "Optimization", "AI"],
      impact: "Adaptive strategy for robust decentralized model performance",
      description:
        "Research-focused federated learning implementation with adaptive rounds and resilient aggregation strategies for distributed clients.",
      features: [
        "Client-adaptive training schedules",
        "Federated aggregation with drift-aware controls",
        "Evaluation across non-IID data distributions",
        "Emphasis on privacy and communication efficiency",
      ],
      icon: <Atom className="w-6 h-6" />,
      color: "text-violet-400",
      image: "/assest/koshish website.jpeg",
      github: "https://github.com/SrijanManiTripathi",
    },
    {
      id: "fraud-detection",
      title: "Credit Card Fraud Detection",
      subtitle: "End-to-end ML pipeline on imbalanced data",
      stack: ["Python", "Pandas", "scikit-learn", "Random Forest", "ROC-AUC"],
      impact: "92% detection accuracy with strong precision-recall trade-off",
      description:
        "Built a complete fraud analytics pipeline from preprocessing and feature engineering to model training, thresholding, and reporting on highly imbalanced transactions.",
      features: [
        "Imbalance handling with metric-driven tuning",
        "End-to-end reproducible training pipeline",
        "Precision, recall, and ROC-AUC based evaluation",
        "Designed for practical fraud risk scoring",
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-400",
      image: "/assest/Credit card fraud detection.jpeg",
      github: "https://github.com/SrijanManiTripathi/Credit-Card-Fraud-Detection.git",
    },
  ];

  const handleTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = -((y / rect.height) * 6 - 3);
    const rotateY = (x / rect.width) * 6 - 3;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Product-minded engineering with measurable impact across AI and full-stack systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="transition-all duration-300"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <GlowingBorder disabled={false} containerClassName="rounded-2xl h-full">
                  <Card
                    className="h-full bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer animate-scale-in overflow-hidden group rounded-2xl"
                    style={{ animationDelay: `${index * 140}ms` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                        <div className={project.color}>{project.icon}</div>
                      </div>

                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-yellow-500/20 text-yellow-300 border-yellow-400/40">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="space-y-1">
                        <div className="text-lg font-bold">{project.title}</div>
                        <div className="text-sm text-muted-foreground font-normal">{project.subtitle}</div>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                        <div className="text-xs font-semibold text-primary mb-1">IMPACT</div>
                        <div className="text-sm font-medium">{project.impact}</div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs transition-all duration-300 hover:scale-[1.03]"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, "_blank", "noopener,noreferrer");
                          }}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </Button>

                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1 text-xs bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.03]"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, "_blank", "noopener,noreferrer");
                            }}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </GlowingBorder>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3 text-2xl">
                  <div className={selectedProject.color}>{selectedProject.icon}</div>
                  <span>{selectedProject.title}</span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">{selectedProject.description}</p>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    onClick={() => window.open(selectedProject.github, "_blank", "noopener,noreferrer")}
                    className="flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </Button>

                  {selectedProject.demo && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.demo, "_blank", "noopener,noreferrer")}
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                  )}
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
