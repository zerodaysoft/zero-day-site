import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNumber(value: unknown): value is number | `${number}` {
  if (typeof value === "number") {
    return value - value === 0;
  }
  if (typeof value === "string" && value.trim() !== "") {
    // biome-ignore lint/suspicious/noGlobalIsFinite: fallback
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }
  return false;
}
