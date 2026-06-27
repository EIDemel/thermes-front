import type { MetadataRoute } from "next";

type WpPost = {
  slug?: string;
  modified?: string;
  modified_gmt?: string;
  date?: string;
};

const CMS_POSTS_ENDPOINT = "https://cms.revuethermes.fr/wp-json/wp/v2/posts";

const STATIC_ROUTES = [
  "/",
  "/a-propos",
  "/actualites",
  "/article",
  "/contact",
  "/mentions-legales",
  "/nos-numeros",
  "/nos-points-de-vente",
  "/numeros",
];

function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}

async function fetchPostsByCategory(categoryId: number): Promise<WpPost[]> {
  const query = new URLSearchParams({
    categories: String(categoryId),
    per_page: "100",
    _fields: "slug,modified,modified_gmt,date",
  });

  try {
    const res = await fetch(`${CMS_POSTS_ENDPOINT}?${query.toString()}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as WpPost[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function buildDynamicEntries(
  baseUrl: string,
  routePrefix: string,
  posts: WpPost[]
): MetadataRoute.Sitemap {
  return posts
    .filter((post) => Boolean(post.slug))
    .map((post) => ({
      url: `${baseUrl}${routePrefix}/${post.slug}`,
      lastModified: post.modified ?? post.modified_gmt ?? post.date ?? new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const [actualitesPosts, numerosPosts] = await Promise.all([
    fetchPostsByCategory(5),
    fetchPostsByCategory(6),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const actualitesEntries = buildDynamicEntries(baseUrl, "/actualites", actualitesPosts);
  const numerosEntries = buildDynamicEntries(baseUrl, "/nos-numeros", numerosPosts);

  return [...staticEntries, ...actualitesEntries, ...numerosEntries];
}