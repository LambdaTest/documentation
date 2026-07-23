---
id: architecture-and-how-evaluation-works
title: How the AI Agent Testing Platform Evaluates Agents
hide_title: false
sidebar_label: Architecture & How Evaluation Works
description: See how the AI Agent Testing Platform works. Its layered architecture and the five-phase evaluation loop that turns uploaded context into a go-live verdict.
keywords:
 - how ai agent testing works
 - ai agent evaluation architecture
 - agent testing evaluation process
 - autonomous testing agents
 - go-live verdict
url: https://www.testmuai.com/support/docs/architecture-and-how-evaluation-works/
site_name: TestMu AI
slug: architecture-and-how-evaluation-works/
canonical: https://www.testmuai.com/support/docs/architecture-and-how-evaluation-works/
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
          "name": "Architecture & How Evaluation Works",
          "item": `${BRAND_URL}/support/docs/architecture-and-how-evaluation-works`
        }]
      })
    }}
></script>

# How the AI Agent Testing Platform Evaluates Agents

---

The AI Agent Testing Platform runs every evaluation through five phases: configure context, generate scenarios, run the testing agents, score each interaction, and return a production readiness verdict. 15+ specialized testing agents drive it, each probing one quality dimension, all in parallel against your agent's real endpoint.

You run it from one hosted web application, the REST API, the CLI, or a CI/CD pipeline. There is no SDK to install and no local infrastructure to operate.

## The Five-Phase Evaluation Loop

---

Every run follows the same path, from the context you upload to a go or no-go verdict. The phases always execute in order.

1. **Configure agent context.** Upload the documents that describe the agent (PDF, DOCX, images, audio, video, JIRA tickets, Confluence pages), write the agent prompt that defines correct behavior, and add instructions, constraints, or focus areas for the run.

2. **Generate scenarios.** The platform generates 60 to 100+ test scenarios from that context, distributed across happy-path flows, edge cases, adversarial inputs, persona-specific scenarios, and compliance checks.

3. **Run autonomous evaluation.** 15+ specialized testing agents interact with your agent through its real channel, a chat API, a voice endpoint, or a phone number, in parallel.

4. **Score each interaction.** Every scenario is scored per metric with a pass or fail result, a confidence level of High, Medium, or Low, and an evidence excerpt from the conversation. Scores aggregate per metric across the run.

5. **Return a readiness verdict.** All scores roll up into a single Green, Yellow, or Red production readiness verdict.

The agent prompt in phase one is the evaluation baseline. It tells the platform what a correct response looks like, so the quality of the verdict depends on how precisely you define it.

## The Specialized Testing Agents

---

The platform does not rely on a single evaluator. 15+ testing agents each own one quality dimension, the way a review panel produces a more reliable assessment than one reviewer. They run against the same conversation in parallel.

| Testing agent | What it evaluates |
|---|---|
| Hallucination Hunter | Detects invented facts, policies, or data |
| Bias Detector | Identifies differential treatment across demographics |
| Completeness Validator | Confirms responses fully address the user's need |
| Context Specialist | Tracks whether the agent maintains session history |
| Tone and Personality Agent | Evaluates communication style and empathy |
| Edge Case Generator | Probes with unexpected, off-script inputs |
| Escalation Handler | Validates correct handoff to human agents |
| Compliance Validator | Checks adherence to regulatory and policy requirements |
| Reasoning Validator | Assesses logical consistency across turns |
| Toxicity Screener | Flags harmful, offensive, or inappropriate outputs |
| Security Researcher | Tests for data exfiltration and prompt injection |
| Data Privacy Guardian | Checks for PII exposure and mishandling |
| Accessibility Specialist | Evaluates responses for accessibility |
| Performance Monitor | Tracks latency and response completeness under load |
| User Experience Evaluator | Assesses overall user journey quality |

## Security & red-teaming

---

Agent Testing red-teams AI agents with adversarial scenario suites aligned to the OWASP Top 10 for LLM applications: prompt injection (LLM01), insecure output handling (LLM02), sensitive-information disclosure and PII leakage (LLM06), data exfiltration, jailbreak, and policy violations. Toxicity, bias and harmful-content generation are evaluated as first-class metrics across the tested persona set. Every finding is evidence-backed - the specific conversation turns that triggered a flag are preserved with per-turn attribution and confidence intervals, exportable for regulatory documentation - and the A2A CLI runs the same scenarios in CI so security testing gates every release.

## Platform Architecture Layers

---

The platform is a single hosted web application. A request flows through six layers, from the interface you configure in to the external providers that place calls and run models.

<div style={{background:'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',borderRadius:'16px',padding:'32px 24px',margin:'24px 0',fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',border:'1px solid #e2e8f0'}}>

<div style={{textAlign:'center',marginBottom:'24px'}}>
  <div style={{fontSize:'18px',fontWeight:700,color:'#1e293b',marginBottom:'4px'}}>Platform Architecture</div>
  <div style={{fontSize:'13px',color:'#64748b'}}>End-to-end flow from test configuration to production-readiness assessment</div>
</div>

<div style={{display:'flex',justifyContent:'center',gap:'16px',marginBottom:'8px',flexWrap:'wrap'}}>
  <div style={{background:'#1e293b',color:'#fff',padding:'12px 24px',borderRadius:'10px',fontSize:'14px',fontWeight:600,textAlign:'center',minWidth:'140px'}}>
    Web Application
  </div>
  <div style={{background:'#1e293b',color:'#fff',padding:'12px 24px',borderRadius:'10px',fontSize:'14px',fontWeight:600,textAlign:'center',minWidth:'140px'}}>
    REST API / CLI
  </div>
  <div style={{background:'#1e293b',color:'#fff',padding:'12px 24px',borderRadius:'10px',fontSize:'14px',fontWeight:600,textAlign:'center',minWidth:'140px'}}>
    CI/CD Pipelines
  </div>
</div>
<div style={{textAlign:'center',fontSize:'12px',color:'#94a3b8',marginBottom:'12px'}}>Projects, scenarios, suites, and schedules are configured here</div>

<div style={{textAlign:'center',fontSize:'20px',color:'#94a3b8',margin:'4px 0'}}>▼</div>
<div style={{textAlign:'center',fontSize:'11px',color:'#64748b',marginBottom:'8px',fontStyle:'italic'}}>Authenticated requests (Bearer / API Key)</div>

<div style={{display:'flex',justifyContent:'center',marginBottom:'8px'}}>
  <div style={{background:'#fef3c7',border:'1px solid #f59e0b',padding:'10px 32px',borderRadius:'10px',fontSize:'13px',fontWeight:600,color:'#92400e',textAlign:'center'}}>
    Authentication & Authorization Layer
  </div>
</div>
<div style={{textAlign:'center',fontSize:'12px',color:'#94a3b8',marginBottom:'12px'}}>Per-organization isolation · Encrypted credential storage · Tunnel proxy for private agents</div>

<div style={{textAlign:'center',fontSize:'20px',color:'#94a3b8',margin:'4px 0'}}>▼</div>
<div style={{textAlign:'center',fontSize:'11px',color:'#64748b',marginBottom:'8px',fontStyle:'italic'}}>Validated request routed to testing modules</div>

<div style={{background:'#fff',border:'2px solid #6366f1',borderRadius:'14px',padding:'24px 20px',marginBottom:'8px'}}>
  <div style={{textAlign:'center',fontSize:'15px',fontWeight:700,color:'#4338ca',marginBottom:'4px',letterSpacing:'0.5px'}}>
    TESTING ENGINE
  </div>
  <div style={{textAlign:'center',fontSize:'12px',color:'#6366f1',marginBottom:'16px'}}>
    Orchestrates scenario execution across all agent modalities
  </div>
  <div style={{display:'flex',justifyContent:'center',gap:'12px',marginBottom:'16px',flexWrap:'wrap'}}>
    <div style={{background:'#eef2ff',border:'1px solid #c7d2fe',padding:'14px 16px',borderRadius:'10px',textAlign:'center',flex:'1',minWidth:'130px',maxWidth:'180px'}}>
      <div style={{fontSize:'20px',marginBottom:'4px'}}>📞</div>
      <div style={{fontSize:'13px',fontWeight:600,color:'#3730a3'}}>Phone Testing</div>
      <div style={{fontSize:'11px',color:'#6366f1',marginTop:'2px'}}>Inbound & Outbound</div>
      <div style={{fontSize:'10px',color:'#818cf8',marginTop:'4px'}}>Real calls via telephony providers</div>
    </div>
    <div style={{background:'#eef2ff',border:'1px solid #c7d2fe',padding:'14px 16px',borderRadius:'10px',textAlign:'center',flex:'1',minWidth:'130px',maxWidth:'180px'}}>
      <div style={{fontSize:'20px',marginBottom:'4px'}}>💬</div>
      <div style={{fontSize:'13px',fontWeight:600,color:'#3730a3'}}>Chat Testing</div>
      <div style={{fontSize:'11px',color:'#6366f1',marginTop:'2px'}}>Webhook & API</div>
      <div style={{fontSize:'10px',color:'#818cf8',marginTop:'4px'}}>Multi-turn HTTP conversations</div>
    </div>
    <div style={{background:'#eef2ff',border:'1px solid #c7d2fe',padding:'14px 16px',borderRadius:'10px',textAlign:'center',flex:'1',minWidth:'130px',maxWidth:'180px'}}>
      <div style={{fontSize:'20px',marginBottom:'4px'}}>🎙️</div>
      <div style={{fontSize:'13px',fontWeight:600,color:'#3730a3'}}>Voice Testing</div>
      <div style={{fontSize:'11px',color:'#6366f1',marginTop:'2px'}}>Real-time Multi-transport</div>
      <div style={{fontSize:'10px',color:'#818cf8',marginTop:'4px'}}>REST, WebSocket & WebRTC</div>
    </div>
    <div style={{background:'#eef2ff',border:'1px solid #c7d2fe',padding:'14px 16px',borderRadius:'10px',textAlign:'center',flex:'1',minWidth:'130px',maxWidth:'180px'}}>
      <div style={{fontSize:'20px',marginBottom:'4px'}}>🖼️</div>
      <div style={{fontSize:'13px',fontWeight:600,color:'#3730a3'}}>Image Evaluation</div>
      <div style={{fontSize:'11px',color:'#6366f1',marginTop:'2px'}}>Generation & Scoring</div>
      <div style={{fontSize:'10px',color:'#818cf8',marginTop:'4px'}}>Prompt → image → quality check</div>
    </div>
  </div>

  <div style={{borderTop:'1px dashed #c7d2fe',paddingTop:'14px',marginTop:'4px'}}>
    <div style={{textAlign:'center',fontSize:'11px',color:'#6366f1',marginBottom:'10px',fontWeight:600}}>CORE CAPABILITIES</div>
    <div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
      <div style={{background:'#f0fdf4',border:'1px solid #86efac',padding:'10px 18px',borderRadius:'8px',textAlign:'center',minWidth:'150px'}}>
        <div style={{fontSize:'12px',fontWeight:600,color:'#166534'}}>AI Scenario Generation</div>
        <div style={{fontSize:'11px',color:'#15803d',marginTop:'2px'}}>60-100+ from your docs</div>
      </div>
      <div style={{background:'#f0fdf4',border:'1px solid #86efac',padding:'10px 18px',borderRadius:'8px',textAlign:'center',minWidth:'150px'}}>
        <div style={{fontSize:'12px',fontWeight:600,color:'#166534'}}>Test Orchestration</div>
        <div style={{fontSize:'11px',color:'#15803d',marginTop:'2px'}}>Parallel suite execution</div>
      </div>
      <div style={{background:'#f0fdf4',border:'1px solid #86efac',padding:'10px 18px',borderRadius:'8px',textAlign:'center',minWidth:'150px'}}>
        <div style={{fontSize:'12px',fontWeight:600,color:'#166534'}}>Scheduling Engine</div>
        <div style={{fontSize:'11px',color:'#15803d',marginTop:'2px'}}>Cron-based regression runs</div>
      </div>
    </div>
  </div>
</div>
<div style={{textAlign:'center',fontSize:'12px',color:'#94a3b8',marginBottom:'12px'}}>Executes tests against your agent · Captures recordings & conversation logs</div>

<div style={{textAlign:'center',fontSize:'20px',color:'#94a3b8',margin:'4px 0'}}>▼</div>
<div style={{textAlign:'center',fontSize:'11px',color:'#64748b',marginBottom:'8px',fontStyle:'italic'}}>Completed conversations sent for AI-powered scoring</div>

<div style={{background:'#fff',border:'2px solid #f59e0b',borderRadius:'14px',padding:'20px',marginBottom:'8px'}}>
  <div style={{textAlign:'center',fontSize:'15px',fontWeight:700,color:'#b45309',marginBottom:'4px',letterSpacing:'0.5px'}}>
    AI EVALUATION LAYER
  </div>
  <div style={{textAlign:'center',fontSize:'12px',color:'#b45309',marginBottom:'12px'}}>
    Scores every conversation across standardized quality dimensions
  </div>
  <div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
    <div style={{background:'#fffbeb',border:'1px solid #fcd34d',padding:'8px 16px',borderRadius:'8px',fontSize:'12px',fontWeight:600,color:'#92400e',textAlign:'center'}}>
      18+ Quality Dimensions
    </div>
    <div style={{background:'#fffbeb',border:'1px solid #fcd34d',padding:'8px 16px',borderRadius:'8px',fontSize:'12px',fontWeight:600,color:'#92400e',textAlign:'center'}}>
      Recording Analysis
    </div>
    <div style={{background:'#fffbeb',border:'1px solid #fcd34d',padding:'8px 16px',borderRadius:'8px',fontSize:'12px',fontWeight:600,color:'#92400e',textAlign:'center'}}>
      Go-Live Assessment
    </div>
    <div style={{background:'#fffbeb',border:'1px solid #fcd34d',padding:'8px 16px',borderRadius:'8px',fontSize:'12px',fontWeight:600,color:'#92400e',textAlign:'center'}}>
      Threshold Scoring
    </div>
  </div>
</div>
<div style={{textAlign:'center',fontSize:'12px',color:'#94a3b8',marginBottom:'12px'}}>Produces per-scenario scores · Aggregates into Go-Live verdict (🟢 Green / 🟡 Yellow / 🔴 Red)</div>

<div style={{textAlign:'center',fontSize:'20px',color:'#94a3b8',margin:'4px 0'}}>▼</div>
<div style={{textAlign:'center',fontSize:'11px',color:'#64748b',marginBottom:'8px',fontStyle:'italic'}}>Results, recordings & assets persisted</div>

<div style={{display:'flex',justifyContent:'center',gap:'16px',flexWrap:'wrap',marginBottom:'8px'}}>
  <div style={{background:'#f1f5f9',border:'1px solid #cbd5e1',padding:'12px 20px',borderRadius:'10px',textAlign:'center',minWidth:'140px'}}>
    <div style={{fontSize:'12px',fontWeight:600,color:'#475569'}}>Managed Database</div>
    <div style={{fontSize:'11px',color:'#64748b',marginTop:'2px'}}>Scores & metadata</div>
  </div>
  <div style={{background:'#f1f5f9',border:'1px solid #cbd5e1',padding:'12px 20px',borderRadius:'10px',textAlign:'center',minWidth:'140px'}}>
    <div style={{fontSize:'12px',fontWeight:600,color:'#475569'}}>Cache & Pub/Sub</div>
    <div style={{fontSize:'11px',color:'#64748b',marginTop:'2px'}}>Live SSE streaming</div>
  </div>
  <div style={{background:'#f1f5f9',border:'1px solid #cbd5e1',padding:'12px 20px',borderRadius:'10px',textAlign:'center',minWidth:'140px'}}>
    <div style={{fontSize:'12px',fontWeight:600,color:'#475569'}}>Encrypted Object Store</div>
    <div style={{fontSize:'11px',color:'#64748b',marginTop:'2px'}}>Recordings & uploads</div>
  </div>
</div>
<div style={{textAlign:'center',fontSize:'12px',color:'#94a3b8',marginBottom:'12px'}}>All data encrypted at rest · TLS in transit · Per-org isolation</div>

<div style={{textAlign:'center',fontSize:'20px',color:'#94a3b8',margin:'4px 0'}}>▼</div>
<div style={{textAlign:'center',fontSize:'11px',color:'#64748b',marginBottom:'8px',fontStyle:'italic'}}>Platform connects to your existing providers - no vendor lock-in</div>

<div style={{background:'#fff',border:'1px solid #f9a8d4',borderRadius:'14px',padding:'16px 20px'}}>
  <div style={{textAlign:'center',fontSize:'13px',fontWeight:700,color:'#9d174d',marginBottom:'10px',letterSpacing:'0.5px'}}>
    EXTERNAL INTEGRATIONS
  </div>
  <div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
    <div style={{background:'#fdf2f8',border:'1px solid #f9a8d4',padding:'10px 18px',borderRadius:'10px',textAlign:'center',minWidth:'120px'}}>
      <div style={{fontSize:'12px',fontWeight:600,color:'#9d174d'}}>Telephony Providers</div>
      <div style={{fontSize:'10px',color:'#be185d',marginTop:'2px'}}>Call placement & routing</div>
    </div>
    <div style={{background:'#fdf2f8',border:'1px solid #f9a8d4',padding:'10px 18px',borderRadius:'10px',textAlign:'center',minWidth:'120px'}}>
      <div style={{fontSize:'12px',fontWeight:600,color:'#9d174d'}}>Voice Providers</div>
      <div style={{fontSize:'10px',color:'#be185d',marginTop:'2px'}}>Voice session management</div>
    </div>
    <div style={{background:'#fdf2f8',border:'1px solid #f9a8d4',padding:'10px 18px',borderRadius:'10px',textAlign:'center',minWidth:'120px'}}>
      <div style={{fontSize:'12px',fontWeight:600,color:'#9d174d'}}>Speech Services</div>
      <div style={{fontSize:'10px',color:'#be185d',marginTop:'2px'}}>TTS & STT engines</div>
    </div>
    <div style={{background:'#fdf2f8',border:'1px solid #f9a8d4',padding:'10px 18px',borderRadius:'10px',textAlign:'center',minWidth:'120px'}}>
      <div style={{fontSize:'12px',fontWeight:600,color:'#9d174d'}}>Issue Trackers</div>
      <div style={{fontSize:'10px',color:'#be185d',marginTop:'2px'}}>Jira, GitHub, Confluence</div>
    </div>
    <div style={{background:'#fdf2f8',border:'1px solid #f9a8d4',padding:'10px 18px',borderRadius:'10px',textAlign:'center',minWidth:'120px'}}>
      <div style={{fontSize:'12px',fontWeight:600,color:'#9d174d'}}>AI Models</div>
      <div style={{fontSize:'10px',color:'#be185d',marginTop:'2px'}}>Scenario gen & evaluation</div>
    </div>
  </div>
</div>

</div>

| Layer | What it does |
|---|---|
| Interface & access | Web app, REST API, CLI, and CI/CD pipelines configure projects, scenarios, and schedules. Requests authenticate with a Bearer token or API key. |
| Authentication & isolation | Isolates data per organization, stores third-party credentials encrypted, and reaches private agents through a secure tunnel proxy. |
| Testing engine | Runs the chat, voice, phone, and image modules, generates scenarios, orchestrates parallel execution, and schedules recurring runs. |
| Evaluation layer | Scores conversations with the testing agents, analyzes uploaded recordings, and produces the go-live assessment against configurable thresholds. |
| Data persistence | Stores scores and metadata in a managed database, streams live run status over server-sent events, and keeps recordings and uploads in encrypted object storage. |
| External integrations | Connects telephony and voice providers, speech-to-text and text-to-speech engines, issue trackers (Jira, GitHub, Confluence), and the AI models used to generate and score. |

## How the Platform Reaches Your Agent

---

The testing agents talk to your agent through the same interface real users do. The transport depends on the agent type.

- **Chat:** HTTP requests to your API endpoint.
- **Voice:** a real-time voice session over REST, WebSocket, or WebRTC.
- **Phone inbound:** a real phone call placed to the agent's number.
- **Phone outbound:** a provisioned number the agent calls, which the platform answers and scores.
- **Image:** prompts or images submitted to the generation endpoint.

Agents on a private network are reached through the secure tunnel, so the endpoint never needs a public URL.

## What the Metrics and Verdict Produce

---

The testing agents score chat and voice agents across 9 quality metrics and phone agents across 30+ call metrics. Each score carries a confidence level based on how many scenarios backed it.

The verdict is a deployment decision, not just a number. Green clears the agent for production, Yellow flags specific issues to fix first, and Red blocks deployment. Every verdict links back to the conversation turns that drove it, so a failing result points straight at the fix.

## Related Agent Testing Guides

---

- See how to [run your first evaluation from the dashboard](/support/docs/testing-your-first-ai-agent/).
