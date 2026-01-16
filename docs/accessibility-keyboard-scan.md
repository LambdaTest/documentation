---
id: accessibility-keyboard-scan
title: Keyboard Accessibility Scan (Beta)
hide_title: false
sidebar_label: Keyboard Scan
description: Keyboard Accessibility Scanning tools highlight tab stops sequentially, making tab order identification effortless. Users can review the results, mark any overlooked interactive elements, and generate detailed keyboard accessibility reports.
keywords:
  - TestMu AI
  - Accessibility
  - Testing
  - DevTools
  - run quick scan
  - test issues
  - Keyboard Scan
  - Tab Order
url: https://www.testmu.ai/support/docs/accessibility-keyboard-scan/
site_name: LambdaTest
slug: accessibility-keyboard-scan
canonical: https://www.testmu.ai/support/docs/accessibility-keyboard-scan/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "What is Accessibility Testing",
          "item": `${BRAND_URL}/support/docs/accessibility-keyboard-scan/`
        }]
      })
    }}
></script>

## Overview

The Assistive Keyboard Accessibility Test combines automated tab simulation with guided manual verification to identify keyboard accessibility issues. It helps ensure all interactive elements on your web page are accessible via keyboard navigation.

## Running a Keyboard Test

**Step 1: Initiate the Test**

1. Navigate to the web page you want to test
2. Open the Accessibility Devtools from your chrome devtools option
3. Under Assistive Tests, select Keyboard Scan

**Step 2: Select Test Scope**

Choose how much of the page you want to test:

- **Full Page**: Tests the entire page for keyboard accessibility
- **Partial Page**: Allows you to select a specific section or component
  - After selecting this option, click and drag to highlight the area you want to test
  - Or click on a container element to test that specific section

> **Tip**: For complex pages, start with partial page tests on individual components before running a full page test.

**Step 3: Review Tab Simulation Results**

The tool will automatically:

1. Simulate pressing the Tab key through your selected scope
2. Identify all elements that receive keyboard focus
3. Display a list of found tabbable elements
4. Show the total count of tabbable items

The results will be displayed both as : A numbered list in the tool interface and Visual highlights on the actual page elements.

**Step 4: Identify Missing Interactive Elements**

The tool will ask: "Are there any interactive elements within the scope that should be reachable via the Tab key but were not included in the list above?"

If you select "**No**":

- The manual verification is complete
- No manual issues are logged
- The test proceeds to generate the final report

If you select "**Yes**":

- You'll see the prompt: "Please click on the interactive element(s) that were missed in the tab order"
- Click on any interactive elements (buttons, links, form fields, etc.) that should be keyboard accessible but weren't in the tab list.
- Each element you select will be logged as an accessibility violation.
- Click Confirm Selection when you've identified all missing elements

**Step 5: Review Automated Findings**

While you're performing the manual check, the tool runs our accessibility automated engine in the background to detect automated keyboard accessibility issues such as:

- Illogical focus order
- Nested interactive elements
- Scrollable regions without keyboard access
- Focus indicators missing or unclear

<br/>

## Frequently Asked Questions

**Q: Can this tool test keyboard navigation within iframes?**

A: The tool attempts to test iframe content when possible, but cross-origin iframes may have limitations due to security restrictions.

**Q: Why didn't the tool detect my custom dropdown menu?**

A: Complex widgets with dynamic content may require manual identification. Use the "Yes" option in Step 4 to mark these elements.

**Q: How is this different from a regular axe-core scan?**

A: This test combines axe-core's automated checks with guided manual testing to catch issues that automated tools alone might miss, particularly custom interactive elements.

**Q: Can I save and share test results?**

A: Yes, test results can be exported and shared with your team. Look for the export options in the report view.
