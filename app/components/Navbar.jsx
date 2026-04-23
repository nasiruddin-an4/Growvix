"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-brand-purple backdrop-blur-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="relative z-50 flex items-center gap-2">
          <Image
            src="/logo/full_white_logo.svg"
            alt="Growvix Logo"
            width={130}
            height={36}
            priority
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav — Center */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 text-xl font-medium rounded-lg transition-all duration-300 ${
                link.active ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — Right */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2.5 pl-5 pr-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
        >
          {/* Small avatar circle */}
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6a3dfc] to-[#ff4d4d] flex items-center justify-center text-[10px] font-bold text-white">
            G
          </span>
          Book A Call
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(180deg, #0a0318 0%, #1a0e3f 100%)",
        }}
      >
        <nav className="flex flex-col items-center gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-semibold py-3 px-8 rounded-2xl transition-all duration-300 ${
                link.active
                  ? "text-brand-purple"
                  : "text-white/80 hover:text-white"
              }`}
              style={{
                animation: mobileOpen
                  ? `fadeInUp 0.5s ${i * 0.08}s forwards`
                  : "none",
                opacity: mobileOpen ? undefined : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-8 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
          style={{
            animation: mobileOpen ? "fadeInUp 0.5s 0.4s forwards" : "none",
            opacity: mobileOpen ? undefined : 0,
          }}
        >
          Book A Call
        </a>
      </div>
    </header>
  );
}
