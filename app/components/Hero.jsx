"use client";

import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Megaphone,
  PenTool,
  Sparkles,
} from "lucide-react";
import Reveal from "./motion/Reveal";

const pulse = [
  {
    icon: PenTool,
    text: "Design sprint wrapped. Wireframes ready for review.",
  },
  { icon: Code2, text: "Next.js build shipped to staging for QA." },
  { icon: Megaphone, text: "Launch ads drafted for Meta and Google." },
];

const squad = [
  "/members/member1.webp",
  "/members/member2.webp",
  "/members/member3.webp",
  "/members/member4.webp",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 sm:pb-24"
    >
      <div className="hero-bg" aria-hidden="true" />

      {/* Text fills the first screen under the navbar and sits in its centre */}
      <div className="container-x relative flex min-h-[60vh] flex-col items-center justify-center sm:min-h-[100svh] pb-6 pt-[96px] text-center">
        <Reveal
          as="p"
          y={16}
          rotate={0}
          className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/80 py-1.5 pl-1.5 pr-4 shadow-[0_8px_24px_-12px_rgba(60,42,20,0.25)] backdrop-blur"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(180deg,#F67D41,#D84E12)] text-white"
            aria-hidden="true"
          >
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="text-[15px] font-semibold text-navy">
            Digital growth studio
          </span>
          <span className="hidden text-[15px] text-ink-soft sm:inline">
            · design, build, market
          </span>
        </Reveal>

        <Reveal
          as="h1"
          delay={0.06}
          y={36}
          className="display mx-auto mt-6 max-w-[1000px] text-[46px] font-semibold leading-[1] text-ink sm:text-[72px] lg:text-[92px]"
        >
          Next-Gen Digital
          <br />
          <span className="accent">Built to Grow</span>
        </Reveal>

        <Reveal
          as="p"
          delay={0.14}
          y={24}
          rotate={0}
          className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[27px] text-ink-soft sm:text-[19px] sm:leading-[30px]"
        >
          Growvix designs, develops and markets your business, so you can focus
          on growth. Web, mobile, SaaS, SEO and ads from one team.
        </Reveal>

        <Reveal
          delay={0.2}
          y={20}
          rotate={0}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#contact" className="btn-signal h-[52px] px-6 text-[16px]">
            Start a project
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </Reveal>

      </div>

      {/* Visual stage */}
      <div className="container-x relative">
        <Reveal y={50} rotate={10} className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-white shadow-[0_30px_80px_-40px_rgba(60,42,20,0.45)]">
            <Image
              src="/hero-devices.webp"
              alt="Glass laptop and smartphone floating with glass cubes and a rising growth arrow on a purple gradient"
              width={1792}
              height={768}
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[4/3] w-full object-cover object-[72%_50%] md:aspect-[1792/768]"
            />
          </div>

          {/* Project pulse card */}
          <div className="glass relative z-10 hidden p-6 text-left md:absolute md:left-[4%] md:top-[12%] md:block md:w-[46%] lg:w-[40%]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6a3dfc,#F67D41)] text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <p className="mono text-[11px] uppercase leading-[16px] tracking-[0.14em] text-violet-ink">
                Project pulse · Monday
                <br />
                <span className="text-ink-faint">
                  One squad, every discipline
                </span>
              </p>
            </div>
            <p className="display mt-4 text-[20px] font-semibold leading-[27px] text-ink sm:text-[23px] sm:leading-[30px]">
              Design, build and launch move together. You see progress every
              week, not every quarter.
            </p>
            <ul className="mt-4 space-y-2">
              {pulse.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-[12px] border border-[rgba(38,45,108,0.07)] bg-white/70 px-3 py-2.5 text-[14px] text-ink"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-brand-purple"
                    strokeWidth={1.75}
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Squad card */}
          <div className="glass glass-strong float-soft relative z-20 mx-4 -mt-14 p-4 text-left sm:mx-auto sm:max-w-[360px] md:absolute md:-bottom-10 md:right-[5%] md:m-0 md:w-[340px]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {squad.map((src) => (
                  <span
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-ink">
                  Your dedicated squad
                </p>
                <p className="text-[12px] text-ink-faint">
                  Strategy · design · code · ads
                </p>
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-[21px] text-ink">
              Share your goals once. One team plans, builds and markets it end
              to end.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="#services"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-[10px] border border-[rgba(38,45,108,0.12)] bg-white text-[14px] font-medium text-navy transition-colors hover:bg-violet-tint"
              >
                Services
              </a>
              <a
                href="#contact"
                className="btn-signal approve-ring h-10 flex-1 !rounded-[10px] text-[14px]"
              >
                Say hello
              </a>
            </div>
          </div>
        </Reveal>
        <p className="mt-16 text-center text-[13px] text-ink-faint md:mt-16">
          Trusted by 30+ clients in 8+ countries since 2021.
        </p>
      </div>
    </section>
  );
}
