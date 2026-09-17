"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal with a slight 3D tilt-up (rotateX) as it settles,
 * rather than a flat fade/slide.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 32,
  rotate = 8,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className = "",
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, rotateX: rotate }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1200 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
