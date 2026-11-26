"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "SaaS Products",
  "SEO & Content",
  "Facebook Ads",
  "Brand Strategy",
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative mx-2 mb-2 overflow-hidden rounded-[24px] bg-navy-deep pb-6 pt-12 sm:mx-3 sm:mb-3 sm:rounded-[28px] sm:pb-8 sm:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(140,120,255,0.3),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(96,69,255,0.18),transparent)]"
      />

      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-16 lg:grid-cols-4 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Growvix home">
              <Image
                src="/logo/full_white_logo.svg"
                alt="Growvix"
                width={157}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-[22px] text-[#C4BDF2] sm:mt-5 sm:max-w-xs sm:text-[15px] sm:leading-[24px]">
              We are a full-service digital agency specializing in software
              development and digital marketing. We help businesses grow through
              technology and strategy.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex gap-3 sm:mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#E4E0FA] transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mono mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#C4BDF2] sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-[14px] text-[#E4E0FA] transition-colors duration-300 hover:text-white sm:text-[15px]"
                  >
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-0 shrink-0 -translate-x-2 text-[#9B85FF] opacity-0 transition-all duration-300 ease-out group-hover:mr-1.5 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:mr-1.5 group-focus-visible:w-3.5 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mono mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#C4BDF2] sm:mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="group inline-flex items-center text-[14px] text-[#E4E0FA] transition-colors duration-300 hover:text-white sm:text-[15px]"
                  >
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-0 shrink-0 -translate-x-2 text-[#9B85FF] opacity-0 transition-all duration-300 ease-out group-hover:mr-1.5 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:mr-1.5 group-focus-visible:w-3.5 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="mono mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#C4BDF2] sm:mb-5">
              Contact Us
            </h4>
            <ul className="grid gap-2 sm:space-y-4 sm:gap-0">
              <li className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-[#E4E0FA] sm:items-start sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-[#9B85FF] sm:mt-0.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:growvixbd@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  growvixbd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-[#E4E0FA] sm:items-start sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-[#9B85FF] sm:mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+8801815654292"
                  className="hover:text-white transition-colors"
                >
                  01815654292
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-[#E4E0FA] sm:items-start sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-[#9B85FF] sm:mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Dhanmondi, Dhaka 1207
                  <br />
                  Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:pt-8 md:flex-row md:gap-4">
          <p className="text-[13px] text-[#9A93CC]">
            &copy; {new Date().getFullYear()} Growvix. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-[#9A93CC]">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
