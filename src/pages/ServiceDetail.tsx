import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

// Import service videos
import aiCallingBotsVideo from "@/asset/service/AI_Calling_Bots_&_Voice_Automation.mp4";
import conversationalAIVideo from "@/asset/service/Conversational_AI_Agents.mp4";
import customAIWorkflowsVideo from "@/asset/service/Custom_AI_Workflows_&_Integrations.mp4";
import salesSupportVideo from "@/asset/service/Sales_&_Support_Automation.mp4";
import webDevVideo from "@/asset/service/Website_&_Web_app_Development.mp4";
import backendSystemsVideo from "@/asset/service/Backend_Systems_&_APIs.mp4";
import techConsultingVideo from "@/asset/service/Tech_Consulting_&_MVP_Development.mp4";

// Import demo images
import eventPlatformImage from "@/asset/image_asset/Event_Management_Platform.png";
import portfolioImage from "@/asset/image_asset/portfolio.png";
import biotechImage from "@/asset/image_asset/biotech.png";

// Types
type DemoLink = {
  url: string;
  title: string;
  image?: string;
};

type ServiceDetail = {
  name: string;
  category: string;
  video: string;
  shortDescription: string;
  description: string;
  demoLinks?: DemoLink[];
  features: string[];
  useCases: { title: string; description: string }[];
  benefits: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  "ai-calling-bots": {
    name: "AI Calling Bots & Voice Automation",
    category: "AI & Intelligent Automation",
    video: aiCallingBotsVideo,
    shortDescription: "Human-like voice agents for outbound prospecting or inbound inquiries.",
    description: "Deploy sophisticated voice systems that handle complex conversations, qualify leads, and manage customer interactions 24/7. Perfect for sales teams, appointment reminders, and customer support operations.",
    features: [
      "Natural language processing for human-like conversations",
      "24/7 availability for customer engagement",
      "Lead qualification and scoring",
      "Appointment scheduling and reminders",
      "Intelligent call routing and escalation",
      "Detailed call analytics and reporting",
      "Multi-language support",
      "Integration with CRM systems"
    ],
    useCases: [
      {
        title: "Outbound Sales Prospecting",
        description: "Automated outreach to qualified leads with natural conversation flow, handling objections and scheduling meetings."
      },
      {
        title: "Appointment Reminders",
        description: "Reduce no-shows with timely, friendly reminders that can reschedule appointments if needed."
      },
      {
        title: "Customer Support",
        description: "Handle frequently asked questions, troubleshoot common issues, and escalate complex cases to human agents."
      },
      {
        title: "Feedback Surveys",
        description: "Collect customer feedback through conversational surveys with natural dialogue."
      }
    ],
    benefits: [
      "Reduce manual outbound calling by 70-80%",
      "Improve response times from hours to minutes",
      "Scale customer interactions without proportional cost increase",
      "Consistent messaging across all customer touchpoints",
      "Detailed analytics for performance optimization"
    ]
  },
  "conversational-ai": {
    name: "Conversational AI Agents",
    category: "AI & Intelligent Automation",
    video: conversationalAIVideo,
    shortDescription: "Custom chatbots for 24/7 engagement on your website or platform.",
    description: "Build intelligent chatbots that understand context, provide accurate responses, and seamlessly hand off to humans when needed. Available on web, mobile, and messaging platforms.",
    features: [
      "Context-aware conversations",
      "Multi-platform deployment (web, mobile, messaging)",
      "Seamless handoff to human agents",
      "Knowledge base integration",
      "Learning from interactions",
      "Real-time analytics",
      "Support ticket creation",
      "Integration with business tools"
    ],
    useCases: [
      {
        title: "Website Chat Support",
        description: "Engage visitors in real-time, answer questions, and qualify leads without manual intervention."
      },
      {
        title: "Lead Qualification",
        description: "Automatically gather information from prospects and route qualified leads to your sales team."
      },
      {
        title: "Customer Onboarding",
        description: "Guide new customers through setup with interactive, personalized conversations."
      },
      {
        title: "FAQ Automation",
        description: "Reduce support tickets by 40% by answering common questions instantly."
      }
    ],
    benefits: [
      "70% reduction in support ticket volume",
      "Improve customer satisfaction with instant responses",
      "Collect valuable customer insights automatically",
      "Increase conversion rates with proactive engagement",
      "Available 24/7 without additional staff"
    ]
  },
  "sales-support-automation": {
    name: "Sales & Support Automation",
    category: "AI & Intelligent Automation",
    video: salesSupportVideo,
    shortDescription: "Systems that qualify leads and resolve tickets without manual intervention.",
    description: "Automate lead qualification, email follow-ups, ticket routing, and FAQ responses. Reduce manual workload while maintaining customer satisfaction and improving response times.",
    features: [
      "Intelligent lead scoring",
      "Automated email sequences",
      "Ticket routing and prioritization",
      "FAQ response automation",
      "Follow-up reminders",
      "Performance analytics",
      "Integration with sales tools",
      "Customizable automation workflows"
    ],
    useCases: [
      {
        title: "Lead Qualification Pipeline",
        description: "Automatically score and qualify leads based on engagement patterns and fit criteria."
      },
      {
        title: "Email Follow-up Automation",
        description: "Send timely follow-ups based on lead behavior without manual intervention."
      },
      {
        title: "Support Ticket Routing",
        description: "Automatically route tickets to the right team member based on category and priority."
      },
      {
        title: "Knowledge Base Responses",
        description: "Provide instant answers to common questions, reducing support workload."
      }
    ],
    benefits: [
      "50-60% reduction in manual support work",
      "Faster response times to customer inquiries",
      "Higher lead conversion rates",
      "Better customer satisfaction",
      "Improved team productivity and focus on high-value work"
    ]
  },
  "custom-ai-workflows": {
    name: "Custom AI Workflows & Integrations",
    category: "AI & Intelligent Automation",
    video: customAIWorkflowsVideo,
    shortDescription: "Connect CRM, Email, ERP with AI to build seamless automation.",
    description: "Create end-to-end workflows that pull data from your existing systems, apply AI intelligence, and push results back. Eliminates data silos and reduces manual data entry.",
    features: [
      "Integration with 500+ business tools",
      "No-code workflow builder",
      "Conditional logic and branching",
      "Real-time data synchronization",
      "Error handling and notifications",
      "Audit logs and compliance",
      "Scalable architecture",
      "Custom API development"
    ],
    useCases: [
      {
        title: "CRM Data Enrichment",
        description: "Automatically pull external data and enrich your CRM records with AI insights."
      },
      {
        title: "Email to Ticket Automation",
        description: "Parse incoming emails, extract information, and create support tickets automatically."
      },
      {
        title: "Lead Scoring Pipeline",
        description: "Connect multiple data sources to score and categorize leads in real-time."
      },
      {
        title: "Report Generation",
        description: "Automatically generate daily/weekly reports by pulling data from multiple systems."
      }
    ],
    benefits: [
      "Eliminate manual data entry (save 20+ hours/week)",
      "Reduce data silos across departments",
      "Improve data accuracy and consistency",
      "Enable real-time decision making",
      "Scale operations without proportional cost increase"
    ]
  },
  "web-development": {
    name: "Website & Web App Development",
    category: "Custom Software Engineering",
    video: webDevVideo,
    shortDescription: "High-performance, responsive interfaces tailored to your user's journey.",
    description: "From marketing websites to complex web applications, we build fast, SEO-friendly, and user-centric platforms. Modern stack with React, TypeScript, and cloud deployment for scalability.",
    demoLinks: [
      {
        url: "https://event-pi-beige.vercel.app/",
        title: "Event Management Platform",
        image: eventPlatformImage
      },
      {
        url: "https://astro-saurav.xyz/",
        title: "Portfolio Website",
        image: portfolioImage
      },
      {
        url: "https://bioconverge-blush.vercel.app/",
        title: "Biotech Platform",
        image: biotechImage
      }
    ],
    features: [
      "Responsive mobile-first design",
      "SEO optimization",
      "Fast loading performance",
      "Modern tech stack (React, TypeScript)",
      "Cloud deployment and scaling",
      "Security best practices",
      "Analytics integration",
      "Accessibility compliance"
    ],
    useCases: [
      {
        title: "Marketing Websites",
        description: "Convert visitors into leads with fast, conversion-optimized marketing sites."
      },
      {
        title: "SaaS Applications",
        description: "Build feature-rich applications with authentication, dashboards, and integrations."
      },
      {
        title: "E-commerce Platforms",
        description: "Create scalable e-commerce stores with payment processing and inventory management."
      },
      {
        title: "Internal Tools",
        description: "Streamline operations with custom web-based tools for your team."
      }
    ],
    benefits: [
      "Increase conversion rates by 30-40%",
      "Reduce bounce rates with fast loading",
      "Improve SEO rankings and organic traffic",
      "Scalable to handle growth",
      "Maintainable codebase for future updates"
    ]
  },
  "backend-systems": {
    name: "Backend Systems & APIs",
    category: "Custom Software Engineering",
    video: backendSystemsVideo,
    shortDescription: "Secure, fast, and scalable server-side architecture and integrations.",
    description: "Develop robust backend systems with proper authentication, database design, and API architecture. We handle server infrastructure, security, and performance optimization.",
    features: [
      "RESTful and GraphQL APIs",
      "Database design and optimization",
      "Authentication and authorization",
      "Real-time data processing",
      "Cloud infrastructure (AWS, GCP)",
      "Load balancing and scaling",
      "Security hardening",
      "API documentation"
    ],
    useCases: [
      {
        title: "API Development",
        description: "Build secure, documented APIs that power mobile apps and integrations."
      },
      {
        title: "Database Design",
        description: "Design optimized databases for performance, scalability, and data integrity."
      },
      {
        title: "Real-time Systems",
        description: "Build real-time data processing systems for live dashboards and monitoring."
      },
      {
        title: "Third-party Integrations",
        description: "Connect your systems with partners and external services securely."
      }
    ],
    benefits: [
      "99.9% uptime reliability",
      "Handle millions of requests daily",
      "Secure data protection",
      "Fast API response times",
      "Easy scaling as your business grows"
    ]
  },
  "tech-consulting": {
    name: "Tech Consulting & MVP Development",
    category: "Strategic Growth",
    video: techConsultingVideo,
    shortDescription: "From ideation to launch with the right stack and a market-ready MVP.",
    description: "Get expert guidance on technology choices, product roadmap, and go-to-market strategy. We help validate ideas with rapid prototyping and MVP development to prove market fit.",
    features: [
      "Product strategy consulting",
      "Technology stack selection",
      "Architecture design",
      "MVP development sprints",
      "Market validation support",
      "Go-to-market strategy",
      "Team mentoring",
      "Investor presentation support"
    ],
    useCases: [
      {
        title: "Startup Ideation",
        description: "Validate your business idea with rapid prototyping and user feedback."
      },
      {
        title: "Product Roadmap Planning",
        description: "Define clear milestones and priorities for product development."
      },
      {
        title: "Technology Migration",
        description: "Plan and execute migration to modern technology stacks."
      },
      {
        title: "Scaling Preparation",
        description: "Prepare your systems and processes for rapid growth."
      }
    ],
    benefits: [
      "Validate ideas before major investment (save 60% costs)",
      "Get to market 3-4x faster",
      "Avoid costly technology mistakes",
      "Expert guidance on critical decisions",
      "Higher success rates with proper planning"
    ]
  }
};

export function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <div className="section-container">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-grey-soft mb-8">The service you're looking for doesn't exist.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Video */}
      <section className="py-20 lg:py-32 bg-card/50 backdrop-blur-sm">
        <div className="section-container">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Heading and Description */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                {service.category}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {service.name}
              </h1>
              <p className="text-lg text-grey-soft leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Right: Video (if exists) */}
            {service.video ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl">
                <video
                  key={serviceId}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={service.video} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
                <p className="text-grey-soft text-center px-8">Service demonstration coming soon</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Demo Links Section */}
      {service.demoLinks && service.demoLinks.length > 0 && (
        <section className="py-24 lg:py-32 bg-card/50 backdrop-blur-sm">
          <div className="section-container">
            <h2 className="mb-16 text-center">Live Project Examples</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.demoLinks.map((demo) => (
                <a
                  key={demo.url}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-hover border border-border rounded-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {demo.image && (
                    <div className="relative aspect-video overflow-hidden bg-background/50">
                      <img
                        src={demo.image}
                        alt={demo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {demo.title}
                    </h3>
                    <div className="flex items-center gap-2 text-grey-soft group-hover:text-accent transition-colors">
                      <span className="text-sm">View Live Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="section-container">
          <h2 className="mb-16">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {service.features.map((feature) => (
              <div key={feature} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-grey-soft leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 lg:py-32 bg-card/50 backdrop-blur-sm">
        <div className="section-container">
          <h2 className="mb-16 text-center">Real-World Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 card-hover border border-border rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-grey-soft leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32">
        <div className="section-container">
          <h2 className="mb-16">Expected Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4 p-6 card-hover border border-border rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-grey-soft leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ServiceDetail;
