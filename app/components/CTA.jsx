"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add("animate-fade-in-up");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-24"
          style={{
            background:
              "linear-gradient(135deg, #1a0e3f 0%, #2d1b69 40%, #6a3dfc 100%)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6a3dfc]/30 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00d4ff]/10 blur-[100px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div data-animate className="opacity-0">
              <span className="section-label section-label-dark">Let&apos;s Talk</span>
            </div>

            <h2
              data-animate
              className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 text-white leading-tight"
            >
              Ready to Transform Your
              <br />
              Business Digitally?
            </h2>

            <p
              data-animate
              className="opacity-0 mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
            >
              Let&apos;s discuss how Growvix can help you achieve your goals.
              Book a free consultation call and get a custom strategy tailored
              to your business.
            </p>

            <div
              data-animate
              className="opacity-0 mt-10 flex flex-wrap justify-center gap-4"
            >
              <a href="mailto:hello@growvix.com" className="btn-white">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:hello@growvix.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold border-2 border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Book a Call
              </a>
            </div>

            {/* Trust badges */}
            <div
              data-animate
              className="opacity-0 mt-14 flex flex-wrap justify-center gap-8 text-white/40 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                No Long-Term Contracts
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                100% Satisfaction Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
