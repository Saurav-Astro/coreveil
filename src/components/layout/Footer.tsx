import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import coreveilLogo from "@/asset/coreveil.png";

const footerLinks = {
  product: [
    { name: "AI Calling Bots & Voice Automation", path: "/services/ai-calling-bots" },
    { name: "Conversational AI Agents", path: "/services/conversational-ai" },
    { name: "Sales & Support Automation", path: "/services/sales-support-automation" },
    { name: "Custom AI Workflows & Integrations", path: "/services/custom-ai-workflows" },
    { name: "Website & Web App Development", path: "/services/web-development" },
    { name: "Backend Systems & APIs", path: "/services/backend-systems" },
    { name: "Tech Consulting & MVP Development", path: "/services/tech-consulting" },
  ],
  company: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0B0D10] to-[#05050a] border-t border-white/10">
      <div className="section-container py-20 md:py-24">
        {/* Accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-12 opacity-70" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={coreveilLogo}
                alt="Coreveil Logo"
                className="h-24 w-auto object-contain rounded"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Engineering-led automation and software builds with clear communication, secure delivery, and reliable outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#D4AF37] text-[#0B0D10] text-sm font-semibold hover:bg-[#f0d9a8] transition-colors"
            >
              Book a discovery call
            </Link>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="card-hover border border-border rounded-lg p-6">
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-4">
              Get in touch
            </h4>
            <p className="text-white/70 text-sm mb-6">
              Tell us about your system, and we’ll respond within one business day.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@coreveil.com"
                className="flex items-center gap-3 text-[#D4AF37] hover:text-[#f0d9a8] transition-colors text-sm font-medium"
              >
                <Mail size={16} />
                hello@coreveil.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
            <p className="text-white/60 text-xs">
              © {currentYear} Coreveil Engineering. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 md:justify-end">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/60 text-xs hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
