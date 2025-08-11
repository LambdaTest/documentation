---
id: smartui-humanize-diff
title: Humanize Diff - AI-Powered Visual Analysis
hide_title: false
sidebar_label: Humanize Diff (Visual AI)
description: A guide on using Humanize Diff, the Visual AI agent in SmartUI that identifies and summarizes meaningful, human-relevant visual changes to accelerate reviews.
keywords:
  - smartui
  - visual ai
  - humanize diff
  - visual testing
  - ai in testing
url: https://www.lambdatest.com/support/docs/smartui-humanize-diff
site_name: LambdaTest
slug: smartui-humanize-diff/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Humanize Diff: AI-Powered Visual Analysis",
          "item": "https://www.lambdatest.com/support/docs/smartui-humanize-diff"
        }]
      })
    }}
></script>

Humanize Diff introduces a **Visual AI** agent that revolutionizes visual regression testing by simulating human perception. Instead of just highlighting every pixel difference, this AI-powered feature identifies and summarizes only the meaningful, human-relevant changes between your baseline and captured screenshots. This allows you to instantly focus on significant UI shifts and understand the context of the changes without getting lost in minor, irrelevant noise.

---

## What Problems Does Humanize Diff Solve?

Traditional pixel-to-pixel comparison can be noisy and time-consuming. Humanize Diff eliminates the guesswork by providing context-aware, intelligent analysis.

| Problem | Humanize Diff Solution |
| :--- | :--- |
| Pixel diffs are cluttered with noise from anti-aliasing or rendering glitches. | The AI agent filters out irrelevant diffs and only highlights changes a human user would notice. |
| It's hard to understand the scope or meaning of a change from a simple highlighted area. | Get a plain-English summary that explains the entire change in context. |
| Reviewing hundreds of minor visual differences is slow and inefficient. | Focus your attention only on significant UI and UX regressions that impact the user experience. |

---

## How to Use Humanize Diff

<img loading="lazy" src={require('../assets/images/smart-visual-testing/humanize-diff/smartui-comparison-page.png').default} alt="SmartUI Comparison Page" className="doc_img"/>

### Step 1: Activate Visual AI Mode

Navigate to any SmartUI comparison build. In the toolbar above the screenshots, locate and click the **Visual AI** toggle. This activates the "Human eyes simulation AI agent."

<img loading="lazy" src={require('../assets/images/smart-visual-testing/humanize-diff/visual-ai-toggle.png').default} alt="Visual AI Toggle Button" className="doc_img"/>

---

### Step 2: Investigate AI-Detected Differences

Once Visual AI is active, the system automatically draws boxes around what it has identified as significant visual changes on the "Captured" screenshot. You can then interact with these boxes to learn more.

| User Interaction | Visual Feedback |
| :--- | :--- |
| **Default View** | Boxes are drawn around each meaningful visual difference the AI has detected. |
| **Hover** on a diff box | The box under your cursor highlights slightly, indicating it is interactive. |
| **Click** a diff box | The box turns red to confirm your selection, and a floating summary panel appears with a description of the change. |

---

### Step 3: Understand the AI-Generated Summary

When you click on a diff box, a panel appears with a concise, human-readable explanation of the change. This summary describes the full scope of the difference, allowing for quick recognition and understanding. For example, it might summarize a complex visual change as "Content Grid Replaced with Placeholders."

<img loading="lazy" src={require('../assets/images/smart-visual-testing/humanize-diff/ai-summary-popup.png').default} alt="AI-Generated Summary Pop-up" className="doc_img"/>

---

## Key Advantages of Humanize Diff

* **Accelerated Reviews:** Drastically reduce review time by focusing only on UI changes that matter to your users.
* **Reduced Noise:** Automatically ignore distracting, pixel-level differences caused by rendering, anti-aliasing, or other insignificant factors.
* **Clearer Communication:** Use the AI-generated summaries to write precise and easy-to-understand bug reports and team communications.
* **Intuitive Analysis:** Understand the "what" and "why" of a visual regression almost instantly, without needing to manually inspect the changes.

> **A Note on AI:** Please be aware that while the Visual AI is highly advanced, it can occasionally make mistakes. It's a powerful assistant designed to guide your attention to the most important areas.