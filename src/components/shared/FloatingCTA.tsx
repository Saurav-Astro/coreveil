import { useState, useEffect } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-4">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="bg-gradient-to-br from-white/10 to-white/[0.05] border border-[#D4AF37]/30 rounded-lg overflow-hidden backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 min-w-[280px]">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white font-semibold text-sm">Quick Actions</p>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X size={16} className="text-white/60" />
              </button>
            </div>

            <div className="space-y-3">
              {/* Book a Call */}
              <Link
                to="/contact"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition-colors cursor-pointer group"
              >
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm group-hover:text-[#f0d9a8]">
                    Book a Call
                  </p>
                  <p className="text-white/60 text-xs">Schedule a consultation</p>
                </div>
              </Link>

              {/* Send Message */}
              <a
                href="mailto:hello@coreveil.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer group"
              >
                <MessageSquare size={18} className="text-white/60 group-hover:text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm group-hover:text-[#f0d9a8]">
                    Send a Message
                  </p>
                  <p className="text-white/60 text-xs">hello@coreveil.com</p>
                </div>
              </a>

              {/* Services */}
              <Link
                to="/services"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer group"
              >
                <MessageSquare size={18} className="text-white/60 group-hover:text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm group-hover:text-[#f0d9a8]">
                    View Services
                  </p>
                  <p className="text-white/60 text-xs">See what we offer</p>
                </div>
              </Link>
            </div>

            <div className="text-center mt-4 pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs">💬 Coreveil Engineering</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#f0d9a8] hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center text-[#0B0D10] font-bold text-xl transform hover:scale-110 ${
          isExpanded ? "rotate-45" : "rotate-0"
        }`}
      >
        {isExpanded ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Pulse Animation */}
      {!isExpanded && (
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-[#D4AF37]/20 animate-pulse" />
      )}
    </div>
  );
};
