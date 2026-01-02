---
id: lighthouse-reports-hooks
title: How to Generate Multiple Lighthouse Reports in Selenium
hide_title: true
sidebar_label: Generate Multiple Lighthouse Reports
description: Learn how to generate multiple Lighthouse reports in Selenium through Lambda Hooks. 
keywords:
- generate lighthouse reports in selenium 
- generate lighthouse reports with lambda hooks
- lighthouse reports testmu ai
url: https://www.testmu.ai/support/docs/generate-multiple-lighthouse-reports
site_name: LambdaTest
slug: generate-multiple-lighthouse-reports
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Generating Multiple Lighthouse Reports Using Lambda Hooks",
          "item": `${BRAND_URL}/support/docs/generate-multiple-lighthouse-reports/`
        }]
      })
    }}
></script>


# Generating Multiple Lighthouse Reports Using Lambda Hooks
---

<BrandName /> lets you perform Selenium automation while allowing you to generate multiple Lighthouse reports through Lambda Hooks. It includes the hook structure, expected behavior, and conditions under which the reports are generated or errors are thrown.

## Hook Structure
---

To generate a Lighthouse report, the following *JavaScriptExecutor* hook is used:

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {\"action\": \"generateLighthouseReport\", \"arguments\": {\"url\": \"<any url>\"}}");
```


## Generating Lighthouse Report Using Lambda Hooks
---

- You can execute the hook multiple times with a configurable URL.
- In case of an error from Lighthouse report execution, a *200* status response with the message *Failed to generate Lighthouse report. Please try again.* will be sent. However, the test execution will continue.
- For browsers other than Chrome, a 4XX error will be thrown stating *Lighthouse report is supported only for Chrome browser.*
- If you generate Lighthouse reports using Lambda hook, ensure to turn off the `performance:true` capability.
- Successful generation of the report will return a *200* status and a response body containing:

``` java
  {
    "message": "Lighthouse report generated successfully",
    "data": "<STRINGIFIED LIGHTHOUSE JSON REPORT>"
  }
  ```
  
- Lighthouse reports for all hooks executed will be visible on the <BrandName /> Web Automation Dashboard under **Performance** tab.

<img loading="lazy" src={require('../assets/images/uploads/lreports_se.png').default} alt="Image" width="1347" height="565" className="doc_img"/>