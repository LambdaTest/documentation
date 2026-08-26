---
id: kaneai-auto-heal
title: Auto-Heal in KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Auto-Heal
description: Auto-Heal in KaneAI automatically repairs broken locators so your tests keep passing when the UI changes.
keywords:
- auto-heal
- locators
- kane ai
- kaneai auto-heal locators
- kaneai self-healing test automation
- smart heal kaneai
- AI auto-heal natural language
- self-healing kaneai hyperexecute
- kaneai locator recovery
- auto-heal broken locators kaneai
- NLP self-healing test scripts
- visual query healing kaneai
- AI native self-healing tests
url: https://www.testmuai.com/support/docs/kaneai-auto-heal/
site_name: TestMu AI
slug: kaneai-auto-heal/
canonical: https://www.testmuai.com/support/docs/kaneai-auto-heal/
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
          "name": "KaneAI Auto-Heal with HyperExecute",
          "item": `${BRAND_URL}/support/docs/kaneai-auto-heal/`
        }]
      })
    }}
></script>

# Auto-Heal in KaneAI
***

Auto-Heal automatically repairs broken element locators (IDs, XPaths, CSS selectors) at runtime, so your KaneAI-generated tests keep passing when the application UI changes.

Instead of failing the test the moment a locator breaks, KaneAI finds a new locator at runtime by re-using the original natural language instruction that generated the step. KaneAI generates these scripts across multiple languages and frameworks from natural language instructions, and Auto-Heal adds a runtime reliability layer on top.

## How It Works
***

Auto-Heal recovers a broken step in two stages, then falls back to visual matching where the DOM is not enough.

### Multi-Locator Fallback
***

- Every element KaneAI identifies is generated with **multiple locators** (XPath, CSS, ID, and others).
- During execution on HyperExecute, if the primary locator fails, the script tries the fallback locators in priority order, ranked by confidence score.

### Natural Language Locator Healing
***

- If all locators fail, KaneAI re-evaluates the **original natural language instruction** that generated the step.
- It re-parses the instruction with context from nearby elements, page structure, and DOM hierarchy, then rebuilds the locator at runtime from the intent (for example, "Click on the 'Submit' button").
- The step continues without manual intervention.

### Visual Query Fallback
***

- When a locator cannot be determined from the DOM, KaneAI uses **visual queries** to identify the element by its appearance and relative position.

### Scope
***

Auto-Heal applies to any command that requires an element locator, such as **Click**, **Type**, or **Hover**.

## Human-in-the-Loop Review
***

Self-heal and agent-driven test modifications are surfaced for human review before they become permanent. When KaneAI adapts a locator or refactors a step, the change is captured with a before/after diff and an attributed audit-log entry. A reviewer can accept, reject, or edit the adaptation from the test summary; changes are never silently committed. Confidence-scored element matching blocks low-confidence actions, and every accepted or rejected modification is recorded in Audit Logs for compliance.

## Benefits
***

Auto-Heal offers the following benefits for your test suite:

- **Reduced test maintenance:** You do not manually update locators when the application UI changes.
- **Increased stability:** Minor DOM updates or attribute changes are less likely to cause flaky tests.
- **Context-aware healing:** Recovery uses the original intent behind the instruction, not just the stored locators.
- **Faster resolution with HyperExecute:** Healing runs in real time during execution.
- **Lower CI/CD failure rate:** Test cases stay green more consistently across frequent app changes.

## Roadmap
***

The following capabilities are planned and not yet available:

- **Detailed healing reports:** Reporting of healed locators, fallback paths taken, and suggestions for locator improvements.
- **Auto-update healed locators:** Automatically writing auto-healed locators back into a new version of the KaneAI-generated test script.

## Video Explanation
***

Watch this walkthrough to see Auto-Heal in action:

**[Watch the Demo: How Auto-Heal Works in KaneAI with HyperExecute](https://app.trupeer.ai/view?slug=R9mcuH)**

The video walkthrough covers:
- How KaneAI generates scripts with fallback locators.
- A demo of locator failure and Auto-Heal in action.
- How KaneAI finds new locators using the original instruction.

## Next Steps
***

Continue with these guides:

- [Auto Healing](/support/docs/auto-healing/): Auto-heal for Selenium web automation tests.
- [Playwright Auto Healing](/support/docs/playwright-auto-healing/): Auto-heal for Playwright web automation tests.
- [Smart Heal Appium](/support/docs/smart-heal-appium/): AI-powered self-healing for mobile app automation on real devices.
- [HyperExecute Auto Healing](/support/docs/hyperexecute-auto-healing/): Auto-heal for tests executed via HyperExecute.
