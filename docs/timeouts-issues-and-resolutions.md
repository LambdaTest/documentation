---
id: timeouts-issues-and-resolutions
title: Timeouts - Errors and Resolutions
hide_title: false
sidebar_label: Timeouts:Issues and Resolutions
description: To make sure our machines are not held for long due to some incorrect test, we have come up with a restriction on the number of seconds that our machine is kept reserved for you.
keywords:
  - time out
  - virtual browser online
  - server timeout
  - cross browser testing app
  - developer tools
  - debugging tools
url: https://www.testmuai.com/support/docs/timeouts-issues-and-resolutions/
site_name: TestMu AI
slug: timeouts-issues-and-resolutions/
canonical: https://www.testmuai.com/support/docs/timeouts-issues-and-resolutions/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

To make sure our machines are not held for long due to some incorrect test, we have come up with a restriction on the number of seconds that our machine is kept reserved for you. In cases, where our servers fail to retrieve a request from your local machine for more than 120 seconds, then your tests are aborted from the queue with the error message related to Timeouts. 

## Reasons for a Timeout Error

There could be several reasons related to a timeouts. We are going to highlight some of the most common reasons for which you may encounter a **Timeout error**.

### 1. Idle Timeout

If the <BrandName /> Selenium grid detects inactivity for 120 seconds then you may encounter the below error:

**Idle Timeout :** Test was terminated because grid hasn't received any requests for 120 second. To avoid this use idleTimeout using desired capabilities. e.g: set 'idleTimeout':'270′.  
The timeout could also occur due to network latency, or due to improper declaration of driver.quit().

**Resolution :** You can extend the 120 second idle timeout limit up to 1800 seconds by declaring the idleTimeout capability in your desired capabilities of a test suite.

```bash
"idleTimeout": "125" //extends idle timeout from 120 seconds to 125.
```

Although, you can extend the inactivity limit to 1800 seconds but doing so may lead to performance issues. We recommend you extend the idle timeout between 270-360 seconds.

***

### 2. Improper Use Of Exception Handling

If you exception handling is missing out on driver.quit() method then your test may lead to a timeout. Driver.quit help to eradicate every instance of WebDriver. It shuts down all browser windows belonging to the WebDriver and terminates the session safely.

***

### 3. Network Latency

A request triggered from your local machine, sometimes fail to reach our server under the duration of 120 seconds. This could happen due to the latency in your network. Especially, if you are using a VPN(Virtual Private Network). 

If you are using a VPN, use this tool to audit your network latency.

* * *

### 4. Queuing Timeout

The maximum number of test that are allowed to be queued for your <BrandName /> account will depend upon the number of concurrent sessions you are eligible for. You can figure out the maximum number of test cases you are allowed to queue with the below formula.

**Maximum Queuing Capacity**
Here is an example, if your <BrandName /> account is eligible for 10 concurrent sessions, then your queue can have a maximum of (10 + 150) queued test cases i.e. 160 queued test cases. The scheduling and execution of test cases in your queue will be taken care of by <BrandName />.

```javascript
Maximum number of test cases that can be queued = n + 150 

// Here, n = number of concurrent sessions.
```

Queuing timeout could happen because of the below:

**Tests In Queue Taking Too Long To Complete :** Tests will be queued only for 10 minutes. If the tests presented in your queue exceeds the 10 minute timeline then your tests are removed from queue. This aborts the execution of your tests, leading to a timeout error.

* * *

### 5. Firewall Protected Network

If you are working under an organization which has an active firewall setup to help employees securely connect with servers that are working inside the organization's network. If you are trying to access <BrandName /> Selenium grid under a firewall protected network then it may lead to your tests facing a timeout.

Browse `https://hub.lambdatest.com/wd/hub/session` to validate whether your network has restricted access to <BrandName /> platform. It should return some response. For example: **:```{"status":404,"value":{"message":"method not allowed"}}```** If **no response** is received from <BrandName /> then **you may need to white-list this host from URL firewall.**

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/getting-started-with-testmu-automation/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Timeouts: Issues and Resolutions</span>
    </li>
  </ul>
</nav>
