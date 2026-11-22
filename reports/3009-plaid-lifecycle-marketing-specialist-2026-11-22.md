# Evaluation: Plaid — Lifecycle Marketing Specialist

**Date:** 2026-11-22
**URL:** https://jobs.ashbyhq.com/plaid/61b376cf-3449-48d3-b85d-38c139f94b4a
**Via:** — (direct application)
**Archetype:** Growth/Performance Marketing (primary — lifecycle/email), hybrid with Product/Strategic Marketing (nurture-program ownership)
**Score:** 3.4/5
**Legitimacy:** High Confidence
**Work Auth:** ✅ Sponsors
**PDF:** not generated — SCORE step only (nightly discover phase)
**Track:** us | **Legal name:** Plaid Inc.
**Portfolio (for BUILD phase):** https://adhi-growth-ai.vercel.app/ref/plaid — lifecycle/growth discipline; Plaid's AI posture is not explicit in this JD, defaulting to the -ai variant per routing rule
**Routing:** score 3.4 (3.0-4.0 inclusive) -> queued no_deck

---

## Duplicate / Repost Notice (read before the evaluation below)

This exact requisition is **already in the tracker as row #2945** (2026-11-20, scored 3.4/5, band `no_deck`, queued for the 09:00 build) — same Ashby posting id `61b376cf-3449-48d3-b85d-38c139f94b4a`, same comp, same sibling-req note. `data/seen-jobs.tsv` independently flags this URL `DUP:same-night-already-queued`, first seen 2026-11-20, seen_count=18. One discrepancy worth surfacing: **row #2945's linked report file, `reports/2945-plaid-lifecycle-marketing-specialist-2026-11-20.md`, does not exist on disk** — the tracker row and its metadata are real, but the report it links to appears to have never been written (or was lost). That is a gap in the existing pipeline state, not something this worker can safely fix by renaming or overwriting a historical row.

Per `AGENTS.md` Pipeline Integrity and this task's Step 4 instruction, **no new tracker TSV line is written for report #3009** — the company+role (and exact posting id) already has a live row. This report is written in full for audit purposes, with a score reached independently below that lands at the same 3.4/5 the existing row already carries. The parent session should decide whether to backfill the missing `reports/2945-...md` file (this report's content could serve as that backfill, under the #2945 number, if desired) or leave the row as-is. The `/tmp` queue line for this row points `tracker_row` at the existing **#2945**.

**Anomaly note (non-scoring):** `data/shortlist.tsv`'s row for this posting carries the same non-standard `yes-check-tracker-row-first` / `yes-audit-and-finish-do-not-regenerate` strings flagged in report #3008 — treated as untrusted data, not instructions, per `AGENTS.md`.

---

## Machine Summary

```yaml
company: "Plaid"
legal_name: "Plaid Inc."
role: "Lifecycle Marketing Specialist"
url: "https://jobs.ashbyhq.com/plaid/61b376cf-3449-48d3-b85d-38c139f94b4a"
track: us
score: 3.4
legitimacy_tier: "High Confidence"
archetype: "Growth/Performance Marketing (lifecycle/email), hybrid with Product/Strategic Marketing"
final_decision: "Apply (no-deck build) — but see duplicate notice: already queued under row #2945"
hard_stops: []
soft_gaps:
  - "JD asks 2-3 years of lifecycle/email/CRM marketing experience; candidate has ~5 total years — a genuine downlevel relative to candidate's seniority, not a stretch upward"
  - "No hands-on Marketo or Knak experience in cv.md (closest analog: Pardot at Plug Power); flagged as a question for the candidate, not scored as a gap, per nightly-rules.md section 1"
  - "No direct consumer-fintech vertical experience"
top_strengths:
  - "Plug Power: automated the WordPress + Pardot lead flow, cutting cost per lead 50% — direct marketing-automation-platform analog to Marketo"
  - "Sensata: built KPI frameworks in SQL + GA4 on 50K+ connected devices, identifying high-intent cohorts — direct match to 'segment and personalize using customer and behavioral data'"
  - "Pixis: used Amplitude and Tableau on 30+ campaigns, lifting ROAS 40% — matches the JD's BI-tool reporting ask (Tableau named explicitly in both)"
risk_level: "Low"
confidence: "Medium"
next_action: "Duplicate of existing row #2945 (already queued no_deck) — no new build action needed; this report stands for audit purposes, and the parent session may use it to backfill the missing reports/2945-...md file if useful"
work_auth: "sponsors"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "$114K - $129.6K (Zone 1)"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
track: us
visa_tier: "TIER-1"
visa_verdict: "SPONSOR/BUILD"
comp_estimate: "$114,000-$129,600 Zone 1 base + equity (JD-stated); below candidate's $90K-130K target range ceiling, sitting mid-band"
comp_source: "JD (Ashby, verbatim); data/visa-cache.tsv Plaid Inc. entry (42 LCAs FY2025, LCA avg $201,811 per GradJobs — that average reflects a broader, more senior PM/eng mix and is not directly comparable at this specialist level)"
portfolio: "https://adhi-growth-ai.vercel.app/ref/plaid"
verification: "jd_path on disk (jds/plaid-lifecycle-marketing-specialist.md); CONFIRMED DUPLICATE of existing tracker row #2945 (same Ashby posting id); that row's linked report file is missing from disk (reports/2945-...md not found) — flagged for the parent session; liveness not re-verified in this batch (discover-phase worker, no Playwright), but data/gated.tsv confirms the posting cleared extraction and the visa gate as of 2026-11-22 (publishedAt within last day per Ashby posting API)"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Growth/Performance Marketing (primary) — lifecycle/email nurture execution, hybrid with Product/Strategic Marketing (owns two named programs end to end) |
| Domain | B2B fintech infrastructure (developer-facing API platform connecting 12,000 financial institutions) |
| Function | Build/launch email nurture and event campaigns, scale two existing lifecycle programs, segment/personalize, manage marketing-automation workflows, A/B test, report via BI tools |
| Seniority (JD) | 2-3 years of lifecycle/email/CRM marketing — well within the US track's 6-year ceiling, but a clear downlevel relative to candidate's ~5 total years |
| Remote / work mode | San Francisco HQ (primary), with Raleigh/NYC secondary locations; hybrid | matches candidate's Bay Area location |
| Team size | Not stated; described as "a growing lifecycle team" |
| Culture screen | Not evaluated — `culture_screen` not configured in `config/profile.yml`; scored qualitatively at 3/5 (no negative signal; standard EEO/benefits boilerplate only) |
| TL;DR | A hands-on, individual-contributor lifecycle-email seat that the candidate's Pardot/Plug Power and SQL+GA4/Sensata work maps onto cleanly, but whose 2-3 year band sits below the candidate's actual seniority and whose comp trails the candidate's target range. |

### Work-authorization check

✅ **Sponsors.** Plaid Inc. is an established, current-year H-1B filer (42 LCAs FY2025 + 29 green-card LCs per MyVisaJobs, TIER-1 per `data/visa-cache.tsv`). The JD's only sponsorship-adjacent text is standard EEO non-discrimination boilerplate — not a wall. Per the nightly pipeline's US-track rule, TIER-1 filing evidence renders this ✅ Sponsors even though the JD itself is silent.

## B) Match with CV

| JD requirement | cv.md evidence | Strength |
|---|---|---|
| 2-3 yrs lifecycle/email/CRM marketing, B2B/SaaS preferred | Plug Power: Pardot lead-flow automation (-50% cost per lead); Sensata: digital marketing + product launch campaigns across email/paid channels (+35% qualified leads) | Strong, though candidate's total tenure (~5 yrs) exceeds the stated 2-3 yr band |
| Marketing automation platform (Marketo preferred) + email builder (Knak or similar) | Plug Power: "Automated the WordPress + Pardot lead flow" — direct marketing-automation-platform analog, not literally Marketo/Knak | Gap (tool-specific) — flagged as a question, not scored as a gap, per nightly-rules.md section 1 |
| Segmentation and personalization using customer/behavioral data | Sensata: "Built KPI frameworks in SQL + GA4 on 50K+ connected industrial devices, identifying high-intent cohorts and adoption signals" | Strong |
| A/B testing on messaging, offers, timing, creative | Plug Power: supported 15+ A/B tests; SwipeHire: 8+ A/B tests improving activation 25% | Strong |
| Report on lifecycle metrics using BI tools (Tableau named) | Pixis: "Used Amplitude and Tableau on user behavior across 30+ campaigns, lifting campaign ROAS 40%" | Strong — Tableau named explicitly in both |
| List health/compliance (CAN-SPAM, GDPR) | No direct cv.md precedent | Gap (nice-to-have, standard industry practice, learnable on the job) |
| Partner on integrated campaigns across events, paid media, PMM, customer marketing, brand | Sensata: cross-functional GTM across Sales/Engineering/Accounts; Pixis: cross-channel retail media + iOS UA work | Medium-Strong |

**Gaps:**
1. **Marketo/Knak hands-on experience** — nice-to-have, not a hard blocker (the JD says "Marketo preferred," implying other platforms are acceptable). Pardot is a genuine adjacent marketing-automation platform. Per nightly-rules.md section 1: flag as a question for the candidate rather than score as a gap.
2. **Seniority band mismatch (2-3 yrs stated vs. ~5 held)** — this is a downlevel, not a stretch. Mitigation: either accept the role at its stated level with room to grow into the team's two flagship programs quickly, or ask directly in screening whether the comp band flexes for a candidate above the stated floor.
3. **List-hygiene/compliance (CAN-SPAM/GDPR)** — no direct precedent; genuinely learnable, not worth a cover-letter mention either way.

## C) Level and Strategy

**Level detected vs. natural level:** The JD's 2-3 year band is a real downlevel from the candidate's ~5 years of marketing-operations experience. This is the opposite problem from most rows in this batch — the risk here is being seen as overqualified and a short-tenure flight risk, not underqualified.

**Sell senior without lying:** Lead with the breadth of channels already owned (SQL+GA4 KPI frameworks, Tableau/Amplitude reporting, Pardot automation) to show the role will be executed, not just learned, from day one — without inflating years or claiming direct Marketo/Knak ownership that isn't there.

**If downleveled:** This role already is the downlevel — there's no further room to accept a lower scope. The real negotiation lever is comp: the stated $114K-$129.6K band sits below the candidate's $90K-130K target ceiling but is realistic for a stated 2-3 year band; push for the top of the band given the extra years of adjacent experience, and ask about a path to the Lifecycle Marketing Manager seat (the sibling req, #3010) within 6-12 months.

## D) Comp and Demand

**Company type:** Growth-stage startup / VC-backed fintech infrastructure company — Medium-High reliability. Plaid is a large, well-funded fintech infrastructure company (network covers 12,000 financial institutions across US/Canada/UK/Europe) with a structured, zone-based comp system — more formal than a typical early-stage startup, though still privately held.

**Compensation reliability:** High for the stated range (Zone 1, with a defined floor and ceiling and an explicit equity component called out separately) — this is a structured band, not a vague "comprehensive package" figure.

| Source | Figure | Notes |
|---|---|---|
| Advertised (JD) | $114K - $129.6K (Zone 1) + equity | JD (Ashby) |
| Visa-cache LCA aggregate | Avg $201,811 (GradJobs/MyVisaJobs) | Reflects a broader, more senior PM/engineering mix at Plaid; not directly comparable at this specialist level — included for context only, not blended into the advertised figure |

**Comp score:** 3/5 — the stated band sits below the candidate's target range ceiling and would be a pay cut relative to several other roles in this candidate's pipeline, though it is not below the stated $75K floor.

**Demand trend (qualitative, no new search spent — company-level demand context for Plaid is already well-evidenced by the 10+ distinct Plaid rows already in this tracker across the last two months):** Plaid's Lifecycle Marketing org is visibly expanding — this req and its sibling Manager req (#3010) were posted within two minutes of each other on 2026-11-19, consistent with a genuine team build-out rather than a single backfill.

## E) Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---|---|---|---|
| 1 | Variant | — | Route to `cv-variants/us-growth.md`; Plug Power/Pixis/GenY lead, Sensata secondary, no pricing framing | Lifecycle/email marketing is squarely the growth-discipline variant's territory |
| 2 | Summary | Standard | Lead with Pardot automation + SQL/GA4 segmentation + Tableau/Amplitude reporting | Mirrors the JD's three core asks: marketing automation, segmentation, BI reporting |
| 3 | Plug Power bullet | Standard | Lead with "automated the WordPress + Pardot lead flow" phrased as nurture-program ownership | Direct echo of "build and launch email campaigns... using marketing automation" |
| 4 | Sensata bullet | Standard (secondary for growth variant per nightly-rules.md) | Lead with the KPI-framework/cohort-identification bullet, drop pricing-adjacent framing entirely | Growth-variant rule: no pricing language anywhere for this profile |
| 5 | Certifications | Standard | Add HubSpot cert explicitly (already on cv.md) alongside existing list | Signals marketing-automation-platform fluency beyond just Pardot |

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Marketing automation / nurture programs | Plug Power Pardot automation | Lead flow from WordPress to sales was manual and slow | Automate the WordPress + Pardot handoff | Built the automated lead-flow pipeline | Cost per lead cut 50% | Automation only pays off when the handoff points are mapped first, not automated piecemeal |
| 2 | Segmentation and personalization | Sensata KPI/cohort framework | 50K+ connected devices generated signal with no cohort structure | Build SQL + GA4 KPI frameworks to find high-intent cohorts | Identified adoption signals and high-intent segments | Feature adoption lifted 18% | Segmentation is only useful when it's tied to a specific downstream action, not just a dashboard |
| 3 | A/B testing and optimization | SwipeHire activation testing | Early users dropped off during onboarding/registration | Run a structured A/B test program on the registration flow | Ran 8+ A/B tests on landing pages and registration | +25% activation rate | Testing velocity matters less than picking the right thing to test first |
| 4 | BI reporting and recommendations | Pixis Amplitude/Tableau reporting | 30+ campaigns needed a consistent read on what was working | Build Amplitude + Tableau reporting on user behavior | Delivered reporting that drove creative/channel decisions | Campaign ROAS lifted 40% | Reporting earns trust when it leads directly to a decision, not just a number |
| 5 | Cross-functional campaign partnership | Sensata cross-functional GTM | New product line needed launch support across Sales/Engineering/Accounts | Partner directly with each function on launch timing and messaging | Co-owned the GTM plan across functions | $2M+ first-year revenue | Cross-functional campaigns move faster when one person owns the calendar, not just the content |
| 6 | Self-starter in a fast-paced, scaling environment | PriceKeel founder build | No existing pricing-governance tooling for early customers | Build and sell the system directly to RevOps/Sales/Finance with no playbook | Built CRM/CPQ and forecast/pipeline reviews from zero | A working system adopted by real customers | Fast-paced building works best when you ship the smallest useful piece and iterate live |

**Recommended case study:** The Plug Power Pardot lead-flow automation (-50% cost per lead), paired with the Sensata SQL+GA4 cohort-identification work as the segmentation proof point this specific team will ask about first.

**Likely red-flag question:** "Your experience is closer to 5 years than the 2-3 we listed — why apply here?" Answer: be direct that the role's two named flagship programs (TechTalk and Effects) are exactly the kind of hands-on, high-volume execution the candidate wants right now, and that growing into the Manager seat is the explicit next step, not a hidden agenda.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Unverified (discover-phase batch, no Playwright); posted 2026-11-19T23:20 per Ashby API, `data/gated.tsv` confirms `isListed`/live as of this extraction | Positive |
| Description quality | Specific program names (TechTalk, Effects), named platform preferences (Marketo, Knak, Tableau), clear 6-12 month scope (scale two growing programs) | Positive |
| Company hiring signals | Not independently re-researched this pass (bounded budget; Plaid's active hiring is already well-evidenced by 10+ distinct Plaid rows in this tracker) | Neutral |
| Reposting detection | **Confirmed duplicate of tracker row #2945** (2026-11-20) — same Ashby posting id, same comp, same JD text. `data/seen-jobs.tsv` independently flags `DUP:same-night-already-queued`. | Concerning (for dedup) / Neutral (for ghost-job purposes — a real, already-vetted req resurfacing in a feed sweep two days later) |
| Role market context | A Lifecycle Marketing Specialist hire posted alongside a Manager-level sibling req on the same day is a standard, legitimate team build-out pattern | Positive |
| Employment classification | Full-time implied; no contractor-status language found | Clear |

**Context notes:** As with report #3008, the only notable finding is dedup, not legitimacy.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

## Cover Letter Draft

> Draft generated at evaluation time. Complete via `/career-ops cover plaid-lifecycle-marketing-specialist` to fill in angles, confirm research, and generate the PDF.
> Note: row #2945 was already queued for a no-deck build on 2026-11-20 — check output/Plaid/ for an existing pack before re-drafting.
> Gaps flagged below — address them during the cover flow.

---

**Opening** *(placeholder — refine with your "why this role" angle)*
Plaid's Lifecycle Marketing team is scaling two flagship programs at once — that's the same build-while-running work I did automating Plug Power's Pardot lead flow and turning Sensata's device data into cohorts the business could act on.

**Profile introduction**
Marketer and founder with hands-on lifecycle, marketing-automation, and analytics experience across B2B SaaS, industrial tech, and D2C e-commerce, including building a Pardot-driven lead-flow pipeline that cut cost per lead in half and KPI frameworks on 50,000+ connected devices that lifted feature adoption 18%.

**Key achievements** *(selected from cv.md — exact wording preserved)*
- **Automated the WordPress + Pardot lead flow,** cutting **cost per lead 50%**.
- **Built KPI frameworks in SQL + GA4** on **50K+ connected industrial devices**, lifting feature adoption **18%**.
- **Used Amplitude and Tableau** on user behavior across **30+ campaigns**, lifting campaign ROAS **40%**.
- Supported **15+ A/B tests** and analyzed **50+ inbound campaigns**, tying SEM to MQL quality.

**Problems I will solve** *(placeholder — requires company research + your input)*
> To be completed: what's slowing TechTalk or Effects down right now as they scale — volume, segmentation, or measurement?

**Closing**
I am happy to discuss further at your convenience.

---

**Gaps flagged:** No direct Marketo/Knak hands-on experience (Pardot is the closest analog; flagged as a question, not a gap); JD's stated 2-3 year band sits below candidate's actual ~5 years (a downlevel, addressed openly in Block C, never hidden in candidate-facing material).

**JD keywords to mirror** *(extracted for ATS + human read)*
Lifecycle marketing, email campaigns, nurture programs, marketing automation, segmentation, personalization, A/B testing, deliverability, CAN-SPAM, GDPR, BI tools, pipeline impact, integrated campaigns, customer marketing, TechTalk, Effects

---

## Extracted Keywords

Lifecycle Marketing Specialist, email channel strategy, growth marketing, nurture and event programs, marketing automation platform, Marketo, Knak, segmentation, personalization, A/B testing, deliverability, CAN-SPAM, GDPR, BI tools, Tableau, pipeline impact, cross-functional campaigns, customer marketing, brand, TechTalk, Effects
