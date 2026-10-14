# Evaluation: ? (undisclosed client, via The Bridge Associates) — Entrepreneur in Residence

**Date:** 2026-10-14
**URL:** https://www.linkedin.com/jobs/view/4479056971
**Via:** The Bridge Associates
**Archetype:** Founder's Office / Entrepreneur in Residence (India track) — non-AI generalist operating role; none of the six AI-specific archetypes (LLMOps, Agentic, Technical AI PM, AI Solutions Architect, AI FDE, AI Transformation Lead) map cleanly, since this JD has no AI/technical component at all. Closest conceptual analog if one must be forced: AI Transformation Lead's "change management, cross-functional driving" shape, minus the AI.
**Score:** 3.7/5
**Legitimacy:** Proceed with Caution
**Work Auth:** ➖ Not needed (India track — visa gate does not apply)
**PDF:** not generated — score-only pass (discover phase); build deferred to the 09:00 build run if this row clears the queue
**Verification:** unconfirmed (batch mode) — no Playwright available in this headless cloud run; liveness read from a pre-extracted JD snapshot, not a live navigate

---

## Machine Summary

```yaml
company: "?"
role: "Entrepreneur in Residence"
score: 3.7
legitimacy_tier: "Proceed with Caution"
archetype: "Founder's Office / Entrepreneur in Residence (India track, non-AI generalist)"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "No formal 'Founder's Office' or EIR title on record; reframe PriceKeel + SwipeHire as the functional equivalent"
  - "End employer and funding stage undisclosed; cannot verify stability or true comp band before applying"
  - "No supply-chain-specific experience on the CV"
top_strengths:
  - "Founder & CEO of PriceKeel: live 0-to-1 operating range (CRM/CPQ setup, forecast and pipeline reviews, deal approvals, running pilots, raising a round) is a near 1:1 analog for 'work closely with the founder on strategic priorities and execution of key initiatives'"
risk_level: "Medium"
confidence: "Low"
next_action: "Ask The Bridge Associates to name the end client and share a comp band before investing further time"
work_auth: "not_needed"
discard_reasons: []
via: "The Bridge Associates"
company_confidential: true
advertised_comp: null
risk_summary:
  legitimacy: "proceed_with_caution"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype detected | Founder's Office / Entrepreneur in Residence (India track) — non-AI generalist; no clean fit in the AI-specific archetype list |
| Domain | Cross-functional business building (sales, marketing, e-commerce, ops, supply chain, finance) inside a single consumer brand |
| Function | Build (0-to-1 initiatives, new growth channels, product launches) + manage (cross-functional execution) |
| Seniority | Mid-level, 3-7 years asked — candidate has 5 years, squarely in band |
| Remote | Onsite, Gurugram, Haryana — no remote language in the JD |
| Team size | Not mentioned |
| Culture screen | Not evaluated — `culture_screen.require` is absent from `config/profile.yml`, and the end employer is undisclosed so there is nothing concrete to screen against |
| TL;DR | A legitimate-reading but thin-on-detail EIR req from a staffing agency for an unnamed "young, fast-growing consumer brand" — strong track-and-level fit for the candidate's founder-operator profile, but the undisclosed employer means comp, stage and culture all stay unverified until a recruiter call. |

No geo-mismatch: the JD states Gurugram onsite with no remote claim anywhere to contradict it — silence, not a contradiction, so no flag.

### Work-authorization check

➖ **Not needed.** India track — `config/nightly.yml -> tracks.india.visa_gate: false` and `modes/nightly-rules.md` section 2 both state the US visa gate never applies to India-track rows. No sponsorship language appears in the JD, and none is required to evaluate it.

## B) Match with CV

| JD requirement | CV evidence |
|---|---|
| "Work closely with the founder on strategic priorities, business planning, execution of key initiatives" | Founder & CEO, PriceKeel — runs the company's own CRM/CPQ, forecast and pipeline reviews, deal approvals; is literally the founder being worked alongside in a smaller analog. SwipeHire — wrote the PRD, scoped the MVP, built GTM/analytics from zero |
| "Identify new growth opportunities across channels, categories, markets, partnerships" | Pixis — proactive account strategy and channel diversification cut client churn 50%; GenY Medium — 16x ROAS rebuilding Google Merchant/Meta catalog feeds for D2C brands; SwipeHire — modeled 3 subscription pricing tiers from competitor benchmarks |
| "Cross-functional execution across sales, marketing, e-commerce, operations, supply chain, finance" | Sensata Pricing Lead — partnered with Sales, Finance and distribution on the Bleeders & Leakers program ($700K+ margin recovered) and distributor margin repricing (53% to 61%); Plug Power — owned $100K/month marketing budgets across multiple business units, presented to leadership for approval |
| "Track key business metrics, identify gaps, translate insights into actionable growth plans" | Sensata — built the FY2026 Bleeders & Leakers Power BI dashboard (1,200 opportunities, $627M target, $433M in margin gaps surfaced); Plug Power Mar-Tech closed-loop reporting (Salesforce, Adobe Analytics, GA, GTM) |
| "Support new product launches, market expansion, business transformation, special projects" | Sensata GTM — owned GTM for new sensing products across NA/Europe, $2M+ first-year revenue; Safran market-sizing consulting project — TAM/SAM/SOM from 170 facilities to a SAM of 28, presented to Safran leadership |
| "Take ownership of ambiguous, high-impact challenges" | PriceKeel (founder, by definition maximal ambiguity); Pixis — hired and managed an 8-person team across 8 clients with full P&L ownership |

**Gaps:**
1. **No formal "Founder's Office"/"EIR" job title** — nice-to-have, not a hard blocker; the JD asks for the shape of the work (founder-adjacent, ambiguous, cross-functional), not the label, and "3-7 years in a startup, D2C/consumer brand, consulting, or a founder's office role" explicitly accepts adjacent paths.
2. **No explicit supply-chain experience** — soft gap. Closest adjacent proof: Sensata distributor/channel-partner margin work and Plug Power vendor-facing Mar-Tech automation touch distribution-adjacent problems, but neither is supply chain proper. Mitigation: do not claim supply-chain depth; let the founder-operator breadth carry the "wears every hat" framing instead.
3. **Consumer-brand D2C ops depth is marketing-side, not fully operational** (Pixis, GenY are media/growth, not category or inventory ops). Mitigation: lean on PriceKeel and Sensata's P&L ownership to show operational, not just marketing, range.

None of these are hard blockers; the JD's own "ideal candidate" language (startup, D2C, consulting, or founder's office — any one of four paths) is wide enough that the candidate clears the bar on founder-adjacency and ambiguity tolerance alone.

## C) Level and Strategy

1. **Level detected:** Mid-level EIR, 3-7 years asked. **Candidate's natural level:** squarely inside the band at 5 years, with an unusual edge — the candidate is a sitting founder (PriceKeel), which is a level up from most EIR candidates who are aspiring toward founder experience rather than holding it.
2. **Sell senior without lying:** Frame PriceKeel first in the pitch, not last — "I'm running my own company's CRM, pipeline reviews and deal approvals right now" reframes the candidate as a peer the founder can delegate to immediately, not someone who needs the EIR seat to learn founder-adjacency. Pair with the Sensata Bleeders & Leakers number ($700K+ recovered) as the concrete "I move metrics, not just decks" proof.
3. **If they downlevel:** Unlikely here — the JD's own band already matches the candidate's experience, so there is little room to downlevel further. If the undisclosed client turns out to be earlier-stage than expected and offers a narrower "operations associate" scope instead of true founder's-office latitude, accept only if the 6-month review includes an explicit path back to the advertised EIR scope.

## D) Comp and Demand

**Company type classification:** The posting entity is **The Bridge Associates**, a staffing/recruiting agency — classified as **Recruiter / staffing listing**. The actual hiring entity ("a young, fast-growing consumer brand") is not named, so its own company type (growth-stage vs. early-stage startup) cannot be classified independently. Per the required rule, this defaults to the conservative canonical tier: **Unknown / Low** confidence.

- **Company type:** Unknown (agency-mediated, end client undisclosed) — Low confidence; evidence phrase: "Our client is looking for... a young, fast-growing consumer brand" with no name, funding stage, or sector given beyond "consumer brand."
- **Compensation reliability:** Unknown — no advertised salary figure in the JD; per the collapse rule, component split, market-data rows, and HR verification questions are skipped.

**Public market research (2 searches, within the India-row salary-check budget, both run before scoring per the gate in the batch instructions):**
- "Entrepreneur in Residence" roles in India split cleanly into unpaid/low-stipend government-academic fellowships (NIDHI-EIR, IITM Pravartak: ~INR 30k-35k/month stipends) and corporate EIR seats (Lenskart, Aramya) that ask for 5-15 years and carry no public salary figure.
- Comparable "Founder's Office" generalist/executive postings at Indian startups show a wide band depending on funding and seniority: an early-stage Bangalore "Founder's Office Executive" role lists INR 6-12 LPA + incentives, while a well-funded SaaS "Founder's Office" role (Composio, 3-7 years) lists INR 40-70 LPA. Nothing in the available data pins down where this specific undisclosed consumer brand sits on that range.

Given the 3-7 year band and the "young, fast-growing" framing (suggesting some funding, unlike a true pre-seed shop), a credible range plausibly spans roughly INR 15-40+ LPA depending on the client's actual stage — wide enough that the **35 LPA India floor cannot be confidently cleared or ruled out from public data alone**. Per the batch instructions this keeps the row in play (comp_estimate: unknown) rather than forcing a drop, but the comp floor should be confirmed directly with The Bridge Associates before any application effort.

**HR verification questions:** Not applicable — no salary figure exists yet to verify against. The operative question here is prior to that: *what is the fixed CTC band for this specific requisition*, since no figure has been disclosed at all.

## E) Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Leads with pricing/marketing framing | Lead with "Founder and operator" framing: PriceKeel first, cross-functional ownership second | Mirrors the JD's founder-adjacency ask more directly than a marketing-led summary |
| 2 | Experience order | Chronological, pricing-forward | Promote PriceKeel + Sensata (P&L, cross-functional) above Plug Power/Pixis for this req | JD cares about founder-proximity and cross-functional ops, not paid-media execution |
| 3 | Skills | Marketing/pricing-grouped | Add a "Leadership & Operating" lead group (P&L, OKRs, cross-functional initiatives, hiring) to the top | Matches JD's generalist, cross-functional language |
| 4 | Projects | SwipeHire gated on AI/product keywords | Include SwipeHire as the clearest zero-to-one founder proof point | Directly answers "built something from nothing" better than any employer bullet |
| 5 | Education (India-track line) | Standard | Keep the BITS Pilani "Qbox" venture line visible | Shows entrepreneurial reps predate PriceKeel, reinforcing the EIR narrative |

**Top CV changes:** lead with founder/operator identity, not pricing or growth marketing. **Top LinkedIn changes:** headline should foreground "Founder, PriceKeel" ahead of "Pricing & Product Marketing" when targeting this kind of role.

## F) Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Work closely with a founder on strategic priorities | Building PriceKeel's own pricing/deal-desk product | Early-stage B2B SaaS pricing tooling market is crowded and trust-sensitive | Needed a differentiated wedge that Finance and RevOps would both sign off on | Designed the discount-guardrail engine with an auditable decision trail instead of a black-box recommendation | Running pilots and investor conversations now | Being the founder (not just adjacent to one) means understanding firsthand which "founder asks" are actually urgent vs. noise — a skill this role explicitly needs |
| 2 | Ambiguous, high-impact problem ownership | Sensata Bleeders & Leakers program | $627M pricing target across 3 regions with no existing visibility into where margin was leaking | Needed to build the diagnostic tool before the fix | Built the FY2026 Power BI dashboard surfacing $433M in margin gaps, then ran the negotiations | Recovered $700K+ in 2 quarters | Diagnosing before acting beat guessing at fixes — a pattern directly reusable for an undefined EIR mandate |
| 3 | Identify new growth opportunities across channels | Pixis account portfolio | 8 clients, $15K-$90K/month budgets each, rising churn | Needed to cut churn without cutting budgets | Built channel-diversification and vertical playbooks per client | Cut churn 50% | Growth comes from fit, not just spend — relevant to "identify new growth opportunities... across channels, categories, markets" |
| 4 | Cross-functional execution (sales, ops, finance) | Plug Power budget ownership | $100K/month across multiple business units needing leadership sign-off | Needed buy-in from finance and leadership on spend | Built the plans/forecasts, presented for approval, automated Mar-Tech reporting for accountability | -25% CPA, approved repeat budgets | Winning cross-functional trust required showing the numbers before asking for the budget, not after |
| 5 | Translate business challenges into structured plans | Safran market-sizing consulting project | Client needed to know whether 170 facilities represented a real market | Had to build a credible SAM from noisy facility data | Led a 5-consultant team to a SAM of 28 facilities with personas across 4 verticals | Presented findings to Safran leadership | Structuring ambiguity into a defensible number is the core EIR skill, independent of industry |
| 6 | Building and leading temporary/cross-functional teams | SwipeHire team | Needed design, GTM and analytics covered with no hires | Had to recruit and direct contributors around a zero-to-one product | Hired and managed the team, ran board decks and OKRs | Shipped to 50+ early users | Leading people who aren't formal reports is exactly the "build and lead temporary teams" ask in the JD |

**Recommended case study:** PriceKeel — it is the single most literal answer to "what does working closely with a founder on ambiguous, high-stakes priorities look like for you," since the candidate currently lives it.

**Red-flag questions and answers:**
- *"Why leave your own company for an EIR seat?"* — Answer honestly that PriceKeel is still running; frame the EIR role as applying the same operating muscle inside someone else's build, not abandoning the first one. (Do not over-promise availability without having actually resolved this with the candidate first — flag for the candidate to decide before interview.)
- *"This role reports to a founder, not you — can you take direction after running your own company?"* — Answer with the Sensata promotion story (Product & Growth Marketing to Pricing Lead in 10 months): proof of thriving inside someone else's org chart, not just a solo operator.

## G) Posting Legitimacy

**Assessment: Proceed with Caution.**

| Signal | Finding | Weight |
|---|---|---|
| Posting Freshness | "17 hours ago" at fetch time per the JD extraction notes — very fresh. Apply-button state unverified (no Playwright in this headless batch run). | Positive |
| Description Quality | Responsibilities are clearly listed and plausible, but almost entirely generic ("identify new growth opportunities," "drive projects across sales, marketing, ops") with no company-specific detail, no team size, no reporting structure beyond "the founder," and no compensation. No internal contradictions (experience ask is realistic for the scope described). | Concerning (genericness) / Neutral (no contradictions) |
| Company Hiring Signals | Not evaluated — the end employer is undisclosed, so no company-specific layoff/freeze search is possible; searching "The Bridge Associates layoffs" would only describe the staffing firm, not the client. | Not evaluated |
| Reposting Detection | No match for this company/title in `data/scan-history.tsv`. | Neutral |
| Role Market Context | Founder's-office/EIR seats at small consumer brands are trust-heavy hires that legitimately take weeks to fill; a fresh, still-open posting is unremarkable at this stage. | Neutral |
| Employment Classification | No 1099/independent-contractor/W-2 language present anywhere in the JD text. | Clear |
| AI-Buzzword vs. Infrastructure | Not applicable — the JD contains no AI/transformation language of any kind to check against infrastructure maturity. | Not evaluated |
| Benefits/Terminology Country Mismatch | JD has no benefits section at all to check for a mismatched-country template. | Not evaluated |
| Third-Party Location Tag Mismatch | Only one source (the LinkedIn posting itself) is available; no employer-page comparison possible. | Not evaluated |
| Agency Licensing | Agency-mediated posting detected ("our client"). Candidate's jurisdiction (United States) has no row in `templates/agency-licensing.yml` (only Ontario, Canada is seeded) — signal skipped silently per the file's own rule. | Not evaluated |
| Immigration-Status Overreach | No citizenship/status-requirement language anywhere in the JD. | Clear |
| Jurisdiction-Prohibited Content | No salary-history request or other prohibited-content pattern in the JD text. | Clear |

**Context Notes:** The combination of a genuinely fresh posting with no negative fraud tells (no off-platform process, no mandated subject line, no off-domain email) but an undisclosed end employer and zero compensation detail is exactly the agency-mediated profile this pipeline's own classification table describes as "Low to medium" reliability — real, probably active, but verify the client identity and comp band at first contact before investing in tailored materials.

### Prior-contact FYI
`node company-history.mjs --company "The Bridge Associates"` returns `responsiveness.label: no-history` and `postingChurn.label: none-detected` — no prior applications to this agency, nothing to note.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ⚠️ Proceed with Caution — undisclosed end employer, generic description, no compensation disclosed |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

---

## Keywords extracted

Founder's Office, Entrepreneur in Residence, EIR, 0 to 1, strategic priorities, business planning, cross-functional execution, growth opportunities, channels, categories, markets, partnerships, business analytics, key business metrics, actionable growth plans, new product launches, market expansion, business transformation, special projects, ambiguous, high-impact, ownership, bias for action, entrepreneurial mindset, stakeholder management, consumer brand, D2C, Gurugram, founder-facing
