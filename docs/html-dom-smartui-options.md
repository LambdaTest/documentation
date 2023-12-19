---
id: html-dom-smartui-options
title: Handling Dynamic Data with DOM Configuration and Options for SmartUI
sidebar_label: Handling Dynamic Data
description: In this documentation, learn how to handle dynamic content of your web pages for visual regression. 
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/html-dom-smartui-options/
slug: html-dom-smartui-options/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smart-ui-cypress/"
        }]
      })
    }}
></script>
<img loading="lazy" src={require('../assets/images/smart-visual-testing/Ignored-DOM-Sample.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
Using the LambdaTest platform, perform regression testing in just one click and explore various possible solutions for grouping your screenshots into different builds and map as per your testing suite needs.

In case if you have any dynamic elements that are not in the same position across test runs, you can ignore / select a specific area to be removed from the comparison.

## Configuration for Selenium

The following are the different options which are currently supported:

| Key                       | Description                                                                                                               | Example                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             | ``` driver.executeScript(`smartui.takeScreenshot,{"screenshotName":"dom-screenshot"}`)```                                                                                              |
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID or CSS class used by your webpage that should be excluded from the comparison | ```driver.executeScript(`smartui.takeScreenshot,{\"screenshotName\":\"dom-screenshot\", \"ignoreDOM\":{\"id\":[\"head\",\"footer\"],\"class\":[\"login-form\",\"register-animation\"]}}`);``` |
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID or CSS class used by your webpage that should be included in the comparison | ```driver.executeScript(`smartui.takeScreenshot,{\"screenshotName\":\"dom-screenshot\", \"selectDOM\":{\"id\":[\"head\",\"footer\"],\"class\":[\"login-form\",\"register-animation\"]}}`);``` |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreDOM" label="Ignore DOM" default>

```js title="This is a sample for your webhook configuration for Javascript"
driver.executeScript(`smartui.takeScreenshot,{\"screenshotName\":\"dom-screenshot\", \"ignoreDOM\":{\"id\":[\"head\",\"footer\"],\"class\":[\"login-form\",\"register-animation\"]}}`);
```

</TabItem>
<TabItem value="SelectDOM" label="Select DOM" default>

```js title="This is a sample for your webhook configuration for Javascript"
driver.executeScript(`smartui.takeScreenshot,{\"screenshotName\":\"dom-screenshot\", \"selectDOM\":{\"id\":[\"head\",\"footer\"],\"class\":[\"login-form\",\"register-animation\"]}}`);
```

</TabItem>
</Tabs>

## Configuration for Puppeteer

The following are the different options which are currently supported:

| Key                       | Description                                                                                                               | Example                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: '<Screenshot Name>'}})}`)```                                                                                             |
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be excluded from the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)``` |
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be included in the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)```  |
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['//*[@id="api-requests"]/span']} })}`)``` |
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['//*[@id="api-requests"]/span']} })}`)``` |

:::note
Ignore DOM or Select DOM functionality for `cssSelector` will only work for `Puppeteer and Playwright` frameworks. We will be shortly making the same available for all eligible frameworks.
:::

<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreDOM" label="Ignore DOM" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectDOM" label="Select DOM" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>

<TabItem value="IgnoreXPath" label="Ignore XPath" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['//*[@id="api-requests"]/span']} })}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['//*[@id="api-requests"]/span']} })}`)
```

</TabItem>
</Tabs>

## Configuration for Playwright


The following are the different options which are currently supported:

| Key                       | Description                                                                                                               | Example                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: '<Screenshot Name>'}})}`)```                                                                         |
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be excluded from the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)``` |
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be included in the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)```  |
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['//*[@id="api-requests"]/span']} })}`)``` |
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['//*[@id="api-requests"]/span']} })}`)``` |

:::note
Ignore DOM or Select DOM functionality for `cssSelector` will only work for `Puppeteer and Playwright` frameworks. We will be shortly making the same available for all eligible frameworks.
:::

<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreDOM" label="Ignore DOM" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectDOM" label="Select DOM" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>

<TabItem value="IgnoreXPath" label="Ignore XPath" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['//*[@id="api-requests"]/span']} })}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['//*[@id="api-requests"]/span']} })}`)
```

</TabItem>
</Tabs>


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
     Smart UI with Cypress  </span>
    </li>
  </ul>
</nav>