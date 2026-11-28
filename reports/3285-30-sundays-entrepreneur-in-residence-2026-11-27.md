# Evaluation: 30 Sundays — Entrepreneur in Residence (EIR Operations)

**Date:** 2026-11-27
**URL:** https://www.linkedin.com/jobs/view/4495300494
**Via:** — (direct)
**Archetype:** Chief of Staff (India) / Entrepreneur in Residence
**Score:** N/A (dropped at the India salary-floor check)
**Legitimacy:** Not evaluated (dropped before Block G)
**Work Auth:** Not needed (India track, no US visa gate)
**PDF:** pending
**Batch ID:** 3285

---

## Machine Summary

```yaml
company: "30 Sundays"
role: "Entrepreneur in Residence (EIR Operations)"
score: null
track: "india"
visa_status: "not_applicable"
tier: "N/A"
band: "below_floor"
archetype: "Chief of Staff (India) / Entrepreneur in Residence"
advertised_comp: "not stated in this posting"
comp_estimate: "16-20 LPA (JD-stated figure for 30 Sundays' own earlier, near-identical 'EIR Operations' req, job id 4490305149, extracted 2026-11-12); this req (job id 4495300494) is the same role re-listed with essentially the same text"
comp_source: "jds/30-sundays-entrepreneur-in-residence.md (this run's own extraction notes), the prior extracted req's stated comp band"
final_decision: "DROP: below-comp-floor"
hard_stops:
  - "Same-employer, same-role (near-identical JD text) prior req states 16-20 LPA against config/profile.yml's 35 LPA India floor - dropped per nightly-rules.md section 2"
soft_gaps: []
top_strengths: []
risk_level: "N/A"
confidence: "Medium"
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

This req (LinkedIn job id 4495300494) does not itself state a compensation figure, so the mandatory India salary check (nightly-rules.md section 2, config/profile.yml's 35 LPA floor) relied on the closest available evidence: this exact same company's earlier, near-identical "EIR Operations" req (job id 4490305149, extracted 2026-11-12, essentially the same role text per the extraction agent's own duplicate-content flag), which stated a comp band of **16-20 LPA**.

This is same-employer, same-role, same-content evidence rather than a direct statement on this specific req, but it is the most credible figure available and well under half the 35 LPA floor. Per the standing rule ("Top of the credible range below 35 LPA = drop"), this role is dropped rather than scored. No Block A-G evaluation was produced. Nothing is queued for the 09:00 build.

Recorded in `data/seen-jobs.tsv` via `nightly-seen.mjs` as a terminal `DROP:below-comp-floor` so this posting is never re-scored on a future run.
