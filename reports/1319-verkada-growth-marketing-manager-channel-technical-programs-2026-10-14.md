# Evaluation: Verkada — Growth Marketing Manager, Channel Technical Programs

**Date:** 2026-10-14
**URL:** https://www.linkedin.com/jobs/view/4334453503
**Via:** — (direct)
**Archetype:** Growth / Performance Marketing (secondary fit per `config/profile.yml`)
**Score:** 3.5/5
**Legitimacy:** High Confidence
**Work Auth:** ⛔ per posting text — see flagged contradiction in Block A (upstream visa-gate verdict: TIER-1, SPONSOR/BUILD)
**PDF:** not generated — discover-phase scoring only; build decision deferred to the 09:00 build run per `config/nightly.yml` build_policy
**Batch ID:** N/A (nightly discover phase, report 1319)
**Portfolio:** https://adhi-growth-ai.vercel.app/ref/verkada (Growth discipline; AI-forward posture — Verkada markets an "AI-powered platform" with agentic theft-deterrence features)

---

⚠️ **Work-authorization data conflict (flag for operator review):** This posting's own text states an explicit sponsorship wall ("You must be independently authorized to work in the U.S. We are unable to sponsor or take over sponsorship of an employment visa for this role, at this time"), which reads as a per-posting ⛔ No sponsorship under `modes/oferta.md`'s Block A tiers. The batch input's upstream visa-gate verdict for this row is **SPONSOR/BUILD, TIER-1** — i.e., employer-level sponsorship evidence cleared this row to BUILD. Per task instructions this report does not re-litigate that gate decision, and the given tier is used for scoring below, but the posting-level wall is real, verbatim, and specific to this requisition. `modes/nightly-rules.md` section 12's skip-list scoping rule ("the exact title when the wall is on the posting, `*` only for a genuine employer-wide wall") suggests this should have been scoped as a per-title wall rather than cleared employer-wide — flagging this discrepancy for the pipeline operator rather than silently resolving it either way.

---

## Machine Summary

```yaml
company: "Verkada"
role: "Growth Marketing Manager, Channel Technical Programs"
score: 3.5
legitimacy_tier: "High Confidence"
archetype: "Growth / Performance Marketing"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "No direct channel-partner-program marketing experience (Technical Training & Certification, Premier Services Network, Partner Community); closest analogs are Pixis/Plug Power demand-gen and paid-channel work, which is end-customer-facing, not partner-program-facing"
  - "Posting requires onsite five days per week (San Mateo, CA); within candidate's Bay Area geography but a stricter attendance ask than most other roles in this batch"
top_strengths:
  - "Pixis: used Amplitude and Tableau on user behavior across 30+ campaigns, lifting campaign ROAS 40% - maps to the JD's 'insights and reporting ... translating insights into actionable recommendations'"
  - "Plug Power: led Paid Search and Paid Social across Google Ads, Microsoft Ads, Meta and LinkedIn with -25% CPA via bid optimization and A/B testing - directly on-channel for 'integrated campaign management' and 'demand generation'"
  - "Sensata: built sales enablement (decks, case studies) for 50+ reps, improving win rates 30% - adjacent proof point for enabling and engaging a partner/reseller audience, even though the JD's partners are external channel partners, not internal reps"
risk_level: "Medium"
confidence: "Medium"
next_action: "Flag the posting-level sponsorship wall for operator review before building any artifacts for this role; if it is confirmed as a per-posting restriction rather than employer-wide, this row should likely move to the skip list rather than proceed to build"
work_auth: "conflict_posting_states_no_sponsorship_gate_cleared_sponsor"
discard_reasons:
  - "work_auth_data_conflict"
via: null
company_confidential: false
advertised_comp: "$135,000 - $180,000 USD"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Finding |
|---|---|
| Archetype | Growth / Performance Marketing — secondary fit |
| Domain | Physical security / "Physical AI" platform (video security, access control, sensors, AI-powered theft deterrence) |
| Function | Lead growth and engagement marketing for Channel Technical Programs (Technical Training & Certification, Premier Services Network, Partner Community, Demo Program) |
| Seniority | LinkedIn tags "Mid-Senior level"; JD body does not state a specific years-of-experience minimum |
| Remote | San Mateo, CA — "must be willing and able to work onsite five days per week" |
| Team size | Not stated |
| Culture screen | Not evaluated — no `culture_screen.require` block configured. Qualitative read: well-funded ($5.8B valuation, 30,000+ customers), fast-growing; the mandatory five-day onsite requirement is a notable rigidity signal worth weighing against the candidate's remote-flexible preference. |
| TL;DR | A strong channel/demand-gen skills match clouded by a strict five-day onsite requirement and a direct textual conflict between this posting's stated sponsorship wall and the batch's employer-level sponsorship clearance. |

**Geo-mismatch check:** Structured location field is "San Mateo, CA" (not remote), and the JD body explicitly confirms onsite attendance ("Must be willing and able to work onsite five days per week"). This is consistent, not contradictory — the location field never claimed remote. No geo-mismatch flag. (Separately noted as a rigidity signal above, not a contradiction.)

**Work-authorization check:** Sponsorship (verbatim): "You must be independently authorized to work in the U.S. We are unable to sponsor or take over sponsorship of an employment visa for this role, at this time." Read strictly against `modes/oferta.md`'s Block A tiers, this is a per-posting ⛔ No sponsorship statement. See the flagged conflict above: the batch's upstream visa-gate verdict for this employer/row is **TIER-1, SPONSOR/BUILD**, which this report does not re-derive per task scope, but which appears to be in direct tension with this posting's own text.

## B) Match with CV

| JD requirement | CV evidence |
|---|---|
| Strategic leadership of channel technical programs; set growth targets; operationalize marketing | Pixis: carried P&L and revenue targets across an 8-client portfolio, hired/managed an 8-person team |
| Demand generation, ABM campaigns, integrated campaign management (email, social, paid, events) | Plug Power: "Led Paid Search and Paid Social across Google Ads, Microsoft Ads, Meta and LinkedIn; bid optimization and A/B testing delivered -25% CPA"; Pixis: full-funnel restructuring delivering 3x ROAS |
| Insights and reporting, translating performance metrics into recommendations | Pixis: "Used Amplitude and Tableau on user behavior across 30+ campaigns, lifting campaign ROAS 40%" |
| Strong quantitative background using data and metrics to inform marketing decisions; SQL, Excel, CRM tools | Skills: SQL, Excel (advanced), Salesforce, HubSpot; Sensata KPI frameworks in SQL + GA4 on 50K+ connected devices |
| Partner-facing brand/positioning work for a technical certification and partner community | **Real gap.** No direct channel-partner-program marketing experience. Closest adjacent: Sensata sales enablement for 50+ internal reps (improving win rates 30%), which is an internal-audience analog, not an external-partner one |
| Onsite five days per week | Not a CV gap — a work-mode constraint; within candidate's Bay Area geography |

**Gaps and mitigation:**
1. **No channel-partner-program experience specifically.** Mitigate by reframing Sensata's sales-enablement work (decks, case studies, 50+ reps, +30% win rate) as the closest enablement-audience analog, while leading with the demand-gen/ROAS numbers from Pixis and Plug Power for the core marketing-execution ask.
2. **Onsite five days/week** is a real constraint but not disqualifying given the candidate's Bay Area base; note only as a logistics consideration, not a CV gap.

## C) Level and Strategy

**Level detected:** Individual-contributor growth marketing lead for a specific program area — matches the candidate's natural level. **Sell senior without lying:** Lead with the Pixis full-funnel ROAS/churn results and the Plug Power paid-media CPA numbers, then bridge to Sensata's enablement work as the closest partner-facing analog. **If they downlevel:** Accept if base clears $135K; the open question is the sponsorship conflict above, which should be resolved before any offer-stage negotiation.

## D) Comp and Demand

**Company type:** Growth-stage startup / VC-backed startup ($5.8B valuation, backed by CapitalG, Sequoia, General Catalyst, Felicis, Next47) — **Medium confidence**.
**Compensation reliability:** High — JD states an explicit estimated annual OTE pay range.

| Source | Range | Notes |
|---|---|---|
| Advertised (JD) | $135,000 - $180,000 USD | JD, "estimated annual on-target earnings (OTE) range ... comprised of base compensation and commissions (if applicable)" |

**Advertised range:** $135,000-$180,000 OTE (likely mostly base for a marketing-manager seat, not a sales role). **Non-cash benefits:** fully/mostly employer-paid healthcare, HSA/FSA, fertility stipend, commuter benefits.

Comp score: **4.3/5** — comfortably above the candidate's $90K-$130K US target range.

**Demand context:** Growth/channel marketing roles at well-funded physical-security/AI companies are an active hiring category; no reposting match in `data/scan-history.tsv`.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting Freshness | "16 hours ago" at fetch time — very fresh | Positive |
| Description Quality | Specific program names (Technical Training & Certification, Premier Services Network, Demo Program), explicit comp range, realistic requirements | Positive |
| Company Hiring Signals | No layoff/freeze signal surfaced; company explicitly describes rapid scaling | Neutral |
| Reposting Detection | No match in `data/scan-history.tsv` | Neutral |
| Role Market Context | Channel/partner marketing manager is a common, actively-hiring role category at this company size | Neutral |

**Employment classification signal:** Not present — standard full-time employment language, benefits itemized.

**AI-buzzword vs. infrastructure mismatch:** Not flagged — Verkada's AI framing describes the product (video/access/sensor platform), not a transformation mandate owned by this specific marketing role.

**Benefits/terminology country mismatch:** Not present — US posting, US-standard terms.

**Immigration-status requirement overreach:** Not evaluated under that specific signal (which governs unlawful status demands, not lawful sponsorship refusals) — see the work-authorization data-conflict flag above, which is the operative finding for this posting.

**Prior-contact FYI:** `node company-history.mjs --company "Verkada"` not re-run this pass; no prior note carried over.

## Risk Summary

| Signal | Status |
|---|---|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |
