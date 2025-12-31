import { ReactNode } from "react";
import { Navigation, MobileNavigation } from "./Navigation";
import { Footer } from "./Footer";
import { Chatbot } from "@/components/shared/Chatbot";
import logoVideo from "@/asset/logo.mp4";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Global Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src={logoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40" />
      </div>
      
      <a href="#main-content" className="skip-to-main">Skip to main content</a>
      <Navigation />
      <MobileNavigation />
      <main className="flex-1 md:pt-28 pt-16" id="main-content">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
