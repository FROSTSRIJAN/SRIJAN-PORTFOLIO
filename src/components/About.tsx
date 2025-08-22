import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const quickFacts = [
    "AI/ML",
    "Web Dev",
    "Competitive Coding",
    "Leadership",
    "Sports",
    "Trilingual (English/Hindi + basic French)"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6 animate-fade-in">
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm a B.Tech CSE student at{" "}
                    <span className="text-primary font-semibold">SRM IST (2023–27)</span>{" "}
                    focused on AI/ML and full-stack development. I've shipped a live NGO website, 
                    built an award-winning ML chatbot (KathaSaar), and led community ops as Joint 
                    Treasurer at Developer Network Space.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                    Outside code: basketball, kabaddi, swimming, and 7× drawing wins. I believe in 
                    continuous learning and building solutions that make a real impact.
                  </p>
                </CardContent>
              </Card>

              {/* Current Focus */}
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Current Focus</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Building AI-powered applications with RAG and NLP
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Full-stack web development with modern frameworks
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Contributing to open-source projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Exploring machine learning model optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quick Facts & Stats */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Quick Facts */}
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">Quick Facts</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickFacts.map((fact, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {fact}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievement Stats */}
              <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">Achievements at a Glance</h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Competition Wins</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Live Projects</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-sm text-muted-foreground">Years Coding</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;