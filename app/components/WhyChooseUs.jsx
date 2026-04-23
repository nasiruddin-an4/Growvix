"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Turnaround",
    description: "We deliver on time, every time. Our agile workflows ensure rapid development without compromising quality.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Battle-Tested Code",
    description: "Enterprise-grade development practices with thorough testing, code reviews, and security best practices.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Proven Results",
    description: "Our clients see an average of 200%+ ROI. We focus on metrics that matter and strategies that convert.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Dedicated Team",
    description: "Get a dedicated team of experts who understand your business goals and work as an extension of your team.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics. We use real data to optimize performance and maximize your investment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance. We don't disappear after launch — we grow with you.",
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0522 0%, #1a0e3f 50%, #0f0522 100%)",
      }}
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#6a3dfc]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div data-animate className="opacity-0">
            <span className="section-label section-label-dark">Why Growvix</span>
          </div>
          <h2
            data-animate
            className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white"
          >
            Why Businesses
            <br />
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p
            data-animate
            className="opacity-0 mt-5 text-lg text-text-on-dark-muted max-w-2xl mx-auto"
          >
            We don&apos;t just build — we partner with you to create digital
            experiences that drive real business outcomes.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              data-animate
              className="opacity-0 group relative rounded-2xl p-7 md:p-8 border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Index number */}
              <span className="absolute top-6 right-6 text-5xl font-black text-white/[0.04] select-none">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6a3dfc]/20 to-[#00d4ff]/20 flex items-center justify-center text-brand-purple-light mb-6 group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-text-on-dark-muted text-[0.95rem] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
