import { Metadata } from "next";
import { Trophy, Medal, DollarSign, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my experience, and what I do.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12">About</h1>

      <div className="space-y-12">
        <section>
          <p className="mb-4">
            I&apos;m a Software Craftsperson at Incubyte, leading
            cross-functional teams and building scalable web applications using
            modern technologies.
          </p>
          <p style={{ color: "hsl(var(--muted-foreground))" }}>
            With expertise in React, Next.js, Node.js, and AWS, I focus on
            delivering high-quality, performant solutions. I&apos;m passionate
            about clean code, test-driven development, and creating seamless
            user experiences.
          </p>
        </section>

        <section>
          <h2
            className="text-xl tracking-wider mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Achievements
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-4 text-lg">Hackathon Wins</h3>
              <ul
                className="text-sm space-y-3 list-none"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <li className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>
                      Winner, Odoo Hackathon &apos;25
                    </span>
                    {" — "}
                    <span>Globetrotter (₹1,00,000 prize)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>
                      Winner, Azadi ka Amrut Mohatsav Hackathon 2022
                    </span>
                    {" — "}
                    <span>Parivartan (₹30,000 among 2000+ teams)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Medal className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>
                      2nd place in Hack-NU-Thon 4.0
                    </span>
                    {" — "}
                    <span>SmartHive</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>
                      Secured SSIP 2.0 funding
                    </span>
                    {" — "}
                    <span>₹88,250 for Parivartan</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-lg">Open Source Contributions</h3>
              <div className="space-y-4">
                <div className="text-sm mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Earned $4,500 in open-source bounties
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4" style={{ borderColor: "hsl(var(--border))" }}>
                    <div className="mb-3">
                      <h4 className="font-medium mb-1" style={{ color: "hsl(var(--foreground))" }}>
                        LlamaIndex
                      </h4>
                      <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Multiple merged PRs contributing to the LlamaIndex ecosystem
                      </p>
                    </div>
                    <div className="space-y-2">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm py-1.5 px-2 rounded hover:bg-accent transition-colors group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="flex-1" style={{ color: "hsl(var(--foreground))" }}>
                          PR Title/Description
                        </span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm py-1.5 px-2 rounded hover:bg-accent transition-colors group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="flex-1" style={{ color: "hsl(var(--foreground))" }}>
                          Another PR Title/Description
                        </span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4" style={{ borderColor: "hsl(var(--border))" }}>
                    <div className="mb-3">
                      <h4 className="font-medium mb-1" style={{ color: "hsl(var(--foreground))" }}>
                        Helper
                      </h4>
                      <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                        Contributions to Helper project
                      </p>
                    </div>
                    <div className="space-y-2">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm py-1.5 px-2 rounded hover:bg-accent transition-colors group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="flex-1" style={{ color: "hsl(var(--foreground))" }}>
                          PR Title/Description
                        </span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-xl tracking-wider mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Experience
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-1">Software Craftsperson</h3>
              <p
                className="text-sm mb-2"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Incubyte · Jul 2024 - Present (Remote)
              </p>
              <ul
                className="text-sm space-y-1 list-disc list-inside"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <li>
                  Leading a cross-functional team for a US-based client using
                  Express.js, React, and Next.js
                </li>
                <li>
                  Integrated in-house AI product with client requirements for
                  seamless adoption
                </li>
                <li>
                  Maintained AWS-based infrastructure for scalable deployments
                </li>
                <li>
                  Developed reusable components and optimized backend workflows
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Software Craftsperson Intern</h3>
              <p
                className="text-sm mb-2"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Incubyte · Jan 2024 - Jul 2024 (Remote)
              </p>
              <ul
                className="text-sm space-y-1 list-disc list-inside"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <li>Enhanced UI/UX using ChakraUI, Next.js, and NestJS</li>
                <li>Built RAG app powered by GPT for document queries</li>
                <li>Created Zapier automation for workflow efficiency</li>
                <li>
                  Developed identity resolution app using FullContact APIs
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Software Developer Intern</h3>
              <p
                className="text-sm mb-2"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                HypeScan · Aug 2023 - Jan 2024 (Remote)
              </p>
              <ul
                className="text-sm space-y-1 list-disc list-inside"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <li>
                  Architected Firebase solutions including Cloud Functions
                </li>
                <li>Led frontend initiatives for improved UX</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">
                Blockchain & Backend Developer Intern
              </h3>
              <p
                className="text-sm mb-2"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                SkyHi · Jul 2023 - Aug 2023 (Remote)
              </p>
              <ul
                className="text-sm space-y-1 list-disc list-inside"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <li>Developed blockchain product and smart contracts</li>
                <li>
                  Implemented Firebase database for off-chain data management
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Software Developer Intern</h3>
              <p
                className="text-sm mb-2"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Authentical · Feb 2023 - Jun 2023 (Remote)
              </p>
              <ul
                className="text-sm space-y-1 list-disc list-inside"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <li>
                  Built certificate creation system with web3.js on Mumbai
                  testnet
                </li>
                <li>
                  Designed certificate UI with EmailJS-based notifications
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-xl tracking-wider mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Skills
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <p
                className="text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                TypeScript, JavaScript, C++, C, Solidity
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Frameworks & Tools</h3>
              <p
                className="text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                React, Next.js, Node.js, NestJS, Jest, Vitest, Express,
                Firebase, AWS, TailwindCSS, Langchain
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-xl tracking-wider mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Education
          </h2>
          <div>
            <h3 className="font-medium mb-1">Bachelor of Engineering (IT)</h3>
            <p
              className="text-sm mb-2"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              L.D College Of Engineering, Ahmedabad · June 2020 - June 2024
            </p>
            <p
              className="text-sm"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              CGPA: 8.34 · Coursework: Data Structures, Algorithms, OOP, DBMS,
              Software Engineering
            </p>
          </div>
        </section>

        <section>
          <h2
            className="text-xl tracking-wider mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Contact
          </h2>
          <div className="space-y-2">
            <a
              href="mailto:tilajidixit@gmail.com"
              className="block hover:underline"
            >
              tilajidixit@gmail.com
            </a>
            <a
              href="https://github.com/dixitt5"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dixit5/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@tilajidixit"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Medium
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
