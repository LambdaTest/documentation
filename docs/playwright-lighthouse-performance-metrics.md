---
id: playwright-lighthouse-performance-metrics
title: How To View Lighthouse Performance Metrics in Playwright
hide_title: true
sidebar_label: Lighthouse Performance Metrics
description: Guide to view Lighthouse Performance metrics of a website using Playwright. View the Lighthouse audits, scores, metrics, and much more.
keywords:
    - lighthouse performance 
    - lighthouse performance management 
    - google lighthouse performance 
    - google lighthouse performance score 
    - lighthouse partners performance 
    - lighthouse performance metrics 
    - lighthouse performance score 
    - lighthouse performance testing 
    - lighthouse web performance 
    - lighthouse website performance 
    - google lighthouse performance audit 
    - google lighthouse performance test 
    - google's own lighthouse for performance accessibility and seo ratings 
    - how is lighthouse performance score calculated 
    - lighthouse audit for performance 
    - lighthouse check performance 
    - LambdaTest automation
    - playwright
    - playwright online
    - online playwright automation
    - playwright automation online
    - LambdaTest playwright automation
    - playwright tutorial
    - Playwright getting started
    - lambdatest getting started
url: https://www.lambdatest.com/support/docs/playwright-lighthouse-performance-metrics/
site_name: LambdaTest
slug: playwright-lighthouse-performance-metrics/
---

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
          "name": "View Lighthouse Performance Metrics Using Playwright",
          "item": "https://www.lambdatest.com/support/docs/playwright-lighthouse-performance-metrics/"
        }]
      })
    }}
></script>

# View Lighthouse Performance Metrics Using Playwright
* * *

LambdaTest now integrates [**Lighthouse**](https://developers.google.com/web/tools/lighthouse) to view the performance metrics (**Lighthouse Audits**) while running Playwright tests on the LambdaTest cloud. You can now view the scores of:

*   **Performance**,
*   **Accessibility**,
*   **Best Practices**,
*   **SEO**
*   **Progressive Web App**

metrics with the help of LambdaTest.

:::tip Sample repository
The code sample for generating the Lighthouse Performance Metrics in the Playwright test can be found on **LambdaTest's GitHub Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

## Prerequisites

* * *

You will need a [LambdaTest account](https://accounts.lambdatest.com/login) to run your Playwright tests. Use your:

*   LambdaTest Username
*   LambdaTest Access Key

to run your tests on LambdaTest and view the **Lighthouse Performance Metrics**. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

## How to Include Lighthouse Performance Metrics in Playwright Automation?

* * *

You can easily add the Lighthouse Performance Metrics of the website you want to test by executing the `lighthouseReport` action via the test.
As of now, LambdaTest supports **Lighthouse** on Chrome, MicrosoftEdge and Chromium browsers.
Following is the code snippet for generating Lighthouse report from the Playwright if you are using JavaScript:
```js
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
  action: 'lighthouseReport',
  arguments: { url: 'https://www.example.com' }
})}`)
```

> **Note:** Generating lighthouse report within the test might increase the test duration. It is advisable to generate the lighthouse reports only in the required tests.

## How to View Lighthouse Performance Metrics on LambdaTest?
***
Once you have run your Playwright automation tests on LambdaTest platform, you can view the Lighthouse Performance Metrics on the website under test. 

Follow the below steps to view the **Lighthouse Performance Metrics** on LambdaTest platform:

**1.**  Go to the [Automation Dashboard](https://automation.lambdatest.com). Here you can see your recently executed Playwright automation tests. For this demo purpose, we have used a sample Playwright JS script, from this [GitHub repository](https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js). 

**2.**  Open the test where you executed the lighthouse command and click on the **Performance** tab.

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-perfromance-reports-list.webp').default} alt="Image"  width="1921" height="776" className="doc_img"/>

**3.**  You can see the Lighthouse Performance Metrics on your screen now, for the URL requested. For example, in the below image, the lighthouse report is generated for [https://login.live.com](https://login.live.com).

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-lighthouse-report-view.webp').default} alt="Image"  width="1921" height="864" className="doc_img"/>

Similarly, you can click on any of the performance reports to view it in detail. Performance reports can also be downloaded in various formats. Not only this, but LambdaTest also helps you view the Passed Audits, individual metrics, detailed diagnosis, and improvement opportunities about that particular Lighthouse Audit.

* * *

That's it folks! That's all about the Lighthouse Performance Metrics with LambdaTest. You can read more about the Lighthouse Audits and Performance Metrics from [web.dev](https://web.dev/lighthouse-performance/) page. If you have any doubt or questions, feel free to contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at [support@lambdatest.com](mailto:support@lambdatest.com). Happy testing! :)

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
         View Lighthouse Performance Metrics</span>
    </li>
  </ul>
</nav>
