export function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Alignment",
      description: "We analyze your business processes, bottlenecks, and goals to ensure technology directly supports measurable outcomes.",
    },
    {
      number: "02",
      title: "System Design",
      description: "We architect scalable, secure systems and automation workflows tailored to your operational needs.",
    },
    {
      number: "03",
      title: "Build & Deploy",
      description: "We develop, test, and deploy production-ready solutions with minimal disruption to your business.",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description: "We refine performance, reduce inefficiencies, and prepare your systems to scale as your business grows.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className="mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="0">How We Work</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            A structured, execution-first approach focused on measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="p-5 md:p-6 lg:p-8 border border-border rounded-lg hover-lift card-hover"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="mb-4 md:mb-6">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-grey-soft leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
