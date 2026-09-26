import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Request an Audit",
  description:
    "Request a BrandOps AI Search Readiness audit. The form is for demonstration only; no submissions are sent.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Badge variant="secondary" className="mb-4">Contact</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Request an AI Search Readiness Audit</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          This is a portfolio demonstration page. The form below does not submit to a backend, analytics service, or API. To request a real audit, email{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <a href={site.linkedIn} className="underline" target="_blank" rel="noreferrer">{site.author}</a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">BrandOps Site</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <a href={site.brandopsUrl} className="underline" target="_blank" rel="noreferrer">{site.brandopsUrl}</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
