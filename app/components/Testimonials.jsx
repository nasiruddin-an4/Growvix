"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, FinFlow Technologies",
    content:
      "Growvix completely transformed our digital presence. Their team built us a banking dashboard that our clients absolutely love, and the marketing campaigns they ran brought in 3x more leads than we expected. Truly exceptional work.",
    rating: 5,
    initials: "SM",
    gradientFrom: "#6a3dfc",
    gradientTo: "#00d4ff",
  },
  {
    name: "David Chen",
    role: "Founder, ShopLift Commerce",
    content:
      "Working with Growvix was a game-changer. They didn't just build our e-commerce platform — they became strategic partners. Revenue jumped 180% in the first quarter after launch. I can't recommend them enough.",
    rating: 5,
    initials: "DC",
    gradientFrom: "#ff6ec7",
    gradientTo: "#6a3dfc",
  },
  {
    name: "Amira Patel",
    role: "Marketing Director, Meridian Fashion",
    content:
      "The ROI from Growvix's marketing campaigns blew our projections out of the water. 340% ROAS on our Facebook campaigns, and our organic traffic grew 5x in six months. They truly understand data-driven marketing.",
    rating: 5,
    initials: "AP",
    gradientFrom: "#34d399",
    gradientTo: "#6a3dfc",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-surface-light relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#6a3dfc]/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div data-animate className="opacity-0">
            <span className="section-label">Testimonials</span>
          </div>
          <h2
            data-animate
            className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-brand-indigo"
          >
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p
            data-animate
            className="opacity-0 mt-5 text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped grow.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-animate
              className={`opacity-0 relative bg-white rounded-2xl p-7 md:p-8 border transition-all duration-500 ${
                activeIndex === index
                  ? "border-brand-purple/20 shadow-lg scale-[1.02]"
                  : "border-border-subtle shadow-sm hover:shadow-md"
              }`}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl leading-none text-brand-purple/10 font-serif select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#6a3dfc"
                    className="text-brand-purple"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-text-secondary leading-relaxed text-[0.95rem] mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-indigo text-[0.95rem]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-brand-purple w-8"
                  : "bg-brand-purple/20"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
