---
id: web-scanner-accessibility-scan
title: Starting an Accessibility Scan with Web Scanner
hide_title: false
sidebar_label: Starting an Accessibility Scan
description: Learn how to configure an Accessibility scan, including WCAG version, handling of review issues, and advanced settings like local testing and authentication.
keywords:
  - lambdatest
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
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-web-scanner"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Starting an Accessibility Scan",
          "item": "https://www.lambdatest.com/support/docs/starting-an-accessibility-scan"
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