import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoVideo from "@/asset/logo.mp4";
import logoImage from "@/asset/coreveil.png";
// import { Scene3D } from "@/components/shared/Scene3D";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden -mt-16 md:-mt-28 pt-16 md:pt-28">
      {/* Background Video - Extended to cover header area */}
      <div className="absolute inset-0 -top-16 md:-top-28 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[calc(100%+4rem)] md:h-[calc(100%+7rem)] object-cover opacity-35"
        >
          <source src={logoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        
        {/* 3D Model Layer - Temporarily disabled due to compatibility issue */}
        {/* <Scene3D /> */}
        
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in [animation-delay:100ms] opacity-0"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Scaling Businesses Through{" "}
            <span className="text-gradient-cyan">Intelligent Technology & Automation.</span>
          </h1>
          
          <p 
            className="text-sm xs:text-base sm:text-lg md:text-xl text-grey-soft leading-relaxed mb-6 md:mb-10 max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We design and deploy practical, ROI-driven software and AI solutions that eliminate manual work, reduce costs, and accelerate growth. No hype—just systems that work.
          </p>

          <div 
            className="flex flex-row gap-3 md:gap-4 animate-fade-in [animation-delay:300ms] opacity-0 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button variant="hero" size="default" className="h-10 md:h-11 text-sm md:text-base px-4 md:px-6" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="default" className="h-10 md:h-11 text-sm md:text-base px-4 md:px-6" asChild>
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
