
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import WeCodedLogo from "./WeCodedLogo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <WeCodedLogo className="w-8 h-8" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-wecoded-gradient">WeCoded</span>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#about" 
            className="text-sm font-medium relative group transition-colors hover:text-wecoded-blue"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-wecoded-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a 
            href="#stories" 
            className="text-sm font-medium relative group transition-colors hover:text-wecoded-blue"
          >
            Stories
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-wecoded-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a 
            href="#resources" 
            className="text-sm font-medium relative group transition-colors hover:text-wecoded-blue"
          >
            Resources
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-wecoded-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="https://dev.to/wecoded" target="_blank" rel="noopener noreferrer">
            <Button className="bg-wecoded-blue hover:bg-wecoded-blue/90 group">
              <span className="flex items-center gap-2">
                Visit DEV
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
              </span>
            </Button>
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b md:hidden animate-fade-in shadow-md">
            <nav className="container flex flex-col py-4 gap-2">
              <a
                href="#about"
                className="px-4 py-3 text-sm font-medium hover:bg-slate-50 rounded-md flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                About
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                href="#stories"
                className="px-4 py-3 text-sm font-medium hover:bg-slate-50 rounded-md flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                Stories
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                href="#resources"
                className="px-4 py-3 text-sm font-medium hover:bg-slate-50 rounded-md flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <div className="pt-2 mt-2 border-t">
                <a 
                  href="https://dev.to/wecoded" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium bg-wecoded-blue text-white rounded-md flex items-center justify-center gap-2"
                >
                  Visit DEV
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
