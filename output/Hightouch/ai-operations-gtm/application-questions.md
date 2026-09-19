# Hightouch Application Questions - AI Operations, GTM

---

## 1. What's one GTM workflow you think most companies are still doing manually that shouldn't be?

Renewal-risk scoring from CS conversation signals.

Most companies still do this 60 to 90 days before renewal, by hand, from a spreadsheet, by a CSM who reads through their account's recent call notes and Slack threads and tries to remember whether the champion left or the buyer mentioned a competitor. By the time risk surfaces this way, you're already in salvage mode. Discounts, scope cuts, exec apologies.

The reason it's still manual isn't that the signals don't exist. They sit in unstructured CS notes, support tickets, and product-usage anomalies that nobody wants to tag by hand. CSMs already write prose notes after every call. They will never fill out a 12-field renewal-risk form, and you shouldn't ask them to.

This is the textbook AI Operations seat. A weekly job that reads the last seven days of CS notes for each account, scores them against a small set of signal patterns (competitor mentioned, missed ask, exec turnover, scope reduction, sentiment delta), cross-references with product-usage anomalies from the CDP, and outputs a ranked risk list with the supporting quote for each signal.

The win condition isn't "we built a model." It's "we caught the deal 90 days earlier than the spreadsheet would have." Hightouch's composable CDP is the right place for this to live because the data is already in the warehouse, and the CSM doesn't have to change a single workflow to get value.

---

## 2. Tell me about the most impactful AI project you have built.

SwipeHire. A job-matching product I built solo on Python, OpenAI API, and React. It runs an LLM-scored match between a job-seeker's profile and an open JD, surfaces visa-aware options first, and auto-tailors a CV to the JD on apply. 50+ early users, 8 A/B tests on activation, +25% activation lift from V1 to V2.

The impact wasn't the metric. It was that I had to ship every layer of the GTM motion myself. ICP from 12 user interviews before any code. Acquisition channels A/B'd at low spend before scaling. Onboarding flow rebuilt three times based on funnel drop-off. GA4 + GTM + Amplitude wired day one so the experiments weren't lies. Weekly cohort retention reviewed line by line.

The lesson I use daily: the AI part of an AI product is the smallest part. Most of the work is the deterministic layer underneath. The LLM-scored match works because skill-overlap is computed first; the LLM reasons on top, not in place of it. Same principle on my NSE Paper-Trading Bot - rule-based technical scoring runs before the Claude API touches the signal. If the deterministic layer is weak, no amount of prompt engineering saves the output.

That's what I'd bring to AI Operations at Hightouch. Most GTM AI projects fail because someone bolts a Claude skill onto an unstructured CRM and expects magic. The work is figuring out the structured layer first.
