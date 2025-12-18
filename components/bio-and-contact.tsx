import { ArrowRight } from "lucide-react";
import { contact } from "@/utils/about-data";
import { BentoCard, SectionTitle } from "@/components/ui";

export function BioAndContact() {
  return (
    <>
      <div className="col-span-1 md:col-span-8">
        <BentoCard>
          <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
            I craft robust software solutions with a focus on clean code,
            test-driven development, and seamless user experiences. Currently
            working in cross-functional teams and building scalable
            applications.
          </p>
          <p
            className="text-lg md:text-xl mt-6 leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            I believe every piece of written code should tell a story.
          </p>
        </BentoCard>
      </div>

      <div className="col-span-1 md:col-span-4">
        <BentoCard className="flex flex-col justify-between">
          <div>
            <SectionTitle>Connect</SectionTitle>
            <ul className="space-y-4">
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline flex items-center group"
                >
                  GitHub
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href={contact.peerlist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline flex items-center group"
                >
                  Peerlist
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline flex items-center group"
                >
                  LinkedIn
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href={contact.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline flex items-center group"
                >
                  Medium
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg font-bold hover:underline flex items-center group"
                >
                  Email
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </BentoCard>
      </div>
    </>
  );
}
