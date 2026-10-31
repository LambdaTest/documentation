---
id: kaneai-release-notes
title: KaneAI Release Notes
hide_title: true
toc_max_heading_level: 2
sidebar_label: Release Notes
description: Keep yourself informed about new releases from KaneAI. View our AI-powered testing assistant's detailed release notes, which include new features and enhancements.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/kaneai-release-notes/
site_name: TestMu AI
slug: kaneai-release-notes/
canonical: https://www.testmuai.com/support/docs/kaneai-release-notes/
---

import FeatureTag from '../src/component/featureTag';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

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
          "name": "Release Notes",
          "item": `${BRAND_URL}/support/docs/kaneai-release-notes/`
        }]
      })
    }}
></script>

# KaneAI Release Notes
***

KaneAI is an AI-powered next-gen testing assistant that revolutionizes software testing. Whether you're a seasoned QA professional or a developer new to testing, KaneAI simplifies complex testing processes, making them accessible to everyone.

<img loading="lazy" src={require('../assets/images/kane-ai/release-notes/release-notes.gif').default} alt="KaneAI Release Notes"  className="doc_img"/>

## KaneAI Releases
***

### September, 2024
***

| Release Number | Release Date |
|----------------|--------------|
| [Version 0.0.2](#version-0-0-2) | September 23, 2024|
| [Version 0.0.1](#version-0-0-1) | September 16, 2024|

#### Version 0.0.2 - Beta {#version-0-0-2}
***

##### 1. Iframe, Shadow DOM, and Canvas Support <FeatureTag value="Web Agent" />
***

KaneAI now fully supports testing for:

- Iframe elements 🖼️
- Shadow DOM elements 🕶️
- Canvas elements 🎨

We've gone the extra mile to bring full iframe, Shadow DOM, and Canvas support in code exports 🖥️. Now, KaneAI handles these intricate UI elements with precision during script generation, making your automation journey even smoother. Whether dealing with complex nested iframes or shadow-rooted elements, KaneAI has you covered!

##### 2. Auto-Scroll for Manual Interaction 🎯 <FeatureTag value="Web Agent" />
***

No more searching for the latest entries after clicking! KaneAI now automatically scrolls to the latest interaction in manual testing sessions, saving time and making testing more efficient.

##### 3. Screenshot Modal Fix 📸 <FeatureTag value="Test Manager" /> <FeatureTag value="Web Agent" />
***

We’ve fixed an issue where screenshots would appear outside the modal on both KaneAI and TMS. Screenshots will now stay neatly within their designated area for better viewing.

##### 4. URL Update With Objective Changes 🌐 <FeatureTag value="Test Planner" />
***

Whenever you update an objective, the URL will now update along with any other pre-filled fields. This improvement ensures that your URLs stay in sync with your updates for better tracking and organization.

##### 5. Label Overlap Fix in TMS 🏷️ <FeatureTag value="Test Manager" />
***

Fixed the issue of labels overlapping other elements on the TMS UI. Now, we show a concise label such as "+12" when there's no space. Clicking it will open an overlay with all label details, improving readability and UI neatness.

##### 6. Test Case Name Display Issue Fixed 🔍 <BugFixTag value="Bug Fix" /> 
***

Resolved an issue where test case names weren't appearing in certain situations, such as when the screen was zoomed in at 200%. This fix ensures that test case names are visible even in extreme zoom conditions.

##### 7. Manual Interaction Enhancements 🖱️ <FeatureTag value="Manual Interaction" /> <FeatureTag value="Web Agent" />
***

We've refined manual interactions to make Click actions faster and more precise, optimizing the overall experience for testers.

##### 8. Stable Template Support 📑 <FeatureTag value="Web Agent" />
***

Our templates have been stabilized for more reliable performance during test creation and execution.

##### 9. Enhancements in Visual and Textual Query for Code Generation 🔍 <FeatureTag value="Web Agent" />
***

We've enhanced the visual and textual query capabilities in code exports, making your scripts even more accurate when handling complex UI elements.

#### Version 0.0.1 - Beta {#version-0-0-1}
***

##### Proximity-Based Hub Region Allocation for Code Generation <EnhancementTag value="Enhancement" /> 
***

We’ve introduced proximity-based hub region allocation to optimize code generation performance by selecting the nearest hub region to the user. This enhancement ensures faster execution and reduced latency during test script generation.

##### Proximity-Based VM Allocation for Web Tests <EnhancementTag value="Enhancement" /> 
***

KaneAI now allocates virtual machines (VMs) for web tests based on proximity, improving test execution speed and stability by choosing the closest VM location to the user.

##### Removed Auto Trigger of Code-Export on Test Failures or Queued Instructions <EnhancementTag value="Enhancement" /> 
***

The automatic triggering of code export has been removed when instructions in the test are either failed or queued. This update provides users with better control over the export process and avoids unnecessary actions during troubleshooting.

##### Improved Stability in Manual Interaction With Multiple XPaths <EnhancementTag value="Enhancement" />
***

We've enhanced manual interactions by allowing the use of multiple XPaths, providing more stability and accuracy when interacting with elements on web pages.

##### Code Generation <BugFixTag value="Bug Fix" /> 
***

Addressed multiple issues in the code generation process, including:

- Click interception problems
- Websites failing to load correctly
- Failures in identifying and interacting with XPaths

##### Document and Element Scroll Fix in Manual Interaction <BugFixTag value="Bug Fix" /> 
***

Fixed a bug causing issues with scrolling documents and elements during manual interactions, ensuring smoother navigation and interaction within the testing interface.
