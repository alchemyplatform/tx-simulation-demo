import Button from "@common/components/Button";
import useTheme, { Theme } from "@common/hooks/useTheme";
import { useEffect } from "react";
import Image from "next/image";
import AlchemyIcon from "public/alchemy.png";
import AlchemyWhiteIcon from "public/alchemy-white.png";

const ThemeButton = ({
  theme,
  switchTheme,
  currentTheme,
  text,
}: {
  theme: Theme;
  switchTheme: (theme: Theme) => void;
  currentTheme: Theme;
  text: string;
}) => {
  return (
    <Button
      onClick={() => switchTheme(theme)}
      styles={`btn-neutral btn-sm ${
        currentTheme === theme ? `` : `btn-outline`
      }`}
    >
      {text}
    </Button>
  );
};

const ThemeSwitcher = ({
  theme,
  switchTheme,
}: {
  theme: Theme;
  switchTheme: (theme: Theme) => void;
}) => {
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-row gap-3">
      <ThemeButton
        switchTheme={switchTheme}
        text="🔆"
        theme={"bumblebee"}
        currentTheme={theme}
      />
      <ThemeButton
        switchTheme={switchTheme}
        text="🌚"
        theme={"business"}
        currentTheme={theme}
      />
    </div>
  );
};

export default function Navbar() {
  const { theme, switchTheme, isDark } = useTheme();
  return (
    <div className="navbar font-mono bg-base-200 gap-3 text-xl">
      <div>
        {isDark ? (
          <Image
            src={AlchemyWhiteIcon}
            width={120}
            height={24}
            alt="Alchemy icon"
          />
        ) : (
          <Image src={AlchemyIcon} width={120} height={24} alt="Alchemy icon" />
        )}
      </div>
      <div className="flex-1 flex flex-row gap-3">
        <div>/</div>
        <div className="items-center">Code Demos</div>
        <div>/</div>
        <div className="border-dashed border-black border-b-2">
          <a
            href="https://docs.alchemy.com/reference/simulation"
            target="_blank"
          >
            API: Transaction Simulation ↗️
          </a>
        </div>
      </div>
      {/* <ThemeSwitcher theme={theme} switchTheme={switchTheme} /> */}
    </div>
  );
}
