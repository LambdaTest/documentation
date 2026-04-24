---
id: web-scanner-accessibility-scan
title: Starting an Accessibility Scan with Web Scanner
hide_title: false
sidebar_label: Starting an Accessibility Scan
description: Configure an Accessibility scan in Web Scanner, including WCAG version, review issues, best-practice checks, local testing, and login settings.
url: https://www.testmuai.com/support/docs/web-scanner-accessibility-scan/
site_name: TestMu AI
slug: web-scanner-accessibility-scan/
canonical: https://www.testmuai.com/support/docs/web-scanner-accessibility-scan/
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
          "item": `${BRAND_URL}/support/docs/web-scanner-getting-started/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Starting an Accessibility Scan",
          "item": `${BRAND_URL}/support/docs/web-scanner-accessibility-scan/`
        }]
      })
    }}
></script>

# Starting an Accessibility Scan with Web Scanner

Web Scanner exposes Accessibility scanning as an integrated workflow for site-wide URL-based scans. It is separate from Accessibility DevTools and from Accessibility Test Scheduling, even though the configuration concepts can overlap.

When you are already in Web Scanner, this page walks through configuring an Accessibility scan and interpreting the main options—WCAG target, review and best-practice toggles, local testing, and login settings—before you start the run. Use it to align scan settings with your environment and reporting goals on that product surface.

## When to use this

Use this page when you are already in Web Scanner and want to run an Accessibility scan against a set of URLs from that product surface.

## Prerequisites (onboarding)

1. You can open the **Web Scanner** product and see **[Getting Started with Web Scanner](/support/docs/web-scanner-getting-started/)** flows without errors.
2. You have a **URL list** or plan to add URLs through the wizard, and permission to scan those hosts.
3. For private environments, install or enable **TestMu AI Tunnel** per [Testing Locally Hosted Pages](/support/docs/testing-locally-hosted-pages/) **before** starting a scan that depends on local routing.
4. For authenticated sites, collect **login steps** or credentials formats the wizard supports (see **Login Configurations** on this page).
5. Decide the **WCAG target** and whether **best-practice** or **needs-review** items belong in the first run—narrower scopes make first triage faster.

## Key configuration options

- **WCAG Version** selects the standards target for the scan.
- **Review Issues** includes findings that may need manual validation.
- **Best Practices Issues** includes non-blocking improvement guidance.
- **Local Testing** lets you scan pre-production or internal environments through <BrandName /> Tunnel.
- **Login Configurations** help Web Scanner access authenticated areas of the site.

## Step-by-step

1. Open the Web Scanner scan wizard and choose **Accessibility** as the scan type.
2. Review the default settings, including WCAG version and issue toggles.
3. Configure local testing or login flows if your target environment is private or protected.
4. Start the scan and wait for the build to complete.
5. Open the report to review issue counts, severity trends, page-level findings, and export options.

## Product boundary

Web Scanner is an integrated product surface for Accessibility scans. If you want browser-based manual analysis, use [Accessibility DevTools](/support/docs/accessibility-devtools/). If you want recurring Accessibility-native scheduling outside Web Scanner, use [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/).

## Related docs

- [Getting Started with Web Scanner](/support/docs/web-scanner-getting-started/)
- [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
