import { Variants } from "framer-motion";

// Staggered Container Variant
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade-in Reveal
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Fade-up Reveal (customizable sequence delays)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // premium ease out
      delay: custom * 0.12,
    },
  }),
};

// Premium Card Lift Hover effect
export const cardHover: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    borderColor: "rgba(0, 255, 178, 0.35)",
    boxShadow: "0 12px 40px 0 rgba(0, 255, 178, 0.08)",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Subtle Spring Hover Scales (for buttons/icons)
export const springHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  tap: {
    scale: 0.96,
  },
};

// Floating animation loop
export const floatAnimation = (delay: number = 0) => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  },
});

// Dynamic canvas particles helper for browser check
export const isBrowser = typeof window !== "undefined";
