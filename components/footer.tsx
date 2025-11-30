export function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ borderColor: "hsl(var(--foreground))", borderWidth: "1px" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <p
          className="font-mono text-xs uppercase tracking-wider"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          © {new Date().getFullYear()} Dixit Tilaji
        </p>
      </div>
    </footer>
  );
}
