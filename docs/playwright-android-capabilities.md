---
id: playwright-android-caps
title: Capabilities for Playwright Android Testing
hide_title: true
sidebar_label: Playwright Android Capabilities
description: Master Playwright test configuration including browser and OS selection, test organization, and desktop resolution adjustments for your tests.
keywords:
  - playwright android testing
  - playwright android e2e testing
  - playwright android mobile testing
  - playwright android testing tool
  - playwright android testing on testmu ai
  - playwright android testing testmu ai

url: https://www.testmu.ai/support/docs/capabilities-for-playwright-android
site_name: LambdaTest
slug: capabilities-for-playwright-android
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
          "name": "Playwright Android Capabilities",
          "item": "https://www.lambdatest.com/support/docs/capabilities-for-playwright-android/"
        }]
      })
    }}
></script>

# Capabilities for Playwright Android Testing
---

The LambdaTest Capability Generator allows you to automatically create the capabilities class needed to run your
Playwright automation scripts on LambdaTest. Here are a few capabilities that you can configure to run your Playwright
Android tests.

:::tip
You can use the [Playwright Android Capability Generator](https://www.lambdatest.com/playwright-android-capability-generator/) to generate capabilities for your tests.
:::

| Key             | Expected Values                | Description                                                                                                                                                                                        | Capability                                                                           |
|-----------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| platform        | android                        | Specify the platform name                                                                                                                                                                          | `const capability = { "LT:Options": {"platform": "android",}}`                       |
| platformVersion | 12                             | Specify the platform version                                                                                                                                                                       | `const capability = { "LT:Options": {"platformVersion": "12",}}`                     |
| deviceName      | Pixel 5                        | Specify the device name.  | `const capability = { "LT:Options": {"deviceName": "Pixel 5",}}`                     |
| build           | Playwright Android Build       | Represent the build number for your test                                                                                                                                                           | ```const capability = {"LT:Options": {"build": "<build_name>",}}```                  |
| name            | Playwright Android Test        | Represents the name of a test                                                                                                                                                                      | `const capability = {"LT:Options": {"name": "<test_name>",}}`                        |
| projectName     | Playwright Sample Project      | Represents the name of a project                                                                                                                                                                   | `const capability = {"LT:Options": {"projectName": "<project_name>",}}`              |
| tags            | ["tag1", "tag2", "tag3"]       | Group your Playwright tests                                                                                                                                                                        | ``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}``         |
| buildTags       | ["build1", "build2", "build3"] | Group your Playwright builds                                                                                                                                                                       | `const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |
| projectName     | My Test                        | Represent the name of your project                                                                                                                                                                 | `const capability = { "LT:Options": {"projectName": "<project_name>",}}`             |
| network         | true/false                     | Enable network logs                                                                                                                                                                                | `const capability = { "LT:Options": {"network": true,}}`                             |
| console         | true/false                     | Enable browser console logs                                                                                                                                                                        | `const capabilities = { "LT:Options": {"console": true,}}`                           |
| video           | true/false                     | Enable video recording of the entire screen                                                                                                                                                        | `const capability = { "LT:Options": {"video": true,}}`                               |
| tunnel          | true/false                     | Enable tunnel for local testing                                                                                                                                                                    | `const capability = { "LT:Options": {"tunnel": true,}}`                              |
| tunnelName      | true/false                     | Specify tunnel name                                                                                                                                                                                | `const capability = { "LT:Options": {"tunnelName": "<tunnel_name>",}}`               |
| geoLocation     | AR (Argentina)                 | Specify country code                                                                                                                                                                               | `const capability = { "LT:Options": {"geoLocation": "AR",}}`                         |

## Using REGEX for device name
Regular Expression or REGEX is widely used to make searching/find characters in a string.

When you run a test on LambdaTest using a specific device, there may be scenarios, in which the particular device that you selected isn’t available. In these scenarios, REGEX will help you widen the search request for devices to run the test on.

To quote an example, consider you want to run the test on an Pixel. It doesn’t matter which one, but it’s got to be an Pixel. In these cases, we can use REGEX to specify exactly that. You’ll now be allotted any Pixel device that’s available which widens the search of devices considerably.

Refer [REGEX for App/Browser Automation](/support/docs/regular-expression-appium/) to read more on this.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
       Capabilities for Playwright
      </span>
    </li>
  </ul>
</nav>
