# Technical Product Manager - AI Infra Resilience

**Company:** NVIDIA
**URL:** https://zapply.jobs/l/d/workday-nvidia-nvidiaexternalcareersite-JR2030157?s=gh-new-grad-jobs-2027 (resolves to https://nvidia.wd5.myworkdayjobs.com/nvidiaexternalcareersite/job/US-CA-Santa-Clara/Technical-Product-Manager---AI-Infra-Resilience_JR2030157)
**Req/Posting ID:** JR2030157
**Posted:** 2026-11-20 ("Posted Today")
**Location(s):** US, CA, Santa Clara (role noted #LI-Hybrid)
**Compensation:** "195,000 USD - 377,000 USD for Level 5; and 232,500 USD - 442,000 USD for Level 6." Plus equity and benefits.
**Track:** us | **Visa gate:** required
**Source:** Direct Workday CXS API (nvidia.wd5.myworkdayjobs.com/wday/cxs/nvidia/nvidiaexternalcareersite/job/...), zero-token fetch, extracted 2026-11-20.

**IMPORTANT FLAG:** Note this is a different requisition (JR2030157) than the one already on disk under a similar filename (JR2019819, same title). Treat as a distinct posting per req-ID disambiguation.

**IMPORTANT FLAG (seniority/years):** JD explicitly states "12+ years total experience" and "5+ years in product management, solutions architecture, software engineering, or site reliability engineering." This is well above the US-track <=6-year ceiling in nightly-rules.md (drop threshold: 7+ years). Flagging for Agent 3/evaluator; not dropped here per this step's scope (liveness/extraction only).

## Work authorization / sponsorship / citizenship / clearance / degree / graduation year (verbatim)
- Degree: "Bachelor's degree in Computer Science or equivalent experience."
- No sentence anywhere in the posting mentions work authorization, visa sponsorship, citizenship, or security clearance. Silence on this topic (not a hard wall).

## Full JD Text (verbatim, via Workday CXS API)

GPU clusters fail. Workloads crash at 3am, AI teams file tickets pointing at hardware, hardware teams point back at software, and the actual cause stays unknown until someone with deep enough context digs through DCGM metrics, XID history, and NCCL traces. That forensics work shouldn't fall to a human on-call every time. We're building the platform that automates it, and we need a PM who has been that on-call engineer.

We're hiring a Senior Product Manager to own workload failure attribution: how a GPU cluster figures out whether a failed job was caused by hardware, system software, or application code, and how that verdict gets surfaced to operators, schedulers, and the open source developer surface built on top of it. You will own the roadmap and work directly with the engineering and operations communities who deploy and extend this platform. This role is part of NVIDIA's DSX Platform, NVIDIA's open, modular infrastructure software for designing, operating, and optimizing AI factories at scale. No prior product management title required. If you are a deeply technical product manager, architect, SRE, or infra engineer who has lived the GPU cluster failure-triage problem, we want to hear from you.

**What You'll Be Doing:**
- Drive the product vision, roadmap, and delivery for workload failure attribution, in close collaboration with engineering on architecture and prioritization.
- Identify gaps in how customers and partners triage GPU cluster failures at scale and define new attribution capabilities to close them, including how an NCCL timeout gets attributed to hardware, system software, or application, and which signals belong in a public API vs. an entitled runtime extension.
- Work directly with cloud partners and cluster operators to translate their operational triage requirements into platform capabilities.
- Drive community engagement strategy for the open source attribution project, including contribution models, ecosystem partnerships, and developer adoption.

**What We Need To See:**
- 12+ years total experience.
- 5+ years in product management, solutions architecture, software engineering, or site reliability engineering on technical infrastructure products. Technical depth on GPU or AI infra is required.
- Familiarity with GPU failure modes: XID codes, ECC correctable and uncorrectable errors, DCGM metrics, NVLink and PCIe health signals.
- Technical understanding of why AI workloads fail: GPU hardware failure modes, distributed training failure patterns (NCCL timeouts, framework errors, hardware vs. system software vs. application fault distinction), and the telemetry systems (DCGM, sysfs, dmesg) that surface these signals.
- Demonstrated ability to work with senior technical customers and translate operational requirements into product decisions.
- Strong written and verbal communication across technical and non-technical audiences.
- Bachelor's degree in Computer Science or equivalent experience.

**Ways To Stand Out From The Crowd:**
- Former SRE or infra engineer on GPU clusters. You have triaged job failures, parsed XID logs, and understand the cross-team deep dives that happen when a multi-thousand-GPU training run fails.
- Deep familiarity with GPU scheduling, topology-aware placement, or multi-tenant GPU cluster management: Slurm prolog/epilog, Kueue, or Kubernetes-native scheduler environments.
- Experience building products that produce structured diagnostics or attribution output: health verdict schemas, log analysis pipelines, rules-engine systems, or observability APIs at data center scale.
- Practical experience delivering or contributing to an open-source infrastructure project, including managing contributor engagement on GitHub.

NVIDIA is widely considered one of the technology world's most desirable employers. We have some of the world's most forward-thinking and hardworking people on our team. If you're creative and autonomous, we want to hear from you!

#LI-Hybrid

Your base salary will be determined based on your location, experience, and other objective job-related factors. The expected base salary ranges for this position are:
195,000 USD - 377,000 USD for Level 5; and 232,500 USD - 442,000 USD for Level 6.

You will also be eligible for equity and benefits.

Applications for this job will be accepted at least until November 24, 2026.

This posting is for an existing vacancy.

NVIDIA uses AI tools in its recruiting processes.

NVIDIA is committed to fostering an inclusive work environment and proud to be an equal opportunity employer. As we highly value diversity in our current and future employees, we do not discriminate (including in our hiring and promotion practices) on the basis of race, religion, color, national origin, gender, gender expression, sexual orientation, age, marital status, veteran status, disability status or any other characteristic protected by law.

## Liveness
Live. Fetched 2026-11-20 directly via the Workday CXS API after resolving the zapply.jobs redirect chain (zapply.jobs -> nvidia.wd5.myworkdayjobs.com). HTTP 200 with full JD body. Posting states applications accepted at least until 2026-11-24.
