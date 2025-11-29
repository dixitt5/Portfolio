import { Metadata } from "next";
import { STRING_CONSTANTS } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Games",
  description: "Play interactive mini-games and compete on the leaderboard.",
};

export default function GamesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-6">Games</h1>
      <p style={{ color: "hsl(var(--muted-foreground))" }}>
        {STRING_CONSTANTS.STILL_WORKING}
      </p>
    </div>
  );
}
