import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Joint Treasurer",
      company: "Developer Network Space (DNS)",
      type: "On-site",
      duration: "Aug 2025 – Present",
      location: "SRM IST",
      description: [
        "Managing finances, budgeting, and event operations",
        "Supporting hackathons, workshops, and community growth initiatives",
        "Leading financial planning for 500+ member community events"
      ],
      skills: ["Leadership", "Financial Management", "Event Planning", "Community Building"],
      current: true
    },
    {
      title: "Web Developer Intern",
      company: "Koshish Charitable Trust",
      type: "On-site",
      duration: "Jun–Jul 2025",
      location: "India",
      description: [
        "Developed and deployed koshish-org.com from scratch",
        "Built responsive frontend and backend features for NGO operations",
        "Implemented donation flow and content management system"
      ],
      skills: ["React", "Node.js", "Full-Stack Development", "UI/UX Design"],
      current: false
    },
    {
      title: "AI Intern",
      company: "Edunet Foundation",
      type: "Remote",
      duration: "Jun–Jul 2025",
      location: "Remote",
      description: [
        "Assisted in developing AI/ML models for real-world use cases",
        "Performed dataset preparation, model training, and evaluation",
        "Optimized machine learning pipelines for production deployment"
      ],
      skills: ["Python", "Machine Learning", "Data Processing", "Model Optimization"],
      current: false
    },
    {
      title: "Coder",
      company: "Skolar",
      type: "Remote",
      duration: "Aug–Oct 2023",
      location: "Remote",
      description: [
        "Competitive coding and algorithmic problem-solving",
        "DSA practice and implementation of efficient algorithms",
        "Contributed to coding challenges and educational content"
      ],
      skills: ["C", "C++", "Python", "Data Structures", "Algorithms"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building real-world impact through internships, leadership roles, and technical contributions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 animate-fade-in ${
                  exp.current ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold flex items-center space-x-2">
                        <span>{exp.title}</span>
                        {exp.current && (
                          <Badge variant="default" className="bg-primary text-primary-foreground">
                            Current
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">Technologies & Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Looking for New Opportunities</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm actively seeking internships and full-time positions in AI/ML, full-stack development, 
                  or software engineering. Let's connect and discuss how I can contribute to your team!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:srijanmani@example.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors duration-300"
                  >
                    View Resume
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;