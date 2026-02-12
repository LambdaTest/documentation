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
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GPS location",
          "item": "https://www.testmuai.com/support/docs/kaneai-rename-instructions/"
        }]
      })
    }}
></script>

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

1. Ensure the authoring session is running and the relevant step is visible.
2. Pause the session. Renaming only works in "DRAFT" session state after session is Paused. 
3. Click on the step name to make it editable.  
4. Enter the new name and press **Enter** or click outside to save.
5. Resume the session.  

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

> Have any feedback or request? Reach out to us via [support@testmu.ai](mailto:support@testmu.ai) and we would be happy to hear from you.
