import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating technology that makes a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="text-lg leading-relaxed text-muted-foreground">
              <p className="mb-4">
                I'm <strong className="text-primary">B. Jayanth</strong>, an innovative engineering student from India 
                with a strong focus on full-stack development, AI/ML, and assistive technologies.
              </p>
              <p className="mb-4">
                I've built impactful projects like <strong className="text-accent">Upanethra Spectacles</strong> and 
                <strong className="text-accent"> Taskify</strong>. I'm driven to create tech solutions that solve 
                real-world problems and make a positive impact on people's lives.
              </p>
              <p>
                My journey in technology is fueled by curiosity and a desire to innovate. I believe that 
                technology should be accessible, useful, and transformative.
              </p>
            </div>

            {/* Education Card */}
            <Card className="p-6 shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Graduating 2027</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>NSRIT, Visakhapatnam</span>
                    </div>
                  </div>
                  <p className="mt-3 text-foreground font-medium">
                    B.Tech in Computer Science and Engineering
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <Card className="p-6 shadow-soft hover:shadow-accent transition-all duration-300 bg-accent-gradient text-accent-foreground">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hack With Vizag 2.0</span>
                  <span className="text-2xl font-bold">7th Place</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Major Projects</span>
                  <span className="text-2xl font-bold">2+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Technologies Mastered</span>
                  <span className="text-2xl font-bold">10+</span>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  AI
                </div>
                <h4 className="font-semibold">AI/ML Focus</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Specialized in machine learning and assistive tech
                </p>
              </Card>

              <Card className="p-6 text-center shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  FS
                </div>
                <h4 className="font-semibold">Full-Stack</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  End-to-end web development expertise
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;