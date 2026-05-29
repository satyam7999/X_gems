"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { springHover } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, url: "#twitter", label: "Twitter" },
    { icon: <FaDiscord />, url: "#discord", label: "Discord" },
    { icon: <FaTelegramPlane />, url: "#telegram", label: "Telegram" },
    { icon: <FaGithub />, url: "#github", label: "GitHub" },
  ];

  const footerLinks = [
    {
      title: "Join Us",
      links: [
        { name: "Ambassadors", url: "#ambassadors" },
        { name: "Careers", url: "#careers" },
        { name: "Ecosystem Grants", url: "#grants" },
        { name: "Community Forum", url: "#forum" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Proof of Value", url: "#features" },
        { name: "Token Launchpad", url: "#projects" },
        { name: "Decentralized Governance", url: "#features" },
        { name: "Multi-Chain Hub", url: "#ecosystem" },
      ],
    },
    {
      title: "Help Desk",
      links: [
        { name: "Developer Docs", url: "#docs" },
        { name: "Security Audit", url: "#audits" },
        { name: "Terms of Service", url: "#terms" },
        { name: "Contact Support", url: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#020403] border-t border-white/5 pt-20 pb-10 overflow-hidden z-10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info Block (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 cursor-pointer mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neon-green to-dark-green flex items-center justify-center font-title font-extrabold text-xl text-dark-bg border border-neon-green/30">
                G
              </div>
              <span className="font-title font-bold text-lg tracking-wider text-white">
                GEMS<span className="text-neon-green font-black">.</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm text-left">
              The ultimate high-fidelity decentralized crowdfunding platform for early-stage Web3 and SaaS projects. Launch, grow, and empower your community transparently.
            </p>

            {/* Social Grid */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  variants={springHover}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-green/30 text-gray-400 hover:text-neon-green flex items-center justify-center text-lg transition-colors hover:shadow-[0_0_15px_rgba(0,255,178,0.1)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8">
            {footerLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                <span className="text-xs font-bold text-white tracking-widest uppercase mb-5 font-title">
                  {col.title}
                </span>
                <div className="flex flex-col gap-3.5">
                  {col.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      className="text-sm text-gray-400 hover:text-neon-green transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Block (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-white tracking-widest uppercase mb-5 font-title">
              Protocol Status
            </span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-green/5 border border-neon-green/20 text-[10px] font-bold text-neon-green tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-ping"></span>
              ALL SYSTEMS GO
            </div>
            <span className="text-[10px] text-gray-500 font-mono mt-3 leading-relaxed">
              v1.0.4-live <br />
              Block: #194,502 <br />
              Gas: 12 Gwei
            </span>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div className="flex items-center gap-1">
            <BiCopyright className="text-sm" />
            <span>{currentYear} GEMS DECENTRALIZED PROTOCOL. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-neon-green transition-colors">PRIVACY POLICY</a>
            <a href="#terms" className="hover:text-neon-green transition-colors">SECURITY AUDIT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
