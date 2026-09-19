# Bundle Status - LinkedIn fresh-2026-05-14 batch

**Built:** 14 of 14. All resume PDFs are 1 page, all CL PDFs are 1 page. Sanity-check passed by build agent on each.

**Apply status:** LinkedIn session expired during apply phase. Re-login required before I can drive Easy Apply via MCP.

---

## Apply queue (ranked by fit, highest first)

| # | Company | Role | Location | JD URL | Easy Apply? | Bundle Folder |
|---|---------|------|----------|--------|-------------|---------------|
| 1 | Samsara | Sr. Growth Marketing Manager - New Products | SF Remote | https://www.linkedin.com/jobs/view/4402836162/ | Yes | `output/Samsara/sr-growth-marketing-new-products/` |
| 2 | AWS | Tech Product Marketing Manager, AWS Edge Networking | Seattle On-site | https://www.linkedin.com/jobs/view/4384162567/ | No (external Amazon Jobs) | `output/AWS/tech-pmm-edge-networking/` |
| 3 | Benchling | Product Marketing Manager, Platform | SF Hybrid | https://www.linkedin.com/jobs/view/4383897878/ | No (likely Greenhouse) | `output/Benchling/pmm-platform/` |
| 4 | Attentive | Principal Product Marketing Manager | US Remote | https://www.linkedin.com/jobs/view/4405457495/ | No | `output/Attentive/principal-pmm/` |
| 5 | Capital One | Performance Marketing Manager | McLean VA On-site | https://www.linkedin.com/jobs/view/4406857481/ | No (external Capital One careers) | `output/Capital-One/performance-marketing-manager/` |
| 6 | Otter.ai | Growth Marketing Manager, Paid Acquisition | Mountain View On-site | https://www.linkedin.com/jobs/view/4414559406/ | No (likely Greenhouse) | `output/Otter-ai/growth-marketing-paid-acquisition/` |
| 7 | Grindr | Senior Product Marketing Manager, Core | SF Hybrid | https://www.linkedin.com/jobs/view/4312939225/ | No | `output/Grindr/sr-pmm-core/` |
| 8 | Base44 | Product Marketing Manager | NYC Hybrid | https://www.linkedin.com/jobs/view/4410717883/ | Yes | `output/Base44/pmm/` |
| 9 | Responsive | Product Marketing Manager | US Remote | https://www.linkedin.com/jobs/view/4411179603/ | No | `output/Responsive/pmm/` |
| 10 | Sonatype | Performance Marketing Manager | US Remote | https://www.linkedin.com/jobs/view/4414191502/ | Yes | `output/Sonatype/performance-marketing-manager/` |
| 11 | Dyson | Revenue Growth Manager, Refurbished Products | NYC On-site | https://www.linkedin.com/jobs/view/4393953479/ | No (Dyson careers) | `output/Dyson/revenue-growth-manager-refurbished/` |
| 12 | Omada Health | Senior Member Growth Manager | SF Remote | https://www.linkedin.com/jobs/view/4402494100/ | Yes | `output/Omada-Health/sr-member-growth-manager/` |
| 13 | Nielsen | Strategic Growth Manager, Analytics | NYC On-site | https://www.linkedin.com/jobs/view/4410649583/ | Yes | `output/Nielsen/strategic-growth-manager-analytics/` |
| 14 | Fractal | Account Growth Manager (Boston) | Boston Hybrid | https://www.linkedin.com/jobs/view/4414403143/ | Yes | `output/Fractal/account-growth-manager-boston/` |

## What's in each bundle folder

- `cv-adhithya-{slug}.html` - resume source
- `Adhithya_Rokhith_{Company}_{Role}.pdf` - resume PDF (1 page, ~108 KB)
- `cover-letter-{slug}.html` - CL source
- `Cover_Letter_{Company}_{Role}.pdf` - CL PDF (1 page, ~62 KB)
- `_csv_row.txt` - CSV tracker entry (already aggregated to main CSV)

## How to apply manually (if session can't be restored)

1. Open the JD URL.
2. Click **Easy Apply** (5 bundles - rows 1, 8, 10, 12, 13, 14) OR follow the external apply link in the right rail.
3. Upload the resume PDF from the bundle folder.
4. If asked for a cover letter, upload the CL PDF (or paste the body text from the .html source).
5. For LinkedIn screening questions on visa/work-auth: per user preference, do not proactively flag. Answer the literal question on the form.

## What I can do once you're logged back in

Reply with "logged back in, apply now" and I will:
1. Verify the LinkedIn session is live.
2. Walk through the 5 Easy Apply bundles in order (rows 1, 8, 10, 12, 13, 14): navigate, upload resume, fill, **stop at the final Submit button**, surface for your single-click approval.
3. For the 9 external-apply bundles, navigate to the company careers page, fill what I can, stop at Submit, surface for approval.

Each apply takes ~60-90 seconds end-to-end.

## Bundles already verified

Each agent confirmed via its own sanity check:
- 1 page resume + 1 page CL
- No em-dash / en-dash / middle dot / smart quotes / ellipsis (per memory rule)
- No LLM brand names (ChatGPT / Claude / GPT replaced with "AI-driven" or "AI")
- Sensata title kept as "Pricing Lead, Product Marketing"
- Pixis title kept as "Customer Success Manager"
- Pixis budget framed as $15K-$90K/month per client (not $1.4M total)
- Plug Power AEO/GEO framed as "AI-driven buyer search"
- No graduation years on Simon MS or BITS BE
- No "honest gap" paragraph in CL
- No visa / sponsorship / work-auth mention
- CL addressee is "Hiring Team, {Company}," (never a named individual)
- Portfolio URL is `https://adhi-growth-ai.vercel.app/ref/{company-slug}`
