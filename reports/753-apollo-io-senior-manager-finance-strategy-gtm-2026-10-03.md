# Evaluation: Apollo.io — Senior Manager, Finance & Strategy - Go-To-Market

**Date:** 2026-10-03
**URL:** https://job-boards.greenhouse.io/apolloio/jobs/6214348004
**Via:** —
**Archetype:** RevOps / GTM Finance (hybrid — core function is strategic corporate finance, not a clean fit to any of the five US-track archetypes)
**Score:** 2.3/5
**Legitimacy:** Proceed with Caution
**Work Auth:** ➖ Not needed (currently authorized on STEM OPT; visa-gate TIER-1/BUILD noted below for the future H-1B question)
**PDF:** pending (discover phase — build run generates artifacts)

**Tracker note (duplicate-check, #1596-style discipline):** `data/applications.md` already carries an Apollo.io row — **#250, "Go-To-Market Engineer II, Mid-Market," 2.9/5, Evaluated** — from 2026-09-22. This posting is a **different requisition**: different title ("Senior Manager, Finance & Strategy - Go-To-Market"), different URL, different function (strategic finance vs. a GTM-engineering role). Per `merge-tracker.mjs` req-ID disambiguation logic this is a genuinely separate opening, not a duplicate — flagging explicitly so the tracker merge step creates a **second** Apollo.io row rather than treating this TSV as a re-evaluation of #250.

---

## Machine Summary

```yaml
company: "Apollo.io"
role: "Senior Manager, Finance & Strategy - Go-To-Market"
score: 2.3
legitimacy_tier: "Proceed with Caution"
archetype: "RevOps / GTM Finance"
final_decision: "Skip"
hard_stops: []
soft_gaps:
  - "JD body asks for 7+ years in strategic finance, corporate finance, investment banking, or private equity — a different discipline than the candidate's marketing/pricing/RevOps background, and above the US-track 6-year ceiling"
  - "No IB/PE pedigree or formal FP&A title anywhere in cv.md; the closest proof points (Sensata AP26 revenue models, PriceKeel forecast/pipeline reviews) are adjacent, not direct"
  - "Two rounds of 2026 layoffs (March, 100 employees; May, 100 employees) plus Glassdoor reports of a hiring freeze, alongside a reported valuation drop from a $1.6B Series D peak to ~$722-723M in 2026 secondary data"
top_strengths:
  - "PriceKeel: built and runs CRM/CPQ, forecast and pipeline reviews, and deal approvals — direct exposure to the GTM-finance machinery this role partners with"
  - "Applied Materials: forecasting and market-sizing models across multiple product groups, inflection-point forecasting for pricing — the closest cv.md analog to 'revenue forecasting and long-range planning with scenario modeling'"
  - "SQL fluency and Claude AI-agent automation experience match the JD's 'SQL and AI tool fluency preferred' line directly"
risk_level: "Medium"
confidence: "Medium"
next_action: "Skip — the role's core ask (strategic finance / IB / PE background, 7+ years) is a discipline mismatch, not a tailoring problem, and recent layoffs/valuation compression add real instability risk on top of that"
work_auth: "not_needed"
discard_reasons: ["seniority_mismatch", "tech_stack_mismatch"]
via: null
company_confidential: false
advertised_comp: "$183,000-$228,000 (Tier 1: SF/NYC/Seattle) / $159,000-$200,000 (Tier 2: all other US locations)"
risk_summary:
  legitimacy: "proceed_with_caution"
  classification: "not_evaluated"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | RevOps / GTM Finance (hybrid — no clean match to the five US-track archetypes; closest is RevOps) |
| Track | us |
| Seniority (JD) | 7+ years strategic finance / corporate finance / IB / PE, plus 2+ years at a high-growth company |
| Remote | Remote, United States (no onsite/hybrid contradiction found in the JD body) |
| Team size | Not stated |
| Culture screen | not evaluated (nightly discover pass) |
| TL;DR | A GTM-finance business-partner seat (forecasting, LTV:CAC, investment cases) that asks for a strategic-finance/IB/PE pedigree the candidate's marketing-and-pricing background does not carry, at a company that just ran two 2026 layoff rounds |

### Work-authorization check

**Work Auth tier:** ➖ Not needed right now — candidate is authorized to work on STEM OPT. The JD body states no sponsorship policy; the only sponsorship-related text found is the standard Greenhouse application question ("Will you now or in the future require work visa sponsorship...") rather than a JD-body policy statement. **Visa-gate verdict (given, not re-researched): TIER-1 / BUILD** — the best tier on the candidate's ladder (H-1B sponsor with LCA filings and approved petitions), so the future H-1B question is low-risk if the role itself were otherwise a fit.

## B) Match with CV

**Top strengths mapped to this JD:**
- "Own revenue forecasting and long-range planning with scenario modeling" — maps to Applied Materials' "Built forecasting and market sizing models across multiple product groups" and Sensata's "Partnered with senior executives on AP26 revenue models."
- "Manage GTM investment economics including LTV:CAC and payback analysis" — adjacent to performance-marketing economics at Plug Power/Pixis (CPA, ROAS, budget-to-leadership approval), but those are channel-level unit economics, not formal investment-case modeling.
- "Serve as a primary Finance & Strategy business partner to the GTM organization" — adjacent to PriceKeel's own CRM/CPQ, forecast/pipeline review, and deal-approval build-out, and to Sensata's P&L/revenue-target ownership, but none of these were a **Finance**-seat-partnering-with-GTM role; the candidate has been on the GTM/pricing side of that conversation, not the finance side.
- "SQL and AI tool fluency preferred" — direct match: SQL in cv.md Skills, plus the Applied Materials Claude AI-agent automation line.

**Gaps:**
1. **7+ years strategic finance / corporate finance / IB / PE** — hard-ish blocker. This is a discipline requirement, not a tool gap: nothing in cv.md shows investment-banking, private-equity, or formal corporate-finance titles. The candidate's forecasting and pricing-economics work is real but sits inside marketing/pricing functions, not a finance organization.
2. **"Build financial cases for GTM investments and assess post-implementation results"** — no direct analog; the closest is PriceKeel's deal-approval tooling, which is adjacent but not the same discipline.
3. Per `modes/nightly-rules.md` section 2, US-track reqs whose body demands 7+ years are explicitly outside the mid-level band this candidate targets (<=6 years) — this JD's own text flags that mismatch verbatim.

Mitigation: none of these are tailoring-fixable in a single cover letter — the gap is discipline, not phrasing. If pursued, the only honest angle is leading with PriceKeel's and Sensata's forecasting/CPQ/deal-desk work as the GTM-side counterpart to this Finance-side seat, not as equivalent experience.

## C) Level and Strategy

**Level detected vs. candidate's natural level:** The JD's 7+ year floor targets someone past the candidate's natural level in this specific discipline (strategic finance), even though the candidate's total experience (~5 years) and seniority elsewhere (Pricing Lead, Founder/CEO) reads as manager-level in marketing/pricing terms.

**Sell-senior plan:** Lead with the Sensata AP26 revenue-modeling and P&L-ownership experience plus PriceKeel's forecast/pipeline-review build-out, framed as "the GTM operator's view of the numbers this seat needs," rather than claiming direct FP&A/IB equivalence.

**If downleveled:** Not applicable — the issue here is a discipline mismatch at the stated level, not an inflated title; downleveling would not close the IB/PE/strategic-finance gap.

## D) Comp and Demand

| Advertised (JD) | $183,000-$228,000 (Tier 1: SF/NYC/Seattle) / $159,000-$200,000 (Tier 2: all other US locations) | JD |
| Visa-gate comp anchor (given input, not re-researched) | $140,800-$202,400 (tiered) | visa evaluator |

The visa-gate anchor is narrower than and partly below the JD's own posted Tier 2 floor; it most likely reflects an LCA-certified wage level for a specific experience tier rather than the full advertised band. Both figures are shown rather than blended, per the rule against mixing advertised and researched numbers.

**Company type:** Growth-stage, later-stage VC-backed startup (Series D: $100M at a $1.6B peak valuation in 2023). **Compensation reliability:** Medium — the JD states a structured, tiered figure (normally a High-reliability signal), but 2026 secondary-market data puts the company's current valuation at roughly $722-723M, well below its Series D peak, which is a reason to treat the advertised band as the official number rather than a guarantee of continued funding stability.

**Demand trend / company hiring signals (WebSearch, within the 5-query budget):** Apollo.io ran two 2026 layoff rounds — March 12 (100 employees, ~12.5% of US headcount) and May 12 (100 employees, ~12.5% globally) — and Glassdoor reviews from 2026 report a hiring freeze and high turnover under new leadership. Against that, the company also made 2026 acquisitions (e.g., Pocus, for revenue-intelligence capability) and describes a "renewed acceleration." Neither department-level layoff data nor confirmation that Finance & Strategy was spared is available from this pass — noted as a real open question, not resolved as safe.

## E) Customization Plan

Not built — the gap is a discipline mismatch (strategic finance / IB / PE vs. marketing-and-pricing background), not a phrasing problem a resume rewrite can close. Below the 3.0 no-deck build floor; digest-only tonight.

## F) Interview Plan

Not built — digest-only, per the same reasoning as Block E.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Live Greenhouse listing, full JD, structured comp tiers, functioning apply path | Positive |
| Description quality | Specific responsibilities and a clear comp structure; realistic requirements for the stated discipline | Positive |
| Company hiring signals | Two 2026 layoff rounds (March, May; 100 employees each) and Glassdoor hiring-freeze reports, alongside a reported 2026 valuation of ~$722-723M versus a $1.6B 2023 peak | Concerning |
| Reposting detection | Not checked against `scan-history.tsv` this pass (bounded budget) | — not evaluated |

**Context notes:** Zero-browser nightly discover pass; posting mechanics (structured JD, tiered comp, Greenhouse ATS) look like a real, currently-open requisition — the caution here is about company stability, not ghost-job indicators. The 7+ year requirement is itself stated plainly in the JD body, which is a sign of an honestly-written posting rather than a padded one.

### Prior-contact FYI

`company-history.mjs --company "Apollo.io"` returns `responsiveness.label: "no-history"` — no note needed (silence is the correct output here, per the mode's own rule).

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ⚠️ Proceed with Caution — two 2026 layoff rounds + reported hiring freeze + valuation compression |
| Employment classification | — not evaluated |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |
| Company stability | ⚠️ Flagged: 2026 valuation reported at ~$722-723M vs. a $1.6B 2023 Series D peak, plus two 2026 layoff rounds — department-level impact on Finance & Strategy unconfirmed |

## Cover Letter Draft

> Score below the no-deck build floor (3.0) — no cover letter drafted tonight.

**Gaps flagged:** Discipline mismatch (strategic finance / IB / PE core ask vs. marketing-and-pricing background); 7+ years asked vs. candidate's ~5; company-stability signals (layoffs, valuation compression) worth weighing before applying regardless of fit.

**JD keywords to mirror:** See `jds/apollo-io-senior-manager-finance-strategy-gtm.md`.
