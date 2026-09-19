# Adhithya — Profile & CV Tailoring Rules

Owner: **Adhithya Rokhith Bhaskar** — arokhith@gmail.com — +1-929-563-9974
Header city: **San Francisco Bay Area, CA** on every resume, both tracks
LinkedIn: https://www.linkedin.com/in/adhithyarokhith/
Portfolio: routed per JD across 6 sites, see `modes/nightly-rules.md` section 6

## Visa
- Currently on **STEM OPT (F-1)**. Work-authorized in the US.
- Will require **H-1B sponsorship** in the future. **Deal-breaker: roles that explicitly say "no sponsorship now or in future."**

## Target Roles: two tracks (updated 2026-09-18)

| Track | Geography | Roles | Level |
|---|---|---|---|
| **US** | San Francisco Bay Area + Remote-US | Marketing (product / strategic / growth), Pricing & Monetization, RevOps, Product Management, Market Strategy / Competitive Intelligence | Mid-level; drop reqs asking 7+ yrs |
| **India** | Any Indian metro or remote | **Chief of Staff**, **Head of Growth**, **Founder's Office**, **CEO / CXO Office**, **Entrepreneur in Residence** | Head-of / CoS in band; drop VP, trainee and 9+ yrs; public salary check, floor 35 LPA |

A US-track title in India, or an India-track title in the US, is off target.
Config: `config/profile.yml -> tracks`, `config/nightly.yml -> tracks`.
Industries: revenue / GTM / pricing software, AI-native and enterprise SaaS, semiconductors and industrial tech, fintech, consumer internet / D2C; India: venture-backed startups.

## Current roles and dates (source of truth: cv.md)
- **Founder & CEO, PriceKeel** (May 2026 - Present). Top of Experience for startup, AI-native, revenue-tooling, PMM, pricing and builder-culture roles. No traction metrics exist; never invent any.
- **Strategic Marketing III, Applied Materials** (Jun 2026 - Present). Title always exactly "Strategic Marketing III". **The Claude AI-agent automation bullet goes on every resume.** Facts in cv.md (market sizing with Sales/Engineering/Accounts, value-based pricing and inflection-point forecasting, forecasting models across product groups, Claude AI-agent automation, P&L and revenue targets). No metrics.
- **Sensata ended end of May 2026.** Two titles, shown as a promotion: **Pricing Lead** (Jul 2025 - May 2026) and **Product & Growth Marketing** (Sep 2024 - Jun 2025).

## Section Structure (all variants)

Standard section order: **Summary → Skills → Experience → Projects → Education → Certifications**.

- **SwipeHire lives under `Projects`, never under `Experience`.** It's a project, not a job.
- **SwipeHire heading must be just `SwipeHire` — no dates, no "Founder —", no role title.**
- **The entire Projects section is JD-gated.** If no projects (including SwipeHire) are relevant to the JD, omit the Projects section entirely. Do not include irrelevant projects just to have a section.
- **Education format (hard):** follow exactly this layout, matching the user's reference:
  - Line 1: **Degree name** (bold). NO graduation date / year.
  - Line 2: *School name* (italic)
  - Line 3+: ***Relevant Coursework:*** / ***Teaching Assistant:*** / ***Project Manager:*** — each a separate italic line with a bold label.
  - Do not merge these into a single line.
  - Never include graduation year for either degree (MS Marketing Analytics, Simon; BE Mechanical Engineering, BITS).

## CV Variants (pick automatically per JD)

The master CV and bullet bank is `cv.md`. **Role profiles** live in `cv-variants/` (see `cv-variants/README.md` for routing): one per role family per region.

| Track | Profile | Use when the JD is about ... |
|---|---|---|
| US | `cv-variants/us-product-marketing.md` | Product / strategic marketing, GTM, positioning, launches, enablement |
| US | `cv-variants/us-pricing.md` | Pricing, monetization, deal desk, revenue management, margin |
| US | `cv-variants/us-revops.md` | RevOps, sales/GTM ops, CRM/CPQ, forecasting, pipeline |
| US | `cv-variants/us-product-management.md` | Product manager, growth PM, roadmap, discovery |
| US | `cv-variants/us-market-strategy.md` | Market strategy, market/competitive intelligence, research, sizing |
| US | `cv-variants/us-growth.md` | Growth / performance / demand gen (secondary) |
| India | `cv-variants/india-chief-of-staff.md` | Chief of Staff, founder office |
| India | `cv-variants/india-head-of-growth.md` | Head of Growth |

**Selection rule:** decide the track from the location, then pick the profile that best matches the JD title and top responsibilities, and follow its summary, skills order and experience plan. **Never copy a profile or variant over `cv.md`**: facts, titles and dates always come from `cv.md`. Blended JDs start from the dominant profile. **PriceKeel** leads Experience only on pricing roles (and RevOps roles that are deal desk / CPQ) and on India-track roles; elsewhere it is omitted. The old April 2026 variants are archived in `cv-variants/archive-2026-04/`.

## Tailoring / "Manufacturing" Bullets per JD

Allowed: rewrite, reorder, and add bullets under the **Sensata (full-time)**, **Sensata (intern)**, **Plug Power**, **Pixis**, **GenY Medium**, or **SwipeHire** sections to match JD keywords, as long as every bullet is a plausible, truthful reframing of work Adhithya actually did (see `resumes_txt/` for source material).

**Sensata Intern (Jul 2024 – Aug 2024) is a MANDATORY entry in all resumes.** It sits under the Sensata full-time titles and above Plug Power, with the title "Product Marketing Intern — Sensata Technologies". It always has at least 1 bullet (competitive/distributor analysis). The pipeline may add 1 more JD-relevant bullet if space allows, but never remove this entry.

Rules:

1. **Never invent employers, titles, dates, degrees, certifications, or tools he has not used.**
2. Keep **all hard metrics grounded in the real numbers** from `resumes_txt/Adhithya resume (5).txt` (e.g., -25% CPA, 3x ROAS, 16x ROAS, $2M+, 50K+ devices, 100+ features, 8-person team, $15K-$90K per-client monthly budgets at Pixis, 30+ interviews, +35% leads, 12% YoY, 8% market share). Never fabricate a new hard number. You MAY write qualitative bullets without a metric when needed to cover a JD skill.
3. Mirror **verbs and keywords** from the JD (e.g., "bid strategy," "attribution," "lookalikes," "incrementality," "CRO," "A/B testing," "funnel," "retention," "positioning," "roadmap," "cross-functional").
4. **Fill the page to exactly 1 full page (85–95% fill).** The PDF must not look sparse. Use this priority sequence to fill:
   - **First:** generate additional experience bullet points autonomously to cover every major JD skill/responsibility (rules 1–3). Prefer 5–6 bullets for Sensata, 4–5 for Plug Power and Pixis, 2 for GenY.
   - **Second:** if experience still doesn't fill the page, pull in the **closest-matching projects** from the Conditional GitHub Projects pool (see below). Pick 1–2 projects that best match the JD, add a Projects section, and give each 1–2 bullets.
   - **Third:** if still short, expand Education sub-lines or add a 1-line Summary extension.
   - **Overflow:** if content exceeds 1 page, drop in reverse order: GitHub projects first → then least-relevant experience bullets → then trim Summary to 2 lines → collapse Certs to 1 line.
5. **Each bullet must show clear ownership and specificity.** Format: **Owned/Led/Built [what exactly] + [how many/how much] + [method/tool] + [metric].** Never write vague bullets like "Managed multiple workstreams" — say "Owned 4 concurrent product launch workstreams across NA and EU." Use "Owned", "Led", "Built", "Drove" for things Adhithya directly controlled; use "Contributed to", "Partnered on" for shared work. Vary verbs across bullets.
6. **Summary must be exactly 2 punchy sentences.** Sentence 1: who you are + years + headline skill + top result. Sentence 2: key tools/methods + what you're looking for. No padding, no skills-list-as-prose. If the current summary is longer, cut it to 2 sentences.
7. Preserve chronology. Never pad with irrelevant filler — every line must earn its place by matching a JD requirement.

### Variant-specific overrides

- **`us-growth.md` (Growth / Performance / SEM / SEO / Paid / Content / Social / Digital Marketing Analytics / Product Analytics):**
  - **Plug Power, Pixis, and GenY Medium are the primary sections for this variant.** These are where Adhithya's digital marketing work actually happened — expand these aggressively to cover every JD requirement. Prefer 4–5 bullets for Plug Power, 4–5 for Pixis, and 2–3 for GenY. Autonomously generate new bullets to fill gaps in the JD as long as they are plausible reframings of actual work (see `resumes_txt/` for source material).
  - **Sensata is secondary for growth roles.** Keep Sensata to 3–4 bullets max, focused on: KPI frameworks, SQL + GA4 analytics on 50K+ devices, measurement strategy, customer research (30+ interviews), cross-functional reporting, GTM launches. Sensata provides the "strategy + analytics" credibility, but Plug Power/Pixis/GenY carry the digital marketing weight.
  - **Do NOT mention "Pricing Lead", "Pricing Analytics Lead", "global pricing strategy", "price elasticity", "margin optimization", "AP26 revenue models", "revenue scenarios", or any pricing-strategy framing ANYWHERE — not in Sensata title, not in bullets, not in Summary, not in Skills.** It confuses the growth/analytics narrative.
  - Sensata title must be **"Growth & Product Marketing — Sensata Technologies"** or **"Product Analytics & Marketing — Sensata Technologies"** (pick whichever fits the JD better). Never include "Pricing" in the Sensata title for this variant.
  - **Sensata bullets must NOT describe paid campaigns, paid media, Paid Search, Paid Social, programmatic display, bid strategy, ad spend, or ad creatives.** Paid-media bullets belong ONLY under Plug Power, Pixis, and GenY Medium — never Sensata.
  - The Summary and Skills may lead with SQL, Python, Power BI, Tableau, GA4, A/B testing, experimentation, measurement strategy, KPI design, attribution, and CRO — adapt to the JD's language.
  - When the JD is in a specific vertical (e.g., e-commerce, D2C, SaaS, pharma, energy, logistics), lean the Pixis and GenY bullets into that vertical.

- **`us-pricing.md` ONLY:** use pricing framing freely (Pricing Lead title, price elasticity, margin optimization, etc.). **Sensata is the primary section** — expand aggressively with pricing strategy, competitive benchmarking, deal-desk, value-based pricing bullets.
- **`us-product-marketing.md`:** may mention pricing as a secondary skill where truthful but never lead with it in the title or Summary. **Sensata is the primary section** — expand with GTM, positioning, competitive intel, sales enablement.
- **`us-product-management.md`:** may mention pricing as secondary. **Sensata is the primary section** — expand with roadmapping, backlog management, user research, product lifecycle.

## Conditional GitHub Projects (JD-gated)

All projects — including SwipeHire — are **JD-gated**. Only add them if the JD mentions matching skills/keywords. If no projects are relevant, **omit the Projects section entirely**. If multiple match, include at most 2–3 (pick the most JD-relevant). Each project gets 1–2 bullets max.

| Project | Bullet(s) | Add only if JD mentions … |
|---|---|---|
| **SwipeHire** | - Built an **AI job-matching platform** (Python, OpenAI API, React) from zero-to-one: auto-tailors resumes to JDs and matches visa-aware roles; onboarded 50+ early users and iterated based on weekly retention cohorts. - Owned **full GTM + analytics stack** (GA4, GTM, event tracking, Mixpanel-style funnel dashboards); ran 8+ A/B tests on landing pages and registration flows, improving activation rate 25%. | AI, product, MVP, startup, growth, acquisition, CAC, funnel, GA4, GTM, landing pages, CRO, job platform, marketplace, A/B testing, experimentation, user research, onboarding, activation, retention, cohort analysis, product management, roadmap, backlog, competitive analysis, positioning, messaging, value proposition, SaaS, attribution, event tracking, product analytics, user acquisition, Agile |
| **B2B Lead Generation — LinkedIn Ads & Paid Search** | - Built a B2B lead-generation playbook combining **LinkedIn Ads and Paid Search**: designed audience layers (job title, seniority, industry), keyword + competitor-conquest targeting, and CRM lead-scoring handoffs to convert ads into SQLs. | B2B, lead generation, LinkedIn Ads, Paid Search, SEM, demand gen, MQL, SQL, pipeline, B2B SaaS, account-based marketing, ABM |
| **D2C Fashion Brand — 300% ROI via Paid Search Restructure** | - Restructured a **D2C fashion brand's Paid Search and Shopping** stack: SKAG breakdown, Shopping feed audit, smart-bidding rollout, and creative refresh — delivering **3x ROI** lift in one month. | D2C, direct-to-consumer, e-commerce, fashion, Paid Search, Google Shopping, Performance Max, smart bidding, ROAS, ROI, SEM, Shopping feed, retail |
| **Early-Stage Paid Growth at Pixis (AI Adtech Platform)** | - Documented an early-stage paid growth playbook for an **AI adtech platform**: acquisition-channel mix, CAC benchmarks, creative-testing cadence, and product-market-fit metrics for a B2B SaaS launch. | AI, adtech, SaaS, startup, early-stage, paid growth, CAC, LTV, acquisition, creative testing, growth marketing, B2B SaaS |
| **Enterprise SEO Gap Analysis & Execution Strategy** | - Ran an **enterprise SEO gap analysis**: technical audit (crawl, Core Web Vitals, schema), content-cluster mapping, and competitor keyword benchmarking; delivered a prioritized execution roadmap for in-house SEO ownership. | SEO, organic search, technical SEO, on-page SEO, content strategy, keyword research, enterprise, SERP, search engine optimization, content marketing |
| **Market Sizing & GTM Analysis — Safran (Simon Consulting)** | - Led a **5-consultant pro-bono engagement** for Safran: built **TAM/SAM/SOM** framework, evaluated GTM entry options, and recommended pricing and partnership structures for a new product line. | market sizing, GTM, consulting, strategy, TAM SAM SOM, pricing, B2B strategy, aerospace, industrial, market entry, business development |
| **Bleeders & Leakers — FY2026 Margin Recovery Dashboard** | - Built a **4-page Power BI executive dashboard** analyzing 1,200 pricing opportunities ($627M target) across 3 regions, 4 product families, and 20 product lines; tracked bleeders (margin erosion) vs. leakers (price leakage) with real-time pipeline funnel, regional scorecards, and top-opportunity focus lists. - Designed **KPI frameworks** (% to target, win rate, avg $/win, pipeline stage distribution) and regional deep-dives enabling leadership to identify $433M in margin gaps and prioritize recovery actions by salesperson and product line. | Power BI, dashboard, data visualization, pricing, margin analysis, KPI, executive reporting, business intelligence, BI, analytics, revenue management, pipeline analysis, data storytelling, Tableau (similar BI), reporting |
| **NSE Paper-Trading Bot** | - Built a **Python-based stock scanner** using live NSE data (nsepython, yfinance) with rule-based technical scoring (EMA, RSI, ATR) and an interactive web dashboard for paper-trade validation. - Integrated **AI-enhanced reasoning layer** (Claude API) for news/catalyst analysis alongside automated capital-constraint filtering. | Python, data engineering, automation, financial data, analytics dashboard, APIs, scripting, data pipelines, quantitative, AI, LLM, generative AI, Claude, real-time data, web dashboard, decision support, algorithmic, visualization, interactive |
| **Optimal Pricing Prediction Model** | - Developed **R-based pricing optimization models** using linear regression to forecast demand elasticity and identify profit-maximizing price points across product feature scenarios. | Pricing, price optimization, pricing analytics, R, regression, demand forecasting, statistical modeling, pricing strategy, econometrics, price elasticity, optimization, data science, quantitative analysis, forecasting, predictive analytics, revenue, profit optimization |
| **Cost of Living Analysis — USA** | - Analyzed **cost-of-living data** across US markets using Python (pandas, NumPy, Matplotlib), comparing housing, transportation, and utility costs with state-level benchmarking and visualization. | Data analysis, Python, data visualization, market research, consumer insights, pandas, Matplotlib, analytics, research, benchmarking, geographic analysis, reporting, dashboard, comparative analysis, insights, Excel |
| **Credit Card Application Prediction Models** | - Built **predictive models in R** using 10-fold cross-validation and exhaustive feature selection to evaluate credit card approval drivers, comparing interaction-based vs. baseline regression approaches. | Predictive modeling, R, machine learning, classification, cross-validation, statistical modeling, data science, credit risk, analytics, data analysis, feature engineering, logistic regression, predictive analytics, risk analysis, model evaluation |
| **Employee Analysis (SQL)** | - Designed and executed **SQL queries** for workforce analytics, extracting headcount, attrition, and performance insights from employee datasets. | SQL, workforce analytics, database, HR analytics, people analytics, data management, data analysis, reporting, KPI, metrics, business intelligence, BI, dashboards, performance analytics |
| **R Analysis & Chatbot for Learning Center** | - Performed **statistical analysis in R** and built an intelligent chatbot for an educational platform, combining data insights with automated user interaction. | R, chatbot, NLP, education, statistical analysis, conversational AI, AI, automation, machine learning, customer engagement, interactive |
| **Safran GTM Market Expansion (Consulting)** | - Led a **5-person consulting team** on a pro-bono project for Safran; conducted TAM/SAM market sizing (170 facilities → SAM of 28), developed customer personas across 4 verticals (aerospace, defense, healthcare, scientific research), and built positioning statements for 3 B2B product lines. - Analyzed **150+ target facilities** and **10+ competitors**; built SAM model (TAM x segment % x win rate) and presented GTM market expansion strategy and competitive benchmarking to Safran leadership. | market sizing, TAM, SAM, market research, customer persona, competitive analysis, positioning, GTM, go-to-market, consulting, strategy, B2B, market expansion, market assessment, opportunity assessment, stakeholder presentation, business case, market opportunity, defense, aerospace, healthcare, enterprise, market segmentation, SWOT, market entry, total addressable market, serviceable addressable market |

**Rules:**
1. Never add a project if it doesn't match the JD — irrelevant projects dilute the resume.
2. If no projects match, **remove the Projects section heading entirely** from the final CV.
3. Project name is the heading (no dates, no role title).
4. Link to the GitHub repo only if the JD explicitly values open-source or portfolio links; otherwise plain text.
5. **Safran duplication:** if the **Market Sizing & GTM — Safran** project is added to Projects, shorten the Education's Safran line to just `Project Manager: 5-consultant Pro-Bono Consulting Project (Simon).` so the Safran details appear in only one section, not both.
6. **Max 2–3 projects** in the Projects section. Rank by JD-keyword match density and pick the top matches.
5. **SwipeHire has NO special priority.** Treat it exactly like any other conditional project — only include it if its trigger keywords match the JD better than alternatives. Rank all projects by trigger keyword match count against the JD, not by defaulting to SwipeHire.
6. **Include as many relevant projects as page space allows.** No fixed cap — if 3 or 4 projects match the JD and the page isn't full, add them all (1 bullet each). If space is tight, keep the top 2 by match strength. The goal is to fill the page with JD-relevant content, and projects are a great way to do that after experience bullets are set.

## Conditional Certifications (JD-gated)

These certifications are real but only add them to the final CV **if the JD mentions the relevant keywords**. Do not include them by default. Insert them at the front of the Certifications line when triggered.

| Certification | Add only if JD mentions … |
|---|---|
| **Amazon Retail Ads Advanced Certification** | Amazon, Amazon Ads, Amazon Advertising, Retail Media, AMC, DSP, e-commerce marketplaces, Sponsored Display, ecommerce retail media |
| **Amazon Sponsored Ads Advanced Certification** | Amazon, Sponsored Products, Sponsored Brands, Sponsored Display, Amazon Ads, Amazon Advertising, retail media, marketplace ads |
| **Salesforce Pardot Certification** | Pardot, Marketing Cloud Account Engagement, Salesforce Marketing Cloud, B2B marketing automation, lead nurturing on Salesforce, MCAE |
| **Claude 101 Certification** | Claude, Anthropic, AI tools, LLM, generative AI, AI-first, AI-powered |
| **Claude Code 101 Certification** | Claude, Cursor, Claude Code, AI coding, AI tools, developer tools, AI-powered development |
| **Claude Cowork Certification** | Claude, AI collaboration, AI tools, AI-first, AI-powered workflows |
| **Building with Claude API Certification** | Claude API, Anthropic API, AI integration, LLM API, AI tools, building with AI, AI-powered products |

**Shorthand rule:** If the JD mentions Claude, Anthropic, AI tools, LLM, or generative AI, add ALL FOUR Claude certifications as a single grouped entry: `Claude Certifications (Claude 101, Claude Code 101, Claude Cowork, Building with Claude API)`. This is more compact than listing 4 separate certs.

If none of the trigger keywords appear in the JD, leave these certifications off the final CV. Multiple may be added together if the JD mentions multiple triggers (e.g., an Amazon retail-media role gets both Amazon certs).

## Freshness Filter (MANDATORY on every scan)

On every `/career-ops scan`, `/career-ops batch`, and any portal fetch, **only return job postings posted within the last 7 days**. Config lives in `config/profile.yml` under `freshness_policy` (`max_age_days: 7`).

**Procedure:**
1. For each role discovered via Greenhouse API / Lever / Ashby / Workable / web search, extract the `posted_date` / `updated_at` / `first_published` field from the portal response (Greenhouse exposes `updated_at`; Lever exposes `createdAt`; Ashby exposes `publishedDate`).
2. Compute `age_days = today - posted_date`.
3. If `age_days > 7`, **drop the role.** Do not evaluate, do not add to tracker. Log dropped roles with their age in `reports/stale-<YYYY-MM-DD>.md`.
4. If `posted_date` is missing or cannot be parsed (common for WebSearch results and some careers pages), follow `freshness_policy.unknown_date_action`:
   - Default = `keep_and_flag`: keep the role but tag it `DATE UNKNOWN` in the tracker / scan output so the user can decide manually.
5. Add a `Posted` column (e.g., `2d ago`, `6d ago`, `DATE UNKNOWN`) to every scan results table, right after the `H-1B` column.
6. Sort scan results by: `h1b_status` (SPONSORS → LIKELY → UNKNOWN) → `posted_date` (newest first) → fit score.
7. Apply the freshness filter **before** the H-1B check to save fetches on stale roles.

For a single-JD pipeline run (user pastes one URL), skip the freshness filter — if the user is explicitly asking about that role, generate the CV regardless of age, but still note `Posted: <N>d ago` in the evaluation report.

## H-1B Sponsorship Check (MANDATORY on every run)

**US track only.** India-track roles (Chief of Staff, Head of Growth in India) skip this check entirely. Adhithya is on STEM OPT and will need H-1B sponsorship. Every US-track `/career-ops scan`, `/career-ops batch`, and every individual JD passed through the pipeline MUST run the H-1B check below before evaluation or CV generation. This is not optional. Config lives at `config/profile.yml` under `h1b_policy`.

**Procedure (per role):**
1. Fetch the JD page. Search the full text (including any "Legal / Eligibility / Requirements" section) for the `no_sponsor_signals` and `sponsor_signals` listed in `h1b_policy`.
2. Classify the role:
   - **NO SPONSOR** — any `no_sponsor_signals` match.
   - **SPONSORS** — any `sponsor_signals` match.
   - **UNKNOWN** — no explicit language.
3. For UNKNOWN, cross-check the company against public H-1B data (h1bgrader.com, myvisajobs.com, USCIS employer data hub). If the company filed **≥ `h1b_policy.min_petitions_2y` (10)** H-1B petitions in the last 2 years, upgrade UNKNOWN → **LIKELY SPONSORS**. Otherwise leave as UNKNOWN.
4. **Drop every NO SPONSOR role** from the pipeline. Do not evaluate, do not tailor a CV, do not add to the tracker. Log them in `reports/h1b-dropped-<YYYY-MM-DD>.md` with the matched signal so they are auditable.
5. For surviving roles, **annotate** the tracker and any evaluation report with an `h1b_status` field: `SPONSORS` / `LIKELY SPONSORS` / `UNKNOWN`, plus a 1-line evidence quote from the JD or sponsor database.
6. When outputting results of a scan, sort by `h1b_status` (SPONSORS → LIKELY → UNKNOWN) then by fit score, and include an `H-1B` column in any table.
7. For a single-JD pipeline run where the JD is NO SPONSOR, tell the user upfront: *"⚠ This role does not sponsor H-1B. I will not generate a CV or tracker entry. Matched signal: '<quote>'. Override? (y/N)"* and stop.

Never silently ignore this rule — if the JD page can't be fetched, mark as UNKNOWN and note the fetch error.

## 1-Page ATS Requirements (hard)

Every generated PDF MUST:
- Fit on **exactly 1 page, US Letter**. The HTML template enforces `max-height: 11in; overflow: hidden;` — if content overflows, **remove** the lowest-priority bullets (never shrink fonts below the floors below).
- Use only **Calibri / Arial / Helvetica** (ATS-safe; set in `templates/cv-template.html`).
- Font sizes: body **9–9.5pt**, section headers **9pt**, name **16pt**. Floor: **9pt** for body, **8.5pt** for dates/subtitles. Never go below 8pt.
- Margins: **0.3in top/bottom, 0.5in left/right**. Floor: 0.25in / 0.4in.
- Line-height **1.15–1.2**.
- Single column, no tables, no text boxes, no images, no icons, no columns, no headers/footers. Section headings in plain text.
- Standard section order: Summary → Skills → Experience → Education → Certifications.
- Use real hyphens/dashes, straight quotes (the generator normalizes smart quotes automatically).
- **LinkedIn and Portfolio links use display labels**, not raw URLs. Use `LinkedIn` hyperlinked to `https://www.linkedin.com/in/adhithyarokhith/` and `Portfolio` hyperlinked to the company-specific ref URL. This keeps the header clean.
- **Portfolio link must include company-specific ref slug.** Every resume's portfolio URL must be `https://adhithyabhaskar.vercel.app/ref/{company-slug}` where `{company-slug}` is the lowercase, hyphenated company name (e.g., `tiktok`, `copart`, `jnj`, `cvs-health`, `holland-america`). Display it as `Portfolio` hyperlinked, not the raw URL. This enables recruiter visit tracking via Vercel Analytics. Never use the bare `adhithyabhaskar.vercel.app/` URL without the ref slug.
- **Skills section: max 3–4 grouped categories** with a bold label per group and 6–10 skills per group. Never dump 30+ skills in a single paragraph. Each category on its own line with clear visual separation. Example: `**Paid Media:** Google Ads, SA360, Meta Ads, LinkedIn Ads` on one line, then `**Analytics:** GA4, SQL, Power BI, Tableau` on the next.

If after tightening the CV still overflows, in priority order: (a) trim Summary to 2 lines, (b) cut 1 bullet from the oldest role, (c) collapse Certifications to a single line, (d) drop the Skills subcategory labels, (e) then consider reducing body to 9pt and line-height to 1.15. Never shrink beyond those floors.

## Post-Generation Checklist (MANDATORY before rendering PDF)

After tailoring the CV and before generating the PDF, verify ALL of the following. If any check fails, fix it before rendering:

1. **Portfolio label?** Header displays the literal word `Portfolio`, linking to the routed portfolio with `/ref/{company-slug}`.
2. **LinkedIn label?** Header displays the literal word `LinkedIn`, linking to `https://www.linkedin.com/in/adhithyarokhith/`.
3. **SwipeHire dates removed?** If Projects section is present and includes SwipeHire, heading must be just `SwipeHire` — no dates.
4. **Projects section relevant?** Every project listed must match at least one JD keyword. If none match, remove the entire Projects section.
5. **No pricing language in growth variant?** If using `us-growth.md`, search the entire CV for: "Pricing Lead", "Pricing Analytics", "price elasticity", "margin optimization", "AP26", "revenue scenarios", "pricing strategy". If any found, remove or reframe.
6. **Page fill 85–95%?** Visually estimate. If under 85%, add experience bullets or pull in a matching GitHub project. If over 100%, cut per the overflow priority.
7. **Sensata title correct for variant?** Growth → no "Pricing" in title. Pricing → "Pricing Lead" OK. PMM/PM → flexible.
8. **All metrics grounded?** Spot-check that no new hard numbers were invented beyond the approved set (-25% CPA, 3x ROAS, 16x ROAS, $2M+, 50K+, 100+, 8-person, $15K-$90K/month per client, 30+, +35%, 12% YoY, 8% share, 18%, 22%, 15%, 30%, 20%, 50+ users, 8+ A/B tests, 25% activation, 12+ interviews, 3 pricing tiers).
9. **Summary exactly 2 sentences?** If longer, cut. Sentence 1 = identity + years + top result. Sentence 2 = tools/methods + what you bring.
10. **Skills in 3–4 grouped categories?** Not a wall of text. Each category bold-labeled on its own line with 6–10 skills max.
11. **Every bullet shows clear ownership?** "Owned", "Led", "Built", "Drove" — not "Managed multiple workstreams". Each bullet must answer: what exactly, how many, what tool, what result.

## JD Archival (MANDATORY)

After every resume generation, save the full JD to `jds/{company-slug}-{role-slug}.md` with: URL, date saved, location, salary, full description, responsibilities, requirements, and preferred qualifications. Also include hiring manager/recruiter names if known. This ensures JD data is available for interview prep even if the original URL goes down.

## Compensation
US track: target **$90K–130K** base, minimum **$75K** (carried over; revisit). Bay Area or Remote-US.
India track: **more than INR 35 LPA** (minimum 35 LPA).
