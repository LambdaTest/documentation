---
id: playwright-auto-heal
title: How to use Auto Healing for your Playwright test suites
hide_title: true
sidebar_label: Playwright Auto Healing
description: Learn how to use TestMu AI Auto Healing feature in your Playwright tests to avoid test flakiness and increase reliability of your test suites.
keywords:
  - auto heal testmu ai
  - auto heal test flakiness restrictions
  - auto healing testmu ai
url: https://www.testmuai.com/support/docs/playwright-auto-healing/
site_name: TestMu AI
slug: playwright-auto-healing/
canonical: https://www.testmu.ai/support/docs/playwright-auto-healing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Auto Healing for Playwright Web Automation

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Th? <BrandName />'s Auto H?aling f?atur? for Playwright testing allows you to automatically r?cov?r from c?rtain typ?s of failur?s during th? ?x?cution of your t?st scripts. Wh?n ?nabl?d, it can significantly ?nhanc? th? robustn?ss of your t?st suit? by handling un?xp?ct?d situations and ?rrors, th?r?by r?ducing t?st flakin?ss and improving t?st r?liability of your test suites.

## Enabling Auto H?aling

---

?
To ?nabl? th? Auto H?aling f?atur?, you n??d to pass th? `autoH?al: tru?` as a capability in your Playwright configuration. For exampl?:
?

```js
const capabilities = {
  browserName: "Chrome",
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Auto Heal Build",
    name: "Playwright Auto Heal Test",
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    autoHeal: true,
  },
};
```

> **Note:** There are no Prerequisites required for enabling the auto-healing feature. You can enable the auto-healing feature directly via desired capabilities.

### Language Preferences:

---

<Tabs className="docs__val">

<TabItem value="JavaScript" label="JavaScript" default>

For **JavaScript/NodeJS**, you can use the following code:

```bash
// playwright.config.js
module.exports = {
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        'browserName': 'Chrome',
        'browserVersion': 'latest',
        'LT:Options': {
          'platform': 'Windows 10',
          'build': 'Playwright Auto Heal Build',
          'name': 'Playwright Auto Heal Test',
          'autoHeal': true,
          'user': process.env.LT_USERNAME,
          'accessKey': process.env.LT_ACCESS_KEY,
        }
      }))}`
    }
  }
};
```

</TabItem>

<TabItem value="Python" label="Python" default>

For **Python**, you can use the following code:

```bash
import asyncio
from playwright.async_api import async_playwright

capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Auto Heal Build',
        'name': 'Playwright Auto Heal Test',
        'autoHeal': True,
        'user': 'your_username',
        'accessKey': 'your_access_key',
    }
}

async def run():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.connect(
            ws_endpoint=f"wss://cdp.lambdatest.com/playwright?capabilities={capabilities}"
        )
```

</TabItem>

<TabItem value="C#" label="C#" default>

For **C#**, you can use the following code:

```bash
using Microsoft.Playwright;

var capabilities = new Dictionary<string, object>()
{
    ["browserName"] = "Chrome",
    ["browserVersion"] = "latest",
    ["LT:Options"] = new Dictionary<string, object>()
    {
        ["platform"] = "Windows 10",
        ["build"] = "Playwright Auto Heal Build",
        ["name"] = "Playwright Auto Heal Test",
        ["autoHeal"] = true,
        ["user"] = Environment.GetEnvironmentVariable("LT_USERNAME"),
        ["accessKey"] = Environment.GetEnvironmentVariable("LT_ACCESS_KEY"),
    }
};

var browser = await Playwright.Chromium.ConnectAsync($"wss://cdp.lambdatest.com/playwright?capabilities={Uri.EscapeDataString(JsonSerializer.Serialize(capabilities))}");
```

</TabItem>

<TabItem value="Java" label="Java" default>

For **Java**, you can use the following code:

```bash
import com.microsoft.playwright.*;
import java.util.HashMap;
import java.util.Map;

Map<String, Object> capabilities = new HashMap<>();
capabilities.put("browserName", "Chrome");
capabilities.put("browserVersion", "latest");

Map<String, Object> ltOptions = new HashMap<>();
ltOptions.put("platform", "Windows 10");
ltOptions.put("build", "Playwright Auto Heal Build");
ltOptions.put("name", "Playwright Auto Heal Test");
ltOptions.put("autoHeal", true);
ltOptions.put("user", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));

capabilities.put("LT:Options", ltOptions);

Browser browser = playwright.chromium().connect("wss://cdp.lambdatest.com/playwright?capabilities=" + URLEncoder.encode(new Gson().toJson(capabilities), "UTF-8"));
```

</TabItem>

</Tabs>

## How Auto Healing Works

---

<img loading="lazy" src={require('../assets/images/selenium/auto-heal.png').default} alt="add" width="1346" height="647" className="doc_img"/>

Playwright Locator's auto-healing is a sophisticated method in test automation designed to address the instability of inconsistent tests. This system smartly adjusts locators by merging attributes and context, ensuring robustness and adaptability. During runtime, it consistently monitors the web page to identify DOM (Document Object Model) alterations.

When an element is successfully located on the page using Playwright's locator methods (`page.locator('#username').click()`, etc.), its DOM path is recorded for subsequent use. If that same element is later referenced on the same page and is missing, the system evaluates the current page and formulates new locators for altered elements based on previous benchmarks.

## Auto D?t?ction of N?w Locator

---

?
In som? sc?narios, w?b ?l?m?nts might chang? th?ir locators du? to updat?s in th? w?b application. However, th? Auto H?aling f?atur? can automatically d?t?ct th? n?w locator and continu? th? t?st ?x?cution.  
?
H?r? is an ?xampl? t?st cas? d?monstrating this:
?
?

```js
const { test } = require('../lambdatest-setup');
const { expect } = require('@playwright/test');

test.describe('Browse LambdaTest in different search engines', () => {
    test('Test Auto Heal', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/auto-healing');
        await page.waitForTimeout(1000); // sleep 1s

        // Locate element before DOM change
        let buttonBeforeDOMChange = await page.locator('#username'); // equivalent to FindElement ByID
        await buttonBeforeDOMChange.click();

        // Trigger DOM change
        await page.click('p.selenium_btn');
        await page.waitForTimeout(1000); // sleep 1s

        // Try to locate the same element after DOM change
        // Auto healing will automatically detect the new locator
        let buttonAfterDOMChange = await page.locator('#username'); // again check for element
        await buttonAfterDOMChange.click();

        await page.waitForTimeout(1000); // sleep 1s
    });
});
?
```

?
In the above t?st cas?, w? ar? interacting with an element before and after a DOM change occurs on <BrandName />'s auto-healing playground. Th? Auto H?aling f?atur? will automatically d?t?ct if the element's locator has changed and adapt accordingly, ensuring the test continues to execute successfully.
?
To run the test, execute the below command:
?

```bash
npx playwright test auto-heal.spec.js
```

## Benefits Of Auto Healing

---

Self-healing plays a vital role in refining the Playwright test automation process. Here are its primary advantages:

1. **Increased Test Stability:**
   The auto-healing feature of <BrandName /> ensures that Playwright tests remain consistent and stable, even when faced with minor changes in the web application's UI. By dynamically adjusting to these changes, the AI Native auto-healing feature overcomes test flakiness, providing stability and reliability to your test suite in no time.

2. **Reduced Test Maintenance:**
   One of the significant challenges in test automation is the constant need to update and maintain test scripts due to evolving application interfaces. With <BrandName />'s auto-healing capability for Playwright, the system automatically adapts to these changes, reducing the manual effort required to update test scripts, and saving time and resources.

3. **Intelligent Test Automation:**
   <BrandName />'s auto-healing feature is not just about adapting to changes; it's about doing so intelligently. The auto-healing feature adds intelligence to the automated Playwright tests and enables them to dynamically adapt to the changes in an application and its environment. It typically involves applying artificial intelligence and machine learning algorithms to the self-healing of tests.

4. **Reliable CI/CD pipeline:**
   Continuous Integration and Continuous Deployment (CI/CD) pipelines require reliable and consistent test results to ensure that the software development process is smooth and efficient. With the auto-healing feature, <BrandName /> ensures that the Playwright tests feeding into the CI/CD pipeline are stable, reducing the chances of unexpected failures and ensuring a smoother development and deployment process.

## Limitations of Auto Healing

---

?
Whil? th? Auto H?aling f?atur? is d?sign?d to handl? a wid? rang? of issu?s, th?r? ar? c?rtain limitations to b? awar? of:
?

- **Non-r?cov?rabl? errors**: Auto H?aling cannot r?cov?r from c?rtain typ?s of ?rrors, such as Playwright browser initialization ?rrors, network connectivity issues, or syst?m-l?v?l failur?s.
  ?
- **T?st accuracy**: Whil? Auto H?aling can r?duc? t?st flakin?ss, it may also mask r?al issu?s in your web application or t?st scripts. It's important to r?vi?w th? logs and und?rstand why a t?st n??d?d h?aling.
  ?
- **P?rformanc? impact**: Whil? typically minimal, ?nabling Auto H?aling can hav? a slight impact on t?st ?x?cution tim? du? to th? additional ch?cks and r?cov?ry m?chanisms.

- **Limited scope**: Auto Healing works best with simple locator changes (ID, class, attribute modifications) and may not be effective for complete page redesigns or fundamental workflow changes.
  ?
  Th? Auto H?aling f?atur? is a functionality to ?nhanc? th? robustn?ss of your Playwright t?st suit?, but it do?s not r?plac? good t?st d?sign and ?rror handling practic?s. Always ?nsur? your t?sts ar? w?ll-d?sign?d, hav? prop?r ?rror handling in plac?, and ar? r?vi?w?d r?gularly for issu?s that may b? mask?d by th? Auto H?aling f?atur?.  
  ?

---

> That was all you need to know for the Auto-Healing feature with Playwright. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        Auto-Healing Playwright
      </span>
    </li>
  </ul>
</nav>
