import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { ServicesOverviewSection } from "@/components/home/ServicesOverviewSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PhilosophySection />
      <WhoWeServeSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <HowWeWorkSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
