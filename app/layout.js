import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { SITE_URL, site } from "./lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const viewport = {
  themeColor: "#f8f7fc",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: "%s | Growvix",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Growvix",
    "digital agency Bangladesh",
    "web development company Dhaka",
    "website design Bangladesh",
    "mobile app development Bangladesh",
    "SaaS development company",
    "Next.js developer Bangladesh",
    "SEO agency Dhaka",
    "SEO services Bangladesh",
    "Facebook ads agency Bangladesh",
    "Google ads agency",
    "digital marketing agency Dhaka",
    "brand strategy and UI/UX design",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  /* Set these in your hosting environment once you verify the site in each console */
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION },
    }),
  },
  /* Local search signals for Dhaka, Bangladesh */
  other: {
    "geo.region": "BD-13",
    "geo.placename": "Dhanmondi, Dhaka",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body
        className={`${outfit.className} min-h-full flex flex-col bg-canvas text-ink`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
