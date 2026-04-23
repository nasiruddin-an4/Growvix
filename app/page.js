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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growvix",
    description:
      "Leading global multiple solutions provider specializing in web development, mobile apps, SaaS, SEO, and digital marketing.",
    url: "https://growvix.com",
    logo: "https://growvix.com/logo/full_white_logo.svg",
    sameAs: [
      "https://facebook.com/growvix", // Replace with actual
      "https://linkedin.com/company/growvix", // Replace with actual
      "https://instagram.com/growvix", // Replace with actual
      "https://twitter.com/growvix", // Replace with actual
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890", // Replace with real number
      contactType: "customer service",
      email: "hello@growvix.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St", // Replace with real address
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Growvix",
    url: "https://growvix.com",
    description:
      "Leading global multiple solutions provider specializing in web development, mobile apps, SaaS, SEO, and digital marketing.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://growvix.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

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
