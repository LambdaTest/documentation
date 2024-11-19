---
id: accessibility-test-scheduling
title: Accessibility Test Scheduling
hide_title: false
sidebar_label: Accessibility Test Scheduling
description: Customize your testing with LambdaTest Accessibility DevTools' extensive settings, tailored to meet your specific needs and preferences.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - DevTools
    - Accessibility Testing Settings
url: https://www.lambdatest.com/support/docs/accessibility-test-scheduling/
site_name: LambdaTest
slug: accessibility-test-scheduling/
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
          "name": "Accessibility Test Scheduling",
          "item": "https://www.lambdatest.com/support/docs/accessibility-test-scheduling/"
        }]
      })
    }}
></script>
Web accessibility ensures that all users, including those with disabilities, can access and interact with web content. The process of manually verifying accessibility compliance is often time-consuming and prone to errors. To address this, the **Scheduled Accessibility Scan** feature allows you to automate accessibility checks for websites based on specified **WCAG (Web Content Accessibility Guidelines)** standards, making the process efficient and reliable.

This guide explains how to schedule, configure, and manage accessibility scans using the **Accessibility Testing Dashboard**.

## Key Features
- **Automated Scheduling :** Set up recurring or one-time scans for your websites.
- **WCAG Compliance :** Ensure your websites adhere to WCAG standards (selectable version).
- **Local and Authenticated Pages :** Configure scans for local environments and authenticated pages.
- **Comprehensive Reporting :** Receive detailed scan reports via email and access them on the dashboard.

## Steps to Schedule an Accessibility Scan
### Step 1: Access the Scheduled Scan Feature
- Open the Accessibility Testing Dashboard.
- Click the “Scheduled Scan” option from the menu.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/1.png').default} className="doc_img"/>

### Step 2: Configure the Scan
- Enter the Scan Name for identification.
- Select the desired WCAG version for compliance.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/2.png').default} className="doc_img"/>

### Step 3. Add Pages for the Scan

<Tabs className="docs__val">

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

<TabItem value="sitemap" label="Extract URLs from Sitemap" default>
- Enter your domain URL or XML sitemap URL
- Click on the Fetch Sitemap button to extract all the URLs
<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/3.2.png').default} className="doc_img"/>
</TabItem>

</Tabs>

#### Advanced Options
- **Local Testing Setup :** If scanning locally hosted URLs, add a Local Testing Setup/Tunnel to access non-public environments.
- **Login Configuration :** For pages requiring authentication, configure the Login Settings by providing credentials or session details.
- **Review Issues :** Enable Needs Review for areas requiring manual inspection.
- **Best Practices Issues :** Check Best Practices to include suggestions for better accessibility.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/3.4.png').default} className="doc_img"/>

### Step 4. Create the Scan
- Select between a Recurring scan (Recommended) or a Quick scan.
- Specify the frequency (e.g., daily, weekly) and timing details.

Once all details are configured, click Schedule Scan button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/4.png').default} className="doc_img"/>

### Step 5: Access Reports
- Navigate to the Website Scanner section on the dashboard.
- Select the desired report from the Scan Summary list.

<img loading="lazy" src={require('../assets/images/accessibility-testing/schedule-scan/5.png').default} className="doc_img"/>
