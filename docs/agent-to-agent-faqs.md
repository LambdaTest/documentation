---
id: agent-testing-platform-faqs
title: "Agent Testing FAQs: Setup, Security, Pricing"
hide_title: false
sidebar_label: FAQs
description: Answers to common Agent Testing questions on the free tier, connecting an agent, firewall testing, HIPAA, phone testing, and evaluation accuracy.
keywords:
  - agent testing faqs
  - ai agent testing questions
  - agent testing pricing
  - connect ai agent
  - agent testing security
url: https://www.testmuai.com/support/docs/agent-testing-platform-faqs/
site_name: TestMu AI
slug: agent-testing-platform-faqs/
canonical: https://www.testmuai.com/support/docs/agent-testing-platform-faqs/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-testing-platform-faqs/"
    },
    "headline": "Agent Testing FAQs: Setup, Security, Pricing",
    "description": "Answers to common Agent Testing questions on the free tier, connecting an agent, firewall testing, HIPAA, phone testing, and evaluation accuracy.",
    "url": "https://www.testmuai.com/support/docs/agent-testing-platform-faqs/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "agent testing faqs",
      "ai agent testing questions",
      "agent testing pricing"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-11-12T13:50:45+05:30"
  }) }}
/>

Common questions about TestMu AI Agent Testing, grouped by plans, setup, security, and evaluation quality.

## Plans and Pricing

---

### Availability for Small Teams and Startups

Yes. Small teams can start on the Pay-As-You-Go tier, described below. The Starter and Growth plans suit small and mid-size teams, while Scale and Enterprise add SLAs and compliance documentation for high-volume organizations.

### Free Trial and the Free Tier

The Pay-As-You-Go tier is effectively a permanent free tier. There is no time limit and no monthly commitment. You pay only for the credits you use.

### How Agent Testing Differs From LambdaTest Browser Testing

TestMu AI historically focused on browser and device testing. Agent Testing is a distinct product for AI agent quality evaluation, and it does not test browser UIs. The shared infrastructure, such as HyperExecute and the enterprise security stack, is the connection point between them.

### AI Models Behind the Testing Agents

The platform uses a hybrid stack that combines third-party large language models with TestMu AI's in-house agentic framework. Multiple LLMs contribute to evaluation reasoning, which reduces single-model blind spots. Specific model names are disclosed under NDA.

## Connecting and Running Tests

---

### Agent Types You Can Test

Agent Testing covers [chat](/support/docs/chat-agent/), [voice](/support/docs/voice-agent/), [video](/support/docs/video-agent/), [phone caller](/support/docs/phone-agent/) (inbound or outbound), IVR, and [image analyzer](/support/docs/image-analyzer/) agents. You choose the type under **Agent Type** when you create the agent. To test autonomous agents that take real actions through tools, APIs, and files, use [Agent Assurance](/support/docs/agent-assurance-overview/), a separate product that runs from the rook CLI.

### Connecting an Agent Without Code Changes

No changes to your agent are required. The agent needs an accessible endpoint: an HTTP API, a voice endpoint, a phone number or SIP trunk, or, for a video agent, a web URL that a person could join. There is no SDK to install, and the platform interacts with the agent through the same interface production users use.

### Testing an Agent Behind a Firewall

Yes. Use the HyperExecute secure tunnel, and the agent does not need a public-facing URL. The tunnel establishes an encrypted connection from the testing infrastructure to your private endpoint.

### Scenarios Generated From a Requirements Document

The platform generates 60 to 100+ scenarios per workflow by default. You can increase that by adding more persona types, expanding focus areas, or adding scenarios manually.

### How Long a Full Evaluation Takes

A typical chat or voice evaluation runs to completion in under 2 hours for most scenario volumes. Exact run time depends on the agent's response latency, the scenario count, and available concurrency.

### Testing Against a Production or Staging Agent

Running against a production agent is technically possible, but evaluating against staging is the recommended practice. To assess real production behavior, grade what production already recorded:

- **Phone caller agents:** upload production call recordings in [Post Analysis](/support/docs/phone-agent/#analyze-production-calls-post-analysis). They are scored on the same metrics as live test calls.
- **Chat agents:** create the agent in Post mode and bulk upload production transcripts as .txt or .json files. They are graded against your own requirement documents, and replies that are out of scope or break a policy, such as a refund limit, fail even when the overall score is high.

### How Phone Testing Places Real Calls

The platform places real calls. For an inbound agent, it calls the agent's actual number as a real caller would, then drives the conversation with a simulated caller. For an outbound agent, your agent calls a number the platform reserves from an outbound number pool, and the platform answers. Inbound agents reachable over a SIP trunk, rather than a phone number, can be tested over SIP. See [Phone Agent Testing](/support/docs/phone-agent/).

## Security and Data Handling

---

### Whether Your Model and Knowledge Base Leave Your Environment

No. The platform sends test inputs to your agent endpoint, the same inputs any user would send, and receives responses. The agent's internal model, knowledge base, and code do not leave your environment.

### HIPAA Compliance

TestMu AI is HIPAA certified. Healthcare teams should use synthetic patient data in test scenarios rather than real patient records.

### Who Can See Your Evaluation Results

Evaluation results are scoped to the project and accessible only to users with the appropriate role-based access control permissions within your organization.

### On-Premises and VPC Deployment

On-premises and VPC deployment is available for enterprise contracts. Contact the enterprise sales team to evaluate fit for your environment.

## Evaluation Quality and Accuracy

---

### How Verdict Accuracy Is Backed by Evidence

Every verdict is backed by evidence, the specific conversation transcripts that drove each metric score. You can review the failing transcripts and validate whether the platform's assessment matches your own judgment. Confidence levels flag when the scenario volume is too low for a reliable verdict.

### Handling a False Positive

Review the failing scenario transcript. If the assessment does not match expert human judgment, refine the agent prompt or add custom validation criteria that define the expected behavior more precisely. Tuning the criteria to your agent's context improves accuracy over time.

### Grading Your Own Business Rules

Add custom metrics: checks you write for rules specific to your business, such as asking for a PIN before changing an address, graded alongside the built-in metrics. Chat and phone caller agents define them on the **Configs** tab, under **Custom Metrics**, and you choose whether each one counts toward the pass or fail result. See [Custom Metrics](/support/docs/agent-features-and-metrics/#custom-metrics).

### Comparing Results Across Model Versions

Yes. The dashboard shows metric score deltas between test runs and tracks trends over time, so you can confirm whether a model update improved or regressed quality.

## Platform Capabilities

---

### Red Team Testing for Adversarial Attacks

Yes. Red Team scenarios attack your agent on purpose.

- **Chat agents:** a live adversarial attacker, not a single opening probe, runs seven attack types: business logic, hallucination, hijacking, prompt injection, technical injection, overreliance, and off-topic. The attacker and the grader are separate, so the score is not influenced by how hard the attacker pushed. A run that cannot be judged is reported as inconclusive, not passed.
- **Phone caller agents:** red team scenarios are generated from the agent's own prompt. The platform finds the rules the agent must follow and attacks them, prioritizing rules not yet covered, and refreshes its targets when the prompt changes. Findings appear in the Red Team section of the suite **Insights** page, each linked to its moment in the call recording.

### Multilingual Requirement Analysis and Multi-Language Testing

Yes. The platform supports AI-enabled multilingual requirement analysis, so teams can extract and analyze requirements from documents written in multiple languages. It generates test scenarios that account for multilingual support requirements and supports testing AI agents that handle multiple languages across interactions. Phone caller scenarios can run in languages including Japanese and Portuguese.

Key capabilities include:

- Multilingual requirement extraction and analysis from documents.
- AI-driven test scenario generation aligned with multilingual support requirements.
- Support for analyzing AI agents designed to operate across multiple languages.

### Model Governance for GenAI Systems

Yes. Model governance is supported through controlled workflows, version tracking, access controls, audit trails, and policy-aligned oversight across GenAI model lifecycles.

### NLP, Unstructured Data, and Metadata Support

Yes. The platform provides NLP, unstructured data processing, and metadata management for GenAI engineering workflows. It enables multi-modal document processing, requirement extraction, natural language understanding, and metadata traceability across formats using multiple LLMs.

Key capabilities include:

- Multi-modal document processing for text (PDF, DOCX, XLSX, TXT, MD), images (with OCR), audio (with speech-to-text), and video (with frame extraction and transcription).
- Structured requirement extraction from unstructured data, including entity extraction, business rules, integration points, and security requirements.
- NLP capabilities such as natural language understanding, conversational AI testing, intent recognition, context memory testing, and multi-turn reasoning.
- Metadata management with document and file metadata extraction, requirement relationship mapping, source requirement ID traceability, and cross-document linkage.
- Unstructured data processing including OCR for images, speech-to-text for audio, video frame analysis, and semantic understanding across formats.

### Out-of-the-Box Data Source Connectors

The platform provides three native out-of-the-box connectors and supports additional integrations through third-party services and secure tunnel infrastructure. This enables secure access to both public and private data sources.

The three native connectors are:

- **GitHub** for repository content extraction, README retrieval, and file access, including private repositories via secure tunnels.
- **JIRA** for ticket retrieval, project information access, and issue tracking, including private JIRA instances via secure tunnels.
- **Confluence** for page content import, documentation retrieval, and knowledge base integration, including private Confluence instances via secure tunnels.

For phone caller agents, you can also import up to five Jira tickets into the agent prompt, each shown as its own tab.

## Related TestMu AI Guides

---

- See how to [run your first evaluation from the dashboard](/support/docs/testing-your-first-ai-agent/).
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
