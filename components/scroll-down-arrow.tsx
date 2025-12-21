"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollDownArrowProps {
  delay?: number;
  targetId?: string;
}

export function ScrollDownArrow({
  delay = 3000,
  targetId = "about-section",
}: ScrollDownArrowProps) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShouldShow(true);
    }, delay);

    const handleScroll = () => {
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      const rect = targetSection.getBoundingClientRect();
      const isTargetVisible = rect.top <= window.innerHeight * 0.7;

      if (isTargetVisible) {
        setIsPanelVisible(false);
      } else if (shouldShow) {
        setIsPanelVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay, targetId, shouldShow]);

  const handleClick = () => {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!isPanelVisible) return null;

  return (
    <div
      className={`fixed bottom-8 right-4 md:right-auto md:left-1/2 -translate-x-1/2 z-50 
    transition-all duration-1000 animate-bounce
    ${isPanelVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
    `}
    >
      <div className="flex items-center gap-2 transition-all duration-1000">
        <button
          onClick={handleClick}
          className="group p-2 transition-all duration-1000"
          aria-label="Scroll to section"
        >
          <ChevronDown
            className="h-8 w-8 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
}
