---
id: web-scanner-scheduling-options
title: Scheduling Options in Web Scanner
hide_title: false
sidebar_label: Scheduling Options
description: A guide to the scheduling options available in Web Scanner, including one-time Quick Scans, recurring scans, and how to manage scheduled jobs.
keywords:
  - testmu ai
  - web scanner
  - schedule scan
  - recurring scan
url: https://www.testmu.ai/support/docs/web-scanner-scheduling-options/
site_name: LambdaTest
slug: web-scanner-scheduling-options/
canonical: https://www.testmu.ai/support/docs/web-scanner-scheduling-options/
---


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
          "name": "Scheduling Options in Web Scanner",
          "item": `${BRAND_URL}/support/docs/web-scanner-scheduling-options`
        }]
      })
    }}
></script>

## Step 4: Schedule Scan

Once scan configuration and URLs are complete, you’ll be prompted to set your scan frequency and runtime preferences.

<img loading="lazy" src={require('../assets/images/web-scanner/scheduling-options-ui.png').default} alt="Scheduling Options UI" className="doc_img"/>

## Scheduling Modes

### Quick Scan (One-Time)

* Executes the scan immediately upon creation.
* No future runs will be scheduled.
* Useful for ad hoc validations, staging checks, or one-off deployments.

### Recurring Scan

* Repeats the scan based on chosen days and time.
* Ensures continuous monitoring of regressions or WCAG compliance.

**Fields:**
* **Days:** Select one or more days (e.g., Mon, Wed, Fri).
* **Time:** Choose execution time (in 12-hour or 24-hour format).
* **Time Zone:** Select the appropriate time zone (e.g., UTC+5:30 Asia/Calcutta).

### Run Initial Scan (Visual UI Only)

* Applies only to Visual Scans and is enabled by default.
* Triggers a baseline SmartUI screenshot set right after scheduling.
* This is required for future builds to have a baseline to compare against.

**Example Use Case:**
You're scheduling a scan for every Monday. With "Run Initial Scan" enabled, a baseline will be created immediately. This acts as the visual reference for next Monday’s screenshots.

## Modify or Cancel Scheduled Scans

### Visual Scans:

* Access from the **Builds Dashboard**.
* Click the 3-dot menu and select **Edit**.
* Modify the scan name, schedule days, time, and time zone.
* **Options:** Edit Schedule, Stop Recurring Scan, Delete Scan.

<img loading="lazy" src={require('../assets/images/web-scanner/modify-visual-scan.png').default} alt="Modify a Scheduled Visual Scan" className="doc_img"/>

### Accessibility Scans:

* Navigate to the **Scheduled Accessibility** section.
* **Options:** Rename, Delete.
* For advanced options like issue filtering and exporting, open the report in the Accessibility Dashboard.