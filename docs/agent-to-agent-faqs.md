---
id: agent-testing-platform-faqs
title: "Agent Testing Platform FAQs: Setup, Security, Pricing"
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
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Agent Testing Platform FAQs",
          "item": `${BRAND_URL}/support/docs/agent-testing-platform-faqs/`
        }]
      })
    }}
></script>

Common questions about TestMu AI's Agent Testing Platform, grouped by plans, setup, security, and evaluation quality.

## Plans and Pricing

---

### Availability for Small Teams and Startups

Yes. The Pay-As-You-Go tier starts at $0 with no monthly commitment, and you pay only for the credits you consume at $0.01 each. The Starter and Growth plans suit small and mid-size teams, while Scale and Enterprise add SLAs and compliance documentation for high-volume organizations.

### Free Trial and the Free Tier

The Pay-As-You-Go tier is effectively a permanent free tier. There is no time limit and no commitment. You pay only for the credits you use at $0.01 each.

### How Agent Testing Differs From LambdaTest Browser Testing

TestMu AI historically focused on browser and device testing. Agent Testing is a distinct product for AI agent quality evaluation, and it does not test browser UIs. The shared infrastructure, such as HyperExecute and the enterprise security stack, is the connection point between them.

### AI Models Behind the Testing Agents

The platform uses a hybrid stack that combines third-party large language models with TestMu AI's in-house agentic framework. Multiple LLMs contribute to evaluation reasoning, which reduces single-model blind spots. Specific model names are disclosed under NDA.

## Connecting and Running Tests

---

### Connecting an Agent Without Code Changes

No changes to your agent are required. The agent needs an accessible endpoint, which is an HTTP API, a voice endpoint, or a phone number. There is no SDK to install, and the platform interacts with the agent through the same interface production users use.

### Testing an Agent Behind a Firewall

Yes. Use the HyperExecute secure tunnel, and the agent does not need a public-facing URL. The tunnel establishes an encrypted connection from the testing infrastructure to your private endpoint.

### Scenarios Generated From a Requirements Document

The platform generates 60 to 100+ scenarios per workflow by default. You can increase that by adding more persona types, expanding focus areas, or adding scenarios manually.

### How Long a Full Evaluation Takes

A typical chat or voice evaluation runs to completion in under 2 hours for most scenario volumes. Exact run time depends on the agent's response latency, the scenario count, and available concurrency.

### Testing Against a Production or Staging Agent

Running against a production agent is technically possible, but evaluating against staging is the recommended practice. To assess real production behavior, upload recorded production calls and use post-production recording analysis.

### How Phone Testing Places Real Calls

The platform dials real phone numbers. For an inbound agent, it calls the agent's actual number as a real caller would, then drives the conversation with a simulated caller. SIP endpoint simulation is also available for teams that prefer to test through SIP without routing over the PSTN.

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

### Comparing Results Across Model Versions

Yes. The dashboard shows metric score deltas between test runs and tracks trends over time, so you can confirm whether a model update improved or regressed quality.

## Platform Capabilities

---

### Multilingual Requirement Analysis and Multi-Language Testing

Yes. The platform supports AI-enabled multilingual requirement analysis, so teams can extract and analyze requirements from documents written in multiple languages. It generates test scenarios that account for multilingual support requirements and supports testing AI agents that handle multiple languages across interactions.

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

## Related TestMu AI Guides

---

- See how to [run your first evaluation from the dashboard](/support/docs/testing-your-first-ai-agent/).
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
