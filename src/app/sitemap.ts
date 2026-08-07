import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "#about", "#services", "#projects", "#skills", "#experience", "#contact"].map(
    (route) => ({
      url: `${siteConfig.url}/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.6,
    })
  );

  const contactRoute = {
    url: `${siteConfig.url}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  };

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, contactRoute, ...projectRoutes];
}
