---
id: accessibility-test-scheduling
title: Accessibility Test Scheduling
hide_title: false
sidebar_label: Accessibility Test Scheduling
description: Automate accessibility testing with TestMu AI's Accessibility Scheduler. Schedule scans, ensure WCAG compliance, and get detailed reports effortlessly.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/accessibility-test-scheduling/
site_name: TestMu AI
slug: accessibility-test-scheduling/
canonical: https://www.testmuai.com/support/docs/accessibility-test-scheduling/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility Test Scheduling",
          "item": `${BRAND_URL}/support/docs/accessibility-test-scheduling/`
        }]
      })
    }}
></script>
Web Accessibility is crucial for creating inclusive digital experiences. This ensures that all the users, including those with disabilities, can access and interact with web content. However, manually verifying accessibility compliance is often time-intensive and prone to human error.

To address these challenges, <BrandName /> introduces the Accessibility Scheduler—an automated solution to help you stay compliant with WCAG (Web Content Accessibility Guidelines). This tool streamlines accessibility testing by automating checks and generating comprehensive reports, ensuring a faster, more reliable process.

The Scheduled Accessibility Scan feature allows you to automate recurring or one-time accessibility scans, significantly reducing manual effort while ensuring high standards of accessibility compliance.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/accessibility-testing/accessibility-scheduling.mp4').default} type="video/mp4" />
</video>

## Key Features
- **Automated Scheduling :** Set up recurring or one-time scans for your websites.
- **WCAG Compliance :** Ensure your websites adhere to WCAG standards (selectable version).
- **Local and Authenticated Pages :** Configure scans for local environments and authenticated pages.
- **Comprehensive Reporting :** Receive detailed scan reports via email and access them on the dashboard.

## Typical workflow

1. Create the scheduled scan.
2. Add URLs manually, through CSV, or through sitemap extraction.
3. Add **saved login configurations** (or tunnel / local access) if required—see [Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/).
4. Set the schedule.
5. Review the resulting reports.

## Onboarding: schedule your first recurring scan

1. Read **[Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)** end-to-end once—menus use the same vocabulary as the live product.
2. Seed URLs using **[Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)** when you have more than a handful of pages.
3. If pages sit behind login, open **Add login configurations** in Advanced options or use dashboard **Login configurations**, then attach a profile—see **[Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)** (Basic, Form, Multi-page, or tunnel per your environment) before widening scope.
4. Start with a **weekly** cadence on a **subset** of URLs; promote to daily only after noise is manageable.
5. After the first run, open **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and confirm aggregates match expectations.
6. Optional: enable **[Fragment Identifier](/support/docs/accessibility-fragment-identifier/)** in DevTools settings when hash routes should split reporting for SPA teams (web URL grouping only).

## Related docs

- [Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)
- [Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)
- [Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)
- [Crawler](/support/docs/accessibility-test-crawler/)
