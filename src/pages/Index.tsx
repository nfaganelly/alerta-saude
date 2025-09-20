import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Differential } from "@/components/sections/Differential";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trust } from "@/components/sections/Trust";
import { Pricing } from "@/components/sections/Pricing";
import { EmotionalValue } from "@/components/sections/EmotionalValue";
import { AIFeatures } from "@/components/sections/AIFeatures";
import { LaunchOffer } from "@/components/sections/LaunchOffer";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Benefits />
      <Differential />
      <Testimonials />
      <Trust />
      <Pricing />
      <EmotionalValue />
      <AIFeatures />
      <LaunchOffer />
      <FinalCTA />
    </div>
  );
};

export default Index;
