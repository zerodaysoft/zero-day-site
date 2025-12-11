import { Geist } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "~/lib/utils";

export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontMono = localFont({
  variable: "--font-mono",
  fallback: ["Tektur"],
  src: "./fonts/Tektur-Zero-day.woff2",
});

export const fontVariables = cn(fontSans.variable, fontMono.variable);
