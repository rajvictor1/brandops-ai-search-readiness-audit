# BrandOps AI Search Readiness & Demand Capture Audit

A standalone public portfolio case-study website built with Next.js, TypeScript, and Tailwind CSS.

## What this project is

This site demonstrates a real AI Search, AEO, and GEO strategy for BrandOps. It clearly separates completed analysis from planned testing and future implementation. It does not claim AI rankings, traffic, leads, or revenue before testing.

## Live URL

- Preview / Production (awaiting explicit approval): `https://brandops-ai-search-readiness-audit.vercel.app`
- Repository: `https://github.com/rajvictor1/brandops-ai-search-readiness-audit`

## Pages

| Page | Purpose |
|---|---|
| `/` | Project overview and evidence boundary |
| `/approach` | Operating flow and why the order matters |
| `/aeo` | Answer Engine Optimization contribution |
| `/geo` | Generative Engine Optimization contribution |
| `/contribution` | Personal contribution by Rajesh Kumar |
| `/testing` | Measurement layers and 8-prompt testing matrix |
| `/roadmap` | Recommendations and 30/60/90-day roadmap |
| `/contact` | Audit request form (demonstration only) |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Static files are exported to `dist/`.

## Deployment

The project is configured for static export and Vercel. Push to a preview branch first; merge to `main` and deploy to production only after explicit approval.

## Design notes

- Premium, restrained B2B consulting case-study design.
- Mobile responsive and keyboard accessible.
- No gradients, glassmorphism, fake dashboards, fake metrics, or generic AI imagery.

## Evidence labels

- **Observed**: a condition we directly verified.
- **Directional**: a repeated pattern suggesting a trend, not proof.
- **Hypothesis**: a testable belief awaiting validation.
- **Planned**: work scoped but not yet executed.

## Author

Built by Rajesh Kumar | Powered by BrandOps Site.
