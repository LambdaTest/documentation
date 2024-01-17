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
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline    |     
| `fullPage` (boolean) | Specify `true` if you want to take a Full Page Screenshot and `false` for viewport screenshots; `fullPage: true` is currently only supported for `Chrome` |       
| `ignoreDOM` (object) **<NewTag value='New' color='#000' bgColor='#ffec02' />**     | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or Xpath` used by your webpage that should be excluded from the comparison |
| `selectDOM` (object)      | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or XPath` used by your webpage that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreDOM" label="Ignore DOM" default>

```js title="This is a sample for your webhook configuration for Javascript"
let config = {
  screenshotName: "Ignore DOM element",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    id: ["ID-1", "ID-2"], // Ignoring elements by ID, you can ignore multiple at once
    class: ["Class-1", "Class-2"], // Ignoring elements by class, you can ignore multiple at once
    cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Ignoring elements by CSS selector, you can ignore multiple at once
    xpath: ["Xpath-1", "Xpath-2"], // Ignoring elements by XPath, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="SelectDOM" label="Select DOM">

```js title="This is a sample for your webhook configuration for Javascript"
let config = {
  screenshotName: "Select DOM element",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    id: ["ID-1", "ID-2"], // Selecting elements by ID, you can select multiple at once
    class: ["Class-1", "Class-2"], // Selecting elements by class, you can select multiple at once
    cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Selecting elements by CSS selector, you can select multiple at once
    xpath: ["Xpath-1", "Xpath-2"], // Selecting elements by XPath, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
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
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)``` |
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)``` |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreDOM" label="Ignore DOM" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectDOM" label="Select DOM" >

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>

<TabItem value="IgnoreXPath" label="Ignore XPath" >

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath" >

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)
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
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)``` |
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison | ```await page.evaluate((_) => {},`lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)``` |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreDOM" label="Ignore DOM" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectDOM" label="Select DOM" >

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"],id:["HTML DOM Id"],class:["<CSS Class>"]} }})}`)
```

</TabItem>

<TabItem value="IgnoreXPath" label="Ignore XPath" >

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)
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