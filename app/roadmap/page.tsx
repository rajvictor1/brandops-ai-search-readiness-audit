import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { roadmap, timeline, site, evidenceLabels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Recommendations & Roadmap",
  description:
    "Required now, recommended, and future actions plus a 30/60/90-day roadmap for the BrandOps AI Search Readiness project.",
  alternates: { canonical: `${site.url}/roadmap` },
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">Recommendations & Roadmap</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">What to do next</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The roadmap is split into three priorities and a 30/60/90-day timeline. Phase 2 begins only after measurement proves the baseline and first content changes.
        </p>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <PriorityCard
            title="Required now"
            badge="Must do"
            items={roadmap.now}
          />
          <PriorityCard
            title="Recommended"
            badge="Should do"
            items={roadmap.recommended}
          />
          <PriorityCard
            title="Future"
            badge="Phase 2 gate"
            items={roadmap.future}
          />
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">30/60/90-day timeline</h2>
          <div className="mt-8 space-y-6">
            {timeline.map((phase) => (
              <Card key={phase.phase}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{phase.phase}</Badge>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {phase.items.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground">• {item}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-border/50 bg-muted/20 p-8">
          <Badge variant="outline" className="mb-4">Phase 2 Gate</Badge>
          <p className="text-lg font-medium text-foreground">
            No additional topic-cluster content is published until we have measurement data showing validated gaps. Phase 2 opens only when:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Baseline technical readiness is documented.</li>
            <li>The first guide is live and indexed.</li>
            <li>Qualified-lead events are instrumented.</li>
            <li>At least one AI-answer observation round is complete.</li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            {evidenceLabels.planned} Phase 2 content is planned, not scheduled.
          </p>
          <div className="mt-6">
            <LinkButton href="/contact">Request an audit</LinkButton>
          </div>
        </section>
      </div>
    </div>
  );
}

function PriorityCard({ title, badge, items }: { title: string; badge: string; items: string[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge variant="outline">{badge}</Badge>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <p key={item} className="text-sm text-muted-foreground">• {item}</p>
        ))}
      </CardContent>
    </Card>
  );
}
