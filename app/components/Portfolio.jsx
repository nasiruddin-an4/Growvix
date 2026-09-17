"use client";

import Reveal from "./motion/Reveal";
import RevealGroup, { RevealItem } from "./motion/RevealGroup";
import TiltCard from "./motion/TiltCard";

const projects = [
  {
    title: "FinFlow — Banking Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial management dashboard with real-time analytics, transaction tracking, and AI-powered insights for a fintech startup.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-[#6a3dfc] to-[#00d4ff]",
    metrics: "3x faster transactions",
  },
  {
    title: "ShopLift — E-Commerce Platform",
    category: "Full-Stack Development",
    description:
      "End-to-end e-commerce solution with inventory management, payment processing, and a customer-facing storefront that increased sales by 180%.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    gradient: "from-[#ff6ec7] to-[#6a3dfc]",
    metrics: "+180% revenue",
  },
  {
    title: "MediCare — Health App",
    category: "Mobile Application",
    description:
      "Cross-platform health tracking app with appointment booking, telemedicine integration, and personalized wellness plans for 50K+ users.",
    tags: ["React Native", "Firebase", "AI/ML"],
    gradient: "from-[#34d399] to-[#00d4ff]",
    metrics: "50K+ downloads",
  },
  {
    title: "PropVista — Real Estate Platform",
    category: "SaaS Product",
    description:
      "Property listing and management platform with virtual tours, lead generation tools, and automated marketing workflows for real estate agencies.",
    tags: ["Next.js", "AWS", "Elasticsearch"],
    gradient: "from-[#00d4ff] to-[#6a3dfc]",
    metrics: "2,000+ listings",
  },
  {
    title: "Meridian — Brand Campaign",
    category: "Digital Marketing",
    description:
      "Full-funnel digital marketing campaign including Facebook Ads, Google Ads, SEO optimization, and content strategy for a luxury fashion brand.",
    tags: ["Meta Ads", "SEO", "Analytics"],
    gradient: "from-[#6a3dfc] to-[#ff6ec7]",
    metrics: "340% ROAS",
  },
  {
    title: "EduVerse — Learning Platform",
    category: "Web Application",
    description:
      "Interactive online learning platform with live classes, progress tracking, gamification, and a marketplace for course creators.",
    tags: ["Vue.js", "Django", "WebRTC"],
    gradient: "from-[#ff6ec7] to-[#34d399]",
    metrics: "10K+ students",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <span className="section-label">Our Portfolio</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-brand-indigo"
          >
            Projects That Speak
            <br />
            <span className="gradient-text">For Themselves</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.16}
            className="mt-5 text-lg text-text-secondary max-w-2xl mx-auto"
          >
            A selection of our recent work across software development and
            digital marketing — each project crafted with precision and purpose.
          </Reveal>
        </div>

        {/* Projects Grid */}
        <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective">
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <TiltCard
                max={6}
                className="group relative h-full bg-white rounded-2xl border border-border-subtle overflow-hidden card-hover"
              >
                {/* Gradient header bar */}
                <div
                  className={`h-48 bg-linear-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Abstract pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-2xl rotate-12" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-3xl rotate-45" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Metric badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-xl border border-white/20">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <h3 className="text-lg font-bold text-brand-indigo mb-2 group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-surface-light text-text-secondary border border-border-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
