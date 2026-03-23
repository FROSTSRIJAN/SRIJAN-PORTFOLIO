import { Trophy, Sparkles, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlowingBorder from "@/components/ui/glowing-border";

const Achievements = () => {
  const achievements = [
    {
      id: "csi",
      icon: <Medal className="h-6 w-6" />,
      emoji: "🥈",
      title: "CSI National Project Competition",
      position: "2nd Place",
      subtitle: "National-level project showcase",
      glow: "from-slate-300/70 via-zinc-200/60 to-slate-100/50",
    },
    {
      id: "human-vs-ai",
      icon: <Trophy className="h-6 w-6" />,
      emoji: "🥇",
      title: "Human vs AI Symposium",
      position: "1st Place",
      subtitle: "Battle of wits, strategy, and innovation",
      glow: "from-amber-400/60 via-yellow-300/40 to-orange-300/50",
    },
    {
      id: "runecode",
      icon: <Sparkles className="h-6 w-6" />,
      emoji: "🥇",
      title: "Runecode Coding Competition",
      position: "1st Place",
      subtitle: "Competitive coding under pressure",
      glow: "from-blue-400/60 via-indigo-400/40 to-violet-400/50",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Milestones that reflect execution quality, technical depth, and competitive performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <GlowingBorder disabled={false} containerClassName="rounded-2xl h-full">
                  <Card className="h-full rounded-2xl border border-white/10 bg-card/65 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(99,102,241,0.35)] group overflow-hidden">
                    <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${achievement.glow} opacity-35 blur-xl`} />
                    <CardContent className="relative p-6 md:p-7 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary">
                          {achievement.icon}
                          <span className="text-2xl leading-none">{achievement.emoji}</span>
                        </div>
                        <Badge className="bg-primary/15 text-primary border border-primary/30">
                          {achievement.position}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold leading-tight">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
                    </CardContent>
                  </Card>
                </GlowingBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
