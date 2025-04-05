
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";

const ResourcesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resources = [
    {
      title: "Submit Your WeCoded Story",
      description: "Share your journey and experiences as part of the underrepresented tech community.",
      link: "https://dev.to/new/wecoded",
      icon: "✏️",
    },
    {
      title: "International Women's Day",
      description: "Learn more about this global day celebrating the social, economic, cultural and political achievements of women.",
      link: "https://www.internationalwomensday.com/",
      icon: "🌍",
    },
    {
      title: "Tech Diversity Resources",
      description: "Resources for promoting diversity and inclusion in tech workplaces and communities.",
      link: "https://dev.to/t/diversity",
      icon: "🔍",
    },
    {
      title: "DEV Community",
      description: "Join the DEV Community to connect with other developers and share your experiences.",
      link: "https://dev.to/",
      icon: "🚀",
    },
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-wecoded-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-wecoded-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12" ref={ref}>
          <h2 
            className="text-3xl font-bold mb-4 relative inline-block"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease-out'
            }}
          >
            Resources
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-wecoded-blue/30 rounded-full"></span>
          </h2>
          <p 
            className="text-muted-foreground"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease-out 0.1s'
            }}
          >
            Helpful links to get involved and learn more
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, i) => (
            <div 
              key={i} 
              ref={ref}
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease-out ${0.2 + i * 0.1}s`
              }}
            >
              <Card className="h-full border-slate-200 overflow-hidden group hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{resource.icon}</span>
                    <CardTitle>{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full group hover:bg-wecoded-blue/5" asChild>
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Resource
                      <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
