import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { buyerQuestions, site, evidenceLabels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "AEO Contribution",
  description:
    "Answer Engine Optimization strategy for BrandOps: buyer questions, answer-first content, FAQs, comparison tables, and the SEO vs AEO vs GEO guide.",
  alternates: { canonical: `${site.url}/aeo` },
};

export default function AeoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">AEO</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Answer Engine Optimization</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          AEO turns real buyer questions into clear, answer-first content that search engines and AI assistants can surface directly. For B2B services, the goal is not traffic volume. It is being the credible answer at the moment a buyer is deciding whom to trust.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Buyer question map</h2>
          <p className="mt-2 text-muted-foreground">
            Questions grouped by buying stage. Each group becomes a content cluster.
          </p>
          <div className="mt-8 grid gap-6">
            <QuestionGroup title="Problem discovery" questions={buyerQuestions.problemDiscovery} />
            <QuestionGroup title="Comparison" questions={buyerQuestions.comparison} />
            <QuestionGroup title="Provider selection" questions={buyerQuestions.selection} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Answer-first content rules</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Answer in the first paragraph</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  State the core answer in 40–60 words, then expand with proof, context, and next steps.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Clear, descriptive headings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use the exact question as the H2. Follow with a direct answer, not a story.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">FAQ blocks with schema</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mark up concise Q&A blocks with FAQPage schema so they are eligible for rich results and AI summaries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Comparison tables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Help buyers evaluate options side by side. Tables are easy for AI engines to parse and cite.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-border/50 bg-muted/20 p-8">
          <Badge variant="outline" className="mb-4">Planned Guide</Badge>
          <h2 className="text-2xl font-semibold">SEO vs AEO vs GEO for B2B Service Firms</h2>
          <p className="mt-4 text-muted-foreground">
            A practical guide that defines each discipline, shows where they overlap, and gives a B2B service firm a concrete checklist. It targets the comparison stage of the buyer journey and is designed to earn featured snippets, People Also Ask placements, and AI citations.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {evidenceLabels.planned}
          </p>
          <div className="mt-6">
            <LinkButton href="/geo">Read the GEO contribution</LinkButton>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuestionGroup({ title, questions }: { title: string; questions: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {questions.map((q) => (
          <p key={q} className="text-sm text-muted-foreground">• {q}</p>
        ))}
      </CardContent>
    </Card>
  );
}
