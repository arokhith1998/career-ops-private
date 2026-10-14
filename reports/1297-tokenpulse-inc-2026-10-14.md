# Evaluation: TokenPulse Inc. — Marketing Manager

**Date:** 2026-10-14
**URL:** https://www.linkedin.com/jobs/view/4479284435
**Via:** — (direct, as posted; employer corroboration could not be established — see Block G)
**Archetype:** Product / Strategic Marketing (primary), Growth / Performance Marketing (secondary)
**Score:** 2.4/5
**Legitimacy:** Suspicious
**Work Auth:** ⚠️ Unstated
**PDF:** not generated — score below the no_deck floor; digest_only band per `config/nightly.yml` build_policy
**Batch ID:** 1297

---

## Machine Summary

```yaml
company: "TokenPulse Inc."
role: "Marketing Manager"
score: 2.4
legitimacy_tier: "Suspicious"
archetype: "Product / Strategic Marketing"
final_decision: "Skip"
hard_stops: []
soft_gaps:
  - "No AI-compute/GPU-infrastructure vertical experience (closest adjacent: AI adtech platform GTM at Pixis, and Claude AI-agent automation at Applied Materials)"
  - "No salary figure stated at all ('competitive compensation package'), compounding the legitimacy concern rather than standing alone as a comp issue"
top_strengths:
  - "Applied Materials: translates complex technical (semiconductor) concepts into value-based pricing and forecasting narratives for non-technical stakeholders — direct match to 'translate complex AI infrastructure concepts into compelling stories'"
  - "Sensata GTM + Pixis: owned 0-to-1 GTM builds (new sensing products, $2M+ first-year revenue; AI adtech platform client portfolio) — matches 'build TokenPulse's US presence from 0 to 1'"
  - "PriceKeel/SwipeHire: demonstrated comfort executing hands-on in an early-stage, under-resourced environment"
risk_level: "High"
confidence: "Low"
next_action: "Do not invest further effort without first independently verifying the employer exists (request a company website, a named hiring manager's verifiable LinkedIn profile, and a business registration or funding announcement) before any application."
work_auth: "unstated"
discard_reasons:
  - "other (employer could not be independently corroborated via web search, LinkedIn company page, or Crunchbase; visa tier TIER-3 non-E-Verify-stated downgrade compounds the risk, not a standalone skip reason)"
via: null
company_confidential: false
advertised_comp: null
risk_summary:
  legitimacy: "suspicious"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "consistent"
```

## A) Role Summary

| Field | Finding |
|---|---|
| Archetype | Product / Strategic Marketing (primary); Growth / Performance Marketing (secondary — 0-to-1 US market-building) |
| Domain | AI compute/infrastructure (GPU compute, "AI Factory infrastructure," a "proprietary inference engine") |
| Function | Build (GTM strategy, product marketing, content, growth, 0-to-1 US presence) |
| Seniority | 3-5 years stated — within the candidate's band (~5 years) |
| Remote | San Francisco Bay Area; no explicit remote/hybrid/onsite designation beyond the location field |
| Team size | Not stated; "as an early US hire" implies a very small or nonexistent current US team |
| Culture screen | Not evaluated — no `culture_screen.require` block in `config/profile.yml`. Qualitative read is dominated by the legitimacy concern below rather than ordinary culture signals. |
| TL;DR | A role shape that would otherwise fit the candidate's archetype well, attached to an employer that could not be independently corroborated anywhere outside this one posting. |

**Geo-mismatch check:** Structured location field is "San Francisco Bay Area." JD body states no additional attendance requirement. No contradiction.

**Work-authorization check:** No sentence addresses visa sponsorship, work authorization, or citizenship. `config/profile.yml` has no structured `authorized_in`/`needs_sponsorship` keys; default applies: **⚠️ Unstated** (neutral on its own).

Per task instruction, applying the visa tier explicitly: TokenPulse is tagged **TIER-3 (BUILD, downgrade)** in the pre-computed visa cache — "no sponsorship stated, non-E-Verify" per the tier order in `modes/nightly-rules.md` section 2. Per that section's explicit rule, this tier **downgrades the score rather than skipping the row**, and that downgrade is reflected in the Global Score below (not treated as neutral, unlike the plain "Unstated" default elsewhere in this batch). This is independent of, and compounds, the Block G legitimacy concern — a TIER-3 visa signal and an unverifiable employer are two separate risk vectors pointing the same direction.

## B) Match with CV

| JD requirement | CV evidence |
|---|---|
| Translate complex technical (AI/infrastructure) concepts into marketing stories | Applied Materials: "Built competitive, value-based pricing for a fast-growing [semiconductor] market, forecasting its inflection points" — direct technical-to-business translation pattern, different vertical |
| GTM plans: audiences, messaging, channels, timelines | Sensata: "Owned GTM for new sensing products across North America and Europe (positioning, pricing, channel, launch)" |
| Product marketing content: collateral, website copy, case studies, sales enablement | Sensata: "Built sales enablement (decks, case studies) for 50+ reps, improving win rates 30%" |
| Growth & ecosystem: US localization, social, community, events, partnerships | Pixis: ran an 8-client AI adtech portfolio with partner/channel diversification strategy |
| Deep interest in AI, LLMs, infrastructure; execute hands-on in an early-stage environment | Applied Materials (Claude AI-agent automation, on every resume); PriceKeel and SwipeHire (both early-stage, hands-on founder/builder contexts) |
| 0-to-1 US market-building for an early US hire | SwipeHire (zero-to-one product and GTM build); Sensata new-product GTM ownership |
| AI-compute/GPU-infrastructure vertical specificity | **Real gap.** No direct exposure to compute/infrastructure-as-a-product marketing; closest adjacent is Pixis (an AI adtech *platform*, not infrastructure) and the Applied Materials semiconductor-market framing (hardware-adjacent, not AI-compute-specific). |

**Gaps:**
1. **AI-compute/infrastructure vertical.** Real but secondary to the legitimacy concern below. Adjacent: Pixis (AI platform GTM) and Applied Materials (hardware/semiconductor market framing) both transfer partially.
2. **Employer verifiability.** This is the dominant issue in this evaluation and is addressed fully in Block G rather than as a CV-match gap — no amount of resume tailoring changes it.

## C) Level and Strategy

Not developed in depth given the Suspicious legitimacy tier and digest_only band. If the employer is independently verified by the candidate (see Block G mitigation), the role itself (3-5 years, Marketing Manager, 0-to-1 US build) sits squarely in the candidate's natural Associate-Manager band with no seniority mismatch to manage.

## D) Comp and Demand

**Company type:** Early-stage startup / pre-revenue startup — but marked **Unknown** per the rule that an unverifiable employer defaults to the most conservative classification, since even "early-stage startup" cannot be confirmed from a single, uncorroborated posting.
**Compensation reliability:** Unknown — no advertised salary figure ("Competitive compensation package" only); skip component split, detailed market rows, and HR verification questions per the collapsed-format rule.

- **Company type:** Unknown — no independently verifiable company page, funding record, or business registration found.
- **Compensation reliability:** Unknown — no figure stated, and the company itself could not be corroborated, so even an estimated band would have no credible anchor.

**Demand/hiring signal:** A targeted search for "TokenPulse Inc." (AI compute platform, San Francisco) returned **no LinkedIn company page, no Crunchbase listing, and no independent press or directory mention of any kind** — the only hit remotely adjacent was a different, unrelated company ("San Francisco Compute," a GPU marketplace with a confirmed $40M Series A, different name, different founders, not the same entity). This is a hard, specific non-result, not a thin-data case — a GPU/AI-compute infrastructure company actively hiring in the Bay Area in 2026 that has zero public footprint is itself the central finding of this evaluation. Reposting check against `data/scan-history.tsv`: no prior sighting; a second, separate TokenPulse req ("Senior Product Marketing Manager") exists on disk in `jds/`, suggesting multiple open reqs from the same unverifiable source rather than a one-off anomaly.

## E) Customization Plan

**Not built out.** Given the Suspicious legitimacy tier, no resume/LinkedIn tailoring plan is produced. If the candidate independently verifies this employer is real (see Block G), request this plan explicitly.

## F) Interview Plan

**Not built out.** No interview-prep investment is recommended until the employer's existence is independently confirmed.

## G) Posting Legitimacy

**Assessment:** Suspicious

| Signal | Finding | Weight |
|---|---|---|
| Posting Freshness | Posted "4 hours ago" at fetch time — fresh, which on its own is a neutral-to-positive signal, but freshness does not substitute for verifiability | Neutral |
| Description Quality | Internally coherent and well-written (clear responsibilities, realistic qualifications, specific "0 to 1" framing) — the JD text itself reads like a real, competently drafted posting, which is exactly why this signal alone would not have caught the issue | Mixed |
| Company Hiring Signals | **No LinkedIn company page, no Crunchbase listing, no press coverage, no directory entry of any kind found for "TokenPulse Inc." in a targeted search.** This is the dominant finding of this evaluation. | Concerning |
| Reposting Detection | No match in `data/scan-history.tsv`, but a second TokenPulse req ("Senior Product Marketing Manager") exists in this pipeline's own `jds/` folder — the same unverifiable employer has more than one open posting in circulation | Concerning |
| Role Market Context | A credible AI-infrastructure startup hiring its first US marketing hire is a completely plausible scenario in the abstract — the concern here is not that the role shape is implausible, but that the specific named employer cannot be found anywhere independent of this one LinkedIn posting | Mixed |

**Employment classification signal:** Not present — no contractor-status language in the JD text itself (this is a separate concern from the employer-verifiability issue).

**AI-buzzword vs. infrastructure mismatch:** Not flagged under the normal rubric — TokenPulse presents itself as an AI-infrastructure company, not a legacy company bolting AI onto an unready foundation, so the standard signal (buzzword language over un-AI-ready infrastructure) does not apply here. The relevant concern is the employer's basic existence, not a buzzword/infrastructure mismatch, and is captured fully above instead.

**Benefits/terminology country mismatch:** Not present — US (Bay Area) posting, no non-US benefits terms.

**Third-party platform location mismatch:** Not evaluated — only the LinkedIn posting was available; no employer-page mirror to compare against (notably, no employer page could be found at all).

**Agency licensing / immigration-status overreach / jurisdiction-prohibited content:** Not applicable — posting presents as a direct employer, not an agency; no status-demand or salary-history language present.

**Context note — why this is Suspicious rather than Proceed with Caution:** Per the ethical framing rule, this is presented as an observation, not an accusation — there are legitimate explanations for a very new, pre-launch, or deliberately low-profile AI-infrastructure startup to have no public footprint yet (stealth mode, very recent incorporation, a name change in progress). But the combination of (a) zero independent corroboration of the company's existence under this exact name, (b) a second, separate open req from the same unverifiable source, and (c) no salary figure and a TIER-3 non-E-Verify-stated visa signal, together cross the threshold from "mixed signals" to "multiple ghost-job-adjacent indicators, investigate before investing time" — the defining language of the Suspicious tier. This is not a claim that the posting is fraudulent; it is a recommendation that the candidate independently verify the employer's existence (company website, named hiring manager's own LinkedIn profile, a funding announcement, or a business registration lookup) before spending any further effort.

**Prior-contact FYI:** `node company-history.mjs --company "TokenPulse Inc."` returns `no-history` — no note required.

## Risk Summary

| Signal | Status |
|---|---|
| Posting legitimacy | ⚠️ Suspicious — "TokenPulse Inc." could not be independently corroborated anywhere (no LinkedIn company page, no Crunchbase, no press); verify the employer's existence before applying |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | ✅ consistent |

## Cover Letter Draft

**Not generated.** Score (2.4/5) falls in the digest_only band, and the Suspicious legitimacy tier means the Ethical Use rule's "recommend against applying" standard applies with extra force here — the primary blocker is not a CV-fit gap but an unverifiable employer. Per the Ethical Use rule, a cover letter draft is not produced. If the candidate independently confirms TokenPulse Inc. is a real, legitimate employer (company website, verifiable team, funding record, or registration), request a cover-letter draft explicitly via `/career-ops cover tokenpulse-inc-marketing-manager`.

**Gaps flagged:**
The posting's central issue is not a skills gap — it is that the named employer could not be found anywhere outside this one LinkedIn listing, compounded by a TIER-3 (non-E-Verify-stated) visa signal and no stated compensation. Verify the employer independently before any further investment.

**JD keywords to mirror** *(extracted for ATS + human read — not recommended for use before employer verification)*
AI compute platform, GPU compute, AI Factory infrastructure, inference engine, GTM strategy, product marketing, 0 to 1, developer ecosystem, co-marketing, AI infrastructure trends

---

## Keywords extracted

AI compute platform, GPU compute, AI Factory infrastructure, proprietary inference engine, GTM strategy, product marketing, developer ecosystem, co-marketing, growth campaigns, US localization, sales enablement content, 0 to 1 market presence, AI economy, early-stage environment
