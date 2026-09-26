import { Metadata } from "next";
import { ArrowRight, Search, Bot, Users, BarChart3, CheckCircle } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site, evidenceLabels, personalContributions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "BrandOps AI Search Readiness & Demand Capture Audit",
  description:
    "A real AI Search, AEO, and GEO project framework for B2B service firms. Portfolio case study by Rajesh Kumar.",
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
            A real AI Search, AEO, and GEO project framework for BrandOps. It shows how a B2B service firm can become easier to discover, understand, trust, and contact across Google Search, Google AI features, ChatGPT Search, Perplexity, and Gemini.
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
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">What this project is</Badge>
          <h2 className="text-3xl font-bold tracking-tight">A framework, not a claim of results</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            This site documents a real strategy and audit framework. It does not claim achieved AI rankings, citations, traffic, leads, or revenue. Every output is labeled as Observed, Directional, Hypothesis, or Planned so the reader can separate completed work from future testing and implementation.
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
                Buyers research providers on both classic search and AI answer engines. The framework covers both discovery paths.
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
                Answer Engine Optimization and Generative Engine Optimization share a foundation: credible, structured, answer-first content.
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
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">My Contribution</Badge>
          <h2 className="text-3xl font-bold tracking-tight">What Rajesh personally contributed</h2>
          <p className="mt-4 text-muted-foreground">
            The six areas I owned on this project.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalContributions.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader className="pb-2">
                <CheckCircle className="mb-2 h-5 w-5 text-primary" />
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <LinkButton href="/contribution">Read the full contribution</LinkButton>
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
