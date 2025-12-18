import Link from "next/link";
import { openSourceContributions } from "@/utils/about-data";
import { SectionTitle } from "@/components/ui";

export function OpenSourceSection() {
  return (
    <div className="col-span-1 mt-4 md:col-span-6 md:mt-0">
      <SectionTitle>Open Source</SectionTitle>
      <div
        className="border"
        style={{
          borderColor: "hsl(var(--foreground))",
          borderWidth: "1px",
        }}
      >
        {/* Stats Header - 70/30 split */}
        <div
          className="grid grid-cols-[2fr_1fr]"
          style={{ borderBottom: "1px solid hsl(var(--foreground))" }}
        >
          {/* PR Count - Hero Number (wider) */}
          <div
            className="p-4"
            style={{ borderRight: "1px solid hsl(var(--foreground))" }}
          >
            <div
              className="font-mono text-[10px] uppercase tracking-widest mb-1"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              PRS MERGED
            </div>
            <div className="font-black text-5xl md:text-6xl tracking-tighter">
              {openSourceContributions.reduce(
                (acc, contribution) => acc + contribution.prs.length,
                0
              )}{" "}
              +
            </div>
          </div>

          {/* Bounties - Secondary (narrower) */}
          <div className="p-4">
            <div
              className="font-mono text-[10px] uppercase tracking-widest mb-1"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              EARNED
            </div>
            <div
              className="font-black text-4xl md:text-5xl tracking-wider leading-tight"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              $4.5K+
            </div>
          </div>
        </div>

        {/* PR List - File Tree Style */}
        <div className="p-4 font-mono text-xs space-y-3">
          {openSourceContributions.map((contribution, index) => (
            <div key={index}>
              {/* Repo Path */}
              <div
                className="font-bold"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {contribution.path}
              </div>
              {/* PRs with tree structure */}
              <div className="mt-1">
                {contribution.prs.map((pr, prIndex) => {
                  const isLast = prIndex === contribution.prs.length - 1;
                  return (
                    <div key={prIndex} className="flex items-center">
                      {/* Tree connector */}
                      <span
                        className="select-none w-6 shrink-0"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        {isLast ? "└─" : "├─"}
                      </span>
                      {/* Tag + Description */}
                      <Link
                        href={pr.link}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <span
                          className="px-1 font-bold text-[10px] leading-none py-0.5"
                          style={{
                            backgroundColor: "hsl(var(--foreground))",
                            color: "hsl(var(--background))",
                          }}
                        >
                          {pr.type}
                        </span>
                        <span style={{ color: "hsl(var(--foreground))" }}>
                          {pr.title.replace(`${pr.type}: `, "")}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
