import { motion } from "framer-motion";
import {
  Plane, Ship, Truck, ArrowRight, Check,
  ShoppingBag, Factory, Cpu, HeartPulse, ChevronLeft, ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Plane, title: "Air Freight",
    desc: "Time-critical worldwide shipments with priority routing and real-time tracking.",
    points: ["24/7 priority handling", "Customs clearance included", "Door-to-door delivery"],
  },
  {
    icon: Ship, title: "Ocean Freight",
    desc: "Cost-efficient FCL & LCL shipping across major global trade lanes.",
    points: ["Full & less-than-container", "Port-to-port coverage", "Cargo insurance available"],
    featured: true,
  },
  {
    icon: Truck, title: "Road Freight",
    desc: "Reliable inland transportation with flexible scheduling and dedicated fleets.",
    points: ["Dedicated fleet network", "Same-day dispatch", "Live GPS tracking"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Fast Cargo Services"
          title="Global Transport & Logistics"
          subtitle="Fast Cargo delivers world-class logistics infrastructure solutions for businesses across multiple industries and supply chain networks."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-3xl p-8 hover-lift border transition-colors ${
                s.featured
                  ? "bg-navy-deep text-primary-foreground border-navy-deep"
                  : "bg-card border-border hover:border-navy/20"
              }`}
            >
              <div className={`absolute top-6 right-6 text-xs font-mono ${s.featured ? "text-white/30" : "text-muted-foreground/40"}`}>
                0{i + 1}
              </div>
              <div className={`grid place-items-center size-14 rounded-2xl mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-6 ${
                s.featured ? "bg-brand-red text-white" : "bg-navy-deep text-white"
              }`}>
                <s.icon className="size-7" />
              </div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${s.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <ul className={`mt-6 space-y-2.5 text-sm ${s.featured ? "text-white/85" : "text-foreground"}`}>
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span className={`grid place-items-center size-5 rounded-full ${s.featured ? "bg-white/15 text-brand-red-soft" : "bg-brand-red/10 text-brand-red"}`}>
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all group/btn ${
                s.featured ? "text-brand-red-soft hover:text-white" : "text-navy hover:text-brand-red"
              }`}>
                Read More
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-red transition-colors whitespace-nowrap">
            Find The Right Logistics Solution
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
        </div>
      </div>
    </section>
  );
}

const industries = [
  { icon: ShoppingBag, title: "Fast-Moving Consumer Goods", desc: "High-velocity distribution for retail and e-commerce supply chains." },
  { icon: Factory, title: "Manufacturing & Industrial", desc: "Heavy cargo, machinery, and just-in-time component delivery." },
  { icon: Cpu, title: "Electronics & Technology", desc: "Climate-controlled, high-value handling with chain-of-custody." },
  { icon: HeartPulse, title: "Healthcare & Pharmaceuticals", desc: "GDP-compliant cold chain and validated temperature transport." },
];

export function Industries() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-10 flex-wrap">
          <div className="max-w-2xl">
            <Badge>Industries We Serve</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Logistics Solutions For Every Industry.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Tailored logistics services designed to meet the unique needs of different industries.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="grid place-items-center size-12 rounded-full border border-border hover:bg-soft-gray transition-colors">
              <ChevronLeft className="size-5" />
            </button>
            <button className="grid place-items-center size-12 rounded-full bg-navy-deep text-white hover:bg-navy transition-colors">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-7 hover-lift cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors" />
              <div className="grid place-items-center size-12 rounded-xl bg-soft-gray text-navy group-hover:bg-brand-red group-hover:text-white transition-all">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-navy group-hover:text-brand-red transition-colors">
                Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-red">
      <span className="size-1.5 rounded-full bg-brand-red" />
      {children}
    </span>
  );
}

export function SectionHeader({ badge, title, subtitle, center = true }: { badge: string; title: string; subtitle: string; center?: boolean; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <Badge>{badge}</Badge>
      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">{title}</h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}
