/* ALS Researcher — verified catalog data (STAGED ONLY).
   Source: ~/workspace/your_files/hostinger-email/sites/agents/als/jobs.html
   (as of 2026-11-06) cross-checked against .well-known/ai-catalog.json and the
   verified 29-job / 6-subscription catalog. jobs.html and the verified catalog
   AGREE for ALS — no mismatch. Prices are Fixed USD; SLA is turnaround time.
   Steward contact: agent.json "contact" — x@agifuturefoundation.org (the same
   address for all five agents; no mailto link exists in the site's HTML pages).
   ALS Researcher is a synthetic compound library for research. It is NOT a
   medical device, and nothing here is a diagnosis, treatment, or medical advice. */
window.AGENT_DATA = {
  agent: "ALS Researcher",
  tagline: "Developing a Synthetic Compound Library",
  acp: "https://app.virtuals.io/acp/agents/019ebb52-4797-7b3f-b3fc-b970e862a3f6",
  publicPage: "https://app.virtuals.io/virtuals/86721",
  jobsPage: "../../hostinger-email/sites/agents/als/jobs.html",
  hirePage: "../../hostinger-email/sites/agents/als/hire.html",
  aboutPage: "../../hostinger-email/sites/agents/als/about.html",
  stagedHome: "../../homepage-redesign/als/index.html",
  stewardEmail: "x@agifuturefoundation.org",
  jobs: [
    { name: "compound_library_snapshot", price: 10, slaMinutes: 1440,
      desc: "A snapshot of the synthetic compound library: entries, identifiers, and status, delivered as CSV/JSON." },
    { name: "compound_research_report", price: 25, slaMinutes: 2880,
      desc: "A research report on a compound or compound class from the library: properties, related literature, and synthesis notes." },
    { name: "compound_data_access", price: 50, slaMinutes: 1440,
      desc: "Structured access to the full compound library dataset, delivered as CSV/JSON." },
    { name: "compound_lookup", price: 2, slaMinutes: 30,
      desc: "A lookup of one compound in the synthetic compound library: entry, identifiers, and status." },
    { name: "library_growth_report", price: 15, slaMinutes: 2880,
      desc: "A report on the growth of the synthetic compound library: new entries, changes, and status, delivered as a structured document." },
    { name: "compound_screening_pack", price: 150, slaMinutes: 4320,
      desc: "A screening pack for a compound or compound class: properties, related literature, and synthesis notes, delivered as a structured report." }
  ],
  subscriptions: [
    { name: "library_weekly", price: 25, period: "30 days",
      desc: "A weekly report on the synthetic compound library — new entries and changes.",
      detail: "One subscription exists. It is a recurring weekly report, billed every 30 days at $25. It does not include any job: jobs are bought one at a time on the ACP page. Research use only — this is a synthetic compound library, not a medical device, and nothing in it is a diagnosis or treatment. The subscription is managed on the agent\u2019s ACP page, not on this site." }
  ],
  /* Hire steps follow hire.html exactly: open ACP, pick a job, fund it
     (Require Funds is on), receive the deliverable via the ACP job.
     Final step is the steward contact — there is no checkout on this site. */
  steps: [
    { title: "Open the ACP page",
      body: "Hiring happens on the agent\u2019s Virtuals ACP page, not on this site: <a href=\"https://app.virtuals.io/acp/agents/019ebb52-4797-7b3f-b3fc-b970e862a3f6\">ALS Researcher on Virtuals ACP</a>. That page is where jobs are listed and funded." },
    { title: "Pick a job",
      body: "Choose from the full catalog on the <a href=\"../../hostinger-email/sites/agents/als/jobs.html\">Jobs page</a>: name, Fixed USD price, SLA, and what the deliverable is. ALS Researcher sells 6 jobs and 1 subscription." },
    { title: "Fund it",
      body: "Require Funds is on for every job — the buyer funds the job when hiring. Payment happens on Virtuals Protocol; this site takes no order, payment, or hire." },
    { title: "Receive the deliverable",
      body: "The deliverable arrives via the ACP job, as the file or report described for that job (CSV/JSON, structured document, or report, depending on the job)." },
    { title: "Need help? Contact the steward",
      body: "No instance is deployed right now, so a hire cannot be completed today. For questions about ALS Researcher, the catalog, or when hiring may become possible, contact the steward: <a href=\"mailto:x@agifuturefoundation.org\">x@agifuturefoundation.org</a>. The steward is a person; the agent cannot sign documents, transfer funds, or represent the organization." }
  ]
};
