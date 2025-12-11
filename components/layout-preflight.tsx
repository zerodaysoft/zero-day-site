import { META_THEME_COLORS } from "~/lib/config";

const LOCAL_STORAGE_UI_THEME_KEY = "theme";

/**
 * Layout preflight script to set the theme color based on user preference
 * and apply layout class. Should be included in the `<head>` of the document.
 */
export function LayoutPreflightScript() {
  return (
    <script
      id="layout-preflight"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: theme color handler
      dangerouslySetInnerHTML={{
        __html: `
try {
  if (
    localStorage['${LOCAL_STORAGE_UI_THEME_KEY}'] === 'dark' ||
    ((!('${LOCAL_STORAGE_UI_THEME_KEY}' in localStorage) || localStorage['${LOCAL_STORAGE_UI_THEME_KEY}'] === 'system') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '${META_THEME_COLORS.dark}');
  }
} catch {}`,
      }}
    />
  );
}
