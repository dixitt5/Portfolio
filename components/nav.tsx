"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Games", href: "/games" },
];

export function Nav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-0 border-b transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        borderBottomColor: "hsl(var(--foreground))",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            className="font-mono font-bold text-sm uppercase tracking-wider hover:underline"
          >
            Dixit Tilaji
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-mono text-xs uppercase tracking-wider hover:underline ${
                      isActive ? "font-bold" : ""
                    }`}
                    style={
                      isActive ? {} : { color: "hsl(var(--muted-foreground))" }
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
