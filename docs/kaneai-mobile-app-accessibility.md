---
id: kaneai-mobile-app-accessibility
title: Mobile App Accessibility Testing
hide_title: false
sidebar_label: Mobile App Accessibility
description: Learn how to perform automated accessibility testing for native mobile applications using KaneAI's accessibility scan feature.
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai mobile app
  - accessibility testing
  - mobile accessibility
  - accessibility scan
url: https://www.lambdatest.com/support/docs/kaneai-mobile-app-accessibility/
site_name: LambdaTest
slug: kaneai-mobile-app-accessibility/
---

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
          "name": "Mobile App Accessibility Testing",
          "item": "https://www.lambdatest.com/support/docs/kaneai-mobile-app-accessibility"
        }]
      })
    }}
></script>

# Mobile App Accessibility Testing

Mobile app accessibility testing enables automated accessibility scanning for native mobile applications in KaneAI. This feature performs accessibility checks during test execution, helping identify accessibility issues and ensure compliance with accessibility standards.

<!-- :::info Prerequisite
The **Native App Accessibility** add-on must be enabled for your account to use this feature.
::: -->

---


### Platform Support

| Platform | Supported Versions | Notes |
|----------|-------------------|-------|
| **iOS** | 17.0 and above | Versions below 17.0 will pass tests but won't generate accessibility reports |
| **Android** | All versions | Full support for accessibility scanning |


---

## How It Works

### Step 1: Add Accessibility Scan Instruction

During test authoring, add the accessibility scan instruction:

1. Navigate to the screen you want to scan
2. Type "/" in the input box and click on **Accessibility scan**
3. The instruction is recorded as part of the test flow
4. The current screen is marked for accessibility scanning

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/add-accessibility-instruction.png').default} alt="add-accessibility-instruction" className="doc_img"/>

### Step 2: Instruction Recording

When the accessibility scan instruction is added:

- The instruction is recorded in the test execution flow
- The current screen is marked to be scanned using the app scanner hook for accessibility
- The scan hook is triggered during test execution at the corresponding screen

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/accessibility-instruction-authored.png').default} alt="accessibility-instruction-authored" className="doc_img"/>

### Step 3: Test Case Creation

Once the test is saved:

- A test case is automatically created with the **`accessibility-scan`** tag
- The accessibility scan instruction is visible in the test case summary
- Use this tag to filter and identify tests that include accessibility scanning

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/test-case-summary.png').default} alt="test-case-summary" className="doc_img"/>

To view the screenshot of the screen where the accessibility scan was performed, click the (•••) icon.

<img loading="lazy" src={require('../assets/images/kane-ai/features/mobile-accessibility/accessibility-screenshot.png').default} alt="accessibility-screenshot" className="doc_img"/>

### Step 4: Execution and Reporting

During automated test execution:

- The accessibility scan is performed at the corresponding screen
- Accessibility issues are detected and categorized
- The accessibility report is available in the test execution results on Automation dashboard

---


## Key Features

| Feature | Description |
|---------|-------------|
| **Native App Scanning** | Uses platform-native accessibility scan hooks |
| **Automatic Tagging** | Tests are automatically tagged with `accessibility-scan` for easy identification |
| **Test Case Integration** | Accessibility instructions are visible in test case summaries |
| **Automated Reporting** | Accessibility reports are generated during test execution |
| **Cross-Platform Support** | Works on iOS 17+ and all Android versions |

---

## Troubleshooting

### No Accessibility Report Generated

**Possible Cause:**
- iOS version is below 17.0 (tests will execute but no report is generated)

### Accessibility Scan Instruction Not Recorded

**Possible Causes:**
- Instruction not properly added during authoring
- Test not saved after adding the instruction

**Solutions:**
1. Verify the instruction was added correctly during authoring
2. Ensure the test is saved after adding the accessibility instruction
3. Check the test case summary for accessibility instruction visibility

