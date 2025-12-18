export function AboutHeader() {
  return (
    <header className="mb-12 md:mb-20">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-4">
        About Me.
      </h1>
      <p
        className="text-xl md:text-2xl font-medium tracking-tight"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Software Craftsperson specializing in scalable web applications.
      </p>
    </header>
  );
}
