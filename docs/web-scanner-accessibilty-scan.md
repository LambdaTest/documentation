---
id: web-scanner-accessibility-scan
title: Starting an Accessibility Scan with Web Scanner
hide_title: false
sidebar_label: Starting an Accessibility Scan
description: Learn how to configure an Accessibility scan, including WCAG version, handling of review issues, and advanced settings like local testing and authentication.
keywords:
  - testmu ai
  - web scanner
  - accessibility scan
  - wcag
  - ada compliance
url: https://www.lambdatest.com/support/docs/web-scanner-accessibility-scan
site_name: LambdaTest
slug: web-scanner-accessibility-scan/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started with Web Scanner",
          "item": "https://www.lambdatest.com/support/docs/web-scanner-getting-started"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Starting an Accessibility Scan",
          "item": "https://www.lambdatest.com/support/docs/web-scanner-accessibility-scan"
        }]
      })
    }}
></script>

## Purpose of Accessibility Scan

Accessibility scans ensure that websites are inclusive and usable for users with disabilities by identifying WCAG violations such as missing alt text, insufficient contrast, inaccessible form elements, and more.

These scans help:
* Meet legal compliance (ADA, WCAG 2.0/2.1)
* Improve usability for all users
* Reduce the burden of manual audits

<img loading="lazy" src={require('../assets/images/web-scanner/accessibility-scan-purpose.png').default} alt="Accessibility Scan Purpose" className="doc_img"/>

## Step 2 (If Accessibility Scan is Selected)

Once you select **Accessibility** in Step 1 of the scan wizard, the following configuration UI is displayed:

<img loading="lazy" src={require('../assets/images/web-scanner/accessibility-scan-config-ui.png').default} alt="Accessibility Scan Configuration UI" className="doc_img"/>

### Default Selections:

* **WCAG Version:** WCAG 2.1 AA
* **Review Issues “ON“:** Enables manual verification for accuracy.
* **Best Practices Issues “ON“:** Ensures user experience enhancement issues are accounted for.

## Advanced Options (Accessibility Scan)

### Local Testing Setup
* Activates LambdaTest Tunnel to scan localhost or staging environments.

### Login Configurations
* Reuse or create new login setups.
* Supports:
    * Basic Authentication (username/password)
    * Form-based login (via CSS selectors)

<img loading="lazy" src={require('../assets/images/web-scanner/accessibility-scan-advanced-options.png').default} alt="Accessibility Scan Advanced Options" className="doc_img"/>

### More options:
* **Review Issues (Needs Review):** Enable this to include issues that require human verification (e.g., `aria-label` usage). These may not be violations but need manual inspection.
* **Best Practices Issues:** Enable this to detect suggestions that improve UX but do not violate accessibility rules. Examples include adding landmark roles or enhancing keyboard support.


## Dashboard Overview

<img loading="lazy" src={require('../assets/images/web-scanner/accessibility-build.png').default} alt="Visual Build" className="doc_img"/>
After running your tests, your **Accessibility Build** becomes available in the dashboard.  

#### Build Status
Easily track the state of each scan — **Critical**, **Serious**, **Moderate**, **Minor**.

#### Build Options
Access additional functions for your build:
1. **Share Scan**  
   Browse older builds with complete stats for quick comparison.
2. **Raise an Issue**  
   Integrate with any of the major platforms and directly raise issues from the dashboard.
3. **Download Accessibility Report**  
   You can download the results report in PDF, CSV or JSON formats.
4. **Delete Scan**  
   Delete any scheduled recurring scans.

**Analyze the Scan Report**:
After selecting a scan, A detailed scan report will open, as shown in the provided screenshot. The report will display the following key components:
- **Total Issues :** A graph summarizing the trend of detected issues over the last few runs.
- **Severity Trend :** A chart categorizing issues by severity (e.g., Critical, Serious, Moderate, Minor).
- **Pages Scanned :** A list of scanned pages with their corresponding issue counts categorized by severity.

You can drill down into individual page URLs to view the number of issues found on that specific page using filters provided. From the scan report page, you can also edit, share and stop recurring scan if its no longer required.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/6.png').default} className="doc_img"/>
