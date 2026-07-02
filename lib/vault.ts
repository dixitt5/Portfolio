export interface VaultEntry {
  url: string
  /** Personal take: why this piece is worth reading. */
  note: string
  dateAdded: string
  // Optional manual overrides — fall back to the site's OG metadata when omitted.
  title?: string
  image?: string
}

export interface ResolvedVaultEntry {
  href: string
  domain: string
  note: string
  dateAdded: string
  title: string
  image: string | null
}

export const vaultEntries: VaultEntry[] = [
  {
    url: 'https://paperclover.net/blog/webdev/one-year-next-app-router',
    note: 'Reflections after a year of building with the Next.js App Router.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://www.seangoedecke.com/unblockable/',
    note: "On becoming an 'unblockable' engineer who keeps shipping past obstacles.",
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://ceodinner.substack.com/p/the-ai-wildfire-is-coming-its-going',
    note: 'A take on the sweeping disruption AI is about to bring across industries.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://matklad.github.io/2025/12/06/mechanical-habits.html',
    note: 'Small mechanical habits that compound into better engineering.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://ma.tt/',
    note: 'he writes almost everything.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://simonwillison.net/2026/Jan/19/scaling-long-running-autonomous-coding/',
    note: 'Notes on scaling long-running autonomous coding agents.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://openai.com/index/scaling-postgresql/',
    note: 'How OpenAI scaled PostgreSQL to handle massive load.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://cpu.land/lets-talk-about-forks-and-cows',
    note: 'Just read it.',
    dateAdded: '2026-05-30',
  },
  {
    url: 'https://dev.to/isaachagoel/you-dont-know-undoredo-4hol',
    note: 'How to do undo/redo right.',
    dateAdded: '2026-07-02',
  },
  {
    url: 'https://www.nan.fyi/database',
    note: 'Build your own database.',
    dateAdded: '2026-07-02',
  },
  {
    url: 'https://moretothat.com/the-finality-of-everything/',
    note: 'Being present in the moment.',
    dateAdded: '2026-07-02',
  },
  {
    url: 'https://nadh.in/blog/code-is-cheap/',
    note: 'Self explanatory.',
    dateAdded: '2026-07-02',
  },
  {
    url: 'https://www.benkuhn.net/hard/',
    note: 'Important problems are ultimately more fun!',
    dateAdded: '2026-07-02',
  },
  {
    url: 'https://www.albertbridgecapital.com/post/stay-in-the-game',
    note: 'Good things happen to good people.',
    dateAdded: '2026-07-02',
  },
  {
    url: 'https://swyx.io/marketing-yourself',
    note: 'Big one, but very valuable.',
    dateAdded: '2026-07-02',
  }
]

function normalizeUrl(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`
}

function domainOf(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return href
  }
}

interface MicrolinkData {
  title?: string
  image?: { url?: string } | null
}

async function fetchOgMetadata(href: string): Promise<MicrolinkData | null> {
  try {
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(href)}`,
      // Resolve once at build, refresh weekly. Keeps us well under the free limit.
      { next: { revalidate: 604800 } },
    )
    if (!res.ok) return null
    const json = (await res.json()) as { status?: string; data?: MicrolinkData }
    if (json.status !== 'success' || !json.data) return null
    return json.data
  } catch {
    return null
  }
}

async function resolveEntry(entry: VaultEntry): Promise<ResolvedVaultEntry> {
  const href = normalizeUrl(entry.url)
  const domain = domainOf(href)

  const og = await fetchOgMetadata(href)

  return {
    href,
    domain,
    note: entry.note,
    dateAdded: entry.dateAdded,
    title: entry.title ?? og?.title ?? domain,
    image: entry.image ?? og?.image?.url ?? null,
  }
}

export async function getVaultEntries(): Promise<ResolvedVaultEntry[]> {
  const results = await Promise.allSettled(vaultEntries.map(resolveEntry))

  return results
    .filter(
      (r): r is PromiseFulfilledResult<ResolvedVaultEntry> =>
        r.status === 'fulfilled',
    )
    .map((r) => r.value)
    .sort(
      (a, b) =>
        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
    )
}
