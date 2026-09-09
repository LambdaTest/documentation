---
id: hyperexecute-auto-healing
title: Auto Healing in HyperExecute
hide_title: true
sidebar_label: Auto Heal
description: This documentation will help you to understand the concept of auto healing in hyperexecute
keywords:
- hyperexecute auto healing
- auto healing
- recover flaky tests
- hyperexecute self-healing locators
- auto-heal broken locators hyperexecute
- smart heal hyperexecute
- self-healing test automation hyperexecute
- autoheal hyperexecute selenium
- AI self-healing hyperexecute
- DOM healing hyperexecute tests
- hyperexecute locator recovery
- fix flaky tests hyperexecute
url: https://www.testmuai.com/support/docs/hyperexecute-auto-healing/
site_name: TestMu AI
slug: hyperexecute-auto-healing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-auto-healing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Auto Healing",
          "item": `${BRAND_URL}/support/docs/hyperexecute-auto-healing/`
        }]
      })
    }}
></script>

# Auto Healing for HyperExecute

HyperExecute's Auto Healing feature automatically recovers from locator failures during test execution, reducing flaky tests and improving the reliability of your test suites.

## Enable Auto Healing

**Step 1:** To enable the Auto Healing feature, you need to pass the **`autoHeal: true`** as a capability in your WebDriver configuration.

```javascript
const capability = {
    "browserName": "Chrome",
    "LT:Options": {
        "platformName": "Windows 10",
        # highlight-next-line
        "autoHeal": true
    }
}
```
**Step 2:** Now, trigger your test on HyperExecute using the mentioned command. Please replace the placeholder values with your details.

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
    </CodeBlock>
  </div>

**Step 3:** Now visit the HyperExecute Dashboard to check your triggered test. Click on the **View Test Detail** button.

**Step 4:** Click on the **band-aid** icon as shown below to check what part of your test case is healed.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/auto-heal/autoheal.gif').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## How Auto Healing Works

Auto Healing employs a dynamic locator strategy that adapts to DOM (Document Object Model) changes in real-time:

1. **Record:** When an element is initially located, the system records its DOM path and associated attributes.
2. **Detect:** If subsequent attempts to find the element fail due to application updates, the Auto Healing mechanism activates.
3. **Heal:** It analyzes the current DOM structure, compares it against the previously recorded state, and generates new locators by combining element attributes and hierarchical information.
4. **Continue:** The test continues execution seamlessly despite locator changes.

## Using AutoHeal with Hooks

In addition to enabling AutoHeal globally through capabilities, HyperExecute also supports **AutoHeal Hooks** for fine-grained control during test execution.  

These hooks allow you to **start or stop the AutoHeal mechanism dynamically** at any point within your Selenium test scripts. This is especially useful when only certain test steps involve dynamic elements or frequently changing locators.

By using these hooks, you can:
- Start AutoHeal before performing actions on elements likely to change.
- Stop AutoHeal immediately after those interactions are completed.
- Ensure the rest of your test executes with standard Selenium behavior.

This provides precise control over when element healing should be applied, improving reliability and reducing flakiness without impacting unrelated steps.  

> To learn how to use AutoHeal hooks in your Selenium scripts, refer to the detailed guide: [How to Use AutoHeal using Hooks](/support/docs/autoheal-with-hooks/)


## Benefits of Auto Healing

- **Reduces Flaky Tests:** Automatically recovers from intermittent locator failures caused by DOM changes.
- **Improves Test Reliability:** Tests continue execution despite minor application updates, increasing confidence in results.
- **Saves Time and Effort:** Reduces manual effort spent debugging and fixing broken locators.

## Limitations

- **Non-recoverable Errors:** Auto Healing cannot recover from WebDriver initialization errors or system-level failures.
- **Test Accuracy:** May mask real issues in your application or test scripts. Review logs to understand why a test needed healing.
- **Performance Impact:** Minimal, but enabling Auto Healing can slightly increase test execution time.

## Related Docs

- [Selenium Auto Healing](/support/docs/auto-healing/):Auto-heal for Selenium web automation tests
- [Playwright Auto Healing](/support/docs/playwright-auto-healing/):Auto-heal for Playwright web automation tests
- [Smart Heal for Appium](/support/docs/smart-heal-appium/):AI-powered self-healing for mobile app automation on real devices
- [Auto-Heal in KaneAI](/support/docs/kaneai-auto-heal/):AI-native auto-heal with natural language understanding for KaneAI-authored tests

