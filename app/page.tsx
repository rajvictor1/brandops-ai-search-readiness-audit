import { Metadata } from "next";
import { ArrowRight, Search, Bot, Users, BarChart3 } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site, evidenceLabels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "BrandOps AI Search Readiness & Demand Capture Audit",
  description:
    "A portfolio case study on how B2B service firms can become easier to discover, understand, trust, and contact across Google Search and AI answer engines.",
  alternates: { canonical: site.url },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">Portfolio Case Study</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            AI Search Readiness & Demand Capture Audit
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            How a B2B service firm becomes easier to discover, understand, trust, and contact across Google Search, Google AI features, ChatGPT Search, Perplexity, and Gemini.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/approach" size="lg">
              See the approach <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Request an audit
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-medium text-muted-foreground">
            {evidenceLabels.observed} {evidenceLabels.directional} {evidenceLabels.hypothesis} {evidenceLabels.planned}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <Search className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-base">Search & AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Buyers now research providers on both classic search and AI answer engines. The project covers both.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Bot className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-base">AEO + GEO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Answer Engine Optimization for featured answers and Generative Engine Optimization for AI citations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-base">B2B-first</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Target audience: B2B SaaS and professional-service firms in India, English-language market, 10–200 employees.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <BarChart3 className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-base">Measured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Four measurement layers from technical readiness to qualified consultation bookings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border/50 bg-muted/20 p-8">
            <Badge variant="outline" className="mb-4">Evidence Boundary</Badge>
            <p className="text-base leading-relaxed text-foreground">
              This project is a strategy and audit framework. It does not claim AI rankings, traffic, leads, or revenue before testing. Every result is labeled as Observed, Directional, Hypothesis, or Planned.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
