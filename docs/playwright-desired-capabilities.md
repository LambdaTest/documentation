---
id: playwright-caps
title: Capabilities for Playwright Testing
hide_title: false
sidebar_label: Playwright Capabilities
description: Master Playwright testing with our guide on configuring capabilities! Select browsers & OS, organize tests, adjust desktop resolution, and more for efficient and precise testing outcomes.
keywords:
  - playwright testing
  - playwright e2e testing
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai

url: https://www.testmuai.com/support/docs/capabilities-for-playwright/
site_name: TestMu AI
slug: capabilities-for-playwright/
canonical: https://www.testmu.ai/support/docs/capabilities-for-playwright/
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
          "name": "Test Execution Setup",
          "item": `${BRAND_URL}/support/docs/capabilities-for-playwright/`
        }]
      })
    }}
></script>
The <BrandName /> Capability Generator allows you to automatically create the capabilities class needed to run your
Playwright automation scripts on <BrandName />. Here are a few capabilities that you can configure to run your Playwright
tests.

| Key | Expected Values | Description |Capability|
|----|----------|----------|------------|
| browserName| Chrome, Microsoft Edge<br/> <br/>**Playwright Bundled Browsers**: pw-chromium, pw-webkit, and pw-firefox| Specify the browser to test on | `const capability = {"browserName": "pw-webkit"}`                                    | 
| browserVersion | Chrome 83 & above, Edge 83 & above | Specify the browser version to test on                        | `const capability = {"browserVersion": "latest"}` |
| platform | **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave| Specify the platform name | `const capability = { "LT:Options": {"platform": "Windows 10",}}`|
| build | Playwright Sample Build | Represent the build number for your test | ```const capability = {"LT:Options": {"build": "<build_name>",}}```                  |
| name| Playwright Sample Test| Represents the name of a test| `const capability = {"LT:Options": {"name": "<test_name>",}}`|
| projectName | Playwright Sample Project| Represents the name of a project | `const capability = {"LT:Options": {"projectName": "<project_name>",}}`|
| tags| ["tag1", "tag2", "tag3"]| Group your Playwright tests | ``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}``|
| buildTags| ["build1", "build2","build3"]| Group your Playwright builds| `const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |
| resolution| String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080` | Specifying your desktop resolution before initiating the test | `const capabilities = { "LT:Options": {"resolution": "2048x1536",}}`|
| projectName| My Test| Represent the name of your project| `const capability = { "LT:Options": {"projectName": "<project_name>",}}`|
| network| true/false| Enable network logs| `const capability = { "LT:Options": {"network": true,}}`|
| console| true/false| Enable browser console logs| `const capabilities = { "LT:Options": {"console": true,}}`|
| video| true/false| Enable video recording of the entire screen| `const capability = { "LT:Options": {"video": true,}}`|
| visual| true/false| Captures screenshot for every command| `const capability = { "LT:Options": {"visual": true,}}`|
| tunnel| true/false| Enable tunnel for local testing| `const capability = { "LT:Options": {"tunnel": true,}}`|
| tunnelName | true /false | Specify tunnel name | `const capability = { "LT:Options": {"tunnelName": "<tunnel_name>",}}`|
| geoLocation | AR (Argentina) | Specify country code | `const capability = { "LT:Options": {"geoLocation": "AR",}}`|
| idleTimeout | number| Specifies the timeout of the commands in seconds. <br /><br /> <b>Default value:</b> 300 <br /><br /> <b>Max value:</b> 1800<br /><br /> If a value greater than 1800 is added, idleTimeout will be set to 1800.| `const capability = { "LT:Options": {"idleTimeout": "<number>",}}`|
| lambdaMaskCommands | array | <b> `sendType` or `sendFill` </b> Masks the type method of the ElementHandle and Locator class. <br /><br /> <b>`sendPress`</b> Masks the press method of the ElementHandle and Locator class. <br /><br /> <b>`setHTTPCredentials`</b> Masks the HTTP credentials parameter in the newContext and newPage method of the browser class. <br/><br /> <b>`setStorageState`</b> Masks the storage state parameter in the newContext and newPage method of the browser class <br /><br /> <b>`setGeolocation`</b> Masks the Geolocation parameter in the newContext and newPage method of the browser class.|`const capability = { "LT:Options": {'lambdaMaskCommands': ["sendType", "sendFill", "sendPress", "setHTTPCredentials", "setStorageState", "setGeolocation"]}}` <br /><br /> |
| useSpecificBundleVersion | Boolean | If set **`true`:** <BrandName /> will select the playwright server version as per the browser version you have passed in the capabilities. Check the [supported browser version list](/support/docs/playwright-test-execution-setup/#playwright-supported-browsers). <br /><br /> If the value set in the `browser version` capability is supported by multiple Playwright versions, <BrandName /> checks your Playwright client version and sets the Playwright version accordingly. <br /><br /><br /> If set **`false` :** <BrandName /> will run your playwright tests with the same version as setup in your local system and the browser version will also be used the compatible one as per the [supported browser version list](/support/docs/playwright-test-execution-setup/#playwright-supported-browsers) and not your defined one. | `const capability = { "LT:Options": {"useSpecificBundleVersion": true,}}` |
| lambdaSetBrowserPosition | | The `lambdaSetBrowserPosition` function is designed to arrange two browser windows on the screen, ensuring each occupies exactly half of the available screen space. This layout facilitates side-by-side browser comparisons or multitasking workflows. <br /> <br /> OS Supported - Windows <br /><br /> Browsers supported : Chrome, Microsoft Edge , pw-chroium, pw-webkit & pw-firefox | `const capability = {action: 'lambdaSetBrowserPosition',}` |
