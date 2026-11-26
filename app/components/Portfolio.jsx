"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarClock,
  HeartPulse,
  MapPin,
  Play,
  ShoppingBag,
  TrendingUp,
  View,
} from "lucide-react";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";
import TiltCard from "./motion/TiltCard";

/* Shared shell for the product previews: a small window that peeks up from
   the bottom of the card header and lifts a little on hover. */
function Screen({ children, className = "w-[78%]" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden rounded-t-[14px] border border-white bg-white pb-1 shadow-[0_20px_40px_-18px_rgba(26,18,89,0.45)] transition-transform duration-500 group-hover:-translate-y-1.5 ${className}`}
    >
      {children}
    </div>
  );
}

function Bar({ w = "w-1/2", tone = "bg-[#EFEDFB]" }) {
  return <span className={`block h-1.5 rounded-full ${w} ${tone}`} />;
}

/* FinFlow — banking dashboard */
function FinFlowPreview() {
  return (
    <Screen>
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] text-ink-faint">Total balance</p>
            <p className="display text-[17px] font-semibold leading-tight text-ink">$84,250.00</p>
          </div>
          <span className="rounded-full bg-[#E6F7F0] px-1.5 py-0.5 text-[9px] font-semibold text-[#0A7F55]">
            +8.4%
          </span>
        </div>
        <svg viewBox="0 0 200 36" preserveAspectRatio="none" className="mt-1.5 h-8 w-full">
          <path
            d="M0 30 C 20 28, 35 22, 55 24 S 90 14, 110 16 S 150 6, 200 4 L200 36 L0 36Z"
            fill="#6045FF"
            opacity="0.12"
          />
          <path
            d="M0 30 C 20 28, 35 22, 55 24 S 90 14, 110 16 S 150 6, 200 4"
            fill="none"
            stroke="#6045FF"
            strokeWidth="2"
          />
        </svg>
        {[
          ["Stripe payout", "+$1,200", true],
          ["AWS invoice", "−$320", false],
        ].map(([name, amt, inc]) => (
          <div key={name} className="mt-1.5 flex items-center gap-2 rounded-[8px] bg-[#F7F6FC] px-2 py-1.5">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                inc ? "bg-[#E6F7F0] text-[#0A7F55]" : "bg-[#FDEEF4] text-[#C2185B]"
              }`}
            >
              {inc ? <ArrowDownLeft className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
            </span>
            <span className="text-[10px] font-medium text-ink">{name}</span>
            <span className={`ml-auto text-[10px] font-semibold ${inc ? "text-[#0A7F55]" : "text-ink"}`}>
              {amt}
            </span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* ShopLift — storefront */
function ShopLiftPreview() {
  const items = [
    ["from-[#E3DCFF] to-[#A794FF]", "$48"],
    ["from-[#E3DCFF] to-[#B9A9FF]", "$72"],
    ["from-[#CDEFEF] to-[#8FD6D6]", "$36"],
  ];
  return (
    <Screen>
      <div className="flex items-center justify-between border-b border-[rgba(26,18,89,0.06)] px-3 py-2">
        <span className="display text-[11px] font-semibold text-ink">shoplift</span>
        <span className="relative text-ink">
          <ShoppingBag className="h-3.5 w-3.5" />
          <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#6045FF] text-[7px] font-bold text-white">
            3
          </span>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {items.map(([g, price], i) => (
          <div key={price}>
            <div className={`relative h-14 rounded-[8px] bg-linear-to-br ${g}`}>
              <span className="absolute bottom-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-[6px] bg-white/80" />
            </div>
            <div className="mt-1 flex items-center justify-between">
              <Bar w="w-8" />
              <span className="text-[9px] font-semibold text-ink">{price}</span>
            </div>
            {i === 1 && (
              <span className="mt-1 block rounded-[5px] bg-ink py-0.5 text-center text-[8px] font-semibold text-white">
                Add to cart
              </span>
            )}
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* MediCare — health app on a phone */
function MediCarePreview() {
  return (
    <Screen className="w-[46%] !rounded-t-[22px] border-[4px]">
      <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-ink/10" />
      <div className="space-y-1.5 p-2.5">
        <div className="rounded-[10px] bg-[linear-gradient(135deg,#14B8A6,#0F8F8F)] p-2 text-white">
          <p className="flex items-center gap-1 text-[8px] opacity-90">
            <HeartPulse className="h-2.5 w-2.5" /> Heart rate
          </p>
          <p className="text-[14px] font-semibold leading-tight">
            72 <span className="text-[8px] font-normal opacity-80">bpm</span>
          </p>
          <svg viewBox="0 0 100 20" className="mt-0.5 h-4 w-full">
            <path
              d="M0 12 L22 12 L28 4 L34 18 L40 8 L46 12 L70 12 L75 6 L80 15 L84 12 L100 12"
              fill="none"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-1.5 rounded-[8px] bg-[#F1FAF9] p-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CDEFEF] text-teal-ink">
            <CalendarClock className="h-3 w-3" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[8px] font-semibold text-ink">Dr. Rahman</p>
            <p className="text-[7px] text-ink-faint">Today · 10:30</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-[8px] bg-[#F7F6FC] p-1.5">
            <p className="text-[7px] text-ink-faint">Steps</p>
            <p className="text-[10px] font-semibold text-ink">8,204</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F6FC] p-1.5">
            <p className="text-[7px] text-ink-faint">Sleep</p>
            <p className="text-[10px] font-semibold text-ink">7h 40m</p>
          </div>
        </div>
      </div>
    </Screen>
  );
}

/* PropVista — property listing */
function PropVistaPreview() {
  return (
    <Screen>
      <div className="relative h-[70px] bg-[linear-gradient(180deg,#C9D3F5,#E9EDFB)]">
        {/* simple house */}
        <svg viewBox="0 0 120 60" className="absolute bottom-0 left-1/2 h-[58px] -translate-x-1/2">
          <rect x="0" y="52" width="120" height="8" fill="#9FD3A8" />
          <path d="M28 30 L60 8 L92 30 Z" fill="#2A1A8F" />
          <rect x="34" y="28" width="52" height="26" fill="#FFFFFF" />
          <rect x="54" y="38" width="12" height="16" fill="#6045FF" />
          <rect x="39" y="33" width="10" height="9" fill="#BFD0FF" />
          <rect x="71" y="33" width="10" height="9" fill="#BFD0FF" />
        </svg>
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-1.5 py-0.5 text-[8px] font-semibold text-navy">
          <View className="h-2.5 w-2.5" /> 3D tour
        </span>
      </div>
      <div className="p-2.5">
        <div className="flex items-center justify-between">
          <p className="display text-[14px] font-semibold text-ink">$420,000</p>
          <span className="inline-flex items-center gap-0.5 text-[8px] text-ink-faint">
            <MapPin className="h-2.5 w-2.5 text-brand-purple" /> Gulshan
          </span>
        </div>
        <div className="mt-1 flex gap-2.5 text-[8px] text-ink-soft">
          <span className="inline-flex items-center gap-0.5">
            <BedDouble className="h-2.5 w-2.5" /> 3 bd
          </span>
          <span className="inline-flex items-center gap-0.5">
            <Bath className="h-2.5 w-2.5" /> 2 ba
          </span>
          <span>1,450 ft²</span>
        </div>
      </div>
    </Screen>
  );
}

/* Meridian — campaign performance report */
function MeridianPreview() {
  const funnel = [
    ["Reach", "1.2M", "w-full"],
    ["Clicks", "48K", "w-[62%]"],
    ["Sales", "2.1K", "w-[34%]"],
  ];
  return (
    <Screen>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="mono text-[8px] uppercase tracking-[0.12em] text-ink-faint">Campaign · Spring</p>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-[#FDEEF4] px-1.5 py-0.5 text-[8px] font-semibold text-[#C2185B]">
            <TrendingUp className="h-2.5 w-2.5" /> Live
          </span>
        </div>
        <p className="display mt-1 text-[18px] font-semibold leading-none text-ink">
          340% <span className="text-[10px] font-medium text-ink-soft">ROAS</span>
        </p>
        <div className="mt-2.5 space-y-1.5">
          {funnel.map(([k, v, w]) => (
            <div key={k} className="flex items-center gap-2">
              <span className="w-9 text-[8px] text-ink-soft">{k}</span>
              <span className="h-3 flex-1">
                <span
                  className={`block h-full rounded-[4px] bg-[linear-gradient(90deg,#E2457A,#F4A3C0)] ${w}`}
                />
              </span>
              <span className="w-7 text-right text-[8px] font-semibold text-ink">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

/* EduVerse — live class */
function EduVersePreview() {
  return (
    <Screen>
      <div className="relative h-[72px] bg-[linear-gradient(135deg,#2A1F6B,#0E0A2E)]">
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-[4px] bg-[#E5484D] px-1.5 py-0.5 text-[8px] font-bold text-white">
          <span className="h-1 w-1 rounded-full bg-white" /> LIVE
        </span>
        <span className="absolute right-2 top-2 text-[8px] text-white/70">1,204 watching</span>
        <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90">
          <Play className="h-3 w-3 translate-x-px fill-ink text-ink" />
        </span>
      </div>
      <div className="p-2.5">
        <p className="text-[10px] font-semibold text-ink">Module 4 · UI Design basics</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#FDF3D8]">
            <span className="block h-full w-[68%] rounded-full bg-[#E0A100]" />
          </span>
          <span className="mono text-[8px] text-ink-soft">68%</span>
        </div>
        <div className="mt-1.5 flex -space-x-1.5">
          {["#9B85FF", "#F4A3C0", "#8FD6D6", "#F8D88A"].map((c) => (
            <span key={c} style={{ background: c }} className="h-4 w-4 rounded-full border-2 border-white" />
          ))}
          <span className="ml-2.5 self-center text-[8px] text-ink-faint">+28 classmates</span>
        </div>
      </div>
    </Screen>
  );
}

const projects = [
  {
    title: "FinFlow",
    subtitle: "Banking dashboard",
    category: "Web application",
    description:
      "A financial management dashboard with real-time analytics, transaction tracking and AI-powered insights for a fintech startup.",
    tags: ["React", "Node.js", "PostgreSQL"],
    surface: "from-[#EFEDFB] via-[#E6E0FF] to-[#CFC3FF]",
    metrics: "3x faster transactions",
    Preview: FinFlowPreview,
  },
  {
    title: "ShopLift",
    subtitle: "E-commerce platform",
    category: "Full-stack",
    description:
      "Inventory, payments and a customer storefront in one platform. Sales rose 180% after launch.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    surface: "from-[#F0EDFF] via-[#E3DCFF] to-[#C6B8FF]",
    metrics: "+180% revenue",
    Preview: ShopLiftPreview,
  },
  {
    title: "MediCare",
    subtitle: "Health app",
    category: "Mobile application",
    description:
      "Cross-platform health tracking with appointment booking, telemedicine and personalised wellness plans for 50K+ users.",
    tags: ["React Native", "Firebase", "AI/ML"],
    surface: "from-[#E6F7F7] via-[#CDEFEF] to-[#A6E2E2]",
    metrics: "50K+ downloads",
    Preview: MediCarePreview,
  },
  {
    title: "PropVista",
    subtitle: "Real estate platform",
    category: "SaaS product",
    description:
      "Listings and management with virtual tours, lead generation and automated marketing workflows for agencies.",
    tags: ["Next.js", "AWS", "Elasticsearch"],
    surface: "from-[#EFEDFB] via-[#DDE2F7] to-[#BCC5EE]",
    metrics: "2,000+ listings",
    Preview: PropVistaPreview,
  },
  {
    title: "Meridian",
    subtitle: "Brand campaign",
    category: "Digital marketing",
    description:
      "Full-funnel campaign across Meta Ads, Google Ads, SEO and content for a luxury fashion brand.",
    tags: ["Meta Ads", "SEO", "Analytics"],
    surface: "from-[#FDEEF4] via-[#FAD6E4] to-[#F4B3CC]",
    metrics: "340% ROAS",
    Preview: MeridianPreview,
  },
  {
    title: "EduVerse",
    subtitle: "Learning platform",
    category: "Web application",
    description:
      "Live classes, progress tracking, gamification and a marketplace for course creators.",
    tags: ["Vue.js", "Django", "WebRTC"],
    surface: "from-[#FFF8E6] via-[#FDEBC0] to-[#F8D88A]",
    metrics: "10K+ students",
    Preview: EduVersePreview,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden">
        <div className="floor-grid absolute inset-x-[-40%] bottom-[-10%] h-[140%]" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal as="p" rotate={0} className="eyebrow">
            Selected work
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="display mt-3 text-[34px] font-semibold leading-[1.08] text-ink sm:text-[48px]"
          >
            Projects that <span className="accent">speak for themselves.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            rotate={0}
            className="mt-4 text-[17px] leading-[27px] text-ink-soft"
          >
            Recent work across software development and digital marketing, each
            built with precision and purpose.
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ Preview, ...p }) => (
            <RevealItem key={p.title} className="h-full">
              <TiltCard
                max={6}
                scale={1.01}
                className="glass group flex h-full flex-col overflow-hidden !rounded-[24px] p-2"
              >
                <div
                  className={`relative h-60 overflow-hidden rounded-[18px] bg-linear-to-br ${p.surface}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(26,18,89,0.12)_1px,transparent_1px)] [background-size:14px_14px]"
                  />
                  <Preview />
                  <span className="glass glass-strong absolute left-3 top-3 z-10 !rounded-full px-3 py-1 text-[12px] font-medium text-navy">
                    {p.category}
                  </span>
                  <span className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-navy transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#E6F7F0] px-2.5 py-1 text-[12px] font-semibold text-[#0A7F55]">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {p.metrics}
                  </span>
                  <h3 className="display mt-3 text-[22px] font-semibold text-ink">
                    {p.title}
                    <span className="font-normal text-ink-faint"> · {p.subtitle}</span>
                  </h3>
                  <p className="mt-2 text-[15px] leading-[23px] text-ink-soft">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded-[10px] bg-[#F4F5F9] px-3 py-1.5 text-[12px] text-[#4F4B66]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
