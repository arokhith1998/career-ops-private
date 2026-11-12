# Evaluation: Pramaana Labs -- Product Manager

**Date:** 2026-11-11
**Score:** 2.8/5
**URL:** https://www.linkedin.com/jobs/view/4490033754
**Via:** -- (direct, LinkedIn)
**Archetype:** Product Manager (zero-to-one, technical/AI-research product)
**Legitimacy:** Proceed with Caution
**Work Auth:** ⚠️ Unstated -- TIER-3 (downgrade applied per modes/nightly-rules.md section 2: no LCA/H1B record found under this name, treated as "not found," not zero; JD silent; no E-Verify signal)
**Posted:** "7 hours ago" per LinkedIn, 60 applicants; live at extraction 2026-11-12
**PDF:** pending (digest_only band; no deck, no pack -- report only)
**Track:** us | **Profile:** cv-variants/us-product-management.md | **Portfolio:** https://adhi-product-ai.vercel.app/ref/pramaana-labs (AI-forward: company is explicitly a frontier AI lab)
**Band:** digest_only (score < 3.0): report written for the record; this row does not enter the build queue
**Verification:** JD pre-extracted to jds/pramaana-labs-product-manager.md; local-file read, no live Playwright/WebFetch re-fetch this pass

---

## Machine Summary
```yaml
company: "Pramaana Labs"
role: "Product Manager"
score: 2.8
legitimacy_tier: "Proceed with Caution"
archetype: "Product Manager (zero-to-one, technical/AI-research product)"
final_decision: "Discard"
hard_stops: []
soft_gaps:
  - "No formal-verification, symbolic-AI, or Lean 4 background anywhere in cv.md -- this is the product's technical core and the deepest gap of this batch"
  - "No enterprise AI, regulated-workflow (tax/government), or developer-tools PM experience in cv.md"
  - "Candidate's PM reps are thinner than this role implies: Sensata's sensor-product roadmap (B2B industrial) and SwipeHire (consumer web app) are both real but neither is an AI-research or formal-methods product"
  - "Work-authorization tier downgraded: no LCA/H1B filing history found for Pramaana Labs under this name; small/early-stage company so 'not found' is treated as inconclusive rather than a hard negative, but it still moves the row down a tier per the house tier order"
top_strengths:
  - "Zero-to-one builder credibility: founded and shipped SwipeHire end to end (PRD, MVP scope, GTM, pricing, analytics), and is currently running PriceKeel through the same founder motions -- a direct match to 'taking a technical product from ambiguous problem to shipped software'"
  - "Technical fluency adjacent to the ask: SQL, Python (pandas, NumPy), API-level analytics stacks (GA4/GTM/event tracking) across every role, even without ML/formal-methods depth specifically"
  - "Customer-discovery discipline: 30+ customer interviews at Sensata driving product enhancements, 12+ user interviews on SwipeHire driving +25% activation"
confidence: "Low"
risk_level: "Medium"
next_action: "Discard per score < 4.0 guidance unless the candidate has a specific reason to override; the domain gap (formal verification / Lean 4) is real and not closed by adjacent analytics experience"
work_auth: "unstated"
discard_reasons:
  - "Score below the 3.0 digest_only floor on CV-match strength for this specific technical domain, compounded by the TIER-3 visa downgrade"
via: null
company_confidential: false
advertised_comp: null
risk_summary:
  legitimacy: "proceed_with_caution"
  classification: "clear"
  culture: "pass"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Product Manager -- zero-to-one ownership of a technical verification/formal-methods product |
| Domain | Frontier AI: pairs foundation models with a symbolic world model encoded in Lean 4; planned product areas include a self-serve workbench, a tax product ("Harbor"), and government products |
| Function | Discover problems via user interviews/workflow observation, own product direction (users, use cases, roadmap, success measures), translate technical capability into usable workflows, drive delivery and measurement |
| Seniority | Single "Product Manager" title, no years floor stated; body implies early/foundational PM ownership at a very young company (founded 2025) |
| Remote | Onsite, Palo Alto, CA |
| Team size | Not stated; founders are ex-Google, DeepMind, Glean -- implies a small, technically dense team |
| Culture screen | pass -- concrete technical description (Lean 4, symbolic world model), named founder pedigree, clear near-term product areas (workbench, Harbor, government); 60 applicants at 7 hours is high early interest, not a red flag on its own |
| TL;DR | An early, hands-on PM seat at a frontier AI-verification startup, asking for technical depth (formal methods, model behavior) and PM reps the candidate's cv.md does not yet show. |

**Geo-mismatch check:** none. No structured location field distinct from the JD body was available to compare (single onsite Palo Alto designation throughout); skip per the liveness-gate rule for JD-text-only comparisons.

**Work-authorization check:** ⚠️ Unstated. The JD text contains no sentence on work authorization, sponsorship, citizenship, clearance, required degree, or graduation year at all. Per the visa-gate phase this posting carries a TIER-3 downgrade (not a skip): no LCA/H1B petition record was found for Pramaana Labs under this name -- treated as "not found" given the company's small size and early stage (founded 2025), consistent with the house precedent for similarly young, thinly-documented companies (see data/visa-cache.tsv -- Mintive, Tint). No E-Verify signal either way. Score-neutral at the authorization-tier classification level (⚠️ Unstated per the Block A rubric), but the downstream TIER-3 visa-tier downgrade is applied below per nightly-rules.md section 2.

## B) Match with CV

| JD requirement | CV evidence (cv.md) | Fit |
|---|---|---|
| Taking a technical product from ambiguous problem to shipped software and sustained usage | SwipeHire: wrote the PRD, scoped the MVP, shipped auto-tailored resumes and visa-aware matching, onboarded 50+ early users; PriceKeel: founded a decision-integrity layer now in pilots | Strong |
| Strong customer discovery and product judgment; prioritization under limited resources | 30+ customer interviews at Sensata driving CSAT +22%; 12+ user interviews on SwipeHire driving activation +25%; managed a 100+ feature backlog in Agile at Sensata | Strong |
| Technical fluency in APIs, data flows, model behavior, system constraints | SQL, Python (pandas, NumPy), GA4/GTM event tracking, API-level GTM stack on SwipeHire (OpenAI API); no formal-methods or ML-model-behavior depth | Partial |
| Ability to lead across functions | Led engineering/Sales/Accounts coordination at Applied Materials; managed a 5-consultant team on the Safran project; hired and managed teams at Pixis and Plug Power | Strong |
| Comfort with workflows where correctness, evidence, and user trust matter | PriceKeel's audit trail records pricing decisions with "evidence Finance can audit" -- a direct conceptual analog to Pramaana's verification/evidence framing | Partial-Strong |
| Developer tools, self-serve software, enterprise AI, or regulated workflows (preferred) | Not in cv.md -- no developer-tools, self-serve-software, or regulated-industry (tax/government) PM experience | Gap |
| Prior experience as an early PM establishing product practices (preferred) | SwipeHire is a solo/zero-to-one build, which is adjacent but not "establishing practices" inside an existing early-stage team | Partial |

**Gaps and mitigation (report only, never candidate-facing):**
1. **Formal verification / Lean 4 / symbolic AI domain.** The deepest gap in this batch -- nothing in cv.md touches formal methods, theorem proving, or symbolic AI. Mitigation: the PriceKeel "evidence Finance can audit" framing is the single closest conceptual bridge (an auditable decision layer), and should lead any positioning; there is no honest way to claim domain depth here.
2. **ML/model-behavior technical fluency.** Candidate's technical stack is data/analytics engineering (SQL, Python/pandas), not ML model internals. Question for the candidate (digest): any hands-on exposure to LLM evaluation, prompting, or model-behavior debugging beyond using Claude for reporting automation? If yes, add to cv.md -- it would materially change this score.
3. **Regulated-workflow / enterprise AI / developer-tools PM experience.** None in cv.md; these are listed as "preferred," not required, so this is a softer gap than the two above.

## C) Level and Strategy

1. **Level detected:** Single, undifferentiated "Product Manager" title at a 2025-founded company with ex-Google/DeepMind/Glean founders -- reads as an early, high-ownership generalist PM seat rather than a leveled corporate PM role. Candidate's natural level for this archetype (Associate-PM per config/profile.yml) is a plausible fit on seniority, but the domain gap is the binding constraint, not the level.
2. **Sell senior without lying:** Lead with the founder-operator range (PriceKeel, SwipeHire) as the strongest signal of being able to run an early PM seat without hand-holding, and be direct in interviews that the formal-verification domain is new rather than implying prior exposure.
3. **If downleveled:** Not applicable in the usual sense -- there is no higher level to downlevel from; the honest framing is whether the candidate can ramp fast enough on the domain to be useful inside the company's first 90 days, which is a question only a conversation with the team can answer.

## D) Comp and Demand

- **Company type:** Early-stage / pre-revenue startup (Pramaana Labs, founded 2025, founders ex-Google/DeepMind/Glean; no public funding figures stated in the posting) -- Medium to low compensation reliability: small team, vague-by-design role scope ("planned product areas"), no stated band.
- **Compensation reliability:** Unknown -- no advertised salary figure; skipping the component split, detailed market rows, and HR verification questions per this pass's guidance, since there is no number to interrogate.

## E) Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Pricing/founder-led master | 2 sentences: SwipeHire zero-to-one build + PriceKeel's auditable-decision-layer framing, closing with Claude AI-agent automation line | Closest honest bridge to "evidence/correctness matters" language |
| 2 | Skills | Pricing-led groups | Lead with Product (roadmapping, JTBD, PRD writing, MVP scoping) and Analytics (SQL, Python) | us-product-management override |
| 3 | Sensata | Product & Growth Marketing bullets | Promote the 100+ feature backlog / Agile roadmap bullet (+25% time-to-market) to the top | Closest cv.md analog to structured product-delivery cadence |
| 4 | Projects | SwipeHire, Safran | SwipeHire leads, framed around the zero-to-one PRD/MVP/shipping motion rather than the growth-metrics angle | Direct match to "ambiguous problem to shipped software" language |
| 5 | Applied Materials | 4 cv.md bullets | Keep all 4, lead with the Claude AI-agent automation line | Mandatory on every resume |

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Ambiguous problem to shipped software | SwipeHire build | No existing AI job-matching product, undefined scope | Ship a working MVP | Wrote the PRD, scoped MVP, shipped auto-tailored resumes and matching | 50+ early users onboarded | Ship the smallest end-to-end slice before adding sophistication |
| 2 | Evidence/correctness/user trust | PriceKeel audit trail | Pricing decisions with no auditable record | Give Finance an evidence trail | Built the audit trail recording the human pricing decision | Evidence Finance can audit (no further metrics; never invent any) | Trust is built by making the decision inspectable, not just correct |
| 3 | Customer discovery under limited resources | Sensata OEM interviews | Unclear pain points across OEMs/distributors | Find the real product gaps | Ran 30+ customer interviews | CSAT +22%, enhancements shipped | Talk to the people who feel the pain before writing the roadmap |
| 4 | Technical domain gap (honest framing) | n/a | n/a | n/a | n/a | n/a | "No formal-verification background; here's how fast I've ramped on unfamiliar technical domains before (SwipeHire's AI/matching stack, PriceKeel's guardrail engine)" |

**Case study:** SwipeHire's zero-to-one build (PRD through 50+ early users) as the direct "ambiguous problem to shipped software" proof point.
**Red-flag questions:** "You have no formal-verification or AI-research background -- why this role?" -> answer honestly; there is no credible way to claim domain depth that isn't in cv.md, so the only defensible answer is ramp speed and the PriceKeel evidence-trail parallel.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|---|---|---|
| Freshness | Posted "7 hours ago," already 60 applicants, live apply flow | Positive |
| Source | First-party LinkedIn posting (guest API, no login) | Positive |
| JD specificity | Named founders' pedigree, named technical approach (Lean 4, symbolic world model), named upcoming product lines (workbench, Harbor); role scope ("planned product areas") is intentionally directional for a pre-product-market-fit company | Neutral |
| Requirements realism | Vague on required years/level, consistent with a genuinely early-stage company whose role is still being defined -- not itself a red flag, per the edge-case guidance for early-stage/pre-revenue startups | Neutral |
| Employment classification | No contractor-status language; standard full-time framing implied, though benefits are not itemized the way the larger postings in this batch are | Neutral |
| Work-authorization filing history | No LCA/H1B petition record found for the company under this name; combined with no stated comp band and no itemized benefits, this is the thinnest-documented posting in the batch | Concerning |
| Reposting | No match found in data/scan-history.tsv for this requisition | Neutral |
| Untrusted content | No instructions aimed at an AI reviewer found in the JD text | Neutral |

**Context notes:** This is a genuinely early-stage company (founded 2025) where vague scope and an unfindable filing history are both explained by newness rather than deception -- the "Proceed with Caution" tier reflects thin documentation and the visa-tier downgrade, not a ghost-job call. Prior-contact FYI: no prior Pramaana Labs application history surfaced in available tracker context; treat as no-history.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ⚠️ Proceed with Caution — thin documentation (no comp band, no itemized benefits, no findable visa-filing history for a very young company) |
| Employment classification | ✅ clear |
| Culture screen | ✅ pass |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

---

## Keywords extracted
product manager, formal verification, Lean 4, symbolic world model, foundation models, self-serve workbench, developer experience, Harbor, tax product, government products, user interviews, workflow observation, roadmap, success measures, activation, repeat usage, task completion, time to value, customer discovery, enterprise AI, regulated workflows

## Pack status
No pack built (digest_only band -- score below the 3.0 floor; this row is excluded from the build queue per the SCORE-phase routing rules. Report retained for the candidate's record and for future re-scoring if cv.md gains relevant technical-domain evidence).
