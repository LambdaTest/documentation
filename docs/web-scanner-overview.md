---
id: web-scanner-overview
title: Web Scanner Overview
hide_title: false
sidebar_label: Web Scanner Overview
description: An introduction to TestMu AI Web Scanner, its purpose, core features, supported scan types (Visual UI and Accessibility), and ideal users.
keywords:
  - testmu ai
  - web scanner
  - overview
  - visual testing
  - accessibility testing
url: https://www.testmu.ai/support/docs/web-scanner-overview
site_name: LambdaTest
slug: web-scanner-overview
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
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Web Scanner Overview",
          "item": "https://www.lambdatest.com/support/docs/web-scanner-overview"
        }]
      })
    }}
></script>

## What is LambdaTest Web Scanner?

LambdaTest Web Scanner is an AI-powered, browser-based scanning platform designed to help teams identify and resolve visual and accessibility issues across web applications. It enables both automated Visual UI Regression Testing and WCAG-compliant Accessibility Testing, allowing organizations to proactively catch visual bugs and accessibility violations across thousands of URLs at scale.

This tool empowers QA teams, developers, and compliance managers to perform scheduled scans on public or locally-hosted sites, compare builds visually with pixel-perfect precision, and generate audit-ready accessibility reports.

<img loading="lazy" src={require('../assets/images/web-scanner/web-scanner-dashboard.png').default} alt="Web Scanner Dashboard" className="doc_img"/>

## Why Web Scanner?

Manual testing of large web applications for layout shifts, broken UI, or WCAG non-compliance is slow and error-prone. LambdaTest Web Scanner solves this by enabling:

* Automated visual comparisons across multiple browsers and resolutions powered by SmartUI
* Accessibility audits powered by dynamic WCAG checks
* Smart scheduling of one-time or recurring scans
* Support for authenticated and local testing pages
* Seamless redirection to SmartUI and Accessibility Dashboards

## Supported Scan Types

### 1. Visual UI Scan

Visual scans detect pixel-based layout changes, design mismatches, missing elements, or unintended visual regressions by comparing screenshots taken at scheduled intervals.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/smartui_dashboard.png').default} alt="smartui dashboard" className="doc_img"/>

#### Key Capabilities

- **Cross-Browser Validation**: Test UI across Chrome, Firefox, Edge, and Safari.
- **Responsive Testing**: Check layouts on 8 desktop sizes and 200+ mobile viewports (Android & iOS).
- **Custom Configurations**: Override defaults with your own SmartUI JSON settings.
- **Accurate Screenshots**: Use delays to capture pages with animations or dynamic content.
- **History & Comparison**: Access past scans to track changes, compare builds, and spot regressions.

### 2. Accessibility Scan

Accessibility scans audit your pages against WCAG 2.x standards, surfacing violations and recommendations to improve inclusivity.

<img loading="lazy" src={require('../assets/images/web-scanner/accessibility-scan-example.png').default} alt="Accessibility Scan Example" className="doc_img"/>

**Key Features:**
* WCAG 2.0/2.1 AA compliance and more
* "Needs Review" toggle for human-verifiable issues
* Best Practices flagging
* Deep scan reports with severity filters
* Smart filters for recurring violations
* Exportable reports

## Ideal Users

* **Frontend QA Teams:** Perform nightly visual regression scans across builds
* **Accessibility Engineers:** Validate compliance across thousands of URLs
* **Product Owners:** Monitor web releases for visual or WCAG health
* **Agencies:** Provide clients with before/after visual proof and compliance reports
