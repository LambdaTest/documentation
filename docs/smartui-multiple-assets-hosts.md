---
id: smartui-multiple-assets-hosts
title: Capturing Multiple Assets Hosts
sidebar_label: Capturing multiple asset hosts
description: In this documentation, learn about how to capture multiple assts hosts
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
url: https://www.testmuai.com/support/docs/smartui-multiple-assets-hosts/
slug: smartui-multiple-assets-hosts/
canonical: https://www.testmu.ai/support/docs/smartui-multiple-assets-hosts/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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
          "name": "Smart Multiple Assets",
          "item": `${BRAND_URL}/support/docs/smartui-multiple-assets-hosts/`
        }]
      })
    }}
></script>
In the SmartUI SDK, the `allowedHostnames` option is used to configure the capture of assets from specific hostnames during UI testing. By default, SmartUI captures only assets that are hosted on the same domain as the snapshot location. For example, if snapshots are taken on `https://xyz.com`, assets hosted on `https://cdn.xyz.com` will not be captured unless explicitly specified. The `allowedHostnames` configuration allows you to define multiple hostnames, ensuring assets from those sources are included during test execution.

## Purpose of `allowedHostnames`

The primary purpose of the `allowedHostnames` is to allow users to specify which external domains or subdomains should be trusted for asset capture. This is particularly useful when assets are hosted across multiple servers or CDNs, and you want to ensure that the complete set of resources required for rendering a page is captured during your tests.

## Configuration File Structure
The `allowedHostnames` configuration option can be defined in your config file for SmartUI. You need to explicitly list each hostname from which assets should be captured. The SmartUI configuration file follows a JSON structure. Below is a sample configuration file:

```javascript title=".smartui.json"
{
  ..// mobile or web configurations...
  "allowedHostnames": ["cdn.xyz.com"]
}
```