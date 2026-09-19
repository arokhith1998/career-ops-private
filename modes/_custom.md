# Custom Instructions -- career-ops

<!-- ============================================================
     THIS FILE IS YOURS. It will NEVER be auto-updated.

     Put your own house rules, custom workflows, and automations
     here -- anything you want the agent to ALWAYS do (or never do).

     This is for PROCEDURAL rules ("HOW I want things done").
     For WHO you are (archetypes, narrative, comp, negotiation),
     use modes/_profile.md instead. Keeping the two separate keeps
     each one readable.

     The agent reads this file alongside the system instructions;
     your rules here take precedence over the defaults, as long as
     they don't break the Data Contract (your files are never
     touched, and we never auto-submit an application for you).

     Because this is a user-layer file, anything you write here
     survives `node update-system.mjs`. Put customizations HERE,
     not in CLAUDE.md / modes/_shared.md / other system files --
     those get overwritten on update.
     ============================================================ -->

## House Rules

<!-- Rules the agent should always follow. Examples:
     - Always write evaluation summaries in British English.
     - Never include a photo in my CV (US / ATS-first market).
     - Cap each batch run at 20 listings unless I say otherwise.
     - If a report scores below 6, skip the cover letter. -->

- **Two tracks.** US (Bay Area + Remote-US: marketing, pricing, RevOps, product
  management, market strategy) and India (Chief of Staff, Head of Growth). Before
  evaluating a JD, decide its track from its location and title, and evaluate it
  against that track in config/profile.yml -> tracks. A US-track title in India,
  or an India-track title in the US, is off target: say so and stop.
- **Every candidate-facing artifact follows modes/nightly-rules.md sections 5-10**
  (language, location header, portfolio routing, resume, pitch deck, outreach,
  folders), in interactive runs exactly as in the nightly pipeline.
- The US work-authorization gate (section 2 of that file) applies to the US track
  only. India-track roles skip it.

## Custom Workflows

<!-- Multi-step routines you run often, given a short name. Examples:
     - "weekly review": scan my saved portals, evaluate the new roles,
       then give me a one-paragraph summary of the top 3.
     - "prep <company>": pull the JD, generate STAR stories from
       article-digest.md, and draft 5 likely interview questions. -->

(none yet -- add yours above)

## Output Preferences

<!-- How you like results formatted. Examples:
     - Reports: lead with the score and the one-line verdict.
     - Show the per-step token breakdown after a batch run.
     - Save PDFs date-first: YYYY-MM-DD-company.pdf -->

- All artifacts for one role go in output/{Company}/{role-slug}/.
- After every resume PDF, append a row to output/resumes-generated.csv.

## Off-Limits

<!-- Things the agent must never do for you. Examples:
     - Never auto-fill or submit an application without showing me first.
     - Never edit a system file to customize my setup -- put it here. -->

- Never invent metrics for PriceKeel or Applied Materials.
- Never mention visa or sponsorship in candidate-facing content.
