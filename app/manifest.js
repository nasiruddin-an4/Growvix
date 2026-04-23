export default function manifest() {
  return {
    name: "Growvix - Leading Global Multiple Solutions Provider",
    short_name: "Growvix",
    description:
      "Growvix is a leading global multiple solutions provider that helps businesses and individuals achieve their goals through web development, mobile apps, SaaS, SEO, and digital marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6a3dfc",
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
      },
    ],
  };
}
