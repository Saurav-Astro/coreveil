import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Coreveil transformed our operations with a custom AI solution that reduced processing time by 60%. Their technical expertise and business acumen are unmatched.",
    author: "Sarah Chen",
    role: "VP Operations",
    company: "TechFlow Inc",
    rating: 5,
  },
  {
    quote: "We partnered with Coreveil for a complete system overhaul. The result was a 3x improvement in team productivity and significant cost savings. Exceptional work.",
    author: "James Mitchell",
    role: "CTO",
    company: "Innovation Labs",
    rating: 5,
  },
  {
    quote: "What impressed us most was their ability to understand our business challenges and engineer solutions that actually work. Not just technically brilliant, but pragmatic.",
    author: "Amanda Rodriguez",
    role: "Founder & CEO",
    company: "Growth Partners",
    rating: 5,
  },
];

const clients = [
  { id: 1, name: "TechFlow Inc", logo: "TF" },
  { id: 2, name: "Innovation Labs", logo: "IL" },
  { id: 3, name: "Growth Partners", logo: "GP" },
  { id: 4, name: "Enterprise Systems", logo: "ES" },
  { id: 5, name: "Digital Solutions", logo: "DS" },
  { id: 6, name: "Future Tech", logo: "FT" },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0B0D10]/50 via-[#1a1d28]/50 to-[#0B0D10]/50 backdrop-blur-sm relative">
      <div className="section-container">
        {/* Client Logos Section */}
        <div
          className="mb-12 md:mb-16 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <p className="text-center text-xs md:text-sm font-semibold text-[#D4AF37] uppercase tracking-widest mb-6 md:mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 lg:gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center h-14 md:h-16 lg:h-20 bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-sm md:text-base lg:text-lg font-bold text-white/60">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent my-10 md:my-12 lg:my-16" />

        {/* Testimonials Section */}
        <div
          className="text-center mb-10 md:mb-12 px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">What Our Clients</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f0d9a8] bg-clip-text text-transparent">
              Have to Say
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto">
            Real results from real partners who have transformed their business with our engineering solutions
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 p-5 md:p-6 lg:p-8 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-4 md:pt-6">
                <p className="font-semibold text-white text-sm md:text-base">{testimonial.author}</p>
                <p className="text-xs md:text-sm text-[#D4AF37]">{testimonial.role}</p>
                <p className="text-xs md:text-sm text-white/60">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "40%", label: "Avg ROI Increase" },
            { number: "24/7", label: "Technical Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={`${(index + 5) * 100}`}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#f0d9a8] bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </p>
              <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
