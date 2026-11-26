"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, FinFlow Technologies",
    content:
      "Growvix completely transformed our digital presence. They built a banking dashboard our clients love, and their campaigns brought in 3x more leads than we expected.",
    initials: "SM",
    tile: "bg-[linear-gradient(135deg,#6045ff,#8b7cff)]",
  },
  {
    name: "David Chen",
    role: "Founder, ShopLift Commerce",
    content:
      "They didn't just build our e-commerce platform. They became strategic partners. Revenue jumped 180% in the first quarter after launch.",
    initials: "DC",
    tile: "bg-[linear-gradient(135deg,#7A63FF,#4A2FE6)]",
  },
  {
    name: "Amira Patel",
    role: "Marketing Director, Meridian Fashion",
    content:
      "340% ROAS on our Facebook campaigns, and organic traffic grew 5x in six months. They truly understand data-driven marketing.",
    initials: "AP",
    tile: "bg-[linear-gradient(135deg,#0FA3A3,#2A1A8F)]",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const trackRef = useRef(null);
  const activeRef = useRef(0);
  const pausedUntil = useRef(0);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  /* Below md the cards sit in a horizontal scroll track (the carousel) */
  const isCarousel = () => {
    const el = trackRef.current;
    return !!el && el.scrollWidth > el.clientWidth + 1;
  };

  /* Move to a card: highlight it, and on the carousel also scroll it into place */
  const goTo = useCallback(
    (i) => {
      const n = testimonials.length;
      const index = ((i % n) + n) % n;
      setActiveIndex(index);
      const el = trackRef.current;
      if (!el || !isCarousel()) return;
      const card = el.querySelectorAll("[data-slide]")[index];
      if (!card) return;
      const trackBox = el.getBoundingClientRect();
      const cardBox = card.getBoundingClientRect();
      const left =
        el.scrollLeft +
        (cardBox.left - trackBox.left) -
        (trackBox.width - cardBox.width) / 2;
      el.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
    },
    [reduceMotion],
  );

  /* Keep the dots in sync while the visitor swipes */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!isCarousel()) return;
        const slides = [...el.querySelectorAll("[data-slide]")];
        const box = el.getBoundingClientRect();
        const centre = box.left + box.width / 2;
        let best = 0;
        let bestDist = Infinity;
        slides.forEach((slide, i) => {
          const r = slide.getBoundingClientRect();
          const d = Math.abs(r.left + r.width / 2 - centre);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        if (best !== activeRef.current) setActiveIndex(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* Auto-advance, paused for a while after the visitor touches the carousel */
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      goTo(activeRef.current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [reduceMotion, goTo]);

  const pause = () => {
    pausedUntil.current = Date.now() + 8000;
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal as="p" rotate={0} className="eyebrow">
            Client stories
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="display mt-3 text-[34px] font-semibold leading-[1.08] text-ink sm:text-[48px]"
          >
            Don&apos;t take our word. <span className="accent">Take theirs.</span>
          </Reveal>
        </div>

        {/* Phones and tablets: swipeable carousel. Desktop: three columns. */}
        <div
          ref={trackRef}
          onTouchStart={pause}
          onPointerDown={pause}
          className="-mx-4 mt-10 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] sm:-mx-6 md:mx-0 md:mt-12 md:overflow-visible [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client stories"
        >
        <RevealGroup className="flex w-max gap-3 px-[8vw] pb-4 sm:px-[19vw] md:grid md:w-auto md:grid-cols-3 md:gap-4 md:px-0 md:pb-0">
          {testimonials.map((t, index) => {
            const active = activeIndex === index;
            return (
              <RevealItem key={t.name} className="h-auto w-[84vw] shrink-0 snap-center snap-always sm:w-[62vw] md:h-full md:w-auto">
                <figure
                  data-slide
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${testimonials.length}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`glass relative flex h-full flex-col p-5 transition-all duration-500 sm:p-7 ${
                    active
                      ? "glass-strong md:-translate-y-1"
                      : "md:opacity-90"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-[linear-gradient(90deg,#7A63FF,#6045ff)]"
                    />
                  )}
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-signal text-signal" />
                    ))}
                  </div>
                  <blockquote className="display mt-4 flex-1 text-[17px] font-medium leading-[26px] text-ink sm:mt-5 sm:text-[19px] sm:leading-[28px]">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-[rgba(26,18,89,0.08)] pt-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-[14px] font-semibold text-white ${t.tile}`}
                    >
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold text-ink">
                        {t.name}
                      </span>
                      <span className="block text-[13px] text-ink-faint">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            );
          })}
        </RevealGroup>
        </div>

      </div>
    </section>
  );
}
