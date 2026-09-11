---
id: accessibility-test-scheduling-scan
title: Steps to Schedule an Accessibility Scan
hide_title: false
sidebar_label: Schedule a Scan
description: Learn how to schedule accessibility scans with TestMu AI. Configure scans, automate WCAG compliance checks, and analyze detailed reports with ease.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Test Scheduling
    - Scheduled Scan
url: https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/
site_name: TestMu AI
slug: accessibility-test-scheduling-scan/
canonical: https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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
          "name": "Steps to Schedule an Accessibility Scan",
          "item": `${BRAND_URL}/support/docs/accessibility-test-scheduling-scan/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/"
    },
    "headline": "Steps to Schedule an Accessibility Scan",
    "description": "Learn how to schedule accessibility scans with TestMu AI. Configure scans, automate WCAG compliance checks, and analyze detailed reports with ease.",
    "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Schedule an Accessibility Scan",
      "description": "Learn how to schedule accessibility scans with TestMu AI. Configure scans, automate WCAG compliance checks, and analyze detailed reports with ease.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Access the Scheduled Scan Feature",
          "text": "Open the Accessibility Testing Dashboard. Click the \u201cScheduled Scan\u201d option from the menu.",
          "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/#step-1-access-the-scheduled-scan-feature"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure the Scan",
          "text": "Enter the Scan Name for identification. Select the desired WCAG version for compliance.",
          "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/#step-2-configure-the-scan"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3. Add Pages for the Scan",
          "text": "Enter your domain URL or XML sitemap URL Click on the Fetch Sitemap button to extract all the URLs In the Add Pages field, input individual URLs. Click Add for each URL. Prepare a CSV file with the list of URLs. Click Upload CSV to import the file. Local Testing Setup (Tunnel) : If scanning locally hosted URLs, add a Local Testing Setup/Tunnel to access non-public environments. Login Configuration : For pages behind authentication, use Add login configurations to open the login modal, pick a saved profile, or create one (Basic, Form, or Multi-page). You can also manage profiles from the dashboard Login configurations entry. See Login & Authentication for Scheduled Scans. Review Issues : Enable Needs Review for areas requiring manual inspection. Best Practices Issues : Check Best Practices to include suggestions for better accessibility.",
          "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/#step-3-add-pages-for-the-scan"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4. Create the Scan",
          "text": "Select between a Recurring scan (Recommended) or a Quick scan which allow you to perform an immediate scan of the provided URLs without scheduling. Specify the frequency (e.g., daily, weekly) and timing details. Once all details are configured, click Schedule Scan button. The Run Initial Scan checkbox, adds flexibility to the scheduling feature. If enabled: The scan will run immediately after configuration, regardless of the chosen recurring schedule. This is useful for verifying the setup and ensuring that the scan configuration works as intended.",
          "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/#step-4-create-the-scan"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Access Reports",
          "text": "Navigate to the Website Scanner section on the dashboard. Select the desired report from the Scan Summary list.",
          "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/#step-5-access-reports"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Analyze the Scan Report",
          "text": "After selecting a scan, A detailed scan report will open, as shown in the provided screenshot. The report will display the following key components: Total Issues : A graph summarizing the trend of detected issues over the last few runs. Severity Trend : A chart categorizing issues by severity (e.g., Critical, Serious, Moderate, Minor). Pages Scanned : A list of scanned pages with their corresponding issue counts categorized by severity. You can drill down into individual page URLs to view the number of issues found on that specific page using filters provided. From the scan report page, you can also edit, share and stop recurring scan if its no longer required.",
          "url": "https://www.testmuai.com/support/docs/accessibility-test-scheduling-scan/#step-6-analyze-the-scan-report"
        }
      ]
    }
  ]) }}
/>
:::note
Scheduled scans are supported on **desktop only**. You can schedule scans for websites and web apps that run on desktop browsers. **Native Android and iOS apps are not supported** in this flow. For mobile apps, see [Accessibility App Scanner](/support/docs/accessibility-app-scanner/) or [Native App Automation](/support/docs/accessibility-native-app-automation-test/).
:::

## Step 1: Access the Scheduled Scan Feature
- Open the Accessibility Testing Dashboard.
- Click the “Scheduled Scan” option from the menu.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/1.png').default} className="doc_img"/>

## Step 2: Configure the Scan
- Enter the Scan Name for identification.
- Select the desired WCAG version for compliance.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/2.png').default} className="doc_img"/>

## Step 3. Add Pages for the Scan

<Tabs className="docs__val">

<TabItem value="sitemap" label="Extract URLs from Sitemap" default>
- Enter your domain URL or XML sitemap URL
- Click on the Fetch Sitemap button to extract all the URLs
<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/3.2.png').default} className="doc_img"/>
</TabItem>

<TabItem value="manual" label="Add URLs Manually" default>
- In the Add Pages field, input individual URLs.
- Click Add for each URL.
<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/3.1.png').default} className="doc_img"/>
</TabItem>

<TabItem value="csv" label="Upload URLs via CSV" default>
- Prepare a CSV file with the list of URLs.
- Click Upload CSV to import the file.
<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/3.3.png').default} className="doc_img"/>
</TabItem>

</Tabs>

### Advanced Options
- **Local Testing Setup (Tunnel) :** If scanning locally hosted URLs, add a Local Testing Setup/Tunnel to access non-public environments. <NewTag value="Upcoming" />
- **Login Configuration :** For pages behind authentication, use **Add login configurations** to open the login modal, pick a saved profile, or create one (**Basic**, **Form**, or **Multi-page**). You can also manage profiles from the dashboard **Login configurations** entry. See **[Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)**.
- **Review Issues :** Enable Needs Review for areas requiring manual inspection.
- **Best Practices Issues :** Check Best Practices to include suggestions for better accessibility.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/3.4.png').default} className="doc_img"/>

## Step 4. Create the Scan
- Select between a Recurring scan (Recommended) or a Quick scan which allow you to perform an immediate scan of the provided URLs without scheduling.
- Specify the frequency (e.g., daily, weekly) and timing details.

Once all details are configured, click Schedule Scan button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/4.png').default} className="doc_img"/>

:::info
The **Run Initial Scan** checkbox, adds flexibility to the scheduling feature. If enabled:
- The scan will run immediately after configuration, regardless of the chosen recurring schedule.
- This is useful for verifying the setup and ensuring that the scan configuration works as intended.
:::

## Step 5: Access Reports
- Navigate to the Website Scanner section on the dashboard.
- Select the desired report from the Scan Summary list.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/5.png').default} className="doc_img"/>

## Step 6: Analyze the Scan Report
After selecting a scan, A detailed scan report will open, as shown in the provided screenshot. The report will display the following key components:
- **Total Issues :** A graph summarizing the trend of detected issues over the last few runs.
- **Severity Trend :** A chart categorizing issues by severity (e.g., Critical, Serious, Moderate, Minor).
- **Pages Scanned :** A list of scanned pages with their corresponding issue counts categorized by severity.

You can drill down into individual page URLs to view the number of issues found on that specific page using filters provided. From the scan report page, you can also edit, share and stop recurring scan if its no longer required.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/6.png').default} className="doc_img"/>
