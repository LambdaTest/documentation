---
id: smartui-sdk-config-options
title: SmartUI SDK Advanced Configuration Options
sidebar_label: Configuration Options
description: In this documentation, learn about the options available in SmartUI SDK configuration
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

url: https://www.testmuai.com/support/docs/smartui-cli/
slug: smartui-sdk-config-options/
canonical: https://www.testmuai.com/support/docs/smartui-sdk-config-options/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "item": `${BRAND_URL}/support/docs/smartui-sdk-config-options/`
        }]
      })
    }}
></script>

Welcome to the world of simplified visual testing with the SmartUI SDK.

This guide is designed to provide you with comprehensive information about the various configuration options available within the SmartUI SDK. Whether you're a new user seeking to customize your SmartUI integration or an experienced developer looking to optimize your testing workflows, this documentation will serve as your go-to resource for understanding and utilizing the configuration options effectively.

To generate the SmartUI SDK configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
```

:::note
For the latest features including advanced configurations, ensure you are using the latest version of SmartUI CLI. Install or update using:

```bash
npm install -g @lambdatest/smartui-cli@latest
```
:::

## Configuration File Structure

The SmartUI configuration file follows a JSON structure. Below is a sample configuration file with detailed explanations of each option:

```json
{
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ],
    "viewports": [
      [1920],
      [1366],
      [1028]
    ]
  },
  "mobile": {
    "devices": [
      "iPhone 14",
      "Galaxy S24"
    ],
    "fullPage": true,
    "orientation": "portrait"
  },
  "waitForTimeout": 1000,
  "waitForPageRender": 50000,
  "enableJavaScript": false,
  "allowedHostnames": ["cdn.xyz.com"]
}
```

## Configuration Options

<Tabs className='docs__val' groupId='config-options'>
<TabItem value='web' label='Web Configuration' default>

**browsers**

An array of browsers to capture screenshots from. Supported browsers include `chrome`, `firefox`, `safari`, and `edge`.

**viewports**

An array of arrays representing different screen resolutions for web browsers. Each inner array contains viewport sizes. Each web viewport is automatically rendered for each of the browser mentioned in the config.

**For capturing fullpage screenshots**

To capture a screenshot of the entire page, you only need to define the viewport width in your configuration settings. Specify the desired width parameters as demonstrated in the following example to ensure a fullpage capture.

```json title="Full Page Capture"
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        360
      ]
    ],
```

**For capturing viewport screenshots**

To capture a screenshot of the content currently visible in your viewport, rather than the entire page, it's important to define the viewport's width and height in your configuration settings. Specify the desired width and height parameters as demonstrated in the following example to ensure that the screenshot encompasses only the viewport area.

```json title="Viewport Capture"
    "viewports": [
      [
        1920,
        1080
      ],
      [
        1366,
        768
      ],
      [
        360,
        640
      ]
    ],
```

<hr/>

**customViewports**

The `customViewports` property provides a way to define precisely which browser + viewport combinations should be rendered. This bypasses the default **cartesian product behavior** (where every viewport is automatically rendered on every specified browser). 

This is particularly useful if you need to enforce a specific screen size only on Safari, but another screen size across Chrome and Firefox.

:::caution Mutually Exclusive Configurations
The `customViewports` option and the standard `browsers` / `viewports` arrays are **mutually exclusive**. 
- To use the standard cartesian matrix, configure `browsers` + `viewports`.
- To specify distinct pairs, use `customViewports` **only**, and ensure `browsers` and `viewports` are removed from your `web` object.
:::

**How to configure `customViewports`:**

Below is an example of providing targeted sizes depending on the browser context. When using this configuration, SmartUI will generate screenshots only for the explicitly declared matches, allowing for highly optimized test metrics. 

```json title="Sample web object with customViewports"
    "customViewports": [
      { "browser": "chrome", "viewport": { "width": 1200, "height": 800 } },
      { "browser": "chrome", "viewport": { "width": 375, "height": 667 } },
      { "browser": "firefox", "viewport": { "width": 1200, "height": 800 } },
      { "browser": "safari", "viewport": { "width": 1200 } }
    ]
```

*Note: As demonstrated with `safari` above, the `height` property within a viewport object is optional. If omitted, SmartUI performs a full-page capture automatically.*

</TabItem>

<TabItem value='mobile' label='Mobile Configuration'>

**devices**

An array of mobile devices to capture screenshots from. List of supported device names can be found [here](#list-of-supported-device-viewports).

:::note
 Mobile viewports are emulated in desktop environments.Android devices will have the screenshots rendered in Chrome, while iOS devices in Safari.
 SmartUI SDK will soon be supported simulation in case of iOS devices.
:::

**fullPage**

Specifies whether to capture full-page screenshots for mobile devices. <b>By default</b>, `fullPage` is taken as <b>true</b>; set it to `false` in order to take a viewport screenshot on a mobile viewport.

**orientation**

Specifies the orientation of the mobile device. You can choose from `portrait` or `landscape` according to your usecase. <b>By default</b>, the orientation is taken as <b>portrait</b>.

</TabItem>

<TabItem value='global' label='Global Options'>

**waitForPageRender**

If one or more URLs in your script require a relatively higher amount of time to load, you may use the `waitForPageRender` key in the config file to make sure the screenshots are rendered correctly. Avoid using the same in case your websites render in less than 30 seconds as it might increase the execution time of your tests.

**waitForTimeout**

If you are using any async components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.

**enableJavaScript**

The `enableJavaScript` option is a boolean parameter that determines whether JavaScript is enabled for all snapshots within the project. Enabling JavaScript may lead to side-effects such as animations or redirects, potentially affecting the reliability of your snapshots.  <b>By default</b>, this option is set to <b>false.</b>

**allowedHostnames**

The `allowedHostnames` option controls the capture of assets from specific hostnames. By default, the SmartUI SDK only captures assets that match the hostname of the snapshot location. For instance, if snapshots are taken on `https://xyz.com`, assets hosted on `https://cdn.xyz.com` will not be captured. To include assets from other hostnames, each additional hostname needs to be added to the allowedHostnames configuration.

</TabItem>

<TabItem value='lazyload' label='Lazy Load Configuration'>

**lazyLoadConfiguration**

The `lazyLoadConfiguration` option is used to handle lazy-loaded content on web pages. This configuration helps ensure that all content is loaded before capturing screenshots, preventing incomplete captures due to lazy loading.

To use this feature, ensure you have the latest version of SmartUI CLI installed:

```bash
npm install -g @lambdatest/smartui-cli@latest
```

Add the following configuration to your `.smartui.json` file:

```json
{
  "lazyLoadConfiguration": {
    "enabled": true,
    "jumpBackToTop": true,
    "scrollDelay": 250,
    "scrollStep": 250
  }
}
```

- `enabled`: Boolean to enable/disable lazy load handling (default: false)
- `jumpBackToTop`: Boolean to scroll back to top after scrolling to bottom (default: true)
- `scrollDelay`: Delay in milliseconds between scroll actions (default: 250)
- `scrollStep`: Pixels to scroll in each step (default: 250)

</TabItem>

<TabItem value='devices' label='Supported Devices'>

**List of supported Device viewports**


**Note:** Use the exact string names provided below in the `devices` array of your `.smartui.json` mobile configuration.

| iOS Devices | Android Devices |
|---|---|
| `iPad 10.2 (2019)` | `Aquos Sense 5G` |
| `iPad 10.2 (2020)` | `Blackberry KEY2 LE` |
| `iPad 10.2 (2021)` | `Galaxy A10s` |
| `iPad 10.9 (2022)` | `Galaxy A11` |
| `iPad 9.7 (2017)` | `Galaxy A12` |
| `iPad Air (2019)` | `Galaxy A13` |
| `iPad Air (2020)` | `Galaxy A21s` |
| `iPad Air (2022)` | `Galaxy A22` |
| `iPad Air 11 (2024)` | `Galaxy A31` |
| `iPad Air 13 (2024)` | `Galaxy A32` |
| `iPad mini (2019)` | `Galaxy A51` |
| `iPad mini (2021)` | `Galaxy A52s 5G` |
| `iPad Pro 11 (2021)` | `Galaxy A53 5G` |
| `iPad Pro 11 (2022)` | `Galaxy A7` |
| `iPad Pro 11 (2024)` | `Galaxy A70` |
| `iPad Pro 12.9 (2018)` | `Galaxy A8` |
| `iPad Pro 12.9 (2020)` | `Galaxy A8 Plus` |
| `iPad Pro 12.9 (2021)` | `Galaxy J7 Prime` |
| `iPad Pro 12.9 (2022)` | `Galaxy M12` |
| `iPad Pro 13 (2024)` | `Galaxy M31` |
| `iPhone 11` | `Galaxy Note10` |
| `iPhone 11 Pro` | `Galaxy Note10 Plus` |
| `iPhone 11 Pro Max` | `Galaxy Note20` |
| `iPhone 12` | `Galaxy Note20 Ultra` |
| `iPhone 12 Mini` | `Galaxy S10` |
| `iPhone 12 Pro` | `Galaxy S10 Plus` |
| `iPhone 12 Pro Max` | `Galaxy S10e` |
| `iPhone 13` | `Galaxy S20` |
| `iPhone 13 Mini` | `Galaxy S20 FE` |
| `iPhone 13 Pro` | `Galaxy S20 Plus` |
| `iPhone 13 Pro Max` | `Galaxy S20 Ultra` |
| `iPhone 14` | `Galaxy S21` |
| `iPhone 14 Plus` | `Galaxy S21 FE` |
| `iPhone 14 Pro` | `Galaxy S21 Plus` |
| `iPhone 14 Pro Max` | `Galaxy S21 Ultra` |
| `iPhone 15` | `Galaxy S22` |
| `iPhone 15 Plus` | `Galaxy S22 Ultra` |
| `iPhone 15 Pro` | `Galaxy S23` |
| `iPhone 15 Pro Max` | `Galaxy S23 Plus` |
| `iPhone 16` | `Galaxy S23 Ultra` |
| `iPhone 16 Plus` | `Galaxy S24` |
| `iPhone 16 Pro` | `Galaxy S24 Plus` |
| `iPhone 16 Pro Max` | `Galaxy S24 Ultra` |
| `iPhone 17` | `Galaxy S25` |
| `iPhone 17 Pro` | `Galaxy S25 Plus` |
| `iPhone 17 Pro Max` | `Galaxy S25 Ultra` |
| `iPhone 6` | `Galaxy S7` |
| `iPhone 6s` | `Galaxy S7 Edge` |
| `iPhone 6s Plus` | `Galaxy S8` |
| `iPhone 7` | `Galaxy S8 Plus` |
| `iPhone 7 Plus` | `Galaxy S9` |
| `iPhone 8` | `Galaxy S9 Plus` |
| `iPhone 8 Plus` | `Galaxy Tab A 10.1 (2019)` |
| `iPhone SE (2016)` | `Galaxy Tab A7 Lite` |
| `iPhone SE (2020)` | `Galaxy Tab A8` |
| `iPhone SE (2022)` | `Galaxy Tab S3` |
| `iPhone X` | `Galaxy Tab S4` |
| `iPhone XR` | `Galaxy Tab S7` |
| `iPhone XS` | `Galaxy Tab S8` |
| `iPhone XS Max` | `Galaxy Tab S8 Plus` |
|  | `Galaxy Tab S9` |
|  | `Galaxy Z Flip6` |
|  | `Galaxy Z Flip7` |
|  | `Galaxy Z Fold6` |
|  | `Galaxy Z Fold7` |
|  | `Honeywell CT40` |
|  | `Honor X9a 5G` |
|  | `Huawei Mate 20 Pro` |
|  | `Huawei P20 Pro` |
|  | `Huawei P30` |
|  | `Huawei P30 Lite` |
|  | `Huawei P30 Pro` |
|  | `Huawei P50 Pro` |
|  | `Microsoft Surface Duo` |
|  | `Moto G Stylus (2022)` |
|  | `Moto G22` |
|  | `Moto G54 5G` |
|  | `Moto G7 Play` |
|  | `Moto G71 5G` |
|  | `Moto G9 Play` |
|  | `Motorola Edge 30` |
|  | `Motorola Edge 40` |
|  | `Motorola Edge 50 Pro` |
|  | `Nexus 5` |
|  | `Nexus 5X` |
|  | `Nokia 5` |
|  | `Nothing Phone (1)` |
|  | `Nothing Phone 1` |
|  | `Nothing Phone 2` |
|  | `OnePlus 10 Pro` |
|  | `OnePlus 11` |
|  | `OnePlus 12` |
|  | `OnePlus 6` |
|  | `OnePlus 6T` |
|  | `OnePlus 7` |
|  | `OnePlus 7T` |
|  | `OnePlus 8` |
|  | `OnePlus 9` |
|  | `OnePlus 9 Pro` |
|  | `OnePlus Nord` |
|  | `OnePlus Nord 2` |
|  | `OnePlus Nord CE` |
|  | `Oppo A12` |
|  | `Oppo A15` |
|  | `Oppo A54` |
|  | `Oppo A5s` |
|  | `Oppo F17` |
|  | `Oppo K10` |
|  | `Pixel 10 Pro` |
|  | `Pixel 10 Pro XL` |
|  | `Pixel 3` |
|  | `Pixel 3 XL` |
|  | `Pixel 3a` |
|  | `Pixel 4` |
|  | `Pixel 4 XL` |
|  | `Pixel 4a` |
|  | `Pixel 5` |
|  | `Pixel 6` |
|  | `Pixel 6 Pro` |
|  | `Pixel 6a` |
|  | `Pixel 7` |
|  | `Pixel 7 Pro` |
|  | `Pixel 7a` |
|  | `Pixel 8` |
|  | `Pixel 8 Pro` |
|  | `Pixel 9` |
|  | `Pixel 9 Pro` |
|  | `Pixel 9 Pro XL` |
|  | `Pixel Tablet` |
|  | `Poco M2 Pro` |
|  | `POCO X3 Pro` |
|  | `Realme 5i` |
|  | `Realme 7i` |
|  | `Realme 8i` |
|  | `Realme C21` |
|  | `Realme C21Y` |
|  | `Realme GT2 Pro` |
|  | `Redmi 8` |
|  | `Redmi 9` |
|  | `Redmi 9A` |
|  | `Redmi 9C` |
|  | `Redmi Note 10 Pro` |
|  | `Redmi Note 13 Pro` |
|  | `Redmi Note 8` |
|  | `Redmi Note 8 Pro` |
|  | `Redmi Note 9` |
|  | `Redmi Note 9 Pro Max` |
|  | `Redmi Y2` |
|  | `Tecno Spark 7` |
|  | `Vivo T1` |
|  | `Vivo V7` |
|  | `Vivo Y11` |
|  | `Vivo Y12` |
|  | `Vivo Y20g` |
|  | `Vivo Y22` |
|  | `Vivo Y50` |
|  | `Xiaomi 12 Pro` |
|  | `Xperia 10 IV` |
|  | `Xperia Z5` |
|  | `Xperia Z5 Dual` |
|  | `Zenfone 6` |

</TabItem>
</Tabs>

