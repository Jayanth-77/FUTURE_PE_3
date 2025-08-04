import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Upanethra Spectacles",
      description: "Smart wearable for visually impaired users with voice feedback and obstacle detection. Secured 7th place at Hack With Vizag 2.0.",
      features: [
        "Voice feedback system",
        "Real-time obstacle detection",
        "AI-powered navigation assistance",
        "Lightweight wearable design"
      ],
      tech: ["Python", "Computer Vision", "IoT", "Machine Learning"],
      achievement: "7th Place at Hack With Vizag 2.0",
      githubUrl: "https://github.com/Jayanth-77/upanethra-spectacles",
      liveUrl: "#",
      gradient: "bg-hero-gradient"
    },
    {
      title: "Taskify",
      description: "Responsive task management web app using React.js with clean UI and intuitive features for productivity enhancement.",
      features: [
        "Task creation and management",
        "Progress tracking",
        "Responsive design",
        "Clean and intuitive UI"
      ],
      tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
      achievement: "Featured Project",
      githubUrl: "https://github.com/Jayanth-77/taskify",
      liveUrl: "https://taskify-jayanth.netlify.app",
      gradient: "bg-accent-gradient"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that make a real impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] group"
            >
              {/* Project Header */}
              <div className={`p-6 ${project.gradient} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.achievement && (
                      <div className="flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                        <Award className="h-4 w-4" />
                        <span className="hidden sm:inline">{project.achievement}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-8 shadow-soft hover:shadow-glow transition-all duration-300">
            <div className="space-y-4">
              <div className="text-2xl font-bold">Want to see more?</div>
              <p className="text-muted-foreground">
                Check out my GitHub for more projects and contributions
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://github.com/Jayanth-77', '_blank')}
                className="group"
              >
                <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Visit GitHub Profile
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;