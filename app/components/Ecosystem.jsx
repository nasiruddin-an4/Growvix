"use client";

import { Code2, Compass, GraduationCap, Palette, ShoppingBag, TrendingUp } from "lucide-react";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";
import TiltCard from "./motion/TiltCard";

const wins = [
  {
    icon: GraduationCap,
    value: "200%",
    label: "More course enrolments",
    sector: "EdTech",
    quote:
      "We were stuck. Then they stepped in, fixed our funnel, and nailed the retargeting.",
    tint: "bg-violet-tint text-brand-purple",
  },
  {
    icon: ShoppingBag,
    value: "70%",
    label: "Revenue up in one quarter",
    sector: "E-commerce",
    quote:
      "Sales were flat. Then their smarter strategy and better ads took over, and revenue climbed within a single quarter.",
    tint: "bg-signal-tint text-[#D84E12]",
  },
];

const pillars = [
  { icon: Compass, label: "Strategy" },
  { icon: Code2, label: "Technology" },
  { icon: Palette, label: "Creative" },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)] items-start gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <Reveal as="p" rotate={0} className="eyebrow">
            Our ecosystem
          </Reveal>
          <Reveal
            as="h2"
            id="ecosystem-heading"
            delay={0.06}
            className="display mt-3 text-[30px] font-semibold leading-[1.08] text-ink sm:text-[48px]"
          >
            We don&apos;t just market brands.
            <br />
            <span className="accent">We engineer growth.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            rotate={0}
            className="mt-4 max-w-[520px] text-[16px] leading-[26px] text-ink-soft sm:mt-5 sm:text-[17px] sm:leading-[27px]"
          >
            Strategy, technology and creative live under one roof, so every
            brand we work with gets a 360° growth experience instead of a
            hand-off between agencies.
          </Reveal>
          <Reveal delay={0.16} rotate={0} className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {pillars.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white bg-white/80 px-3 py-1.5 text-[13px] font-medium text-navy shadow-[0_6px_16px_-10px_rgba(38,45,108,0.35)]"
              >
                <Icon className="h-3.5 w-3.5 text-brand-purple" strokeWidth={2} />
                {label}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Phones: swipe between the cards, the next one peeks in. Larger screens: two-column grid. */}
        <RevealGroup className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {wins.map(({ icon: Icon, value, label, sector, quote, tint }) => (
            <RevealItem key={value} className="h-auto w-[84%] shrink-0 snap-start sm:h-full sm:w-auto">
              <TiltCard max={5} scale={1.01} className="glass h-full p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${tint}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="mono rounded-full bg-white/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                    {sector}
                  </span>
                </div>
                <p className="display mt-5 flex items-baseline gap-2 text-[44px] font-semibold leading-none text-ink sm:mt-6 sm:text-[52px]">
                  {value}
                  <TrendingUp className="h-6 w-6 text-teal" aria-hidden="true" />
                </p>
                <h3 className="mt-2 text-[17px] font-semibold text-ink">{label}</h3>
                <p className="mt-4 border-t border-[rgba(38,45,108,0.08)] pt-4 text-[14px] leading-[22px] text-ink-soft sm:text-[15px] sm:leading-[23px]">
                  &ldquo;{quote}&rdquo;
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
