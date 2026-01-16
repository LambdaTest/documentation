---
id: supported-browsers-and-os
title: Supported Browsers and Operating Systems
sidebar_label: Specify Browsers and OS
description: Check out the list of supported browsers and operating systems for Cypress testing on the TestMu AI platform.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests

url: https://www.testmu.ai/support/docs/supported-browsers-and-os/
site_name: LambdaTest
slug: supported-browsers-and-os
canonical: https://www.testmu.ai/support/docs/supported-browsers-and-os/
---

<BrandName /> supports the below listed browsers, browser versions and Operating Systems for Cypress testing:

```json
{
   "lambdatest_auth": {
      "username": "<Your LambdaTest username>",
      "access_key": "<Your LambdaTest access key>"
   },
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest","latest-1"
         ]
      }
   ],
```

| OPERATING SYSTEM | CHROME                   | FIREFOX      | EDGE                     |
| ---------------- | ------------------------ | ------------ | ------------------------ |
| macOS Ventura    | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Monterey   | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Big Sur    | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Mojave     | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Catalina   | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 11       | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 10       | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 8.1      | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 8        | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 7        | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |

>**Note**: <BrandName /> Automation also supports Cypress testing on Electron browser and in WebKit.
* **Electron**: Supported on all OS.
* **WebKit**: Supported on - macOS Big Sur and macOS Monterey.

You can run Cypress tests across multiple browsers and OS combinations using the following ways.

1. Configuring the browser and platform keys in `lambdatest-config.json`
2. Using the **--browsers** flag 


## Configuring The Browser And Platform Keys In lambdatest-config.json
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

To run Cypress tests on multiple browser and OS configurations, add the *browsers* object in the `lambdatest-config.json` file to define a list of browsers, browser versions and platforms.

Below is the syntax for configuring the browser and platform keys in the `lambdatest-config.json` file.

```js
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      },
   ],
```

## Using The Cypress CLI Command
---

You can also run Cypress tests on multiple configurations by specifying the browser and platform using our Cypress CLI command. 

| Flag | Purpose | Type |
|------|---------|------|
| **--brs, --browsers**  | Test will be run on the specified browsers<br/> in the format: `platform:browser:version` |String |

Below is the command for specifying the browser and platform using **--brs, --browsers** flag.

```js
lambdatest-cypress run --browsers "platform:browser:version"
```


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
       Supported Browsers And OS
      </span>
    </li>
  </ul>
</nav>








