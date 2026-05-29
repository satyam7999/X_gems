"use client";

import { motion } from "framer-motion";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { SiTether, SiSolana, SiPolkadot } from "react-icons/si";

export default function CryptoSection() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-[#020403] border-t border-white/5 overflow-hidden z-10">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Interactive SVG Network Block */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center h-[380px] md:h-[450px] relative">
          
          {/* Custom style for animated path dash lines */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes networkDash {
              to {
                stroke-dashoffset: -40;
              }
            }
            .network-path {
              stroke-dasharray: 8 8;
              animation: networkDash 2s linear infinite;
            }
          `}} />

          {/* Core SVG network lines */}
          <svg className="absolute w-full h-full max-w-[480px] max-h-[400px]" viewBox="0 0 400 300" fill="none">
            {/* Connection Lines from Center (200, 150) to Nodes */}
            {/* ETH Node (200, 45) */}
            <path className="network-path" d="M200 150 L200 45" stroke="rgba(0, 255, 178, 0.4)" strokeWidth="1.5" />
            {/* BTC Node (80, 100) */}
            <path className="network-path" d="M200 150 L80 100" stroke="rgba(0, 255, 178, 0.4)" strokeWidth="1.5" />
            {/* USDT Node (320, 100) */}
            <path className="network-path" d="M200 150 L320 100" stroke="rgba(0, 255, 178, 0.4)" strokeWidth="1.5" />
            {/* SOL Node (100, 220) */}
            <path className="network-path" d="M200 150 L100 220" stroke="rgba(0, 255, 178, 0.4)" strokeWidth="1.5" />
            {/* DOT Node (300, 220) */}
            <path className="network-path" d="M200 150 L300 220" stroke="rgba(0, 255, 178, 0.4)" strokeWidth="1.5" />
          </svg>

          {/* Central Hub Node */}
          <div className="absolute w-20 h-20 rounded-full bg-dark-bg border border-neon-green/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,178,0.2)] z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-green to-dark-green flex items-center justify-center font-title font-extrabold text-xl text-dark-bg">
              G
            </div>
          </div>

          {/* Node 1: Ethereum (Top Center) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-[20px] left-[180px] md:left-[190px] w-12 h-12 rounded-2xl bg-dark-bg border border-neon-green/20 text-indigo-400 flex items-center justify-center shadow-lg shadow-black/80 hover:border-neon-green/60 transition-colors cursor-pointer"
          >
            <FaEthereum className="w-6 h-6 animate-pulse" />
          </motion.div>

          {/* Node 2: Bitcoin (Mid Left) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-[80px] left-[60px] md:left-[70px] w-12 h-12 rounded-2xl bg-dark-bg border border-neon-green/20 text-yellow-500 flex items-center justify-center shadow-lg shadow-black/80 hover:border-neon-green/60 transition-colors cursor-pointer"
          >
            <FaBitcoin className="w-6 h-6" />
          </motion.div>

          {/* Node 3: USDT Tether (Mid Right) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-[80px] right-[60px] md:right-[70px] w-12 h-12 rounded-2xl bg-dark-bg border border-neon-green/20 text-green-400 flex items-center justify-center shadow-lg shadow-black/80 hover:border-neon-green/60 transition-colors cursor-pointer"
          >
            <SiTether className="w-6 h-6" />
          </motion.div>

          {/* Node 4: Solana (Bottom Left) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute bottom-[40px] left-[80px] md:left-[90px] w-12 h-12 rounded-2xl bg-dark-bg border border-neon-green/20 text-cyan-400 flex items-center justify-center shadow-lg shadow-black/80 hover:border-neon-green/60 transition-colors cursor-pointer"
          >
            <SiSolana className="w-5 h-5 animate-pulse" />
          </motion.div>

          {/* Node 5: Polkadot (Bottom Right) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute bottom-[40px] right-[80px] md:right-[90px] w-12 h-12 rounded-2xl bg-dark-bg border border-neon-green/20 text-pink-500 flex items-center justify-center shadow-lg shadow-black/80 hover:border-neon-green/60 transition-colors cursor-pointer"
          >
            <SiPolkadot className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Right Content Block */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col text-left">
          <span className="text-[10px] md:text-xs font-bold text-neon-green tracking-widest uppercase mb-4">
            DECENTRALIZED PLUG-IN
          </span>
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Multi-Chain Crypto <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-white bg-[size:100%] neon-text-glow font-black">
              Ecosystem Hub
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
            Decentralized funding across major protocols. Gems is built for high-performance integrations with Ethereum, Bitcoin, Solana, Tether, and Polkadot. Secure liquid pools and lock tokens in a unified environment.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
            Our smart contract bridges ensure instant liquidity mappings and secure allocations, providing early contributors absolute peace of mind.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-title font-extrabold text-white text-3xl">5+</span>
              <span className="text-[10px] text-neon-green font-bold tracking-widest uppercase mt-0.5">NETWORKS SUPPORTED</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-title font-extrabold text-white text-3xl">100%</span>
              <span className="text-[10px] text-neon-green font-bold tracking-widest uppercase mt-0.5">MILITARY AUDITED DEPLOYMENTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
