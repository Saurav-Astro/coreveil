import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Wrench, CheckCircle, Github, Linkedin } from "lucide-react";
import { BackToTop } from "@/components/shared/BackToTop";
import { Card } from "@/components/ui/card";
import bgVideo from "@/asset/bgvideo.mp4";

const pillars = [
  {
    icon: Target,
    title: "Foundational Strength",
    description: "We ensure your digital infrastructure is secure and scalable.",
  },
  {
    icon: Wrench,
    title: "Practical AI",
    description: "We only deploy AI where it adds tangible value—saving time, reducing errors, or increasing revenue.",
  },
  {
    icon: CheckCircle,
    title: "ROI-First Mindset",
    description: "Every line of code we write and every bot we deploy is aimed at improving your bottom line.",
  },
];

const team = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Founder & Lead Architect",
    expertise: "Full-Stack Engineering | AI/ML Systems | Enterprise Architecture",
    bio: "15+ years building systems at scale. Specializes in translating complex requirements into elegant, efficient solutions.",
    credentials: "MS Computer Science, Stanford | AWS Solutions Architect",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Senior AI Engineer",
    expertise: "Machine Learning | Data Engineering | Process Automation",
    bio: "Former ML team lead at Fortune 500 tech company. Expert in building production-grade AI systems that drive real business value.",
    credentials: "PhD Machine Learning, MIT | 8 years in AI/ML",
  },
  {
    id: 3,
    name: "James Morrison",
    role: "Solutions Architect",
    expertise: "System Design | Cloud Infrastructure | DevOps",
    bio: "Hands-on architect who translates business challenges into technical roadmaps. Passionate about scalability and reliability.",
    credentials: "BS Computer Engineering, CMU | Kubernetes Certified",
  },
  {
    id: 4,
    name: "Sofia Reyes",
    role: "Full-Stack Engineer",
    expertise: "React/TypeScript | Backend Systems | Database Design",
    bio: "Full-stack specialist who builds beautiful, performant applications. Strong focus on user experience and code quality.",
    credentials: "BS Software Engineering | 6 years startup experience",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Identity Section with Background Video */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

        <div className="section-container relative z-10 py-24">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide">ABOUT US</p>
            <h1 className="mb-8">
              We Build the Engines of Modern Business.
            </h1>
            <div className="space-y-6 text-grey-soft leading-relaxed">
              <p className="text-lg">
                Coreveil was founded on a simple principle: Technology should be a multiplier, not a headache. In an era of AI hype, we focus on the practical. We are a team of engineers and strategists dedicated to helping startups and growing businesses navigate the digital landscape with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="section-container">
          <div className="mb-20">
            <h2 className="mb-6">Our Approach</h2>
            <p className="text-grey-soft text-lg max-w-2xl leading-relaxed">
              Three principles guide every engagement. They're non-negotiable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 border border-border rounded-lg hover-lift card-hover"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{pillar.title}</h3>
                <p className="text-grey-soft leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Hype Promise */}
      <section className="py-24 lg:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="divider-line mb-16" />
            
            <h2 className="mb-12 text-center">
              The "No Hype" Promise
            </h2>
            
            <div className="space-y-6 text-grey-soft leading-relaxed">
              <p className="text-lg">
                We don't use technology for the sake of it. We listen to your business challenges and build the leanest, most effective solutions to solve them. Whether you are looking to automate a sales team or build a global platform, Coreveil is your technical partner in execution.
              </p>
            </div>

            <div className="divider-line mt-16" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">Let's Talk</h2>
            <p className="text-grey-soft text-lg mb-10 leading-relaxed">
              If you're looking for a partner who values execution over promises, 
              we should have a conversation.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
