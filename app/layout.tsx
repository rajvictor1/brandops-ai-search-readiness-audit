import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site-data";
import { WebSite, Organization, Person, WithContext } from "schema-dts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "A real AI Search, AEO, and GEO project framework for B2B service firms. Portfolio case study by Rajesh Kumar.",
  keywords: [
    "AI search readiness",
    "AEO",
    "GEO",
    "B2B SEO",
    "answer engine optimization",
    "generative engine optimization",
    "BrandOps",
    "demand capture",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.shortName,
    title: site.name,
    description:
      "A portfolio case study on B2B AI search readiness: technical audit, AEO strategy, GEO testing, and a 30/60/90-day roadmap.",
    images: [`${site.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "A portfolio case study on B2B AI search readiness: technical audit, AEO strategy, GEO testing, and a 30/60/90-day roadmap.",
    images: [`${site.url}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

const structuredData: WithContext<WebSite | Organization | Person>[] = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.shortName,
    url: site.url,
    inLanguage: site.language,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BrandOps",
    url: site.brandopsUrl,
    logo: `${site.url}/logo.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author,
    url: site.url,
    jobTitle: site.authorTitle,
    worksFor: { "@type": "Organization", name: "BrandOps", url: site.brandopsUrl },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <head>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
