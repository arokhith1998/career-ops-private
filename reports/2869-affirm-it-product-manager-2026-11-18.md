# Evaluation: Affirm -- IT Product Manager

**Date:** 2026-11-18
**URL:** https://job-boards.greenhouse.io/affirm/jobs/8075412003
**Via:** -- (direct)
**Archetype:** Product Manager
**Score:** 1.5/5
**Legitimacy:** High Confidence
**Work Auth:** ⛔ No sponsorship (JD states "visa sponsorship is not available for this position")
**PDF:** N/A (digest_only band, no artifacts built per build_policy)
**Track:** us | **Profile:** `cv-variants/us-product-management.md` | **Portfolio:** https://adhi-product-ai.vercel.app/ref/affirm
**Band:** digest_only
**Verification:** jd_extracted via job-scraper (nightly discover); jds/affirm-it-product-manager.md

---

⛔ **No sponsorship:** JD states "visa sponsorship is not available for this position" and role is outside your authorized_in.

**Flag for the orchestrator:** this req carries a `BUILD` / `TIER-1` verdict in `data/gated.tsv`, and the JD-extraction file itself logged this exact sentence as a "HARD WALL FLAG... for Agent 3's visa gate; not acted on here" -- but the req still reached scoring as a req-level survivor rather than being routed to `data/skip-list.tsv` against this exact title while Affirm's employer-level cache entry stays SPONSOR. Applying the hard-wall rule now, at scoring: this is scored as a sponsorship hard stop regardless of the otherwise-fine fit, per nightly-rules.md Section 2 ("no sponsorship now or in the future" = skip) and the oferta.md work-authorization check (⛔ tier). Recommend the visa-gate step add this exact title to `data/skip-list.tsv` so it does not reach scoring again.

---

## Machine Summary
```yaml
company: "Affirm"
legal_name: "Affirm, Inc."
role: "IT Product Manager"
url: "https://job-boards.greenhouse.io/affirm/jobs/8075412003"
track: us
score: 1.5
band: digest_only
legitimacy_tier: "High Confidence"
archetype: "Product Manager"
final_decision: "Do not pursue (sponsorship hard wall)"
hard_stops:
  - "JD states verbatim: \"visa sponsorship is not available for this position\" -- a hard wall per nightly-rules.md Section 2, overriding the req's otherwise-fine content/comp fit"
soft_gaps:
  - "Role is internal workplace-IT product management (Slack/Notion/Google Workspace rollout), not the candidate's marketing/pricing/revops PM archetype -- a secondary, non-deciding gap"
top_strengths:
  - "Applied Materials: Claude-agent automation is directly relevant to the 'emerging AI tools' rollout scope"
  - "Plug Power: automated the Mar-Tech stack -- analogous to tool-lifecycle management"
next_action: "Do not pursue; flag the sponsorship wall upstream for data/skip-list.tsv"
work_auth: "no_sponsorship"
discard_reasons:
  - "Explicit JD statement: visa sponsorship is not available for this position"
via: null
company_confidential: false
advertised_comp: "CA/WA/NY/NJ/CT: $130,000-$180,000/yr base. All other US states: $115,000-$165,000/yr base"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Value |
|---|---|
| Archetype | Product Manager (internal workplace IT/tooling) |
| Domain | Internal IT: device/network/systems management, workplace-tool rollout |
| Function | Sets priorities for collaboration/productivity/AI tools, manages tech lifecycle |
| Seniority | 5+ years IT product/program management or workplace technology |
| Remote | Remote, US |
| Team size | Not stated |
| Culture screen | not evaluated |

⛔ **No sponsorship:** JD states "visa sponsorship is not available for this position" and role is outside your authorized_in.

**Work-authorization check:** ⛔ No sponsorship -- this is an explicit, verbatim hard wall. Scored as a hard stop regardless of the role's other merits.

## B) Match with CV

Not evaluated in depth given the hard sponsorship wall above; noted for completeness: the role's "emerging AI tools adoption" scope is adjacent to the Applied Materials Claude-automation bullet and the Plug Power Mar-Tech-stack rebuild, but this does not change the outcome.

**Gaps:** Hard blocker -- sponsorship is explicitly unavailable.

## C) Level and Strategy

Not applicable; the sponsorship wall is a hard stop that overrides level/strategy considerations.

## D) Comp and Demand

| Advertised (JD) | CA/WA/NY/NJ/CT: $130,000-$180,000/yr; other US states: $115,000-$165,000/yr | JD |
|---|---|---|

**Company type:** Public fintech (Affirm, BNPL). **Compensation reliability:** High -- explicit tiered base ranges by state. Not evaluated further given the hard stop.

## E) Customization Plan (condensed)

Not applicable -- do not pursue.

## F) Interview Plan (condensed)

Not applicable -- do not pursue.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Tagged "New," active Apply button | Positive |
| Description quality | Specific pay grade/equity grade, tiered comp bands, named tool examples (Slack, Notion, Google Workspace) | Positive |
| Legitimacy note | The sponsorship statement itself is a real, specific policy line -- consistent with a genuine, carefully written posting, not a red flag for legitimacy | Positive |

## Risk Summary

| Signal | Status |
|---|---|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |
