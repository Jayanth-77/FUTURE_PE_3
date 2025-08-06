import { Card } from '@/components/ui/card';
import { Code, Database, Smartphone, Cloud, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Python", "Firebase", "Git", "GitHub", "API Development"],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Brain,
      title: "Prompt Engineering",
      skills: ["LLM Optimization", "AI Integration", "GPT Fine-tuning", "Conversational AI"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Cloud,
      title: "Platforms & Tools",
      skills: ["Replit", "Netlify", "VS Code", "Version Control", "Deployment"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const progressBars = [
    { skill: "React.js", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "Python", level: 80 },
    { skill: "HTML/CSS", level: 95 },
    { skill: "Prompt Engineering", level: 85 },
    { skill: "Firebase", level: 70 }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 text-center shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`h-8 w-8 ${category.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <Card className="p-8 shadow-soft">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Proficiency <span className="bg-accent-gradient bg-clip-text text-transparent">Levels</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {progressBars.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-hero-gradient rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "IoT Development", "Computer Vision", "Assistive Technology", 
              "Web Accessibility", "UI/UX Design", "Agile Development",
              "Problem Solving", "Team Collaboration"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;