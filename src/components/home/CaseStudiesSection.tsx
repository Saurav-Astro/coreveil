import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Process Automation",
      client: "Fortune 500 Financial Services",
      challenge: "Manual data processing across 50+ departments caused delays and errors affecting client relationships.",
      solution: "Built end-to-end AI automation pipeline with intelligent document processing and smart routing.",
      results: [
        { metric: "Processing Time", value: "60%", improvement: "Reduced from 5 days to 2 days" },
        { metric: "Error Rate", value: "95%", improvement: "Decreased from 8% to <0.1%" },
        { metric: "Cost Savings", value: "$2.4M", improvement: "Annual operational savings" },
      ],
      timeframe: "6 months",
      industry: "Financial Services",
    },
    {
      id: 2,
      title: "Custom CRM Integration",
      client: "Mid-Market SaaS Company",
      challenge: "Fragmented customer data across 12 systems. Sales team spent 15+ hours/week on data entry.",
      solution: "Engineered unified customer platform with real-time data synchronization and predictive analytics.",
      results: [
        { metric: "Time Saved", value: "20 hrs", improvement: "Per week in manual data entry" },
        { metric: "Deal Velocity", value: "35%", improvement: "Faster sales cycle" },
        { metric: "ROI Timeline", value: "3 months", improvement: "Achieved full ROI" },
      ],
      timeframe: "4 months",
      industry: "SaaS",
    },
    {
      id: 3,
      title: "AI-Powered Customer Intelligence",
      client: "E-Commerce Enterprise",
      challenge: "Lack of predictive insights led to high churn rate and missed upsell opportunities.",
      solution: "Developed ML models for customer behavior prediction with real-time recommendation engine.",
      results: [
        { metric: "Churn Rate", value: "40%", improvement: "Reduction in customer attrition" },
        { metric: "Avg Order Value", value: "+28%", improvement: "Through smart recommendations" },
        { metric: "Revenue Impact", value: "$5.2M", improvement: "Additional annual revenue" },
      ],
      timeframe: "5 months",
      industry: "E-Commerce",
    },
    {
      id: 4,
      title: "Scalable Microservices Architecture",
      client: "High-Growth Fintech Startup",
      challenge: "Monolithic system couldn't scale with 200% YoY growth. System reliability issues during peak load.",
      solution: "Re-architected entire platform into resilient microservices with auto-scaling and real-time monitoring.",
      results: [
        { metric: "System Uptime", value: "99.99%", improvement: "From 97.2% reliability" },
        { metric: "Throughput", value: "10x", improvement: "Increased capacity handling" },
        { metric: "Deployment Speed", value: "15 min", improvement: "Reduced from 2 hours" },
      ],
      timeframe: "7 months",
      industry: "Fintech",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0B0D10]/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className="text-center mb-12 md:mb-16 px-4"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <p className="text-xs md:text-sm font-semibold text-[#D4AF37] uppercase tracking-widest mb-3 md:mb-4">
            Real Results
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">Case Studies</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f0d9a8] bg-clip-text text-transparent">
              That Prove ROI
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto">
            See how we've delivered measurable impact for clients across industries
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${(index % 2) * 100 + 100}`}
            >
              {/* Top Accent */}
              <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#f0d9a8] to-transparent" />

              <div className="p-5 md:p-8 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white flex-1">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-[#D4AF37] text-xs md:text-sm font-medium mb-2">{study.client}</p>
                  <p className="text-white/60 text-xs md:text-sm">{study.industry} • {study.timeframe}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6 md:mb-8 space-y-4 md:space-y-6">
                  <div>
                    <p className="text-white/80 text-xs md:text-sm font-semibold mb-2">Challenge:</p>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-white/80 text-xs md:text-sm font-semibold mb-2">Solution:</p>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                  <p className="text-white/80 text-xs md:text-sm font-semibold mb-3 md:mb-4">Key Results:</p>
                  <div className="space-y-3 md:space-y-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <TrendingUp size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[#D4AF37] font-bold text-xs md:text-sm">
                            {result.value}
                          </p>
                          <p className="text-white/70 text-xs">{result.improvement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-[#D4AF37] hover:bg-[#f0d9a8] text-[#0B0D10] font-semibold h-10 md:h-12 text-sm md:text-base transition-all duration-300 group/btn"
                  variant="default"
                >
                  <span className="flex items-center justify-center gap-2 w-full">
                    Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center pt-6 md:pt-8 border-t border-white/10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">Ready to become a success story?</p>
          <Button
            className="bg-gradient-to-r from-[#D4AF37] to-[#f0d9a8] hover:from-[#f0d9a8] hover:to-[#D4AF37] text-[#0B0D10] font-semibold px-6 md:px-8 h-10 md:h-12 text-sm md:text-base transition-all duration-300"
            variant="default"
          >
            Start Your Project <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};
