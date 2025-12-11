import type { MetadataRoute } from "next";

import { META_THEME_COLORS } from "~/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zero-day",
    short_name: "Zero-day",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: META_THEME_COLORS.dark,
    background_color: META_THEME_COLORS.dark,
    display: "standalone",
  };
}

export const dynamic = "force-static";
