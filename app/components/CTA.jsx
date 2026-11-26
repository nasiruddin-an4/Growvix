"use client";

import { ArrowRight, Clock, Mail, MessageSquare, Sparkles } from "lucide-react";
import Reveal from "./motion/Reveal";

const fieldClass =
  "w-full rounded-[12px] border border-[rgba(26,18,89,0.12)] bg-white/80 px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint transition focus:border-brand-purple/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-purple/10";

const steps = [
  { icon: MessageSquare, text: "Tell us about your goals and timeline." },
  { icon: Clock, text: "We reply within 24 hours with next steps." },
  { icon: Sparkles, text: "Get a clear plan, scope and quote." },
];

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal as="p" rotate={0} className="eyebrow">
            Start a project
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="display mt-3 text-[38px] font-semibold leading-[1.02] text-ink sm:text-[56px] lg:text-[64px]"
          >
            Let&apos;s build something
            <br />
            <span className="accent">extraordinary.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            rotate={0}
            className="mt-5 max-w-[520px] text-[17px] leading-[27px] text-ink-soft"
          >
            Growvix brings the strategy, design and execution your brand needs
            to capture attention, convert customers and grow with confidence.
          </Reveal>

          <Reveal delay={0.18} rotate={0}>
            <ol className="mt-8 space-y-3">
              {steps.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-[12px] border border-[rgba(26,18,89,0.07)] bg-white/70 px-3 py-2.5 text-[15px] text-ink backdrop-blur"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-purple" strokeWidth={1.75} />
                  {text}
                </li>
              ))}
            </ol>
            <a
              href="mailto:growvixbd@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-navy hover:text-brand-purple"
            >
              <Mail className="h-4 w-4" />
              Prefer email? growvixbd@gmail.com
            </a>
          </Reveal>
        </div>

        <Reveal y={40}>
          <form
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="glass glass-strong !rounded-[28px] p-5 sm:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </div>

            <div className="flex items-center justify-between">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                Project brief
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-tint px-2.5 py-1 text-[12px] font-medium text-teal-ink">
                <span className="live-pulse h-1.5 w-1.5 rounded-full bg-teal" />
                Replies in 24h
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-medium text-ink">Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-medium text-ink">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="mt-3 block">
              <span className="mb-1.5 block text-[13px] font-medium text-ink">Project</span>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                required
                className={`${fieldClass} resize-none`}
              />
            </label>
            <button type="submit" className="btn-signal mt-5 h-[52px] w-full text-[16px]">
              Send message
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
            <p className="mt-3 text-center text-[12px] text-ink-faint">
              By sending, you agree to our{" "}
              <a href="/privacy-policy" className="underline hover:text-navy">
                privacy policy
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
