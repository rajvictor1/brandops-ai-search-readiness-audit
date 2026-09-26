import { Metadata } from "next";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the BrandOps AI Search Readiness audit portfolio case-study website.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-6 text-muted-foreground">Last updated: {new Date().toISOString().split("T")[0]}</p>

        <section className="mt-10 space-y-6 text-muted-foreground">
          <p>
            This website is a public portfolio case study. It demonstrates an AI search readiness and demand capture audit strategy for BrandOps. It is not a live service agreement.
          </p>

          <h2 className="text-xl font-semibold text-foreground">No guaranteed results</h2>
          <p>
            Nothing on this site promises specific search rankings, AI citations, traffic, leads, or revenue. All claims are labeled as Observed, Directional, Hypothesis, or Planned.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Contact form is for demonstration</h2>
          <p>
            The audit request form on the contact page does not send submissions to a backend or third-party service. To contact BrandOps, use the email address shown on the page.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p>
            The content, structure, and methodology on this site are created by {site.author}. You may read and share the public page, but you may not copy the methodology as your own work without attribution.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Changes</h2>
          <p>
            This case study may be updated as the project evolves. Check the page date for the latest version.
          </p>
        </section>
      </div>
    </div>
  );
}
