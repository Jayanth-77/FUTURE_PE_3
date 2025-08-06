import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import profileImage from '/lovable-uploads/2bf562d9-4f47-46d5-a157-48e0eb39e8b3.png';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-lg text-muted-foreground font-medium">
                👋 Hello, I'm
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Barri Jayanth
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground font-medium">
                Aspiring Full-Stack Developer | AI Innovator | Tech for Impact
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              An innovative engineering student from India with a strong focus on full-stack development, 
              AI/ML, and assistive technologies. I build tech solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="group"
              >
                Get Started
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent">7th</div>
                <div className="text-sm text-muted-foreground">Place at Hackathon</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-lg overflow-hidden shadow-glow animate-glow">
                <img 
                  src={profileImage} 
                  alt="Barri Jayanth at STEPCONE 2025" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;