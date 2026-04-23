"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Plus, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el) => {
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
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/10001.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-indigo-dark/70" />
      </div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 flex-1 flex flex-col w-full container mx-auto px-6 md:px-10 pt-40 h-full justify-between">
        {/* Hero Title & Tagline */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <h1
            data-animate
            className="opacity-0 delay-100 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight text-white mb-6"
          >
            Next-Gen <br />
            Digital Solutions for Growing <span className=""> Your Brand</span>
          </h1>
          <p
            data-animate
            className="opacity-0 delay-200 text-lg md:text-2xl font-medium text-white/90 leading-relaxed max-w-2xl"
          >
            Growvix is ready to design, develop, and market your business <br />{" "}
            so you can focus on growth.
          </p>
        </div>
      </div>
    </section>
  );
}
