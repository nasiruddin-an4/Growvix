import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://growvix.com"),
  title: {
    default: "Growvix - Leading Global Multiple Solutions Provider",
    template: "%s | Growvix",
  },
  description:
    "Growvix is a leading global multiple solutions provider that helps businesses and individuals achieve their goals through web development, mobile apps, SaaS, SEO, and digital marketing.",
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "SaaS development",
    "SEO services",
    "content marketing",
    "Facebook ads",
    "brand strategy",
    "digital marketing",
    "software development",
  ],
  authors: [{ name: "Growvix Team" }],
  creator: "Growvix",
  publisher: "Growvix",
  openGraph: {
    title: "Growvix - Leading Global Multiple Solutions Provider",
    description:
      "Growvix is a leading global multiple solutions provider that helps businesses and individuals achieve their goals through web development, mobile apps, SaaS, SEO, and digital marketing.",
    url: "https://growvix.com",
    siteName: "Growvix",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Growvix - Digital Agency Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growvix - Leading Global Multiple Solutions Provider",
    description:
      "Growvix is a leading global multiple solutions provider that helps businesses and individuals achieve their goals through web development, mobile apps, SaaS, SEO, and digital marketing.",
    images: ["/twitter-image.jpg"],
    creator: "@growvix", // Replace with actual Twitter handle
  },
  alternates: {
    canonical: "https://growvix.com",
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
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
    bing: "your-bing-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code
    pinterest: "your-pinterest-verification-code", // Replace with actual code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
