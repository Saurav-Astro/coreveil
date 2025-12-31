export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className="mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="0">Why Choose Us</h2>
          <p className="text-grey-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We deliver engineering-led solutions with measurable impact, proven expertise, and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div
            className="p-5 md:p-6 lg:p-8 bg-card border border-border rounded-lg card-hover group"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
              <span className="text-xl md:text-2xl font-bold text-primary">01</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground">Expert Team</h3>
            <p className="text-grey-soft leading-relaxed text-sm md:text-base">
              Our experienced professionals deliver top-quality solutions tailored to your needs with deep technical expertise.
            </p>
          </div>
          <div
            className="p-5 md:p-6 lg:p-8 bg-card border border-border rounded-lg card-hover group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
              <span className="text-xl md:text-2xl font-bold text-primary">02</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground">Proven Track Record</h3>
            <p className="text-grey-soft leading-relaxed text-sm md:text-base">
              Trusted by leading companies to transform their operations and accelerate growth with measurable results.
            </p>
          </div>
          <div
            className="p-5 md:p-6 lg:p-8 bg-card border border-border rounded-lg card-hover group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/10 transition-colors">
              <span className="text-xl md:text-2xl font-bold text-primary">03</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground">Innovation First</h3>
            <p className="text-grey-soft leading-relaxed text-sm md:text-base">
              Cutting-edge technology and creative automation solutions that solve real business challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
