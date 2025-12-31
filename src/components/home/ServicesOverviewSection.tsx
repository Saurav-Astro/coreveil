import { Cpu, Code, Workflow } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Automation",
    description: "From voice bots to conversational agents.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Web applications and robust backend systems.",
  },
  {
    icon: Workflow,
    title: "Tech Strategy",
    description: "Consulting and MVP development for rapid scaling.",
  },
];

export function ServicesOverviewSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className="mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="0">
            At a Glance: What We Do
          </h2>
          <p className="text-grey-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Three core capabilities, one unified goal: operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative p-5 md:p-6 lg:p-8 bg-background border border-border rounded-lg group card-hover"
              data-aos="fade-up"
              data-aos-delay={`${index * 100 + 200}`}
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-primary transform -translate-y-0.5 rounded-full" />
              
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 md:w-7 h-6 md:h-7 text-primary" />
              </div>
              
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4">{service.title}</h3>
              <p className="text-grey-soft leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
