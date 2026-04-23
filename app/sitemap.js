export default function sitemap() {
  return [
    {
      url: "https://growvix.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more URLs as pages are created
    // {
    //   url: "https://growvix.com/services/web-development",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
