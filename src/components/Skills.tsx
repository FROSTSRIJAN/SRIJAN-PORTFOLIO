import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Database, Settings, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Python", "JavaScript", "Java", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Web Development",
      icon: <Settings className="w-6 h-6" />,
      skills: ["React", "Node.js", "Express", "HTML", "CSS", "Tailwind CSS"],
      color: "text-green-400"
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["scikit-learn", "Pandas", "Random Forest", "NLP", "RAG", "FAISS", "Ollama"],
      color: "text-purple-400"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Database Design"],
      color: "text-orange-400"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git/GitHub", "Docker", "Streamlit", "VS Code"],
      color: "text-red-400"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Communication", "Teamwork", "Leadership", "Problem Solving"],
      color: "text-yellow-400"
    }
  ];

  const coreCS = [
    "Data Structures & Algorithms",
    "Divide & Conquer Algorithms",
    "API Design",
    "Software Architecture",
    "System Design Fundamentals"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern AI-powered applications and web solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                    <span className="text-lg font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core CS Concepts */}
          <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <span>Core Computer Science</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreCS.map((concept, index) => (
                  <div 
                    key={concept}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">{concept}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;