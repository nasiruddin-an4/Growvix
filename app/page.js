import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <Hero />

      {/* ===== Services Section ===== */}
      <Services />

      {/* ===== About Section ===== */}
      <About />

      {/* ===== Portfolio Section ===== */}
      <Portfolio />

      {/* ===== Why Choose Us Section ===== */}
      <WhyChooseUs />

      {/* ===== Testimonials Section ===== */}
      <Testimonials />

      {/* ===== Call To Action Section ===== */}
      <CTA />
    </>
  );
}
