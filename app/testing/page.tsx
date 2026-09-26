import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { promptMatrix, brandPrompts, measurementLayers, site, evidenceLabels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testing & Measurement",
  description:
    "The 4-layer measurement model and prompt testing matrix for the BrandOps AI Search Readiness project.",
  alternates: { canonical: `${site.url}/testing` },
};

export default function TestingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">Testing & Measurement</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How we will measure success</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The right claim depends on the right layer. We separate technical facts from search trends, AI-answer observations, and commercial outcomes.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Four measurement layers</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-semibold">Layer</th>
                  <th className="py-3 pr-4 text-left font-semibold">Measures</th>
                  <th className="py-3 text-left font-semibold">Claim allowed</th>
                </tr>
              </thead>
              <tbody>
                {measurementLayers.map((row) => (
                  <tr key={row.layer} className="border-b border-border/50">
                    <td className="py-4 pr-4 font-medium">{row.layer}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{row.measures}</td>
                    <td className="py-4">
                      <Badge variant="outline">{row.claim}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Main test set: neutral high-intent buyer questions</h2>
          <p className="mt-2 text-muted-foreground">
            Each prompt is run on ChatGPT, Perplexity, and Gemini. Each run is repeated three times on separate days. We record whether BrandOps is mentioned, whether it is cited or linked, what sources appear, and whether the description is accurate.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-semibold">ID</th>
                  <th className="py-3 pr-4 text-left font-semibold">Prompt</th>
                  <th className="py-3 pr-4 text-left font-semibold">Platforms</th>
                  <th className="py-3 text-left font-semibold">Intent</th>
                </tr>
              </thead>
              <tbody>
                {promptMatrix.map((row) => (
                  <tr key={row.id} className="border-b border-border/50">
                    <td className="py-4 pr-4 font-mono text-xs">{row.id}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{row.prompt}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{row.platforms.join(", ")}</td>
                    <td className="py-4">
                      <Badge variant="secondary">{row.intent}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Brand / entity accuracy check</h2>
          <p className="mt-2 text-muted-foreground">
            Kept separate from the neutral buyer-question set so we can judge factual accuracy about BrandOps without biasing the main discovery test.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left font-semibold">ID</th>
                  <th className="py-3 pr-4 text-left font-semibold">Prompt</th>
                  <th className="py-3 pr-4 text-left font-semibold">Platforms</th>
                  <th className="py-3 text-left font-semibold">Intent</th>
                </tr>
              </thead>
              <tbody>
                {brandPrompts.map((row) => (
                  <tr key={row.id} className="border-b border-border/50">
                    <td className="py-4 pr-4 font-mono text-xs">{row.id}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{row.prompt}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{row.platforms.join(", ")}</td>
                    <td className="py-4">
                      <Badge variant="outline">{row.intent}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Mention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Does the answer name BrandOps or a clear descriptor of the service? Record yes/no and context.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Citation / Link</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Does the answer cite brandops.site, LinkedIn, a directory, or a third-party source? Record the URL.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Is the description factually correct? Flag hallucinations, outdated claims, or competitor confusion.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 rounded-2xl border border-border/50 bg-muted/20 p-8">
          <Badge variant="outline" className="mb-4">Evidence Boundary</Badge>
          <p className="text-lg font-medium text-foreground">
            {evidenceLabels.planned} The full matrix testing has been scoped but not executed.
          </p>
          <div className="mt-6">
            <LinkButton href="/roadmap">See the roadmap</LinkButton>
          </div>
        </section>
      </div>
    </div>
  );
}
