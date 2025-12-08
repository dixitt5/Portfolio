"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="text-sm w-12" />;
  }
  const currentTheme = resolvedTheme || theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="text-sm hover:opacity-70 transition-opacity cursor-pointer text-muted-foreground"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
