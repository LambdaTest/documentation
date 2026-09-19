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
import CookieTrackingLogin, { CookieTrackingSignup } from '@site/src/component/CookieTracking';



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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/view-lighthouse-performance-metrics/"
    },
    "headline": "How To View Lighthouse Performance Metrics",
    "description": "View Lighthouse performance scores for your website using the TestMu AI cloud-based Selenium Grid.",
    "url": "https://www.testmuai.com/support/docs/view-lighthouse-performance-metrics/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "lighthouse performance metrics selenium",
      "view lighthouse scores testmu ai",
      "lighthouse audit selenium grid"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "How to Include Lighthouse Performance Metrics in Selenium Automation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities caps = new DesiredCapabilities();\n.\n.\n\n// To view performance metrics\ncaps.setCapability(\"performance\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "How to Include Lighthouse Performance Metrics in Selenium Automation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities caps = new DesiredCapabilities();\n                    caps.setCapability(\"browser\", \"Chrome\");\n                    caps.setCapability(\"version\", \"86\");\n                    caps.setCapability(\"platform\", \"macOS Catalina\");\n                    caps.setCapability(\"build\", \"Lighthouse Performance Demo\");\n                    caps.setCapability(\"name\", \"TestNG Test 3\");\n                    caps.setCapability(\"network\", true);\n                    caps.setCapability(\"visual\", true); \n                    caps.setCapability(\"video\", true);\n                    caps.setCapability(\"console\", true);\n                    caps.setCapability(\"selenium_version\", \"4\");\n\n                    // To view performance metrics\n                    caps.setCapability(\"performance\", true);"
      }
    ],
    "dateModified": "2026-09-19T19:13:32+05:30"
  }) }}
/>

# View Lighthouse Performance Metrics Using Online Selenium Grid
* * *

TestMu AI integrates [**Lighthouse**](https://developers.google.com/web/tools/lighthouse) to view performance metrics (**Lighthouse Audits**) on its cloud-based <a href={`${BRAND_URL}/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/`}>Selenium Grid</a>. You can view the scores of:

*   **Performance**,
*   **Accessibility**,
*   **Best Practices**,
*   **SEO**
*   **Progressive Web App**

metrics with TestMu AI. TestMu AI also allows you to perform cross-browser testing on 5000+ real devices and 10,000+ browser/device combinations.

> **Note:** TestMu AI currently supports **Lighthouse** on Chrome browsers for all Windows OS, macOS BigSur, macOS Mojave, and macOS Catalina.

## Prerequisites
---
Complete these steps before generating Lighthouse reports.

1. Create a <a href="https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard" onClick={CookieTrackingSignup}>TestMu AI account</a>.
2. Get your TestMu AI Username and Access Key from the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) or your <a href="https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard" onClick={CookieTrackingLogin}>TestMu AI Profile</a>.

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
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setBrowserVersion("latest");

HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("platformName", "Windows 10");
ltOptions.put("build", "Lighthouse Performance Demo");
ltOptions.put("name", "Lighthouse Test");
ltOptions.put("w3c", true);
// Enable Lighthouse performance metrics
ltOptions.put("performance", true);

browserOptions.setCapability("LT:Options", ltOptions);
```

:::note
Lighthouse performance metrics must be enabled for your account. If the **Performance** tab stays empty after your test runs (even though the test passes), confirm the feature is available on your plan.
:::
## How to View Lighthouse Performance Metrics on TestMu AI
---
Access the Lighthouse performance report from the Automation Dashboard after running your tests.

Once you have run your Selenium automation tests on TestMu AI, you can view the Lighthouse performance metrics on the website under test.

>**Note:** The test duration should be at least 30 seconds to generate the **Lighthouse Performance Report**.

Follow the below steps to view the **Lighthouse performance metrics** on TestMu AI:

**1.** Go to the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com), open your build, and select the test in which you enabled the `performance` capability. Open the **Performance** tab and choose **LightHouse Report** from the **View URLs** dropdown. You will see the five Lighthouse category scores for the page under test — **Performance**, **Accessibility**, **Best Practices**, **SEO**, and **PWA**. For this demo we ran a **TestNG** script (from this [sample repository](https://github.com/LambdaTest/Java-TestNG-Selenium)) against `https://www.testmuai.com/selenium-playground/`:

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_1.webp').default} alt="Lighthouse report on TestMu AI showing Performance 58, Accessibility 100, Best Practices 100, SEO 92, and PWA scores" width="1685" height="781" className="doc_img"/>

:::note
If your test URL redirects (for example, `www.lambdatest.com` &rarr; `www.testmuai.com`), Lighthouse shows a warning and audits the final URL. Point your test at the final URL directly for the cleanest report.
:::

**2.** Scroll down the report to view the **Performance** section and its Core Web Vitals metrics — First Contentful Paint, Largest Contentful Paint, Total Blocking Time, Cumulative Layout Shift, and Speed Index:

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_2.webp').default} alt="Lighthouse Performance score of 58 with Core Web Vitals metrics on TestMu AI" width="1064" height="780" className="doc_img"/>

**3.** Continue scrolling to the **Accessibility** section to view its score and the audited checks:

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_3.webp').default} alt="Lighthouse Accessibility score of 100 with audited checks on TestMu AI" width="1049" height="781" className="doc_img"/>

**4.** Scroll further to the **SEO** section to view its score along with the crawling and indexing checks:

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_4.webp').default} alt="Lighthouse SEO score of 92 with crawling and indexing checks on TestMu AI" width="1043" height="778" className="doc_img"/>

**5.** Keep scrolling to the **PWA** (Progressive Web App) section to view its installability and PWA-optimized checks:

<img loading="lazy" src={require('../assets/images/uploads/lighthouse_5.webp').default} alt="Lighthouse Progressive Web App (PWA) checks on TestMu AI" width="1044" height="776" className="doc_img"/>

Scroll through the report to view the detailed audits, individual factor scores, passed audits, diagnostics, and improvement opportunities for each category. Reports can also be downloaded from the **Performance** tab.

* * *

That's it folks! That's all about the Lighthouse Performance Metrics with <BrandName />. You can read more about the Lighthouse Audits and Performance Metrics from [web.dev](https://web.dev/lighthouse-performance/)page. If you have any doubt or questions, feel free to contact our experts at <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing! :)

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
