---
id: accessibility-technical-faq
title: Technical Requirements FAQs
hide_title: false
sidebar_label: Technical Requirements
description: This document consists of frequently asked questions related to the accessibility tool of LambdaTest. It will help you to answer some of your common questions.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - selenium
    - Automation
    - Accessibility Testing Settings
    - Accessibility FAQa
url: https://www.lambdatest.com/support/docs/accessibility-technical-faq/
site_name: LambdaTest
slug: accessibility-technical-faq/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Accessibility FAQ",
          "item": "https://www.lambdatest.com/support/docs/accessibility-technical-faq/"
        }]
      })
    }}
></script>
### Which browsers are supported?
Our accessibility testing tools are optimized for **Chromium-based** browsers, **version 90 and above**. This includes **Google Chrome, Microsoft Edge, Opera, and other Chromium-based browsers**. Using the latest version ensures the best compatibility and performance with our tools.

### Do I need to add explicit wait time to scan for accessibility?
No, you don't need to add explicit wait times. Our advanced tools are designed with built-in intelligence to automatically detect when DOM elements are loaded. They then immediately initiate accessibility scans for these elements. This feature ensures a seamless and efficient testing process without manual intervention for timing.