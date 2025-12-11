import * as React from "react";
import { useTheme } from "next-themes";

import { META_THEME_COLORS } from "~/lib/config";

export function useMetaColor(): readonly [
  metaColor: string,
  setMetaColor: React.Dispatch<React.SetStateAction<string>>,
  updateMetaColor: () => void,
] & {
  metaColor: string;
  setMetaColor: React.Dispatch<React.SetStateAction<string>>;
  updateMetaColor: () => void;
} {
  const { resolvedTheme } = useTheme();

  const metaColor = React.useMemo(
    () => (resolvedTheme !== "dark" ? META_THEME_COLORS.light : META_THEME_COLORS.dark),
    [resolvedTheme],
  );

  const setMetaColor = React.useCallback<React.Dispatch<React.SetStateAction<string>>>(
    (color) => {
      const value = typeof color === "function" ? color(metaColor) : color;
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", value);
    },
    [metaColor],
  );

  const updateMetaColor = React.useCallback(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  return Object.assign([metaColor, setMetaColor, updateMetaColor] as const, {
    metaColor,
    setMetaColor,
    updateMetaColor,
  });
}
