---
id: playwright-lighthouse library
title: How to Generate Lighthouse Reports With Playwright Lighthouse Library
hide_title: true
sidebar_label: Playwright Lighthouse Library
description: Learn how to generate multiple Lighthouse reports using Playwright Lighthouse Library.
keywords:
- generate lighthouse reports in playwright
- generate lighthouse reports with playwright lighthouse library
- lighthouse reports lambdatest
url: https://www.lambdatest.com/support/docs/playwright-lighthouse-library/
site_name: LambdaTest
slug: playwright-lighthouse-library/
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
          "name": "Generating Lighthouse Reports With Playwright Lighthouse Library",
          "item": "https://www.lambdatest.com/support/docs/playwright-lighthouse-library/"
        }]
      })
    }}
></script>


# Generating Lighthouse Reports With Playwright Lighthouse Library
---

LambdaTest lets you perform Playwright automation while allowing you to generate Lighthouse reports with Playwright Lighthouse Libarary in a single test.

## Prerequisites
---

You can generate Lighthouse reports on LambdaTest platform while executing Playwright tests with the following steps.

1. Ensure that you have the Playwright Lighthouse Library installed in your web project.

```bash
npm install playwright-lighthouse
```

2. Export the *LIGHTHOUSE_LAMBDATEST* environment variable to your project environment.

```bash
export LIGHTHOUSE_LAMBDATEST='true'
```

## Run the Test
---

This following script performs web automation testing using the Playwright and Lighthouse libraries on the LambdaTest platform.The script navigates to the DuckDuckGo search engine and searches for the term "Playwright". After that, the script runs a Lighthouse audit on the specified URL (https://duckduckgo.com) with defined performance thresholds and report formats.

```js
import { chromium } from "playwright";
import { playAudit } from "playwright-lighthouse";

(async () => {
  let browser, page;
  try {
    const capabilities = {
      browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge` and `pw-chromium`
      browserVersion: "latest",
      "LT:Options": {
        platform: "Windows 11",
        build: "Web Performance testing",
        name: "Lighthouse test",
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        network: true,
        video: true,
        console: true,
      },
    };

    browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    });

    page = await browser.newPage();

    await page.goto("https://duckduckgo.com");
    let element = await page.locator('[name="q"]');
    await element.click();
    await element.type("Playwright");
    await element.press("Enter");

    try {
      await playAudit({
        url: "https://duckduckgo.com",
        page: page,
        thresholds: {
          performance: 50,
          accessibility: 50,
          "best-practices": 50,
          seo: 50,
          pwa: 10,
        },
        reports: {
          formats: {
            json: true,
            html: true,
            csv: true,
          },
        },
      });

      await page.evaluate((_) => {},
      `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "passed", remark: "Web performance metrics are are above the thresholds." } })}`);
    } catch (e) {
      await page.evaluate((_) => {},
      `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "failed", remark: e.stack } })}`);
      console.error(e);
    }
  } catch (e) {
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "failed", remark: e.stack } })}`);
  } finally {
    await page.close();
    await browser.close();
  }
})();
```

## View Your Test Results
---

To view your test runs that uses Playwright Lighthouse Library, go to the LambdaTest [Web Automation Dashboard](https://automation.lambdatest.com/).

<img loading="lazy" src={require('../assets/images/uploads/playwright_lighthouse_lib.png').default} alt="Image" width="1347" height="565" className="doc_img"/>






