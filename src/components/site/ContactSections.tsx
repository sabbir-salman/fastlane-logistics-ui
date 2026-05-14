import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, ArrowRight, Check, Plus, Minus,
  Headset, Navigation,
} from "lucide-react";
import contactSupport from "@/assets/contact-support.jpg";
import { Badge, SectionHeader } from "./Services";

const infoCards = [
  {
    icon: MapPin, title: "Office Address",
    main: "1234 Elmwood Ave, Ste 500",
    sub: "Atlanta, GA 30309, United States",
    cta: "Get Directions",
  },
  {
    icon: Phone, title: "Phone Number",
    main: "+1 800 - 668 333",
    sub: "Mon–Fri, 7:00 AM – 8:00 PM EST",
    cta: "Call Now",
  },
  {
    icon: Mail, title: "Email Support",
    main: "fastcargo@gmail.com",
    sub: "Replies within 2 business hours",
    cta: "Send Message",
  },
  {
    icon: Clock, title: "Business Hours",
    main: "24 / 7 Operations",
    sub: "Office hours Mon–Sat 7AM–8PM",
    cta: "Live Status",
  },
];

export function ContactInfo() {
  return (
    <section className="py-24 lg:py-28 bg-soft-gray">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Reach Our Team"
          title="Multiple Ways To Connect With Fast Cargo."
          subtitle="Choose the channel that works best for you — our coordinators are available across every continent we serve."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infoCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-card border border-border p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-brand-red/0 group-hover:bg-brand-red/8 transition-colors" />
              <span className="grid place-items-center size-12 rounded-xl bg-navy-deep text-white group-hover:bg-brand-red transition-colors">
                <c.icon className="size-6" />
              </span>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
              <div className="mt-1.5 font-semibold text-base leading-snug">{c.main}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.sub}</div>
              <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-navy group-hover:text-brand-red transition-colors">
                {c.cta} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const checkboxes = ["Fragile", "Express Delivery", "Insurance", "Packaging Support"];

export function ContactForm() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl bg-card p-8 lg:p-10 shadow-elevated border border-border"
        >
          <Badge>Send a request</Badge>
          <h3 className="mt-4 text-2xl lg:text-3xl font-bold">Tell us about your shipment</h3>
          <p className="mt-2 text-sm text-muted-foreground">Fill in your details and our logistics team will respond within 2 business hours.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" placeholder="John Carter" />
            <Field label="Company Name" placeholder="Acme Corp" />
            <Field label="Email" placeholder="you@company.com" type="email" />
            <Field label="Phone Number" placeholder="+1 (800) 668 333" />
            <Field label="Freight Type" placeholder="Air / Ocean / Road" />
            <Field label="Origin" placeholder="Atlanta, USA" />
            <Field label="Destination" placeholder="Hamburg, DE" />
            <Field label="Estimated Volume" placeholder="2 pallets · 800 kg" />
          </div>

          <label className="mt-4 block">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea
              rows={4}
              placeholder="Tell us about cargo type, timing, and any special handling…"
              className="mt-2 w-full rounded-xl border border-border bg-soft-gray px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:bg-card transition-all resize-none"
            />
          </label>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Add-ons</div>
            <div className="flex flex-wrap gap-2.5">
              {checkboxes.map(c => <Chip key={c} label={c} />)}
            </div>
          </div>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft text-white px-7 py-4 text-sm font-semibold transition-all hover:shadow-glow-red group w-full sm:w-auto justify-center">
            Submit Request
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img src={contactSupport} alt="Logistics support team" className="w-full h-[560px] object-cover" loading="lazy" width={1280} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Coordinators Online
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative -mt-12 mx-4 lg:mx-6 rounded-2xl bg-card p-6 shadow-elevated border border-border"
          >
            <div className="flex items-start gap-4">
              <span className="grid place-items-center size-12 rounded-xl bg-brand-red text-white shrink-0">
                <Headset className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="font-bold text-base leading-snug">Need Immediate Logistics Assistance?</div>
                <p className="mt-1 text-sm text-muted-foreground">Our 24/7 hotline routes critical shipments straight to a senior coordinator.</p>
                <a href="tel:+18006683333" className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-deep hover:bg-navy text-white px-5 py-2.5 text-sm font-semibold transition-all">
                  <Phone className="size-4" /> Call +1 800 - 668 333
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-soft-gray px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:bg-card transition-all"
      />
    </label>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <label className="cursor-pointer group">
      <input type="checkbox" className="peer sr-only" />
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-navy peer-checked:bg-navy-deep peer-checked:text-white peer-checked:border-navy-deep transition-all">
        <span className="grid place-items-center size-4 rounded-full border border-current opacity-60 peer-checked:opacity-100">
          <Check className="size-2.5" />
        </span>
        {label}
      </span>
    </label>
  );
}

export function MapSection() {
  return (
    <section className="py-24 lg:py-28 bg-soft-gray">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Find Us"
          title="Visit Our Atlanta Headquarters."
          subtitle="Drop by our flagship operations center — coffee is on us."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl overflow-hidden border border-border shadow-elevated bg-card"
        >
          <div className="relative h-[420px] w-full">
            <iframe
              title="Fast Cargo HQ map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-84.41%2C33.77%2C-84.36%2C33.80&layer=mapnik&marker=33.785%2C-84.385"
              className="absolute inset-0 size-full grayscale-[20%] contrast-[1.05]"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 rounded-2xl bg-card/95 backdrop-blur border border-border p-5 shadow-elevated max-w-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
                <Navigation className="size-3.5" /> Headquarters
              </div>
              <div className="mt-2 font-bold text-base">Fast Cargo HQ</div>
              <div className="mt-1 text-sm text-muted-foreground">1234 Elmwood Ave, Ste 500, Atlanta, GA 30309</div>
              <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-brand-red transition-colors">
                Open in Maps <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <Detail icon={<MapPin className="size-4" />} title="Address" text="1234 Elmwood Ave, Atlanta" />
            <Detail icon={<Clock className="size-4" />} title="Office Hours" text="Mon–Sat · 7:00 AM – 8:00 PM" />
            <Detail icon={<Phone className="size-4" />} title="Direct Line" text="+1 800 - 668 333" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Detail({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 p-6">
      <span className="grid place-items-center size-11 rounded-xl bg-soft-gray text-navy shrink-0">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-semibold text-sm">{text}</div>
      </div>
    </div>
  );
}

const faqs = [
  { q: "What logistics services does Fast Cargo provide?", a: "We operate end-to-end air, ocean, and road freight, plus warehousing, customs brokerage, last-mile delivery, and supply chain consulting for enterprise teams." },
  { q: "Do you handle international shipping?", a: "Yes — we serve 120+ countries through our owned fleet, vetted carrier network, and bonded warehousing across all major trade lanes." },
  { q: "Can I track my shipments in real time?", a: "Every shipment includes live GPS tracking, milestone notifications, photo proof of delivery, and a dedicated coordinator inside our customer portal." },
  { q: "How quickly will I receive a quote?", a: "Standard freight quotes are returned within 2 business hours. Complex multi-modal projects get a tailored proposal within 24 hours." },
  { q: "Do you offer warehousing and fulfillment?", a: "We operate 300,000+ sq ft of climate-controlled warehouse space with pick & pack, kitting, returns processing, and inventory APIs that plug into your ERP." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Badge>Frequently Asked</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Answers to the questions logistics teams ask us most.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Don't see your question? Our coordinators reply within 2 business hours — and immediately for time-critical freight.
          </p>
          <a href="mailto:fastcargo@gmail.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-deep hover:bg-navy text-white px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-elevated group">
            Ask A Question <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {faqs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className={`rounded-2xl border transition-all ${isOpen ? "border-navy-deep bg-card shadow-soft" : "border-border bg-card"}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`text-xs font-mono ${isOpen ? "text-brand-red" : "text-muted-foreground"}`}>0{i + 1}</span>
                    <span className="font-semibold text-base">{it.q}</span>
                  </div>
                  <span className={`grid place-items-center size-9 rounded-full transition-all shrink-0 ${
                    isOpen ? "bg-brand-red text-white" : "bg-soft-gray text-navy"
                  }`}>
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-14 text-sm text-muted-foreground leading-relaxed">{it.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
