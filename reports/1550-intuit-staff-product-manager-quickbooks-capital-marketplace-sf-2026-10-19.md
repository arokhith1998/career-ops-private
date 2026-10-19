# Evaluation: Intuit — Staff Product Manager - QuickBooks Capital Marketplace (San Francisco, CA)

**Date:** 2026-10-19
**URL:** https://www.linkedin.com/jobs/view/4480972177
**Via:** —
**Track:** us
**Archetype:** Product Manager (PM), fintech marketplace
**Score:** 3.2/5
**Legitimacy:** High Confidence
**Work Auth:** ⚠️ Unstated (JD silent on sponsorship; upstream visa gate cleared this row as TIER-1 — no adjustment applied, per task instruction)
**Portfolio variant chosen:** https://adhi-product-ai.vercel.app/ref/intuit (Product Management discipline; AI-forward -> -ai variant, per `nightly-rules.md` §6)
**PDF:** not generated — discover-phase scoring only; build decision deferred to the 09:00 build run per `config/nightly.yml` build_policy
**Cross-posting note:** This req is also posted for Mountain View, CA (LinkedIn ID 4480954807, scored separately as report #1551). Both postings are byte-identical in JD body, posted-time and applicant-count language, and the Mountain View posting's own pay-range line still literally reads "San Francisco" — this is almost certainly one underlying req cross-posted to two cities. Per this run's task instruction, this San Francisco posting (#1550) is the one tracked and queued; Mountain View (#1551) is recorded as a duplicate and not independently queued.

---

## Machine Summary

```yaml
company: "Intuit"
role: "Staff Product Manager - QuickBooks Capital Marketplace"
score: 3.2
legitimacy_tier: "High Confidence"
archetype: "Product Manager (fintech marketplace)"
final_decision: "Queue (no_deck)"
hard_stops: []
soft_gaps:
  - "'Staff' level typically implies 8+ years and broader scope ownership than the candidate's ~5 years and US-track mid-level band (Associate-Manager); the JD body itself asks only '5+ years', which is why this passed the mechanical shortlist, but the title-level stretch is real"
  - "Candidate's formal PM track is thinner than a dedicated PM title would suggest; most product-shaping work sits inside marketing or founder seats"
  - "Known company-wide signal (already on file from prior Intuit tracker rows): Intuit cut approximately 17% of its workforce in May 2026 -- a general company-health note, not specific to this team"
top_strengths:
  - "PriceKeel: 'decision-integrity layer for B2B SaaS deal pricing... selling to RevOps, Sales leadership and Finance against legacy CPQ and deal-desk tooling' -- a close domain analog to a fintech marketplace connecting customers to lenders with transparency at its core"
  - "Applied Materials Claude AI-agent automation is a direct, named-tool answer to 'commands mastery of the latest AI tools for product development' and 'Hands-on fluency with AI tools to research, analyze, prototype'"
  - "Sensata and Plug Power funnel/conversion work (GTM launches, -25% CPA via funnel optimization) transfers to 'own the roadmap and execution for the core funnel of marketplace'"
risk_level: "Medium"
confidence: "Medium"
next_action: "Queue for no_deck build: resume + cover letter, no deck, at the 09:00 run"
work_auth: "unstated"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "San Francisco $188,500 - $255,000"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "pass"
  interview_redflags: "not_evaluated"
  ai_infra: "consistent"
```

## A) Role Summary

| Field | Finding |
|---|---|
| Archetype | Product Manager (fintech marketplace) — primary fit per `config/profile.yml` US track |
| Domain | QuickBooks Capital Marketplace: connects small-business customers to lending partners, with AI reshaping product development and experience |
| Function | Own roadmap and execution for the marketplace's core funnel (application, offer, funding, servicing) across dozens of lenders |
| Seniority | Mid-Senior level (LinkedIn tag); title says "Staff," body asks "5+ years designing and delivering products in a Product Management role" |
| Remote | San Francisco, CA (in geo_allow list); no explicit attendance/hybrid language in the JD body |
| Team size | Not stated; leads cross-functional partners "from engineering to compliance" |
| Culture screen | **Pass (qualitative).** No `culture_screen` config set. JD is specific about mission (small-business survivability), scope (a "meaningful, discrete part" of the experience) and AI-forward framing. Known company-health note (May 2026 workforce reduction, already on file) tempers but does not contradict the posting's own content. |
| TL;DR | A Staff-level PM seat owning the marketplace funnel for Intuit's fintech lending product, with strong topical overlap on fintech/deal-pricing and AI-tooling fluency, offset by a real title-level stretch above the candidate's natural band. |

**Work-authorization check:** The JD contains no sentence on work authorization, sponsorship, visa, citizenship, clearance, or degree-field requirement beyond "Bachelor's degree required; a major in Computer Science, Engineering, Business, or a related field is a plus." Per `oferta.md`'s four-tier classification this is **⚠️ Unstated** (neutral, no score penalty). The upstream visa gate for this batch already cleared Intuit as **TIER-1** — no further adjustment applied per this run's task instruction.

## B) Match with CV

| JD requirement | CV evidence |
|---|---|
| Own roadmap/execution for the marketplace funnel (application, offer, funding, servicing) across dozens of lenders | PriceKeel: "reads a live discount exception inside the deal platform... selling to RevOps, Sales leadership and Finance against legacy CPQ and deal-desk tooling" (direct funnel/deal-platform analog) |
| Drive upstream integration of offers (credit consent, eligibility, routing, presentation) | PriceKeel: "Designed a guardrail engine that recommends an explainable discount guardrail learned from each company's own closed-won and closed-lost deals" |
| Partner with Data Science on product analytics identifying where customers succeed/struggle | Sensata: "Built KPI frameworks in SQL + GA4 on 50K+ connected industrial devices, identifying high-intent cohorts and adoption signals" |
| Champion customer experience through research, data, and AI-assisted discovery/prototyping | Applied Materials: Claude AI-agent automation; Sensata: "Ran 30+ customer interviews with OEMs and distributors to find pain points" |
| Hands-on fluency with AI tools to research, analyze, prototype, accelerate work | Applied Materials: "Automated repetitive analysis work with AI agents built on Claude" — direct, named match |
| Growth and funnel-optimization PM experience (preferred) | Plug Power: "-25% CPA via SEM/A-B testing"; Pixis: "full-funnel restructuring: shopping feed cleanup, smart bidding, creative refresh"; SwipeHire: funnel instrumentation, 25% activation lift |
| Fintech experience (preferred) | PriceKeel (B2B SaaS deal pricing, fintech-adjacent); Sensata deal-desk/CPQ and multimillion-dollar customer quotes |
| 5+ years designing and delivering products in a Product Management role | Partial: ~5 years total experience, but mostly inside marketing/founder titles rather than a standalone "Product Manager" title |

**Gaps and mitigation:**
1. **"Staff" level is a real stretch above the candidate's natural US-track band** (Associate-Manager, mid-level). The JD body itself only asks "5+ years" (which is why this cleared the mechanical shortlist), but Staff-level scope typically implies broader ownership than the candidate has held under a dedicated PM title. Mitigate honestly rather than claiming Staff-equivalent scope: lead with the PriceKeel deal-platform analog (closest real precedent to "marketplace funnel ownership") and let the fintech/AI-tooling overlap carry the case.
2. **Thin formal PM title/track**, same gap pattern as other PM-titled roles this candidate has been evaluated against. Mitigation: SwipeHire (zero-to-one PM build) plus the Sensata backlog/roadmap ownership bullet.
3. **Company-health note (not a JD gap):** Intuit's ~17% May 2026 workforce reduction is already on file from a prior tracker row (#541) — noted for awareness, not scored as a red flag against this specific team or posting.

## C) Level and Strategy

**Level detected:** Staff Product Manager, nominally 8+ years in most companies' ladders, though this JD's body only states "5+ years." **Candidate's natural level:** Mid-level PM-adjacent operator — a genuine stretch on title/scope, smaller on literal stated years.

**Sell senior without lying:** Lead with the PriceKeel founder-operating story (a live, real-world fintech deal-platform build, not just a resume line) as the closest direct analog to owning a discrete, high-stakes part of a financial product experience, then close with the Claude AI-tooling fluency the JD explicitly prioritizes.

**If they downlevel:** Accept a Senior PM framing if offered (a more natural fit than Staff) and negotiate a defined path to broader marketplace ownership within 6-12 months, tied to demonstrated AI-assisted delivery speed.

## D) Comp and Demand

**Advertised (JD):** "The Expected Base Pay Range For This Position Is — San Francisco $188,500 - $255,000"; also eligible for cash bonus, equity rewards and benefits.

- **Company type:** Public, mature fintech/SaaS platform company (Intuit) — **High confidence**.
- **Compensation reliability:** High — the range is stated as a structured base-pay band specific to San Francisco, from a public company with a stated pay-for-performance philosophy and an explicit pay-transparency practice.

The $188.5K-$255K range sits well above the candidate's own stated US target range ($90K-130K). Comp score: **5/5** — a top-quartile figure relative to both the market and the candidate's own stated floor.

**Demand context:** Not separately researched beyond the JD's own stated figure (bounded research budget). Under 25 applicants at "24 minutes" post-time signals a very fresh, fast-moving posting.

## E) Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Pricing/marketing-forward | Lead with PriceKeel's deal-platform/fintech framing and the Claude AI-tooling line | Directly answers the JD's fintech-marketplace and AI-fluency asks |
| 2 | Skills | Marketing-first ordering | Surface Roadmapping, Backlog Management, AI Agents (Claude), Deal Desk, CRM & CPQ Configuration near the top | Matches the JD's own fintech-product and AI-tooling vocabulary |
| 3 | Experience | Standard order | Lead with PriceKeel (deal-platform, lender/finance-adjacent framing); move Sensata deal-desk/CPQ bullets above pricing-only bullets | These are the role's literal requirements |
| 4 | Projects | Standard | Feature SwipeHire (PRD, MVP scoping, funnel instrumentation) | Direct, standalone PM-title evidence to offset the "thin formal PM track" gap |
| 5 | LinkedIn headline | Generic | "Product & Deal-Platform Builder | Fintech, AI Tooling, Funnel Optimization | Founder, PriceKeel" | Leads with the exact proof points this JD is scanning for |

Top 5 CV changes: as above. Top 5 LinkedIn changes: mirror the headline; pin a post on the PriceKeel guardrail-engine build; add "Product Manager" as an open-to role; request a Sensata recommendation naming the deal-desk/CPQ ownership; add the intuit portfolio ref link.

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Own a discrete, high-stakes part of a financial product experience | PriceKeel guardrail engine | Legacy CPQ/deal-desk tooling gave Finance no audit trail on pricing exceptions | Build a decision-integrity layer for deal pricing | Designed the guardrail engine and audit trail, sold to RevOps/Sales/Finance | Running pilots and raising the first round | Would formalize customer-success check-ins earlier in the pilot phase |
| 2 | AI-assisted discovery and rapid prototyping | Applied Materials Claude-agent automation | Repetitive manual analysis slowing market-sizing work | Automate the repetitive layer with AI agents | Built and embedded Claude-based automation into the regular workflow | Freed up time for higher-value forecasting work | Would formalize the automation into a reusable tool sooner |
| 3 | Funnel ownership and optimization | Pixis full-funnel restructuring | 8-client portfolio plateauing on ROAS | Rebuild account strategy across the funnel | Feed cleanup, smart bidding, creative refresh, lookalike expansion | 3x ROAS in one month, 50% churn cut | Learned diversification mattered more than single-channel optimization |
| 4 | Partner with Data Science on product analytics | Sensata KPI frameworks | Needed to find high-intent cohorts across 50K+ connected devices | Build KPI frameworks in SQL + GA4 | Identified adoption signals and high-intent cohorts | Lifted feature adoption 18% | Would instrument cohort tracking earlier in the product lifecycle |
| 5 | Lead cross-functional partners from engineering to compliance | Sensata GTM launch | New sensing products needed coordinated cross-functional launch | Own GTM across positioning, pricing, channel, launch, compliance-adjacent review | Coordinated engineering, sales, and regional teams | $2M+ first-year revenue | Would lock compliance review earlier in the launch timeline |
| 6 | Zero-to-one PM mechanics | SwipeHire build | No existing tool fit the candidate's own visa-aware job search needs | Scope and build an MVP from scratch | Wrote the PRD, shipped auto-tailored resumes and visa-aware matching | Onboarded 50+ early users | Would instrument retention cohorts from day one next time |

Case study recommendation: lead with the PriceKeel guardrail-engine/deal-platform build, since it is the closest real-world analog to "owning a discrete, high-stakes part of a financial product experience," then use the Claude AI-tooling story to answer the JD's explicit AI-fluency ask.
Red-flag question: "This is a Staff-level role and you haven't held that title before." Answer path: point to PriceKeel's founder-level ownership of a comparable deal-platform product (a materially higher bar than a Staff IC seat at a larger company) as the real evidence, rather than arguing semantics about the title.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting Freshness | "24 minutes ago" at extraction, under 25 applicants, active Apply button | Positive |
| Description Quality | Specific mission framing (small-business survivability, lender marketplace mechanics), named responsibilities, comp band disclosed with a pay-transparency notice | Positive |
| Company Hiring Signals | Known company-wide note: Intuit cut ~17% of its workforce in May 2026 (already on file from prior tracker row #541); no department-specific layoff signal found for this team | Neutral-to-caution |
| Reposting Detection | No match in `data/scan-history.tsv` for this specific req; however, the Mountain View sibling posting (job id 4480954807) is almost certainly the same underlying req cross-posted to two cities — see the cross-posting note in the header | Neutral |
| Role Market Context | A Staff PM seat on a fast-growing fintech marketplace team at a scaled public company is a common, actively-hiring segment | Positive |

**AI-buzzword vs. infrastructure mismatch:** Not flagged — AI language is present ("AI is reshaping how financial products are built," "mastery of the latest AI tools") but the role's own scope (a PM owning a defined, discrete funnel with named engineering/compliance partners) matches its stated seniority, and Intuit is an established, resourced fintech SaaS company, not a legacy-heavy industry bolting AI onto an unready foundation. Fewer than 2 of the 3 signal classes are present.

**Context Notes:** The cross-posting to Mountain View (same JD body, same posted-time, same applicant-count language, and the Mountain View posting's own pay-range line still reading "San Francisco") is the dominant Description Quality observation here — treated per this run's task instruction as one underlying req, tracked under this San Francisco posting.

**Prior-contact FYI:** `node company-history.mjs --company "Intuit"` returns `no-history` — no note required.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | ✅ pass |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | ✅ consistent |

## H) Draft Application Answers

Not applicable — H is only produced for scores >= 4.5.

---

## Cover Letter Draft

> Draft generated at evaluation time. Complete via `/career-ops cover intuit-staff-product-manager-quickbooks-capital-marketplace-sf` to fill in angles, confirm research, and generate the PDF.

---

**Opening**
QuickBooks Capital Marketplace is a deal platform at its core: it connects small businesses to lenders the same way my own company, PriceKeel, connects B2B sales teams to a pricing decision they can trust. I built that trust layer from scratch, and I'd like to build this one.

**Profile introduction**
I'm a marketer, pricing strategist and founder with five years across B2B SaaS, semiconductors and industrial tech, and an MS in Marketing Analytics from Simon Business School. I'm currently Founder and CEO of PriceKeel, a decision-integrity layer for B2B SaaS deal pricing, and at Applied Materials I automate repetitive analysis work with AI agents built on Claude.

**Key achievements** (selected from cv.md)
- **Founded PriceKeel**, a decision-integrity layer for B2B SaaS deal pricing, selling to RevOps, Sales leadership and Finance against legacy CPQ and deal-desk tooling.
- **Automated repetitive analysis work** at Applied Materials with AI agents built on Claude.
- **Delivered 3x ROAS in one month** at Pixis via full-funnel restructuring (feed cleanup, smart bidding, creative refresh, lookalike expansion).
- **Built KPI frameworks in SQL + GA4** at Sensata on 50K+ connected industrial devices, lifting feature adoption 18%.

**Problems I will solve** *(placeholder — requires company research + your input)*
> To be completed: which part of the application-offer-funding-servicing funnel is losing the most customers today, and how would you validate a fix with the lending partners in the first 30 days?

**Closing**
I am happy to discuss further at your convenience.

---

**Gaps flagged:**
This is a Staff-level req and the candidate has not held that title before; addressed above by leading with PriceKeel's founder-level deal-platform ownership rather than arguing title-equivalence.

**JD keywords to mirror**
QuickBooks Capital Marketplace, funnel, application, offer, funding, servicing, lenders, credit consent, customer eligibility, AI tools, prototyping, product analytics, cross-functional, compliance, fintech

---
*Run `/career-ops cover intuit-staff-product-manager-quickbooks-capital-marketplace-sf` to complete angles, confirm company research, and generate the PDF.*

---

## Keywords extracted

Staff Product Manager, QuickBooks Capital Marketplace, fintech, lenders, funnel, application, offer, funding, servicing, credit consent, customer eligibility, AI tools, prototyping, product analytics, Data Science, compliance, roadmap, ambiguity
