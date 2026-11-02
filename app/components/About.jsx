"use client";

import { Award } from "lucide-react";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";
import TiltCard from "./motion/TiltCard";

const values = [
  {
    title: "Innovation first",
    desc: "We stay ahead of technology trends to give you a competitive edge.",
  },
  {
    title: "Client partnership",
    desc: "Your success is our success. We build long-term relationships.",
  },
  {
    title: "Results driven",
    desc: "Every decision is backed by data and measured by outcomes.",
  },
  {
    title: "Quality and security",
    desc: "Enterprise-grade code with security best practices built in.",
  },
];

const quickStats = [
  { value: "50+", label: "Projects completed" },
  { value: "30+", label: "Happy clients" },
  { value: "15+", label: "Team members" },
  { value: "8+", label: "Countries served" },
];

const disciplines = [
  { tag: "01", label: "Strategy", cls: "bg-teal-tint text-teal-ink" },
  { tag: "02", label: "Design", cls: "bg-[#EEF0FA] text-navy" },
  { tag: "03", label: "Engineering", cls: "bg-violet-tint text-violet-ink" },
  { tag: "04", label: "Marketing", cls: "bg-signal-tint text-[#B33D0E]" },
];

export default function About() {
  return (
    <section
      id="about"
      className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28"
    >
      <div>
        <Reveal as="p" rotate={0} className="eyebrow">
          About Growvix
        </Reveal>
        <Reveal
          as="h2"
          delay={0.06}
          className="display mt-3 text-[34px] font-semibold leading-[1.08] text-ink sm:text-[48px]"
        >
          A team obsessed
          <br />
          <span className="accent">with your growth.</span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          rotate={0}
          className="mt-5 max-w-[560px] text-[17px] leading-[27px] text-ink-soft"
        >
          Growvix was founded to help businesses unlock their digital
          potential. Developers, designers and marketing strategists work as one
          team, so every project becomes a growth engine.
        </Reveal>

        <RevealGroup className="mt-10 space-y-6">
          {values.map((v, i) => (
            <RevealItem key={v.title} className="flex gap-4">
              <span className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-[16px] font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-1 text-[15px] leading-[23px] text-ink-soft">{v.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal y={40}>
        <TiltCard max={5} scale={1.01} className="glass relative !rounded-[28px] p-5 sm:p-8">
          <p className="mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            Growvix at a glance
          </p>

          <div className="mt-4 rounded-[18px] border border-[rgba(38,45,108,0.07)] bg-white p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-tint text-brand-purple">
                <Award className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="display text-[40px] font-semibold leading-none text-ink">
                  5+ <span className="text-[18px] font-medium text-ink-soft">years</span>
                </p>
                <p className="mt-1 text-[13px] text-ink-faint">
                  Building digital solutions since 2021
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {quickStats.map((s) => (
                <div key={s.label} className="rounded-[12px] bg-[#F4F5F9] px-4 py-3">
                  <p className="display text-[26px] font-semibold leading-tight text-ink">
                    {s.value}
                  </p>
                  <p className="mono text-[11px] text-[#4A5068]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-[14px] font-medium text-ink">
            Every project runs through four disciplines
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {disciplines.map((d) => (
              <span key={d.tag} className={`rounded-[12px] px-3 py-2.5 text-[14px] ${d.cls}`}>
                <span className="mono font-semibold">{d.tag}</span> {d.label}
              </span>
            ))}
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}
