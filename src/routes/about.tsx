import { createFileRoute } from "@tanstack/react-router";
import { TopBar, Navbar } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { About, WhyChoose, CoreFeatures } from "@/components/site/Sections";
import { Stats } from "@/components/site/Stats";
import { CTA, Footer } from "@/components/site/Footer";
import heroImg from "@/assets/about-warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fast Cargo — Premium Global Logistics Partner" },
      { name: "description", content: "Discover Fast Cargo: 25+ years building reliable freight, warehousing, and supply chain operations for modern enterprises." },
      { property: "og:title", content: "About Fast Cargo — Premium Global Logistics Partner" },
      { property: "og:description", content: "Reliable logistics solutions built for modern business — air, ocean, road, and warehousing at enterprise scale." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          image={heroImg}
          breadcrumb="About Us"
          badge="About Fast Cargo"
          title={<>Reliable Logistics Solutions Built For <span className="text-brand-red-soft">Modern Business.</span></>}
          subtitle="From global freight to last-mile delivery, Fast Cargo combines decades of operational expertise with modern infrastructure to keep enterprise supply chains moving."
          primary={{ label: "Work With Us", to: "/contact" }}
          secondary={{ label: "Request A Quote", to: "/" }}
        />

        <div className="pt-12">
          <Stats />
        </div>

        <About />
        <CoreFeatures />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
