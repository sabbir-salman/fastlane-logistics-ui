import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Hourly Processing Capacity", value: 250000, suffix: "" },
  { label: "On-Time Delivery Rate", value: 98, suffix: "%" },
  { label: "Warehouse Space (sq ft)", value: 300000, suffix: "+" },
  { label: "Annual Shipments", value: 1, suffix: "M+" },
];

function CountUp({ end, duration = 1800 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

export function Stats() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card shadow-elevated border border-border overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {stats.map((s, i) => (
              <div key={s.label} className="group p-8 lg:p-10 hover-lift relative">
                <div className="absolute top-0 left-0 h-1 w-12 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl lg:text-5xl font-display font-bold text-navy-deep tracking-tight">
                  <CountUp end={s.value} />
                  <span className="text-brand-red">{s.suffix}</span>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-brand-red" />
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
