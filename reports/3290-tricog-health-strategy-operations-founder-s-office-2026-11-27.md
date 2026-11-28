# Evaluation: Tricog Health — Strategy & Operations (Founder's Office) [JD body: Executive Assistant to CEO]

**Date:** 2026-11-27
**URL:** https://www.linkedin.com/jobs/view/4493894416
**Via:** — (direct)
**Archetype:** Executive Assistant to CEO (titled as Founder's Office / Strategy & Ops, JD body is EA scope)
**Score:** N/A (dropped at the India salary-floor check)
**Legitimacy:** Not evaluated (dropped before Block G)
**Work Auth:** Not needed (India track, no US visa gate)
**PDF:** pending
**Batch ID:** 3290

---

## Machine Summary

```yaml
company: "Tricog Health"
role: "Strategy & Operations - Founder's Office (actually Executive Assistant to CEO per JD body)"
score: null
track: "india"
visa_status: "not_applicable"
tier: "N/A"
band: "below_floor"
archetype: "Executive Assistant to CEO"
advertised_comp: "not stated in JD"
comp_estimate: "6.0-13.1 LPA (EA to the CEO, healthcare industry, Bengaluru - AmbitionBox)"
comp_source: "WebSearch: AmbitionBox 'EA to the CEO' salary, healthcare-industry and Bengaluru-location filters"
final_decision: "DROP: below-comp-floor"
hard_stops:
  - "Industry- and city-matched EA-to-CEO comp (AmbitionBox) tops out at 13.1 LPA against config/profile.yml's 35 LPA India floor - dropped per nightly-rules.md section 2"
soft_gaps: []
top_strengths: []
risk_level: "N/A"
confidence: "Medium-High"
next_action: "DROP - do not build, do not queue"
work_auth: "not_needed"
discard_reasons: ["below-comp-floor"]
via: null
company_confidential: false
risk_summary:
  legitimacy: "not_evaluated"
  classification: "not_evaluated"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
```

## Comp-floor drop

The LinkedIn title reads "Strategy & Operations - Founder's Office," but the JD body is explicit: "As the Executive Assistant, you will play a critical role in enabling the CEO ... We are looking for a highly organized, proactive, and tech-savvy Executive Assistant." This is a calendar/EA-scope role, not a strategy/ops analyst seat, despite the posted title (flagged by the extraction step).

The JD states no comp figure, so the mandatory India salary check (nightly-rules.md section 2, config/profile.yml's 35 LPA floor) used the closest credible public data: AmbitionBox's "EA to the CEO" salary data filtered to the healthcare industry (Tricog is a healthcare technology company) and Bengaluru location, which tops out at **13.1 LPA**. This is role-matched, industry-matched, and city-matched, and sits well under half the 35 LPA floor.

Per the standing rule ("Top of the credible range below 35 LPA = drop"), this role is dropped rather than scored. No Block A-G evaluation was produced. Nothing is queued for the 09:00 build.

Recorded in `data/seen-jobs.tsv` via `nightly-seen.mjs` as a terminal `DROP:below-comp-floor` so this posting is never re-scored on a future run.
