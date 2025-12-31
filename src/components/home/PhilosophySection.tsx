export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="divider-line mb-12 md:mb-16 lg:mb-20" />
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start">
          <div data-aos="fade-up" data-aos-delay="0">
            <h2 className="mb-6 md:mb-8">
              Engineering Efficiency,{" "}
              <span className="text-primary">Not Just Software.</span>
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-grey-soft text-base md:text-lg leading-relaxed">
              Many tech companies sell buzzwords. At Coreveil, we sell performance. We bridge the gap between complex technology and real-world business operations, providing foundational infrastructure and advanced AI automation that deliver measurable results.
            </p>
          </div>
        </div>

        <div className="divider-line mt-12 md:mt-16 lg:mt-20" />
      </div>
    </section>
  );
}
