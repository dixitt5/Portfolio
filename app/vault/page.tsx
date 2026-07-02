import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getVaultEntries, type ResolvedVaultEntry } from "@/lib/vault";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vault",
  description:
    "A curated vault of some of the best articles and pieces I've read on the internet.",
};

function formatDate(dateString: string): string {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .toUpperCase();
}

function VaultCard({ entry }: { entry: ResolvedVaultEntry }) {
  return (
    <a
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border transition-colors duration-300 hover:border-foreground"
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "hsl(var(--border))",
      }}
      aria-label={`Read "${entry.title}" on ${entry.domain}`}
    >
      <div
        className="relative aspect-video overflow-hidden border-b"
        style={{ borderColor: "hsl(var(--border))" }}
      >
        {entry.image ? (
          // Plain <img>: OG images live on arbitrary third-party domains that
          // can't be enumerated in next.config remotePatterns.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={entry.image}
            alt={entry.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6">
            <span
              className="font-mono text-sm uppercase tracking-wider text-center break-all"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {entry.domain}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {formatDate(entry.dateAdded)}
          </span>
          <ArrowRight
            className="h-5 w-5 transition-all duration-300 group-hover:-rotate-45"
            style={{ color: "hsl(var(--muted-foreground))" }}
          />
        </div>

        <h2 className="m-0! text-xl font-bold tracking-tight">
          {entry.title}
        </h2>

        <p
          className="m-0! text-sm leading-relaxed line-clamp-3"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {entry.note}
        </p>
      </div>
    </a>
  );
}

export default async function VaultPage() {
  const entries = await getVaultEntries();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <PageHeader
        title="Vault."
        subtitle="The best things I've read on the internet."
        itemCount={entries.length}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {entries.map((entry) => (
          <VaultCard key={entry.href} entry={entry} />
        ))}
      </div>
    </div>
  );
}
