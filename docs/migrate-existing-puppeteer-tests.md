---
id: migrate-puppeteer-tests
title: Migrate Existing Puppeteer Test Suites On LambdaTest
hide_title: true
sidebar_label: Migrate Puppeteer Tests
description: Learn how to run migrate existing Puppeteer test scripts or suites from your local grid on the LambdaTest platform.
keywords:
  - puppeteer testing
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing lambdatest

url: https://www.lambdatest.com/support/docs/migrate-existing-puppeteer-tests/
site_name: LambdaTest
slug: migrate-existing-puppeteer-tests/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Migrate Existing Puppeteer Test Suites",
          "item": "https://www.lambdatest.com/support/docs/migrate-existing-puppeteer-tests/"
        }]
      })
    }}
></script>

# Migrate Your Existing Puppeteer Tests
* * *

LambdaTest offers an online automation platform for test automation. Therefore you can easily migrate Puppeteer tests from your local grid to the LambdaTest platform. 

In this documentation, we look at how to migrate your existing Puppeteer test scripts (or test suites) from your local grid to LambdaTest. This lets you automate Puppeteer scripts across 40+ browsers and operating systems on LambdaTest cloud platform.

## Sample Puppeteer Script Running On A Local Machine
***

With just a few lines of code tweaks in your test script, you can migrate your Puppeteer tests running on a local grid to LambdaTest. A sample Puppeteer script below launches a browser on your local machine and runs the script.

```js
Code needs to be updated
```

## Changes In Scripts To Run Puppeteer Tests On LambdaTest
***

The above script shows that `puppeteer.launch` creates a Chromium browser window in the system where the script is running, and the rest of the script works within that window. To run the test scripts on LambdaTest platform, you will need to add `puppeteer.connect` by replacing `puppeteer.launch` as shown in the below test script.

```js
Code needs to be updated
```

In the above code snippet, you need to connect to the CDP endpoint at LambdaTest using `puppeteer.connect`. The `capabilities` variable contains additional parameters that enable a specific browser and OS combination to be assigned to your test on LambdaTest.

## Selecting Browser-OS Combinations For Test Runs
***

To run your script, you can choose any of the browsers and OS combinations. Just specify the browserName, browserVersion, platform in the capabilities JSON before calling the CDP endpoint.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Migrate Your Puppeteer Tests
      </span>
    </li>
  </ul>
</nav>


