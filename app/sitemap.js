const BASE = "https://shahindustrialcorporation.com";

export default function sitemap() {
  const routes = ["", "/about", "/products", "/blog", "/contact", "/privacy", "/terms"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
