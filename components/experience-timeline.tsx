interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

function ExperienceRow({
  job,
  isFirst,
  isLast,
}: {
  job: ExperienceItem;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[200px_1fr]"
      style={{
        borderBottom: isLast ? "none" : "1px solid hsl(var(--foreground))",
      }}
    >
      <div
        className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider"
        style={{
          borderRight: "1px solid hsl(var(--foreground))",
          backgroundColor: isFirst ? "hsl(var(--foreground))" : "transparent",
          color: isFirst ? "hsl(var(--background))" : "hsl(var(--foreground))",
        }}
      >
        <div className="font-bold mb-2">{job.period}</div>
        <div
          className="mb-1"
          style={{
            color: isFirst
              ? "hsl(var(--background) / 0.8)"
              : "hsl(var(--muted-foreground))",
          }}
        >
          {job.company}
        </div>
        <div
          style={{
            color: isFirst
              ? "hsl(var(--background) / 0.6)"
              : "hsl(var(--muted-foreground))",
          }}
        >
          {job.location}
        </div>
        {isFirst && (
          <div
            className="mt-3 inline-block px-1 text-[10px] font-bold"
            style={{
              backgroundColor: "hsl(var(--background))",
              color: "hsl(var(--foreground))",
            }}
          >
            CURRENT
          </div>
        )}
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-bold uppercase tracking-tight mb-3">
          {job.title}
        </h3>
        <ul className="space-y-1.5 font-mono text-xs leading-relaxed">
          {job.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <span
                className="select-none"
                style={{ color: "hsl(var(--foreground))" }}
              >
                →
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceTimeline({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <div
      className="border"
      style={{
        borderColor: "hsl(var(--foreground))",
        borderWidth: "1px",
      }}
    >
      {experiences.map((job, index) => (
        <ExperienceRow
          key={index}
          job={job}
          isFirst={index === 0}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
