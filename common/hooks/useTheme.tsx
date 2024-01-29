import { useEffect, useState } from "react";

export const DarkTheme = ["business", "forest", "synthwave", "night"] as const;
export const LightTheme = [
  "retro",
  "cupcake",
  "corporate",
  "bumblebee",
] as const;
export const Themes = [...DarkTheme, ...LightTheme] as const;

type DarkTheme = (typeof DarkTheme)[number];
type LightTheme = (typeof LightTheme)[number];

export type Theme = (typeof Themes)[number];
const DEFAULT_THEME: Theme = "bumblebee";

export default function useTheme() {
  const [theme, switchTheme] = useState<Theme>(DEFAULT_THEME);
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    if (DarkTheme.find((th) => th === theme)) {
      return setIsDark(true);
    }
    return setIsDark(false);
  }, [theme]);
  return { theme, switchTheme, isDark };
}
