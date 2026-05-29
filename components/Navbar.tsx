"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { springHover } from "@/lib/animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", to: "features" },
    { name: "Projects", to: "projects" },
    { name: "Ecosystem", to: "ecosystem" },
    { name: "Brand Value", to: "brand-value" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-4 shadow-lg shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-green to-dark-green flex items-center justify-center font-title font-extrabold text-2xl text-dark-bg border border-neon-green/30 shadow-[0_0_15px_rgba(0,255,178,0.2)]">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-title font-bold text-xl tracking-wider text-white">
                GEMS<span className="text-neon-green font-black">.</span>
              </span>
              <span className="text-[9px] text-neon-green tracking-widest uppercase font-extrabold -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse-slow"></span>
                Web3 Funding
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.to}`}
                className="text-sm font-medium text-gray-300 hover:text-neon-green transition-colors cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-neon-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Mainnet status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-green/5 border border-neon-green/20 text-xs font-semibold text-neon-green tracking-wide">
              <BiNetworkChart className="w-4 h-4 animate-spin-slow text-neon-green" />
              <span>MAINNET ACTIVE</span>
            </div>

            {/* Launch App Button */}
            <motion.button
              variants={springHover}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-2.5 rounded-xl bg-neon-green hover:bg-neon-dim text-dark-bg font-title font-bold text-sm tracking-wide neon-btn-glow"
            >
              Launch App
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-green/5 border border-neon-green/20 text-[10px] font-bold text-neon-green">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
              LIVE
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-green transition-colors text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 bg-dark-bg/95 backdrop-blur-xl md:hidden px-6 py-12 flex flex-col justify-between border-t border-neon-green/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={`#${link.to}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-title font-semibold text-white hover:text-neon-green transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-neon-green/5 border border-neon-green/10 text-sm font-bold text-neon-green">
                <BiNetworkChart className="w-5 h-5 text-neon-green" />
                <span>DECENTRALIZED PROTOCOL</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-xl bg-neon-green text-dark-bg font-title font-extrabold text-base tracking-wide text-center"
              >
                Launch App
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
