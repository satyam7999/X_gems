"use client";

import { motion } from "framer-motion";
import { FiGrid, FiShield, FiHeart, FiTrendingUp } from "react-icons/fi";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function BrandSection() {
  const puzzlePieces = [
    { icon: <FiHeart className="text-red-400" />, title: "Community Allocation", desc: "Builds a loyal group of early supporters." },
    { icon: <FiShield className="text-blue-400" />, title: "Smart Auditing", desc: "Verifies secure and locked pools." },
    { icon: <FiGrid className="text-purple-400" />, title: "Decentralized listing", desc: "Launches token trade books smoothly." },
    { icon: <FiTrendingUp className="text-neon-green" />, title: "Market Growth", desc: "Accelerates early user onboarding." },
  ];

  return (
    <section id="brand-value" className="relative py-24 md:py-32 bg-[#020403] border-t border-white/5 overflow-hidden z-10">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-green/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs font-bold text-neon-green tracking-widest uppercase mb-4 block">
            THE PLATFORM METAPHOR
          </span>
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Gems: Completing <br className="sm:hidden" />
            The Project Puzzle
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Launching a Web3 project requires multiple complex modules. Gems seamlessly bridges advisory, audience, audited smart contracts, and market liquidity into a single, cohesive engine.
          </p>
        </div>

        {/* Dynamic Graphic + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Circular Puzzle Graphic (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center items-center h-[360px] sm:h-[450px] relative">
            
            {/* Ambient Back Glow */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-neon-green/[0.05] blur-3xl animate-pulse" />

            {/* Concentric Rotating Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-neon-green/20 flex items-center justify-center"
            >
              {/* Floating Puzzle Nodes on the outer circle */}
              <div className="absolute top-0 w-8 h-8 rounded-lg bg-dark-bg border border-neon-green/30 flex items-center justify-center text-neon-green shadow-md shadow-black/80">
                <FiHeart className="w-4 h-4" />
              </div>
              <div className="absolute bottom-0 w-8 h-8 rounded-lg bg-dark-bg border border-neon-green/30 flex items-center justify-center text-neon-green shadow-md shadow-black/80">
                <FiShield className="w-4 h-4" />
              </div>
              <div className="absolute left-0 w-8 h-8 rounded-lg bg-dark-bg border border-neon-green/30 flex items-center justify-center text-neon-green shadow-md shadow-black/80">
                <FiGrid className="w-4 h-4" />
              </div>
              <div className="absolute right-0 w-8 h-8 rounded-lg bg-dark-bg border border-neon-green/30 flex items-center justify-center text-neon-green shadow-md shadow-black/80">
                <FiTrendingUp className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Concentric Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] rounded-full border border-white/5"
            />

            {/* Concentric Inner Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[140px] h-[140px] rounded-full border border-neon-green/[0.05]"
            />

            {/* Glowing Neon Center Logo */}
            <div className="absolute w-24 h-24 rounded-full bg-dark-bg border-2 border-neon-green flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,255,178,0.35)] z-10">
              <span className="font-title font-extrabold text-white text-base tracking-wider leading-none">GEMS</span>
              <span className="text-[7px] font-bold text-neon-green tracking-widest mt-1 uppercase">PUZZLE</span>
            </div>

          </div>

          {/* Right Side: Informative Piece Highlights (6 Cols) */}
          <div className="lg:col-span-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {puzzlePieces.map((piece, index) => (
                <motion.div
                  variants={fadeIn}
                  key={index}
                  className="p-6 rounded-2xl glass-card border border-white/5 hover:bg-neon-green/[0.01] flex flex-col items-start text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-lg mb-4">
                    {piece.icon}
                  </div>
                  <h3 className="font-title font-bold text-base sm:text-lg text-white mb-2">
                    {piece.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {piece.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
