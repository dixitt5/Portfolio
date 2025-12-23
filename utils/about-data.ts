export const skills = {
  languages: ["TypeScript", "JavaScript", "C++", "Python", "Solidity"],
  frameworks: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express",
    "Jest",
    "Vitest",
    "Firebase",
    "AWS",
    "TailwindCSS",
    "Langchain",
    "Langgraph",
    "LlamaIndex",
    "Playwright",
  ],
};

export const achievements = [
  {
    event: "Odoo Hackathon '25",
    project: "Globetrotter",
    rank: "WINNER",
    prize: "₹1,50,000",
    type: "trophy" as const,
  },
  {
    event: "Azadi ka Amrut Mohatsav 2022",
    project: "Parivartan",
    rank: "2ND",
    prize: "₹30,000",
    type: "medal" as const,
  },
  {
    event: "Hack-NU-Thon 4.0",
    project: "SmartHive",
    rank: "2ND",
    prize: "₹7000",
    type: "medal" as const,
  },
  {
    event: "SSIP 2.0 Funding",
    project: "Parivartan",
    rank: "FUNDED",
    prize: "₹88,250",
    type: "funding" as const,
  },
];

export const openSourceContributions = [
  {
    project: "LlamaIndex",
    path: "/LlamaIndex",
    prs: [
      { title: "Add OpensearchVectorClient to conditionally check index existence for AOSS", type: "FIX", link: "https://github.com/run-llama/llama_index/pull/18560" },
    ],
  },
  {
    project: "Helper",
    path: "./Helper",
    prs: [
      { title: "devIndicators configuration for test environment", type: "FIX", link: "https://github.com/antiwork/helper/pull/868" },
      { title: "update image-attachments specs", type: "TEST", link: "https://github.com/antiwork/helper/pull/842" },
      { title: "add a CI action for running e2e tests", type: "FEAT", link: "https://github.com/antiwork/helper/pull/798" },
      { title: "update test environment setup and scripts for e2e testing", type: "FEAT", link: "https://github.com/antiwork/helper/pull/722" },
    ],
  },
];

export const experience = [
  {
    title: "Software Craftsperson",
    company: "Incubyte",
    period: "Jul 2024 — Present",
    location: "Remote",
    highlights: [
      "Worked on an in-house AI product for seamless adoption",
      "Tinkered POCs around various use-cases",
      "Handled AWS-based infrastructure for scalable deployments",
      "Tools: React, Next.js, NestJS, Express, AWS, Azure, TailwindCSS, Langchain, Langgraph, LlamaIndex, Python, TypeScript",
    ],
  },
  {
    title: "Software Craftsperson Intern",
    company: "Incubyte",
    period: "Jan 2024 — Jul 2024",
    location: "Remote",
    highlights: [
      "Enhanced UI/UX using ChakraUI, Next.js, and NestJS",
      "Built a RAG app powered by GPT for document queries",
      "Implemented Zapier automation for workflow efficiency",
      "Developed an identity resolution app using FullContact APIs",
      "Tools: Next.js, NestJS, TailwindCSS, Langchain, TypeScript",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "HypeScan",
    period: "Aug 2023 — Jan 2024",
    location: "Remote",
    highlights: [
      "Worked full-stack on a Sneaker sourcing platform",
      "Led end-to-end delivery of features from scratch",
      "Tools: Next.js, Firebase, TailwindCSS, Javascript",
    ],
  },
  {
    title: "Blockchain & Backend Developer Intern",
    company: "SkyHi",
    period: "Jul 2023 — Aug 2023",
    location: "Remote",
    highlights: [
      "Wrote smart contracts and handled WEB3 integration with a NextJS and React Native app",
      "Ramped up Firebase Firestore for storing transactional data off-chain",
      "Tools: Solidity, Web3.js, NextJS, React Native, Firebase, TailwindCSS, Javascript",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Authentical",
    period: "Feb 2023 — Jun 2023",
    location: "Remote",
    highlights: [
      "Built a certificate creation system with web3.js integrated with Polygon's Mumbai testnet",
      "Designed the certificate UI with EmailJS-based notifications",
      "Tools: Web3.js, Polygon, EmailJS, TypeScript",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (IT)",
  institution: "L.D College Of Engineering, Ahmedabad",
  period: "June 2020 — June 2024",
  cgpa: "8.34",
  coursework: ["Data Structures", "Algorithms", "OOP", "DBMS", "Software Engineering"],
};

export const contact = {
  email: "tilajidixit@gmail.com",
  github: "https://github.com/dixitt5",
  linkedin: "https://www.linkedin.com/in/dixit5/",
  medium: "https://medium.com/@tilajidixit",
  peerlist: "https://peerlist.io/dixit",
};
