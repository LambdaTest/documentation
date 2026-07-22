---
id: getting-started-with-agent-testing-platform
title: Getting Started With the Agent Testing Platform
hide_title: false
sidebar_label: What is Agent Testing
description: Get started with the Agent Testing Platform to validate chat, voice, phone, and image AI agents against standardized quality metrics before you ship.
keywords:
 - ai agent testing platform
 - agent testing
 - chat voice phone agent testing
 - getting started with agent testing
 - ai agent evaluation
url: https://www.testmuai.com/support/docs/getting-started-with-agent-testing-platform/
site_name: TestMu AI
slug: getting-started-with-agent-testing-platform/
canonical: https://www.testmuai.com/support/docs/getting-started-with-agent-testing-platform/
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
          "name": "Getting Started with Agent Testing Platform",
          "item": `${BRAND_URL}/support/docs/getting-started-with-agent-testing-platform`
        }]
      })
    }}
></script>

# Getting Started With the Agent Testing Platform

***

TestMu AI [Agent Testing](https://www.testmuai.com/agent-testing/) Platform validates AI agents the way real users interact with them. It deploys 15+ autonomous AI testing agents to evaluate any chat, voice, phone, or image agent against standardized quality metrics, then returns a Green, Yellow, or Red production readiness verdict before and after you deploy.

It is the first platform to test chat, voice, phone, and image agents in one place. Connecting an agent takes three inputs and no SDK: upload the documents that describe it, define its intended behavior, and point the platform at its endpoint or phone number.

<div className="ytframe"> 
<div className="youtube" data-embed="DrdnovKzUQY" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>


## Why AI Agents Need a Dedicated Testing Platform

***

Traditional QA tests deterministic software: a selector either matches or it does not. AI agents return a different answer every run, so the old assertions no longer apply. Five gaps appear when teams ship agents without agent-specific testing.

- **Manual testing does not scale.** A QA engineer reviews 50 to 200 scenarios a week. Agents need thousands to cover the input space, so coverage stays a fraction of what production sees.

- **Non-determinism breaks scripted checks.** The same prompt produces different reasoning each run. There is no fixed string to assert against, so pass/fail scripts miss real failures.

- **Failure is asymmetric.** A broken button is a bug. A hallucinating healthcare bot or a biased financial agent is a liability and a compliance exposure.

- **Feedback loops are slow.** Days-long manual review blocks iteration and delays every release that changes the model or the prompt.

- **Evaluation is subjective.** Reviewers disagree on whether a response is complete or biased. Scores drift between people and cannot be audited.

## Start by Understanding the Platform

***

Learn what the platform tests and how it scores an agent before you run anything.

<div style={{display:'flex',flexWrap:'wrap',gap:'16px',margin:'20px 0'}}>
  <a href="/support/docs/architecture-and-how-evaluation-works/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Architecture &amp; How Evaluation Works</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>The five-phase evaluation loop and the 15+ testing agents that score your agent.</div>
  </a></div>

## Run Your First Test

***

Pick the interface that matches how you work and run an evaluation end to end.

<div style={{display:'flex',flexWrap:'wrap',gap:'16px',margin:'20px 0'}}>
  <a href="/support/docs/testing-your-first-ai-agent/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Quickstart (UI)</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>Create an agent, generate scenarios, and run an evaluation from the dashboard.</div>
  </a>
  <a href="/support/docs/testmu-a2a-cli/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Quickstart (CLI)</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>Test chat and phone agents from your terminal and wire them into CI/CD.</div>
  </a>
  <a href="/support/docs/chat-agent-api-integration/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Quickstart (API)</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>Connect a chat agent over its API: request format, authentication, and response schema.</div>
  </a>
  <a href="/support/docs/ai-agent-testing-platform-overview/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Quality Dimensions</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>How scoring, thresholds, and the Green, Yellow, or Red go-live verdict work.</div>
  </a>
</div>

## Test by Agent Type

***

Go deeper into the workflow and metrics for your specific agent type.

<div style={{display:'flex',flexWrap:'wrap',gap:'16px',margin:'20px 0'}}>
  <a href="/support/docs/chat-agent/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Chat Agent Testing</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>How multi-turn chat conversations are simulated and scored.</div>
  </a>
  <a href="/support/docs/phone-agent/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Phone Agent Testing</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>Real calls, voice and noise simulation, and the two phone directions.</div>
  </a>
  <a href="/support/docs/inbound-phone-agent/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Inbound Phone Agent Testing</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>The full workflow for an agent that answers calls.</div>
  </a>
  <a href="/support/docs/outbound-phone-agent/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Outbound Phone Agent Testing</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>The workflow for an agent that places calls.</div>
  </a>
  <a href="/support/docs/image-analyzer/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Image Analyzer Testing</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>Score generated images against a prompt, brand rules, and technical specs.</div>
  </a>
</div>

## Get Help

***

Find answers to common questions about the platform.

<div style={{display:'flex',flexWrap:'wrap',gap:'16px',margin:'20px 0'}}>
  <a href="/support/docs/agent-testing-platform-faqs/" style={{flex:'1 1 260px',minWidth:'240px',border:'1px solid #e2e8f0',borderRadius:'12px',padding:'20px 22px',textDecoration:'none',color:'inherit',display:'block'}}>
    <div style={{fontWeight:700,marginBottom:'6px',color:'#1e293b'}}>Agent Testing FAQs</div>
    <div style={{fontSize:'14px',color:'#64748b',lineHeight:1.5}}>Answers on multilingual support, model governance, and data connectors.</div>
  </a>
</div>
