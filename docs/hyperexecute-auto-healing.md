---
id: hyperexecute-auto-healing
title: Auto Healing in HyperExecute
hide_title: true
sidebar_label: Auto Healing
description: This documentation will help you to understand the concept of auto healing in hyperexecute
keywords:
- hyperexecute auto healing
- auto healing
- recover flaky tests
url: https://www.lambdatest.com/support/docs/hyperexecute-auto-healing/
site_name: LambdaTest
slug: hyperexecute-auto-healing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Background Services",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-auto-healing/"
        }]
      })
    }}
></script>

# Auto Healing

> This is currently in the **Beta** version.

HyperExecute's Auto Healing feature helps you enhance the robustness of the test suites by automatically overcoming certain types of unexpected failures during the execution of your test scripts.

## Enable Auto Healing

**Step 1:** ​To еnablе thе Auto Hеaling fеaturе, you nееd to pass thе **`autoHеal: truе`** as a capability in your WеbDrivеr configuration.

```yaml
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

Auto Healing employs a dynamic locator strategy that adapts to DOM (Document Object Model) changes in real-time. When an element is initially located, the system records its DOM path and associated attributes. If subsequent attempts to find the element fail due to application updates, the Auto Healing mechanism activates. It analyzes the current DOM structure, comparing it against the previously recorded state, and generates new, contextually relevant locators by intelligently combining element attributes and hierarchical information. This process occurs seamlessly during test runtime, allowing scripts to continue execution despite locator changes. The system continuously monitors the web page for DOM modifications, ensuring sustained test reliability even in the face of frequent application updates.

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
Here are some of the benefits of using HyperExecute's Auto Healing feature:

- **Reduces the number of Flaky Tests:** Flaky tests are tests that fail intermittently, even though the underlying code has not changed. This can be caused by a variety of factors, such as unstable test environments, network latency, or changes in the browser's rendering engine. Auto Healing can help reduce the number of flaky tests by automatically retrying failed tests a certain number of times.
- **Improves Test Reliability:** By automatically recovering from failures, Auto Healing can help improve the reliability of your test suite. This means that you can be more confident that your tests will always pass, even if there are temporary disruptions to the test environment.
- **Saves Time and Effort:** Auto Healing can help save you time and effort by automating the process of recovering from failures. This means that you can focus on other tasks, such as developing new tests or fixing bugs.

## Limitations
While the Auto Healing feature is designed to handle a wide range of issues, there are certain limitations to be aware of:

- **Non-recoverable Errors:** Auto Healing cannot recover from certain types of errors, such as WebDriver initialization errors or system-level failures.
- **Test Accuracy:** While Auto Healing can reduce test flakiness, it may also mask real issues in your application or test scripts. It's important to review the logs and understand why a test needed healing.
- **Performance Impact:** While typically minimal, enabling Auto Healing can have a slight impact on test execution time due to the additional checks and recovery mechanisms.

## Best Practices
By following these best practices, you can use auto healing to improve the reliability and efficiency of your test suite without introducing new risks.

- Use a test automation framework that supports Auto Healing. This will make it easier to implement and manage Auto Healing in your test suite.
- Identify the types of errors that you want to recover from. Not all errors can be recovered automatically. Focus on recovering from the most common and impactful errors.
- Configure auto healing to retry tests a limited number of times. This will help to prevent infinite loops and resource exhaustion.
- Log all Auto Healing activity. This will help you understand why tests are failing and to troubleshoot any problems that occur.
- Monitor the effectiveness of Auto Healing. Track the number of tests that are healed and the number of false positives. This will help you to determine whether or not auto healing is providing a net benefit.

