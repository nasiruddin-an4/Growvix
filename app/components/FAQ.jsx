"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, Plus } from "lucide-react";
import Reveal from "./motion/Reveal";
import { pageFaqs, site } from "../lib/site";

const EASE = [0.22, 1, 0.36, 1];

const TEAM = [
  "/members/member1.webp",
  "/members/member2.webp",
  "/members/member3.webp",
  "/members/member4.webp",
];

/*
 * Smoothly collapses to zero height. Answers stay in the HTML so search and
 * answer engines can read them, matching the FAQPage data in app/page.js.
 * While collapsed it is hidden from keyboard and screen readers.
 */
function Collapse({ open, id, labelledBy, children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              height: { duration: 0.42, ease: EASE },
              opacity: { duration: open ? 0.3 : 0.18, delay: open ? 0.08 : 0, ease: "easeOut" },
            }
      }
      style={{ overflow: "hidden" }}
      aria-hidden={!open}
      inert={!open}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  const uid = useId();
  const buttonId = `${uid}-q`;
  const panelId = `${uid}-a`;
  return (
    <div
      className={`glass !rounded-[16px] px-5 transition-colors duration-300 sm:!rounded-[18px] ${
        open ? "bg-white/85" : ""
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold text-ink sm:text-[17px]"
        >
          {q}
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ease-out ${
              open ? "rotate-45 bg-navy text-white" : "bg-ink/5 text-navy"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <Collapse open={open} id={panelId} labelledBy={buttonId}>
        <p className="pb-5 pr-10 text-[14px] leading-[22px] text-ink-soft sm:text-[15px] sm:leading-[24px]">
          {a}
        </p>
      </Collapse>
    </div>
  );
}

export default function FAQ() {
  /* Only one answer open at a time; opening another closes the previous one */
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-16 sm:py-24">
      <div className="container-x grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="p" rotate={0} className="eyebrow">
            FAQ
          </Reveal>
          <Reveal
            as="h2"
            id="faq-heading"
            delay={0.06}
            className="display mt-3 text-[28px] font-semibold leading-[1.1] text-ink sm:text-[44px]"
          >
            Questions?
            <br />
            <span className="accent">We&apos;ve got answers.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            rotate={0}
            className="mt-4 max-w-[440px] text-[15px] leading-[24px] text-ink-soft sm:text-[17px] sm:leading-[27px]"
          >
            The things clients ask us most before starting a project. Anything
            else? Ask the team directly.
          </Reveal>

          {/* Talk-to-us card */}
          <Reveal delay={0.18} rotate={0} className="mt-6 max-w-[440px]">
            <div className="glass glass-strong !rounded-[22px] p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {TEAM.map((src) => (
                    <span
                      key={src}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white"
                    >
                      <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  ))}
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-ink">Talk to a real person</p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-[12px] font-medium text-teal-ink">
                    <span className="live-pulse h-1.5 w-1.5 rounded-full bg-teal" />
                    Replies within 24 hours
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 rounded-[14px] border border-[rgba(26,18,89,0.08)] bg-white px-3.5 py-3 transition-colors hover:border-brand-purple/30 hover:bg-violet-tint/50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-violet-tint text-brand-purple">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] text-ink-faint">Email us</span>
                    <span className="block truncate text-[14px] font-medium text-ink">{site.email}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                </a>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="group flex items-center gap-3 rounded-[14px] border border-[rgba(26,18,89,0.08)] bg-white px-3.5 py-3 transition-colors hover:border-teal/40 hover:bg-teal-tint/50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-teal-tint text-teal-ink">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] text-ink-faint">Call us</span>
                    <span className="block text-[14px] font-medium text-ink">{site.phoneDisplay}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-2.5">
          {pageFaqs.map((f, i) => (
            <FaqItem key={f.q} {...f} open={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
