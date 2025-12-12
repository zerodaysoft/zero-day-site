import "~/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { GoogleAnalytics, VercelAnalytics, VercelSpeedInsights } from "~/components/analytics";
import { LayoutPreflightScript } from "~/components/layout-preflight";
import { ThemeProvider } from "~/components/theme-provider";
import { config, META_THEME_COLORS } from "~/lib/config";
import { cn } from "~/lib/utils";
import { fontVariables } from "~/styles/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : config.baseUrl
      : "http://localhost:3000",
  ),
  title: config.title,
  description: config.description,
  appleWebApp: {
    title: config.siteName,
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <LayoutPreflightScript />
      </head>
      <GoogleAnalytics />
      <body className={cn("group/body overscroll-none antialiased", fontVariables)}>
        <ThemeProvider>{children}</ThemeProvider>
        <VercelAnalytics />
        <VercelSpeedInsights />
      </body>
    </html>
  );
}
