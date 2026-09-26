import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The operating flow for the BrandOps AI Search Readiness project: buyer questions, audit, AEO strategy, GEO testing, measurement, and roadmap.",
  alternates: { canonical: `${site.url}/approach` },
};

const steps = [
  { title: "Buyer questions", body: "Map what B2B buyers actually ask during problem discovery, comparison, and provider selection." },
  { title: "Technical + entity audit", body: "Check crawlability, indexability, canonicals, structured data, internal links, and entity signals." },
  { title: "AEO content strategy", body: "Create answer-first content, clear headings, FAQs, comparison tables, and direct next steps." },
  { title: "GEO evidence strategy", body: "Build source-worthy content and entity clarity so AI engines can cite and describe the brand accurately." },
  { title: "Measurement", body: "Track technical readiness, search discovery, AI-answer observations, and qualified commercial intent." },
  { title: "Improvement roadmap", body: "Use evidence to decide what to build, revise, or test next in 30/60/90-day cycles." },
];

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">Approach</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How the audit works</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          SEO, AEO, and GEO share the same foundation: a crawlable, credible, well-structured site that answers real buyer questions. This project treats them as overlapping layers rather than separate tactics.
        </p>

        <div className="mt-12 overflow-x-auto rounded-xl border border-border/50 bg-muted/20 p-6">
          <p className="mb-4 text-center text-sm font-medium text-muted-foreground">Operating flow</p>
          <div className="flex min-w-[700px] items-center justify-between gap-2 text-xs font-medium">
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-2">
                <span className="rounded-md bg-primary px-2 py-1 text-primary-foreground">
                  {i + 1}
                </span>
                <span className="whitespace-nowrap text-foreground">{step.title}</span>
                {i < steps.length - 1 && (
                  <ArrowRight className="ml-1 h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border/50 bg-muted/20 p-8">
          <h2 className="text-2xl font-semibold">Why this order matters</h2>
          <p className="mt-4 text-muted-foreground">
            Content that answers the wrong questions will not convert. Technical fixes that ignore buyer intent will not show up in answers. GEO testing without baseline measurement is just anecdotes. The flow keeps strategy, evidence, and measurement in the right sequence.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <LinkButton href="/aeo">See AEO work</LinkButton>
            <LinkButton href="/geo" variant="outline">See GEO work</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
