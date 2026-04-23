import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Growvix - Leading Global Multiple Solutions Provider",
  description:
    "Growvix is a leading global multiple solutions provider that helps businesses and individuals achieve their goals.",
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
