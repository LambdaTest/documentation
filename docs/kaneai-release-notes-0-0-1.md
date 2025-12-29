---
id: kaneai-release-notes-0-0-1
title: Version 0.0.1 - Beta
hide_title: false
sidebar_label: Version 0.0.1
description: Beta Version 0.0.1
keywords:
  - TestMu AI kaneai
  - TestMu AI kaneai help
  - TestMu AI kaneai documentation
  - FAQs
url: https://www.testmu.ai/support/docs/kaneai-release-notes-0-0-1
site_name: LambdaTest
slug: kaneai-release-notes-0-0-1
---
import NewTag from '../src/component/newTag';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';

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
          "name": "Version",
          "item": "https://www.lambdatest.com/support/docs/kaneai-release-notes-0-0-1/"
        }]
      })
    }}
></script>

### Proximity-Based Hub Region Allocation for Code Generation <EnhancementTag value="Enhancement" /> 
We’ve introduced proximity-based hub region allocation to optimize code generation performance by selecting the nearest hub region to the user. This enhancement ensures faster execution and reduced latency during test script generation.

### Proximity-Based VM Allocation for Web Tests <EnhancementTag value="Enhancement" /> 
KaneAI now allocates virtual machines (VMs) for web tests based on proximity, improving test execution speed and stability by choosing the closest VM location to the user.

### Removed Auto Trigger of Code-Export on Test Failures or Queued Instructions <EnhancementTag value="Enhancement" /> 
The automatic triggering of code export has been removed when instructions in the test are either failed or queued. This update provides users with better control over the export process and avoids unnecessary actions during troubleshooting.

### Improved Stability in Manual Interaction with Multiple XPaths <EnhancementTag value="Enhancement" /> 
We've enhanced manual interactions by allowing the use of multiple XPaths, providing more stability and accuracy when interacting with elements on web pages.

### Code Generation <BugFixTag value="Bug Fix" /> 
Addressed multiple issues in the code generation process, including:

- Click interception problems
- Websites failing to load correctly
- Failures in identifying and interacting with XPaths

### Document and Element Scroll Fix in Manual Interaction <BugFixTag value="Bug Fix" /> 
Fixed a bug causing issues with scrolling documents and elements during manual interactions, ensuring smoother navigation and interaction within the testing interface.