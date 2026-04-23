"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Innovation First",
      desc: "We stay ahead of tech trends to give you a competitive edge.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Client Partnership",
      desc: "Your success is our success. We build long-term relationships.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Results Driven",
      desc: "Every decision is backed by data and measured by outcomes.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Quality & Security",
      desc: "Enterprise-grade code with security best practices baked in.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface-light relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#6a3dfc]/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div data-animate className="opacity-0 relative">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-border-subtle">
                <div className="space-y-8">
                  {/* Experience counter */}
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-bold gradient-text">5+</div>
                    <div>
                      <p className="text-lg font-semibold text-brand-indigo">Years of Excellence</p>
                      <p className="text-text-secondary text-sm">Building digital solutions since 2021</p>
                    </div>
                  </div>

                  <div className="h-px bg-border-light" />

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold text-brand-indigo">50+</p>
                      <p className="text-sm text-text-secondary mt-1">Projects Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brand-indigo">30+</p>
                      <p className="text-sm text-text-secondary mt-1">Happy Clients</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brand-indigo">15+</p>
                      <p className="text-sm text-text-secondary mt-1">Team Members</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brand-indigo">8+</p>
                      <p className="text-sm text-text-secondary mt-1">Countries Served</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-brand-purple to-accent-cyan opacity-10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-pink to-brand-purple opacity-10 -z-10" />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div data-animate className="opacity-0">
              <span className="section-label">About Growvix</span>
            </div>

            <h2
              data-animate
              className="opacity-0 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mt-5 text-brand-indigo leading-tight"
            >
              A Team Obsessed With
              <br />
              <span className="gradient-text">Your Growth</span>
            </h2>

            <p
              data-animate
              className="opacity-0 mt-6 text-lg text-text-secondary leading-relaxed"
            >
              Growvix was founded with a single mission — to help businesses unlock their digital potential. We combine technical excellence with creative strategy to deliver solutions that don&apos;t just look great but drive real, measurable results.
            </p>

            <p
              data-animate
              className="opacity-0 mt-4 text-text-secondary leading-relaxed"
            >
              Our team of developers, designers, and marketing strategists work together seamlessly to ensure every project we touch becomes a growth engine for our clients.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {values.map((value) => (
                <div
                  key={value.title}
                  data-animate
                  className="opacity-0 flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple/10 to-accent-cyan/10 flex items-center justify-center text-brand-purple flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-indigo text-[0.95rem]">{value.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
