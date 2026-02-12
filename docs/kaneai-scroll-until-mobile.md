---
id: kaneai-scroll-until-mobile
title: Scroll Until Element for Mobile Authoring
hide_title: false
sidebar_label: Scroll Until Element
description: Learn how to use Scroll Until Element feature in KaneAI to automate scrolling using natural language commands for mobile app testing
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai mobile app
  - scroll until element
  - natural language commands
  - mobile scrolling
url: https://www.testmuai.com/support/docs/kaneai-scroll-until-mobile/
site_name: TestMu AI
slug: kaneai-scroll-until-mobile/
canonical: https://www.testmuai.com/support/docs/kaneai-scroll-until-mobile/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Scroll Until Element",
          "item": "https://www.testmuai.com/support/docs/kaneai-scroll-until-mobile/"
        }]
      })
    }}
></script>

> This document provides a comprehensive guide on using the Scroll Until Element feature in KaneAI. It covers how to define scroll actions using simple natural language commands, eliminating the need for manual coordinate-based scripting for mobile app testing.

---

## Overview

In modern mobile and web applications, important elements are often located below the fold or deep within long, scrollable pages. Writing custom scroll logic or managing scroll coordinates manually can be fragile, difficult to maintain, and time-consuming.

The **Scroll Until Element** feature allows users to automate scrolling using **natural language commands**. Instead of controlling how to scroll, users simply describe the element they want to reach.

This feature helps by:
- **Automatically locating elements** by scrolling until the target becomes visible
- **Reducing complexity** by removing the need for technical selectors or manual scroll logic

---

## How-To Guide

### Identify the Target

Determine the element you need to reach based on its **visual representation**.

In natural language mode, elements can be referenced using:
- Visible text (e.g., *"Login button"*)
- Element type (e.g., *"input field"*)

> **Note:**  
> Natural language commands do **not** support technical selectors such as IDs, XPaths, or CSS attributes.  
> Always describe what is visibly present on the screen.

---

### Formulate the Command

Enter your command into the test editor using **action-oriented language**.  
Clearly specify what the agent should find and what action to perform once found.

**Examples:**
- `"Scroll until search bar is visible and click on it."`
- `"Scroll down until element with text 'Shipping Policy' is visible."`
- `"Scroll inside a subsection until date input field and click on it."`


---

## Use Cases

| Scenario | Example Natural Language Command |
|--------|--------------------------------|
| Visibility Check | `Scroll until search bar is visible and click on it.` |
| Text Search | `Scroll down until element with text XYZ is visible.` |
| Button Interaction | `Scroll until Submit button and click on it.` |
| Subsection Navigation | `Scroll inside a subsection until date input field and click on it.` |
| Dropdown Selection | `Scroll inside the dropdown until 'New option' and select it.` |

---

## Limitations

Please be aware of the following constraints in the current version.

---

### Mobile App Authoring

- **Scroll Limit**:  
  Maximum of **20 scroll attempts** are performed. If the element is not found, the action fails.
- **Horizontal Scrolling**:  
  ❌ Not supported (only vertical scrolling is available).
- **Nested Containers**:  
  ❌ Scrolling inside specific container elements is not supported; only the main viewport can be scrolled.
- **Directional Extremes**:  
  ❌ Commands such as *“Scroll to top”* or *“Scroll to bottom”* are not supported.

---

### Mobile Browser Authoring

- **Element Eligibility**:  
  Applicable **only to interactable elements** (buttons, links, dropdowns, inputs).  
  ❌ Plain text or static labels are not supported.
- **Native Popups**:  
  ❌ Scrolling inside native browser popups or system alerts is not supported.
- **Horizontal Scrolling**:  
  ❌ Not supported.

---

## Troubleshooting

If you encounter execution issues, refer to the table below:

| Error Message / Behavior | Potential Cause | Solution |
|------------------------|-----------------|----------|
| Maximum Scroll Limit Reached | Element is beyond 20 scrolls or not present | Verify element visibility and ensure it appears within 20 scrolls |
| Element Not Found | Non-interactable or plain text element (Mobile Browser) | Target a button, link, or input field instead |
| Scroll Timeout | Element is inside a nested container (App Agent) | Use manual scroll steps if element is not in the main viewport |
| Command Not Recognized | Usage of IDs, XPaths, or attributes | Rewrite using visible text or element type (e.g., "button") |

---

> Have any feedback or request? Reach out to us via [support@testmuai.com](mailto:support@testmuai.com) and we would be happy to hear from you.
