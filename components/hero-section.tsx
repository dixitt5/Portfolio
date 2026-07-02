"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import HeroIllustration from "@/public/hero-illustration.svg";
import { ScrollDownArrow } from "./scroll-down-arrow";

function WindGust({
  initial,
  delay,
}: {
  initial: { top: string; left: string };
  delay?: string;
}) {
  const [pos, setPos] = useState(initial);

  const respawn = () =>
    setPos({
      top: `${Math.round(Math.random() * 90)}%`,
      left: `${Math.round(Math.random() * 110 - 25)}%`,
    });

  return (
    <svg
      aria-hidden
      onAnimationIteration={respawn}
      className="pointer-events-none absolute w-36"
      style={{ color: "hsl(var(--muted-foreground))", ...pos }}
      viewBox="0 0 160 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path
        className="wind-gust"
        pathLength={1}
        style={delay ? { animationDelay: delay } : undefined}
        d="M0 12 H58 c10 0 13 -10 5 -10 c-8 0 -8 10 5 10 H155"
      />
    </svg>
  );
}

function WindGusts() {
  return (
    <>
      <WindGust initial={{ top: "50%", left: "-25%" }} />
      <WindGust initial={{ top: "-5%", left: "25%" }} delay="0.9s" />
      <WindGust initial={{ top: "33%", left: "80%" }} delay="1.7s" />
    </>
  );
}

function RainDrops() {
  const drops = useMemo(
    () =>
      Array.from({ length: 18 }, () => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${1 + Math.random() * 0.8}s`,
      })),
    [],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ color: "hsl(var(--muted-foreground))" }}
    >
      {drops.map((d, i) => (
        <span
          key={i}
          className="rain-drop"
          style={{
            left: d.left,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}

const WEATHERS = [
  "sunny",
  "sunny",
  "sunny",
  "windy",
  "windy",
  "rainy",
] as const;

function WeatherEffectsInner() {
  const [weather] = useState<(typeof WEATHERS)[number]>(
    () => WEATHERS[Math.floor(Math.random() * WEATHERS.length)],
  );

  if (weather === "windy") return <WindGusts />;
  if (weather === "rainy") return <RainDrops />;
  return null; // sunny
}

const WeatherEffects = dynamic(() => Promise.resolve(WeatherEffectsInner), {
  ssr: false,
});

export function HeroSection() {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("about-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-8 overflow-x-clip">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[90vw] md:max-w-full mx-auto">
          <div className="order-2 md:order-1 space-y-8 md:pr-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
                Dixit Tilaji
              </h1>
              <p
                className="font-mono text-sm uppercase tracking-widest"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Thinker. Builder.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={scrollToAbout}
                className="group relative inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider font-bold cursor-pointer"
              >
                <span>About Me</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider font-bold"
              >
                <span>View Projects</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div
              className="relative w-full aspect-square max-w-[400px] md:max-w-[450px]"
              style={{ color: "hsl(var(--foreground))" }}
            >
              <WeatherEffects />
              <HeroIllustration className="w-full h-full transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      <ScrollDownArrow delay={3000} targetId="about-section" />
    </div>
  );
}
