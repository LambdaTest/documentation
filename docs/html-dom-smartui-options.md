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

url: https://www.testmu.ai/support/docs/html-dom-smartui-options/
slug: html-dom-smartui-options
canonical: https://www.testmu.ai/support/docs/html-dom-smartui-options/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


---

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
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smart-ui-cypress/`
        }]
      })
    }}
></script>
<img loading="lazy" src={require('../assets/images/smart-visual-testing/Ignored-DOM-Sample.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
Using the <BrandName /> platform, perform regression testing in just one click and explore various possible solutions for grouping your screenshots into different builds and map as per your testing suite needs.

In case if you have any dynamic elements that are not in the same position across test runs, you can ignore / select a specific area to be removed from the comparison.

## Configuration for Selenium

The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline    |     
| `fullPage` (boolean) | Specify `true` if you want to take a Full Page Screenshot and `false` for viewport screenshots; `fullPage: true` is currently only supported for `Chrome` |       
| `ignoreDOM` (object) **<NewTag value='New' color='#000' bgColor='#ffec02' />**     | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or Xpath` used by your webpage that should be excluded from the comparison |
| `selectDOM` (object)      | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or XPath` used by your webpage that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your webhook configuration for JavaScript to ignore by ID"
let config = {
  screenshotName: "Ignore-ID",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    id: ["ID-1", "ID-2"], // Ignoring elements by ID, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your webhook configuration for JavaScript to ignore by Class"
let config = {
  screenshotName: "Ignore-Class",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    class: ["Class-1", "Class-2"], // Ignoring elements by class, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your webhook configuration for JavaScript to ignore by XPath"
let config = {
  screenshotName: "Ignore-XPath",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    xpath: ["Xpath-1", "Xpath-2"], // Ignoring elements by XPath, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your webhook configuration for JavaScript to ignore by CSS Selector"
let config = {
  screenshotName: "Ignore-cssSelector",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Ignoring elements by CSS selector, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your webhook configuration for JavaScript to select by ID."
let config = {
  screenshotName: "Select-ID",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    id: ["ID-1", "ID-2"], // Selecting elements by ID, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your webhook configuration for JavaScript to select by Class"
let config = {
  screenshotName: "Select-Class",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    class: ["Class-1", "Class-2"], // Selecting elements by class, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for JavaScript to select by XPath"
let config = {
  screenshotName: "Select-XPath",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    xpath: ["Xpath-1", "Xpath-2"], // Selecting elements by XPath, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for JavaScript to select by CSS Selector"
let config = {
  screenshotName: "Select-cssSelector",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Selecting elements by CSS selector, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```
</TabItem>

</Tabs>


## Configuration for Puppeteer

The following are the different options which are currently supported:

| Key | Description  |
| ------------------------- | --------------------------------------- | 
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             | 
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be excluded from the comparison | 
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be included in the comparison |
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison | 
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)
```
</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>


## Configuration for Playwright


The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             |
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be excluded from the comparison | 
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be included in the comparison | 
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison |
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)
```
</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>



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
     SmartUI with Cypress  
     </span>
    </li>
  </ul>
</nav>