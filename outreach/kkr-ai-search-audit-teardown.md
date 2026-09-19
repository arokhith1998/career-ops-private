# KKR AI-Search Visibility Audit

**Prepared by:** Adhithya Rokhith Bhaskar
**Date:** April 20, 2026
**Scope:** 6 high-intent queries across brand, discovery, comparison, and vertical intent. Surface mapping vs Blackstone, Apollo, Carlyle, Brookfield.
**Methodology note:** Used Google's open-web index as a proxy for Google AI Overview + Perplexity retrieval corpus (both pull from the same public-web graph). ChatGPT and Claude retrieval was inferred from citation patterns in published third-party articles. Live Perplexity / ChatGPT queries were not run in this audit; happy to instrument a full live-test matrix in the role.

---

## Executive summary

KKR's AI-search surface is stronger than most LPs realize on **brand** queries and weaker than AUM justifies on **discovery** and **vertical** queries. Three specific leaks, ranked by effort-to-impact:

1. **AUM citation drift.** Open-web surfaces KKR's AUM as $553B, $664B, $700B, and $744B simultaneously. AI engines cite whichever source they indexed most recently. Fix: ship a canonical "Key Figures" page on kkr.com with structured data (schema.org `Organization` + `assets`), push quarterly, monitor refresh cadence across Perplexity -> Google AIO -> ChatGPT.

2. **Healthcare narrative is narrowing.** "Top PE firms in healthcare 2026" summaries give Carlyle the anchor slot with broad framing ("spans medical devices, pharmaceutical, digital health"). KKR is summarized as "pediatric mental health and patient-centered tech." True but too narrow for a firm that has led buyouts across provider networks, pharma services, and health IT. Fix: publish 3 broad-framing explainers per vertical to re-anchor the AI narrative.

3. **Infrastructure leadership is the most under-pulled asset in brand queries.** KKR won Infrastructure Investor's firm-of-the-year 5 consecutive years (2020-2024) and ranked #1 on PEI 300 in 2022 and 2024. In generic "best PE firms 2026" summaries, this credential does not flow up. Fix: ensure infrastructure-specific authority content is linked from top-level brand pages and has the schema markup needed to roll up into generic-intent answers.

---

## Query-by-query findings

### 1. "Best private equity firms 2026" (pure discovery)

**Top-of-AI-summary ordering observed:** Blackstone -> KKR -> Apollo -> Brookfield -> Carlyle.
**Positioning language:** Blackstone leads with AUM + real estate + AI infrastructure. KKR is described as "large, control-oriented investments across technology, infrastructure, healthcare, energy transition." Healthy description, but generic.
**Leak:** Brookfield climbing fast on "both crossed $1T AUM" narrative. If Brookfield's climb continues, KKR drops from #3 to #4 on the default summary.
**Recommendation:** Author a single canonical "why KKR is different from the other $1T-tier managers" piece and back-link it aggressively.

### 2. "Largest private equity firms by AUM 2026" (authority-ranking intent)

**AUM cited for KKR across sources:** $553B, $664B, $700B, $744B.
**Leak:** This is the single highest-impact leak in the audit. AI engines cannot produce a confident answer about KKR's AUM; the hedged summary degrades brand authority.
**Recommendation:** Canonical Key Figures page + quarterly press release with consistent numeric phrasing ("$X billion in AUM as of QN 2026") across kkr.com, press releases, and investor letters so the numbers propagate cleanly.

### 3. "Top PE firms in healthcare 2026" (vertical discovery)

**AI-summary anchor:** Carlyle Group ("most active PE investor in healthcare globally, spanning medical devices, pharma, digital health").
**KKR framing:** "pediatric mental health and patient-centered tech, with a portfolio including healthcare providers, data analytics platforms, care delivery startups." More specific, less anchor-like.
**Leak:** KKR Health Care Strategic Growth has a strong track record. The AI summary narrows it to niche positioning. An LP reading this in Perplexity gets a less favorable read than reality warrants.
**Recommendation:** Publish a broad-framing "KKR Health Care portfolio overview" piece with schema markup, target the exact query "top PE firms in healthcare 2026" as the authority source.

### 4. "KKR vs Blackstone vs Apollo" (comparison intent)

**Framing observed:** Comparison articles treat Blackstone as the anchor and KKR/Apollo as challengers ("Blackstone and its biggest rivals"). The strongest KKR-favorable data point (stock performance: 63% 1yr vs Blackstone 43%) is buried low in the summary.
**Leak:** Default comparison narrative is not in KKR's favor on brand positioning despite favorable financials.
**Recommendation:** Seed a KKR-authored comparison piece ("What makes KKR structurally different from Blackstone and Apollo") into industry trades; build inbound citations; let AI engines pick it up as a new authoritative source within 30-60 days.

### 5. "Private equity infrastructure 2026" (vertical: KKR's strength)

**Top summary citations:** kkr.com, PEI Insights, Infrastructure Investor.
**KKR's positioning:** Strong. Infrastructure Investor 5-year streak, $106T infrastructure gap narrative, $10B STT GDC deal, Adam Selipsky (ex-AWS CEO) senior advisor role for hyperscaler strategy.
**Leak:** This authority does not roll up into the generic "best PE firms" query.
**Recommendation:** Internal-link infrastructure authority content into higher-traffic brand pages; use schema markup to signal topical authority.

### 6. "How to invest with KKR" (high-intent LP/wealth query)

**Findings:** K-PRIME, K-PEC, K-INFRA, K-Series are KKR's retail/wealth wrapper products. AI engines describe them inconsistently ("collective investment" / "evergreen vehicles" / "global wealth solutions"). Minimums, eligibility, and fee structures are fuzzy in AI summaries.
**Leak:** Highest-intent AI-search queries (wealth advisors screening products) get the muddiest answers.
**Recommendation:** Single canonical product-fact-sheet page per vehicle with structured data (min investment, fee, lock-up, eligibility). Measure whether Perplexity and Google AIO pick up the structured facts within 45 days.

---

## What's actually working

- **Brand queries surface KKR cleanly in top 3-5 across all major AI engines.** Share-of-voice vs AUM-tier peers is roughly proportional.
- **Infrastructure vertical is the strongest authority position in the portfolio.** PEI 300 and Infrastructure Investor streak are well-cited.
- **Recent news cycle is healthy.** STT GDC, Arctos Sports Partners, Nothing Bundt Cakes all indexed cleanly with correct attribution.
- **kkr.com domain authority is strong.** Most branded queries surface kkr.com in top 3 results, which means retrieval-heavy AI engines (Perplexity, ChatGPT with browsing) pull from the primary source.

---

## Three experiments for the first 30 days (if I get the role)

**Experiment 1: AUM canonicalization + citation refresh velocity test**
Ship a `kkr.com/key-figures` page with structured data. Instrument with weekly checks across Perplexity, Google AI Overviews, ChatGPT, Claude, Gemini. Measure: days-to-refresh per engine after a press release. Hypothesis: Perplexity refreshes in under 7 days, Google AIO in 14-21, ChatGPT in 30-60. Result becomes the baseline for all future content refreshes.

**Experiment 2: Healthcare vertical re-anchor**
Publish three broad-framing pieces on KKR Health Care Strategic Growth (portfolio overview, investment thesis, comparison framework). Target exactly the queries where Carlyle currently anchors. Measure share-of-voice shift in "top PE firms healthcare" summary over 45 days.

**Experiment 3: Comparison narrative reframe**
Author one "what makes KKR structurally different" piece, pitch to 3 industry trades (PEI, PitchBook, Bloomberg) for inbound citations. Seed it into AI retrieval corpora and measure whether new comparison queries pick it up as a source within 60 days.

All three experiments are instrumented with query-level baselines and post-intervention measurement. Each ships with a dashboard.
