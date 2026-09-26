# Loadshare Networks - Head - Growth/Rider Supply

**URL:** https://www.iimjobs.com/j/loadshare-networks-head-growthrider-supply-1586260
**Req ID:** not stated
**Company:** Loadshare Networks
**Location(s):** Bengaluru, India
**Track:** india / visa_gate: not-applicable

## Extraction status: UNCONFIRMED

WebFetch on the iimjobs.com URL returned only site navigation/category-menu chrome (Banking & Finance, Sales & Marketing, Consulting, etc.) with no job title, company detail, description, or requirements - consistent with iimjobs.com's known bot-challenge behavior called out in the extraction recipe notes.

Fallback attempted: `node browser-extract.mjs "https://www.iimjobs.com/j/loadshare-networks-head-growthrider-supply-1586260" --mode jd`

Result: `{"error":"navigation error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://www.iimjobs.com/j/loadshare-networks-head-growthrider-supply-1586260","code":"navigation_error"}`

This is the known sandbox proxy TLS-interception artifact affecting all Playwright navigation in this environment right now, not evidence the posting itself is dead. **Do not treat this as a liveness failure** - it is an extraction-tooling limitation. iimjobs.com blocked the WebFetch path; the browser fallback is currently broken environment-wide.

No JD text could be captured. No work-authorization/sponsorship/degree/graduation-year language could be verified. Row carried forward to `data/extracted.tsv` as unconfirmed (track=india, visa_gate=not-applicable, so the US work-authorization gate does not apply regardless) so Agent 3 can retry the fetch from a session without this proxy issue, or so the candidate can check the link manually.
