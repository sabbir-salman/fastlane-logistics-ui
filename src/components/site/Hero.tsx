import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Plane, Ship, Truck, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-logistics.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Global logistics network world map"
          className="size-full object-cover opacity-90"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/70" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--navy-deep)/0.6)_100%)]" />

      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide uppercase"
          >
            <span className="size-1.5 rounded-full bg-brand-red animate-pulse" />
            Global Logistics Platform
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-balance"
          >
            Smart Logistics Solutions That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-white to-brand-red-soft bg-clip-text text-transparent">
                Move Your Business
              </span>
            </span>{" "}
            Forward.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 text-base lg:text-lg text-primary-foreground/75 max-w-xl"
          >
            Reliable global freight solutions, connecting businesses worldwide.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-glow-red">
              Ship Immediately
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all">
              View All Services
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-12" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-12 flex items-center gap-6 text-xs text-primary-foreground/60"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-brand-red-soft" /> ISO 9001 Certified</div>
            <span className="h-3 w-px bg-white/15" />
            <div>Trusted by 2,400+ brands</div>
          </motion.div>
        </div>

        {/* Right floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative h-[480px]">
            <FloatingCard
              className="absolute top-0 right-0 w-72"
              delay={0.5}
              icon={<Plane className="size-5" />}
              title="Air Freight"
              meta="LAX → NRT"
              progress={82}
              eta="ETA · 14h 22m"
            />
            <FloatingCard
              className="absolute top-44 left-0 w-72"
              delay={0.7}
              icon={<Ship className="size-5" />}
              title="Ocean Freight"
              meta="Rotterdam → Shanghai"
              progress={46}
              eta="ETA · 18 days"
              accent
            />
            <FloatingCard
              className="absolute bottom-0 right-6 w-72"
              delay={0.9}
              icon={<Truck className="size-5" />}
              title="Road Freight"
              meta="Atlanta → Miami"
              progress={94}
              eta="Arriving today"
            />
          </div>
        </motion.div>
      </div>

      {/* Slider arrows */}
      <div className="relative container mx-auto px-6 pb-10 flex items-center justify-between text-primary-foreground/60 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-brand-red-soft font-semibold">01</span>
          <span className="h-px w-16 bg-white/20" />
          <span>04</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="grid place-items-center size-11 rounded-full border border-white/15 hover:bg-white/10 transition-colors">
            <ChevronLeft className="size-4" />
          </button>
          <button className="grid place-items-center size-11 rounded-full bg-brand-red hover:bg-brand-red-soft transition-colors">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className = "", icon, title, meta, progress, eta, accent, delay = 0,
}: {
  className?: string; icon: React.ReactNode; title: string; meta: string;
  progress: number; eta: string; accent?: boolean; delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`glass rounded-2xl p-5 shadow-elevated ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className={`grid place-items-center size-10 rounded-xl ${accent ? "bg-brand-red text-white" : "bg-white/15 text-white"}`}>
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-white/60 truncate">{meta}</div>
        </div>
      </div>
      <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, delay: delay + 0.4 }}
          className={`h-full rounded-full ${accent ? "bg-brand-red" : "bg-white"}`}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
        <span>{eta}</span>
        <span className="text-white font-medium">{progress}%</span>
      </div>
    </motion.div>
  );
}
