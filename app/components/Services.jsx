"use client";

import {
  ArrowUp,
  Bell,
  Boxes,
  Check,
  Heart,
  Home,
  Megaphone,
  MessageCircle,
  Monitor,
  Package,
  Palette,
  Search,
  Smartphone,
  Star,
  User,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";

function Tags({ tags, dark = false }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`mono rounded-full px-3 py-1.5 text-[12px] ${
            dark
              ? "border border-white/15 bg-white/5 text-[#DADEF3]"
              : "border border-[rgba(38,45,108,0.08)] bg-white/80 text-[#4A5068]"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function CardHead({ icon: Icon, title, audience, tile, dark = false }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] shadow-[0_14px_30px_-14px_rgba(38,45,108,0.55)] ${tile}`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3
          className={`display text-[22px] font-semibold leading-[1.15] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-1 inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-[12px] font-medium ${
            dark ? "bg-white/10 text-[#B7BEE6]" : "bg-[#EEF0FA] text-navy"
          }`}
        >
          {audience}
        </p>
      </div>
    </div>
  );
}

/* ---------- Web: live site preview with Lighthouse scores ---------- */

function ScoreRing({ value, label, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const r = 17;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative h-11 w-11">
        <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90">
          <circle cx="22" cy="22" r={r} fill="#E6F7F0" stroke="#D2F0E4" strokeWidth="4" />
          <motion.circle
            cx="22"
            cy="22"
            r={r}
            fill="none"
            stroke="#0C9F6B"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={reduceMotion ? false : { strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[12px] font-semibold text-[#0A7F55]">
          {value}
        </span>
      </div>
      <span className="text-[10px] text-ink-soft">{label}</span>
    </div>
  );
}

function WebVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative -mb-9 -mr-9 mt-8 overflow-hidden rounded-tl-[18px] border border-[rgba(38,45,108,0.08)] bg-white shadow-[0_24px_60px_-30px_rgba(38,45,108,0.45)] sm:ml-10 lg:absolute lg:bottom-0 lg:left-[50%] lg:right-0 lg:m-0"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-[rgba(38,45,108,0.06)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="mono ml-3 flex items-center gap-1.5 rounded-full bg-[#F4F5F9] px-3 py-0.5 text-[11px] text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0C9F6B]" />
          yourbrand.com
        </span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#E6F7F0] px-2 py-0.5 text-[10px] font-semibold text-[#0A7F55]">
          <Check className="h-3 w-3" strokeWidth={3} />
          Deployed
        </span>
      </div>

      {/* Site preview */}
      <div className="grid grid-cols-[1.3fr_1fr] gap-4 px-5 pt-4">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-[4px] bg-brand-purple" />
            <span className="h-1.5 w-10 rounded-full bg-ink/70" />
            <span className="ml-auto h-1.5 w-6 rounded-full bg-ink/15" />
            <span className="h-1.5 w-6 rounded-full bg-ink/15" />
          </div>
          <p className="display mt-3 text-[15px] font-semibold leading-[18px] text-ink">
            Fresh coffee,
            <br />
            delivered daily.
          </p>
          <span className="mt-1.5 block h-1.5 w-11/12 rounded-full bg-[#EEF0FA]" />
          <span className="mt-1 block h-1.5 w-3/4 rounded-full bg-[#EEF0FA]" />
          <span className="mt-2.5 inline-flex h-6 items-center rounded-[7px] bg-brand-purple px-2.5 text-[10px] font-semibold text-white">
            Order now
          </span>
        </div>
        <div className="relative overflow-hidden rounded-[12px] bg-[linear-gradient(150deg,#F3F0FF,#E3DCFF_60%,#CFC3FF)]">
          <span className="absolute bottom-2 left-1/2 h-12 w-9 -translate-x-1/2 rounded-b-[12px] rounded-t-[5px] bg-white/90 shadow-[0_10px_20px_-10px_rgba(38,45,108,0.5)]" />
          <span className="absolute bottom-[58px] left-1/2 h-2 w-11 -translate-x-1/2 rounded-full bg-brand-purple/80" />
        </div>
      </div>

      {/* Lighthouse scores */}
      <div className="mt-4 flex items-center justify-between border-t border-[rgba(38,45,108,0.06)] bg-[#FBFAFF] px-5 py-3">
        <span className="mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
          Lighthouse
        </span>
        <div className="flex gap-3">
          <ScoreRing value={98} label="Speed" />
          <ScoreRing value={100} label="SEO" delay={0.12} />
          <ScoreRing value={100} label="Access" delay={0.24} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile: app screen with push notification ---------- */

function MobileVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-6 h-[300px] sm:h-[330px] lg:absolute lg:bottom-0 lg:right-8 lg:mt-0 lg:h-[80%] lg:w-[190px]"
    >
      {/* Push notification */}
      <div className="float-soft absolute left-1/2 top-2 z-20 flex w-[210px] -translate-x-1/2 items-center gap-2 rounded-[14px] border border-white bg-white/90 p-2 shadow-[0_16px_30px_-14px_rgba(38,45,108,0.5)] backdrop-blur lg:-right-5 lg:left-auto lg:-top-3 lg:translate-x-0">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-brand-purple text-white">
          <Bell className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-ink">New order received</p>
          <p className="truncate text-[10px] text-ink-soft">2 lattes · ৳ 480 · just now</p>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute -bottom-[60px] left-1/2 w-[170px] -translate-x-1/2 overflow-hidden rounded-[30px] border-[5px] border-white bg-[#FBFAFF] shadow-[0_24px_50px_-24px_rgba(38,45,108,0.6)] lg:-bottom-[40px] lg:left-auto lg:right-0 lg:w-[180px] lg:translate-x-0 lg:rotate-[4deg]">
        <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-ink/10" />
        <div className="space-y-2 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold text-ink">Hi, Sara 👋</p>
            <span className="h-6 w-6 rounded-full bg-[linear-gradient(135deg,#9B85FF,#6045FF)]" />
          </div>
          <div className="rounded-[14px] bg-[linear-gradient(135deg,#7A63FF,#4A2FE6)] p-3 text-white">
            <p className="flex items-center gap-1 text-[10px] opacity-85">
              <Package className="h-3 w-3" /> Order #2481
            </p>
            <p className="mt-0.5 text-[13px] font-semibold">Arriving in 12 min</p>
            <span className="mt-2 block h-1 overflow-hidden rounded-full bg-white/25">
              <span className="block h-full w-2/3 rounded-full bg-white" />
            </span>
          </div>
          {[
            ["Cappuccino", "৳ 220"],
            ["Croissant", "৳ 160"],
          ].map(([name, price]) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-[10px] bg-white px-2 py-1.5 shadow-[0_4px_10px_-6px_rgba(38,45,108,0.3)]"
            >
              <span className="h-6 w-6 rounded-[7px] bg-[#F3F0FF]" />
              <span className="text-[11px] font-medium text-ink">{name}</span>
              <span className="ml-auto text-[10px] text-ink-soft">{price}</span>
            </div>
          ))}
          <div className="flex justify-around rounded-[12px] bg-white py-2 text-ink-faint">
            <Home className="h-3.5 w-3.5 text-brand-purple" />
            <Search className="h-3.5 w-3.5" />
            <Heart className="h-3.5 w-3.5" />
            <User className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      {/* Store rating */}
      <div className="absolute bottom-4 left-0 z-20 hidden items-center gap-1.5 rounded-full border border-white bg-white/90 px-3 py-1.5 shadow-[0_12px_24px_-12px_rgba(38,45,108,0.5)] lg:-left-20 lg:flex">
        <Star className="h-3.5 w-3.5 fill-[#FEBC2E] text-[#FEBC2E]" />
        <span className="text-[12px] font-semibold text-ink">4.9</span>
        <span className="text-[11px] text-ink-soft">App Store</span>
      </div>
    </div>
  );
}

/* ---------- SaaS: MRR, plan mix and uptime ---------- */

const UPTIME = Array.from({ length: 30 }, (_, i) => (i === 17 ? "warn" : "ok"));

function SaasVisual() {
  return (
    <div aria-hidden="true" className="mt-6 rounded-[16px] border border-[rgba(38,45,108,0.07)] bg-white p-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">MRR</p>
          <p className="display mt-0.5 text-[22px] font-semibold leading-none text-ink">$48.2k</p>
        </div>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-[#E6F7F0] px-2 py-0.5 text-[11px] font-semibold text-[#0A7F55]">
          <ArrowUp className="h-3 w-3" strokeWidth={3} />
          12%
        </span>
      </div>
      <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="mt-2 h-9 w-full">
        <defs>
          <linearGradient id="mrrFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0FA3A3" stopOpacity="0.3" />
            <stop offset="1" stopColor="#0FA3A3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 34 C 25 32, 40 28, 60 27 S 100 20, 120 18 S 165 8, 200 4 L200 40 L0 40 Z" fill="url(#mrrFill)" />
        <path d="M0 34 C 25 32, 40 28, 60 27 S 100 20, 120 18 S 165 8, 200 4" fill="none" stroke="#0FA3A3" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="mt-2 flex h-1.5 overflow-hidden rounded-full">
        <span className="w-[22%] bg-[#BFEAEA]" />
        <span className="w-[53%] bg-teal" />
        <span className="w-[25%] bg-navy" />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-ink-soft">
        <span>Starter</span>
        <span>Pro</span>
        <span>Team</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink">Uptime</span>
        <span className="mono text-[11px] text-[#0A7F55]">99.98%</span>
      </div>
      <div className="mt-1.5 flex gap-[3px]">
        {UPTIME.map((s, i) => (
          <span
            key={i}
            className={`h-4 flex-1 rounded-[2px] ${s === "ok" ? "bg-[#34C38F]" : "bg-[#FEBC2E]"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- SEO: search result at #1 and climbing keywords ---------- */

function SeoVisual() {
  return (
    <div aria-hidden="true" className="mt-6 rounded-[16px] border border-[rgba(38,45,108,0.07)] bg-white p-4">
      <div className="flex h-8 items-center gap-2 rounded-full border border-[rgba(38,45,108,0.1)] px-3 text-[12px] text-ink">
        <Search className="h-3.5 w-3.5 text-ink-faint" />
        web design agency
      </div>
      <div className="relative mt-3 rounded-[12px] bg-[#F7F5FF] p-3">
        <span className="absolute right-2.5 top-2.5 rounded-full bg-brand-purple px-2 py-0.5 text-[10px] font-semibold text-white">
          #1
        </span>
        <p className="flex items-center gap-1.5 text-[10px] text-ink-soft">
          <span className="h-3.5 w-3.5 rounded-full bg-brand-purple" />
          yourbrand.com
        </p>
        <p className="mt-1 text-[13px] font-medium text-[#1A0DAB]">Award-winning web design studio</p>
        <span className="mt-1.5 block h-1.5 w-11/12 rounded-full bg-[#E3E0F2]" />
        <span className="mt-1 block h-1.5 w-2/3 rounded-full bg-[#E3E0F2]" />
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          ["web design agency", 14, 1],
          ["seo services", 9, 3],
        ].map(([kw, from, to]) => (
          <div key={kw} className="flex items-center gap-2 text-[11px]">
            <span className="text-ink">{kw}</span>
            <span className="mono ml-auto text-ink-faint">{from}</span>
            <span className="text-ink-faint">→</span>
            <span className="mono inline-flex items-center gap-0.5 font-semibold text-[#0A7F55]">
              <ArrowUp className="h-3 w-3" strokeWidth={3} />
              {to}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Social ads: sponsored post and results ---------- */

function AdsVisual() {
  return (
    <div aria-hidden="true" className="mt-6 overflow-hidden rounded-[16px] border border-[rgba(38,45,108,0.07)] bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="h-7 w-7 rounded-full bg-[linear-gradient(135deg,#E2457A,#7A63FF)]" />
        <div>
          <p className="text-[11px] font-semibold text-ink">Your Brand</p>
          <p className="text-[10px] text-ink-faint">Sponsored</p>
        </div>
      </div>
      <div className="relative h-[92px] bg-[linear-gradient(135deg,#FDEEF4,#F3F0FF_60%,#E3DCFF)]">
        <span className="absolute left-4 top-4 rounded-[8px] bg-white/85 px-2 py-1 text-[11px] font-semibold text-ink">
          30% off this week
        </span>
        <span className="absolute bottom-3 right-6 h-14 w-14 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff,#C9BEFF_45%,#7A63FF)] shadow-[0_12px_24px_-10px_rgba(74,47,230,0.6)]" />
      </div>
      <div className="flex items-center justify-between border-b border-[rgba(38,45,108,0.06)] px-3 py-2">
        <div className="flex gap-2.5 text-ink-soft">
          <Heart className="h-3.5 w-3.5 fill-[#E2457A] text-[#E2457A]" />
          <MessageCircle className="h-3.5 w-3.5" />
        </div>
        <span className="rounded-[6px] bg-[#E2457A] px-2.5 py-1 text-[10px] font-semibold text-white">
          Shop now
        </span>
      </div>
      <div className="grid grid-cols-3 divide-x divide-[rgba(38,45,108,0.06)] text-center">
        {[
          ["CTR", "4.2%"],
          ["CPC", "$0.38"],
          ["ROAS", "3.4x"],
        ].map(([k, v]) => (
          <div key={k} className="py-2">
            <p className="mono text-[9px] uppercase tracking-[0.12em] text-ink-faint">{k}</p>
            <p className="text-[13px] font-semibold text-ink">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Brand: type, palette and logo usage ---------- */

function LogoMark({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      <path d="M16 3 27 9.5v13L16 29 5 22.5v-13z" fill="currentColor" />
      <path d="M16 10.5 21.5 14v6L16 23.5 10.5 20v-6z" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function BrandVisual() {
  const palette = [
    ["#6045FF", "Primary"],
    ["#9B85FF", "Soft"],
    ["#0FA3A3", "Accent"],
    ["#13173B", "Ink"],
    ["#FBF8F4", "Canvas"],
  ];
  return (
    <div aria-hidden="true" className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
      {/* Type specimen */}
      <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
        <p className="mono text-[10px] uppercase tracking-[0.14em] text-[#8B91C4]">Typeface</p>
        <p className="display mt-1 text-[56px] font-semibold leading-none text-white">Aa</p>
        <p className="mt-2 text-[13px] font-medium text-white">Outfit</p>
        <p className="mono mt-0.5 text-[10px] text-[#8B91C4]">Regular · Medium · Semibold</p>
      </div>
      <div className="space-y-3">
        {/* Palette */}
        <div className="flex gap-1.5">
          {palette.map(([c, name]) => (
            <div key={c} className="flex-1">
              <span
                style={{ background: c }}
                className="block h-12 rounded-[10px] border border-white/15"
              />
              <p className="mt-1 text-[10px] text-[#B7BEE6]">{name}</p>
            </div>
          ))}
        </div>
        {/* Logo on light and dark */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex h-[72px] items-center justify-center gap-2 rounded-[12px] bg-[#FBF8F4] text-brand-purple">
            <LogoMark className="h-7 w-7" />
            <span className="display text-[15px] font-semibold text-ink">brand</span>
          </div>
          <div className="flex h-[72px] items-center justify-center gap-2 rounded-[12px] bg-brand-purple text-white">
            <LogoMark className="h-7 w-7" />
            <span className="display text-[15px] font-semibold">brand</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const smallCards = [
  {
    icon: Boxes,
    title: "SaaS Products",
    audience: "Startups and enterprises",
    text: "End-to-end product engineering to build, launch and scale subscription software.",
    tags: ["Cloud", "CI/CD", "DevOps"],
    tile: "bg-teal text-white",
    Visual: SaasVisual,
  },
  {
    icon: Search,
    title: "SEO & Content",
    audience: "Organic growth",
    text: "Data-driven SEO and content that lift rankings, traffic and conversions.",
    tags: ["Technical SEO", "Content", "Analytics"],
    tile: "bg-brand-purple text-white",
    Visual: SeoVisual,
  },
  {
    icon: Megaphone,
    title: "Social Ads",
    audience: "Paid performance",
    text: "Targeted Meta and Instagram campaigns, tuned every week to maximise ROAS.",
    tags: ["Meta Ads", "Retargeting", "Creative"],
    tile: "bg-[#E2457A] text-white",
    Visual: AdsVisual,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal as="p" rotate={0} className="eyebrow">
            One team, every discipline
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="display mt-3 text-[34px] font-semibold leading-[1.08] text-ink sm:text-[48px]"
          >
            Everything you need to <span className="accent">scale.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            rotate={0}
            className="mt-4 text-[17px] leading-[27px] text-ink-soft"
          >
            From product development to market leadership, every service
            shares one strategy, one team and one set of numbers.
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* Web */}
          <RevealItem className="md:col-span-2 lg:col-span-7">
            <article className="glass relative h-full overflow-hidden !rounded-[28px] p-7 sm:p-9 lg:min-h-[460px]">
              <CardHead
                icon={Monitor}
                title="Web Development"
                audience="Websites and web apps"
                tile="bg-navy text-white"
              />
              <p className="mt-4 max-w-[300px] text-[15px] leading-[24px] text-ink-soft lg:max-w-[290px]">
                Custom websites and web applications on modern frameworks. From
                landing pages to complex platforms, built fast and built to
                scale.
              </p>
              <div className="lg:max-w-[300px]">
                <Tags tags={["React", "Next.js", "Node.js", "API"]} />
              </div>
              <WebVisual />
            </article>
          </RevealItem>

          {/* Mobile */}
          <RevealItem className="md:col-span-2 lg:col-span-5">
            <article className="relative h-full overflow-hidden rounded-[28px] border border-white bg-[linear-gradient(160deg,#F3F0FF_0%,#E6E0FF_55%,#CFC3FF_100%)] p-7 shadow-[0_14px_36px_rgba(60,42,20,0.08)] sm:p-9 lg:min-h-[460px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(96,69,255,0.35),transparent)] blur-[2px]"
              />
              <div className="relative lg:max-w-[calc(100%-200px)]">
                <CardHead
                  icon={Smartphone}
                  title="Mobile Apps"
                  audience="iOS and Android"
                  tile="bg-brand-purple text-white"
                />
                <p className="mt-4 text-[15px] leading-[24px] text-ink-soft">
                  Native and cross-platform apps people keep opening. Designed
                  and built to drive engagement and revenue.
                </p>
                <Tags tags={["React Native", "Flutter"]} />
              </div>
              <MobileVisual />
            </article>
          </RevealItem>

          {/* SaaS / SEO / Ads */}
          {smallCards.map(({ Visual, ...s }, i) => (
            <RevealItem
              key={s.title}
              className={i === 2 ? "md:col-span-2 lg:col-span-4" : "lg:col-span-4"}
            >
              <article className="glass card-hover flex h-full flex-col !rounded-[24px] p-7">
                <CardHead icon={s.icon} title={s.title} audience={s.audience} tile={s.tile} />
                <p className="mt-4 text-[15px] leading-[24px] text-ink-soft">{s.text}</p>
                <Tags tags={s.tags} />
                <div className="mt-auto">
                  <Visual />
                </div>
              </article>
            </RevealItem>
          ))}

          {/* Brand — dark */}
          <RevealItem className="md:col-span-2 lg:col-span-12">
            <article className="relative h-full overflow-hidden rounded-[28px] bg-navy-deep p-7 text-white sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(96,69,255,0.45),transparent)]"
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <CardHead
                    icon={Palette}
                    title="Brand Strategy & Design"
                    audience="Identity and UI/UX"
                    tile="bg-white text-navy"
                    dark
                  />
                  <p className="mt-4 max-w-[480px] text-[15px] leading-[24px] text-[#B7BEE6]">
                    A brand identity your audience remembers. From logos to full
                    design systems, we make your business unforgettable.
                  </p>
                  <Tags dark tags={["Branding", "UI/UX", "Identity", "Design System"]} />
                </div>
                <BrandVisual />
              </div>
            </article>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
