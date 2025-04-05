
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import WeCodedLogo from "./WeCodedLogo";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [typedText, setTypedText] = useState("");
  const fullText = "Celebrating Diversity in Tech";
  
  useEffect(() => {
    if (inView) {
      let i = 0;
      const typing = setInterval(() => {
        if (i <= fullText.length) {
          setTypedText(fullText.substring(0, i));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
      
      return () => clearInterval(typing);
    }
  }, [inView]);

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className="space-y-6">
            <div 
              className="inline-block px-4 py-1.5 rounded-full border border-wecoded-green bg-wecoded-green/10 text-sm font-medium"
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out' 
              }}
            >
              Annual Celebration
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span 
                className="text-wecoded-purple block" 
                style={{ 
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.7s ease-out 0.2s' 
                }}
              >
                We<span className="text-wecoded-blue">Coded</span>
              </span>
              <span 
                className="mt-2 inline-block border-r-4 border-wecoded-purple pr-1"
                style={{ 
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 0.4s' 
                }}
              >
                {typedText}
              </span>
            </h1>
            
            <p 
              className="text-lg text-muted-foreground max-w-xl"
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s ease-out 0.6s' 
              }}
            >
              Join us in celebrating the stories and accomplishments of underrepresented voices in the tech community. WeCoded is an annual celebration highlighting journeys, challenges, and triumphs.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 0.8s' 
              }}
            >
              <Button size="lg" className="bg-wecoded-blue hover:bg-wecoded-blue/90 group transition-all duration-300">
                <a href="#stories" className="flex items-center gap-2">
                  Browse Stories
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group transition-all duration-300">
                <a href="https://dev.to/wecoded" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit DEV Community
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center lg:justify-end h-full">
            <div className="relative">
              <div 
                className="absolute -left-10 -top-10 w-40 h-40 bg-wecoded-green/30 rounded-full filter blur-3xl"
                style={{ 
                  animation: inView ? 'float 6s ease-in-out infinite' : 'none',
                  opacity: inView ? 1 : 0,
                  transition: 'opacity 1s ease-out'
                }}
              ></div>
              <div 
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-wecoded-purple/30 rounded-full filter blur-3xl"
                style={{ 
                  animation: inView ? 'float 6s ease-in-out 1.5s infinite' : 'none',
                  opacity: inView ? 1 : 0,
                  transition: 'opacity 1s ease-out 0.3s'
                }}
              ></div>
              
              <div className="relative z-10 flex items-center justify-center p-8">
                <div 
                  className="relative"
                  style={{ 
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                    transition: 'all 1.2s ease-out 0.2s' 
                  }}
                >
                  <WeCodedLogo className="w-64 h-64 md:w-80 md:h-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-wecoded-gradient">
                      #WeCoded
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
