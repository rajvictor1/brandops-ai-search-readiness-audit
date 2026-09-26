export const site = {
  name: "BrandOps AI Search Readiness & Demand Capture Audit",
  shortName: "BrandOps AI Search Audit",
  url: "https://brandops-ai-search-readiness-audit.vercel.app",
  brandopsUrl: "https://www.brandops.site",
  author: "Rajesh Kumar",
  authorTitle: "Founder, BrandOps",
  linkedIn: "https://www.linkedin.com/in/rajeshkumarlink",
  email: "hello@brandops.site",
  language: "en",
};

export const nav = [
  { label: "Overview", href: "/" },
  { label: "Approach", href: "/approach" },
  { label: "AEO", href: "/aeo" },
  { label: "GEO", href: "/geo" },
  { label: "Testing", href: "/testing" },
  { label: "Roadmap", href: "/roadmap" },
];

export const buyerQuestions = {
  problemDiscovery: [
    "How do B2B service firms get found when buyers research on ChatGPT and Perplexity?",
    "Why is traditional SEO alone not enough for AI-assisted buying decisions?",
    "What is Answer Engine Optimization for professional services?",
  ],
  comparison: [
    "What is the difference between SEO, AEO, and GEO?",
    "Which AI search platforms matter for B2B demand generation?",
    "How does structured data help with AI visibility?",
  ],
  selection: [
    "How can a B2B firm build trust in AI-generated answers?",
    "What signals make a service provider easier to cite and verify?",
    "How do you measure whether AI search work is actually working?",
  ],
};

export const promptMatrix = [
  { id: "P1", prompt: "What is BrandOps and what does it do?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Awareness / entity clarity" },
  { id: "P2", prompt: "Which company helps B2B service firms with review-first content and LinkedIn assets?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Category / positioning" },
  { id: "P3", prompt: "What is the difference between SEO, AEO, and GEO for B2B services?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Comparison / education" },
  { id: "P4", prompt: "How can a B2B SaaS company become easier to discover through AI search?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Problem / solution" },
  { id: "P5", prompt: "Who builds AI-ready content strategies for Indian B2B service firms?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Provider selection" },
  { id: "P6", prompt: "What should a B2B company measure for AI search readiness?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Measurement" },
  { id: "P7", prompt: "What are common mistakes in AI search optimization for services?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Risk / trust" },
  { id: "P8", prompt: "How does BrandOps help companies capture demand from AI search?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Demand capture" },
];

export const measurementLayers = [
  {
    layer: "Technical readiness",
    measures: "Crawlability, indexability, canonicals, structured data, internal links",
    claim: "Observed condition",
  },
  {
    layer: "Search discovery",
    measures: "GSC impressions, clicks, CTR, relevant queries",
    claim: "Search trend",
  },
  {
    layer: "AI-answer observation",
    measures: "Repeated mentions, citations, source patterns, accuracy",
    claim: "Directional signal",
  },
  {
    layer: "Commercial intent",
    measures: "Qualified audit requests and consultation bookings",
    claim: "Measured funnel activity",
  },
];

export const roadmap = {
  now: [
    "Establish baseline technical and content audit",
    "Clarify B2B positioning and entity signals",
    "Create the guide: SEO vs AEO vs GEO for B2B Service Firms",
    "Instrument qualified-lead events (audit request, consultation booking)",
  ],
  recommended: [
    "Strengthen entity evidence across About, LinkedIn, and directory profiles",
    "Improve source quality and citation-worthiness of key pages",
    "Build internal linking between service pages and the resources hub",
    "Polish conversion flow from AI answers to website action",
  ],
  future: [
    "Publish additional topic-cluster content only after measurement identifies validated gaps",
    "Run quarterly prompt-matrix repeats to track directional change",
    "Build case-study evidence only after real client outcomes are measured",
  ],
};

export const timeline = [
  { phase: "30 days", title: "Baseline + First Signal", items: ["Technical audit completed", "Buyer-question map finalized", "First guide published", "Qualified-lead events instrumented"] },
  { phase: "60 days", title: "Entity + Source Work", items: ["Entity signals aligned across platforms", "Structured data validated against visible content", "Internal linking improved", "First AI-answer observation round completed"] },
  { phase: "90 days", title: "Measurement + Gate", items: ["Prompt matrix repeated across platforms", "GSC and lead-event trends reviewed", "Phase 2 content plan scoped from measured gaps", "Publish or revise based on evidence only"] },
];

export const evidenceLabels = {
  observed: "Observed: a condition we directly verified on the site or a platform.",
  directional: "Directional: a repeated pattern that suggests a trend but is not proof of causation.",
  hypothesis: "Hypothesis: a testable belief that must be validated with data before it becomes a claim.",
  planned: "Planned: work that has been scoped but not yet executed.",
};

export const sources = {
  googleSearchCentral: "https://developers.google.com/search/docs",
  openAIWebCrawler: "https://platform.openai.com/docs/bots",
  perplexityCitations: "https://www.perplexity.ai/hub/faq/does-perplexity-cite-sources",
};
