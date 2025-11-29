import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroIllustration from "@/public/hero-illustration.svg";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-8">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[90vw] md:max-w-full mx-auto">
          <div className="order-2 md:order-1 space-y-8 md:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Dixit Tilaji
              </h1>
              <p
                className="text-lg md:text-xl"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Thinker. Builder.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-1.5 text-lg font-medium pb-1"
              >
                <span>About Me</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-1.5 text-lg font-medium pb-1"
              >
                <span>View Projects</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div
              className="relative w-full aspect-square max-w-[400px] md:max-w-[450px]"
              style={{ color: "hsl(var(--foreground))" }}
            >
              <HeroIllustration className="w-full h-full transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
