"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Stories", href: "/#testimonials" },
];

/* Scroll distance (px) over which the bar shrinks from container width to the pill */
const MORPH_DISTANCE = 120;
/* Widest the compact pill gets on large screens */
const PILL_MAX = 1120;
/* Matches .container-x in globals.css */
const CONTAINER_MAX = 1280;

const lerp = (a, b, t) => a + (b - a) * t;

function containerPad(vw) {
  if (vw >= 1024) return 32;
  if (vw >= 640) return 24;
  return 16;
}

/* Width of the page container's content box, so the bar lines up with the sections below */
function containerWidth(vw) {
  return Math.min(vw, CONTAINER_MAX) - containerPad(vw) * 2;
}

/* Compact width once scrolled: noticeably narrower, but never wider than the container */
function pillWidth(vw) {
  const full = containerWidth(vw);
  return Math.min(PILL_MAX, full - (vw >= 640 ? 32 : 8));
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  /* Viewport width, kept as a motion value so the morph can read it without re-rendering */
  const vw = useMotionValue(CONTAINER_MAX);


  /* 0 = top of page (full-width bar), 1 = scrolled (compact pill) */
  const { scrollY } = useScroll();
  const raw = useTransform(scrollY, [0, MORPH_DISTANCE], [0, 1], { clamp: true });
  const spring = reduceMotion
    ? { stiffness: 1000, damping: 100, mass: 0.1 }
    : { stiffness: 220, damping: 32, mass: 0.6 };
  const smooth = useSpring(raw, spring);

  const progress = smooth;

  /* Close the drawer with the Escape key */
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  /* Full screen width at the top of the page, shrinking to the pill as you scroll */
  const width = useTransform([progress, vw], ([p, w]) => lerp(w, pillWidth(w), p));

  const top = useTransform([progress, vw], ([p, w]) => lerp(0, w >= 640 ? 10 : 8, p));
  const radius = useTransform(progress, [0, 1], [0, 12]); // 12px = Tailwind rounded-xl
  const height = useTransform(progress, [0, 1], [72, 62]);

  /* At the top the content lines up with the page container; in the pill it hugs the edges */
  const padX = useTransform([progress, vw], ([p, w]) =>
    lerp((w - containerWidth(w)) / 2, w >= 640 ? 12 : 10, p),
  );

  /* Top: soft warm white with a hairline along the bottom only. Scrolled: white glass pill. */
  const background = useTransform(
    progress,
    [0, 1],
    ["rgba(255, 250, 245, 0.88)", "rgba(255, 255, 255, 0.78)"],
  );
  const borderBottomColor = useTransform(
    progress,
    [0, 1],
    ["rgba(38, 45, 108, 0.08)", "rgba(255, 255, 255, 0.9)"],
  );
  const borderEdgeColor = useTransform(
    progress,
    [0, 1],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"],
  );
  const shadowAlpha = useTransform(progress, [0, 1], [0.05, 0.3]);
  const blur = useTransform(progress, [0, 1], [14, 20]);

  /* Runs after the transforms above subscribe to `vw`, so the first measurement reaches them */
  useLayoutEffect(() => {
    const update = () => {
      vw.set(document.documentElement.clientWidth);
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [vw]);

  const boxShadow = useMotionTemplate`0 12px 30px -16px rgba(22, 25, 40, ${shadowAlpha})`;
  const backdropFilter = useMotionTemplate`blur(${blur}px) saturate(140%)`;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      id="navbar"
      style={{ paddingTop: top }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{
          width,
          height,
          paddingLeft: padX,
          paddingRight: padX,
          borderRadius: radius,
          background,
          borderTopColor: borderEdgeColor,
          borderLeftColor: borderEdgeColor,
          borderRightColor: borderEdgeColor,
          borderBottomColor,
          boxShadow,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        }}
        className="relative mx-auto flex max-w-full items-center justify-between border"
      >
        <Link
          href="/"
          className="relative z-10 flex items-center"
          aria-label="Growvix home"
        >
          <Image
            src="/logo/full_logo.svg"
            alt="Growvix"
            width={130}
            height={33}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav
          aria-label="Main"
          className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center gap-1 text-[17px] font-medium text-ink/75 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <Link
            href="/#contact"
            className="btn-signal hidden h-11 px-5 text-[15px] sm:inline-flex"
          >
            Book a call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-ink/5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile drawer — slides in from the right at 80% of the screen width */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-[2px] lg:hidden"
            />
            <motion.aside
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 34, mass: 0.8 }
              }
              className="fixed inset-y-0 right-0 z-[61] flex h-[100dvh] w-[80%] flex-col rounded-l-[28px] border-l border-white bg-[#FFFCF8] shadow-[-24px_0_60px_-20px_rgba(22,25,40,0.35)] lg:hidden"
            >
              <div className="flex items-center justify-between px-5 pb-2 pt-5">
                <Image
                  src="/logo/full_logo.svg"
                  alt="Growvix"
                  width={120}
                  height={30}
                  className="h-7 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-4 flex flex-col px-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-3 py-4 text-[22px] font-medium tracking-[-0.01em] text-ink transition-colors hover:bg-ink/5"
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3 border-t border-ink/5 p-5">
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-signal h-12 w-full px-5 text-[16px]"
                >
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:growvixbd@gmail.com"
                  className="flex items-center justify-center gap-2 text-[14px] text-ink-soft hover:text-ink"
                >
                  <Mail className="h-4 w-4" />
                  growvixbd@gmail.com
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
