import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { site, evidenceLabels, sources } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "GEO Contribution",
  description:
    "Generative Engine Optimization plan for BrandOps: cross-platform testing, entity clarity, source signals, and honest evidence boundaries.",
  alternates: { canonical: `${site.url}/geo` },
};

export default function GeoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">GEO</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Generative Engine Optimization</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          GEO is the discipline of making a brand easy for AI answer engines to cite accurately. It depends on entity clarity, source-worthy content, structured data, and repeated observation. It is not a promise of ranking inside ChatGPT or Perplexity.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">What we will test</h2>
          <p className="mt-2 text-muted-foreground">
            Each platform is tested with the same 8 prompts, repeated 3 times on separate days. We record mention, citation, accuracy, competitors, and source patterns.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PlatformCard title="ChatGPT / ChatGPT Search" description="OpenAI's consumer and search interfaces. Tests citation, hallucination, and competitor comparison." />
            <PlatformCard title="Perplexity" description="Citation-first answer engine. Source quality and link accuracy are the main signals." />
            <PlatformCard title="Gemini" description="Google's AI assistant and search integration. Tests entity understanding and Knowledge Panel alignment." />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Entity clarity checklist</h2>
          <p className="mt-2 text-muted-foreground">
            AI engines form an entity graph from many sources. The site must reinforce the same four facts everywhere.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <EntityCard title="Who we serve" body="B2B SaaS and professional-service firms, India-first, English-language, 10–200 employees." />
            <EntityCard title="What we deliver" body="Review-first content strategy, LinkedIn assets, newsletters, and AI search readiness audits." />
            <EntityCard title="Why we are credible" body="Operator-led positioning, documented method, clear evidence boundaries, and transparent measurement." />
            <EntityCard title="What we do not promise" body="No guaranteed AI rankings, traffic, leads, or revenue before testing. No fabricated results." />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-border/50 bg-muted/20 p-8">
          <h2 className="text-2xl font-semibold">Source and structured-data rules</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>
              <strong className="text-foreground">Match visible content.</strong> Structured data must describe what a human can actually read on the page.
            </li>
            <li>
              <strong className="text-foreground">Cite authoritative sources.</strong> Platform-level claims link to Google Search Central, OpenAI, or Perplexity documentation.
            </li>
            <li>
              <strong className="text-foreground">One prompt is not a rank.</strong> A single answer from ChatGPT or Perplexity is an observation, not a stable signal.
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Sources:{" "}
            <a href={sources.googleSearchCentral} className="underline">Google Search Central</a>,{" "}
            <a href={sources.openAIWebCrawler} className="underline">OpenAI bots</a>,{" "}
            <a href={sources.perplexityCitations} className="underline">Perplexity citations</a>.
          </p>        
        </section>

        <section className="mt-16">
          <Badge variant="outline" className="mb-4">Evidence Boundary</Badge>
          <p className="text-lg font-medium text-foreground">
            {evidenceLabels.planned} Cross-platform GEO testing has been scoped but not yet executed.
          </p>
          <div className="mt-6">
            <LinkButton href="/testing">See the testing plan</LinkButton>
          </div>
        </section>
      </div>
    </div>
  );
}

function PlatformCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function EntityCard({ title, body }: { title: string; body: string }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}
