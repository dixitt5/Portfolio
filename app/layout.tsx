import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { ScrollToTop } from "@/components/scroll-to-top";
import { MaintenancePage } from "@/components/maintenance";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dixit Tilaji | Portfolio",
    template: "%s | Dixit Tilaji",
  },
  description:
    "Dixit and his adventures in the world of software development.",
  keywords: ["portfolio", "developer", "blog", "projects", "web development", "dixit tilaji"],
  authors: [{ name: "Dixit Tilaji" }],
  creator: "Dixit Tilaji",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Dixit Tilaji | Portfolio",
    description:
      "Dixit and his adventures in the world of software development.",
    siteName: "Dixit Tilaji",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Dixit Tilaji",
    description:
      "Dixit and his adventures in the world of software development.",
    creator: "@dixitt5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className={`font-sans flex flex-col min-h-screen prose-ui antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isMaintenanceMode ? (
            <MaintenancePage />
          ) : (
            <>
              <Nav />
              <main className="flex-1 pt-14">
                {children}
                <Analytics />
              </main>
              <ScrollToTop />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
