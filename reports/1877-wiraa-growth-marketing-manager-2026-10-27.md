# Evaluation: KAG (Kenan Advantage Group) via Wiraa -- Growth Marketing Manager

**Date:** 2026-10-27
**Archetype:** Growth / Performance Marketing
**Score:** 3.7/5
**Legitimacy:** Proceed with Caution (see visa-cache discrepancy note)
**H-1B status:** TIER-1 (BUILD), cached under "Wiraa" in `data/visa-cache.tsv`. **Discrepancy flag:** the JD's own text names the real hiring entity as **KAG (Kenan Advantage Group, a large tank-truck/logistics carrier)** -- "KAG is an equal opportunity employer," "introduce KAG capabilities to prospective customers" -- not the "WCG Clinical, Inc." entity the visa-lookup subagent attributed to this Wiraa posting. Per visa-evaluator.md Step 1, the JD's own words outrank a database lookup; the cached TIER-1/BUILD verdict should be treated as provisional for KAG specifically, not confirmed. Flagging for the candidate rather than silently trusting either source.
**Comp anchor:** not stated in JD.
**URL:** https://www.linkedin.com/jobs/view/4483207062
**PDF:** not generated -- discover phase (nightly cloud run); score routes to no_deck at the 09:00 build run
**Batch ID:** cloud-discover-1877
**Track:** us | **Profile:** `cv-variants/us-growth.md` | **Portfolio:** https://adhi-growth-ai.vercel.app/ref/wiraa
**Tracker check:** No existing KAG/Wiraa row in `data/applications.md` for this exact req. New row.

## A) Role Summary
A B2B/commercial growth-marketing role for KAG (Kenan Advantage Group), posted through the Wiraa staffing-marketplace brand on LinkedIn. Demand generation, account-based marketing, and new-logo acquisition for a transportation/logistics/industrial-services company, working closely with Sales and Business Development.

**Work-authorization check:** No explicit sponsorship/citizenship/clearance wall in this JD; visa tier driven by a cached lookup that itself may be keyed to the wrong legal entity (see discrepancy flag above).

## B) CV Match
| JD requirement | CV evidence | Fit |
|---|---|---|
| B2B demand gen, ABM, pipeline/lead-gen campaigns | Pixis 8-client demand/performance portfolio; Plug Power lead-flow automation (-50% cost per lead) | Strong |
| Industry experience in transportation/logistics/industrial/energy (preferred, not required) | Sensata Industrial BU (multi-$100M), Plug Power (hydrogen/industrial) | Strong |
| CRM (Salesforce) and marketing automation | PriceKeel CRM/CPQ setup; Plug Power Salesforce/Adobe Analytics automation | Strong |
| Translate competitive/market intelligence into sales enablement | Sensata competitive benchmarking across 10+ players, sales enablement for 50+ reps | Strong |

**Gaps:** No direct trucking/freight-carrier domain experience; flagged as a question, not a gap, especially since the JD itself marks industry experience as preferred rather than required.

## C) Level and Strategy
No years figure stated; "Associate" seniority level per LinkedIn metadata suggests a mid-level individual-contributor scope, which is a comfortable match for the candidate's demand-gen and ABM track record.

## D) Compensation and Demand
**Company type:** Enterprise / traditional corporate (large private logistics carrier, if KAG is confirmed as the real employer) -- Medium confidence. **Compensation reliability:** Unknown -- no advertised salary figure; skip component split per the no-figure rule.

| Component | Figure |
|---|---|
| Advertised (JD) | not stated |

## E) Personalization Plan
Lead Summary/Skills with B2B demand-gen, ABM and CRM-automation strengths; pull the Sensata industrial-sector and Plug Power automation bullets into Experience, tailored to KAG's transportation/logistics language once the employer identity is confirmed.

## F) Interview Plan (condensed)
1. **Pixis multi-client demand/performance portfolio** -- directly maps to new-logo acquisition and ABM.
2. **Sensata industrial-sector competitive benchmarking and sales enablement** -- maps to "translate market/competitive intelligence into sales enablement materials."
3. **Red-flag question to prepare for:** "This posting is under a different company name on LinkedIn than the JD text names -- can you confirm who you'd actually be working for?" Worth asking the recruiter directly before investing further.

## G) Posting Legitimacy
**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|---|---|---|
| Posting source | Posted under the "Wiraa" staffing-marketplace brand on LinkedIn, but the JD body is 100% KAG-branded | Caution |
| Employer-identity mismatch | A separate visa/legal-entity lookup for "Wiraa" returned a conflicting match (WCG Clinical, Inc., an unrelated clinical-research company) -- the two sources disagree on who the actual employer is | Caution |
| Description quality | Specific, detailed, internally consistent JD once the KAG branding is read closely | Positive |

## Risk Summary
| Signal | Status |
|---|---|
| Posting legitimacy | Proceed with Caution -- employer-identity mismatch between the JD text (KAG) and a cached visa lookup (WCG Clinical) |
| Visa | TIER-1 (BUILD), cached under "Wiraa" -- treat as provisional until the employer identity is confirmed |
| Culture screen | Not evaluated |

## Machine Summary
```yaml
company: "KAG (Kenan Advantage Group) via Wiraa"
role: "Growth Marketing Manager"
score: 3.7
legitimacy_tier: "Proceed with Caution"
archetype: "Growth / Performance Marketing"
final_decision: "Apply (no_deck)"
hard_stops: []
soft_gaps:
  - "No direct trucking/freight-carrier domain experience"
  - "Employer identity unconfirmed (JD says KAG, a cached lookup says WCG Clinical)"
top_strengths:
  - "Pixis multi-client demand/performance portfolio"
  - "Sensata industrial-sector competitive benchmarking and sales enablement"
risk_level: "Medium (employer-identity mismatch, see Block G)"
confidence: "Medium"
next_action: "Queue no_deck at 09:00; confirm actual employer identity before applying"
work_auth: "BUILD (provisional -- see discrepancy flag)"
discard_reasons: []
via: "Wiraa"
company_confidential: false
advertised_comp: "not stated in JD"
risk_summary:
  legitimacy: "proceed_with_caution"
  classification: "not_evaluated"
  culture: "not_evaluated"
```
