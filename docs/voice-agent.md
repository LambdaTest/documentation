---
id: voice-agent
title: Voice Agent Testing With TestMu AI
hide_title: false
sidebar_label: Voice Agents
description: Test voice agents on the TestMu AI Agent Testing Platform. Audio conversations are transcribed and scored across the same 9 quality metrics as chat agents.
keywords:
 - voice agent testing
 - voice bot testing
 - audio conversation testing
 - voice ai evaluation
 - conversational voice testing
url: https://www.testmuai.com/support/docs/voice-agent/
site_name: TestMu AI
slug: voice-agent/
canonical: https://www.testmuai.com/support/docs/voice-agent/
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
          "name": "Voice Agent Testing",
          "item": `${BRAND_URL}/support/docs/voice-agent`
        }]
      })
    }}
></script>

# Voice Agent Testing With TestMu AI

---

The Agent Testing Platform tests a voice agent the same way it tests a chat agent, except the conversation happens as audio instead of text. It holds a spoken conversation with your agent, transcribes the responses, and scores the interaction across the same 9 quality metrics. It covers voice assistants and voice-enabled support agents.

A voice agent uses the same setup as a chat agent: upload the documents that describe it, generate scenarios, and run an evaluation. The difference is the medium, audio rather than text.

## How Voice Agent Testing Works

---

The platform conducts a voice-based conversation with your agent, following a generated scenario. The agent's voice responses are captured and transcribed, and the evaluation runs on the full audio conversation transcript.

A voice agent is functionally identical to a chat agent, so every chat feature applies: workflow-based scenario generation, test suites, endpoint profiles, the playground, thresholds, go-live assessment, and scheduled runs. See how to [test a chat agent](/support/docs/chat-agent/) for the shared setup.

## What Makes Voice Testing Different From Chat

---

Voice testing differs from chat in the medium, not the metrics.

- Conversations with the agent are conducted as audio (WAV) instead of text messages.
- The agent's voice responses are captured and transcribed for evaluation.
- Evaluation runs on the full audio conversation transcript.

## Features

---

A voice agent has all the features of a chat agent.

- **Workflow-based test generation** with document upload and source integrations (Confluence, JIRA, GitHub).
- **Scenario management** with AI generation, validation criteria, personas, and special instructions.
- **Test suites** with test profile selection and run history.
- **Endpoint profiles** with Postman collection import.
- **Test profiles** for data-driven testing.
- **Playground** for interactive testing.
- **Evaluation execution** with metric selection and HyperExecute integration.
- **Metric threshold configuration.**
- **Go-live assessment** with a production readiness verdict.
- **Scheduled runs.**

## Metrics

---

Voice agents are evaluated on the same 9 quality metrics as chat agents, each scored on a 0 to 100% scale.

| # | Metric | What it measures |
|---|--------|------------------|
| 1 | Bias Detection | Detects biased, discriminatory, or unfair responses |
| 2 | Hallucination Detection | Identifies false, fabricated, or unsupported information |
| 3 | Completeness | Whether the agent fully addresses the user's question |
| 4 | Context Awareness | How well the agent understands and maintains conversation context |
| 5 | Response Quality | Overall quality, clarity, and helpfulness of responses |
| 6 | Conversation Flow | Natural flow and coherence across multi-turn conversations |
| 7 | User Satisfaction | Estimated end-user satisfaction based on conversation quality |
| 8 | File Handling Quality | Quality of file upload and download interactions, if applicable |
| 9 | File Generation Accuracy | Accuracy of generated files against requirements, if applicable |

Every evaluation result includes the overall score, per-metric scores with pass or fail badges, detailed analysis, the full conversation transcript, identified strengths, areas for improvement, actionable recommendations, and validation criteria results.

## Related TestMu AI Guides

---

- See how to [test a chat agent](/support/docs/chat-agent/), which shares the same setup and metrics.
- See how to [test phone agents](/support/docs/phone-agent/) for spoken agents over the telephone.
- See how the platform [runs an evaluation end to end](/support/docs/architecture-and-how-evaluation-works/).
