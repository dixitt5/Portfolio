export function Footer() {
  return (
    <footer className="border-t mt-auto" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
          © {new Date().getFullYear()} Your Name
        </p>
      </div>
    </footer>
  );
}

