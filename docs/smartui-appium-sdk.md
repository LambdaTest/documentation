---
id: smartui-appium-sdk
title: Mobile Visual Testing with SmartUI
sidebar_label: Mobile Testing
description: Learn how to integrate visual regression testing with LambdaTest SmartUI for mobile applications. Supports Appium, Espresso, and XCUI testing frameworks.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Mobile Testing
  - Appium
  - Espresso
  - XCUI
  - Mobile Visual Testing
url: https://www.lambdatest.com/support/docs/smartui-appium-sdk/
slug: smartui-appium-sdk/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smartui-appium-sdk/"
        }]
      })
    }}
></script>

LambdaTest SmartUI provides comprehensive visual regression testing for mobile applications across multiple platforms and testing frameworks. Whether you're testing native iOS, Android, or cross-platform mobile apps, SmartUI helps you catch visual regressions before they reach production.

## Supported Mobile Testing Frameworks

SmartUI supports three major mobile testing frameworks:

### Appium

**Appium** is an open-source tool for automating mobile application testing. It allows developers and testers to write tests for native, hybrid, and mobile web applications across multiple platforms (iOS and Android) using a single codebase.

**Supported Languages:**
- **Java**: Both SDK and Hooks integration available
- **JavaScript, Python, Ruby, C#**: Hooks integration available

**Documentation:**
- [Appium Overview](/support/docs/smartui-appium-sdk) - Integration methods and quick start
- [Appium Java SDK](/support/docs/smartui-appium-java-sdk) - Complete SDK guide for Java
- [Appium Hooks](/support/docs/smartui-appium-hooks) - Hooks integration for Java, JavaScript, Python, Ruby, C#

### Espresso

**Espresso** is Google's testing framework for Android, designed to simplify the process of writing reliable and efficient UI tests. It allows developers to create automated tests that simulate user interactions within Android apps.

**Supported Languages:**
- **Java, Kotlin**: Hooks integration available

**Documentation:**
- [Espresso Hooks](/support/docs/espresso-visual-regression) - Complete guide for Android testing

### XCUI (XCTest UI)

**XCUI** is Apple's native UI testing framework used for testing iOS applications. It is part of the XCTest framework and allows developers to write UI automation tests for iOS apps.

**Supported Languages:**
- **Swift, Objective-C**: Hooks integration available

**Documentation:**
- [XCUI Hooks](/support/docs/xcui-visual-regression) - Complete guide for iOS testing

## Integration Methods

LambdaTest SmartUI supports two integration methods for mobile testing:

### SDK Integration

**Available for:** Appium (Java only)

The SmartUI App SDK provides a native Java library for integrating visual regression testing into your Appium Java test suite. This method offers:

- Native Java API for screenshot capture
- Type-safe integration with your existing test framework
- Comprehensive error handling and logging

**Documentation**: [Appium Java SDK](/support/docs/smartui-appium-java-sdk) - Complete guide with best practices and troubleshooting

### Hooks Integration

**Available for:** Appium (Java, JavaScript, Python, Ruby, C#), Espresso, XCUI

For most mobile testing frameworks, SmartUI uses Hooks integration, which leverages framework-specific execute commands to capture screenshots. This method:

- Works with any compatible language
- Uses simple execute commands for screenshot capture
- Supports both viewport and full-page screenshots
- No additional SDK dependencies required

**Documentation:**
- [Appium Hooks](/support/docs/smartui-appium-hooks) - For JavaScript, Python, Ruby, C# implementations
- [Espresso Hooks](/support/docs/espresso-visual-regression) - For Android testing
- [XCUI Hooks](/support/docs/xcui-visual-regression) - For iOS testing

## Quick Start Guide

### Prerequisites

Before you begin, ensure you have:

- LambdaTest account with active subscription
- SmartUI project created in [LambdaTest SmartUI Dashboard](https://smartui.lambdatest.com/)
- Project Token (for SDK) or LambdaTest credentials (for Hooks)
- Mobile app (.apk for Android, .ipa for iOS) and test suite ready

### Step 1: Create a SmartUI Project

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform:
   - **CLI** for SDK integration (Appium Java)
   - **Real Device** for Hooks integration (Appium, Espresso, XCUI)
4. Add project name, approvers, and tags
5. Click on **Submit**

### Step 2: Set Up Authentication

Configure your credentials based on your integration method:

<Tabs className='docs__val' groupId='auth-method'>
<TabItem value='sdk' label='SDK (Project Token)' default>

**For Appium Java SDK:**

Set your Project Token as an environment variable:

<Tabs className='docs__val' groupId='sdk-platform'>
<TabItem value='macos-linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="your_project_token"
```

</TabItem>
<TabItem value='windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN=your_project_token
```

</TabItem>
<TabItem value='powershell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="your_project_token"
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value='hooks' label='Hooks (LambdaTest Credentials)'>

**For Appium Hooks (Java, JavaScript, Python, Ruby, C#), Espresso, and XCUI:**

Set your LambdaTest credentials:

<Tabs className='docs__val' groupId='hooks-platform'>
<TabItem value='macos-linux' label='MacOS/Linux' default>

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
<TabItem value='windows' label='Windows - CMD'>

```bash
set LT_USERNAME=your_username
set LT_ACCESS_KEY=your_access_key
```

</TabItem>
<TabItem value='powershell' label='PowerShell'>

```powershell
$env:LT_USERNAME="your_username"
$env:LT_ACCESS_KEY="your_access_key"
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

### Step 3: Choose Your Framework

Select the appropriate documentation based on your testing framework:

- **Appium (Java - SDK)**: [Appium Java SDK Guide](/support/docs/smartui-appium-java-sdk)
- **Appium (Java - Hooks)**: [Appium Hooks Guide](/support/docs/smartui-appium-hooks) - Java section
- **Appium (JavaScript, Python, Ruby, C#)**: [Appium Hooks Guide](/support/docs/smartui-appium-hooks)
- **Espresso (Android)**: [Espresso Hooks Guide](/support/docs/espresso-visual-regression)
- **XCUI (iOS)**: [XCUI Hooks Guide](/support/docs/xcui-visual-regression)

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='choose-framework' label='Choose Testing Framework' default>

**Choose Testing Framework**

- **Appium**: Best for cross-platform testing (iOS and Android with single codebase)
- **Espresso**: Best for native Android testing with Google's official framework
- **XCUI**: Best for native iOS testing with Apple's official framework
- Consider your team's expertise and existing test infrastructure

</TabItem>
<TabItem value='choose-integration-method' label='Choose Integration Method'>

**Choose Integration Method**

- **Java (Appium)**: Can use either SDK or Hooks integration
  - **SDK**: Recommended for type-safe, native Java API with comprehensive error handling
  - **Hooks**: Alternative option using execute commands, simpler setup
- **Other languages**: Use Hooks integration (JavaScript, Python, Ruby, C#)
- **Espresso/XCUI**: Use Hooks integration only

</TabItem>
<TabItem value='project-setup' label='Project Setup'>

**Project Setup**

- Create separate SmartUI projects for different apps or features
- Use meaningful project names that match your app or feature
- Configure approvers and tags for better organization
- Set up Project Token (SDK) or LambdaTest credentials (Hooks) before starting

</TabItem>
<TabItem value='screenshot-naming' label='Screenshot Naming'>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include screen/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Examples:**
- `HomeScreen-Header`
- `CheckoutScreen-PaymentForm`
- `ProductDetail-ImageGallery`

</TabItem>
<TabItem value='wait-for-screen-load' label='Wait for Screen Load'>

**Wait for Screen Load**

- Always wait for screens to fully load before taking screenshots
- Use framework-specific wait methods for dynamic content
- Consider device-specific loading times
- Add explicit waits for critical UI elements

</TabItem>
<TabItem value='handle-dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreBoxes` (Hooks) or `ignoreDOM` (SDK) for elements that change between runs
- Use `selectBoxes` (Hooks) or `selectDOM` (SDK) when you only need to compare specific regions
- Test XPath locators using framework-specific inspector tools before integrating
- Document why elements are ignored for future reference

</TabItem>
<TabItem value='device-configuration' label='Device Configuration'>

**Device Configuration**

- Use consistent device configurations across builds
- Test on devices that match your user base
- Document device configurations for reference
- Consider both iOS and Android platforms for comprehensive coverage

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-captured' label='Screenshots Not Captured' default>

**Issue: Screenshots Not Captured**

**Symptoms**: Tests run but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect (for SDK)
- `visual: true` not set in capabilities (for Hooks)
- Incorrect project name
- Network connectivity issues
- SDK/Hooks not properly integrated

**Solutions**:
1. **For SDK (Appium Java)**: Verify `PROJECT_TOKEN` is set correctly:
   ```bash
   echo $PROJECT_TOKEN
   ```

2. **For Hooks**: Verify `visual: true` is set in capabilities:
   ```javascript
   let capabilities = {
     visual: true, // Must be set
     // ... other capabilities
   };
   ```

3. Check project name matches exactly (case-sensitive)

4. Verify credentials are set:
   ```bash
   echo $LT_USERNAME
   echo $LT_ACCESS_KEY
   ```

5. Check network connectivity to LambdaTest servers

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: Project Not Found Error**

**Symptoms**: Error indicating SmartUI project cannot be found

**Possible Causes**:
- Project name typo or mismatch
- Project deleted
- Wrong account credentials
- Token from wrong project (for SDK)

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project name/token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`) for SDK
4. Check credentials match the account with the project

</TabItem>
<TabItem value='framework-selection' label='Framework Selection Confusion'>

**Issue: Framework Selection Confusion**

**Symptoms**: Unsure which framework or integration method to use

**Solutions**:
1. **Appium**: Use for cross-platform testing
   - Java: Use SDK integration (`smartui-appium-java-sdk`) or Hooks integration (`smartui-appium-hooks`)
   - JavaScript, Python, Ruby, C#: Use Hooks integration (`smartui-appium-hooks`)

2. **Espresso**: Use for native Android testing
   - Use Hooks integration (`espresso-visual-regression`)

3. **XCUI**: Use for native iOS testing
   - Use Hooks integration (`xcui-visual-regression`)

4. Review the specific framework documentation for detailed guidance

</TabItem>
<TabItem value='screenshots-show-blank-content' label='Screenshots Show Blank Content'>

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank screens or incorrect content

**Possible Causes**:
- Screen not fully loaded
- App state issues
- Timing issues
- Device-specific rendering

**Solutions**:
1. Add explicit waits before screenshots
2. Wait for specific elements to be visible
3. Increase wait time for slow-loading screens
4. Verify app is in correct state before screenshot

</TabItem>
</Tabs>

## Framework-Specific Documentation

For detailed integration steps and framework-specific guidance, refer to:

- **[Appium Java SDK](/support/docs/smartui-appium-java-sdk)** - Complete SDK guide with best practices and troubleshooting
- **[Appium Hooks](/support/docs/smartui-appium-hooks)** - Hooks integration for Java, JavaScript, Python, Ruby, and C#
- **[Espresso Hooks](/support/docs/espresso-visual-regression)** - Android testing with Espresso
- **[XCUI Hooks](/support/docs/xcui-visual-regression)** - iOS testing with XCUI

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for common issues
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle dynamic content in mobile apps
- [Baseline Management](/support/docs/smartui-baseline-management) - Manage your test baselines
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) - Configure SmartUI settings
