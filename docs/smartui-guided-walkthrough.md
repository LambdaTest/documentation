---
id: smartui-guided-walkthrough
title: Guided Walkthrough of SmartUI
hide_title: false
sidebar_label: Guided Walkthrough
description: Learn how to manage tests, update the images, compare the images, perform testing using the dashboard.
keywords:
  - TestMu AI SmartUI
  - TestMu AI SmartUI help
  - TestMu AI SamrtUI documentation
  - FAQs
url: https://www.testmu.ai/support/docs/smartui-guided-walkthrough/
site_name: LambdaTest
slug: smartui-guided-walkthrough/
canonical: https://www.testmu.ai/support/docs/smartui-guided-walkthrough/

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
          "name": "Guided Walkthrough of SmartUI",
          "item": `${BRAND_URL}/support/docs/smartui-guided-walkthrough/`
        }]
      })
    }}
></script>

This page gives you a guided walkthrough of all the things on the HyperExecute Dashboard and how you can get the most out of the platform once you have successfully [run your first sample project](/support/docs/smartui-running-your-first-project/).

## Projects Page
All the tests on SmartUI gets executed as a Project. All the Projects can be found on our Projects page. Each Project has a Approver, Tags, Platform, and a Sort By section followed by the details of the number of builds and who initiated the Project.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/guided-walkthrough/1.png').default} alt="Image" className='doc_img'/>

## Projects Dashboard Details
The SmartUI dashboard presents a comparison between the baseline and the captured screenshots for visual regression testing. It provides essential insights to detect any UI anomalies.

### Key Sections
- **Baseline View :** Displays the previously captured UI state for comparison. It serves as the reference point for regression testing.
- **Captured View :** Shows the latest UI version to compare against the baseline. Differences are highlighted for easy identification.

### Diff Controls
Located at the center of the top menu, the Diff Controls allow testers to customize how visual differences are displayed, offering multiple options to refine the comparison process. The available modes are:

#### Layers
- **Captured Diffs :** Highlights the differences detected in the current captured screenshots when compared to the baseline. Ideal for spotting changes introduced in the latest version.
- **Baseline Diffs :** Displays the differences by focusing on the baseline's unique elements. Helps identify elements missing or changed in the new capture. Annotations : Allows users to add notes or highlight specific regions of interest on the screenshots. Useful for documenting findings or collaborating with team members.
- **Annotations :** Controls  the visibility of your annotations in both parallel and landscape views with a toggle, default set to off, ensuring a clean visual field when not needed.

#### Diff Options
- **Strict Mode :** Highlights exact pixel mismatches between the baseline and captured screenshots. Best suited for detailed visual inspections where high precision is required.
- **Smart Ignore :** Iintelligently hides the displacement differences, allowing you to concentrate on actual content changes that impact the user experience.

### Variants
The top menu includes browser variants, which allow cross-browser testing. Variants visible in the screenshot include: Chrome, Firefox, Edge, Playwright WebKit (Pw-Webkit). Each variant shows the same test across different browsers and resolutions, helping identify browser-specific visual issues.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/guided-walkthrough/2.png').default} alt="Image" className='doc_img'/>
