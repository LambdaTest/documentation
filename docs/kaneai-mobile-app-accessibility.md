---
id: kaneai-mobile-app-accessibility
title: How to Run Accessibility Scans With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Mobile App Accessibility
description: Add an accessibility scan to a KaneAI mobile test to automatically check a native app screen and produce a report.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai mobile app
  - accessibility testing
  - mobile accessibility
  - accessibility scan
url: https://www.testmuai.com/support/docs/kaneai-mobile-app-accessibility/
site_name: TestMu AI
slug: kaneai-mobile-app-accessibility/
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
          "name": "Mobile App Accessibility in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-mobile-app-accessibility/`
        }]
      })
    }}
></script>

# How to Run Accessibility Scans With KaneAI
***


Add an accessibility scan to a KaneAI-authored mobile test to check a native app screen automatically during test execution. KaneAI records the scan as a test step, runs it at the marked screen, and produces an accessibility report in the automation results.

:::note
Scanning from a **KaneAI-authored** flow is one of three entry points for mobile accessibility. To trigger scans from Appium code, see [Accessibility Native App Automation Test](/support/docs/accessibility-native-app-automation-test/); for manual, screen-by-screen validation on a real device, use the [Accessibility App Scanner](/support/docs/accessibility-app-scanner/).
:::

## Prerequisites
***

:::note
Before you add an accessibility scan, make sure you have:
- A KaneAI mobile app test authoring session (Android or iOS).
- For accessibility reports on iOS, a device running iOS 17.0 or above (see the platform support table below).
:::

## Platform Support
***

Report generation depends on the platform version, as shown below.

| Platform | Supported Versions | Notes |
|----------|-------------------|-------|
| **iOS** | 17.0 and above | Versions below 17.0 pass the test but do not generate an accessibility report |
| **Android** | All versions | Full support for accessibility scanning |

## How to Add and Run an Accessibility Scan
***

Follow these steps to add a scan instruction during authoring and review its report after execution.

### Step 1: Add the Scan Instruction
***

During test authoring, add the accessibility scan instruction to the screen you want to check.

1. Navigate to the screen you want to scan.
2. Type `/` in the input box and click **Accessibility scan**.
3. KaneAI records the instruction as part of the test flow.
4. KaneAI marks the current screen for accessibility scanning.

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/add-accessibility-instruction.webp').default} alt="add-accessibility-instruction" className="doc_img"/>

**Result:** The scan instruction is added and the current screen is marked for scanning.

### Step 2: Confirm the Instruction Is Recorded
***

Once added, the scan instruction is recorded in the test execution flow.

- The current screen is marked to be scanned using the app scanner accessibility hook.
- The scan hook triggers during test execution at that screen.

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/accessibility-instruction-authored.png').default} alt="accessibility-instruction-authored" className="doc_img"/>

**Result:** The scan hook is bound to the marked screen and will run at execution time.

### Step 3: Save the Test Case
***

When you save the test, KaneAI creates the test case with an accessibility tag.

- The test case is tagged `accessibility-scan` automatically.
- The scan instruction is visible in the test case summary.
- Filter by this tag to find tests that include accessibility scanning.

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/test-case-summary.png').default} alt="test-case-summary" className="doc_img"/>

To view the screenshot of the scanned screen, click the (•••) icon.

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/accessibility-screenshot.png').default} alt="accessibility-screenshot" className="doc_img"/>

**Result:** A tagged test case is saved with the scan instruction in its summary.

### Step 4: Execute and Review the Report
***

During automated execution, KaneAI runs the scan and reports issues.

- The accessibility scan runs at the marked screen.
- Detected issues are categorized.
- The accessibility report appears in the test execution results on the Automation dashboard.

**Result:** The run produces a categorized accessibility report in the automation results.


## What the Scan Provides
***

The accessibility scan gives you the following in a KaneAI mobile test.

| Feature | Description |
|---------|-------------|
| **Native App Scanning** | Uses platform-native accessibility scan hooks |
| **Automatic Tagging** | Tags tests with `accessibility-scan` for identification |
| **Test Case Integration** | Shows accessibility instructions in test case summaries |
| **Automated Reporting** | Generates accessibility reports during test execution |
| **Cross-Platform Support** | Works on iOS 17+ and all Android versions |

## Troubleshooting
***

Use this section to resolve the common scan failures.

### No Accessibility Report Is Generated
***

**What you see:** the test passes but no accessibility report appears in the results.

**Why it happens:** the device runs iOS below 17.0, which executes the test but does not generate a report.

**Fix:** run the test on a device with iOS 17.0 or above.

### The Scan Instruction Is Not Recorded
***

**What you see:** the `accessibility-scan` tag or the scan step is missing from the test case.

**Why it happens:** the instruction was not added correctly during authoring, or the test was not saved after adding it.

**Fix:**
1. Verify the instruction was added during authoring.
2. Save the test after adding the accessibility instruction.
3. Confirm the scan instruction appears in the test case summary.

## Next Steps
***

Extend accessibility coverage across your mobile tests.

- Apply platform-specific patterns from [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/).
- Reach a specific screen to scan with [KaneAI Deeplink Support](/support/docs/kane-ai-deeplink-support/).

