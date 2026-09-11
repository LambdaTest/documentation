---
id: playwright-auto-heal
title: How to use Auto Healing for your Playwright test suites
hide_title: true
sidebar_label: Auto Healing
description: Learn how to use TestMu AI Auto Healing feature in your Playwright tests to avoid test flakiness and increase reliability of your test suites.
keywords:
  - auto heal testmu ai
  - auto heal test flakiness restrictions
  - auto healing testmu ai
  - playwright self-healing locators
  - auto-heal broken locators playwright
  - smart heal playwright
  - self-healing playwright tests
  - autoheal playwright lambdatest
  - playwright locator recovery
  - AI self-healing playwright
  - fix broken locators playwright
  - DOM healing playwright tests
  - playwright flaky test fix
url: https://www.testmuai.com/support/docs/playwright-auto-healing/
site_name: TestMu AI
slug: playwright-auto-healing/
canonical: https://www.testmuai.com/support/docs/playwright-auto-healing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "How to use Auto Healing for your Playwright test suites",
          "item": `${BRAND_URL}/support/docs/playwright-auto-healing/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-auto-healing/"
    },
    "headline": "How to use Auto Healing for your Playwright test suites",
    "description": "Learn how to use TestMu AI Auto Healing feature in your Playwright tests to avoid test flakiness and increase reliability of your test suites.",
    "url": "https://www.testmuai.com/support/docs/playwright-auto-healing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "auto heal testmu ai",
      "auto heal test flakiness restrictions",
      "auto healing testmu ai"
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
        "name": "For example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  browserName: \"Chrome\",\n  browserVersion: \"latest\",\n  \"LT:Options\": {\n    platform: \"Windows 10\",\n    build: \"Playwright Auto Heal Build\",\n    name: \"Playwright Auto Heal Test\",\n    user: process.env.LT_USERNAME,\n    accessKey: process.env.LT_ACCESS_KEY,\n    network: true,\n    video: true,\n    console: true,\n    autoHeal: true,\n  },\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For JavaScript/NodeJS, you can use the following code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// playwright.config.js\nmodule.exports = {\n  use: {\n    connectOptions: {\n      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({\n        'browserName': 'Chrome',\n        'browserVersion': 'latest',\n        'LT:Options': {\n          'platform': 'Windows 10',\n          'build': 'Playwright Auto Heal Build',\n          'name': 'Playwright Auto Heal Test',\n          'autoHeal': true,\n          'user': process.env.LT_USERNAME,\n          'accessKey': process.env.LT_ACCESS_KEY,\n        }\n      }))}`\n    }\n  }\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Python, you can use the following code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import asyncio\nimport json\nimport urllib.parse\nfrom playwright.async_api import async_playwright\n\ncapabilities = {\n    'browserName': 'Chrome',\n    'browserVersion': 'latest',\n    'LT:Options': {\n        'platform': 'Windows 10',\n        'build': 'Playwright Auto Heal Build',\n        'name': 'Playwright Auto Heal Test',\n        'autoHeal': True,\n        'user': 'your_username',\n        'accessKey': 'your_access_key',\n    }\n}\n\nasync def run():\n    async with async_playwright() as playwright:\n        browser = await playwright.chromium.connect(\n            ws_endpoint=f\"wss://cdp.lambdatest.com/playwright?capabilities={urllib.parse.quote(json.dumps(capabilities))}\"\n        )"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For C#, you can use the following code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "using Microsoft.Playwright;\n\nvar capabilities = new Dictionary<string, object>()\n{\n    [\"browserName\"] = \"Chrome\",\n    [\"browserVersion\"] = \"latest\",\n    [\"LT:Options\"] = new Dictionary<string, object>()\n    {\n        [\"platform\"] = \"Windows 10\",\n        [\"build\"] = \"Playwright Auto Heal Build\",\n        [\"name\"] = \"Playwright Auto Heal Test\",\n        [\"autoHeal\"] = true,\n        [\"user\"] = Environment.GetEnvironmentVariable(\"LT_USERNAME\"),\n        [\"accessKey\"] = Environment.GetEnvironmentVariable(\"LT_ACCESS_KEY\"),\n    }\n};\n\nvar browser = await Playwright.Chromium.ConnectAsync($\"wss://cdp.lambdatest.com/playwright?capabilities={Uri.EscapeDataString(JsonSerializer.Serialize(capabilities))}\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Java, you can use the following code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import com.microsoft.playwright.*;\nimport java.util.HashMap;\nimport java.util.Map;\n\nMap<String, Object> capabilities = new HashMap<>();\ncapabilities.put(\"browserName\", \"Chrome\");\ncapabilities.put(\"browserVersion\", \"latest\");\n\nMap<String, Object> ltOptions = new HashMap<>();\nltOptions.put(\"platform\", \"Windows 10\");\nltOptions.put(\"build\", \"Playwright Auto Heal Build\");\nltOptions.put(\"name\", \"Playwright Auto Heal Test\");\nltOptions.put(\"autoHeal\", true);\nltOptions.put(\"user\", System.getenv(\"LT_USERNAME\"));\nltOptions.put(\"accessKey\", System.getenv(\"LT_ACCESS_KEY\"));\n\ncapabilities.put(\"LT:Options\", ltOptions);\n\nBrowser browser = playwright.chromium().connect(\"wss://cdp.lambdatest.com/playwright?capabilities=\" + URLEncoder.encode(new Gson().toJson(capabilities), \"UTF-8\"));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Here is an example test case demonstrating this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { test } = require('../lambdatest-setup');\nconst { expect } = require('@playwright/test');\n\ntest.describe('Browse LambdaTest in different search engines', () => {\n    test('Test Auto Heal', async ({ page }) => {\n        await page.goto('https://www.lambdatest.com/selenium-playground/auto-healing');\n        await page.waitForTimeout(1000); // sleep 1s\n\n        // Locate element before DOM change\n        let buttonBeforeDOMChange = await page.locator('#username'); // equivalent to FindElement ByID\n        await buttonBeforeDOMChange.click();\n\n        // Trigger DOM change\n        await page.click('p.selenium_btn');\n        await page.waitForTimeout(1000); // sleep 1s\n\n        // Try to locate the same element after DOM change\n        // Auto healing will automatically detect the new locator\n        let buttonAfterDOMChange = await page.locator('#username'); // again check for element\n        await buttonAfterDOMChange.click();\n\n        await page.waitForTimeout(1000); // sleep 1s\n    });\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run the test, execute the below command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx playwright test auto-heal.spec.js"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Auto Healing for Playwright Web Automation

---

The <BrandName /> Auto Healing feature for Playwright testing automatically recovers from certain types of failures during test execution. When enabled, it reduces test flakiness and improves test reliability by detecting broken locators and handling unexpected errors in your test suites.

## Enabling Auto Healing

---

To enable the Auto Healing feature, you need to pass the `autoHeal: true` as a capability in your Playwright configuration. For example:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="JavaScript" label="JavaScript" default>

For **JavaScript/NodeJS**, you can use the following code:

```javascript
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

```python
import asyncio
import json
import urllib.parse
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
            ws_endpoint=f"wss://cdp.lambdatest.com/playwright?capabilities={urllib.parse.quote(json.dumps(capabilities))}"
        )
```

</TabItem>

<TabItem value="C#" label="C#" default>

For **C#**, you can use the following code:

```csharp
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

```java
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

<img loading="lazy" src={require('../assets/images/selenium/auto-heal.png').default} alt="Auto Healing workflow diagram showing how broken locators are detected and recovered" width="1346" height="647" className="doc_img"/>

Auto-healing adjusts broken locators by merging attributes and context. During runtime, it monitors the web page to identify DOM (Document Object Model) changes.

When an element is successfully located using Playwright's locator methods (`page.locator('#username').click()`, etc.), its DOM path is recorded. If that same element is later referenced on the same page and is missing, the system evaluates the current page and generates new locators for altered elements based on previous benchmarks.

## Auto Detection of New Locator

---

In some scenarios, web elements might change their locators due to updates in the web application. However, the Auto Healing feature can automatically detect the new locator and continue the test execution.

Here is an example test case demonstrating this:

<VerifiedTag value="Verified" />

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
```

In the above test case, we are interacting with an element before and after a DOM change occurs on <BrandName />'s auto-healing playground. The Auto Healing feature will automatically detect if the element's locator has changed and adapt accordingly, ensuring the test continues to execute successfully.

To run the test, execute the below command:

<VerifiedTag value="Verified" />

```bash
npx playwright test auto-heal.spec.js
```

## Benefits Of Auto Healing

---

- **Increased Test Stability:** Playwright tests remain consistent even when the web application's UI undergoes minor changes, reducing flakiness.
- **Reduced Test Maintenance:** The system automatically adapts to evolving interfaces, reducing the manual effort required to update test scripts.
- **Reliable CI/CD Pipeline:** Stable tests feeding into CI/CD pipelines reduce unexpected failures and ensure smoother deployments.

## Limitations of Auto Healing

---

While the Auto Healing feature is designed to handle a wide range of issues, there are certain limitations to be aware of:

- **Non-recoverable errors**: Auto Healing cannot recover from certain types of errors, such as Playwright browser initialization errors, network connectivity issues, or system-level failures.

- **Test accuracy**: While Auto Healing can reduce test flakiness, it may also mask real issues in your web application or test scripts. It's important to review the logs and understand why a test needed healing.

- **Performance impact**: While typically minimal, enabling Auto Healing can have a slight impact on test execution time due to the additional checks and recovery mechanisms.

- **Limited scope**: Auto Healing works best with simple locator changes (ID, class, attribute modifications) and may not be effective for complete page redesigns or fundamental workflow changes.

Auto Healing enhances test suite robustness but does not replace good test design. Review healed tests regularly for issues that may be masked by the feature.

---

## Related Docs

- [Selenium Auto Healing](/support/docs/auto-healing/):Auto-heal for Selenium web automation tests
- [Smart Heal for Appium](/support/docs/smart-heal-appium/):AI-powered self-healing for mobile app automation on real devices
- [Auto Healing in HyperExecute](/support/docs/hyperexecute-auto-healing/):Auto-heal for tests executed via HyperExecute
- [Auto-Heal in KaneAI](/support/docs/kaneai-auto-heal/):AI-native auto-heal with natural language understanding for KaneAI-authored tests

---

> That was all you need to know for the Auto-Healing feature with Playwright. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!


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
