import { Building2, Users, TrendingUp, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Early-Stage Startups",
    description: "Bringing your MVP to life with scalable architecture.",
  },
  {
    icon: TrendingUp,
    title: "Sales-Driven Businesses",
    description: "Automating outreach and lead management.",
  },
  {
    icon: Briefcase,
    title: "Service Companies",
    description: "Streamlining client workflows and internal operations.",
  },
  {
    icon: Users,
    title: "Operations Teams",
    description: "Reducing manual overhead through custom automation.",
  },
];

export function WhoWeServeSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className="mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="0">Who We Serve</h2>
          <p className="text-grey-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We work with leaders who understand that intelligent automation is a competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="p-5 md:p-6 lg:p-8 bg-card border border-border rounded-lg card-hover group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 md:w-7 h-6 md:h-7 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-grey-soft leading-relaxed text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
