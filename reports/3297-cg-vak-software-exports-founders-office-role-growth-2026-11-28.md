# Evaluation: CG-VAK Software & Exports -- Founder's Office Role (Growth)

**Date:** 2026-11-28
**URL:** https://www.iimjobs.com/j/cg-vak-software-and-exports-founder039s-office-role-growth-1736178
**Via:** -- (direct)
**Archetype:** Founder's Office / Business Operations
**Score:** N/A (dropped at the India salary-floor check)
**Legitimacy:** Not evaluated (dropped before Block G)
**Work Auth:** Not needed (India track, no US visa gate)
**PDF:** pending
**Batch ID:** 3297

---

## Machine Summary

```yaml
company: "CG-VAK Software & Exports"
role: "Founder's Office Role - Growth"
score: null
track: "india"
visa_status: "not_applicable"
tier: "N/A"
band: "below_floor"
archetype: "Founder's Office / Business Operations"
advertised_comp: "not stated in JD"
comp_estimate: "4.0-14.0 LPA across all tenure bands (AmbitionBox, company-specific); tops out ~13.6 LPA even at 9-11 years tenure"
comp_source: "WebSearch: AmbitionBox 'CG-VAK Software (India)' employee-reported salary bands by experience"
final_decision: "DROP: below-comp-floor"
hard_stops:
  - "Company-specific AmbitionBox salary data (55 employee reports) shows this employer's pay scale tops out around 13.6 LPA even at 9-11 years tenure, and this role asks only 2-5 years -- well under half the 35 LPA India floor, and this is the employer's OWN reported data, not a generic title proxy"
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

The JD states no comp figure, so the mandatory India salary check (nightly-rules.md section 2,
config/profile.yml's 35 LPA floor) used the closest credible public data: AmbitionBox's
employee-reported salary bands specifically for CG-VAK Software & Exports (not a generic
title proxy -- this is the employer's own data, 55 salaries). Bands run roughly 4-4.7 LPA
(4-8 yrs), 8-14 LPA (5-10 yrs), and 11.6-13.6 LPA (9-11 yrs). This req asks for only 2-5
years, well below the senior bands shown, and even the company's most senior reported
band (9-11 yrs) tops out at 13.6 LPA -- under 40% of the 35 LPA floor.

This is a stronger-than-usual comp-floor signal because it is company-specific data, not a
generic role-title proxy (contrast the Caegrid LLP row processed the same run, kept despite
a comp-floor risk because its proxy data was generic and inconclusive).

Per the standing rule ("Top of the credible range below 35 LPA = drop"), this role is
dropped rather than scored. No Block A-G evaluation was produced. Nothing is queued for
the 09:00 build.

Recorded in `data/seen-jobs.tsv` via `nightly-seen.mjs` as a terminal `DROP:below-comp-floor`
so this posting is never re-scored on a future run.
