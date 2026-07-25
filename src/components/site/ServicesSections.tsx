import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Compass, Headphones, ShieldCheck, Target,
  Package, Network, ClipboardList, Cpu, Check,
  ClipboardCheck, Workflow, Radar, MapPinned, Phone,
} from "lucide-react";
import { Badge } from "./Services";
import roadImg from "@/assets/freight-road.jpg";
import oceanImg from "@/assets/freight-ocean.jpg";
import containerImg from "@/assets/freight-container.jpg";
import airImg from "@/assets/freight-air.jpg";
import industriesImg from "@/assets/industries-truck.jpg";
import doorTruckImg from "@/assets/door-to-door-truck.jpg";

/* ============== 2. Core Service Values ============== */

const values = [
  { icon: Compass, title: "Real-World Logistics Expertise", desc: "Battle-tested operational knowledge across freight, customs, and last-mile delivery." },
  { icon: Headphones, title: "Clear, Responsive Communication", desc: "Dedicated coordinators answering within minutes across every time zone." },
  { icon: ShieldCheck, title: "Consistent, Reliable Execution", desc: "Disciplined SOPs and audited carriers that keep SLAs intact under pressure." },
  { icon: Target, title: "Focused On Getting It Right", desc: "Quality checks on every shipment so small details never escalate into big issues." },
];

export function CoreValues() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Badge>Why Fast Cargo</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            The Operating Principles Behind Every Shipment.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-card border border-border p-7 hover-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 size-24 -translate-y-12 translate-x-12 rounded-full bg-brand-red/0 group-hover:bg-brand-red/10 transition-all" />
              <span className="grid place-items-center size-12 rounded-xl bg-navy-deep text-white group-hover:bg-brand-red transition-colors">
                <v.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-base font-semibold leading-snug">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 3. End-to-End Services ============== */

const endToEnd = [
  { icon: Package, title: "Shipping Service", desc: "Door-to-door freight across air, ocean, and road with priority routing." },
  { icon: Network, title: "Supply Chain", desc: "Procurement, warehousing, and distribution under one connected platform." },
  { icon: ClipboardList, title: "Freight Management", desc: "Carrier selection, rate negotiation, and exception handling end-to-end." },
  { icon: Cpu, title: "Technology Solutions", desc: "Real-time visibility, APIs, and analytics powering smarter decisions." },
];

export function EndToEnd() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-deep text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 gradient-radial-red opacity-40" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "26px 26px" }}
      />
      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-brand-red" />
              Integrated Logistics Capabilities
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              End-To-End <span className="text-brand-red-soft">Logistics</span> Services.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:text-right"
          >
            <p className="text-primary-foreground/75 leading-relaxed">
              Reliable transportation, freight coordination, and supply chain execution — engineered to scale with your operations.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-red-soft">
              <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
              Trusted By Worldwide Partners
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {endToEnd.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 p-7 hover:bg-white/[0.08] transition-all overflow-hidden"
            >
              <span className="absolute left-0 top-8 bottom-8 w-0.5 bg-brand-red scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <div className="text-xs font-mono text-white/30">0{i + 1}</div>
              <span className="mt-3 grid place-items-center size-12 rounded-xl bg-brand-red text-white shadow-glow-red">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/65 leading-relaxed">{s.desc}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-red-soft hover:text-white transition-colors group/btn">
                Read More
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 4. Door-to-Door Service ============== */

const dtdSteps = [
  { icon: ClipboardCheck, title: "Scheduled Pickup", desc: "We collect your cargo at the origin address on a confirmed time window — no waiting, no re-bookings." },
  { icon: Workflow, title: "Managed Transit", desc: "Air, ocean, or road routing handled by a dedicated coordinator, with customs and documentation prepared in advance." },
  { icon: Radar, title: "Live Tracking", desc: "Milestone updates from pickup to arrival, visible to your team through a single shipment reference." },
  { icon: MapPinned, title: "Final-Mile Delivery", desc: "Handed off directly to the receiver's door with proof of delivery and condition reports." },
];

const dtdHighlights = [
  "Door-to-door coverage across 120+ countries",
  "Single point of contact for every shipment",
  "Customs clearance and duty handling included",
  "Insurance and fragile-cargo protocols on request",
];

export function DoorToDoor() {
  return (
    <section className="py-24 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <Badge>Door-to-Door Shipping</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            One shipment, one team,<br />from your door to theirs.
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-xl">
            Fast Cargo owns every step of the journey — pickup, transit, customs, and final delivery — so your operations team never has to chase multiple carriers or vendors again.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {dtdSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-card p-6 border border-border shadow-soft hover:shadow-elevated transition-all"
              >
                <span className="grid place-items-center size-11 rounded-xl bg-brand-red/10 text-brand-red">
                  <s.icon className="size-5" />
                </span>
                <div className="mt-4 font-bold">{s.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {dtdHighlights.map(h => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="size-4 mt-0.5 text-brand-red shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img src={doorTruckImg} alt="Fast Cargo delivery truck at a container terminal" className="w-full h-[560px] object-cover" loading="lazy" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Coordinators Online
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-[0.2em] opacity-80">Coverage</div>
              <div className="mt-1 text-2xl font-bold leading-tight">120+ countries · 24/7 dispatch</div>
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
                <Phone className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="font-bold text-base leading-snug">Talk to a coordinator</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get pickup slots and transit options in one call — no forms, no back-and-forth.
                </p>
                <a href="tel:+18006683333" className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-deep hover:bg-navy text-white px-5 py-2.5 text-sm font-semibold transition-all">
                  Call +1 800 - 668 333
                  <ArrowRight className="size-4" />
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

/* ============== 5. Industries We Support ============== */

const industries = [
  "Fast-Moving Consumer Goods", "E-Commerce & Retail",
  "Manufacturing & Industrial", "Food & Beverage",
  "Fashion & Textiles", "Agriculture & Fresh Produce",
  "Pharmaceuticals & Healthcare", "Automotive",
];

const industryHighlights = [
  "Industry-focused logistics",
  "Dedicated operational support",
  "Last-mile delivery services",
];

export function IndustriesSupport() {
  return (
    <section className="py-24 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img src={industriesImg} alt="Logistics truck and containers" className="w-full h-[520px] object-cover" loading="lazy" width={1200} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/35 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 size-32 rounded-2xl bg-brand-red/10 -z-10" />
          <div className="absolute -top-6 -left-6 size-24 rounded-2xl bg-navy/5 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge>Industries Logistics Support</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Logistics Solutions For Every <span className="text-brand-red">Industry.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tailored logistics services designed to fit the operational rhythm of each industry — from high-velocity retail to temperature-sensitive pharma freight.
          </p>

          <ul className="mt-6 space-y-3">
            {industryHighlights.map(h => (
              <li key={h} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid place-items-center size-6 rounded-full bg-brand-red/10 text-brand-red">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {industries.map(tag => (
              <button
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-navy-deep hover:text-white hover:border-navy-deep transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============== 5. Freight Services Showcase ============== */

const freight = [
  { num: "01", title: "Road Freight", img: roadImg },
  { num: "02", title: "Ocean Freight", img: oceanImg },
  { num: "03", title: "Container Shipping", img: containerImg },
  { num: "04", title: "Air Freight", img: airImg },
];

export function FreightShowcase() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-10 flex-wrap mb-12">
          <div className="max-w-xl">
            <Badge>Freight Modes</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Move Cargo Across Every Mode.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One operations team, every freight lane — air, ocean, container, and road, integrated under a single platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {freight.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative h-[460px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={f.img}
                alt={f.title}
                className="absolute inset-0 size-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
                width={800}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/10 group-hover:from-navy-deep/90 transition-colors duration-500" />

              <div className="absolute top-6 left-6 right-6 flex items-start justify-between text-white">
                <span className="font-mono text-sm text-white/70">{f.num}</span>
                <span className="grid place-items-center size-10 rounded-full bg-white/10 backdrop-blur border border-white/20 group-hover:bg-brand-red group-hover:border-brand-red transition-all">
                  <ArrowRight className="size-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold leading-tight">{f.title}</h3>
                <div className="mt-3 h-px w-12 bg-brand-red group-hover:w-full transition-all duration-500" />
                <p className="mt-3 text-sm text-white/0 group-hover:text-white/80 transition-colors duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                  Reliable, scheduled and tracked end-to-end with full chain-of-custody visibility.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 6. Process / Workflow ============== */

const steps = [
  { icon: ClipboardCheck, title: "Request & Planning", desc: "Share your shipment details — we design the optimal route, mode, and timing." },
  { icon: Workflow, title: "Coordination & Execution", desc: "Carriers booked, documents prepared, and pickups dispatched on schedule." },
  { icon: Radar, title: "Tracking & Communication", desc: "Real-time visibility with proactive updates from your dedicated coordinator." },
  { icon: MapPinned, title: "Delivery & Optimization", desc: "On-time delivery confirmed, then we review performance to refine your lanes." },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >
          <Badge>Our Process</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Designed For Smooth, Reliable Logistics Operations.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every shipment runs through the same disciplined four-step workflow — built for operational efficiency and end-to-end visibility.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft text-white px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-glow-red group"
          >
            Get Started Shipping
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" aria-hidden />
          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20"
              >
                <span className="absolute left-0 top-2 grid place-items-center size-12 rounded-full bg-navy-deep text-white font-mono text-sm font-semibold shadow-soft">
                  0{i + 1}
                </span>
                <div className="rounded-2xl bg-card border border-border p-6 hover-lift">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center size-10 rounded-xl bg-brand-red/10 text-brand-red">
                      <s.icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 7. Partner Logos ============== */

const partners = ["CEVA Logistics", "Rakuten", "Pioneer Foods", "Mintomat", "Nordwind", "Veloxa"];

export function Partners() {
  return (
    <section className="py-20 lg:py-24 border-y border-border bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by 1,000+ Businesses & E-Commerce Brands
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group text-center font-display text-lg lg:text-xl font-bold tracking-tight text-muted-foreground/60 hover:text-navy-deep transition-colors"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
