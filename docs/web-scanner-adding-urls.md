---
id: web-scanner-adding-urls
title: Adding URLs for Web Scanner
hide_title: false
sidebar_label: Adding URLs for Web Scanner
description: A guide on the different methods for adding URLs to your scan, including manual input, CSV file upload, and importing from a sitemap XML.
keywords:
  - testmu ai
  - web scanner
  - add urls
  - csv import
  - sitemap import
url: https://www.testmu.ai/support/docs/web-scanner-adding-urls
site_name: LambdaTest
slug: web-scanner-adding-urls
---

import CodeBlock from '@theme/CodeBlock';

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
          "name": "Adding URLs for Web Scanner",
          "item": `${BRAND_URL}/support/docs/web-scanner-adding-urls`
        }]
      })
    }}
></script>

## Step 3: Add URLs to Your Scan

After configuring the scan type (Step 2), the **Add URLs** section (Step 3) allows you to populate the test targets. You can choose from one of the following input methods.

### 1. Add URLs Manually

Use this method when you want full control over each scanned URL or you’re testing only a handful of critical paths.

<img loading="lazy" src={require('../assets/images/web-scanner/import-urls-manually.png').default} alt="Add URLs Manually" className="doc_img"/>

**Instructions:**
* Paste each URL in a new line or input box.
* Ensure proper formatting (`https://` required).

**Best for:**
* Login pages, checkout flows, admin pages.


### 2. Import via CSV File

Use this method when you already maintain URL lists in a spreadsheet or text file.


**CSV Format:**
One URL per line (no header).
```csv
[https://example.com](https://example.com)
[https://example.com/pricing](https://example.com/pricing)
[https://example.com/contact](https://example.com/contact)
```

**Instructions**:

* Click on Import CSV.

* Upload your .csv file.

* URLs will auto-populate the scan list.

Ideal for:

* Large teams with pre-approved page lists.

* Reusing URL sets across projects.

<img loading="lazy" src={require('../assets/images/web-scanner/import-urls-csv.png').default} alt="Import URLs via CSV File" className="doc_img"/>


### 3. Import via Sitemap
Use this method when:
* you want to extract URLs from an existing sitemap
* you’re scanning a dynamic, live website.

**Instructions**:
* Paste the sitemap URL (XML format).
* Click Fetch Sitemap.
* The scanner will auto-detect URLs.
* You can selectively check/uncheck desired pages.

Ideal for:
* Scanning large public websites.
* Ensuring complete coverage.

<img loading="lazy" src={require('../assets/images/web-scanner/import-urls-sitemap.png').default} alt="Import URLs via Sitemap" className="doc_img"/>

### URL Limits and Validations
**Max URL Limit**: would depend upon your SmartUI (*for visual scan*) and Accessibility (*for accessibility scan*) plan.

**All URLs must be valid and working.**

**Duplicate URLs will be auto-filtered**

**Reusability Tips**
* For frequently used URL sets, save them in CSVs and upload as needed.
* Create and save CSV url lists from sitemap and use in CSV mode for future.
