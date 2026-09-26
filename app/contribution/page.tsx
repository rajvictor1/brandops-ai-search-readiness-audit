import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Personal Contribution",
  description:
    "Rajesh Kumar's direct contribution to the BrandOps AI Search Readiness project: strategy, audience definition, method design, and roadmap.",
  alternates: { canonical: `${site.url}/contribution` },
};

const contributions = [
  {
    title: "Defined the B2B target audience and commercial problem",
    body: "I narrowed the audience to B2B SaaS and professional-service firms in India with 10–200 employees and active demand-generation goals. The problem is not vanity visibility. It is qualified discovery.",
  },
  {
    title: "Reframed the initiative from generic AI visibility to qualified demand capture",
    body: "I changed the goal from appearing in AI answers to being found, understood, trusted, and contacted by the right buyers at the right stage.",
  },
  {
    title: "Designed the prompt research and cross-platform test method",
    body: "I created an 8-prompt matrix covering awareness, comparison, provider selection, measurement, and risk. Each prompt is repeated three times per platform on separate days.",
  },
  {
    title: "Analyzed positioning, content, entity signals, technical readiness, and conversion gaps",
    body: "I mapped buyer questions, identified content gaps, reviewed entity clarity, and listed technical and conversion prerequisites.",
  },
  {
    title: "Recommended answer-first content, entity improvements, source-backed evidence, and measurement rules",
    body: "I proposed the AEO content rules, GEO entity checklist, structured-data discipline, and the four-layer measurement model.",
  },
  {
    title: "Created the 30/60/90-day roadmap and evidence boundaries",
    body: "I scoped Required now, Recommended, and Future work, added a Phase 2 gate, and defined the Observed / Directional / Hypothesis / Planned labels.",
  },
];

export default function ContributionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">Personal Contribution</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">What I did on this project</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Written in first person. This section separates the work I completed from the testing and implementation that is still planned.
        </p>

        <div className="mt-12 space-y-6">
          {contributions.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border/50 bg-muted/20 p-8">
          <h2 className="text-2xl font-semibold">About me</h2>
          <p className="mt-4 text-muted-foreground">
            I am {site.author}, {site.authorTitle}. I build review-first content systems and AI search readiness audits for B2B service firms.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <LinkButton href={site.linkedIn}>LinkedIn profile</LinkButton>
            <LinkButton href={site.brandopsUrl} variant="outline">BrandOps site</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
