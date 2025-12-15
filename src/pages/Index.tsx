import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PerformanceSection from "@/components/PerformanceSection";
import QualitySection from "@/components/QualitySection";
import TechDemoSection from "@/components/TechDemoSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PerformanceSection />
        <QualitySection />
        <TechDemoSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
