# Starting a Visual UI Scan with Web Scanner

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Purpose of Visual UI Scan

Visual UI scans identify layout shifts, broken styles, font mismatches, and other design anomalies across web pages. It compares page screenshots taken during each run against a previously saved baseline (initial scan).

Scans run across combinations of:
* **Browsers:** Chrome, Firefox, Safari, Edge
* **Resolutions:** A total of 30 viewport options are available, including 10 standard desktop, 10 Android, and 10 iOS device viewports.

Results are redirected to the SmartUI Dashboard for detailed comparison.

## Step 2 (If Visual Scan is Selected)

Once **Visual UI** is selected in Step 1 of the scheduling wizard, the following configuration appears.

### Default Settings

* **Browsers:** Chrome, Firefox, Safari, Edge
* **Resolutions:** Desktop (1920x1080, 1366x768, 1024x768), Tablet, Mobile (Galaxy A12, Galaxy A31, iPhone 14 Pro)
* **Full Page Mode “ON“:** Captures the full length of your website regardless of viewport height limitations.
* **Delay “5 Seconds“:** To wait for animations or content to stabilize.

### Advanced Options (Visual UI)

Click the "Advanced” Tab to unlock additional configuration tabs.

#### SmartUI Config Upload
You can create your own `.smartui.json` file for full control over:
* Browser selection
* Resolutions
* Delay setting
* The integrated JSON validator checks your configuration.

#### Default SmartUI Config

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

> **Note:** Using a SmartUI config bypasses manual browser, resolution, and delay selections, even in the "Edit Config" mode.

#### Navigating Results for your Visual Scan

## Dashboard Overview

After running your tests, the **Visual Build** becomes available in the dashboard.

### Build Status
Easily track the state of each screenshot: **Approved**, **Changes Found**, **New**, **Under Review**, and more.

### Three-Dot Menu Options
Access additional functions for your build:

1. **View History**
   Browse older builds with complete stats for quick comparison.

2. **Edit Scan Config**
   Modify scan settings such as **schedule** and **viewports**.

3. **Run Scan Now**
   Run a new scan on demand and create a new build for comparison.

4. **Delete Scan**
   Remove a scan from the dashboard.

5. **Stop Recurring Scan**
   Halt any scheduled recurring scans instantly.

**Access your SmartUI Dashboard**:
SmartUI detects pixel-based layout changes, design mismatches, missing elements, or unintended visual regressions by comparing screenshots taken at scheduled intervals.
