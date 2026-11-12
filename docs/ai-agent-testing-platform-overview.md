---
id: ai-agent-testing-platform-overview
title: Quality Dimensions and Go-Live Readiness for AI Agents
hide_title: false
sidebar_label: Quality Dimensions
description: How TestMu AI Agent Testing scores AI agent conversations across quality dimensions, applies pass/fail thresholds, and produces a Green, Yellow, or Red go-live verdict.
keywords:
 - quality dimensions
 - ai agent evaluation metrics
 - go-live readiness
 - agent quality thresholds
 - agent testing metrics
url: https://www.testmuai.com/support/docs/ai-agent-testing-platform-overview/
site_name: TestMu AI
slug: ai-agent-testing-platform-overview/
canonical: https://www.testmuai.com/support/docs/ai-agent-testing-platform-overview/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Quality Dimensions and Go-Live Readiness",
          "item": `${BRAND_URL}/support/docs/ai-agent-testing-platform-overview`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/ai-agent-testing-platform-overview/"
    },
    "headline": "Quality Dimensions and Go-Live Readiness for AI Agents",
    "description": "How TestMu AI Agent Testing scores AI agent conversations across quality dimensions, applies pass/fail thresholds, and produces a Green, Yellow, or Red go-live verdict.",
    "url": "https://www.testmuai.com/support/docs/ai-agent-testing-platform-overview/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "quality dimensions",
      "ai agent evaluation metrics",
      "go-live readiness"
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

TestMu AI Agent Testing scores every agent conversation across a set of quality dimensions, applies the pass/fail thresholds you configure, and rolls the results into a Green, Yellow, or Red go-live verdict. This page explains what the platform measures, how thresholds work, and how the production readiness verdict is decided.

## How the Platform Scores Conversations

---

Every completed conversation is scored by the evaluation engine across a set of quality dimensions, with configurable pass/fail thresholds per project. The exact set of metrics depends on the agent type.

| Agent type | What is scored |
|---|---|
| [Chat](/support/docs/chat-agent/) and [voice](/support/docs/voice-agent/) | 9 quality metrics, each scored from 0 to 100%. |
| [Phone caller](/support/docs/phone-agent/) (inbound or outbound) | 42 metrics in six groups: is it fast, does it sound good, does it hold a good conversation, does it get the facts right, does it get the job done, and is it safe. See [Phone Caller Agent Metrics](/support/docs/agent-features-and-metrics/#phone-agent-metrics). |
| [Video](/support/docs/video-agent/) | Pass or fail against the criteria you define, plus pillar scores from 0 to 10 for conversation flow, question handling, response quality, and avatar presentation. Only your agent is scored. |
| [Image analyzer](/support/docs/image-analyzer/) | A quality score from 0 to 100 against the source prompt, plus custom criteria such as brand guidelines and technical specs. |

Commonly scored dimensions include the following.

| Quality Dimensions | | |
|----------------------|-|-|
| Hallucination Detection | Bias Detection | Response Quality |
| Context Awareness | Completeness | Conversation Flow |
| User Satisfaction | Intent Recognition | Multi-Turn Reasoning |
| Error Handling & Recovery | Consistency | Proactive Behavior |
| Compliance & Governance | Data Privacy | Security Posture |
| Escalation Accuracy | Personality & Tone | Audit Logging Quality |

## Configure Metric Thresholds

---

Each project can set a minimum score threshold, from 0 to 100%, for each metric and choose which metrics to evaluate. A regulated deployment might require a Compliance score of at least 95% and a Data Privacy score of at least 98%, while a consumer chatbot might prioritize Conversation Flow and User Satisfaction at a lower floor. Chat agents set thresholds on the **Configs** tab, under **Metric Thresholds**, and phone caller agents in **Metric Config**.

Threshold profiles are version-controlled and can differ across environments such as development, staging, and production. Scheduled runs use the active threshold configuration. A conversation passes a dimension when its score meets or exceeds the threshold you set for it.

## Add Custom Metrics

---

Custom metrics grade rules specific to your business, such as asking for a PIN before changing an address, alongside the built-in metrics. You choose whether each one counts toward the pass or fail result.

- **Chat agents:** define them on the **Configs** tab, under **Custom Metrics**, and apply them to all or selected scenarios. **Suggest examples** drafts metrics from your scenarios. Grades appear under **Validation Criteria** with an explanation, the evidence turns, and a Pass/Fail override.
- **Phone caller agents:** each metric is a Yes/No check or a 0 to 100 rating. A project holds up to 50, and up to 20 can be attached to one scenario. See [Custom Metrics](/support/docs/agent-features-and-metrics/#custom-metrics).

## Read the Go-Live Readiness Verdict

---

The Go-Live Assessment aggregates results across all evaluated scenarios and dimensions into a three-tier production readiness verdict.

| Verdict | Overall score | Meaning |
|---------|---------------|-------------|
| 🟢 **Green** | 80 or more | All critical thresholds met. The agent behaves consistently across tested scenarios. Cleared for production. |
| 🟡 **Yellow** | 65 to 79 | Most thresholds met; one or more secondary metrics fall below target. Conditional approval with identified risk areas to monitor. |
| 🔴 **Red** | Below 65 | One or more critical thresholds not met. Specific failure categories are surfaced for remediation before production. |

Each verdict carries an overall score from 0 to 100 and a confidence level. The assessment also shows Functional, Quality, Risk, and Operational scores, blockers, action items, AI insights, and scenario coverage.

### Confidence Levels

The confidence level tells you how far to trust the verdict, based on how many scenarios backed it. A Green verdict at High confidence is a stronger signal than the same verdict at Low confidence.

| Confidence | Evaluations behind the score |
|---|---|
| **High** | 100 or more |
| **Medium** | 50 to 99 |
| **Low** | 20 to 49 |
| **Very Low** | Fewer than 20 |

For compliance and hallucination metrics especially, raise the scenario count until confidence is High before making a deployment decision.

## Behavioral Test Categories

---

Generated scenarios are organized across sixteen behavioral categories, so a run covers the full spread of agent capabilities and failure modes rather than only the happy path.

| Test Categories | | |
|----------------|-|-|
| Conversational Flow | Intent Recognition | Context & Memory |
| Multi-Turn Reasoning | User Experience | Personality & Tone |
| Proactive Behavior | Multimodal Interactions | Third-Party Integration |
| Error Handling | Consistency | Security |
| Compliance & Governance | Data Privacy | Performance |
| Recovery Mechanisms | | |

Chat scenarios can also be filtered by type: Happy Path, Negative, Edge Case, Red Team, and Integration.

The Go-Live verdict reports pass/fail rates per category, so a Yellow or Red result points at the specific category to fix.

## Track Cost and Usage

---

The platform tracks per-test execution costs, such as call minutes consumed and AI evaluation compute, and aggregates usage at the project, suite, and organization level. This gives teams budget visibility and lets them attribute testing costs across products or internal teams.

## Related TestMu AI Guides

---

- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/), from context to verdict.
