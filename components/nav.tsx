"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Ramblings", href: "/ramblings" },
  { name: "Games", href: "/games" },
];

export function Nav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  useEffect(() => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 100);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-0 border-b transition-transform duration-300 ${
          isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
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
            <div className="flex items-center gap-4">
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

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                  style={{ backgroundColor: "hsl(var(--foreground))" }}
                />
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                  style={{ backgroundColor: "hsl(var(--foreground))" }}
                />
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                  style={{ backgroundColor: "hsl(var(--foreground))" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "hsl(var(--background))" }}
      >
        <div className="flex flex-col justify-center items-start h-full px-6 pt-14">
          {navigation.map((item, index) => {
            const isActive =
              pathname === item.href ||
              pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-xl uppercase tracking-wider py-3 transition-transform duration-300 hover:translate-x-2 ${
                  isActive ? "font-bold" : ""
                }`}
                style={{
                  color: isActive
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--muted-foreground))",
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  borderBottom: "1px solid hsl(var(--foreground))",
                  width: "100%",
                }}
              >
                <span className="font-mono text-xs mr-3" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
