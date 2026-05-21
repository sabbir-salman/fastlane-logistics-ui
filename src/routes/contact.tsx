import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { ContactInfo, ContactForm, MapSection, FAQ } from "@/components/site/ContactSections";
import { CTA, Footer } from "@/components/site/Footer";
import { Phone } from "lucide-react";
import heroImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Fast Cargo — Talk To A Logistics Expert" },
      { name: "description", content: "Reach the Fast Cargo team for tailored quotes, freight planning, and 24/7 logistics support across air, ocean, and road." },
      { property: "og:title", content: "Contact Fast Cargo — Talk To A Logistics Expert" },
      { property: "og:description", content: "Connect with our coordinators by phone, email, or request form. 24/7 operations, replies within 2 business hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          image={heroImg}
          breadcrumb="Contact Us"
          badge="Get In Touch"
          title={<>Let's Move Your Logistics Operations <span className="text-brand-red-soft">Forward.</span></>}
          subtitle="Talk to a senior logistics coordinator about your routes, volume, and delivery requirements — we respond within two business hours."
          primary={{ label: "Request A Quote", to: "/" }}
          secondary={{ label: "Call Our Team", to: "/contact", href: "tel:+18006683333", icon: <Phone className="size-4" /> }}
        />

        <ContactInfo />
        <ContactForm />
        <MapSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
