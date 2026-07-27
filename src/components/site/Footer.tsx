import { motion } from "framer-motion";
import {
  ArrowRight, MapPin, Phone, Mail, Truck,
  Facebook, Twitter, Send, Heart, Check,
} from "lucide-react";
import quoteImg from "@/assets/quote-highway.jpg";

const checkboxes = ["Fragile", "Express", "Insurance", "Packaging"];

export function QuoteSection() {
  return (
    <section id="quote" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={quoteImg} alt="" className="size-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/80" />
      </div>

      <div className="relative container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl bg-card p-8 lg:p-10 shadow-elevated border border-border"
        >
          <h3 className="text-2xl lg:text-3xl font-bold">Get a tailored quote</h3>
          <p className="mt-2 text-sm text-muted-foreground">Fill in shipment details and our team will respond within 2 business hours.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Input label="Name" placeholder="John Carter" />
            <Input label="Email" placeholder="you@company.com" type="email" />
            <Input label="Phone" placeholder="+1 (800) 668 333" />
            <Input label="Dimensions (L×W×H)" placeholder="120 × 80 × 100 cm" />
            <Input label="Freight Type" placeholder="Air / Ocean / Road" />
            <Input label="Incoterms" placeholder="FOB, CIF, DDP…" />
            <Input label="Origin Location" placeholder="Atlanta, USA" />
            <Input label="Destination Location" placeholder="Hamburg, DE" />
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Add-ons</div>
            <div className="flex flex-wrap gap-2.5">
              {checkboxes.map(c => <Chip key={c} label={c} />)}
            </div>
          </div>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft text-white px-7 py-4 text-sm font-semibold transition-all hover:shadow-glow-red group w-full sm:w-auto justify-center">
            Request A Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 lg:pt-6 text-primary-foreground"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-brand-red" />
            Request A Quote
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Fast, Reliable, and Secure.
          </h2>
          <p className="mt-4 text-primary-foreground/75 leading-relaxed">
            Submit your request to receive a tailored quote based on your routes, volume, and delivery requirements.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow icon={<MapPin className="size-4" />} title="Malaysia Office" text="No. 11 & 13, Leboh Pudu, 50050 Kuala Lumpur" />
            <ContactRow icon={<Phone className="size-4" />} title="Call us anytime" text="+60 3 2022 1022" />
            <ContactRow icon={<Mail className="size-4" />} title="Send a message" text="fastcargomalaysia@gmail.com" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Input({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
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

function ContactRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid place-items-center size-11 rounded-xl bg-white/10 border border-white/15 text-brand-red-soft shrink-0">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wider text-primary-foreground/60">{title}</div>
        <div className="mt-0.5 font-semibold">{text}</div>
      </div>
    </div>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 gradient-radial-red opacity-50" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto px-6 text-center text-primary-foreground max-w-4xl"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Ready To Optimize Your{" "}
          <span className="bg-gradient-to-r from-brand-red-soft to-white bg-clip-text text-transparent">
            Logistics Operations?
          </span>
        </h2>
        <p className="mt-6 text-primary-foreground/75 max-w-2xl mx-auto">
          Partner with Fast Cargo for dependable transportation, freight coordination, and scalable supply chain support.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft px-7 py-4 text-sm font-semibold transition-all hover:shadow-glow-red">
            Request A Quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur px-7 py-4 text-sm font-semibold transition-all">
            Contact Our Team <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      {/* Newsletter row */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center size-10 rounded-lg bg-brand-red"><Truck className="size-5" /></span>
            <span className="font-display text-xl font-bold">Fast<span className="text-brand-red-soft">Cargo</span></span>
            <span className="hidden lg:inline-block ml-6 text-lg font-display font-semibold text-primary-foreground/85">
              News & Insights, Straight To Your Inbox Every Week
            </span>
          </div>
          <form className="relative">
            <input type="email" placeholder="Enter your email address" className="w-full rounded-full bg-white/8 border border-white/15 pl-5 pr-14 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-red-soft" />
            <button className="absolute top-1/2 -translate-y-1/2 right-1.5 grid place-items-center size-11 rounded-full bg-brand-red hover:bg-brand-red-soft transition-colors">
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight max-w-sm">
            Start Shipping Smarter With Fast Cargo.
          </h3>
          <a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-glow-red group">
            Request A Quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-5">Quick Links</div>
          <ul className="space-y-3 text-sm">
            {["About Us", "Services", "Industries", "Projects", "News & Insights", "Contact"].map(l => (
              <li key={l}><a href="#" className="text-primary-foreground/75 hover:text-brand-red-soft transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-5">Contact</div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-brand-red-soft" /><span>+60 3 2022 1022</span></li>
            <li className="flex items-start gap-3"><Mail className="size-4 mt-0.5 text-brand-red-soft" /><span>fastcargomalaysia@gmail.com</span></li>
            <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-brand-red-soft" /><span>No. 11 & 13, Leboh Pudu, 50050 Kuala Lumpur, Malaysia</span></li>
          </ul>
          <div className="mt-7 flex items-center gap-2.5">
            {[Facebook, Twitter, Send, Heart].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-10 rounded-full bg-white/8 border border-white/10 hover:bg-brand-red hover:border-brand-red transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/55">
          <div>© {new Date().getFullYear()} Fast Cargo. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
