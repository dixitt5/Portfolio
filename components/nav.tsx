"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Games", href: "/games" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-0 border-b"
      style={{ borderBottomColor: "hsl(var(--foreground))", borderBottomWidth: "1px", borderBottomStyle: "solid" }}
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
