"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface StatItem {
  target: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
}

function Counter({ target, decimals, prefix, suffix }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease out quad formula for smooth decelerating speed
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * target;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-title font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats: StatItem[] = [
    { target: 25.5, decimals: 1, prefix: "", suffix: "K+", label: "ACTIVE USERS" },
    { target: 3.45, decimals: 2, prefix: "", suffix: "K+", label: "COMMUNITY MANAGERS" },
    { target: 196, decimals: 0, prefix: "$", suffix: "M+", label: "CAPITAL RAISED" },
    { target: 140, decimals: 0, prefix: "", suffix: "+", label: "COUNTRIES REACHED" },
  ];

  return (
    <section className="relative py-16 bg-[#020403] border-y border-white/5 overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/5 to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              variants={fadeIn}
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl glass-card hover:bg-neon-green/[0.02]"
            >
              {/* Animated Stat Value */}
              <div className="flex items-baseline mb-2">
                <Counter {...stat} />
              </div>

              {/* Stat Sub-heading label */}
              <span className="text-[10px] sm:text-xs font-bold text-neon-green tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
