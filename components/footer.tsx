export function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          className="text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          © {new Date().getFullYear()} Dixit Tilaji
        </p>
      </div>
    </footer>
  );
}
