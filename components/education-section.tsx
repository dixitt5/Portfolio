import { education } from "@/utils/about-data";
import { SectionTitle } from "@/components/ui";

export function EducationSection() {
  return (
    <div className="col-span-1 md:col-span-12">
      <SectionTitle>Education</SectionTitle>
      <div
        className="border grid grid-cols-1 md:grid-cols-[200px_1fr]"
        style={{
          borderColor: "hsl(var(--foreground))",
          borderWidth: "1px",
        }}
      >
        <div
          className="p-4 md:p-5 font-mono text-xs uppercase tracking-wider"
          style={{
            borderRight: "1px solid hsl(var(--foreground))",
          }}
        >
          <div className="font-bold mb-2">{education.period}</div>
          <div
            className="mb-1"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            CGPA: {education.cgpa}
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-bold uppercase tracking-tight mb-2">
            {education.degree}
          </h3>
          <p
            className="font-mono text-xs"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            → {education.institution}
          </p>
        </div>
      </div>
    </div>
  );
}
