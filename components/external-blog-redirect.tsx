"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface ExternalBlogRedirectProps {
  url: string;
  title: string;
}

export function ExternalBlogRedirect({
  url,
  title,
}: ExternalBlogRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.referrerPolicy = "origin";
      link.click();

      router.push("/ramblings");
    }, 3000);

    return () => clearTimeout(timer);
  }, [url, router]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="space-y-2">
          <Loader2 className="w-12 h-12 animate-spin mx-auto" />
          <p
            className="font-sans tracking-tight decoration-2 text-lg leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Redirecting to <strong>{title}</strong> in a moment, please wait...
          </p>
        </div>

        <div
          className="border-t w-full"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <p
            className="mb-4 font-sans text-sm"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            If you are not redirected automatically, click{" "}
            <Link
              href={url}
              target="_blank"
              rel="noopener"
              referrerPolicy="origin"
              className="underline"
            >
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
