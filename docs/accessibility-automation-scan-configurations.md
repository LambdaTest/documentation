---
id: accessibility-automation-scan-configurations
title: Scan Configurations via Capabilities (Automation)
sidebar_label: Scan Configurations (Capabilities)
description: "Configure mobile app accessibility scans in automation through Appium capabilities: master toggle, WCAG version, and Best Practice, Beta, and AI rule groups."
keywords:
  - mobile accessibility automation
  - accessibility capabilities
  - wcagVersion capability
  - bestPractice betaRules aiEnabled
  - appium accessibility scan config
url: https://www.testmuai.com/support/docs/accessibility-automation-scan-configurations/
site_name: TestMu AI
slug: accessibility-automation-scan-configurations/
canonical: https://www.testmuai.com/support/docs/accessibility-automation-scan-configurations/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Native App Automation",
          "item": `${BRAND_URL}/support/docs/accessibility-native-app-automation-test/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Scan Configurations via Capabilities",
          "item": `${BRAND_URL}/support/docs/accessibility-automation-scan-configurations/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-automation-scan-configurations/"
    },
    "headline": "Scan Configurations via Capabilities (Automation)",
    "description": "Configure mobile app accessibility scans in automation through Appium capabilities: master toggle, WCAG version, and Best Practice, Beta, and AI rule groups.",
    "url": "https://www.testmuai.com/support/docs/accessibility-automation-scan-configurations/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "mobile accessibility automation",
      "accessibility capabilities",
      "wcagVersion capability"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "An Appium test project targeting TestMu AI real devices (Android or iOS).; LT_USERNAME / LT_ACCESS_KEY available to the process.; Accessibility enabled on the session via the accessibility master capability..",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Example: setting capabilities (Capabilities (JSON))",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"accessibility\": true,\n  \"accessibility.wcagVersion\": \"wcag21aa\",\n  \"accessibility.bestPractice\": true,\n  \"accessibility.betaRules\": true,\n  \"accessibility.aiEnabled\": false\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example: setting capabilities (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "MutableCapabilities caps = new MutableCapabilities();\ncaps.setCapability(\"accessibility\", true);\ncaps.setCapability(\"accessibility.wcagVersion\", \"wcag21aa\");\ncaps.setCapability(\"accessibility.bestPractice\", true);\ncaps.setCapability(\"accessibility.betaRules\", true);\ncaps.setCapability(\"accessibility.aiEnabled\", false);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "caps = {\n    \"accessibility\": True,\n    \"accessibility.wcagVersion\": \"wcag21aa\",\n    \"accessibility.bestPractice\": True,\n    \"accessibility.betaRules\": True,\n    \"accessibility.aiEnabled\": False,\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "JavaScript",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  \"accessibility\": true,\n  \"accessibility.wcagVersion\": \"wcag21aa\",\n  \"accessibility.bestPractice\": true,\n  \"accessibility.betaRules\": true,\n  \"accessibility.aiEnabled\": false,\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "With these capabilities in place, the scan is triggered at each stable screen",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.executeScript(\"lambda-accessibility-scan\");"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Scan Configurations via Capabilities (Automation)

In automation there is no scan-configuration panel. The scan scope is supplied through each test's **capabilities**, so every test carries its own configuration and the effective rule set is derived from these values. This is the automation counterpart to the manual [Scan Configurations](/support/docs/accessibility-app-scanner-scan-configurations/) panel.

:::note
Individual rules and whole rule categories can be removed from an automation scan with the `accessibility.excludeRules` and `accessibility.excludeRuleCategories` capabilities. See [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/).
:::

:::note
The capabilities on this page scope **what** a scan checks. **When** a scan runs is a separate choice: the `lambda-accessibility-scan` hook at each stable screen, or `accessibility.autoScan` to scan every screen the test reaches. See [AutoScan for Mobile App Accessibility](/support/docs/accessibility-mobile-autoscan/).
:::

## When to use this

Use these capabilities when users **already run Appium** against <BrandName /> real devices and want each accessibility scan scoped to a specific WCAG target and set of rule groups, without opening a UI. See [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/) for the surrounding test setup and the `lambda-accessibility-scan` hook.

## Prerequisites

- An Appium test project targeting <BrandName /> **real devices** (Android or iOS).
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- Accessibility enabled on the session via the `accessibility` master capability.

## Capabilities reference

| Capability | Type | Allowed values | Default (RD App Automation) |
|---|---|---|---|
| `accessibility` | boolean | `true` / `false` | - (master toggle, must be `true` to enable a11y scanning) |
| `accessibility.wcagVersion` | string | `wcag2a`, `wcag2aa`, `wcag2aaa`, `wcag21a`, `wcag21aa`, `wcag21aaa`, `wcag22a`, `wcag22aa`, `wcag22aaa` | `wcag21aa` |
| `accessibility.bestPractice` | boolean | `true` / `false` | `true` |
| `accessibility.betaRules` | boolean | `true` / `false` | `true` |
| `accessibility.aiEnabled` | boolean | `true` / `false` | `false` |
| `accessibility.excludeRules` | array of strings, or a comma-separated string | Rule IDs from the mobile rules catalog | none |
| `accessibility.excludeRuleCategories` | array of strings, or a comma-separated string | Category slugs, for example `color-contrast` | none |
| `accessibility.autoScan` | boolean | `true` / `false` | `false` |
| `accessibility.intelligentScan` | boolean | `true` / `false` | `true` (only when `autoScan` is `true`) |
| `accessibility.intelligentScanThreshold` | integer | `0` to `99` | `95` (only when `autoScan` is `true`) |

Notes:

- Defaults apply only when `accessibility` is `true` and the specific capability is omitted.
- `accessibility.autoScan` and its two child capabilities control **when** scans are triggered rather than what they check. They are summarised here for completeness and documented in full, with the trigger list, pause and resume, and the Android and iOS timing difference, in [AutoScan for Mobile App Accessibility](/support/docs/accessibility-mobile-autoscan/). The child capabilities are ignored when `accessibility.autoScan` is `false`.
- `accessibility.aiEnabled` is the same AI toggle used elsewhere in accessibility; it is reused here.
- A backend capability `accessibility.needsReview` also exists but is not part of the standard automation scan config (defaults off).
- `accessibility.excludeRules` and `accessibility.excludeRuleCategories` are optional and mobile-only. Accepted values, precedence and error handling are described in [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/).

## How the effective rule set is computed

The rule set for a test is derived from the WCAG version and the group toggles, using the same logic as the manual panel:

- **WCAG inheritance.** A higher version or level includes the lower ones. Selecting `wcag21aa` runs every rule whose success criterion is in WCAG **2.0 or 2.1** at level **A or AA**. WCAG 2.2 rules and AAA-only rules are not included until the version or level is raised.
- **Group combination.** Some rules carry a Best Practice, Beta, or AI tag. A rule runs only if **both** its WCAG criterion is in range **and** every tag it carries is switched on. For example, a Best Practice rule is skipped when `accessibility.bestPractice` is `false`, even if its WCAG criterion is in range.
- **Exclusions.** Rules named in `accessibility.excludeRules`, and every rule in a category named in `accessibility.excludeRuleCategories`, are removed after the WCAG and group filters. Exclusion only ever removes rules; it never adds a rule back. See [Rule and Category Exclusion](/support/docs/accessibility-mobile-rule-exclusion/#how-the-effective-rule-set-is-resolved).

## Example: setting capabilities

Enable accessibility, target WCAG 2.1 AA, keep Best Practice and Beta rules on, and leave AI rules off.

<VerifiedTag value="Verified" />

<Tabs className="hidden">
<TabItem value="json" label="Capabilities (JSON)" default>

```json
{
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa",
  "accessibility.bestPractice": true,
  "accessibility.betaRules": true,
  "accessibility.aiEnabled": false
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("accessibility", true);
caps.setCapability("accessibility.wcagVersion", "wcag21aa");
caps.setCapability("accessibility.bestPractice", true);
caps.setCapability("accessibility.betaRules", true);
caps.setCapability("accessibility.aiEnabled", false);
```

</TabItem>
<TabItem value="python" label="Python">

```python
caps = {
    "accessibility": True,
    "accessibility.wcagVersion": "wcag21aa",
    "accessibility.bestPractice": True,
    "accessibility.betaRules": True,
    "accessibility.aiEnabled": False,
}
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const capabilities = {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa",
  "accessibility.bestPractice": true,
  "accessibility.betaRules": true,
  "accessibility.aiEnabled": false,
};
```

</TabItem>
</Tabs>

With these capabilities in place, the scan is triggered at each stable screen:

<VerifiedTag value="Verified" />

```java
driver.executeScript("lambda-accessibility-scan");
```

Only the rules in the effective set are evaluated, and the report for that build contains results for exactly those rules.

## What to expect in results

- **Scoped results.** Each scan reports violations only for the rules in the test's effective set. Rules outside the WCAG range or behind an off group toggle do not appear and do not affect the accessibility score for that scan.
- **Configuration recorded with the test.** The WCAG version and group toggles are stored alongside the scan, so the team can always see how a given result was produced.
- **Applied rules are visible in the report.** The report header shows the applied configuration as tags (for example, **WCAG 2.1 AA**, **Best Practices**, **Beta Rules**), and the **Applied Settings** panel lists every rule that was evaluated, grouped by category and searchable, so the exact selected rules can be confirmed for any scan. Rules removed by an exclusion are listed under **Excluded by category** and **Excluded by rule**.

The report shows the applied WCAG target and group tags, and the **Applied Settings** panel lists the selected rules by category:

{/* IMAGE PLACEHOLDER: report Applied Settings panel showing the rules evaluated for the scan. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/features/scan-configurations/applied-settings-report.png').default} alt="Accessibility report header with WCAG 2.1 AA, Best Practices and Beta Rules tags, and the Applied Settings panel listing evaluated rules grouped by category such as Accessibility Labels" className="doc_img"/>
*/}

## Product boundary

This page covers configuring scans through **capabilities in automation**. For hand-picking individual rules and reusing last-used settings in the **manual** App Scanner flow, see [Scan Configurations (Manual)](/support/docs/accessibility-app-scanner-scan-configurations/).

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Scan Configurations (Manual)](/support/docs/accessibility-app-scanner-scan-configurations/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
- [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/)
- [AutoScan for Mobile App Accessibility](/support/docs/accessibility-mobile-autoscan/)
