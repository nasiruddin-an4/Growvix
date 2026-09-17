"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Pointer-driven 3D tilt wrapper. Rotates on X/Y based on cursor position
 * within the element and shows a soft light glare that follows the pointer.
 */
export default function TiltCard({
  children,
  className = "",
  max = 10,
  scale = 1.02,
  glare = true,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const glareOpacity = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 16, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springConfig);
  const scaleSpring = useSpring(1, springConfig);
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 60%)`,
  );

  function handleMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleEnter() {
    scaleSpring.set(scale);
    glareOpacity.set(1);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
    scaleSpring.set(1);
    glareOpacity.set(0);
  }

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformPerspective: 1000,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{
            opacity: glareOpacity,
            background: glareBackground,
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay transition-opacity duration-300"
        />
      )}
    </motion.div>
  );
}
