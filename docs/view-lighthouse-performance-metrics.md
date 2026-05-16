---
id: view-lighthouse-performance-metrics
title: How To View Lighthouse Performance Metrics
hide_title: true
sidebar_label: Measure Page Performance
description: View Lighthouse performance scores for your website using the TestMu AI cloud-based Selenium Grid.
keywords:
  - lighthouse performance metrics selenium
  - view lighthouse scores testmu ai
  - lighthouse audit selenium grid
  - lighthouse performance accessibility seo
  - generate lighthouse report selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/view-lighthouse-performance-metrics/
site_name: TestMu AI
slug: view-lighthouse-performance-metrics/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';


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
          "name": "View Lighthouse Performance Metrics",
          "item": `${BRAND_URL}/support/docs/view-lighthouse-performance-metrics/`
        }]
      })
    }}
></script>

# View Lighthouse Performance Metrics Using Online Selenium Grid
* * *

TestMu AI integrates [**Lighthouse**](https://developers.google.com/web/tools/lighthouse) to view performance metrics (**Lighthouse Audits**) on its cloud-based <a href={`${BRAND_URL}/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/`}>Selenium Grid</a>. You can view the scores of:

*   **Performance**,
*   **Accessibility**,
*   **Best Practices**,
*   **SEO**
*   **Progressive Web App**

metrics with TestMu AI. TestMu AI also allows you to perform cross-browser testing on 3000+ combinations of real devices, browsers, and operating systems.

> **Note:** TestMu AI currently supports **Lighthouse** on Chrome browsers for all Windows OS, macOS BigSur, macOS Mojave, and macOS Catalina.

## Prerequisites
---
Complete these steps before generating Lighthouse reports.

1. Create a <a href="https://accounts.lambdatest.com/dashboard" onClick={CookieTrackingLogin}>TestMu AI account</a>.
2. Get your TestMu AI Username and Access Key from the [Automation Dashboard](https://automation.lambdatest.com/build) or your <a href="https://accounts.lambdatest.com/dashboard" onClick={CookieTrackingLogin}>TestMu AI Profile</a>.

## How to Include Lighthouse Performance Metrics in Selenium Automation
---
Add the `performance` capability to your desired capabilities to enable Lighthouse metrics.

You can add Lighthouse performance metrics for the website you want to test using the [Desired Capabilities](/docs/selenium-automation-capabilities/). Use the **`Performance`** feature of the **Desired Capabilities Generator**.

For example, if you are using **TestNG** for Selenium Automation on TestMu AI, include the **Lighthouse** performance feature with the below code snippet:
```java
DesiredCapabilities caps = new DesiredCapabilities();
.
.

// To view performance metrics
caps.setCapability("performance", true);
```
Below is the code snippet to trigger **Lighthouse** performance metrics on TestMu AI in **macOS Catalina** with **Google Chrome** browser version **86.0**.
```java
DesiredCapabilities caps = new DesiredCapabilities();
                    caps.setCapability("browser", "Chrome");
                    caps.setCapability("version", "86");
                    caps.setCapability("platform", "macOS Catalina");
                    caps.setCapability("build", "Lighthouse Performance Demo");
                    caps.setCapability("name", "TestNG Test 3");
                    caps.setCapability("network", true);
                    caps.setCapability("visual", true); 
                    caps.setCapability("video", true);
                    caps.setCapability("console", true);
                    caps.setCapability("selenium_version", "4");

                    // To view performance metrics
                    caps.setCapability("performance", true);
```
## How to View Lighthouse Performance Metrics on TestMu AI
---
Access the Lighthouse performance report from the Automation Dashboard after running your tests.

Once you have run your Selenium automation tests on TestMu AI, you can view the Lighthouse performance metrics on the website under test.

>**Note:** The test duration should be at least 30 seconds to generate the **Lighthouse Performance Report**.

Follow the below steps to view the **Lighthouse performance metrics** on TestMu AI:

**1.**  Go to the [Automation Dashboard](https://automation.lambdatest.com). Here you can see your recently executed Selenium automation tests. For this demo, we used a sample **TestNG** script from this [GitHub repository](https://github.com/LambdaTest/Java-TestNG-Selenium). 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_1.webp').default} alt="Image"  width="1921" height="534" className="doc_img"/>

**2.**  Click on the test in which you activated the **Lighthouse performance** feature, as shown above. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_2.webp').default} alt="Image"  width="1921" height="776" className="doc_img"/>

**3.**  Click on the **Performance** tab. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_3.webp').default} alt="Image"  width="1921" height="776" className="doc_img"/>

**4.**  You can see the Lighthouse performance metrics on your screen for the website under test. For example, in the below image, the website under test is [https://lambdatest.github.io/sample-todo-app/](https://lambdatest.github.io/sample-todo-app/), which we used for our demo. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_4.webp').default} alt="Image"  width="1921" height="864" className="doc_img"/>

**5.**  Click on any of the metrics to view it in detail, along with the individual factor scores. For example, clicking on _Accessibility_ opens its details. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_5.webp').default} alt="Image" width="1714" height="813" className="doc_img"/>

Similarly, you can click on any of the performance metrics to view it in detail. Performance reports can also be downloaded in various formats. TestMu AI also helps you view the Passed Audits, individual metrics, detailed diagnosis, and improvement opportunities for that particular Lighthouse Audit.

* * *

You can read more about the Lighthouse Audits and Performance Metrics from the [web.dev](https://web.dev/lighthouse-performance/) page. If you have any questions, contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing!

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
      <span className="breadcrumbs__link">View Lighthouse Performance Metrics</span>
    </li>
  </ul>
</nav>
