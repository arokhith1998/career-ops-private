# Evaluation: Coinbase — Product Manager II, DeFi Borrow

**Duplicate notice (2026-11-22):** This exact req (gh_jid 8259870) was already evaluated twice before: report 916 (2026-10-07, score 2.3/5) and report 956 (2026-10-08, score 2.3/5). Tracker row #916 confusingly links to report 1870 instead (a different posting, gh_jid 8311341, "wallets-and-defi") - a pre-existing broken-link bug out of scope for tonight's run. This report independently confirms the low-fit verdict (score 2.1/5) but does NOT get its own tracker row or build-queue entry per the "never create a second row" rule; this req is terminalized in the seen-jobs ledger (`DROP:below-3.0`, recorded 2026-11-22) so it stops resurfacing at the non-terminal `shortlisted` stage.

**Date:** 2026-11-22
**URL:** https://www.coinbase.com/careers/positions/8259870?gh_jid=8259870
**Via:** — (direct application)
**Archetype:** Product Management / DeFi, Crypto Lending
**Score:** 2.1/5
**Legitimacy:** High Confidence
**Work Auth:** Silence (no explicit sentence); E-Verify participation notice present — TIER-1 confirmed (nightly visa gate, cached); no adjustment
**PDF:** not generated — below 3.0, digest line only
**Track:** us | **Legal name:** Coinbase Global, Inc. (filings recorded under "Coinbase Inc")
**Portfolio (for reference):** https://adhi-product.vercel.app/ref/coinbase
**Routing:** score 2.1 (< 3.0) -> digest line only, no artifacts

## Machine Summary

```yaml
company: "Coinbase"
legal_name: "Coinbase Global, Inc."
role: "Product Manager II, DeFi Borrow"
url: "https://www.coinbase.com/careers/positions/8259870?gh_jid=8259870"
track: us
score: 2.1
legitimacy_tier: "High Confidence"
archetype: "Product Management / DeFi, Crypto Lending"
final_decision: "Discard (below 3.0)"
hard_stops: []
soft_gaps:
  - "No blockchain, smart-contract, DeFi-protocol (Morpho/Aave/Compound), or onchain-lending experience anywhere in cv.md - a hard domain gap for the role's core requirement"
  - "JD requires 5+ years shipping consumer/prosumer financial products including at least one lending/credit/collateralized product; cv.md has no lending or credit-product shipping history"
top_strengths:
  - "General quantitative product-decision discipline (SwipeHire: 3 subscription pricing tiers from competitor benchmarks and WTP signals; PriceKeel: forecast/pipeline/deal-approval systems) shows comfort with the funnel/cohort/risk-tradeoff analysis style the JD asks for, just not in crypto"
risk_level: "Medium"
confidence: "High"
next_action: "Digest line only; do not build. The gap is a hard domain requirement (DeFi/onchain protocols), not a stretch - do not pursue unless the candidate has undisclosed crypto experience"
work_auth: "silence"
discard_reasons: ["below_3.0_hard_domain_gap"]
via: null
company_confidential: false
advertised_comp: "$180,370-$212,200 USD (excluding equity and bonus)"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
track: us
visa_tier: "TIER-1"
visa_verdict: "TIER-1"
comp_estimate: "$180,370-$212,200 USD base (JD stated); median H1B salary $180,000 across 23 states (company-wide aggregate)"
comp_source: "JD (verbatim); data/visa-cache.tsv entry for Coinbase Global, Inc., decided 2026-09-22 (cached, reused, <90 days old)"
portfolio: "https://adhi-product.vercel.app/ref/coinbase"
verification: "jd_path on disk (jds/coinbase-product-manager-ii-defi-borrow.md), extracted via direct Greenhouse API fetch (coinbase.com itself returns a Cloudflare bot challenge); same gh_jid (8259870) as tonight's shortlist row, reached via a zapply wrapper URL and reused unchanged"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Product Management - DeFi / crypto-backed lending |
| Domain | Cryptocurrency exchange and consumer crypto products (Coinbase) |
| Function | Owns the DeFi Borrow product area end to end: crypto-backed loan flows, loan management, refinancing, liquidation monitoring; bridges Coinbase's centralized platform with onchain lending protocols |
| Seniority (JD) | 5+ years PM experience shipping consumer/prosumer financial products at scale, including at least one lending, credit, or collateralized product |
| Remote / work mode | Remote - USA |
| Team size | Not stated |
| Culture screen | Not configured - scored qualitatively at 3/5 default |
| TL;DR | A specialized DeFi/crypto-lending PM seat requiring onchain-protocol and lending-product experience that has no analog anywhere in the candidate's marketing/pricing/growth background. |

### Work-authorization check

Silence - no explicit sentence on visa sponsorship, citizenship, or clearance requirements in the JD body. Standard Coinbase E-Verify participation notice present in the boilerplate footer (tier-2 "no sponsorship stated, but E-Verify enrolled" signal per nightly-rules.md), though per `data/visa-cache.tsv` (decided 2026-09-22, reused - within 90 days) Coinbase Global, Inc. is independently cached **TIER-1** via strong LCA/I-129 filing evidence (154 LCAs FY2025, 149 I-129 filed, 147 approved, ~99%). No score adjustment.

## B) Match with CV

| JD requirement | cv.md evidence | Strength |
|---|---|---|
| 5+ years PM experience shipping consumer/prosumer financial products, including lending/credit/collateralized products | No lending, credit, or collateralized-product shipping history anywhere in cv.md | Gap |
| Familiarity with onchain concepts, smart contracts, DeFi lending protocols (Morpho, Aave, Compound) | No blockchain, smart-contract, or DeFi experience in cv.md | Gap |
| Quantitative analysis (funnels, cohort behavior, risk/return tradeoffs) to inform product decisions | SwipeHire: modeled 3 subscription pricing tiers from competitor benchmarks and willingness-to-pay signals, ran 8+ A/B tests; PriceKeel: forecast/pipeline reviews, deal-approval systems | Medium - the analytical discipline transfers, the financial-product domain does not |
| Partner with Risk, Compliance, Legal, Finance | PriceKeel: sells to RevOps, Sales leadership, Finance; builds Finance-auditable evidence | Medium - cross-functional partnership pattern is real, Risk/Compliance-specific context is not |
| Operational rigor (launch runbooks, on-call, incident playbooks) | No on-call or incident-response experience documented in cv.md | Gap |

**Gaps:** This is a hard domain-requirement gap, not a stretch: the role explicitly requires lending/credit-product shipping history and DeFi-protocol familiarity, neither of which exists in cv.md. The transferable analytical discipline (quantitative, funnel/cohort-based product decisions) is real but does not substitute for the stated must-haves. Never claim blockchain, DeFi, or lending-product experience that does not exist.

## C) Level and Strategy

**Level detected vs. natural level:** "PM II" with 5+ years roughly matches the candidate's seniority band numerically, but the role's required domain expertise (DeFi/lending) is categorically absent from the candidate's track record - this is a domain gap, not a leveling question.

**Sell senior without lying:** Not recommended at this score.

**If downleveled:** Not applicable - the gap is domain depth, not seniority.

## D) Comp and Demand

**Company type:** Large, established, well-evidenced H-1B sponsor (Coinbase Global, Inc.) - High reliability.

**Compensation reliability:** High - the JD gives a specific, stated base salary range with an explicit pay-transparency notice.

| Component | Figure | Source |
|---|---|---|
| Advertised (JD) | $180,370-$212,200 USD (excluding equity and bonus) | JD |
| Company-wide H1B salary anchor | median $180,000 across 23 states | data/visa-cache.tsv |
| Cross-check | Well above the candidate's US target range ($90K-130K, minimum $75K) | config/profile.yml |

**HR verification questions:** Not pursued given the below-3.0 score.

**Demand trend:** DeFi-adjacent lending products are a growth area for Coinbase's consumer platform; strong hiring signal, but that does not change the domain-fit gap for this candidate.

## E) Customization Plan

Not recommended given the score.

## F) Interview Plan

Not built given the below-3.0 score.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Updated 2026-10-06 per Greenhouse API metadata - reasonably current | Positive |
| Description quality | Specific product scope, named protocols, stated comp band, clear team/function | Positive |
| Company hiring signals | Large, well-evidenced, actively-filing H-1B sponsor | Positive |
| Employment classification | Full-time implied | Clear |
| Immigration-status overreach | None beyond the standard E-Verify participation notice | Not applicable |

**Context notes:** Legitimate, well-documented posting at an established employer; the discard reason here is fit (a hard domain gap), not legitimacy.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not applicable |

## Cover Letter Draft

Not generated - score below 3.0 threshold (digest line only).

## Extracted Keywords

Product Manager, DeFi Borrow, crypto-backed lending, onchain, smart contracts, Morpho, Aave, Compound, risk, liquidation, loan origination
