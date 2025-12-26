---
id: view-lighthouse-performance-metrics
title: How To View Lighthouse Performance Metrics
hide_title: true
sidebar_label: Lighthouse Performance Metrics
description: Guide to view Lighthouse Performance metrics of a website using cloud-based online Selenium Grid. View the Lighthouse audits, scores, metrics, and much more.
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
    - selenium automation grid
    - selenium grid online
    - online selenium automation
    - selenium automation grid online
    - LambdaTest selenium automation grid
    - selenium tutorial
    - Selenium getting started
    - lambdatest getting started
url: https://www.lambdatest.com/support/docs/view-lighthouse-performance-metrics/
site_name: LambdaTest
slug: view-lighthouse-performance-metrics/
---

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
          "name": "View Lighthouse Performance Metrics Using Online Selenium Grid",
          "item": `${BRAND_URL}/support/docs/view-lighthouse-performance-metrics/`
        }]
      })
    }}
></script>

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# View Lighthouse Performance Metrics Using Online Selenium Grid
* * *

<BrandName /> now integrates [**Lighthouse**](https://developers.google.com/web/tools/lighthouse) to view the performance metrics (**Lighthouse Audits**) on its online cloud based <a href={`${BRAND_URL}/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/`}>Selenium Grid</a>. You can now view the scores of:

*   **Performance**,
*   **Accessibility**,
*   **Best Practices**,
*   **SEO**
*   **Progressive Web App**

metrics with the help of <BrandName />. <BrandName /> also allows you to perform cross-browser testing on 3000+ combinations of real devices, browsers and operating systems.

> **Note:** As of now, <BrandName /> supports **Lighthouse** on Chrome browsers for all Windows OS, macOS BigSur, macOS Mojave, and macOS Catalina.

## Prerequisites

* * *

You will need a [<BrandName /> account](https://accounts.lambdatest.com/login) to run your tests on its cloud based online Selenium Grid. Use your:

*   <BrandName /> Username
*   <BrandName /> Access Key

to run your tests on <BrandName /> and view the **Lighthouse performance metrics**. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

## How To Include Lighthouse Performance Metrics In Selenium Automation?

* * *

You can easily add the lighthouse performance metrics of the website you want to test, using the [Desired Capabilities](/docs/selenium-automation-capabilities/). Use the **`Performance`** feature of the **Desired Capabilities Generator** in order to do so.

For example, if you are using **TestNG** for Selenium Automation on <BrandName />, you can include the **Lighthouse** performance feature with the help of below code snippet:
```java
DesiredCapabilities caps = new DesiredCapabilities();
.
.

// To view performance metrics
caps.setCapability("performance", true);
```
Below is the code snippet to trigger the **Lighthouse** performance metrics on <BrandName /> in **macOS Catalina** with **Google Chrome** browser version **86.0**.
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
## How To View Lighthouse Performance Metrics On <BrandName />?
***
Once you have run your selenium automation tests on <BrandName /> platform, you can view the Lighthouse performance metrics on the website under test. 

>**Note:** It is suggested for the test duration to be of minimum 30 seconds in order to generate the **Lighthouse Performance Report**.

Follow the below steps to view the **Lighthouse performance metrics** on <BrandName /> platform:

**1.**  Go to the [Automation Dashboard](https://automation.lambdatest.com). Here you can see your recently executed Selenium automation tests. For this demo purpose, we have used a sample **TestNG** script, from this [GitHub repository](https://github.com/LambdaTest/Java-TestNG-Selenium). 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_1.webp').default} alt="Image"  width="1921" height="534" className="doc_img"/>

**2.**  Click on the test which in which you have activated the **Lighthouse performance** feature, as shown above. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_2.webp').default} alt="Image"  width="1921" height="776" className="doc_img"/>

**3.**  Click on the **Performance** tab. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_3.webp').default} alt="Image"  width="1921" height="776" className="doc_img"/>

**4.**  You can see the Lighthouse performance metrics on your screen now, for the website under test. For example, in the below image, the website under test is [https://lambdatest.github.io/sample-todo-app/](https://lambdatest.github.io/sample-todo-app/), which we have used for our demo purpose. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_4.webp').default} alt="Image"  width="1921" height="864" className="doc_img"/>

**5.**  Click on any of the metrics to know about it in detail, along with the individual factors score. For example, upon clicking on _Accessibility_ metric, it's details gets opened. 

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_5.webp').default} alt="Image" width="1714" height="813" className="doc_img"/>

Similarly, you can click on any of the performance metrics to view it in detail. Performance reports can also be downloaded in various formats. Not only this, but <BrandName /> also helps you view the Passed Audits, individual metrics, detailed diagnosis, and improvement opportunities about that particular Lighthouse Audit.

* * *

That's it folks! That's all about the Lighthouse Performance Metrics with <BrandName />. You can read more about the Lighthouse Audits and Performance Metrics from [web.dev](https://web.dev/lighthouse-performance/)page. If you have any doubt or questions, feel free to contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at [support@lambdatest.com](mailto:support@lambdatest.com). Happy testing! :)

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