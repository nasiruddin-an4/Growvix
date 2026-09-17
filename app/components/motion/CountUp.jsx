"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the leading numeric portion of a stat string (e.g. "45k+",
 * "100M+", "95%") from 0 up to its target once scrolled into view,
 * keeping any trailing unit/symbol static.
 */
export default function CountUp({ value, duration = 1.4, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const match = String(value).match(/^([\d.,]+)(.*)$/);
  const target = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const decimals =
    match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const [count, setCount] = useState(reduceMotion && target !== null ? target : 0);

  useEffect(() => {
    if (!inView || target === null || reduceMotion) return;
    let raf;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      const t = Math.min((now - start) / (duration * 1000), 1);
      setCount(target * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduceMotion]);

  const formatted =
    target === null
      ? value
      : decimals > 0
        ? count.toFixed(decimals)
        : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
