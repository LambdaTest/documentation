---
id: smartui-freeze-animations
title: Capture Screenshots by Freezing Animations
sidebar_label: Freezing Animations
description: SmartUI can now capture the screenshots of your animations running in the browser by freezing it.
keywords:
  - testmu ai
  - smart ui
  - freeze animations
  - storybook
  - animation svg screenshots
url: https://www.testmuai.com/support/docs/smartui-freeze-animations/
site_name: TestMu AI
slug: smartui-freeze-animations/
canonical: https://www.testmuai.com/support/docs/smartui-freeze-animations/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Freezing Animations",
          "item": `${BRAND_URL}/support/docs/smartui-freeze-animations/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-freeze-animations/"
    },
    "headline": "Capture Screenshots by Freezing Animations",
    "description": "SmartUI can now capture the screenshots of your animations running in the browser by freezing it.",
    "url": "https://www.testmuai.com/support/docs/smartui-freeze-animations/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "testmu ai",
      "smart ui",
      "freeze animations"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "To freeze this animation, you can add the following custom JavaScript to your page before taking a screenshot",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const freezeAnimations = () =>  {\n    // Freeze all SVGs animated using animate and animateTransform tag\n    // SVGs animated through CSS or JS will require custom solutions\n    const allSVGs = document.getElementsByTagName('svg');\n    let allSVGAnimations = [];\n    for (let svg of allSVGs) {\n        const svgAnimation = [...svg.getElementsByTagName('animate'), ...svg.getElementsByTagName('animateTransform')];\n        allSVGAnimations = allSVGAnimations.concat(svgAnimation);\n    }\n\n    allSVGAnimations.forEach(animation => {\n        const duration = animation.getAttribute('dur');\n        animation.setAttribute('begin', '0s');\n        animation.setAttribute('dur', '0s');\n    });\n}"
      }
    ],
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>
Animations, while visually appealing, can pose challenges during visual testing by causing false positives in visual diffs. These false positives often arise because animations can create minor variations between screenshots, even when there are no actual changes to the content. To address this, <BrandName /> SmartUI provides the capability to automatically freeze animations during visual testing, ensuring consistent and reliable test results.

## Freezing SVG Animations
Consider an SVG element on your page with a loading animation that spins using the transform attribute. To freeze this animation, you can add the following custom JavaScript to your page before taking a screenshot:

```javascript
const freezeAnimations = () =>  {
    // Freeze all SVGs animated using animate and animateTransform tag
    // SVGs animated through CSS or JS will require custom solutions
    const allSVGs = document.getElementsByTagName('svg');
    let allSVGAnimations = [];
    for (let svg of allSVGs) {
        const svgAnimation = [...svg.getElementsByTagName('animate'), ...svg.getElementsByTagName('animateTransform')];
        allSVGAnimations = allSVGAnimations.concat(svgAnimation);
    }

    allSVGAnimations.forEach(animation => {
        const duration = animation.getAttribute('dur');
        animation.setAttribute('begin', '0s');
        animation.setAttribute('dur', '0s');
    });
}
```
