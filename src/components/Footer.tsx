
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WeCoded</h3>
            <p className="text-sm text-muted-foreground">
              Celebrating diversity and inclusion in the tech community through storytelling and shared experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://dev.to/wecoded" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-wecoded-blue transition-colors"
                >
                  DEV Community
                </a>
              </li>
              <li>
                <a 
                  href="https://dev.to/t/wecoded" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-wecoded-blue transition-colors"
                >
                  WeCoded Tag
                </a>
              </li>
              <li>
                <a 
                  href="https://dev.to/t/shecoded" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-wecoded-blue transition-colors"
                >
                  SheCoded Tag
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://dev.to/code-of-conduct" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-wecoded-blue transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a 
                  href="https://dev.to/submit-story" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-wecoded-blue transition-colors"
                >
                  Submit Your Story
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WeCoded. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for the DEV community by Preethi G
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
