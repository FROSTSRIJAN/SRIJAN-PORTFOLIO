import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Users, Palette, Waves, Calendar } from "lucide-react";

const Achievements = () => {
  const achievementCategories = [
    {
      title: "Technical & Coding Competitions",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-yellow-400",
      achievements: [
        {
          title: "Human vs AI: Battle of Wits",
          event: "National Symposium Navonmēșa '25",
          position: "1st Place",
          year: "2025",
          type: "National"
        },
        {
          title: "Runecode",
          event: "Hexacore National Symposium", 
          position: "1st Place",
          year: "2025",
          type: "National"
        },
        {
          title: "Code in the Dark",
          event: "WHHC",
          position: "2nd Place", 
          year: "2025",
          type: "Competition"
        },
        {
          title: "Lucky Bhaskar",
          event: "WHHC",
          position: "1st Place",
          year: "2025", 
          type: "Competition"
        }
      ]
    },
    {
      title: "Sports & Leadership (Holy Mission Sr. Sec. School)",
      icon: <Medal className="w-6 h-6" />,
      color: "text-blue-400",
      achievements: [
        {
          title: "Inter-House Kabaddi",
          event: "School Championship",
          position: "Winner",
          year: "2021-23",
          type: "Sports"
        },
        {
          title: "Basketball Championship", 
          event: "School Tournament",
          position: "Winner",
          year: "2021-23",
          type: "Sports"
        },
        {
          title: "Inter-State Abacus",
          event: "Regional Competition",
          position: "2nd Place",
          year: "2022",
          type: "Academic"
        },
        {
          title: "Vice Captain",
          event: "Yellow House",
          position: "Leadership Role",
          year: "2022-23",
          type: "Leadership"
        }
      ]
    },
    {
      title: "Academic Excellence (GD Goenka Public School)",
      icon: <Star className="w-6 h-6" />,
      color: "text-purple-400",
      achievements: [
        {
          title: "SOF Maths Olympiad",
          event: "Science Olympiad Foundation",
          position: "1st Place",
          year: "2020",
          type: "Academic"
        },
        {
          title: "SOF English Olympiad",
          event: "Science Olympiad Foundation", 
          position: "2nd Place",
          year: "2019",
          type: "Academic"
        },
        {
          title: "SOF Maths Olympiad",
          event: "Science Olympiad Foundation",
          position: "3rd Place", 
          year: "2018",
          type: "Academic"
        },
        {
          title: "Roll of Honour",
          event: "Outstanding Academic Performance",
          position: "Recognition",
          year: "2019-21",
          type: "Academic"
        }
      ]
    },
    {
      title: "Creative & Sports Excellence",
      icon: <Palette className="w-6 h-6" />,
      color: "text-green-400",
      achievements: [
        {
          title: "Drawing Competition",
          event: "School & District Level",
          position: "1st Place (7×)",
          year: "2015-21",
          type: "Creative"
        },
        {
          title: "Inter-House Kabaddi",
          event: "GD Goenka Championship",
          position: "1st Place (3×)",
          year: "2017-21",
          type: "Sports"
        },
        {
          title: "Swimming Championship",
          event: "School Competition",
          position: "1st Place",
          year: "2019",
          type: "Sports"
        }
      ]
    }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("1st") || position === "Winner") return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    if (position.includes("2nd")) return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    if (position.includes("3rd")) return "bg-orange-500/20 text-orange-300 border-orange-500/30";
    return "bg-primary/20 text-primary border-primary/30";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Sports": return <Users className="w-4 h-4" />;
      case "Leadership": return <Star className="w-4 h-4" />;
      case "Creative": return <Palette className="w-4 h-4" />;
      case "Academic": return <Medal className="w-4 h-4" />;
      case "National": return <Trophy className="w-4 h-4" />;
      default: return <Trophy className="w-4 h-4" />;
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of excellence across technical competitions, academics, sports, and leadership
            </p>
          </div>

          {/* Achievement Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Total Wins</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">National Level</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-muted-foreground">Drawing Wins</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Categories */}
          <div className="space-y-12">
            {achievementCategories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <Card className="bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-xl">
                      <div className={category.color}>
                        {category.icon}
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-all duration-300 border border-glass-border/50"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.event}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-muted-foreground">
                                {getTypeIcon(achievement.type)}
                              </div>
                              <Calendar className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{achievement.year}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge 
                              className={`${getPositionColor(achievement.position)} font-semibold`}
                            >
                              {achievement.position}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Achievement Philosophy */}
          <Card className="mt-12 bg-card-gradient backdrop-blur-sm border-glass-border shadow-glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Philosophy of Excellence</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                "Excellence is not a destination but a journey of continuous improvement. Each achievement represents 
                countless hours of dedication, learning from failures, and pushing beyond comfort zones. Whether in 
                coding competitions, sports, or creative endeavors, the pursuit of excellence shapes character and 
                builds the resilience needed to tackle tomorrow's challenges."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;