"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animated count-up. Parses a leading integer and preserves any prefix/suffix
 * (e.g. "500+", "30+"). Non-numeric values ("Pan-India") render as-is.
 */
export default function Counter({ value, className = "", duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : null;
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";
  // Initialise to the final value so the correct number always shows even if
  // the in-view animation never runs. The count-up is a progressive enhancement.
  const [display, setDisplay] = useState(target !== null ? target : value);

  useEffect(() => {
    if (!inView || target === null) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {target !== null ? `${prefix}${display}${suffix}` : value}
    </span>
  );
}
