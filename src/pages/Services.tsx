import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Code, TrendingUp } from "lucide-react";
import bgVideo from "@/asset/bgvideo.mp4";

// Import What We Build videos
import websiteVideo from "@/asset/service/What_We_Build_asset/Website.mp4";
import webAppVideo from "@/asset/service/What_We_Build_asset/Web_App.mp4";
import mlChatbotVideo from "@/asset/service/What_We_Build_asset/ML_Model_Training_&_Chatbot.mp4";
import erpSystemVideo from "@/asset/service/What_We_Build_asset/ERP_System.mp4";
import callingBotVideo from "@/asset/service/What_We_Build_asset/Calling_Bot.mp4";

const serviceCategories = [
  {
    title: "AI & Intelligent Automation",
    description: "Advanced automation solutions that transform how you interact with customers and manage operations.",
    icon: Cpu,
    services: [
      {
        name: "AI Calling Bots & Voice Automation",
        description: "Human-like voice agents for outbound prospecting or inbound inquiries.",
        slug: "ai-calling-bots"
      },
      {
        name: "Conversational AI Agents",
        description: "Custom chatbots for 24/7 engagement on your website or platform.",
        slug: "conversational-ai"
      },
      {
        name: "Sales & Support Automation",
        description: "Systems that qualify leads and resolve tickets without manual intervention.",
        slug: "sales-support-automation"
      },
      {
        name: "Custom AI Workflows & Integrations",
        description: "Connect CRM, Email, ERP with AI to build seamless automation.",
        slug: "custom-ai-workflows"
      },
    ],
  },
  {
    title: "Custom Software Engineering",
    description: "Robust, scalable applications designed to power your business operations.",
    icon: Code,
    services: [
      {
        name: "Website & Web App Development",
        description: "High-performance, responsive interfaces tailored to your user's journey.",
        slug: "web-development"
      },
      {
        name: "Backend Systems & APIs",
        description: "Secure, fast, and scalable server-side architecture and integrations.",
        slug: "backend-systems"
      },
    ],
  },
  {
    title: "Strategic Growth",
    description: "Comprehensive technology strategy and execution to accelerate your business.",
    icon: TrendingUp,
    services: [
      {
        name: "Tech Consulting & MVP Development",
        description: "From ideation to launch with the right stack and a market-ready MVP.",
        slug: "tech-consulting"
      },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-24">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/80" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h1 
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Practical AI and Engineering Solutions.
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-grey-soft leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Tailored tech infrastructure designed to scale with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="section-container space-y-16 md:space-y-24">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h2 className="mb-8 md:mb-12 text-center px-4" data-aos="fade-up" data-aos-delay="0">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {category.services.map((service, index) => (
                  <Link
                    key={service.name}
                    to={`/services/${service.slug}`}
                    className="p-5 md:p-6 lg:p-8 bg-background border border-border rounded-lg transition-all duration-300 card-hover hover:ring-2 hover:ring-primary block group h-full"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100 + 100}`}
                  >
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-grey-soft leading-relaxed text-sm md:text-base mb-4">
                      {service.description}
                    </p>
                    <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
                      <p className="text-xs md:text-sm text-primary font-medium">Click to see details →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="0">What We Build</h2>
            <p className="text-grey-soft text-base md:text-lg leading-relaxed px-2 md:px-0" data-aos="fade-up" data-aos-delay="100">
              Solutions tailored to your business needs, from simple websites to complex AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="relative bg-background border border-border rounded-lg group hover:ring-2 hover:ring-primary transition-all duration-300 flex flex-col overflow-hidden" data-aos="fade-up" data-aos-delay="0">
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary rounded-full z-10" />
              
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={websiteVideo} type="video/mp4" />
                </video>
              </div>
              
              <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Website</h3>
                <p className="text-grey-soft leading-relaxed mb-4 md:mb-8 text-sm md:text-base flex-grow">
                  Responsive, fast, and SEO-friendly marketing and content sites that convert visitors into customers.
                </p>
              
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full h-10 md:h-11 text-sm md:text-base"
                  asChild
                >
                  <Link to="/get-started?service=Website">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative bg-background border border-border rounded-lg group hover:ring-2 hover:ring-primary transition-all duration-300 flex flex-col overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary rounded-full z-10" />
              
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={webAppVideo} type="video/mp4" />
                </video>
              </div>
              
              <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Web App</h3>
                <p className="text-grey-soft leading-relaxed mb-4 md:mb-8 text-sm md:text-base flex-grow">
                  Production-ready SPAs and dashboards with robust backends built for scale and reliability.
                </p>
              
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full h-10 md:h-11 text-sm md:text-base"
                  asChild
                >
                  <Link to="/get-started?service=Web%20App">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative bg-background border border-border rounded-lg group hover:ring-2 hover:ring-primary transition-all duration-300 flex flex-col overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary rounded-full z-10" />
              
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={mlChatbotVideo} type="video/mp4" />
                </video>
              </div>
              
              <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">ML Model Training & Chatbot</h3>
                <p className="text-grey-soft leading-relaxed mb-4 md:mb-8 text-sm md:text-base flex-grow">
                  Fine-tuned models and conversational agents that understand context and drive real value.
                </p>
              
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <Link to="/get-started?service=AI%20Automation">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative bg-background border border-border rounded-lg group hover:ring-2 hover:ring-primary transition-all duration-300 flex flex-col overflow-hidden" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary rounded-full z-10" />
              
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={erpSystemVideo} type="video/mp4" />
                </video>
              </div>
              
              <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">ERP System</h3>
                <p className="text-grey-soft leading-relaxed mb-4 md:mb-8 text-sm md:text-base flex-grow">
                  Custom ERP modules to streamline operations, reduce manual work, and improve visibility across your business.
                </p>
              
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full h-10 md:h-11 text-sm md:text-base"
                  asChild
                >
                  <Link to="/get-started?service=ERP%20System">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative bg-background border border-border rounded-lg group hover:ring-2 hover:ring-primary transition-all duration-300 flex flex-col overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary rounded-full z-10" />
              
              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={callingBotVideo} type="video/mp4" />
                </video>
              </div>
              
              <div className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">Calling Bot</h3>
                <p className="text-grey-soft leading-relaxed mb-4 md:mb-8 text-sm md:text-base flex-grow">
                  Voice-enabled automation for outbound prospecting, appointment reminders, and intelligent customer support.
                </p>
              
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full h-10 md:h-11 text-sm md:text-base"
                  asChild
                >
                  <Link to="/get-started?service=Calling%20Bot">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="divider-line mb-12 md:mb-16" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-12 md:mb-16 px-4">
              "Why choose our services? Our systems are built for one purpose: to{" "}
              <span className="text-primary">reduce manual workload</span> and{" "}
              <span className="text-primary">maximize your team's efficiency</span>."
            </h2>
            <div className="divider-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="mb-4 md:mb-6">Not sure where to start?</h2>
            <p className="text-grey-soft text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Book a consultation call. We'll analyze your current operations and identify 
              the highest-impact automation opportunities.
            </p>
            <Button variant="hero" size="lg" className="h-11 md:h-12 text-sm md:text-base" asChild>
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
