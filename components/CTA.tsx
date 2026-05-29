"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function CTA() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Entrance Variants with strict type mapping
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Shimmer effect variants for primary button with strict type mapping
  const shimmerVariants: Variants = {
    animate: {
      x: ["-150%", "200%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2.2,
        ease: "linear",
        repeatDelay: 1.5,
      },
    },
  };

  // Arrow hover transition with strict type mapping
  const arrowVariants: Variants = {
    initial: { x: 0 },
    hover: {
      x: 6,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Setup seed-based random values on the client to avoid SSR hydration mismatches
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);
  
  useEffect(() => {
    const list = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 60 + 20, // 20% to 80%
      size: Math.random() * 3 + 1.5,
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 6,
    }));
    setParticles(list);
  }, []);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#020403] overflow-hidden z-10">
      {/* Background radial spotlight behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-neon-green/[0.03] rounded-full blur-[140px] pointer-events-none animate-pulse-slow z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Floating Card Wrapper */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePos({ x: 0, y: 0 });
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative rounded-3xl glass-card border border-neon-green/15 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center justify-center overflow-hidden cursor-default"
          style={{
            "--mouse-x": `${mousePos.x}px`,
            "--mouse-y": `${mousePos.y}px`,
          } as React.CSSProperties}
        >
          {/* Proximity spotlight radial overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_350px_at_var(--mouse-x)_var(--mouse-y),rgba(0,255,178,0.12)_0%,transparent_100%)] pointer-events-none z-0" />
          )}

          {/* Sparkly corner lights */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-neon-green/10 to-transparent blur-xl opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neon-green/10 to-transparent blur-xl opacity-40 pointer-events-none" />

          {/* Animated floating background particles inside the card */}
          {mounted && particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0.1, y: `${p.y}%`, x: `${p.x}%` }}
              animate={{
                y: [`${p.y}%`, `${p.y - 15}%`, `${p.y}%`],
                x: [`${p.x}%`, `${p.x + 5}%`, `${p.x}%`],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
              className="absolute bg-neon-green rounded-full pointer-events-none z-0"
              style={{
                width: p.size,
                height: p.size,
                boxShadow: "0 0 10px rgba(0, 255, 178, 0.5)",
              }}
            />
          ))}

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="relative z-10 font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-3xl"
          >
            Join Millions of Users Who Already <br className="hidden sm:inline" />
            Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-green to-white bg-[size:200%] animate-pulse-slow font-black neon-text-glow">Gems Ecosystem</span>
          </motion.h2>

          {/* Subheading description */}
          <motion.p
            variants={itemVariants}
            className="relative z-10 text-sm sm:text-base text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            Enter the future of Web3 fundraising today. Deploy fully transparent, audited capital allocations, secure liquid launchpools, and scale your decentralized project in a secure, puzzle-complete ecosystem.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full max-w-md"
          >
            {/* Primary Button */}
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              animate={{
                boxShadow: [
                  "0 0 12px rgba(0, 255, 178, 0.25)",
                  "0 0 24px rgba(0, 255, 178, 0.45)",
                  "0 0 12px rgba(0, 255, 178, 0.25)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-neon-green to-[#00ffd5] text-dark-bg font-title font-extrabold text-base tracking-wide flex items-center justify-center gap-2 overflow-hidden select-none hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Button light sweep shimmer stripe */}
              <motion.span
                variants={shimmerVariants}
                animate="animate"
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
              />

              <span className="relative z-10">Get Started Now</span>
              
              <motion.span variants={arrowVariants} initial="initial" className="relative z-10 flex items-center">
                <FiArrowRight className="text-xl" />
              </motion.span>
            </motion.button>

            {/* Secondary Button */}
            <motion.a
              href="#docs"
              whileHover={{
                borderColor: "rgba(0, 255, 178, 0.8)",
                backgroundColor: "rgba(0, 255, 178, 0.08)",
                color: "#00ffb2",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-white font-title font-bold text-base tracking-wide flex items-center justify-center gap-2 bg-white/[0.01] transition-colors duration-300"
            >
              <FiBookOpen className="text-sm" />
              <span>Read Whitepaper</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
