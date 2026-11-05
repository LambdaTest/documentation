---
id: kaneai-rename-instructions
title: Rename Slash Command Steps
hide_title: false
sidebar_label: Rename Steps
description: Learn how to rename test steps in KaneAI for API, JS, Database, Network Assertion and Visual Comparison instructions
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai test steps
  - rename instructions
  - test step management
  - slash commands
url: https://www.testmuai.com/support/docs/kaneai-rename-instructions/
site_name: TestMu AI
slug: kaneai-rename-instructions/
canonical: https://www.testmuai.com/support/docs/kaneai-rename-instructions/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GPS location",
          "item": "https://www.testmuai.com/support/docs/kaneai-rename-instructions/"
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-rename-instructions/"
    },
    "headline": "Rename Slash Command Steps",
    "description": "Learn how to rename test steps in KaneAI for API, JS, Database, Network Assertion and Visual Comparison instructions",
    "url": "https://www.testmuai.com/support/docs/kaneai-rename-instructions/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai test steps"
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
    "dateModified": "2026-09-09T20:20:47+05:30"
  }) }}
/>

Rename test steps for API, JS, Database, Network Assertion and Visual Comparison to improve clarity and consistency without affecting functionality.

---

## Overview

The **Rename Test Steps** feature allows users to change a test step’s name without changing how it works.  

**Benefits:**  
- Improves readability of test steps  
- No impact on execution or instruction logic  
- Renamed step name stays even if instruction changes later
- Works for Web and Mobile slash command instructions
- The step names are updated even in the execution command logs.

---

## How to Use

1. Ensure the authoring session is open and the relevant step is visible.
2. Pause the session. Renaming is available only while the session is **Paused**, along with the other step editing actions. See [Session states](/support/docs/kaneai-authoring-session/#session-states).
3. Click on the step name to make it editable.  
4. Enter the new name and press **Enter** or click outside to save.
5. Click **Resume**. Your device is not restarted and no steps are re-run — the session simply returns to Authoring Steps, with the cursor back at the bottom-most step.

> **Note:** Only the step name changes; the instruction logic and behavior remain the same.


<img loading="lazy" src={require('../assets/images/kane-ai/features/rename-instructions/rename_instruction.jpg').default} alt="rename instructions" className="doc_img"/>

---

## Limitations

- Supported instruction types:  
  - **Web:** API, DB, JS, Visual comparison, Network assertion  
  - **Mobile:** API, DB, JS, Visual comparison  
- Only the **step name** can be updated (max 255 characters)  
- Renaming inside Modules is not supported  
- Step rename history is not versioned  
- Special characters `{}` appear as `{{}}` in the generated code

<img loading="lazy" src={require('../assets/images/kane-ai/features/rename-instructions/summary_page.jpg').default} alt="rename summary page" className="doc_img"/>

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|---------|
| Step name not updated | Save action missed | Re-edit and save |
| Step name resets after refresh | Network/session issue | Refresh page and retry |

---

> Have any feedback or request? Reach out to us via [support@testmuai.com](mailto:support@testmuai.com) and we would be happy to hear from you.
