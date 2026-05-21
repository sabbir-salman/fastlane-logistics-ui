import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Phone,
  ArrowRight,
  Truck,
  Menu,
  X,
} from "lucide-react";

const navLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-xl shadow-elevated" : "bg-navy-deep"
      }`}
    >
      <div className="container mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 text-primary-foreground">
          <span className="grid place-items-center size-9 rounded-lg bg-brand-red shadow-glow-red">
            <Truck className="size-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Fast<span className="text-brand-red-soft">Cargo</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname === l.to;
            return (
              <Link
                key={l.label}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  active ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {l.label}
                <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-brand-red origin-left transition-transform duration-300 ${
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="tel:+1800668333"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Phone className="size-4" />
            <span>+1 (800) 668-333</span>
          </a>
          <a
            href="#quote"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft text-white text-sm font-semibold px-5 py-2.5 transition-all hover:shadow-glow-red group"
          >
            Request A Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-1 grid place-items-center size-10 rounded-lg text-primary-foreground hover:bg-white/10"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden border-t border-white/10 bg-navy-deep"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="px-3 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 rounded-lg text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+1800668333"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone className="size-4" />
                <span>+1 (800) 668-333</span>
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft text-white text-sm font-semibold px-5 py-2.5 transition-all hover:shadow-glow-red group"
              >
                Request A Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
