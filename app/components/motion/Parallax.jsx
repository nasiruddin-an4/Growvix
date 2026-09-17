"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Moves its children at a different rate than the page scroll to create
 * depth. `speed` > 0 drifts down as you scroll past it, < 0 drifts up.
 */
export default function Parallax({
  children,
  className = "",
  speed = 0.15,
  direction = "y",
  zoom = false,
  as = "div",
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = 220 * speed;
  const translate = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12]);

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] ?? motion.div;
  const style = direction === "y" ? { y: translate } : { x: translate };
  if (zoom) style.scale = scaleValue;

  return (
    <MotionTag ref={ref} className={className} style={style}>
      {children}
    </MotionTag>
  );
}
