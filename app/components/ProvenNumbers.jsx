import { ArrowRight } from "lucide-react";
import Image from "next/image";
import stats from "../data/provenNumbers.json";

export default function ProvenNumbers() {
  return (
    <section
      id="proven-numbers"
      className="py-14 md:py-20 bg-slate-50 text-slate-950"
    >
      <div className="container mx-auto px-6 md:px-2 lg:px-0">
        <div className="mb-6 md:mb-12">
          <div className="flex justify-between gap-5 items-center flex-col md:flex-row">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-700">
              We’ve Helped Make Happen
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 text-end max-w-lg">
              Every decision is backed by data, every campaign is designed to
              move the needle, and every client story is a measurable win.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((item) => (
            <div key={item.title} className="pt-8 pr-8">
              <p className="text-5xl font-bold text-slate-950 border-b border-slate-300 pb-4">
                {item.value}
              </p>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-2 text-md leading-6 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Ready To Scale Your Brand */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-purple via-brand-purple-light py-12 md:py-20">
          <div className="absolute inset-0 " />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Ready To Scale Your Brand?
                  <br />
                  <span className="text-white/90">
                    Let&apos;s Build Something Extraordinary
                  </span>
                </h2>
                <p className="text-lg text-white/80 max-w-md">
                  Join hundreds of businesses that have transformed their
                  digital presence with Growvix.
                </p>
                <a
                  href="mailto:hello@growvix.com"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-brand-purple shadow-lg shadow-white/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/30"
                >
                  Contact Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative overflow-hidden ">
                  <Image
                    src="/10001.webp"
                    alt="Business growth illustration"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
