"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal from "./motion/Reveal";
import Parallax from "./motion/Parallax";

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 60, damping: 20, mass: 0.6 };
  const imageX = useSpring(useTransform(px, [0, 1], [-16, 16]), spring);
  const imageY = useSpring(useTransform(py, [0, 1], [-16, 16]), spring);
  const badgeX = useSpring(useTransform(px, [0, 1], [18, -18]), spring);
  const badgeY = useSpring(useTransform(py, [0, 1], [14, -14]), spring);
  const badgeRotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), spring);
  const badgeRotateX = useSpring(useTransform(py, [0, 1], [8, -8]), spring);

  function handlePointerMove(e) {
    if (reduceMotion) return;
    const rect = sectionRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden perspective"
    >
      {/* ===== Background Image (scroll parallax + subtle mouse drift) ===== */}
      <Parallax speed={0.18} zoom className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={
            reduceMotion ? undefined : { x: imageX, y: imageY, scale: 1.06 }
          }
        >
          <Image
            src="/10001.webp"
            alt="Growvix digital agency team collaborating on a project"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-brand-indigo-dark/70" />
      </Parallax>

      {/* ===== Floating glass stat card — tilts opposite the cursor for depth ===== */}
      <motion.div
        aria-hidden
        className="hidden lg:flex absolute top-32 right-16 z-10 glass rounded-2xl px-6 py-5 flex-col gap-1 animate-float"
        style={
          reduceMotion
            ? undefined
            : {
                x: badgeX,
                y: badgeY,
                rotateX: badgeRotateX,
                rotateY: badgeRotateY,
                transformPerspective: 800,
              }
        }
      >
        <span className="text-3xl font-bold text-white">98%</span>
        <span className="text-xs text-white/70 tracking-wide">
          Client Satisfaction
        </span>
      </motion.div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 flex-1 flex flex-col w-full container mx-auto px-6 md:px-10 pt-40 h-full justify-between">
        {/* Hero Title & Tagline */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <Reveal
            as="h1"
            y={40}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight text-white mb-6"
          >
            Next-Gen <br />
            Digital Solutions for Growing <span> Your Brand</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.15}
            y={30}
            className="text-lg md:text-2xl font-medium text-white/90 leading-relaxed max-w-2xl"
          >
            Growvix is ready to design, develop, and market your business{" "}
            <br className="hidden md:block" /> so you can focus on growth.
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center pb-10">
          <div className="flex flex-col items-center gap-2 text-white/60 animate-float">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
