# BrandOps AI Search Readiness & Demand Capture Audit

## Project type

Create a standalone, public portfolio case-study website. It must be separate from the live BrandOps marketing website.

The project demonstrates a real AI Search, AEO, and GEO strategy for BrandOps. It must clearly separate completed analysis from planned testing and future implementation.

## Business objective

Show how a B2B SaaS or professional-service firm can become easier for buyers to discover, understand, trust, and contact across Google Search, Google AI features, ChatGPT Search, Perplexity, and Gemini.

The project is not a promise of AI rankings, citations, leads, or revenue.

## Target audience

- B2B SaaS and professional-service firms.
- India-first, English-language market.
- Companies with 10–200 employees, an active website, and demand-generation goals.

## Required public pages

### 1. Home / Project overview

- Title: **BrandOps AI Search Readiness & Demand Capture Audit**
- Explain the problem: buyers use both search engines and AI tools to research providers.
- State the business goal: qualified discovery, not vanity AI visibility.
- Include a prominent evidence boundary: no AI-ranking, traffic, lead, or revenue results are claimed before testing.

### 2. Project approach

Show the operating flow:

`Buyer questions → technical and entity audit → AEO content strategy → GEO evidence strategy → measurement → improvement roadmap`

Explain that SEO, AEO, and GEO overlap and share foundational requirements.

### 3. AEO contribution

- Identify high-intent buyer questions.
- Group questions into problem discovery, comparison, and provider selection.
- Recommend answer-first content, clear headings, FAQs, comparison tables, and direct next steps.
- Include the proposed guide: **SEO vs AEO vs GEO for B2B Service Firms**.

### 4. GEO contribution

- Explain testing across ChatGPT, Perplexity, and Gemini.
- Record mention, citation/link, description accuracy, competitors, and cited-source patterns.
- Explain entity clarity: who BrandOps serves, what it delivers, why it is credible, and what it does not promise.
- Explain that valid structured data must match visible content.
- State that a prompt-level observation is not a stable AI rank.

### 5. Personal contribution

Write in first person and include:

- I defined the B2B target audience and commercial problem.
- I reframed the initiative from generic AI visibility to qualified demand capture.
- I designed the prompt research and cross-platform test method.
- I analyzed positioning, content, entity signals, technical readiness, and conversion gaps.
- I recommended answer-first content, entity improvements, source-backed evidence, and measurement rules.
- I created the 30/60/90-day roadmap and evidence boundaries.

### 6. Testing and measurement

Include the four measurement layers:

| Layer | Measures | Claim allowed |
|---|---|---|
| Technical readiness | Crawlability, indexability, canonicals, structured data, internal links | Observed condition |
| Search discovery | GSC impressions, clicks, CTR, relevant queries | Search trend |
| AI-answer observation | Repeated mentions, citations, source patterns, accuracy | Directional signal |
| Commercial intent | Qualified audit requests and consultation bookings | Measured funnel activity |

Also include an 8-prompt testing matrix and state that each prompt should be repeated three times per platform on separate days.

### 7. Recommendations and roadmap

Present three sections:

- **Required now:** establish baseline, clarify B2B positioning, create one guide, instrument qualified-lead events.
- **Recommended:** strengthen entity evidence, source quality, internal linking, and conversion flow.
- **Future:** publish more topic-cluster content only after measurement identifies validated gaps.

Include a 30/60/90-day roadmap and a clear Phase 2 implementation gate.

## Design direction

- Premium, restrained B2B consulting case-study design.
- Dark BrandOps-style visual system is acceptable, but do not copy the existing site mechanically.
- Use clear editorial hierarchy, generous spacing, diagrams, concise tables, and accessible contrast.
- Mobile responsive and keyboard accessible.
- Avoid gradients, glassmorphism, fake dashboards, fake metrics, and generic AI imagery.

## Technical requirements

- Use Next.js, TypeScript, and Tailwind CSS.
- Static content only; no authentication, payments, database, API keys, analytics credentials, or contact-form submission integration.
- Add page metadata, canonical URL, sitemap, robots file, and valid Organization/WebPage/Article structured data only where it matches visible content.
- Use local content/data files for the prompt matrix and roadmap.
- Include a README with local setup and deployment instructions.

## Content and claim rules

- Use the labels **Observed**, **Directional**, and **Hypothesis**.
- Do not invent GSC/GA4 data, AI citations, rankings, case studies, clients, leads, or revenue.
- Label all testing that has not been run as **Planned**.
- Cite official Google Search Central, OpenAI, and Perplexity documentation for platform-level factual statements.

## Acceptance criteria

- The site clearly explains the business problem, approach, AEO work, GEO work, personal contribution, testing method, and recommendations.
- A reader can distinguish actual work completed from future testing and implementation.
- All content is responsive, readable, accessible, and free of unsupported claims.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.
- A local browser review confirms the homepage and all internal links render without errors.
- Do not deploy until Rajesh explicitly approves the preview.

## Deployment process

1. Hermes creates a new GitHub repository named `brandops-ai-search-readiness-audit`.
2. Hermes builds the site locally and validates it.
3. Hermes pushes a preview branch—not `main`—to GitHub.
4. Connect the repository to Vercel and review the preview URL.
5. Merge to `main` and deploy to production only after Rajesh explicitly says: **Publish**.
