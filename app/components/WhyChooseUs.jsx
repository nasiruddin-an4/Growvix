"use client";

import {
  BarChart3,
  CheckCircle2,
  Clock,
  Headphones,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";
import TiltCard from "./motion/TiltCard";

const reasons = [
  {
    icon: Clock,
    title: "Fast turnaround",
    description:
      "We deliver on time, every time. Agile workflows keep things moving without cutting corners.",
  },
  {
    icon: ShieldCheck,
    title: "Battle-tested code",
    description:
      "Thorough testing, code reviews and security best practices on every release.",
  },
  {
    icon: CheckCircle2,
    title: "Proven results",
    description:
      "Clients see an average ROI above 200%. We focus on the metrics that matter.",
  },
  {
    icon: Users,
    title: "Dedicated team",
    description:
      "Experts who learn your business and work as an extension of your own team.",
  },
  {
    icon: BarChart3,
    title: "Data-driven strategy",
    description:
      "Every decision is backed by analytics, so your budget goes where it performs.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description:
      "We don't disappear after launch. Round-the-clock support as you grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-growvix" className="relative py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[24px] border border-white bg-[linear-gradient(170deg,#FFF7EF_0%,#F3F0FF_60%,#EEF0FA_100%)] px-4 py-8 shadow-[0_14px_36px_rgba(26,18,89,0.08)] sm:rounded-[32px] sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[60%] w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(96,69,255,0.14),rgba(96,69,255,0.08),transparent)] blur-2xl"
          />
          <div className="relative mx-auto max-w-[720px] text-center">
            <Reveal as="p" rotate={0} className="eyebrow">
              Why Growvix
            </Reveal>
            <Reveal
              as="h2"
              delay={0.06}
              className="display mt-3 text-[28px] font-semibold leading-[1.1] text-ink sm:text-[48px] sm:leading-[1.08]"
            >
              We do the heavy lifting.
              <br />
              <span className="accent">You make the calls.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={0.12}
              rotate={0}
              className="mt-3 text-[15px] leading-[24px] text-ink-soft sm:mt-4 sm:text-[17px] sm:leading-[27px]"
            >
              We partner with you to create digital experiences that drive real
              business outcomes, not just deliverables.
            </Reveal>
          </div>

          <RevealGroup className="relative mt-8 grid gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <RevealItem key={title} className="h-full">
                <TiltCard max={5} scale={1.01} className="glass h-full !rounded-[18px] p-4 sm:!rounded-[22px] sm:p-6">
                  {/* Phones: icon beside the text in a compact row. Larger screens: stacked card. */}
                  <div className="flex items-start gap-3.5 sm:block">
                    <div className="flex shrink-0 items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-signal-tint text-[#4A2FE6] sm:h-11 sm:w-11">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="mono hidden text-[12px] text-ink-faint sm:inline">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="display text-[17px] font-semibold leading-[1.25] text-ink sm:mt-5 sm:text-[20px]">
                        {title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-[21px] text-ink-soft sm:mt-2 sm:text-[15px] sm:leading-[23px]">
                        {description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
