# Evaluation: Unicel Greens — Entrepreneur in Residence

**Date:** 2026-11-27
**URL:** https://www.linkedin.com/jobs/view/4495334118
**Via:** — (direct)
**Archetype:** Entrepreneur in Residence
**Score:** N/A (dropped at the India salary-floor check)
**Legitimacy:** Not evaluated (dropped before Block G)
**Work Auth:** Not needed (India track, no US visa gate)
**PDF:** pending
**Batch ID:** 3292

---

## Machine Summary

```yaml
company: "Unicel Greens"
role: "Entrepreneur in Residence"
score: null
track: "india"
visa_status: "not_applicable"
tier: "N/A"
band: "below_floor"
archetype: "Entrepreneur in Residence"
advertised_comp: "verbatim JD: 'You will start as an intern for the first two months with a monthly stipend of ~50,000 per month. Perform well and you will receive a full-time offer with higher compensation based on your performance.'"
comp_estimate: "~6 LPA annualized trial stipend (50,000/month x 12); full-time comp after the trial is unstated and conditional on performance"
comp_source: "JD itself (direct, verbatim)"
final_decision: "DROP: below-comp-floor"
hard_stops:
  - "JD-stated trial compensation (~50,000/month, ~6 LPA annualized) is far under config/profile.yml's 35 LPA India floor, and any higher full-time comp is unstated and conditional - dropped per nightly-rules.md section 2"
soft_gaps: []
top_strengths: []
risk_level: "N/A"
confidence: "High"
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

Despite being listed as Full-time/Executive on LinkedIn, the JD body explicitly structures this "Entrepreneur in Residence" seat as a 2-month trial: "You will start as an intern for the first two months with a monthly stipend of ~50,000 per month. Perform well and you will receive a full-time offer with higher compensation based on your performance." The posting also frames itself partly as an intern-track filter ("Apply only if you are looking for stable & long term perspective!").

This is the JD's own, direct, verbatim statement of compensation — the highest-confidence source available — and it is explicit that **any role above the 2-month ~50,000/month (~6 LPA annualized) trial stipend is conditional, unquantified, and not guaranteed**. Even treating the trial period alone, this is far under half the 35 LPA floor. Per the standing rule ("Top of the credible range below 35 LPA = drop"), this role is dropped rather than scored. No Block A-G evaluation was produced. Nothing is queued for the 09:00 build.

Recorded in `data/seen-jobs.tsv` via `nightly-seen.mjs` as a terminal `DROP:below-comp-floor` so this posting is never re-scored on a future run.
