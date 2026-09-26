import Link from "next/link";
import { site, nav } from "@/lib/site-data";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-base font-semibold">{site.shortName}</p>
            <p className="text-sm text-muted-foreground">
              A public portfolio case study by{" "}
              <Link href={site.linkedIn} className="underline underline-offset-2 hover:text-foreground">
                {site.author}
              </Link>
              .
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold">Project</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold">BrandOps</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={site.brandopsUrl} className="hover:text-foreground">Live site</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">Request an audit</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold">Legal</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>Built by {site.author} | Powered by{" "}
            <Link href={site.brandopsUrl} className="underline underline-offset-2 hover:text-foreground">BrandOps Site</Link>
          </p>
          <p>© {new Date().getFullYear()} BrandOps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
