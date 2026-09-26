import { Metadata } from "next";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the BrandOps AI Search Readiness audit portfolio case-study website.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground">Last updated: {new Date().toISOString().split("T")[0]}</p>

        <section className="mt-10 space-y-6 text-muted-foreground">
          <p>
            This website is a static portfolio case study. It does not collect, store, or process personal data automatically.
          </p>

          <h2 className="text-xl font-semibold text-foreground">No analytics or tracking cookies</h2>
          <p>
            The site does not use Google Analytics, Meta pixels, or other third-party trackers. No advertising identifiers are collected.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Contact form</h2>
          <p>
            The contact form is for demonstration only. Submissions are not sent to any server, database, email service, or third party. No data entered into the form is retained.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Hosting logs</h2>
          <p>
            The hosting provider (Vercel) may collect standard server logs such as IP address, browser type, and requested URL as part of normal operations. We do not process those logs for personal data.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For privacy questions, email{" "}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
