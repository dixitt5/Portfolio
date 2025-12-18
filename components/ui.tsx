import { ReactNode } from "react";

export function BentoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border p-6 md:p-8 h-full ${className}`}
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "hsl(var(--border))",
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-sm font-bold uppercase tracking-wider mb-6 block"
      style={{ color: "hsl(var(--muted-foreground))" }}
    >
      {children}
    </span>
  );
}

export function TechChip({ children }: { children: ReactNode }) {
  return (
    <span
      className="px-2 py-1 text-xs font-medium font-mono border uppercase"
      style={{
        backgroundColor: "transparent",
        borderColor: "hsl(var(--foreground))",
        borderWidth: "1px",
        color: "hsl(var(--muted-foreground))",
      }}
    >
      {children}
    </span>
  );
}

export function PageHeader({
  title,
  subtitle,
  itemCount,
}: {
  title: string;
  subtitle?: string;
  itemCount?: number;
}) {
  return (
    <header className="mb-12 md:mb-20">
      <div className="flex items-baseline justify-between">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-4">
          {title}
        </h1>
        {itemCount !== undefined && (
          <span
            className="hidden md:block font-mono text-sm"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            ({itemCount} ITEMS)
          </span>
        )}
      </div>
      {subtitle && (
        <p
          className="text-xl md:text-2xl font-medium tracking-tight"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

export function Badge({
  children,
  variant = "default",
  cornerAnchor = false,
}: {
  children: ReactNode;
  variant?: "default" | "winner" | "runner-up";
  cornerAnchor?: boolean;
}) {
  const variants = {
    default: {
      backgroundColor: "hsl(var(--foreground))",
      color: "hsl(var(--background))",
    },
    winner: {
      backgroundColor: "hsl(var(--foreground))",
      color: "hsl(var(--background))",
    },
    "runner-up": {
      backgroundColor: "hsl(var(--background))",
      color: "hsl(var(--foreground))",
      border: "1px solid hsl(var(--foreground))",
    },
  };

  if (cornerAnchor) {
    return (
      <span
        className="absolute bottom-0 right-0 z-20 text-[10px] font-mono font-bold px-3 py-2 uppercase tracking-wider"
        style={variants[variant]}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className="text-[10px] font-mono font-bold px-2 py-1 uppercase tracking-wider"
      style={variants[variant]}
    >
      {children}
    </span>
  );
}
