"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Ecosystem() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="py-14 md:py-20 bg-white text-slate-950"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-2 lg:px-0">
        <div className="flex justify-between gap-8 md:gap-20 flex-col md:flex-row">
          {/* First Div - 35% */}
          <div className="md:w-[35%] w-full">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-medium"
              data-animate
              id="ecosystem-heading"
            >
              Our Ecosystem
            </h2>
          </div>

          {/* Second Div - 65% */}
          <div className="md:w-[65%] w-full">
            <p className="text-lg md:text-xl lg:text-2xl">
              Together, we don’t just market brands—we engineer success at
              scale.
            </p>
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 mt-4 leading-[1.3] max-w-3xl"
              data-animate
            >
              To Push The Boundaries of Digital Marketing and Offer Brands a
              360° Growth Experience, We’ve Built a Powerful Ecosystem of
              Innovation, Strategy, and Technology.
            </h3>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div data-animate className="">
                <div className="items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-purple text-white mb-4">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <p className="text-5xl font-bold text-slate-950">200%</p>
                    <p className="text-md font-semibold text-slate-600">
                      EdTech Breakthrough – More Course Enroll.
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-200/70 pt-2">
                  <p className="text-md leading-7 text-slate-600 mb-6">
                    We were stuck. Then they stepped in, fixed our funnel, and
                    nailed the retargeting.
                  </p>
                </div>
              </div>

              <div data-animate className="">
                <div className="items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-400 text-white mb-4">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <p className="text-5xl font-bold text-slate-950">70%</p>
                    <p className="text-md font-semibold text-slate-600">
                      E-Commerce Store – Revenue Up.
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-200/70 pt-2">
                  <p className="text-md leading-7 text-slate-600 mb-6">
                    Sales Were Flat. Then Their Smart Strategy Took Over-Better
                    Ads, In Just One Quarter, Revenue Jumped 75%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
