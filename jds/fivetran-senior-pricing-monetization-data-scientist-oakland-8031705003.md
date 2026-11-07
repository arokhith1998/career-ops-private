# Senior Pricing & Monetization Data Scientist - Fivetran (Oakland, CA)

**Company:** Fivetran (now integrated with dbt Labs)
**Title:** Senior Pricing & Monetization Data Scientist
**Primary URL (Greenhouse, company career page):** https://www.fivetran.com/careers/job?gh_jid=8031705003
**Mirror URL (LinkedIn, same posting):** https://www.linkedin.com/jobs/view/4488401119
**Note on shortlist dedup:** data/shortlist.tsv carried this req as two separate rows (one sourced via LinkedIn, one via the fivetran.com Greenhouse-hosted career page). Both rows resolve to the identical requisition - same title, same Oakland location, same body text, same $215,424-$269,280 comp band. This single JD file covers both shortlist rows; both are mapped to this path in data/extracted.tsv.
**Req/Posting ID:** Greenhouse job id (gh_jid) 8031705003. (Distinct from the already-extracted `jds/fivetran-senior-pricing-data-scientist.md`, gh_jid 7806295003 - that is a different, older requisition for a similarly-titled role.)
**Location(s):** Oakland, California, United States, AMER
**Posted / updated date:** Greenhouse API `updated_at` = 2026-11-06T09:47:08-05:00. LinkedIn mirror showed "13 hours ago" at extraction (2026-11-07), 26 applicants.
**Employment type:** Full-time. Seniority level (LinkedIn): Not Applicable. Industry: Software Development.
**Comp band (verbatim):** "Oakland Pay Range: $215,424 - $269,280 USD"
**Track:** us | **Visa gate:** required
**Source:** boards-api.greenhouse.io/v1/boards/fivetran/jobs/8031705003 (primary) + LinkedIn jobs-guest posting API (mirror, cross-checked), extracted 2026-11-07

## Work authorization / sponsorship / citizenship / clearance / degree / grad-year (verbatim)
- No sentence addresses visa sponsorship, work authorization, citizenship, or clearance.
- Required degree field (verbatim): "Deep quantitative chops - an advanced degree (PhD/MSc) in Economics, Statistics, Operations Research, Applied Math, or similar."
- No graduation year stated.
- Required years of experience (verbatim): "5-8 years designing or operating SaaS or sophisticated B2C pricing models, preferably with usage-based or behavioral pricing experience." (Binding minimum is 5, which is under the us-track max_years cap of 6; the upper end of the stated range, 8, exceeds the cap but the floor does not.)

## Full JD text (verbatim, as extracted)

From Fivetran's founding until now, our mission has remained the same: to make access to data as simple and reliable as electricity. With Fivetran, customer data arrives in their warehouses, canonical and ready to query, with no engineering or maintenance required. We're proud that more organizations continue to leverage our technology every day to become truly data-driven.

About Us
Fivetran and dbt Labs are bringing together two industry-leading companies with a shared mission: helping organizations unlock the full value of their data. Together, we're delivering the data infrastructure layer that helps organizations move, transform, and trust their data - from the moment data moves, through every transformation, to the context teams and AI systems rely on. Fivetran helps organizations automate data movement across the systems, clouds, engines, and tools they rely on. dbt Labs pioneered analytics engineering, helping teams transform data into reliable, governed insights. Together, we support thousands of organizations as they build a trusted foundation for analytics, AI, and better business decisions. As we bring our teams and technology together, we're building on the strengths of both companies while continuing to deliver the products and experiences our customers know and trust. It's an exciting time to join us: we're creating a company with the scale, talent, and technology to help more organizations put their data to work with greater speed, confidence, and impact. During this transition period, you may see references to both Fivetran and dbt Labs throughout our recruiting process as we integrate our teams, systems, and career sites.

About The Role
This is a unique role that sits at the intersection of economics, analytics, product, and strategy. You'll combine rigorous quantitative analysis with customer research and commercial thinking to shape how Fivetran prices, packages, and monetizes its products.

What You'll Do
- Analyze product usage, deal, financial, and billing data to model pricing, packaging, and monetization scenarios.
- Design frameworks to assess willingness to pay, customer value, and price realization across customer segments and product lines.
- Conduct research on pricing strategies, packaging models, and monetization approaches across comparable and adjacent markets.
- Lead pricing and packaging strategy for new product launches, partnering with Product, GTM, and Finance to define commercial models.
- Build value-based pricing and econometric models to quantify elasticity, customer ROI, and lifetime value.
- Design and execute pricing experiments.
- Synthesize quantitative analysis, customer research, and competitive intelligence into executive recommendations that influence pricing strategy.
- Drive customer and prospect research to understand purchasing behavior, value perception, and pricing friction.
- Partner closely with Product, Analytics, Finance, Sales, Marketing, and Legal to deliver end-to-end pricing initiatives.
- Define KPIs and dashboards that measure pricing performance and identify optimization opportunities.
- Continuously evolve our pricing and packaging strategy to improve ARR growth, customer adoption, and value realization.

Skills We're Looking For
- 5-8 years designing or operating SaaS or sophisticated B2C pricing models, preferably with usage-based or behavioral pricing experience
- Deep quantitative chops - an advanced degree (PhD/MSc) in Economics, Statistics, Operations Research, Applied Math, or similar
- Fluency in SQL and Python for large-scale data analysis; proficiency with BI tools such as Looker or Tableau; bonus for dbt
- Hands-on experience with conjoint, MaxDiff, Gabor-Granger, or Van Westendorp surveys and causal experiment design
- Strong attention to detail and data analysis skills - including interpreting results and recommending actions
- Proven record of turning complex models and analyses into recommendations and shipping changes that moved ARR, gross margin, or NRR
- Collaborative mindset with Product, Analytics, Finance, Sales, and Legal; you can navigate from whiteboard to contract terms with ease
- Strong communication and presentation skills with ability to influence at the executive level

The compensation range displayed on this job posting reflects the minimum and maximum target for new hire compensation for the target position and level, and may include sales incentives or target bonuses depending on the role. Our compensation ranges are determined by role, level, and location. Our job titles may span more than one career level. Within the range, individual compensation is determined by additional factors, including job-related skills, experience, relevant education or training, business need, market demands. The compensation range is subject to change and may be modified in the future. Your recruiter can share more about the specific compensation range for your location during the hiring process.

Oakland Pay Range
$215,424 - $269,280 USD

Perks And Benefits
- 100% employer-paid medical insurance
- Generous paid time away from work, including paid vacation or flexible/unlimited vacation depending on role and country, plus paid sick time, inclusive parental leave, paid holidays, including a year-end Global Week of Rest, and volunteer days off.
- RSU stock grants*
- Professional development and training opportunities
- Company virtual happy hours, free food, and fun team-building activities
- Monthly cell phone stipend
- Access to an innovative mental health support platform that offers personalized care and resources in areas such as: therapy, coaching, and self-guided mindfulness exercises for all covered employees and their covered dependents.

*May vary by country and worker type - please reach out to your recruiter for more information.

We're honored to be valued at over $5.6 billion, but more importantly, we're proud of our core values of Get Stuck In, Do the Right Thing, and One Team, One Dream.

Fivetran brings together high-quality talent across the globe to make data access as easy and reliable as electricity for our customers. We value and recognize that our customers benefit from having innovative teams made of people from many backgrounds, experiences, and identities. Fivetran promotes diversity, equity, inclusion & belonging through attracting, recruiting, developing, and retaining a diverse workforce, not only because it is the right thing to do, but because it helps us build a world-class company to better serve our customers, our people and our communities.

## Extraction notes
Confirmed via `check-jd-experience.mjs` logic: the binding floor of the stated range ("5-8 years") is 5, under the us-track cap of 6, so this passes the experience gate even though the upper end of the range exceeds it. No sponsorship/visa/citizenship/clearance language anywhere in either the Greenhouse or LinkedIn copy.
