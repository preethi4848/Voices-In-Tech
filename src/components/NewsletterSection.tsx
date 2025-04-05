
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "react-intersection-observer";
import { Check, Loader2 } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You're now subscribed to WeCoded updates.",
      });
      setEmail("");
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success state after a moment
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-wecoded-blue/5 to-wecoded-purple/5">
      <div className="container px-4 md:px-6">
        <div 
          className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100"
          ref={ref}
          style={{ 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div 
            className="inline-flex p-2 rounded-full bg-wecoded-green/20 text-wecoded-blue mb-6"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.1s'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="13" x="4" y="5" rx="2" />
              <path d="m4 8 6.45 4.3a2 2 0 0 0 3.1 0L20 8" />
            </svg>
          </div>
          
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            Stay Connected
          </h2>
          <p 
            className="text-muted-foreground mb-8 max-w-lg mx-auto"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.3s'
            }}
          >
            Subscribe to receive updates about WeCoded events, stories, and resources from our community
          </p>
          
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-slate-200 focus-visible:ring-wecoded-blue"
              disabled={isSubmitting || isSuccess}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`${
                isSuccess 
                  ? "bg-green-500 hover:bg-green-500" 
                  : "bg-wecoded-blue hover:bg-wecoded-blue/90"
              } transition-all duration-300 min-w-[140px]`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> 
                  Processing...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" /> 
                  Subscribed
                </span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
          
          <p 
            className="text-xs text-muted-foreground mt-4"
            style={{ 
              opacity: inView ? 1 : 0,
              transition: 'all 0.8s ease-out 0.5s'
            }}
          >
            By subscribing, you agree to receive WeCoded related emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
