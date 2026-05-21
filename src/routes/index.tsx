import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services, Industries } from "@/components/site/Services";
import { About, WhyChoose, CoreFeatures } from "@/components/site/Sections";
import { QuoteSection, CTA, Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industries />
        <About />
        <WhyChoose />
        <CoreFeatures />
        <QuoteSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
