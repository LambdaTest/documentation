---
id: web-scanner-getting-started
title: Getting Started with TestMu AI Web Scanner
hide_title: false
sidebar_label: Getting Started
description: A guide to accessing the Web Scanner dashboard and using the 4-step wizard to create and schedule your first Visual or Accessibility scan.
keywords:
  - testmu ai
  - web scanner
  - getting started
  - schedule scan
url: https://www.testmu.ai/support/docs/web-scanner-getting-started
site_name: LambdaTest
slug: web-scanner-getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
        }]
      })
    }}
></script>

## Accessing the Dashboard

Navigate to: `https://webscanner.lambdatest.com/webscan/builds`

You will see a unified dashboard with the following primary controls:

<img loading="lazy" src={require('../assets/images/web-scanner/unified-dashboard-controls.png').default} alt="Web Scanner Dashboard Controls" className="doc_img"/>

### Scan Type Tabs

At the top left, you can switch between:
* Visual UI Scans
* Accessibility Scans

Each tab displays its own scheduled scans, configurations, and build statuses.

### Search and Filters

Use the search bar to locate specific scans by name. Filters may be added in future iterations for build status, user, or date.

### Login Configurations

For your accessibility scans, login configurations allow users to:
* Add Basic Auth credentials
* Add form authentication (via CSS selectors)

These configurations ensure that login-protected or session-gated URLs can still be scanned.

### Schedule Scan Button

The primary CTA on the dashboard, **Schedule Scan**, triggers the full scan creation wizard.

<img loading="lazy" src={require('../assets/images/web-scanner/schedule-scan-button.png').default} alt="Schedule Scan Button" className="doc_img"/>

## How to Create a New Scan

Click the **Schedule Scan** button to launch the 4-step wizard. This process applies to both Visual and Accessibility scans. Platform-specific configuration steps appear based on your selection.

### Step 1: Scan Overview

* **Scan Name:** Add an identifiable title
* **Platform:** Choose between:
    * Visual UI
    * Accessibility

<img loading="lazy" src={require('../assets/images/web-scanner/wizard-step-1-overview.png').default} alt="Scan Creation Wizard Step 1" className="doc_img"/>

### Step 2: Scan Type Configuration (Dynamic)

Depending on the selected platform, you’ll either see Visual UI configuration or Accessibility configuration. You may use “Default“ settings or for more information follow the details provided:

* [Starting a Visual Scan](/support/docs/web-scanner-visual-scan)
* [Starting an Accessibility Scan](/support/docs/web-scanner-accessibility-scan)

### Step 3: Add URLs

You can populate the scan target using three options:
* Manual Input: Paste multiple URLs
* CSV Upload: Upload a file with 1 URL per line
* Sitemap Import: Paste sitemap XML URL and select from extracted URLs

The maximum limit is 1,000 URLs per scan.

<img loading="lazy" src={require('../assets/images/web-scanner/wizard-step-3-manual-url.png').default} alt="Add URLs Manually" className="doc_img"/>
<img loading="lazy" src={require('../assets/images/web-scanner/wizard-step-3-sitemap-url.png').default} alt="Add URLs via Sitemap" className="doc_img"/>

For more details you may refer to our guide on [Adding URLs for Web Scanner](/support/docs/web-scanner-adding-urls).

### Step 4: Schedule the Scan

Choose the frequency and timing for this scan:
* **Quick Scan:** One-time run
* **Recurring Scan:**
    * Select days (e.g., Mon, Wed, Fri)
    * Select time (e.g., 08:30 PM)
    * Select timezone (e.g., UTC+5:30 Asia/Calcutta)
* Enable/disable **Run Initial Scan** (Visual UI only)

<img loading="lazy" src={require('../assets/images/web-scanner/wizard-step-4-schedule.png').default} alt="Scan Creation Wizard Step 4" className="doc_img"/>

## Post-Scan Scheduling

Once scheduled, the scan appears in the appropriate tab of the dashboard.
* **Visual UI:** Scan redirects to SmartUI comparison build
* **Accessibility:** Scan redirects to detailed Accessibility report

<img loading="lazy" src={require('../assets/images/web-scanner/scheduled-scan-on-dashboard.png').default} alt="Scheduled Scan on Dashboard" className="doc_img"/>

Each scan has an action menu (3-dots icon) with the following options:

**Visual UI:**
* View History (SmartUI builds)
* Edit Scan Config (recurrence, time)
* Stop Recurring Scan
* Delete Scan

**Accessibility:**
* Rename Scan
* Delete Scan

Detailed controls are available after redirecting to the Accessibility dashboard.
