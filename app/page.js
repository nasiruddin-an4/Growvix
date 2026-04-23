import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import ProvenNumbers from "./components/ProvenNumbers";
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

      {/* ===== Ecosystem Section ===== */}
      <Ecosystem />

      {/* ===== Proven Numbers Section ===== */}
      <ProvenNumbers />

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
