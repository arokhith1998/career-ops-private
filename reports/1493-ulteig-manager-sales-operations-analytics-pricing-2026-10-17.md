# Evaluation: Ulteig — Manager, Sales Operations Analytics & Pricing (US)

**Date:** 2026-10-17
**URL:** https://www.linkedin.com/jobs/view/4466014079
**Via:** —
**Archetype:** Revenue Operations / Pricing hybrid (team-lead scope, over-leveled for the candidate's track)
**Score:** 1.4/5
**Legitimacy:** High Confidence
**Work Auth:** ⛔ No sponsorship (JD states: "Must have authorization to work permanently in the U.S.")
**Portfolio:** https://adhi-pricing-ai.vercel.app/ref/ulteig (discipline: pricing/RevOps analytics; posture: traditional — 80-year AEC engineering firm)
**PDF:** not generated — score below the no-deck floor; digest only

---

## Machine Summary

```yaml
company: "Ulteig"
role: "Manager, Sales Operations Analytics & Pricing (US)"
score: 1.4
legitimacy_tier: "High Confidence"
archetype: "Revenue Operations / Pricing"
final_decision: "Discard — recommend against applying"
hard_stops:
  - "JD states verbatim: 'Must have authorization to work permanently in the U.S.' — this reads as a permanent-work-authorization demand, which the candidate's current STEM OPT status (temporary, pending future H-1B sponsorship) does not satisfy; no sponsorship language appears anywhere else in the posting"
  - "JD asks for 8-12+ years of progressive experience plus 3-5+ years leading an analytics/pricing team — far above the US track's 6-year ceiling and the candidate's individual-contributor background; this is a people-manager seat, not an IC analyst seat"
soft_gaps:
  - "No formal direct-report team-leadership history on record (candidate has hired/managed teams at Pixis and SwipeHire, but not a dedicated analytics/pricing function)"
top_strengths:
  - "Sensata's Bleeders & Leakers Power BI dashboard (1,200 pricing opportunities, $627M target, $433M in margin gaps surfaced) is a near 1:1 structural match to this role's pricing-governance and rate-sheet dashboard asks"
  - "Sensata's distributor-margin realignment (53% to 61%) and the BU-wide Power BI price-increase model are direct analogs to 'rate analysis, margin analysis, pricing tools'"
risk_level: "High"
confidence: "Medium"
next_action: "Do not apply — the stated work-authorization language and the seniority/scope gap are both independently disqualifying; flag for the human reviewer as a possible skip-list candidate (this report does not write to data/skip-list.tsv per its scoped-write boundary)"
work_auth: "no_sponsorship"
discard_reasons:
  - "JD's own work-authorization language reads as a permanent-status requirement the candidate's current OPT status does not meet"
  - "Severe over-leveling: 8-12+ years plus team-leadership scope vs. the candidate's ~5-year IC background"
via: null
company_confidential: false
advertised_comp: "Target Base Compensation Range $111,200 - $150,400"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "pass"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Detail |
|---|---|
| Archetype | Revenue Operations / Pricing — team-lead seat over a Sales Operations analytics and pricing function |
| Domain | AEC (architecture/engineering/construction), civil infrastructure (Power, Renewables, Transportation, Water) |
| Function | Lead a team of analysts; own pricing governance, rate sheets, forecasting methodology and sales-performance reporting enterprise-wide; reports to the Associate Director of Sales Operations |
| Seniority | 8-12+ years of progressive experience, plus 3-5+ years specifically leading analytics/pricing/reporting teams |
| Remote | United States (location not further specified); company describes flexible remote/hybrid/office arrangements |
| Team size | Leads "a team of analysts" — exact headcount not stated |
| Culture screen | **Pass.** No red-flag language; 80-year-old employee-ownership structure, explicit statement that candidates need not meet 100% of listed skills is a positive, inclusive-hiring signal. |
| TL;DR | A people-manager pricing/RevOps-analytics seat whose own stated years-of-experience floor and work-authorization language both put it well outside this candidate's reachable band. |

**Geo-mismatch check:** No flag — location is stated generically as "United States" with no remote claim to contradict.

**Work-authorization check:** The posting states, verbatim: **"Must have authorization to work permanently in the U.S."** This closely tracks `modes/oferta.md`'s own worked example of a ⛔-triggering phrase ("must have existing work authorization") — it demands permanent authorization rather than merely asking the lawful screening question ("are you authorized to work in the United States?" or "will you now or in the future require sponsorship?"). The candidate currently holds STEM OPT, a temporary status that will require future H-1B sponsorship — it does not constitute permanent work authorization. Rendered ⛔ **No sponsorship**, and recorded as a `hard_stop`. **This overrides the upstream visa-cache's BUILD, TIER-1 verdict** for this specific req, the same pattern the pipeline previously applied to Palo Alto Networks report #537: the upstream gate's keyword list does not contain this exact phrase, so the independent in-report JD read catches what automated matching missed.

*(Separately checked against `templates/immigration-status-requirements.yml`'s US-federal row: that table's listed patterns — "US citizens only," "citizens or green-card holders only," "must be US citizen or permanent resident" — do not cover a bare "permanent work authorization" phrase without naming citizenship/permanent-residency status, so Block G's Immigration-Status Requirement Overreach signal does not fire here. This is a distinct, narrower check from Block A's sponsorship-tier classification above, which does fire.)*

⛔ **No sponsorship:** JD states "Must have authorization to work permanently in the U.S." and role is outside your authorized_in (candidate's current status is temporary OPT, not permanent authorization)

## B) Match with CV

| JD requirement | CV evidence |
|---|---|
| Lead pricing analysis function: pricing models, rate analysis, margin analysis, pricing governance | Sensata: "Led global pricing strategy for the Industrial BU... Recovered $700K+ in margin in 2 quarters"; "Raised distributor and channel-partner margins from 53% to 61%" |
| Build dashboards/tools for pricing performance, rate realization, margin trends | Sensata: "Built the FY2026 Bleeders & Leakers Power BI dashboard: 1,200 pricing opportunities against a $627M target... surfaced $433M in margin gaps"; "Built a BU-wide Power BI price-increase model" |
| Forecasting, planning, scenario modeling tied to pricing assumptions | Sensata: "Partnered with senior executives on AP26 revenue models, site transition strategies" |
| 8-12+ years of progressive experience, 3-5+ years leading an analytics/pricing team | ~5 years total experience, no dedicated people-management-of-analysts role on record — well below this floor |
| Must have authorization to work permanently in the U.S. | Candidate holds STEM OPT (temporary); will require future H-1B sponsorship — does not meet this as stated |

**Gaps:**
1. **Work authorization, as stated, is a hard blocker.** No honest mitigation exists short of the candidate confirming directly with Ulteig whether this phrase is boilerplate or a genuine no-sponsorship policy.
2. **Seniority and scope.** 8-12+ years plus formal team leadership of analysts is a different career stage than the candidate's current IC-plus-founder profile. Not mitigable through reframing alone.

## C) Level and Strategy

**Level detected:** Director-adjacent people-manager, 8-12+ years. **Candidate's natural level for this archetype:** Analyst to Manager IC, not yet a team-of-analysts people manager at this scope.

**Sell senior without lying:** Not recommended given the compounding hard stops; if pursued despite them, the Bleeders & Leakers dashboard and distributor-margin realignment are the only proof points strong enough to open a conversation, but neither resolves the stated work-authorization or tenure gaps.

**If they downlevel me:** Not applicable — no downleveled version of this req exists; the stated scope is fixed.

## D) Comp and Demand

**Company type:** Enterprise / traditional corporate (Ulteig Engineers, Inc.; 80-year AEC engineering firm) — **Medium reliability**.

| Advertised (JD) | Target Base Compensation Range $111,200 - $150,400 | JD |
|---|---|---|

**Compensation reliability:** High — a clean, explicit base range directly from the posting, with standard factors (skills, education, location, experience) named as adjustors. Comfortably within the candidate's $90K-130K target band on paper, but the role's own hard stops make the comp point moot.

**Demand trend:** The posting explicitly states it "will be posted for a minimum of 3 days and will continue to be posted for an average of 60 days until a qualified applicant is selected" — evergreen/continuous-hire language, not a ghost-job signal, consistent with a specialized, hard-to-fill senior analytics-leadership seat in a niche industry (AEC/civil infrastructure).

## E) Customization Plan

Not recommended for a tailored resume pass given the compounding work-authorization and seniority hard stops.

## F) Interview Plan

Not applicable — this role is not recommended for application. If the candidate independently confirms the work-authorization language is boilerplate rather than policy, re-run this evaluation; the seniority/scope gap would remain a separate, independent blocker.

## G) Posting Legitimacy

**Assessment: High Confidence.**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Posted 21 hours before extraction | Positive |
| Description quality | Highly specific, internally consistent scope across 6 named sub-functions (analytics leadership, pricing governance, sales-performance analysis, forecasting, data governance, team leadership); explicit reporting line (Associate Director of Sales Operations) | Positive |
| Company hiring signals | No layoff or hiring-freeze signal found; 80-year-old private engineering firm with stated employee-ownership structure | Neutral |
| Reposting pattern | No prior sighting of this exact req in `data/scan-history.tsv`; no existing Ulteig tracker rows | Neutral |
| Salary transparency | Clean, explicit base range with named adjustment factors | Positive |
| Role-company fit | A centralized Sales Ops analytics/pricing function led by one manager over a team of analysts, reporting to an Associate Director, makes clear organizational sense for a mid-size AEC firm | Positive |

**Context notes:** The "minimum 3 days / average 60 days" posting-duration language is a standard disclosure for a genuinely hard-to-fill specialist-leadership seat, not a ghost-job indicator — it does not change the assessment above.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | ✅ pass |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

## Cover Letter Draft

Not generated — score is below 3.0 and the posting's own work-authorization language is a stated hard stop; per the Ethical Use policy, this role is explicitly not recommended for application. A cover letter would not resolve either the stated authorization requirement or the seniority gap.

---

## Keywords extracted

sales operations, revenue operations, pricing governance, rate sheets, margin analysis, forecasting, scenario modeling, business intelligence, Power BI, AEC, civil infrastructure, team leadership, analytics COE, pricing strategy, authorization to work permanently
