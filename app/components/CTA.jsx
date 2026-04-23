"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Zap, ShieldCheck, Sparkles } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
              el.style.animationDelay = `${i * 0.08}s`;
              el.classList.add("animate-fade-in-up");
            });
          }
        });
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 bg-[#0d18ff] text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1eff] via-[#1226ff] to-[#0b10b8] opacity-95" />
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute right-0 bottom-24 h-72 w-72 rounded-full bg-[#8b7cff]/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div data-animate className="opacity-0">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Ready To Scale Your Brand?
              </p>
            </div>

            <div data-animate className="opacity-0">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight">
                Let&apos;s Build Something Extraordinary.
              </h2>
            </div>

            <div data-animate className="opacity-0">
              <p className="max-w-xl text-lg leading-8 text-white/80">
                Growvix brings the strategy, design, and execution your brand
                needs to capture attention, convert customers, and grow with
                confidence.
              </p>
            </div>

            <div
              data-animate
              className="opacity-0 mt-6 flex flex-wrap items-center gap-4"
            >
              <form
                name="contact"
                method="POST"
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="w-full max-w-md space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{" "}
                    <input name="bot-field" />
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-white/40 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-white/40 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-white/40 focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-brand-purple transition hover:-translate-y-0.5"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div data-animate className="opacity-0 mt-12 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Trusted by 300,000+ businesses:
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90">
                  <Zap className="h-4 w-4 text-white" />
                  Boltshift
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90">
                  <ShieldCheck className="h-4 w-4 text-white" />
                  Clandestine
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90">
                  <Sparkles className="h-4 w-4 text-white" />
                  Codecraft_
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90">
                  <ArrowRight className="h-4 w-4 text-white" />
                  CoreOS
                </span>
              </div>
            </div>
          </div>

          <div
            data-animate
            className="relative opacity-0 mx-auto w-full max-w-[520px]"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_45px_120px_rgba(0,0,0,0.25)]">
              <Image
                src="/img2.webp"
                alt="Business growth"
                width={900}
                height={1125}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-5 left-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-purple shadow-lg shadow-white/15">
              <Zap className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-purple shadow-lg shadow-white/15">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="absolute bottom-10 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-purple shadow-xl shadow-brand-purple/20">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
