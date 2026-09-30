import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectEstimatorModal } from "@/components/estimator/ProjectEstimatorModal";
import { ContactModal } from "@/components/contact/ContactModal";
import { PORTFOLIO_OWNER } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PORTFOLIO_OWNER.name} | ${PORTFOLIO_OWNER.title}`,
  description: PORTFOLIO_OWNER.bio,
  keywords: [
    "Software Architect",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Cloud Architecture",
    "Enterprise Web",
    "Consultoría IA",
  ],
  authors: [{ name: PORTFOLIO_OWNER.name }],
  openGraph: {
    title: `${PORTFOLIO_OWNER.name} - Software Architect & Tech Lead`,
    description: PORTFOLIO_OWNER.tagline,
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-[#06080d] text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        <QueryProvider>
          <ThemeProvider>
            <div className="relative min-h-screen flex flex-col justify-between">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>

            {/* Interactive Client Modals */}
            <ProjectEstimatorModal />
            <ContactModal />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
