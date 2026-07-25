import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import {
  CoreValues, EndToEnd, IndustriesSupport,
  FreightShowcase, Process, Partners,
} from "@/components/site/ServicesSections";
import { CTA, Footer } from "@/components/site/Footer";
import heroImg from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fast Cargo Global Logistics & Freight" },
      { name: "description", content: "Comprehensive logistics services from Fast Cargo: air, ocean, road and container freight, supply chain, freight management and technology solutions." },
      { property: "og:title", content: "Services — Fast Cargo Global Logistics & Freight" },
      { property: "og:description", content: "Move your cargo efficiently and securely — end-to-end logistics services from local transport to global shipping." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image={heroImg}
          breadcrumb="Our Services"
          badge="What We Offer"
          title={<>Our <span className="text-brand-red-soft">Services.</span></>}
          subtitle="Comprehensive logistics solutions designed to move your cargo efficiently, securely, and on schedule — from local transport to global shipping operations."
          primary={{ label: "Request A Quote", to: "/contact" }}
          secondary={{ label: "Explore Capabilities", to: "/services" }}
        />
        <CoreValues />
        <EndToEnd />
        <DoorToDoor />
        <IndustriesSupport />
        <FreightShowcase />
        <Process />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
