import type { MetadataRoute } from "next";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://joaovictormacedo.dev");

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
        { url: `${siteUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${siteUrl}/cv`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ];
}
