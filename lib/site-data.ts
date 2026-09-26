export const site = {
  name: "BrandOps AI Search Readiness & Demand Capture Audit",
  shortName: "BrandOps AI Search Audit",
  url: "https://brandops-ai-search-readiness-audit.vercel.app",
  brandopsUrl: "https://www.brandops.site",
  author: "Rajesh Kumar",
  authorTitle: "Founder, BrandOps",
  // Verified LinkedIn URL supplied by Rajesh Kumar on 2026-09-26.
  linkedIn: "https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/",
  email: "hello@brandops.site",
  language: "en",
};

export const nav = [
  { label: "Overview", href: "/" },
  { label: "Approach", href: "/approach" },
  { label: "AEO", href: "/aeo" },
  { label: "GEO", href: "/geo" },
  { label: "My Contribution", href: "/contribution" },
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

// Neutral high-intent buyer questions for the main test set.
export const promptMatrix = [
  { id: "P1", prompt: "How can a B2B SaaS company become easier to discover through AI search?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Problem / solution" },
  { id: "P2", prompt: "What is the difference between SEO, AEO, and GEO for B2B services?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Comparison / education" },
  { id: "P3", prompt: "What should a B2B company measure for AI search readiness?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Measurement" },
  { id: "P4", prompt: "What are common mistakes in AI search optimization for services?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Risk / trust" },
  { id: "P5", prompt: "Who builds AI-ready content strategies for Indian B2B service firms?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Provider selection" },
  { id: "P6", prompt: "How do B2B buyers use ChatGPT and Perplexity to research service providers?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Buyer behavior" },
  { id: "P7", prompt: "What makes a B2B service website easier to cite in AI-generated answers?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Source signals" },
  { id: "P8", prompt: "How can a B2B firm turn AI search visibility into qualified consultation requests?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Demand capture" },
];

// Separate brand/entity accuracy check.
export const brandPrompts = [
  { id: "B1", prompt: "What is BrandOps and what does it do?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Brand entity clarity" },
  { id: "B2", prompt: "Which company helps B2B service firms with review-first content and LinkedIn assets?", platforms: ["ChatGPT", "Perplexity", "Gemini"], intent: "Category / positioning" },
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

// Homepage "What Rajesh Personally Contributed" section.
export const personalContributions = [
  {
    title: "ICP and commercial problem selection",
    body: "Defined the ideal customer profile as B2B SaaS and professional-service firms in India, 10–200 employees, with active demand-generation goals. Reframed the objective from vanity AI visibility to qualified discovery.",
  },
  {
    title: "Buyer-question and AI-platform testing methodology",
    body: "Mapped buyer questions across problem discovery, comparison, and provider selection. Designed an 8-prompt neutral testing matrix for ChatGPT, Perplexity, and Gemini, with a separate brand-entity accuracy check.",
  },
  {
    title: "Technical, entity, content, authority, and conversion-gap audit",
    body: "Analyzed crawlability, indexability, structured data, entity signals, answer-first content opportunities, source-worthiness, internal linking, and the path from AI answers to qualified consultation requests.",
  },
  {
    title: "Competitor versus AI-cited authority-source analysis",
    body: "Compared who appears in AI answers today against the authority sources AI engines prefer, then identified the content and entity gaps BrandOps must close to become a credible cited source.",
  },
  {
    title: "Audit offer and qualified-lead definition",
    body: "Designed the AI Search Readiness Audit offer, defined what counts as a qualified lead, and instrumented the conversion events needed to measure commercial intent rather than traffic.",
  },
  {
    title: "Evidence-based prioritisation, reporting framework, and portfolio narrative",
    body: "Created the Observed / Directional / Hypothesis / Planned label system, the four-layer measurement model, the 30/60/90-day roadmap, and this public portfolio case study to document the work transparently.",
  },
];
