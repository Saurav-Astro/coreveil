import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "150%",
    label: "Average ROI Increase",
    description: "Within 6 months",
  },
  {
    icon: Clock,
    value: "500+",
    label: "Hours Saved Monthly",
    description: "Across client operations",
  },
  {
    icon: DollarSign,
    value: "$2M+",
    label: "Cost Savings Generated",
    description: "For our clients",
  },
  {
    icon: Users,
    value: "50+",
    label: "Businesses Automated",
    description: "And growing",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="relative py-12 md:py-16 px-6 md:px-8 bg-gradient-to-br from-card via-card to-card/50 border border-border rounded-lg overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-grey-soft max-w-2xl mx-auto text-base md:text-lg">
                We measure success by the tangible impact we deliver to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 md:w-14 h-12 md:h-14 rounded-lg bg-secondary mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors">
                    <stat.icon className="w-6 md:w-7 h-6 md:h-7 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="font-heading font-semibold text-foreground mb-1 text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div className="text-xs md:text-sm text-grey-stone">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
