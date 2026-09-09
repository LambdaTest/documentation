---
id: har-log-viewer
title: HAR Log Viewer With Waterfall
sidebar_label: Inspect HAR Logs
description: Analyze web page performance with the HAR Log Viewer and Waterfall chart for Selenium tests on TestMu AI.
keywords:
  - har log viewer
  - har waterfall chart
  - network performance selenium
  - har log viewer testmu ai
  - selenium network logs
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/har-log-viewer-with-waterfall/
site_name: TestMu AI
slug: har-log-viewer-with-waterfall/
canonical: https://www.testmuai.com/support/docs/har-log-viewer-with-waterfall/
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
          "name": "HAR Log Viewer With Waterfall",
          "item": `${BRAND_URL}/support/docs/har-log-viewer-with-waterfall/`
        }]
      })
    }}
></script>

---

The HAR (HTTP Archive) Log Viewer with Waterfall displays how resources on a web page load and interact over time. Use it to identify bottlenecks and optimize page performance in your Selenium tests.

## How to Use the HAR Log Viewer
---

Enable HAR logging by passing `network.full.har = true` in your test capabilities.

Once the test runs, open the Web Automation Dashboard and navigate to the **Network** tab to see the waterfall chart.

<img loading="lazy" src={require('../assets/images/har_waterfall.png').default} alt="HAR Log Viewer waterfall chart showing resource load times" width="1342" height="643" className="doc_img"/>

Each resource (HTML, CSS, JavaScript, images) appears as a horizontal bar. The bar length shows load time, and the sequence reflects the order the browser requested them.

## Use Cases
---

Apply the HAR Log Viewer to diagnose and improve page performance.

- **Performance optimization** - Pinpoint slow-loading resources and compress images, minify CSS/JS, or improve caching.
- **Load order diagnosis** - Check if critical CSS and JavaScript load before non-essential resources.
- **Network issue identification** - Determine if delays are server-side (slow time to first byte) or network-related (slow download).
- **Performance monitoring** - Compare HAR logs over time to detect degradation after deployments.
- **Third-party resource impact** - Measure how ads, analytics scripts, and other external resources affect load time.
- **Before/after comparison** - Compare HAR files before and after optimization to measure improvements.
- **Cross-browser analysis** - Analyze HAR files from different browsers to understand loading differences.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        HAR Log Viewer With Waterfall
      </span>
    </li>
  </ul>
</nav>
