---
id: web-scanner-visual-scan
title: Starting a Visual UI Scan with Web Scanner
hide_title: false
sidebar_label: Starting a Visual UI Scan
description: Learn how to configure a Visual UI scan, including default settings for browsers and resolutions, and advanced options using a SmartUI JSON config.
keywords:
  - testmu ai
  - web scanner
  - visual ui scan
  - smartui config
url: https://www.testmuai.com/support/docs/web-scanner-visual-scan/
site_name: TestMu AI
slug: web-scanner-visual-scan/
canonical: https://www.testmuai.com/support/docs/web-scanner-visual-scan/
---

import CodeBlock from '@theme/CodeBlock';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started with Web Scanner",
          "item": `${BRAND_URL}/support/docs/web-scanner-getting-started`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Starting a Visual UI Scan",
          "item": `${BRAND_URL}/support/docs/web-scanner-visual-scan`
        }]
      })
    }}
></script>

## Purpose of Visual UI Scan

Visual UI scans identify layout shifts, broken styles, font mismatches, and other design anomalies across web pages. It compares page screenshots taken during each run against a previously saved baseline (initial scan).

Scans run across combinations of:
* **Browsers:** Chrome, Firefox, Safari, Edge
* **Resolutions:** A total of 30 viewport options are available, including 10 standard desktop, 10 Android, and 10 iOS device viewports.

Results are redirected to the SmartUI Dashboard for detailed comparison.

<img loading="lazy" src={require('../assets/images/web-scanner/visual-scan-config-purpose.png').default} alt="Visual Scan Purpose" className="doc_img"/>

## Step 2 (If Visual Scan is Selected)

Once **Visual UI** is selected in Step 1 of the scheduling wizard, the following configuration appears.

### Default Settings

* **Browsers:** Chrome, Firefox, Safari, Edge
* **Resolutions:** Desktop (1920x1080, 1366x768, 1024x768), Tablet, Mobile (Galaxy A12, Galaxy A31, iPhone 14 Pro)
* **Full Page Mode “ON“:** Captures the full length of your website regardless of viewport height limitations.
* **Delay “5 Seconds“:** To wait for animations or content to stabilize.

<img loading="lazy" src={require('../assets/images/web-scanner/visual-scan-default-settings.png').default} alt="Visual Scan Default Settings" className="doc_img"/>

### Advanced Options (Visual UI)

Click the "Advanced” Tab to unlock additional configuration tabs.

#### SmartUI Config Upload
You can create your own `.smartui.json` file for full control over:
* Browser selection
* Resolutions
* Delay setting
* The integrated JSON validator checks your configuration.

<img loading="lazy" src={require('../assets/images/web-scanner/visual-scan-advanced-options.png').default} alt="Visual Scan Advanced Options" className="doc_img"/>

#### Default SmartUI Config

<CodeBlock language="json">
{`
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        1024
      ]
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
  "smartIgnore": true,
  "enableJavaScript": false,
  "ignoreHTTPSErrors": false,
  "useGlobalCache": false
`}
</CodeBlock>

> **Note:** Using a SmartUI config bypasses manual browser, resolution, and delay selections, even in the "Edit Config" mode.


#### Navigating Results for your Visual Scan


## Dashboard Overview

After running your tests, the **Visual Build** becomes available in the dashboard.  

<img loading="lazy" src={require('../assets/images/web-scanner/visual-build.png').default} alt="Visual Build" className="doc_img"/>

### Build Status
Easily track the state of each screenshot — **Approved**, **Changes Found**, **New**, **Under Review**, and more.

<p align="center">
  <img loading="lazy" src={require('../assets/images/web-scanner/threedot-visual.png').default} alt="Build Status View" className="doc_img"/>
</p>

### Three-Dot Menu Options
Access additional functions for your build:

<img loading="lazy" src={require('../assets/images/web-scanner/history-page.png').default} alt="Three Dot Menu" className="doc_img"/>

1. **View History**  
   Browse older builds with complete stats for quick comparison.

2. **Edit Scan Config**  
   Modify scan settings such as **schedule** and **viewports**.  

   <img loading="lazy" src={require('../assets/images/web-scanner/editscan-visual.png').default} alt="Edit Scan Config" className="doc_img"/>

   <img loading="lazy" src={require('../assets/images/web-scanner/editscan-schedule.png').default} alt="Edit Scan Schedule" className="doc_img"/>

3. **Run Scan Now**  
   Run a new scan on demand and create a new build for comparison. 

4. **Delete Scan**  
   Remove a scan from the dashboard.

5. **Stop Recurring Scan**  
   Halt any scheduled recurring scans instantly.


**Access your SmartUI Dashboard**:
SmartUI detects pixel-based layout changes, design mismatches, missing elements, or unintended visual regressions by comparing screenshots taken at scheduled intervals.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/smartui_dashboard.png').default} alt="smartui dashboard" className="doc_img"/>
