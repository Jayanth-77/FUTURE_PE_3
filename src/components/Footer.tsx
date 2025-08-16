import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const initializeChatbot = () => {
      // Initialize chatbase
      (window as any).chatbaseConfig = {
        chatbotId: "tiZ4L-WqbNJYggji-rpz9",
        domain: "www.chatbase.co"
      };

      // Create and append the script
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.defer = true;
      script.onload = () => {
        // Configure welcome message after script loads
        if ((window as any).chatbase) {
          (window as any).chatbase('config', {
            welcomeMessage: "HI! I'am Jayanth's AI assistant"
          });
          
          // Add voice input functionality
          addVoiceInputToChatbot();
        }
      };
      document.head.appendChild(script);
    };

    const addVoiceInputToChatbot = () => {
      // Wait for chatbot to be fully loaded
      setTimeout(() => {
        const chatbotWindow = document.querySelector('#chatbase-bubble-window');
        const inputContainer = document.querySelector('#chatbase-bubble-window .relative');
        
        if (chatbotWindow && inputContainer && !document.querySelector('#voice-input-btn')) {
          // Create voice input button
          const voiceButton = document.createElement('button');
          voiceButton.id = 'voice-input-btn';
          voiceButton.innerHTML = '🎤';
          voiceButton.type = 'button';
          voiceButton.style.cssText = `
            position: absolute;
            right: 45px;
            bottom: 8px;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            border: none;
            background: transparent;
            color: #6b7280;
            font-size: 16px;
            cursor: pointer;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            hover:background: #f3f4f6;
          `;
          
          let isListening = false;
          let recognition: any = null;
          
          // Check if browser supports speech recognition
          if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';
            
            recognition.onstart = () => {
              isListening = true;
              voiceButton.innerHTML = '🔴';
              voiceButton.style.color = '#ef4444';
              voiceButton.style.animation = 'pulse 1s infinite';
            };
            
            recognition.onend = () => {
              isListening = false;
              voiceButton.innerHTML = '🎤';
              voiceButton.style.color = '#6b7280';
              voiceButton.style.animation = 'none';
            };
            
            recognition.onerror = () => {
              isListening = false;
              voiceButton.innerHTML = '🎤';
              voiceButton.style.color = '#6b7280';
              voiceButton.style.animation = 'none';
            };
            
            recognition.onresult = (event: any) => {
              const transcript = event.results[0][0].transcript;
              const chatInput = document.querySelector('#chatbase-bubble-window textarea') as HTMLTextAreaElement;
              if (chatInput) {
                chatInput.value = transcript;
                chatInput.dispatchEvent(new Event('input', { bubbles: true }));
                
                // Auto-focus the input
                chatInput.focus();
                
                // Trigger send automatically after a short delay
                setTimeout(() => {
                  const sendButton = document.querySelector('#chatbase-bubble-window button[type="submit"]') as HTMLButtonElement;
                  if (sendButton && transcript.trim()) {
                    sendButton.click();
                  }
                }, 300);
              }
            };
            
            voiceButton.onclick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              
              if (isListening) {
                recognition.stop();
              } else {
                try {
                  recognition.start();
                } catch (error) {
                  console.log('Speech recognition error:', error);
                }
              }
            };
          } else {
            voiceButton.onclick = () => {
              alert('Speech recognition is not supported in your browser. Please use Chrome, Safari, or Edge.');
            };
          }
          
          // Add hover effects
          voiceButton.onmouseenter = () => {
            if (!isListening) {
              voiceButton.style.background = '#f3f4f6';
            }
          };
          
          voiceButton.onmouseleave = () => {
            if (!isListening) {
              voiceButton.style.background = 'transparent';
            }
          };
          
          inputContainer.appendChild(voiceButton);
          
          // Add pulse animation styles to document
          if (!document.querySelector('#voice-pulse-style')) {
            const style = document.createElement('style');
            style.id = 'voice-pulse-style';
            style.textContent = `
              @keyframes pulse {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.1); opacity: 0.7; }
                100% { transform: scale(1); opacity: 1; }
              }
            `;
            document.head.appendChild(style);
          }
        } else {
          // Retry if chatbot not loaded yet
          setTimeout(addVoiceInputToChatbot, 500);
        }
      }, 1500);
    };

    // Initialize immediately if DOM is ready, otherwise wait for load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeChatbot);
    } else {
      initializeChatbot();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initializeChatbot);
    };
  }, []);

  return (
    <footer className="bg-card border-t border-border relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Barri Jayanth
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring Full-Stack Developer passionate about creating innovative tech solutions 
              that make a positive impact on people's lives.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Jayanth-77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jayanth-barri-9666862a5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:barrijayanth@gmail.com"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a 
                  href="mailto:barrijayanth@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  barrijayanth@gmail.com
                </a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a 
                  href="tel:+919182979375"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +91 91829 79375
                </a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-foreground">Visakhapatnam, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Barri Jayanth</span>
            <span>•</span>
            <span>© {currentYear} All rights reserved</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-hero-gradient"></div>

    </footer>
  );
};

export default Footer;