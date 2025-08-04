import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Lightbulb, Users, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Portfolio Websites",
      description: "Professional portfolio websites that showcase your work and skills effectively.",
      features: [
        "Responsive design",
        "Modern UI/UX",
        "SEO optimized",
        "Fast loading"
      ],
      price: "Starting at ₹5,000"
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description: "High-converting landing pages for businesses and marketing campaigns.",
      features: [
        "Conversion focused",
        "Mobile optimized",
        "Analytics integration",
        "A/B testing ready"
      ],
      price: "Starting at ₹3,000"
    },
    {
      icon: Smartphone,
      title: "Productivity Apps",
      description: "Custom web applications for task management and productivity enhancement.",
      features: [
        "User-friendly interface",
        "Real-time updates",
        "Cross-platform",
        "Data persistence"
      ],
      price: "Starting at ₹8,000"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend.",
      features: [
        "End-to-end development",
        "Database integration",
        "API development",
        "Deployment support"
      ],
      price: "Custom pricing"
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I build responsive and user-friendly websites and apps for individuals or businesses. 
            Open to collaborations and freelance work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-hero-gradient opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-lg font-bold text-primary mb-4">
                  {service.price}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-hero-gradient text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate and bring your ideas to life with modern technology and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="glass" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                <Users className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Collaboration
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://github.com/Jayanth-77', '_blank')}
                className="group"
              >
                <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;