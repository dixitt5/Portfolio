import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
  description: "Play interactive mini-games and compete on the leaderboard.",
};

export default function GamesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Games</h1>
      <p style={{ color: "hsl(var(--muted-foreground))" }}>
        Coming soon. Interactive mini-games with leaderboards.
      </p>
    </div>
  );
}
