# Senior Sales Operations Analyst - Aptiv

**URL:** https://www.linkedin.com/jobs/view/4467950034
**Req ID:** Not stated
**Location (per LinkedIn top card):** Walnut Creek, CA
**Posted:** "2 hours ago" at first WebFetch pass; confirmed again via independent `browser-extract.mjs` (Playwright) pass, 87 applicants shown
**Track:** us | **Visa gate:** required | **Extracted:** 2026-10-07
**Legal entity:** Aptiv PLC (per LinkedIn top card) - see anomaly note below
**seen_company flag on shortlist row:** none set.

## ANOMALY - JD body does not match the posted title/employer. Flagging, not fabricating.

This posting's LinkedIn top card (title, company logo, location, applicant count) clearly reads **"Senior Sales Operations Analyst," Aptiv, Walnut Creek, CA, 87 applicants** - confirmed independently via two different fetch methods (raw `linkedin.com/jobs-guest/jobs/api/jobPosting/4467950034` curl fetch with a mobile UA, and a separate headless `browser-extract.mjs` Playwright pass on the original `linkedin.com/jobs/view/4467950034` URL). Both returned identical results.

However, the actual job-description body text embedded in that same page is **entirely about a different company and a different, lower-level role**: "Sales Operations Administrator" at **Wind River** (a separate company - mission-critical embedded-systems software, not Aptiv), including a Wind River "About Us" blurb, Wind River-specific responsibilities (Salesforce CRM/CPQ/ZoomInfo/Clari/Outreach/Salesloft administration), a "5+ years... 3+ years hands-on Salesforce administration" requirements list, and a "$140,000 to $160,000 USD" compensation line - none of which mention Aptiv. The only Aptiv-specific text on the whole page is a trailing boilerplate line: "Privacy Notice - Active Candidates: https://www.aptiv.com/privacy-notice-active-candidates. Aptiv is an equal employment opportunity employer..."

This reads like a cross-posting/template error on LinkedIn's or the recruiter's side (Wind River's JD pasted under an Aptiv-titled requisition), not a fetch failure on this end - the mismatch is baked into the live page itself, reproduced identically by two independent extraction methods.

**Do not score Aptiv's "Senior Sales Operations Analyst" against the Wind River requirements below.** The real JD for this specific Aptiv req was not recoverable from this page.

## Body text as served (verbatim, for the record only - likely belongs to a different req)
"About Wind River... We are seeking a highly analytical and technology-focused Sales Operations Administrator to drive operational excellence across our global sales organization... 5+ years of experience in Sales Operations, Revenue Operations, Business Operations, or a related analytical role. 3+ years of hands-on Salesforce administration and support experience... This role is compensation range is between $140,00 to $160,000 USD plus annual incentive plan bonus... Privacy Notice - Active Candidates: https://www.aptiv.com/privacy-notice-active-candidates. Aptiv is an equal employment opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, national origin, sex, gender identity, sexual orientation, disability status, protected veteran status or any other characteristic protected by law."

## Work authorization / sponsorship / citizenship / clearance / degree / graduation year
No sentence about work authorization, visa sponsorship, citizenship, or clearance appears in the (mismatched) body text. No degree or graduation-year requirement stated.

## Comp
As served on the page (Wind River body, not confirmed to apply to the actual Aptiv req): "$140,00 to $160,000 USD plus annual incentive plan bonus" (note: likely a typo for $140,000 in the source).

## Liveness
The posting itself is live (real top-card metadata, 87 applicants, working Apply button, "Similar jobs" cross-links to the PayPal Sr Analyst Revenue Operations posting also in this batch). Extraction status: **live but content-mismatched / unconfirmed JD** - flagging for the mapper/Agent 3 rather than silently treating the Wind River text as Aptiv's requirements.
