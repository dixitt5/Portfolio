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
    <nav className="border-b" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-medium hover:underline">
            Your Name
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm hover:underline ${
                      isActive ? "" : ""
                    }`}
                    style={isActive ? {} : { color: "hsl(var(--muted-foreground))" }}
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

