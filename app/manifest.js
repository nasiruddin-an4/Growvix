export default function manifest() {
  return {
    name: "Growvix - Leading Global Multiple Solutions Provider",
    short_name: "Growvix",
    description:
      "Growvix is a leading global multiple solutions provider that helps businesses and individuals achieve their goals through web development, mobile apps, SaaS, SEO, and digital marketing.",
    id: "/",
    start_url: "/",
    scope: "/",
    lang: "en",
    categories: ["business", "productivity", "technology"],
    display: "standalone",
    background_color: "#f8f7fc",
    theme_color: "#6045ff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
