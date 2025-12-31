import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import coreveilLogo from "@/asset/coreveil.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-[250ms] ease-out overflow-hidden",
        "bg-background/50 backdrop-blur-md border border-white/[0.06]",
        // Desktop floating behavior
        "hidden md:block md:max-w-[calc(100%-48px)] md:w-[calc(100%-48px)]",
        isScrolled 
          ? "md:top-3 md:h-14 md:rounded-xl md:shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
          : "md:top-6 md:h-[72px] md:rounded-[14px]"
      )}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className={cn(
        "flex items-center justify-between h-full transition-all duration-[250ms] ease-out",
        isScrolled ? "px-4" : "px-6"
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Coreveil home">
          <img 
            src={coreveilLogo} 
            alt="Coreveil Logo" 
            className={cn(
              "w-auto object-contain rounded transition-all duration-[250ms] ease-out",
              isScrolled ? "h-20" : "h-24"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-all duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-[#D4AF37] rounded px-2 py-1",
                isScrolled ? "text-sm" : "text-[15px]",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-grey-soft hover:text-foreground"
              )}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Mobile Navigation (Separate, Full-Width)
export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease-out",
        "bg-background/50 backdrop-blur-md border-b border-white/[0.06]",
        isScrolled ? "h-[52px]" : "h-16"
      )}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Coreveil home">
          <img 
            src={coreveilLogo} 
            alt="Coreveil Logo" 
            className={cn(
              "w-auto object-contain rounded transition-all duration-[250ms] ease-out",
              isScrolled ? "h-10" : "h-12"
            )}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-[#D4AF37] rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="py-6 border-t border-white/[0.06] bg-background/50 backdrop-blur-md animate-fade-in" id="mobile-menu" role="region" aria-label="Mobile navigation">
          <div className="px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#D4AF37] rounded px-2",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-grey-soft hover:text-foreground"
                )}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
