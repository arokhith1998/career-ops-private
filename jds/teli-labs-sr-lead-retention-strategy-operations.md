# (Sr) Lead, Retention Strategy & Operations — "Teli Labs" (FLAG: identical content to Nourish)

**URL:** https://www.linkedin.com/jobs/view/4475106801
**Req ID:** not stated (LinkedIn job posting ID 4475106801)
**Posted:** shown on page as "New" (date fetched 2026-10-07)
**Location(s):** New York, NY OR San Francisco, CA
**Comp band:** not stated

## FLAG: company-identity mismatch / duplicate-content fraud tell

LinkedIn attributes this posting's hiring organization to **"Teli Labs"** (confirmed via the page's `topcard__org-name-link` field). However, the entire job description body, including the "About Us" paragraph, the Series C funding details ($100M Series C, $215M total, Menlo Ventures lead), the "About The Role," "Key Responsibilities," and "We'd Love To Hear From You If You" sections, is word-for-word identical to the Nourish posting extracted in this same batch (LinkedIn id 4474412163, see `jds/nourish-sr-lead-retention-strategy-operations.md`). The posting never mentions "Teli Labs" anywhere in its own body text; it only refers to "Nourish."

This is the second time this pattern has appeared on this account's LinkedIn feed: an existing JD file in this repo (`jds/teli-labs-gtm-strategy-products-markets.md`, from 2026-09-25) shows "Teli Labs" attributed as the hiring org on a posting whose body text was entirely about a different company, "Pallet." That prior extraction flagged it the same way and it does not appear in `data/applications.md`, i.e. it was not carried forward into evaluation.

Per `modes/nightly-rules.md` Section 4 ("Fraud tells: stop and flag, never proceed"), this posting is flagged here and NOT included in `data/extracted-batchB.tsv` for downstream processing. Recommend the orchestrator either discard this row outright or route it to the real employer's own listing only (the live Nourish posting already extracted in this batch covers the legitimate version of this req).

## Job Description (as rendered under the "Teli Labs" LinkedIn listing, verbatim duplicate of the Nourish text)

**About Us**

Health is the most important thing in life, and the American healthcare system is completely broken, poor outcomes, high cost, bad patient experience. We're building a new system from the ground up.

Our mission is to improve people's health by making it easy to live a healthy lifestyle.

Nourish is the country's largest dietitian-led metabolic health clinic. We're an AI-native digital health system matching patients with 10,000+ Registered Dietitians, physicians, medications, lab testing, and AI agents to deliver insurance-covered care across all 50 states. Founded four years ago, we've completed millions of appointments, tripled year-over-year, and partnered with health plans covering 200M+ Americans across 250+ health systems.

In 2026 we raised a $100M Series C, bringing total funding to $215M. The round was led by Menlo Ventures, with participation from Thrive Capital, Index Ventures, J.P. Morgan Growth Equity Partners, Maverick Ventures, Y Combinator, BoxGroup, Atomico, Daybreak, and Operator Partners.

[Remainder of body text is identical to the Nourish posting; see jds/nourish-sr-lead-retention-strategy-operations.md for the full text, including Key Responsibilities and candidate requirements.]

This posting additionally includes a live application form with the following fields, which the Nourish-branded variant also carried:
- "Will you require visa sponsorship (now or in the future) for continued employment?*"
- "Are you located in NYC/SF and open to an in-office role (2-4x/week)?*"

## Extraction notes

- Verbatim sponsorship question on the application form: "Will you require visa sponsorship (now or in the future) for continued employment?*" This is a form field, not a JD-body wall statement; recorded here per instructions.
- No explicit citizenship, clearance, degree-field, or graduation-year sentence found.
- This row was excluded from `data/extracted-batchB.tsv` due to the company-identity/fraud flag above. The legitimate Nourish version of this same role is included instead.
