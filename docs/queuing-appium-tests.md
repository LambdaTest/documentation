---
id: queuing-appium-tests
hide_title: true
title:  Queuing Appium Automated Tests
sidebar_label: Queuing Appium Tests
description: To avoid overuse of TestMu AI , we have put a capacity limit on the number of tests queued on our platform. Here's a brief guide on queuing your Appium automated tests.
keywords:
  - appium test session queuing
  - queuing
  - testmu ai queuing
url: https://www.testmuai.com/support/docs/queuing-appium-tests/
site_name: TestMu AI
slug: queuing-appium-tests/
canonical: https://www.testmuai.com/support/docs/queuing-appium-tests/
---
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
          "name": "Queuing And Parallel Execution",
          "item": `${BRAND_URL}/support/docs/queuing-appium-tests/`
        }]
      })
    }}
></script>

# Queuing Appium Tests
***

To avoid over-exploitation of <BrandName />, we have imposed a capacity constraint on the number of tests queued on our platform. The maximum number of queued items for your <BrandName /> account is determined by the number of concurrent sessions you are registered for. Using the formula below, you can calculate the maximum number of Appium test cases you are entitled queue.

```js
Maximum number of Appium test cases that can be queued = n + 150

Here, n = number of concurrent sessions.
```

For example, if your <BrandName /> account enables 10 concurrent sessions, your queue can hold a maximum of (10 + 150) queued test cases, or 160 queued test cases. <BrandName /> will handle the scheduling and parallel execution of Appium test cases in your queue.

If you send more tests for execution than your concurrency limit allows, they will be queued until the queue hits their maximum holding capacity. So, if you have a concurrency of 100 but send 200 tests, the "additional" tests will be queued and performed as soon as the first round of tests is completed. After the number of running tests reaches 99 in this case, one test from the queue will start running, and when the next test ends, another test from the queue will start running. This process is repeated until all of the queued tests are completed.

>
Here are some key points to keep in mind while running Appium automated tests on <BrandName /> platform.
1. As mentioned above, the number of tests that can be queued for a single instance is limited. This limit is determined by the amount of concurrent <BrandName /> sessions, and exceeding your maximum queuing capacity will result in the test cases being discarded.<br/>
2. There is also a maximum time restriction for how long a test can be in the queue. So, if you have automated test cases in a queue for more than 15 minutes, they will be timed out and will not be executed.

## Rate Limiter and Penalty
***

An account can exceed the authorized queuing limit seven times per month. For example, if an account has 100 concurrent session plans, user is allowed to queue n+150=250 requests. If one attempts to exceed the limit, the requests will be declined. At the account level, rejection events are counted monthly. So, before terminating an account, the user can request (n+150)*x (default 7 times in a month), where x is a constant per account.

* After (n+150)*2 request rejections due to exceeding the permitted queuing threshold in a month, the admin will get an email alert for service exploitation.
* After (n+150)*4 request rejections due to exceeding the allowed queuing threshold in a month, the admin will get an email alert for service exploitation.
* After (n+150)*6 request rejections due to exceeding the authorized queuing threshold in a month, the admin will get an email alert for service exploitation with last warning message.
* After (n+150)*7 request rejections due to exceeding the allowable queuing threshold in a month, Admin will receive an email notifying account suspension with a help link for account re-activation.

> That's all about queuing your Appium tests. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. 


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Queuing Appium Tests
      </span>
    </li>
  </ul>
</nav>



