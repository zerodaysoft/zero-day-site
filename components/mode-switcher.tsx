"use client";

import * as React from "react";
import { SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, type ButtonProps } from "~/components/ui/button";
import { useMetaColor } from "~/hooks/use-meta-color";
import { cn } from "~/lib/utils";

export function ModeSwitcher({ className, ...props }: ButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor, metaColor } = useMetaColor();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  React.useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("extend-touch-target size-8 text-muted-foreground", className)}
      onClick={toggleTheme}
      {...props}
    >
      <SunMoonIcon className="size-4.5" aria-hidden="true" focusable="false" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
