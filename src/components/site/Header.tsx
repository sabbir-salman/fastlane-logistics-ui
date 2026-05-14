import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, Globe, Headset,
  Search, User, ShoppingCart, ArrowRight, Truck, Menu, X,
} from "lucide-react";

const navLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/" },
  { label: "Projects", to: "/" },
  { label: "News", to: "/" },
  { label: "Shop", to: "/" },
  { label: "Contact", to: "/contact" },
];

export function TopBar() {
  return (
    <div className="hidden lg:block bg-soft-gray border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between py-2.5 text-xs">
        <div className="flex items-center gap-7 text-muted-foreground">
          <InfoItem icon={<Phone className="size-3.5" />} text="+1800 - 668 333" />
          <InfoItem icon={<Mail className="size-3.5" />} text="fastcargo@gmail.com" />
          <InfoItem icon={<MapPin className="size-3.5" />} text="1234 Elmwood Ave, Ste 500, Atlanta" />
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <button className="flex items-center gap-2 hover:text-navy transition-colors">
            <Globe className="size-3.5" />
            <span>EN — English</span>
          </button>
          <span className="h-3 w-px bg-border" />
          <button className="flex items-center gap-2 hover:text-brand-red transition-colors">
            <Headset className="size-3.5" />
            <span>24/7 Support</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid place-items-center size-7 rounded-full bg-navy text-primary-foreground">{icon}</span>
      <span className="text-foreground/80">{text}</span>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`relative px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors group`}
            >
              {l}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              {i === 0 && <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-px w-6 bg-brand-red" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <IconBtn><Search className="size-4" /></IconBtn>
          <IconBtn><User className="size-4" /></IconBtn>
          <IconBtn>
            <ShoppingCart className="size-4" />
            <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-brand-red text-[10px] grid place-items-center text-white font-semibold">2</span>
          </IconBtn>
          <a
            href="#quote"
            className="hidden md:inline-flex ml-2 items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-soft text-white text-sm font-semibold px-5 py-2.5 transition-all hover:shadow-glow-red group"
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
              <a key={l} href="#" className="px-3 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5 rounded-lg text-sm font-medium">
                {l}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative grid place-items-center size-10 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 transition-colors">
      {children}
    </button>
  );
}
