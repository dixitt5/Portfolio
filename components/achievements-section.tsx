import { achievements } from "@/utils/about-data";
import { SectionTitle } from "@/components/ui";

export function AchievementsSection() {
  return (
    <div className="col-span-1 mt-4 md:col-span-6 md:mt-0">
      <SectionTitle>Achievements</SectionTitle>
      <div
        className="border"
        style={{
          borderColor: "hsl(var(--foreground))",
          borderWidth: "1px",
        }}
      >
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr_auto_auto] items-center"
            style={{
              borderBottom:
                index < achievements.length - 1
                  ? "1px solid hsl(var(--foreground))"
                  : "none",
            }}
          >
            <div
              className="p-3 font-mono text-2xl font-bold self-stretch flex items-center"
              style={{
                borderRight: "1px solid hsl(var(--foreground))",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="p-3">
              <div className="font-bold text-sm uppercase tracking-tight">
                {achievement.event}
              </div>
              <div
                className="font-mono text-xs"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {achievement.project}
              </div>
            </div>

            <div
              className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider self-center"
              style={{
                backgroundColor: "hsl(var(--foreground))",
                color: "hsl(var(--background))",
              }}
            >
              {achievement.rank}
            </div>

            <div
              className="p-3 font-mono text-sm font-bold text-right min-w-[80px]"
              style={{
                borderLeft: "1px solid hsl(var(--foreground))",
              }}
            >
              {achievement.prize || "—"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
