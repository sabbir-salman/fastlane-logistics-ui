import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, Award, Headphones, Compass, ShieldCheck, Sparkles, Target } from "lucide-react";
import aboutImg from "@/assets/about-warehouse.jpg";
import whyImg from "@/assets/why-choose.jpg";
import { Badge } from "./Services";

export function About() {
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
            <img src={aboutImg} alt="Warehouse operations" className="w-full h-[520px] object-cover" loading="lazy" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/30 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-4 lg:right-8 w-64 rounded-2xl bg-card p-5 shadow-elevated border border-border"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center size-12 rounded-xl bg-brand-red text-white">
                <Award className="size-6" />
              </span>
              <div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-xs text-muted-foreground">Years of operational excellence</div>
              </div>
            </div>
          </motion.div>
          <div className="absolute -top-6 -left-6 size-24 rounded-2xl bg-brand-red/10 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge>Who We Are</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            A Logistics Partner Focused On{" "}
            <span className="text-brand-red">Reliability</span> And Long-Term Growth.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Fast Cargo combines decades of freight expertise with modern infrastructure to keep your supply chain moving. We operate a global network of warehouses, fleets, and air-ocean partners that deliver consistent performance at scale.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From the first mile to the final delivery, we treat every shipment as an extension of your brand promise.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Feature icon={<Compass />} title="Global Network" />
            <Feature icon={<Headphones />} title="24/7 Operations" />
          </div>

          <a href="#" className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy-deep hover:bg-navy text-white px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-elevated group">
            More About Us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <span className="grid place-items-center size-10 rounded-lg bg-soft-gray text-navy">{icon}</span>
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
}

const accordions = [
  { q: "Faster Routes, Smarter Deliveries", a: "AI-assisted routing reviews traffic, weather, and freight density to keep transit times consistent across every lane we operate." },
  { q: "Scalable Infrastructure for Growing Logistics Operations", a: "Modular warehousing and on-demand fleet capacity flex with your seasonality without sacrificing service levels." },
  { q: "Reliability Comes from Discipline", a: "Standardized SOPs, audited carrier partners, and proactive exception management keep every shipment on plan." },
  { q: "Managing Every Delivery Step with Care and Control", a: "Chain-of-custody tracking, photo proof of delivery, and dedicated coordinators ensure full visibility end-to-end." },
];

export function WhyChoose() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <Badge>Why Choose Fast Cargo</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Built For Reliable Global Logistics Operations.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Operational discipline, modern technology, and people who care — the reasons enterprise teams trust Fast Cargo with their most important shipments.
          </p>

          <div className="mt-10 space-y-3">
            {accordions.map((it, i) => {
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
                      isOpen ? "bg-brand-red text-white rotate-180" : "bg-soft-gray text-navy"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative lg:sticky lg:top-28"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img src={whyImg} alt="Logistics fleet" className="w-full h-[560px] object-cover" loading="lazy" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-80 rounded-2xl bg-card p-6 shadow-elevated border border-border"
          >
            <div className="flex items-start gap-3">
              <span className="grid place-items-center size-11 rounded-xl bg-brand-red text-white shrink-0">
                <Sparkles className="size-5" />
              </span>
              <div>
                <div className="font-bold text-base leading-snug">Need a Faster, Smarter Way to Move Your Goods?</div>
                <a href="#quote" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all">
                  Request A Consultation <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  { icon: Compass, title: "Real-World Logistics Expertise", desc: "Decades of freight operations across air, ocean, and land — applied to your routes." },
  { icon: Headphones, title: "Clear, Responsive Communication", desc: "Dedicated coordinators answering in minutes, not days, across global time zones." },
  { icon: ShieldCheck, title: "Consistent, Reliable Execution", desc: "Standardized processes that hit SLAs even when conditions get unpredictable." },
  { icon: Target, title: "Focused On Getting It Right", desc: "Quality reviews on every shipment so the small details never become big problems." },
];

export function CoreFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <Badge>Core Strengths</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            What makes Fast Cargo a long-term partner.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-card border border-border p-7 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 size-24 -translate-y-12 translate-x-12 rounded-full bg-brand-red/0 group-hover:bg-brand-red/10 transition-all" />
              <span className="grid place-items-center size-12 rounded-xl bg-navy-deep text-white group-hover:bg-brand-red transition-colors">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-base font-semibold leading-snug">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
