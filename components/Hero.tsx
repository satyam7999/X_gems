"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { gsap } from "gsap";
import { springHover } from "@/lib/animations";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  // Smooth mouse coordinates tracker for radial spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });
      gsap.from(".hero-mockup-reveal", {
        opacity: 0,
        scale: 0.95,
        y: 60,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Framer Motion 3D Tilt Card effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Dampen the movements for natural physical springs
  const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMoveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeaveTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-dark-bg radial-bg-glow"
      style={{
        // Set dynamic mouse coordinates for radial background spotlight
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Background Radial Light Spotlight Grid */}
      <div className="absolute inset-0 z-0 bg-transparent radial-glow pointer-events-none opacity-80" />

      {/* Cyber Dot Matrix Layer */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(rgba(0,255,178,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 relative">
        {/* Left Text Block */}
        <div className="lg:col-span-6 flex flex-col text-left">
          {/* Badge */}
          <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-green/5 border border-neon-green/20 text-xs font-bold text-neon-green tracking-widest uppercase mb-6 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-ping"></span>
            NEXT-GEN WEB3 CROWDFUNDING
          </div>

          {/* Main Headline */}
          <h1 className="hero-reveal font-title text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Community Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-green bg-[size:200%] animate-pulse-slow neon-text-glow font-black">
              Project Funding
            </span>
          </h1>

          {/* Description */}
          <p className="hero-reveal text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            Decentralized fundraising completed. Launch next-generation crypto projects, empower builders, and secure transparency with a fully audited, puzzle-complete ecosystem.
          </p>

          {/* Action CTAs */}
          <div className="hero-reveal flex flex-wrap items-center gap-4 sm:gap-6">
            <motion.button
              variants={springHover}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-xl bg-neon-green hover:bg-neon-dim text-dark-bg font-title font-extrabold text-base tracking-wide flex items-center gap-2.5 neon-btn-glow"
            >
              Explore Projects
              <FiArrowUpRight className="text-xl" />
            </motion.button>

            <motion.a
              href="#contact"
              variants={springHover}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-xl border border-neon-green/30 hover:border-neon-green/60 text-white font-title font-bold text-base tracking-wide flex items-center gap-2.5 bg-neon-green/5"
            >
              Contact Us
              <FiSend className="text-sm" />
            </motion.a>
          </div>
        </div>

        {/* Right Dashboard Mockup Block */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <motion.div
            ref={mockupRef}
            onMouseMove={handleMouseMoveTilt}
            onMouseLeave={handleMouseLeaveTilt}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="hero-mockup-reveal relative w-full max-w-[500px] h-[360px] md:h-[420px] rounded-3xl glass-card border border-neon-green/20 p-6 md:p-8 cursor-pointer select-none"
          >
            {/* Inner Glowing Spotlight Layer inside mock */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent rounded-3xl pointer-events-none" />

            {/* Simulated Window Actions */}
            <div className="flex items-center gap-2 mb-6" style={{ transform: "translateZ(30px)" }}>
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="text-[10px] text-gray-500 font-mono ml-3">gems-dashboard_v1.0.exe</span>
            </div>

            {/* Mock Project Title */}
            <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(40px)" }}>
              <div>
                <span className="text-[10px] text-neon-green font-bold tracking-widest uppercase">FEATURED PROJECT</span>
                <h3 className="text-2xl font-title font-bold text-white mt-1">Solaris Network</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-[10px] font-bold text-neon-green uppercase tracking-wide">
                124% Raised
              </span>
            </div>

            {/* Progress Metrics Panel */}
            <div className="bg-dark-bg/60 border border-white/5 rounded-2xl p-4 mb-6" style={{ transform: "translateZ(50px)" }}>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">Raised: <strong className="text-white font-title">$1,453,920</strong></span>
                <span className="text-neon-green font-bold">1,200 ETH</span>
              </div>
              {/* Progress Slider */}
              <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-neon-green to-neon-dim shadow-[0_0_10px_rgba(0,255,178,0.5)]"
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                <span>Min Goal: 500 ETH</span>
                <span>Max Cap: 1500 ETH</span>
              </div>
            </div>

            {/* Mock Data Grids */}
            <div className="grid grid-cols-3 gap-4" style={{ transform: "translateZ(45px)" }}>
              <div className="p-3 bg-neon-green/5 border border-neon-green/10 rounded-xl flex flex-col items-center">
                <span className="text-[10px] text-gray-500 font-mono">BACKERS</span>
                <span className="font-title font-bold text-white text-base mt-1">1,452</span>
              </div>
              <div className="p-3 bg-neon-green/5 border border-neon-green/10 rounded-xl flex flex-col items-center">
                <span className="text-[10px] text-gray-500 font-mono">PRICE</span>
                <span className="font-title font-bold text-white text-base mt-1">$0.024</span>
              </div>
              <div className="p-3 bg-neon-green/5 border border-neon-green/10 rounded-xl flex flex-col items-center">
                <span className="text-[10px] text-gray-500 font-mono">TIME LEFT</span>
                <span className="font-title font-bold text-neon-green text-base mt-1">2d 12h</span>
              </div>
            </div>

            {/* Floating 3D Coin Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-6 w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 to-yellow-600 border border-yellow-400/30 flex items-center justify-center text-dark-bg text-2xl shadow-xl shadow-yellow-500/10 pointer-events-none"
              style={{ transform: "translateZ(80px)" }}
            >
              <FaBitcoin className="text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-8 w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 border border-purple-400/30 flex items-center justify-center text-white text-2xl shadow-xl shadow-purple-500/10 pointer-events-none"
              style={{ transform: "translateZ(70px)" }}
            >
              <FaEthereum className="text-white animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
