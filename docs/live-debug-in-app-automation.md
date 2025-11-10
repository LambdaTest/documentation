---
id: live-debug-in-app-automation
title: Live Debug Your App Automation Tests
sidebar_label: Live Inspect
description: Optimize your app automation with LambdaTest's Live Debugger. Enjoy live debugging and direct interaction with real devices from the app automation dashboard.
keywords:
  - app automation
  - live debugging
  - xpath
  - app automation debugging
url: https://www.lambdatest.com/support/docs/live-debug-in-app-automation/
site_name: LambdaTest
slug: live-debug-in-app-automation/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';


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
          "name": "Live Debug Your App Automation Tests",
          "item": "https://www.lambdatest.com/support/docs/live-debug-in-app-automation/"
        }]
      })
    }}
></script>

# Live Inspect Your App Automation Tests
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
---

Optimize your [app automation testing](https://www.lambdatest.com/blog/mobile-app-testing-tools/) with LambdaTest's Real Devices UI Inspector. Now access unparalleled live debugging capabilities right from the app automation dashboard, enabling direct interaction with the test device—not just viewing the script's video. 

With features like real-time navigation, detailed UI element inspection, and the ability to capture screenshots, now significantly enhance both the efficiency and effectiveness of your [automated tests](https://www.lambdatest.com/automation-testing).

## How to use Live Debugger for App Automation

---

**Step 1:** Run your app automation test on the LambdaTest platform. You can perform app automation testing across 3000+ devices, OS and browser combinations. Using debug mode to run the test is preferred as you can inspect applications at debug points.

<img loading="lazy" src={require('../assets/images/live-debug/automation-dashboard.webp').default} alt="Live Debug App Automation" width="1365" height="632" className="doc_img"/>

**Step 2:** After executing your test, head to the LambdaTest App Automation dashboard and open your recently executed app automation test. 

<img loading="lazy" src={require('../assets/images/live-debug/select-app-automation.webp').default} alt="Live Debug App Automation" width="1365" height="632" className="doc_img"/>

**Step 3:** While an app automation test runs on the dashboard, a **Live Debug** option is available above the live test video.

<img loading="lazy" src={require('../assets/images/live-debug/live-debug-option.webp').default} alt="Live Debug App Automation" width="1365" height="632" className="doc_img"/>

>**Note:**  Live interaction on iOS devices is currently under beta. Please reach out to [support@lambdatest.com](mailto:support@lambdatest.com) for any query.

**Step 4:** You can simply click the Live Debug option to access the extended UI Inspector and inspect the frames.

<img loading="lazy" src={require('../assets/images/live-debug/inspector.webp').default} alt="Live Debug App Automation" width="1365" height="632" className="doc_img"/>

**Step 5:** Selecting the Live Debug option smoothly transitions to the enhanced UI inspector, which tailors its behavior to the user's script and allows commands to run according to the [Appium](https://www.lambdatest.com/appium) session.

**Step 6:** With Live Debugger, you can interact in real time with the real device selected for the automation test allowing you to navigate the app, inspect UI elements, and take screenshots, all without disrupting the ongoing automation script.

>**Note:**  The extended UI inspector is designed for the specific app in the script and does not support inspecting multiple apps, as each script is intended for testing a single app for focused efficiency.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Live Debug Your App Automation Tests
      </span>
    </li>
  </ul>
</nav>
