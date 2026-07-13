"use client";

import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1];

// Single element that fades/slides in when scrolled into view.
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOut, delay }}
    >
      {children}
    </MotionTag>
  );
}

// Container that staggers its <Item> children into view.
export function Stagger({ children, className, delayChildren = 0.05, stagger = 0.1, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Item({ children, className, y = 24, x = 0, hover = false }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, x },
        show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: easeOut } },
      }}
      whileHover={hover ? { y: -6, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Re-export motion for ad-hoc use in client components.
export { motion };
