/*
 * Single source of truth for business details used by metadata, structured
 * data (JSON-LD), the sitemap, robots and the FAQ. Update facts here once.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.growvixbd.com").replace(/\/$/, "");

export const site = {
  name: "Growvix",
  legalName: "Growvix",
  url: SITE_URL,
  tagline: "Next-Gen Digital. Built to Grow.",
  title: "Growvix | Web Development, App & Digital Marketing Agency in Dhaka, Bangladesh",
  description:
    "Growvix is a digital growth studio in Dhaka, Bangladesh. We design and build websites, mobile apps and SaaS products, and grow them with SEO and Meta and Google ads, for clients in 8+ countries.",
  shortDescription:
    "Web development, mobile apps, SaaS, SEO and digital marketing from one team in Dhaka, Bangladesh.",
  foundingYear: "2021",
  email: "growvixbd@gmail.com",
  phoneDisplay: "01815654292",
  phoneIntl: "+8801815654292",
  address: {
    street: "Dhanmondi",
    locality: "Dhaka",
    region: "Dhaka",
    postalCode: "1207",
    country: "BD",
    countryName: "Bangladesh",
  },
  /* Approximate centre of Dhanmondi, Dhaka */
  geo: { latitude: 23.7465, longitude: 90.3760 },
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  locale: "en_US",
  /* Add real profile URLs here; they become sameAs links for search engines */
  socials: [],
};

export const services = [
  {
    name: "Web Development",
    description:
      "Custom websites and web applications built with React, Next.js and Node.js.",
  },
  {
    name: "Mobile App Development",
    description: "Native and cross-platform iOS and Android apps with React Native and Flutter.",
  },
  {
    name: "SaaS Product Development",
    description: "End-to-end engineering to build, launch and scale subscription software.",
  },
  {
    name: "SEO and Content Marketing",
    description: "Technical SEO and content that lift rankings, organic traffic and conversions.",
  },
  {
    name: "Social Media Advertising",
    description: "Meta, Instagram and Google ad campaigns tuned every week for return on ad spend.",
  },
  {
    name: "Brand Strategy and UI/UX Design",
    description: "Brand identity, logos, design systems and product UI/UX design.",
  },
];

/*
 * FAQ shown in the collapsible FAQ section and published as FAQPage
 * structured data. The first FAQ_VISIBLE items are shown on the page and in
 * the FAQPage data. The rest are not shown to visitors; they are published
 * only in /llms.txt for AI assistants. Keep answers factual.
 */
export const FAQ_VISIBLE = 6;

export const faqs = [
  {
    q: "What does Growvix do?",
    a: "Growvix is a digital growth studio. We design and build websites, web apps, mobile apps and SaaS products, then grow them with SEO, content and paid ads on Meta and Google. Strategy, design, engineering and marketing work as one team.",
  },
  {
    q: "How much does a website or app cost?",
    a: "Cost depends on what you need. Send us a short brief and we will reply within 24 hours with a clear plan, scope and quote.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. A typical project moves through discovery, design and build in about six weeks, and you see progress every week rather than every quarter.",
  },
  {
    q: "Where is Growvix located?",
    a: "Our office is in Dhanmondi, Dhaka 1207, Bangladesh. We work with clients across Bangladesh and in more than 8 countries worldwide.",
  },
  {
    q: "How do I start a project with Growvix?",
    a: "Fill in the contact form on this page, email growvixbd@gmail.com or call 01815654292. We reply within 24 hours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work remotely with businesses in more than 8 countries, with regular progress updates and calls in your time zone.",
  },
  {
    q: "Which technologies do you use?",
    a: "For the web we use React, Next.js and Node.js. For mobile apps we use React Native and Flutter. Our SaaS work covers cloud hosting, CI/CD and DevOps.",
  },
  {
    q: "Do you offer SEO and digital marketing?",
    a: "Yes. We provide technical SEO, content strategy and Meta, Instagram and Google ad campaigns, and report on the numbers that matter: traffic, leads and return on ad spend.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing support and maintenance after launch, so your site or app keeps improving as your business grows.",
  },
];

/* Shown on the page and in the FAQPage structured data */
export const pageFaqs = faqs.slice(0, FAQ_VISIBLE);
/* Published only in /llms.txt for AI assistants */
export const aiOnlyFaqs = faqs.slice(FAQ_VISIBLE);

