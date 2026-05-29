"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCpu, FiShield, FiTrendingUp } from "react-icons/fi";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureItem) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative rounded-3xl glass-card border border-white/5 p-8 md:p-10 flex flex-col items-start text-left overflow-hidden cursor-pointer select-none"
      style={{
        // Define coordinate variables for CSS radial gradient spotlight
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as React.CSSProperties}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      {isHovered && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_220px_at_var(--mouse-x)_var(--mouse-y),rgba(0,255,178,0.12)_0%,transparent_100%)] pointer-events-none" />
      )}

      {/* Decorative Edge Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-green/10 to-transparent z-10" />

      {/* Icon Wrapper */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-neon-green/5 border border-neon-green/20 text-neon-green flex items-center justify-center text-2xl mb-8 group-hover:bg-neon-green/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,178,0.05)]">
        {icon}
      </div>

      {/* Card Content */}
      <h3 className="relative z-10 font-title font-bold text-xl sm:text-2xl text-white mb-4">
        {title}
      </h3>
      <p className="relative z-10 text-sm sm:text-base text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const featuresList: FeatureItem[] = [
    {
      icon: <FiCpu className="animate-pulse" />,
      title: "Community Empowerment",
      description: "Direct community control over platform actions, voting on projects, allocating grants, and deciding treasury management policies interactively.",
    },
    {
      icon: <FiShield />,
      title: "Proof of Value",
      description: "Smart contract audited guarantees. Funds are released based on verifiable milestone completion, ensuring maximum security for project backers.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Raise Capital Easily",
      description: "Fast-track onboarding and structured fundraising flows. Launch token listings, secure initial pools, and grow your community seamlessly.",
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#020403] overflow-hidden z-10">
      {/* Background Radial Glow */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-green/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs font-bold text-neon-green tracking-widest uppercase mb-4 block">
            CORE PROTOCOL UTILITIES
          </span>
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered For Next-Gen Funding
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Discover a comprehensive suite of Web3 project management tools that secure assets, incentivize communities, and simplify launch cycles.
          </p>
        </div>

        {/* Features Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
