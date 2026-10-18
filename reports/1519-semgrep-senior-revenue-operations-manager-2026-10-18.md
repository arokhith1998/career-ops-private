# Evaluation: Semgrep — Senior Revenue Operations Manager

**DUPLICATE NOTICE:** This exact posting (same URL, same JD text) was already fully evaluated yesterday as report [1507](1507-semgrep-senior-revenue-operations-manager-2026-10-17.md) (2026-10-17, score 3.9/5, already merged into `data/applications.md` and `data/build-queue.tsv`). Nothing in the JD changed between runs. This report reproduces that evaluation under today's assigned report number per the nightly orchestrator's instructions. No new tracker-addition TSV or build-queue row was written for this report — see the notes below and the handback summary.

**Date:** 2026-10-18
**Archetype:** Revenue Operations / Pricing Transition (CPQ, deal-approval architecture)
**Score:** 3.9/5
**Legitimacy:** High Confidence
**Work Auth:** ⚠️ Unstated — visa-gate TIER-1
**URL:** https://www.linkedin.com/jobs/view/4472216027
**PDF:** not generated yet - queued for the 09:00 build run if score qualifies
**Batch ID:** nightly-discover-2026-10-18-score-batch2-row5
**Via:** — (direct application)
**Track:** us | **Legal name:** Semgrep, Inc.
**Portfolio (for BUILD phase):** https://adhithyabhaskar.vercel.app/ref/semgrep
**Routing:** score 3.0-4.0 inclusive -> queued no_deck (already queued under report #1507; not re-queued here)

---

## Machine Summary

```yaml
company: "Semgrep"
role: "Senior Revenue Operations Manager"
score: 3.9
legitimacy_tier: "High Confidence"
archetype: "Revenue Operations / Pricing Transition"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "'6+ years in RevOps, Sales Systems, or revenue systems architecture roles, ideally including CPQ/ARM implementation' - candidate's dedicated RevOps-architecture tenure (PriceKeel, ~5 months as founder) is short of 6 years, even though the underlying skill set is a strong match"
  - "No history directing or evaluating an outsourced/contracted technical team (3rd-party Salesforce admin), a named requirement"
  - "Direct seat-to-consumption pricing-model transition experience is 'strongly preferred' and not something the candidate has done at this specific scale"
top_strengths:
  - "PriceKeel: founded and runs the company's own CRM, CPQ, deal approvals, and an explainable discount-guardrail engine - a near-literal match to 'own the strategy, data model, architecture, and roadmap for our revenue systems'"
  - "Sensata Bleeders and Leakers program: redesigned discount governance and recovered $700K+ in margin in 2 quarters, directly analogous to 'redesign the deal approval process end-to-end'"
  - "Sensata distributor/channel repricing (53% to 61% margin) is direct proof of redesigning a pricing/contract structure under real business constraints"
risk_level: "Low"
confidence: "Medium"
next_action: "Duplicate of report #1507 (same URL, same JD) - no new action; #1507 is already queued for the BUILD phase"
work_auth: "unstated"
discard_reasons:
  - "seniority_mismatch"
via: null
company_confidential: false
advertised_comp: "$162,000-$203,000 USD"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "consistent"
track: us
visa_tier: "TIER-1"
visa_verdict: "BUILD"
comp_estimate: "$162,000-$203,000 (JD stated)"
portfolio: "https://adhithyabhaskar.vercel.app/ref/semgrep"
verification: "jd_path on disk, liveness confirmed upstream"
duplicate_of_report: 1507
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Senior Revenue Operations Manager owning revenue-systems strategy and architecture through a seat-to-consumption pricing transition |
| Domain | Code security / AppSec, B2B SaaS, AI-native GTM tooling |
| Function | Revenue systems architecture (CRM, CPQ, data enrichment), deal-approval redesign, contract/SKU operationalization, outsourced admin-team direction |
| Seniority | 6+ years in RevOps, Sales Systems, or revenue systems architecture, ideally with CPQ/ARM implementation |
| Remote / work mode | Hybrid, San Francisco office expected |
| Team size | Reports to Head of Revenue Operations; directs a 3rd-party Salesforce admin team |
| Culture screen | not evaluated — standard mission/values framing, no distinct red flags |
| TL;DR | A RevOps/pricing-architecture seat squarely in the candidate's strongest domain (deal desk, discount governance, CPQ) at a well-funded security company, with a real but partial gap on years-specific tenure and outsourced-team direction. |

**Work-authorization check:** ⚠️ Unstated. No sponsorship/citizenship language in the JD beyond a standard multi-state remote-hiring footprint list. Carried through from the upstream visa gate without re-research: TIER-1, verdict "BUILD." No score penalty.

## B) CV Match

| JD requirement | cv.md evidence | Strength |
|---|---|---|
| Own strategy, data model, architecture, roadmap for revenue systems | PriceKeel: "set up and run the company's CRM and CPQ"; "next build: a margin layer on top of the guardrail engine" | Strong |
| Systems design for an evolving pricing model (consumption, usage-based, true-ups, proration) | Sensata global pricing strategy, price elasticity, channel/distributor pricing; PriceKeel's guardrail engine reads live discount exceptions | Strong (different pricing mechanic, same architecture skill) |
| Redesign deal-approval process end-to-end | Sensata Bleeders and Leakers: discount governance redesign recovering $700K+ in 2 quarters; PriceKeel's deal-approval workflow | Strong |
| Direct/prioritize work for a 3rd-party Salesforce admin team | No direct history managing an outsourced technical team | Gap (named requirement) |
| Evaluate/implement automation and agentic tools for deal-desk/admin workload | Claude AI-agent automation at Applied Materials; PriceKeel's automation-first build philosophy | Strong |
| Partner with Finance and Legal on contract structuring | Sensata AP26 revenue models and multimillion-dollar customer quotes with senior executives; PriceKeel sells to Finance directly | Strong |
| 6+ years in RevOps/Sales Systems/revenue systems architecture | ~5 years total, most direct ownership at PriceKeel (~5 months) and Sensata's pricing/deal-desk work | Medium (real years gap) |
| Direct seat-to-consumption pricing transition (strongly preferred) | No direct transition experience; pricing-architecture instincts transfer, the specific transition pattern does not | Gap (stated as strongly preferred) |

**Gaps:** Two real, named gaps: years-specific RevOps-architecture tenure and no history directing an outsourced technical team. Neither undermines the strong core-skill match.

## C) Level and Strategy

- **JD level vs. natural level:** the role's "real authority over system architecture" scope sits slightly above the candidate's current Manager-level band on the outsourced-team-direction and years axes; the architecture/pricing work matches the candidate's natural level closely.
- **Sell without lying:** lead with PriceKeel's CRM/CPQ/guardrail-engine build and Sensata's Bleeders and Leakers discount-governance redesign; frame the outsourced-team gap honestly as direct hands-on configuration rather than vendor-team direction, backed by cross-functional work with Engineering and Sales at scale.
- **If downleveled:** comp ($162K-203K) is well above the $90K-130K target; accept a modestly reduced scope and negotiate a review once vendor-team direction is demonstrated.

## D) Compensation and Demand

**Company type:** Growth-stage VC-backed startup (Menlo Ventures, Felicis Ventures, Lightspeed Venture Partners, Redpoint Ventures, Sequoia Capital) — Medium reliability.
**Compensation reliability:** High — "$162,000-$203,000 USD" stated plainly as the estimated starting annual salary range.

| Row | Figure | Source |
|---|---|---|
| Advertised (JD) | $162,000-$203,000 USD | JD |

Well above the candidate's $90K-130K target.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Variant | — | Route to `cv-variants/us-revops.md` | RevOps/CRM-CPQ/deal-approval archetype is a direct match |
| 2 | Summary | Pricing-led | Lead with PriceKeel's revenue-systems/CPQ ownership and Sensata's discount-governance redesign | Mirrors "own the strategic direction and architecture of our revenue systems" |
| 3 | PriceKeel bullet | Standard framing | Emphasize CRM, CPQ, deal approvals and the guardrail engine's data-model design | Direct JD-language echo |
| 4 | Sensata Bleeders and Leakers bullet | Standard framing | Lead with the deal-approval/discount-governance redesign and $700K+ recovery | Matches "redesign the deal approval process end-to-end" |
| 5 | Skills | — | Revenue Operations block first | Matches JD's named skill list |

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Own revenue-systems architecture end to end | PriceKeel founding | No pricing/deal infrastructure existed at a new company | Design and build CRM, CPQ, deal-approval system from scratch | Built the guardrail engine and audit trail; running pilots today | Function operating end to end, selling to RevOps/Sales/Finance | Owning the architecture yourself is what separates a builder from an administrator |
| 2 | Redesign deal-approval process | Sensata Bleeders and Leakers | Discount exceptions were eroding margin across 20 product lines | Redesign discount governance against competitive gaps and WTP | Rebuilt the approval process, tracked via a Power BI dashboard | $700K+ recovered in 2 quarters | A redesign only sticks if a dashboard proves the new rule is followed |
| 3 | Evaluate/implement automation for deal-desk workload | Claude AI-agent automation, Applied Materials | Repetitive analysis consumed judgment-call time | Automated the analysis layer with Claude agents | Rolled into the team's regular workflow | Freed time for pricing and forecasting judgment calls | Automate the step before the judgment call, not the call itself |
| 4 | Partner with Finance and Legal on contract structuring | Sensata AP26 revenue models | Multimillion-dollar quotes needed Finance sign-off | Built the revenue model and aligned stakeholders | Partnered directly with senior executives | Deals closed with cross-functional confidence | Finance trusts a model that's already stress-tested |
| 5 | Direct a third-party technical team (adjacent) | Sensata channel/distributor repricing | 53%-61% margin shift required coordinating external distributor-facing teams | Designed the repricing logic and communicated it through intermediaries | Margin lifted without channel disruption | Clear specs matter more than direct authority | Writing specs a vendor can execute is the transferable skill, not the reporting line |
| 6 | Define reporting/forecasting tied to new pricing models | Sensata FY2026 Bleeders and Leakers dashboard | Leadership had no visibility into pricing-opportunity pipeline | Built win-rate, $/win, and stage-distribution KPIs | Surfaced $433M in margin gaps for prioritization | Reporting only matters when tied to an owner | A KPI without a named owner is just a number |

**Recommended case study:** PriceKeel's CRM/CPQ/deal-approval build.
**Likely red-flag question:** "You haven't directed an outsourced Salesforce admin team before — how would you do it here?" Answer: point to configuring these exact systems hands-on at PriceKeel and Sensata, which gives the technical fluency to write clear specs and judge a vendor team's output.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Posted 13 hours before extraction (unverified, batch mode) | Positive |
| Description quality | Specific scope, named pricing-transition mechanics, explicit comp | Positive |
| Apply-button state | unverified (batch mode) | Not evaluated |
| Employment classification | Full-time, equity/benefits language, no contractor language | Clear |
| AI buzzword vs. infrastructure | Company sells AI-assisted code security (genuine product); role scope matches stated seniority | Not triggered |
| Agency licensing | Direct employer (Semgrep) | Not applicable |

**Context notes:** The 22-state remote-eligible list is a standard multi-state payroll/compliance footprint disclosure, not a legitimacy concern.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | ✅ consistent |

---

## Extracted Keywords

Revenue Operations, RevOps, GTM operations, seat-based pricing, consumption-based pricing, usage-based rating, minimum commitments, true-ups, proration, deal approval matrix, discount thresholds, CPQ, ARM, Salesforce admin, AI automation GTM platform, data enrichment, billing integration, revenue recognition
