"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function MaintenancePage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
            Build In Progress
          </h1>
          <p
            className="font-mono text-sm uppercase tracking-widest"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Crafting something new{dots}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto space-y-2">
          <div
            className="h-1 w-full"
            style={{ backgroundColor: "hsl(var(--border))" }}
          >
            <div
              className="h-full animate-pulse"
              style={{
                backgroundColor: "hsl(var(--foreground))",
                width: "60%",
                animation: "progress 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Status message */}
        <div
          className="font-mono text-xs uppercase tracking-wider space-y-2"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <p className="opacity-60">Check back soon</p>
        </div>

        {/* Signature */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <p
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Dixit Tilaji
          </p>
        </div>
      </div>

      {/* CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 20%;
            margin-left: 0;
          }
          50% {
            width: 60%;
            margin-left: 20%;
          }
          100% {
            width: 20%;
            margin-left: 80%;
          }
        }
      `}</style>
    </div>
  );
}
