"use client";

import { GoogleAnalytics as GAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";

function GoogleAnalytics() {
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    return null;
  }
  return <GAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />;
}

export { GoogleAnalytics, VercelAnalytics, VercelSpeedInsights };
