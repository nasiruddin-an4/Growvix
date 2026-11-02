import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import ProvenNumbers from "./components/ProvenNumbers";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { SITE_URL, pageFaqs, services, site } from "./lib/site";

export default function Home() {
  const orgId = `${SITE_URL}/#organization`;
  const businessId = `${SITE_URL}/#business`;
  const websiteId = `${SITE_URL}/#website`;
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };

  /* One linked graph: who we are, where we are, what we offer, and answers */
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        legalName: site.legalName,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: site.logo, width: 512, height: 512 },
        image: site.image,
        description: site.description,
        foundingDate: site.foundingYear,
        email: site.email,
        telephone: site.phoneIntl,
        address,
        areaServed: ["Worldwide", { "@type": "Country", name: site.address.countryName }],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneIntl,
          email: site.email,
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Bengali"],
        },
        ...(site.socials.length > 0 && { sameAs: site.socials }),
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: site.name,
        url: SITE_URL,
        image: site.image,
        logo: site.logo,
        description: site.description,
        email: site.email,
        telephone: site.phoneIntl,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        areaServed: ["Worldwide", { "@type": "City", name: "Dhaka" }],
        parentOrganization: { "@id": orgId },
        knowsAbout: services.map((s) => s.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, description: s.description },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: site.name,
        description: site.shortDescription,
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        primaryImageOfPage: site.image,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: pageFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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

      {/* ===== FAQ Section ===== */}
      <FAQ />

      {/* ===== Call To Action Section ===== */}
      <CTA />
    </>
  );
}
