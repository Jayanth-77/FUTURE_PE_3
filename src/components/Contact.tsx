import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_tnb54iq', // Service ID
        'template_mqlr9d7', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'zoHmX6e-Sd3wktzyG' // Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "barrijayanth@gmail.com",
      href: "mailto:barrijayanth@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91829 79375",
      href: "tel:+919182979375",
      color: "text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jayanth-barri-9666862a5",
      href: "https://linkedin.com/in/jayanth-barri-9666862a5",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Jayanth-77",
      href: "https://github.com/Jayanth-77",
      color: "text-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group">
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`w-12 h-12 ${item.color}/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="p-8 bg-hero-gradient text-white shadow-glow">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Let's Build Something Amazing Together!</h3>
                <p className="text-white/90 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with passionate individuals and businesses. 
                  Whether you need a portfolio website, a productivity app, or a custom solution, I'm here to help.
                </p>
                <div className="flex items-center space-x-2 pt-4">
                  <CheckCircle className="h-5 w-5" />
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Free consultation and project estimate</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry, collaboration, etc."
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  className="w-full min-h-32 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Based in Visakhapatnam, India</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Available for remote work and collaborations worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;