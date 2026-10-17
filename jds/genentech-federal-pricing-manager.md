# Federal Pricing Manager - Genentech

**URL:** https://www.linkedin.com/jobs/view/4480806505
**Req ID:** Not stated (no Genentech requisition ID shown on the LinkedIn posting)
**Location:** South San Francisco, CA (presence needed at the South San Francisco GNE Campus)
**Posted:** "6 hours ago" (relative timestamp at extraction time; no absolute date shown)
**Track:** us | **Visa gate:** required | **Extracted:** 2026-10-17
**Legal entity:** Not stated

## Work Authorization Notes
None stated on sponsorship, citizenship, permanent residency, or security clearance.
Required degree field, verbatim: "Bachelor's degree in a related field (e.g., Business, Finance, Data Analytics, Public Policy) or equivalent experience. MBA or other advanced degree is a plus"
No graduation year stated.

## IMPORTANT: liveness re-check vs earlier flag
A note from an earlier run tonight flagged this posting dead ("Federal Pricing Manager -- LinkedIn hard redirect to generic feed, the dead redirect tell"). On re-verification just now:
- `curl -L` on the exact posting URL returns HTTP 200 with zero redirects (`NUM_REDIRECTS:0`).
- The page `<title>` tag is `Federal Pricing Manager at Genentech -- South San Francisco, CA | LinkedIn Jobs` (role- and company-specific, not a generic jobs feed title).
- No "no longer accepting applications" text anywhere in the fetched HTML.
- `browser-extract.mjs` against the jobs-guest endpoint returned the full, specific JD body (reproduced below), not a generic "Explore jobs" / "Discover new opportunities" shell (the actual dead-tell pattern I hit on row 16/Deloitte on a rate-limited retry, confirmed separately as a transient bot-wall, not a real closure).

Conclusion: this posting is LIVE as of this extraction (2026-10-17). The earlier dead flag appears to have been a false positive (possibly a transient rate-limit/bot-wall response misread as a redirect-to-feed), or the posting was reopened/repopulated since. Flagging this discrepancy explicitly per instructions rather than silently overriding the earlier note.

## Description
**Who We Are (Government Programs):** With Government entities being Genentech's largest customer, the Government Programs (GP) team within Channel and Contract Management (CCM) is responsible for managing the complexities of government pricing to enable patient access through the federal drug programs (Medicare, Medicaid, 340B, Veterans Affairs and Department of Defense Federal Supply Schedule (FSS) & TRICARE). GP does this by reporting accurate pricing calculations that set the acquisition cost or reimbursement rate for drugs under these federal programs, paying government rebates and providing strategic value to its managed care partners. Collectively, these efforts help Genentech meet evolving business needs and foster a culture of compliance around government programs.

**The Opportunity:** The Federal Pricing Manager performs as well as reviews multiple complex pricing and payment calculations to determine pricing, rebates, and settlement accuracy for government agencies in compliance with strict accuracy targets, timelines, laws, regulations, and GP methodology. This role actively modernizes legacy business processes and analytical models to prepare government pricing and payment operations for advanced analytics and AI integration.

**Key Responsibilities:** The Federal Pricing Manager serves as a subject matter expert, managing end-to-end government price calculations and federal payment administration across multiple contracts as assigned. Sitting directly within the business team, this role may lead or review monthly reconciliations, resolve discrepancies prior to calculation finalization, and deliver pricing trend and financial impact presentations to Senior Leadership. The role also analyzes federal program claim variances alongside Finance and Forecasting teams. Serving as a technical resource for government pricing tools and systems, the Manager publishes scorecard reports, compliance metrics, and ad hoc risk assessments. Additionally, the role drives continuous process optimization by evaluating current workflows to eliminate friction points and building operational readiness, ensuring the team and processes are forward-thinking and fully prepared to seamlessly integrate modern AI and automation tools when technology resources align.

**Who You Are:** You are someone who wants to influence your own development and help shape the future of government pricing operations. You bring strong analytical skills in complex data, claims, or payment analysis, and you are energized by uncovering trends, diagnosing variances, and optimizing business processes. You naturally align with one (or a combination) of these profiles:
- The Strategic Builder: strong experience in complex operations, payments, or commercial analysis, with a passion for using technology to automate complex workflows.
- The Tech Hybrid: a business expert first, with a strong technology aptitude and a curiosity for AI and advanced analytics, serving as a key bridge to IT.
- The "Out-of-the-Box" Problem Solver: excels at solving complex operational challenges, thriving in Agile environments, translating business pain points into clear technical requirements.

**Required Qualifications:**
- Bachelor's degree in a related field (e.g., Business, Finance, Data Analytics, Public Policy) or equivalent experience. MBA or other advanced degree is a plus
- 4+ years of professional experience in pharmaceutical, biotechnology, life sciences, healthcare, technology, or related commercial operations/analytics roles
- Strong analytical and systems-thinking skills, with a proven ability to analyze complex data accurately, and communicate strategic insights clearly to leadership without technical jargon
- High proficiency with Microsoft Excel and Word, along with comfort navigating core data analysis and reporting tools
- Knowledge of managed care, drug contracting, customers, and the distribution channels including government price reporting is a plus
- Business travel, by air or car, is required for regular internal and external business meetings or conferences (up to 10%)
- This position is based in South San Francisco (presence needed at the South San Francisco GNE Campus)
- Relocation benefits are NOT offered on this posting

## Comp
Expected salary range for South San Francisco, CA: $114,500 - $212,600. A discretionary annual bonus may be available based on individual and Company performance.

## Liveness
Confirmed live via `browser-extract.mjs` against the LinkedIn jobs-guest endpoint (https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/4480806505) and corroborated with a direct `curl -L` on the listing URL (200, no redirect, specific page title). See the re-check note above.
