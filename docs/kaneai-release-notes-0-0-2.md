---
id: kaneai-release-notes-0-0-2
title: Version 0.0.2 - Beta
hide_title: false
sidebar_label: Version 0.0.2
description: Beta Version 0.0.2
keywords:
  - TestMu AI kaneai
  - TestMu AI kaneai help
  - TestMu AI kaneai documentation
  - FAQs
url: https://www.testmu.ai/support/docs/kaneai-release-notes-0-0-2/
site_name: LambdaTest
slug: kaneai-release-notes-0-0-2/
canonical: https://www.testmu.ai/support/docs/kaneai-release-notes-0-0-2/
---
import FeatureTag from '../src/component/featureTag';
import BugFixTag from '../src/component/bugFixTag';
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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/kaneai-release-notes-0-0-2/`
        }]
      })
    }}
></script>
## 1. Iframe, Shadow DOM, and Canvas Support <FeatureTag value="Web Agent" />
KaneAI now fully supports testing for:

- Iframe elements 🖼️
- Shadow DOM elements 🕶️
- Canvas elements 🎨

We've gone the extra mile to bring full iframe, Shadow DOM, and Canvas support in code exports 🖥️. Now, KaneAI handles these intricate UI elements with precision during script generation, making your automation journey even smoother. Whether dealing with complex nested iframes or shadow-rooted elements, KaneAI has you covered!

## 2. Auto-Scroll for Manual Interaction 🎯 <FeatureTag value="Web Agent" />
No more searching for the latest entries after clicking! KaneAI now automatically scrolls to the latest interaction in manual testing sessions, saving time and making testing more efficient.

## 3. Screenshot Modal Fix 📸 <FeatureTag value="Test Manager" /> <FeatureTag value="Web Agent" />
We’ve fixed an issue where screenshots would appear outside the modal on both KaneAI and TMS. Screenshots will now stay neatly within their designated area for better viewing.

## 4. URL Update with Objective Changes 🌐 <FeatureTag value="Test Planner" />
Whenever you update an objective, the URL will now update along with any other pre-filled fields. This improvement ensures that your URLs stay in sync with your updates for better tracking and organization.

## 5. Label Overlap Fix in TMS 🏷️ <FeatureTag value="Test Manager" />
Fixed the issue of labels overlapping other elements on the TMS UI. Now, we show a concise label such as "+12" when there's no space. Clicking it will open an overlay with all label details, improving readability and UI neatness.

## 6. Test Case Name Display Issue Fixed 🔍 <BugFixTag value="Bug Fix" /> 
Resolved an issue where test case names weren't appearing in certain situations, such as when the screen was zoomed in at 200%. This fix ensures that test case names are visible even in extreme zoom conditions.

## 7. Manual Interaction Enhancements 🖱️ <FeatureTag value="Manual Interaction" /> <FeatureTag value="Web Agent" />
We've refined manual interactions to make Click actions faster and more precise, optimizing the overall experience for testers.

## 8. Stable Template Support 📑 <FeatureTag value="Web Agent" />
Our templates have been stabilized for more reliable performance during test creation and execution.

## 9. Enhancements in Visual and Textual Query for Code Generation 🔍 <FeatureTag value="Web Agent" />
We've enhanced the visual and textual query capabilities in code exports, making your scripts even more accurate when handling complex UI elements.
