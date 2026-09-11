---
id: smart-ui-build-options
title: Build Configuration and Options for Smart UI
sidebar_label: Build Config & Options
description: Navigate through our support doc to adeptly build Configuration & Options for Smart UI using TestMu AI!
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

url: https://www.testmuai.com/support/docs/smart-ui-cypress/
slug: smart-ui-build-options/
canonical: https://www.testmuai.com/support/docs/smart-ui-build-options/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---
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
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/build-options-for-visual-regression-testing/`
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
      "@id": "https://www.testmuai.com/support/docs/smart-ui-cypress/"
    },
    "headline": "Build Configuration and Options for Smart UI",
    "description": "Navigate through our support doc to adeptly build Configuration & Options for Smart UI using TestMu AI!",
    "url": "https://www.testmuai.com/support/docs/smart-ui-cypress/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
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
        "name": "Enabling build mapping for multiple screenshots (Selenium)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value=\"cypress\" label=\"Cypress\" default>\n\n```json title=\"Please make the changes in lambdatest-config.json\"\n\"smart_ui\": {\n    // highlight-next-line\n      \"build\": <Your_Build_Name> // Please add your build name of choice here\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Playwright",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "<\/TabItem>\n<TabItem value=\"puppeteer\" label=\"Puppeteer\" default>\n\n```js title=\"Please add the following in <LT:Options> in your capabilities configuration \"\n\nconst capabilities = {\n'LT:Options': {\n    // highlight-next-line\n      \"smartUIBuildName\": <Your_Build_Name> // Please add your build name of choice here\n    \n}}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "K6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "<\/TabItem>\n<\/Tabs>\n\n---\n\n## Enabling build as a baseline\n\nIf you want to mark your build as a baseline from your test suite while executing tests then you have to enable the below mentioned capability configuration needs to be enabled.\n\n<Tabs className=\"docs__val\" groupId=\"framework\">\n<TabItem value=\"selenium\" label=\"Selenium\" default>\n\n```js title=\"Please add the following to your capabilities configuration\"\nlet capabilities = {\n  // highlight-next-line\n  \"smartUI.baseline\": true / false, // Enable if you want to update to a new baseline build\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enabling build as a baseline (Cypress)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/TabItem>\n<TabItem value=\"playwright\" label=\"Playwright\" default>\n\n```js title=\"Please add the following in <LT:Options> in your capabilities configuration \"\n\nconst capabilities = {\n'LT:Options': {\n    // highlight-next-line\n      \"smartUIBaseline\": true // Please add if you want to make this build as baseline\n    \n}}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Puppeteer",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "<\/TabItem>\n<TabItem value=\"k6\" label=\"K6\" default>\n\n```js title=\"Please add the following in <LT:Options> in your capabilities configuration \"\n\nconst capabilities = {\n'LT:Options': {\n    // highlight-next-line\n      \"smartUIBaseline\": true // Please add if you want to make this build as baseline\n    \n}}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

Using the <BrandName /> platform, perform regression testing in just one click and explore various possible solutions for grouping your screenshots into different builds and map as per your testing suite needs.

## Enabling build mapping for multiple screenshots

If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite. We have to enable the mapping with the `smartUI.build` to be added your capabilities.

<Tabs className="docs__val" groupId="framework">
<TabItem value="selenium" label="Selenium" default>

```js title="Please add the following to your capabilities configuration"
let capabilities = {
    // highlight-next-line
    "smartUI.build": <Your_Build_Name> // Please add your build name of choice here
}
```

</TabItem>
<TabItem value="cypress" label="Cypress" default>

```json title="Please make the changes in lambdatest-config.json"
"smart_ui": {
    // highlight-next-line
      "build": <Your_Build_Name> // Please add your build name of choice here
}
```

</TabItem>
<TabItem value="playwright" label="Playwright" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBuildName": <Your_Build_Name> // Please add your build name of choice here
    
}}
```
</TabItem>
<TabItem value="puppeteer" label="Puppeteer" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBuildName": <Your_Build_Name> // Please add your build name of choice here
    
}}
```
</TabItem>
<TabItem value="k6" label="K6" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBuildName": <Your_Build_Name> // Please add your build name of choice here
    
}}
```
</TabItem>
</Tabs>

---

## Enabling build as a baseline

If you want to mark your build as a baseline from your test suite while executing tests then you have to enable the below mentioned capability configuration needs to be enabled.

<Tabs className="docs__val" groupId="framework">
<TabItem value="selenium" label="Selenium" default>

```js title="Please add the following to your capabilities configuration"
let capabilities = {
  // highlight-next-line
  "smartUI.baseline": true / false, // Enable if you want to update to a new baseline build
};
```

</TabItem>
<TabItem value="cypress" label="Cypress" default>

```json title="Please make the changes in lambdatest-config.json"
"smart_ui": {
    // highlight-next-line
      "baseline": true/false // Enable if you want to update to a new baseline build
}
```

</TabItem>
<TabItem value="playwright" label="Playwright" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBaseline": true // Please add if you want to make this build as baseline
    
}}
```
</TabItem>
<TabItem value="puppeteer" label="Puppeteer" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBaseline": true // Please add if you want to make this build as baseline
    
}}
```
</TabItem>
<TabItem value="k6" label="K6" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBaseline": true // Please add if you want to make this build as baseline
    
}}
```
</TabItem>
</Tabs>

---

## Build Features

The following are the list of features that are available for the build process in SmartUI:

- All the screenshots are grouped together as a one build.
- The screenshots are mapped from the **baseline** to the **Comparison screenshot** in the same sequential pattern as per the baseline build.
- Add additional screenshots if needed for the existing build by using the same build name in the capabilities. This will add new screenshots to the build.
- You can also update any build of choice as a new **Baseline** build.

:::info
We currently only support one baseline for one project in our current version. We recommend you to create a new project for multiple baseline builds
:::

---

## Build Status Information

We are provide multiple build status options for the project owners to check the status of builds and take required actions to the screenshots by the approver(s).

<img loading="lazy" src={require('../assets/images/smart-visual-testing/build-status-dotlapse.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

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
      <span className="breadcrumbs__link"> Build Options for Visual Regression Testing </span>
    </li>
  </ul>
</nav>
