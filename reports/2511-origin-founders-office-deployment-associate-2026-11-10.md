# Evaluation: Origin — Founder's Office, Deployment Associate

**Date:** 2026-11-10
**URL:** https://www.linkedin.com/jobs/view/4488896585
**Via:** — (direct)
**Archetype:** Chief of Staff (India) / Founder's Office
**Score:** N/A (dropped at the India salary-floor check)
**Legitimacy:** Not evaluated (dropped before Block G)
**Work Auth:** Not needed (India track, no US visa gate)
**PDF:** pending
**Batch ID:** 2511

---

## Machine Summary

```yaml
company: "Origin"
role: "Founder's Office, Deployment Associate"
score: null
track: "india"
visa_status: "not_applicable"
tier: "N/A"
band: "below_floor"
archetype: "Chief of Staff (India) / Founder's Office"
advertised_comp: "INR 15,00,000-20,00,000/yr (15-20 LPA, Origin-provided pay range)"
comp_estimate: "INR 15-20 LPA (JD stated) - below the 35 LPA floor"
comp_source: "JD"
final_decision: "DROP: below-comp-floor"
hard_stops:
  - "JD-stated comp (INR 15-20 LPA) is below config/profile.yml's 35 LPA India floor - dropped per nightly-rules.md section 2"
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

Origin's "Founder's Office, Deployment Associate" posting (Bengaluru, autonomous-construction-robotics startup) states a pay range directly on the posting: **"Rs 1,500,000.00/yr - Rs 2,000,000.00/yr"** (15-20 LPA) — below config/profile.yml's INR 35 LPA India floor. This is stated verbatim by the employer on the posting itself, so no further salary research was needed.

This is a different requisition from the existing "Founder's Office, Marketing Associate" req already on file for Origin (tracker #2344, 3.9/5, no_deck, BUILT) — distinct title and scope (deployment/field-pilot execution vs. marketing), confirmed via the JD body and the distinct LinkedIn job id (4488896585 vs 4487745936).

Per nightly-rules.md section 2 ("Top of the credible range below 35 LPA = drop"), this role is dropped without a full Block A-G evaluation. Nothing is queued for the 09:00 build.

Recorded in `data/seen-jobs.tsv` via `nightly-seen.mjs` as a terminal `DROP:below-comp-floor` so this posting is never re-scored on a future run.
