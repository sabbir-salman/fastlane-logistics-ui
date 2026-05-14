import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

export function PageHero({
  image,
  badge,
  title,
  subtitle,
  primary,
  secondary,
  breadcrumb,
}: {
  image: string;
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  primary: { label: string; to: string; icon?: React.ReactNode };
  secondary: { label: string; to: string; icon?: React.ReactNode; href?: string };
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="size-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
      </div>

      <div className="relative container mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-primary-foreground"
        >
          <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-white">{breadcrumb}</span>
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-brand-red" />
            {badge}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/75 max-w-xl leading-relaxed">{subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to={primary.to}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft px-7 py-4 text-sm font-semibold transition-all hover:shadow-glow-red"
            >
              {primary.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            {secondary.href ? (
              <a
                href={secondary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur px-7 py-4 text-sm font-semibold transition-all"
              >
                {secondary.icon ?? <Phone className="size-4" />}
                {secondary.label}
              </a>
            ) : (
              <Link
                to={secondary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur px-7 py-4 text-sm font-semibold transition-all"
              >
                {secondary.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
