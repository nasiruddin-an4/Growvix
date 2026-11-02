"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Megaphone,
  PenTool,
  Repeat2,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import stats from "../data/provenNumbers.json";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";
import TiltCard from "./motion/TiltCard";
import Parallax from "./motion/Parallax";
import CountUp from "./motion/CountUp";

const icons = [Megaphone, Users, BarChart3, Repeat2];

const planSteps = [
  { icon: Search, label: "Discover", when: "Week 1" },
  { icon: PenTool, label: "Design", when: "Weeks 2–3" },
  { icon: Code2, label: "Build", when: "Weeks 4–6" },
  { icon: TrendingUp, label: "Grow", when: "Ongoing" },
];

/* How long each step stays active before the next one takes over (ms) */
const STEP_MS = 1800;

/* Steps slide in one after another when the card comes into view */
const stepList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};
const stepItem = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

/* Smooth upward curve for the traffic chart (viewBox 0 0 300 110) */
const CURVE = "M0 96 C 30 92, 55 88, 80 80 S 130 70, 160 56 S 215 38, 245 24 S 285 8, 300 4";

function GrowthPlanVisual() {
  const reduceMotion = useReducedMotion();
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { amount: 0.5 });

  /* Index of the step currently in progress. It walks through the steps one by one,
     marking each finished step done, then pauses on "all done" and starts again. */
  const [active, setActive] = useState(reduceMotion ? 2 : 0);
  useEffect(() => {
    if (reduceMotion || !stepsInView) return;
    const id = setInterval(() => {
      setActive((a) => (a >= planSteps.length ? 0 : a + 1));
    }, STEP_MS);
    return () => clearInterval(id);
  }, [reduceMotion, stepsInView]);
  const draw = reduceMotion
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
      };
  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 1, delay: 0.9 },
      };

  return (
    <div className="relative mx-auto w-full max-w-[480px] sm:px-4 sm:py-6">
      {/* Main plan card */}
      <TiltCard
        max={6}
        scale={1.01}
        className="glass-dark relative rounded-[20px] p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:p-6"
      >
        <div className="flex items-center justify-between">
          <p className="mono text-[11px] uppercase tracking-[0.14em] text-[#B7BEE6]">
            Growth plan · Q1
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-2.5 py-1 text-[12px] font-medium text-[#55C7C7]">
            <span className="live-pulse h-1.5 w-1.5 rounded-full bg-teal" />
            On track
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="display text-[34px] font-semibold leading-none sm:text-[40px]">+248%</p>
            <p className="mt-1.5 text-[13px] text-[#B7BEE6]">Organic traffic since launch</p>
          </div>
          <div className="hidden gap-1.5 pb-1 sm:flex">
            {["3M", "6M", "1Y"].map((t, i) => (
              <span
                key={t}
                className={`mono rounded-[8px] px-2 py-1 text-[11px] ${
                  i === 1 ? "bg-white text-navy" : "bg-white/5 text-[#B7BEE6]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="relative mt-4 h-[84px] sm:h-[110px]">
          <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-px w-full bg-white/[0.07]" />
            ))}
          </div>
          <svg
            viewBox="0 0 300 110"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="planArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#7D66FF" stopOpacity="0.45" />
                <stop offset="1" stopColor="#7D66FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="planLine" x1="0" x2="1">
                <stop offset="0" stopColor="#7D66FF" />
                <stop offset="1" stopColor="#B9A9FF" />
              </linearGradient>
            </defs>
            <motion.path {...fade} d={`${CURVE} L300 110 L0 110 Z`} fill="url(#planArea)" />
            <motion.path
              {...draw}
              d={CURVE}
              fill="none"
              stroke="url(#planLine)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Bright highlight that keeps travelling along the line */}
            <path
              d={CURVE}
              pathLength="1"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="chart-flow"
            />
          </svg>
          <motion.span
            {...fade}
            className="chart-dot absolute -right-1 -top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-purple"
          />
        </div>

        {/* Steps */}
        <motion.ol
          ref={stepsRef}
          variants={reduceMotion ? undefined : stepList}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 grid grid-cols-4 gap-1.5 sm:mt-5 sm:gap-2"
        >
          {planSteps.map(({ icon: Icon, label, when }, i) => {
            const state = i < active ? "done" : i === active ? "active" : "next";
            return (
              <motion.li key={label} variants={reduceMotion ? undefined : stepItem}>
              <motion.div
                animate={state === "active" && !reduceMotion ? { y: -4 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`h-full rounded-[12px] border p-2 transition sm:rounded-[14px] sm:p-3-[background-color,border-color,box-shadow] duration-500 ${
                  state === "active"
                    ? "border-brand-purple/60 bg-brand-purple/20 shadow-[0_12px_30px_-12px_rgba(96,69,255,0.8)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex h-4 items-center justify-between">
                  <Icon
                    className={`h-4 w-4 transition-colors duration-500 ${
                      state === "next" ? "text-white/40" : "text-white"
                    }`}
                    strokeWidth={1.75}
                  />
                  <AnimatePresence mode="wait" initial={false}>
                    {state === "done" && (
                      <motion.span
                        key="done"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 420, damping: 18 }}
                        className="flex h-4 w-4 items-center justify-center rounded-full bg-teal"
                      >
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                      </motion.span>
                    )}
                    {state === "active" && (
                      <motion.span
                        key="active"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="approve-ring h-2.5 w-2.5 rounded-full bg-[#9B85FF]"
                      />
                    )}
                  </AnimatePresence>
                </div>
                <p
                  className={`mt-2 truncate text-[11px] font-semibold transition-colors sm:mt-2.5 sm:text-[13px] duration-500 ${
                    state === "next" ? "text-white/50" : "text-white"
                  }`}
                >
                  {label}
                </p>
                <p className="mono mt-0.5 hidden text-[10px] text-[#8B91C4] sm:block">{when}</p>
                <span className="mt-2 block h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.span
                    key={`${label}-${state}`}
                    className="block h-full rounded-full bg-[#9B85FF]"
                    initial={{ width: state === "active" && !reduceMotion ? "0%" : undefined }}
                    animate={{
                      width: state === "done" ? "100%" : state === "active" ? (reduceMotion ? "70%" : "100%") : "0%",
                    }}
                    transition={{
                      duration: state === "active" && !reduceMotion ? STEP_MS / 1000 : 0.3,
                      ease: "linear",
                    }}
                  />
                </span>
              </motion.div>
              </motion.li>
            );
          })}
        </motion.ol>
      </TiltCard>
    </div>
  );
}

export default function ProvenNumbers() {
  return (
    <section id="proven-numbers" className="relative py-16 sm:py-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Reveal as="p" rotate={0} className="eyebrow">
              Proven numbers
            </Reveal>
            <Reveal
              as="h2"
              delay={0.06}
              className="display mt-3 text-[34px] font-semibold leading-[1.08] text-ink sm:text-[48px]"
            >
              What we&apos;ve helped make happen.
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={0.1}
            rotate={0}
            className="max-w-md text-[17px] leading-[27px] text-ink-soft"
          >
            Every decision is backed by data, every campaign is built to move
            the needle, and every client story is a measurable win.
          </Reveal>
        </div>

        <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={item.title} className="h-full">
                <TiltCard max={5} scale={1.01} className="glass h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-signal-tint text-[#D84E12]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <CountUp
                    value={item.value}
                    className="display mt-6 block text-[46px] font-semibold leading-none text-ink"
                  />
                  <h3 className="mt-4 text-[18px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[23px] text-ink-soft">
                    {item.description}
                  </p>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Dark banner */}
        <Reveal
          y={50}
          className="relative mt-12 overflow-hidden rounded-[24px] bg-navy-deep p-5 text-white sm:mt-16 sm:rounded-[28px] sm:p-10 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(15,163,163,0.35),transparent)]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(96,69,255,0.4),transparent)]"
          />
          <div className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-7 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow !text-[#B7BEE6]">Ready to scale?</p>
              <h2 className="display mt-3 text-[30px] font-semibold leading-[1.1] sm:text-[44px]">
                Let&apos;s build something
                <br />
                extraordinary.
              </h2>
              <p className="mt-4 max-w-md text-[17px] leading-[27px] text-[#B7BEE6]">
                Join the businesses that have transformed their digital presence
                with Growvix.
              </p>
              <div className="-mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:mt-6 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
                {["Web", "Mobile", "SaaS", "SEO", "Meta Ads", "Brand"].map((t) => (
                  <span
                    key={t}
                    className="mono shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] text-[#DADEF3]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="btn-signal mt-6 h-[52px] w-full px-6 text-[16px] sm:mt-8 sm:w-auto"
              >
                Contact us
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </div>
            <Parallax speed={0.08}>
              <GrowthPlanVisual />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
