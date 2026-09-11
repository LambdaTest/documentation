---
id: lighthouse-reports-hooks
title: How to Generate Multiple Lighthouse Reports in Selenium
hide_title: true
sidebar_label: Generate Lighthouse Reports
description: Generate multiple Lighthouse reports in a single Selenium session using Lambda Hooks.
keywords:
  - generate multiple lighthouse reports selenium
  - lighthouse lambda hooks selenium
  - lighthouse performance report automation
  - multiple lighthouse audits single session
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/generate-multiple-lighthouse-reports/
site_name: TestMu AI
slug: generate-multiple-lighthouse-reports/
canonical: https://www.testmuai.com/support/docs/generate-multiple-lighthouse-reports/
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
          "name": "Generate Multiple Lighthouse Reports Using Lambda Hooks",
          "item": `${BRAND_URL}/support/docs/generate-multiple-lighthouse-reports/`
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
      "@id": "https://www.testmuai.com/support/docs/generate-multiple-lighthouse-reports/"
    },
    "headline": "How to Generate Multiple Lighthouse Reports in Selenium",
    "description": "Generate multiple Lighthouse reports in a single Selenium session using Lambda Hooks.",
    "url": "https://www.testmuai.com/support/docs/generate-multiple-lighthouse-reports/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "generate multiple lighthouse reports selenium",
      "lighthouse lambda hooks selenium",
      "lighthouse performance report automation"
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
        "name": "To generate a Lighthouse report, use the following JavaScriptExecutor hook",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "JavascriptExecutor jse = (JavascriptExecutor)driver;\njse.executeScript(\"lambdatest_executor: {\\\"action\\\": \\\"generateLighthouseReport\\\", \\\"arguments\\\": {\\\"url\\\": \\\"<any url>\\\"}}\");"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>


# Generating Multiple Lighthouse Reports Using Lambda Hooks
---

TestMu AI lets you perform Selenium automation while generating multiple Lighthouse reports through Lambda Hooks. This guide covers the hook structure, expected behavior, and conditions under which the reports are generated or errors are thrown.

## Hook Structure
---
Use the JavaScriptExecutor hook to trigger a Lighthouse report for any URL during your test session.

To generate a Lighthouse report, use the following *JavaScriptExecutor* hook:

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {\"action\": \"generateLighthouseReport\", \"arguments\": {\"url\": \"<any url>\"}}");
```


## Generating Lighthouse Report Using Lambda Hooks
---
Execute the hook multiple times with different URLs to generate reports for each.

- You can execute the hook multiple times with a configurable URL.
- If the Lighthouse report execution fails, a *200* status response with the message *Failed to generate Lighthouse report. Please try again.* is sent. The test execution continues.
- For browsers other than Chrome, a 4XX error is thrown stating *Lighthouse report is supported only for Chrome browser.*
- If you generate Lighthouse reports using Lambda hook, turn off the `performance:true` capability.
- Successful generation of the report returns a *200* status and a response body containing:

``` java
  {
    "message": "Lighthouse report generated successfully",
    "data": "<STRINGIFIED LIGHTHOUSE JSON REPORT>"
  }
  ```
  
- Lighthouse reports for all hooks executed are visible on the TestMu AI Web Automation Dashboard under the **Performance** tab.

<img loading="lazy" src={require('../assets/images/uploads/lreports_se.png').default} alt="Image" width="1347" height="565" className="doc_img"/>

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
        How to Generate Multiple Lighthouse Reports in Selenium
      </span>
    </li>
  </ul>
</nav>
