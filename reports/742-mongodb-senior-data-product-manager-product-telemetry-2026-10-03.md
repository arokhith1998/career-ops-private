# Evaluation: MongoDB — Senior Data Product Manager, Product Telemetry

**Date:** 2026-10-03
**URL:** https://www.mongodb.com/careers/job/?gh_jid=7428476
**Via:** —
**Archetype:** Product Management (internal data-platform PM, deep-engineering-stakeholder)
**Score:** 3.0/5
**Legitimacy:** Proceed with Caution
**Work Auth:** ✅ Sponsors
**PDF:** not generated — discover-phase pass; queues for a no-deck pack (resume + cover letter + outreach, no pitch deck) at the 09:00 build run

---

## ⚠️ Duplicate-req note (read before acting on this report)

This exact requisition (`gh_jid=7428476`, same URL) was **already evaluated two nights ago**: `data/applications.md` row **#487** links to `reports/671-mongodb-2026-10-02.md`, scored **3.1/5**, decision "Apply, but expect a harder technical-depth screen than the other MongoDB req." This is the identical req ID, same company, same title, same URL — a true duplicate under `AGENTS.md`'s rule ("NEVER create new entries in applications.md if company+role already exists. Update the existing entry."), not the "second distinct req with a different ID" pattern the req-ID disambiguation rule (#1524/#2009) covers.

This is distinct from this req's sibling in tonight's batch, #741 (MongoDB — Product Manager, Internal Financial Data, `gh_jid=7908293`) — that one is a genuinely different role and was scored separately. This note is only about #742's relationship to the *pre-existing* tracker row #487, not about #741 vs #742.

The report is still written in full (numbers pre-reserved; the re-score surfaces fresh MongoDB org-stability context — see Block D/G). The tracker-addition TSV (`batch/tracker-additions/742-mongodb.tsv`) is written per spec; `merge-tracker.mjs`'s duplicate detector (company + fuzzy role match) should fold it into existing row #487 as a score update (3.1 → 3.0) rather than create a second row.

---

## Machine Summary

```yaml
company: "MongoDB"
role: "Senior Data Product Manager, Product Telemetry"
score: 3.0
legitimacy_tier: "Proceed with Caution"
archetype: "Product Management (internal data-platform PM, deep-engineering-stakeholder)"
final_decision: "Apply (no-deck build) - proceed with eyes open on the technical-depth bar and recent org instability"
hard_stops: []
soft_gaps:
  - "No dedicated data-platform/data-engineering product-management tenure (JD asks 2+ years specifically in data products or platforms within the 5+ year floor)"
  - "Primary stakeholder base in cv.md is Sales/Finance/Marketing leadership, not deep engineering organizations as this JD specifies"
  - "No metadata-management or formal data-science/BI-tooling background named as a differentiator"
top_strengths:
  - "SQL + Power BI/Tableau analytics depth (Sensata Bleeders & Leakers dashboard) is real evidence of building data products that leadership actually uses"
  - "KPI-framework design experience (Sensata SQL+GA4 frameworks, PriceKeel forecast/pipeline reviews) maps to defining success metrics and KPIs for data products"
  - "Sensata's cross-regional engineering partnership on the sensor-product roadmap is a real, if lighter, analog to stakeholder work with engineering orgs"
risk_level: "Medium"
confidence: "Medium"
next_action: "Apply, but expect a harder technical-depth screen than the sibling Internal Financial Data req — confirm this team's exposure to MongoDB's June 2026 reduction and September 2026 CEO exit before investing further"
work_auth: "sponsors"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "$164,000-$323,000"
risk_summary:
  legitimacy: "proceed_with_caution"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Product Management — internal data-platform PM, deep-engineering-stakeholder |
| Track | us |
| Seniority (JD) | "5+ years of hands-on product management experience, with at least two years focused on data products or platforms" |
| Remote | New York City, Palo Alto, San Francisco — flexible, East Coast remote eligible |
| Culture screen | not evaluated (nightly discover pass) |
| TL;DR | A data-platform PM role for MongoDB's own Product and Technology org, with a tighter technical-specialization bar (2+ years specifically in data products/platforms, deep-engineering-org stakeholder management) than its sibling Internal Financial Data req — the candidate's analytics/dashboard track record is real, but the specific data-platform PM tenure and engineering-heavy stakeholder base are gaps |

### Work-authorization check

**Work Auth tier:** ✅ Sponsors. Visa-gate verdict (pre-run, this pass): **TIER-1 / BUILD** — MongoDB, Inc. carries a confirmed, current H-1B sponsor record per `data/visa-cache.tsv` (163 LCAs FY2025 + 37 green-card LCs per MyVisaJobs). Not re-researched this pass per instruction. The JD body states "Not mentioned" for sponsorship language — a true silence, not a wall.

## B) Match with CV

**Top strengths mapped to this JD:**
- "Evangelize data-as-a-product approaches" / "balance quick wins with innovation using lakehouse and medallion data patterns" (partial) — closest analog is the Sensata Bleeders & Leakers Power BI dashboard, a data product leadership actually used to prioritize $433M in margin-gap recovery, though not built on a formal lakehouse/medallion architecture.
- "Define success metrics and KPIs; track emerging trends" — matches "Built KPI frameworks in SQL + GA4 on 50K+ connected industrial devices" and the Bleeders & Leakers dashboard's "KPI frameworks (% to target, win rate, avg $/win, pipeline stage distribution)."
- "Build documentation, guides, onboarding materials; drive adoption" — matches "Kept enterprise case studies and sales materials current, supporting a 20% improvement in sales team performance" (Pixis) and general sales-enablement work (50+ reps, +30% win rates at Sensata) — an adjacent but real enablement-content pattern.
- "Own sprint planning, backlog grooming, retrospectives" — matches "managed a backlog of 100+ features with engineering in Agile across 3 regions."

**Gaps:**
1. **"At least two years focused on data products or platforms"** — Real gap. The candidate's PM-adjacent work (Sensata roadmap, PriceKeel) is product/pricing-focused, not data-platform-focused as a dedicated specialization.
2. **"Strong stakeholder experience in advanced engineering organizations"** — Real gap. The candidate's deepest stakeholder relationships are Sales, Finance, and executive leadership (Sensata AP26 revenue models, PriceKeel's Sales/RevOps/Finance buyers), not engineering-heavy P&T orgs.
3. **"Familiarity with modern data platforms and scalable architecture"** — Real gap, same as the sibling req.
4. **Differentiators (data science, BI tooling, metadata management)** — Power BI/Tableau is a partial match; metadata management and formal data-science tooling are not in cv.md.

Mitigation: this req is honestly a tighter fit challenge than its sibling (#741); lead with the Bleeders & Leakers dashboard as the single clearest "I ship data products people actually use" proof point, and be direct in a screen that the engineering-org stakeholder depth and dedicated data-platform tenure are the real gaps rather than imply either.

## C) Level and Strategy

**Level detected vs. candidate's natural level:** "5+ years... with at least two years focused on data products or platforms" sits at the candidate's overall tenure (~5 years) but asks for a narrower specialization than the candidate has actually practiced. This is a scope/specialization mismatch more than a seniority mismatch — the title ("Senior") fits the candidate's years, but the specific 2-year data-platform requirement is not satisfied by any single stretch of cv.md.

**Sell-senior plan:** Not a seniority problem to solve; the honest framing is a specialization-bridge: the Bleeders & Leakers dashboard and PriceKeel's data-driven decision layer as evidence of data-product instincts, applied in a different context (Sales/Finance rather than P&T) than the JD's dedicated data-platform background.

**If downleveled:** Not applicable — there is no sponsorship from a "Senior" to a lower title here; the gap is specialization, not seniority.

## D) Comp and Demand

| Advertised (JD) | $164,000-$323,000 | JD |

**Note on the visa-gate's cached comp anchor:** this pass was handed a comp_anchor of "$104,000-$204,000 (JD range)" for MongoDB, which per `data/visa-cache.tsv` traces to a *different* MongoDB req (`gh_jid=8072861`, evaluated 2026-09-19), not this Senior Data PM, Product Telemetry req, and sits well below this req's own stated range. Per `modes/oferta.md` Block D, the advertised-comp row of record is this req's own verbatim figure from `jds/mongodb-senior-data-product-manager-product-telemetry.md`: $164,000-$323,000 — the widest band of any posting in tonight's batch, consistent with a role whose actual leveling (IC-Senior through more senior bands) likely spans several internal grades.

**Company type:** Public big tech / mature tech (NASDAQ: MDB). **Compensation reliability:** High — stated JD range, consistent with MongoDB's standard per-req banding practice, though the unusually wide span ($164K-$323K, nearly 2x from floor to ceiling) suggests this band covers more than one internal level.

**Demand trend:** Same company-level signals as the sibling req: MongoDB cut approximately 350 roles around June 9, 2026 (~6% of ~5,700-person headcount), and CEO Chirantan "CJ" Desai departed September 28, 2026 for Meta. Neither is confirmed to specifically target the Internal Data / P&T telemetry team, but both are recent enough to be worth a direct question in a screen.

## E) Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Generic 2-sentence summary | Lead with data-product delivery (Bleeders & Leakers dashboard) and KPI-framework design | Matches a data-as-a-product PM role, even without a dedicated data-platform title history |
| 2 | Skills | Full skill bank | Surface SQL, Power BI, Tableau, ThoughtSpot, Databricks, Forecasting Models first | Direct JD keyword match on data platforms/dashboards; Databricks/ThoughtSpot are already in cv.md's Analytics skill group and directly relevant here |
| 3 | Experience | Full bullet bank | Pull the Sensata Bleeders & Leakers dashboard bullet and the KPI-framework bullet verbatim | JD-specific bullet rule; this is the strongest honest match to "data-as-a-product" |
| 4 | Projects | JD-gated pool | Omit — no project outranks the Sensata Experience bullets for this JD | Projects are JD-gated, never default |
| 5 | LinkedIn | Standard headline | Mirror "Product Manager \| Data Products \| Analytics & BI" language | Recruiter search match on the data-product + analytics combination |

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Data-as-a-product strategy and ownership | Sensata Bleeders & Leakers dashboard | Leadership needed visibility into margin erosion across a $627M pricing opportunity set | Build a 4-page Power BI executive dashboard as the single source of truth | Tracked 1,200 opportunities across 3 regions, 4 product families, 20 product lines | Surfaced $433M in margin gaps for leadership to prioritize | Learned a data product earns adoption once it answers a question someone was already asking |
| 2 | Define success metrics/KPIs | Sensata KPI-framework build | Needed to find high-intent cohorts inside 50K+ connected devices | Build SQL + GA4 KPI frameworks | Identified adoption signals from device-usage data | Lifted feature adoption 18% | Learned the right KPI is the one that changes a roadmap decision, not the one that's easiest to track |
| 3 | Stakeholder enablement and adoption materials | Sensata/Pixis sales enablement | Reps and leadership lacked current materials to act on data | Build enablement content and case studies | Supported 50+ reps and kept Pixis case studies current | +30% win rates (Sensata), +20% sales performance (Pixis) | Learned adoption lives or dies on whether the content matches how the audience actually works |
| 4 | Agile product management / sprint ownership | Sensata sensor-product roadmap | New sensing products needed disciplined delivery | Own sprint planning and backlog grooming with engineering | Managed 100+ features in Agile across 3 regions | +25% release acceleration, -20% time-to-market | Learned backlog discipline protects the delivery date more than velocity tracking does |
| 5 | Performance and market/trend analysis | PriceKeel forecast/pipeline reviews | Deal pricing decisions lacked a consistent evidence base | Set up forecast and pipeline review cadence from scratch | Running pilots with early customers | Building toward a margin layer on top of the guardrail engine | Learned trend-tracking is only useful when tied to a specific decision cadence |
| 6 | Cross-functional partnership with technical teams | Sensata cross-regional engineering alignment | Sensor roadmap needed tight engineering alignment | Co-own planning and sprint reviews across 3 regions | Shipped against a 100+ feature backlog | +25% release acceleration | Learned engineering trust comes from consistent presence, not periodic check-ins |

**Case study to present:** The Sensata Bleeders & Leakers dashboard as the clearest "data-as-a-product, used by leadership to make a $433M decision" proof point, paired with an honest framing that the deep-engineering-org stakeholder muscle is the newer part of the story.

**Red-flag questions:** "Your background is Sales/Finance-facing data work, not a dedicated data-platform PM track — why should we trust you with a P&T-facing role?" — answer honestly: the Bleeders & Leakers dashboard and the PriceKeel decision layer are both evidence of shipping data products that change real decisions; the honest follow-up to ask them back is how much of this role's stakeholder base is actually engineering-heavy day to day versus analyst/leadership-facing, since that shapes how real the gap is in practice.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | No explicit post date in the JD; full responsibilities, requirements, and a wide comp band present; confirmed live, no closed/expired tell | Positive |
| Description quality | Specific technical requirements (data engineering foundation, lakehouse/medallion patterns, metadata management as a differentiator); unusually wide comp band ($164K-$323K) suggests the req may span more than one internal level, which is a mild realism caution but not a ghost-job signal | Neutral |
| Company hiring signals | Same company-wide signals as the sibling req: ~350 role cuts around June 9, 2026; CEO transition September 28, 2026 — not confirmed to target this specific team | Concerning (not department-confirmed) |
| Reposting detection | Not checked against `scan-history.tsv` this pass (bounded research budget) | — not evaluated |

**Context notes:** zero-browser nightly discover pass; liveness confirmed per `jds/mongodb-senior-data-product-manager-product-telemetry.md`. This is a re-score of an already-tracked identical req (see the Duplicate-req note above); the June 2026 layoff and September 2026 CEO-transition context is new information this pass surfaced that the 2026-10-02 original did not have.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ⚠️ Proceed with Caution — company-wide reduction (~June 2026) plus a very recent CEO exit (Sept 2026), not department-confirmed |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

## Cover Letter Draft

> Draft generated at evaluation time. Complete via `/career-ops cover 742-mongodb-senior-data-product-manager-product-telemetry` to fill in angles, confirm research, and generate the PDF. Note: a cover letter for this exact req may already exist from the 2026-10-02 pass tied to tracker row #487/report 671 — check `output/MongoDB/` before generating a second one.
> Gaps flagged below — address them during the cover flow.

---

**Opening** *(placeholder — refine with your "why this role" angle)*
I built a Power BI dashboard that gave leadership a single source of truth across 1,200 pricing opportunities, so the Senior Data Product Manager, Product Telemetry role reads like the next step for exactly the kind of data-as-a-product work I already enjoy building.

**Profile introduction**
Marketer, pricing strategist and founder with 5 years across B2B SaaS, semiconductors, industrial tech and D2C e-commerce, currently Strategic Marketing III at Applied Materials and Founder/CEO of PriceKeel, a decision-integrity layer for B2B SaaS deal pricing.

**Key achievements** *(selected from cv.md — exact wording preserved)*
- **Built the FY2026 Bleeders & Leakers Power BI dashboard**: 1,200 pricing opportunities against a $627M target, surfacing $433M in margin gaps.
- **Built KPI frameworks in SQL + GA4** on 50K+ connected industrial devices, lifting feature adoption 18%.
- **Managed a backlog of 100+ features** with engineering in Agile across 3 regions, accelerating releases 25%.
- **Built the audit trail** that records the human pricing decision with evidence Finance can audit at PriceKeel.

**Problems I will solve** *(placeholder — requires company research + your input)*
> To be completed: what specific telemetry/data-adoption problem is the P&T org trying to solve with this role, and how would you sequence the first 90 days?

**Closing**
I am happy to discuss further at your convenience.

---

**Gaps flagged:**
No dedicated 2+ years in data-products/platforms specifically; primary stakeholder base is Sales/Finance/leadership rather than deep engineering orgs; no metadata-management or formal data-science/BI-tooling differentiator; and worth raising directly in a screen: MongoDB's June 2026 reduction and September 2026 CEO transition.

**JD keywords to mirror** *(extracted for ATS + human read)*
data-as-a-product, data products, platforms, pipelines, datasets, dashboards, APIs, ML models, lakehouse, medallion, stakeholder enablement, adoption, agile product management, sprint planning, backlog grooming, metadata management, data engineering, analytics

---
*Run `/career-ops cover 742-mongodb-senior-data-product-manager-product-telemetry` to complete angles, confirm company research, and generate the PDF.*
