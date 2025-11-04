"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="text-sm w-12" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-sm hover:underline"
      aria-label="Toggle theme"
      style={{ color: "hsl(var(--muted-foreground))" }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

