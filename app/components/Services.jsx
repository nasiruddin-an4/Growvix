"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. From landing pages to complex SaaS platforms — we deliver scalable, high-performance solutions.",
    tags: ["React", "Next.js", "Node.js", "API"],
    gradient: "from-[#6a3dfc] to-[#00d4ff]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that users love. We design and build apps for iOS and Android that drive engagement and revenue.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    gradient: "from-[#ff6ec7] to-[#6a3dfc]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <line x1="12" y1="22" x2="12" y2="17" />
        <line x1="12" y1="13" x2="12" y2="6.81" />
      </svg>
    ),
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS product engineering. We help startups and enterprises build, launch, and scale subscription-based software products.",
    tags: ["Cloud", "Microservices", "CI/CD", "DevOps"],
    gradient: "from-[#34d399] to-[#6a3dfc]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "SEO & Content Strategy",
    description:
      "Data-driven SEO strategies that boost organic traffic and visibility. We optimize your digital presence to rank higher and convert better.",
    tags: ["Technical SEO", "Content", "Analytics", "Keywords"],
    gradient: "from-[#00d4ff] to-[#34d399]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: "Facebook & Social Ads",
    description:
      "Targeted social media campaigns that reach your ideal audience. We manage and optimize ads across platforms to maximize your ROAS.",
    tags: ["Meta Ads", "Instagram", "Retargeting", "Creative"],
    gradient: "from-[#6a3dfc] to-[#ff6ec7]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Brand Strategy & Design",
    description:
      "Craft a compelling brand identity that resonates with your audience. From logos to full brand systems — we make your business unforgettable.",
    tags: ["Branding", "UI/UX", "Identity", "Design System"],
    gradient: "from-[#ff6ec7] to-[#00d4ff]",
  },
];

export default function Services() {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div data-animate className="opacity-0">
            <span className="section-label">Our Services</span>
          </div>
          <h2
            data-animate
            className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-brand-indigo"
          >
            Everything You Need to
            <br />
            <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p
            data-animate
            className="opacity-0 mt-5 text-lg text-text-secondary max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of digital services designed to accelerate your growth — from product development to market dominance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              data-animate
              className="opacity-0 group relative bg-white rounded-2xl p-7 md:p-8 border border-border-subtle card-hover cursor-default"
            >
              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 transition-transform duration-500 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-brand-indigo mb-3">
                {service.title}
              </h3>

              <p className="text-text-secondary text-[0.95rem] leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-surface-light text-text-secondary border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
