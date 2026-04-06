---
id: command-annotations
title: Logging Contextual Information Using Command Annotations
hide_title: true
sidebar_label: Add Test Metadata
description: Send custom logs from your test scripts to the TestMu AI dashboard using command annotations.
keywords:
  - command annotations selenium logging
  - send custom logs testmu ai
  - javascript executor command annotations
  - filter command logs automation dashboard
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/command-annotations/
site_name: TestMu AI
slug: command-annotations/
canonical: https://www.testmuai.com/support/docs/command-annotations/
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
          "name": "Command Annotations",
          "item": `${BRAND_URL}/support/docs/command-annotations/`
        }]
      })
    }}
></script>

# Command Annotations
---

Your test script holds important details about the test, like its description, when different scenarios start and finish, and other data you may want to show on the console for debugging and tracking purposes.

By using command annotations, you can integrate configurations in your tests that log this information on TestMu AI. These logs are available on the TestMu AI Automation Dashboard alongside the command logs, providing a quick way to search and navigate to a specific test section and troubleshoot any failed tests.

## Sending Logs to TestMu AI Using JavaScriptExecutor
---
Use the JavaScriptExecutor to send annotations directly from your test script to the dashboard.

You can send annotations to TestMu AI directly from your test script using the annotate action through the JavaScriptExecutor.

Here is an example written in Java:

```java
JavascriptExecutor jse = (JavascriptExecutor)driver;
jse.executeScript("lambdatest_executor: {\"action\": \"stepcontext\", \"arguments\": {\"data\": \"<any string>\", \"level\": \"<info/warn/debug/error>\"}}");
```

The arguments passed in the JavaScript method for setting the status and the corresponding reason for the test are `data` and `level`.

* **data**: Accepts a value in string data type.

* **level**: Accepts the standard log severity levels: info, debug, warn, and error. This argument is optional with the default value of info.

## Searching and Filtering
---
Locate and filter your annotated logs in the All Commands tab on the Automation Dashboard.

Once your test script has sent command annotations to TestMu AI, you can locate all the annotations pushed to the logs in the **All Commands** tab on the TestMu AI Automation Dashboard. This search feature is especially useful for long-duration test sessions. Additionally, you can filter these annotated logs based on severity levels and customize the selection according to your logging patterns.

<img loading="lazy" src={require('../assets/images/command-annotations/com_ano_db.png').default} alt="command annotations" width="2560" height="976" className="doc_img"/>

---

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
        Command Annotations
      </span>
    </li>
  </ul>
</nav>
