import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import TechStackSection from "@/components/sections/tech-stack";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import UiUxSection from "@/components/sections/ui-ux";
import WebDevSection from "@/components/sections/web-dev";
import GameDevSection from "@/components/sections/game-dev";
import CtaSection from "@/components/sections/cta";
import WorkflowSection from "@/components/sections/workflow";
import TestimonialsSection from "@/components/sections/testimonials";
import AwardsSection from "@/components/sections/awards";
import BlogSection from "@/components/sections/blog";
import ImageGallerySection from "@/components/sections/image-gallery-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ServicesSection />
        <UiUxSection />
        <WebDevSection />
        <GameDevSection />
        <CtaSection />
        <WorkflowSection />
        <TestimonialsSection />
        <AwardsSection />
        <ImageGallerySection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
