"use client";

import { motion as motionFramer } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaEthereum, FaBtc } from "react-icons/fa";
import { SiSolana, SiPolkadot, SiCardano } from "react-icons/si";
import { springHover } from "@/lib/animations";

export default function ProjectSection() {
  const checkPoints = [
    "High performance listing and execution engine.",
    "Integrated multi-chain token launch support.",
    "Milestone-based automated capital release.",
    "Dynamic marketing integration and dashboard.",
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#020403] overflow-hidden z-10">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Left Copywriting Area */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <span className="text-[10px] md:text-xs font-bold text-neon-green tracking-widest uppercase mb-4">
            PROJECT EMPOWERMENT
          </span>
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Unlock Your Project&apos;s Potential: <br />
            <span className="text-neon-green font-black">Launch, Grow, Thrive</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
            Gain immediate access to premium community funding channels, customized advisory support, and tokenomics planning tools. Gems provides a comprehensive solution for early-stage decentralized networks.
          </p>

          {/* Bullet checkpoints */}
          <div className="flex flex-col gap-4 mb-8">
            {checkPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="self-start">
            <motionFramer.button
              variants={springHover}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-xl bg-neon-green hover:bg-neon-dim text-dark-bg font-title font-extrabold text-base tracking-wide flex items-center gap-2.5 neon-btn-glow"
            >
              Get Funding Now
              <FiArrowRight className="text-lg" />
            </motionFramer.button>
          </div>
        </div>

        {/* Right Concentric Orbiting Badges Area */}
        <div className="lg:col-span-6 flex justify-center items-center h-[400px] sm:h-[480px] relative">
          {/* Inner Glowing Center Core */}
          <div className="absolute w-24 h-24 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center z-10 shadow-[0_0_40px_rgba(0,255,178,0.25)] animate-pulse-slow">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-neon-green to-dark-green flex items-center justify-center font-title font-extrabold text-2xl text-dark-bg border border-neon-green/30">
              G
            </div>
          </div>

          {/* Orbit Ring 1 - Inner (200px diameter) */}
          <div className="absolute w-[200px] h-[200px] rounded-full border border-neon-green/5 animate-spin-slow">
            {/* Ethereum Logo Orbiting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-dark-bg border border-neon-green/20 text-indigo-400 flex items-center justify-center shadow-lg shadow-black/50 hover:border-neon-green/50 transition-colors">
              <FaEthereum className="w-5 h-5" />
            </div>
          </div>

          {/* Orbit Ring 2 - Middle (320px diameter) */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-white/5 animate-spin-reverse">
            {/* Solana Logo Orbiting */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-xl bg-dark-bg border border-white/10 text-cyan-400 flex items-center justify-center shadow-lg shadow-black/50 hover:border-neon-green/50 transition-colors">
              <SiSolana className="w-4 h-4" />
            </div>

            {/* Polkadot Logo Orbiting */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-dark-bg border border-white/10 text-pink-500 flex items-center justify-center shadow-lg shadow-black/50 hover:border-neon-green/50 transition-colors">
              <SiPolkadot className="w-5 h-5" />
            </div>
          </div>

          {/* Orbit Ring 3 - Outer (420px diameter) */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-neon-green/[0.03] animate-spin-slow hidden sm:block">
            {/* Bitcoin Logo Orbiting */}
            <div className="absolute top-1/3 right-0 translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-dark-bg border border-neon-green/10 text-yellow-500 flex items-center justify-center shadow-lg shadow-black/50 hover:border-neon-green/50 transition-colors">
              <FaBtc className="w-5 h-5" />
            </div>

            {/* Cardano Logo Orbiting */}
            <div className="absolute bottom-1/3 left-0 -translate-x-1/2 translate-y-1/2 w-11 h-11 rounded-xl bg-dark-bg border border-neon-green/10 text-blue-500 flex items-center justify-center shadow-lg shadow-black/50 hover:border-neon-green/50 transition-colors">
              <SiCardano className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
