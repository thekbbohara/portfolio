import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kbbohara.com.np",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://kbbohara.com.np/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.95,
    },
    {
      url: "https://kbbohara.com.np/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.96,
    },
    {
      url: "https://kbbohara.com.np/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.94,
    },
  ];
}
