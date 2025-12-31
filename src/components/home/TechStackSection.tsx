export function TechStackSection() {
  const technologies = [
    "React", "Node.js", "Python", "TypeScript", "PostgreSQL",
    "AWS", "Docker", "OpenAI", "TailwindCSS", "MongoDB"
  ];

  return (
    <section className="section-padding bg-card/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-grey-stone text-sm font-medium mb-4 tracking-wider uppercase">
            Built with Modern Technology
          </p>
          <h3 className="text-2xl font-bold mb-2">Our Tech Stack</h3>
          <p className="text-grey-soft">
            Industry-leading tools and frameworks for scalable solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 bg-background border border-border rounded-lg text-grey-soft hover:text-foreground hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <span className="font-medium text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
