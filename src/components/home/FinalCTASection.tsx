import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="relative py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-16 bg-card border border-border rounded-lg overflow-hidden">
          {/* Accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent" />
          
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary/10 blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="mb-4 md:mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-grey-soft text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Let's discuss how intelligent automation can reduce costs, eliminate manual work, and accelerate your growth.
            </p>
            <Button variant="hero" size="lg" className="h-11 md:h-12 text-sm md:text-base" asChild>
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
