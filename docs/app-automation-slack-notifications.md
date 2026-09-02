---
id: app-automation-slack-notifications
title: Slack Notifications for App Automation
sidebar_label: Slack Notifications
description: Get real-time Slack notifications for your test sessions and build summaries on TestMu AI.
keywords:
  - slack notifications
  - app automation slack
  - slack test notifications
  - mobile testing slack
  - build notifications slack
  - testmu ai slack
url: https://www.testmuai.com/support/docs/app-automation-slack-notifications/
site_name: TestMu AI
slug: app-automation-slack-notifications/
canonical: https://www.testmuai.com/support/docs/app-automation-slack-notifications/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Slack Notifications for App Automation",
          "item": `${BRAND_URL}/support/docs/app-automation-slack-notifications/`
        }]
      })
    }}
></script>

With Slack Notifications for App Automation, you can receive real-time updates about your test sessions and build summaries directly in your Slack channels. This eliminates the need to manually monitor the dashboard and keeps your entire team informed about test execution results.

## Prerequisites

- A <BrandName /> account with App Automation access.
- [Slack Integration](/support/docs/slack-integration/) enabled on your <BrandName /> account.
- The Slack channel(s) you want to send notifications to must already exist in your Slack workspace.

## Setting Up Slack Notifications

To enable Slack notifications for your App Automation tests, add the `slackChannel` capability to your test configuration. Notifications are sent automatically when each test session completes and when the entire build finishes execution.

### Capability Reference

| Attribute | Details |
|-----------|---------|
| **Capability** | `slackChannel` |
| **Type** | String |
| **Required** | No (optional) |
| **Example** | `mobile-test-results` |

### Configuration Examples

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "Android");
capabilities.setCapability("deviceName", "Galaxy S23");
capabilities.setCapability("app", "lt://APP123456789");
capabilities.setCapability("build", "Regression Suite v2.0");
capabilities.setCapability("name", "Login Test");
capabilities.setCapability("isRealMobile", true);
//highlight-next-line
capabilities.setCapability("slackChannel", "mobile-test-results");
```

</TabItem>
<TabItem value="python" label="Python">

```python
desired_caps = {
    "platformName": "Android",
    "deviceName": "Galaxy S23",
    "app": "lt://APP123456789",
    "build": "Regression Suite v2.0",
    "name": "Login Test",
    "isRealMobile": True,
    #highlight-next-line
    "slackChannel": "mobile-test-results"
}
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const capabilities = {
  platformName: "Android",
  deviceName: "Galaxy S23",
  app: "lt://APP123456789",
  build: "Regression Suite v2.0",
  name: "Login Test",
  isRealMobile: true,
  //highlight-next-line
  slackChannel: "mobile-test-results"
};
```

</TabItem>
</Tabs>

## What Notifications You Receive

<BrandName /> sends two types of Slack notifications:

| Notification Type | When It's Sent | What It Contains |
|-------------------|----------------|------------------|
| **Session Update** | When each test session completes | Session name, status (passed/failed), device info |
| **Build Summary** | When all sessions in a build finish | Overall pass/fail count, build duration, build link |

## How Channel Routing Works

The `slackChannel` capability is set at the session level. If you update the channel name in a subsequent session under the same build, notifications for that session onward are sent to the updated channel.

:::tip
When multiple users or multiple sessions specify different channels concurrently within the same build, all channels are merged and notifications are sent to all of them.
:::

## Fallback Behavior

If the `slackChannel` capability is not provided or the specified channel is invalid, <BrandName /> follows this fallback logic:

1. **Channel provided and valid** &rarr; Notifications are sent to the specified channel.
2. **Channel provided but invalid** (e.g., channel doesn't exist or fails validation) &rarr; Notifications fall back to the default channel configured in your [Slack Integration settings](/support/docs/slack-integration/).
3. **No channel provided** &rarr; Notifications are sent to the default channel if one is configured; otherwise, notifications are skipped silently.

:::warning Important
Slack notifications never block or impact your test execution. If a notification fails to deliver for any reason, the test continues to run normally.
:::

## Related Resources

- [Slack Integration Setup](/support/docs/slack-integration/)
- [Desired Capabilities in App Automation](/support/docs/desired-capabilities-in-appium/)
- [Getting Started with App Automation](/support/docs/getting-started-with-appium-testing/)

> Got any questions?<br/>
> Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@testmuai.com](https://support.lambdatest.com/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Slack Notifications for App Automation
      </span>
    </li>
  </ul>
</nav>
