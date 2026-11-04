import type { NextConfig } from "next";

// GitHub Pages static export: enabled only when GITHUB_PAGES=true (set by the
// Pages workflow). Render and local builds stay on the default Node server.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: "/blog-home-next",
      assetPrefix: "/blog-home-next/",
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
