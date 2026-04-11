---
id: timeouts-issues-and-resolutions
title: Timeouts - Errors and Resolutions
sidebar_label: Resolve Timeouts
description: Resolve timeout errors in Selenium tests caused by idle sessions, network latency, queuing, and firewalls.
keywords:
  - selenium idle timeout fix
  - test queue timeout resolution
  - network latency timeout
  - firewall blocked selenium test
  - idleTimeout capability setting
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/timeouts-issues-and-resolutions/
site_name: TestMu AI
slug: timeouts-issues-and-resolutions/
canonical: https://www.testmuai.com/support/docs/timeouts-issues-and-resolutions/
---

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
          "name": "Timeouts - Errors and Resolutions",
          "item": `${BRAND_URL}/support/docs/timeouts-issues-and-resolutions/`
        }]
      })
    }}
></script>

To prevent machines from being held due to incorrect tests, there is a restriction on the number of seconds a machine stays reserved. If our servers fail to retrieve a request from your local machine for more than 120 seconds, your tests are aborted from the queue with a Timeout error message. 

## Reasons for a Timeout Error
---
Several conditions can trigger a timeout error during test execution.

There are several common reasons you may encounter a **Timeout error**.

### 1. Idle Timeout

If the TestMu AI Selenium grid detects inactivity for 120 seconds, you may encounter the below error:

**Idle Timeout:** Test was terminated because the grid has not received any requests for 120 seconds. To avoid this, use idleTimeout in desired capabilities. e.g: set 'idleTimeout':'270'.  
The timeout could also occur due to network latency, or due to improper declaration of driver.quit().

**Resolution:** You can extend the 120-second idle timeout limit up to 1800 seconds by declaring the idleTimeout capability in your desired capabilities.

```bash
"idleTimeout": "125" //extends idle timeout from 120 seconds to 125.
```

You can extend the inactivity limit to 1800 seconds, but doing so may cause performance issues. We recommend extending the idle timeout between 270-360 seconds.

***

### 2. Improper Use of Exception Handling

If your exception handling is missing the driver.quit() method, your test may lead to a timeout. driver.quit() eradicates every instance of WebDriver. It shuts down all browser windows belonging to the WebDriver and terminates the session safely.

***

### 3. Network Latency

A request triggered from your local machine sometimes fails to reach our server within 120 seconds. This could happen due to latency in your network, especially if you are using a VPN (Virtual Private Network). 

If you are using a VPN, use this tool to audit your network latency.

* * *

### 4. Queuing Timeout

The maximum number of tests allowed to be queued for your TestMu AI account depends on the number of concurrent sessions you are eligible for. Use the below formula to calculate your maximum queuing capacity.

**Maximum Queuing Capacity**
Here is an example: if your TestMu AI account is eligible for 10 concurrent sessions, then your queue can have a maximum of (10 + 150) queued test cases, i.e. 160 queued test cases. TestMu AI handles the scheduling and execution of test cases in your queue.

```javascript
Maximum number of test cases that can be queued = n + 150 

// Here, n = number of concurrent sessions.
```

Queuing timeout could happen because of the below:

**Tests in Queue Taking Too Long to Complete:** Tests are queued for only 10 minutes. If the tests in your queue exceed the 10-minute timeline, they are removed from queue. This aborts the execution of your tests, leading to a timeout error.

* * *

### 5. Firewall Protected Network

If you work within an organization that has an active firewall setup to help employees securely connect with internal servers, accessing the TestMu AI Selenium grid under a firewall-protected network may cause your tests to time out.

Browse `https://hub.lambdatest.com/wd/hub/session` to validate whether your network has restricted access to TestMu AI. It should return some response. For example: **```{"status":404,"value":{"message":"method not allowed"}}```** If **no response** is received from TestMu AI, **you may need to whitelist this host from your URL firewall.**

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
        Timeouts - Errors and Resolutions
      </span>
    </li>
  </ul>
</nav>
