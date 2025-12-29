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
url: https://www.testmu.ai/support/docs/smartui-freeze-animations
site_name: LambdaTest
slug: smartui-freeze-animations

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Freezing Animations",
          "item": "https://www.lambdatest.com/support/docs/smartui-freeze-animations/"
        }]
      })
    }}
></script>
Animations, while visually appealing, can pose challenges during visual testing by causing false positives in visual diffs. These false positives often arise because animations can create minor variations between screenshots, even when there are no actual changes to the content. To address this, LambdaTest SmartUI provides the capability to automatically freeze animations during visual testing, ensuring consistent and reliable test results.

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