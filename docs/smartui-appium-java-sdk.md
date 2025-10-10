---
id: smartui-appium-java-sdk
title: SmartUI App SDK Integration Guide
sidebar_label: Appium Java SDK
description: Learn how to integrate SmartUI App SDK with your existing mobile app testing framework to perform visual regression testing on any cloud provider.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
  - Mobile App Testing
  - App Visual Testing

url: https://www.lambdatest.com/support/docs/smartui-appium-java-sdk  
slug: smartui-appium-java-sdk
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

---

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
          "item": "https://www.lambdatest.com/support/docs/smartui-app-sdk/"
        }]
      })
    }}
></script>

SmartUI App SDK enables you to perform visual regression testing on your mobile applications using any cloud testing provider. This guide will help you integrate SmartUI App SDK with your existing mobile app testing framework.

## Prerequisites

- Basic understanding of mobile app testing and Appium
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials
- An active [subscription](https://www.lambdatest.com/pricing) plan with valid screenshots limit

## Create a SmartUI Project

The first step is to create a project that will contain all your builds. To create a SmartUI Project:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `SDK` tests
4. Add name of the project, approvers for the changes found, and tags for filtering
5. Click on **Submit**

## Steps to Run Your First Test

### Step 1: Add the SmartUI SDK Dependency

Add the following dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-java-sdk</artifactId>
    <version>1.0.8</version>
</dependency>
```

### Step 2: Configure Your Project Token

You can configure your project token in one of two ways:

1. **Using Environment Variables**:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

2. **Directly in the Configuration**:
You can pass the project token directly in your test configuration as shown in Step 3.

### Step 3: Integrate SmartUI in Your Test Script

Import the required SmartUI class and add the screenshot capture code where needed:

```java
import io.github.lambdatest.SmartUIAppSnapshot;

public class YourTestClass {
    @Test
    public void testMethod() {
        // Initialize SmartUI
        SmartUIAppSnapshot SmartUI = new SmartUIAppSnapshot();

        // Configure screenshot settings
        Map<String, String> ssConfig = new HashMap<>();
        // Either use environment variable
        ssConfig.put("projectToken", "your-project-token-here"); // Use this if you are not setting the project token in environment variable      
        // ssConfig.put("buildName", "First Build"); // Optional 
        ssConfig.put("deviceName", "iPhone 15"); // Required, you can use the variables that you are setting in the cloud capabilities
    
        ssConfig.put("platform", "iOS"); // Optional,you can use the variables that you are setting in the cloud capabilities

        try {
            // Start SmartUI session
            SmartUI.start(ssConfig);

            // Your test code here
// Your test code here - Example of native app interactions
            driver.findElement(MobileBy.AccessibilityId("username-input")).sendKeys("test@example.com");
            driver.findElement(MobileBy.AccessibilityId("password-input")).sendKeys("password123");
            
            // Take screenshot of login form
            SmartUI.smartuiAppSnapshot(driver, "Login Form", ssConfig);
            
            driver.findElement(MobileBy.AccessibilityId("login-button")).click();
            
            // Wait for home screen to load
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("home-screen")));
            
            // Take screenshot of home screen
            SmartUI.smartuiAppSnapshot(driver, "Home Screen", ssConfig);

            // More test steps...

        } finally {
            // Stop SmartUI session
            SmartUI.stop();
        }
    }
}
```

### Step 4: Execute the Tests

Run your tests as you normally would with your cloud provider. SmartUI will automatically capture and process the screenshots for visual regression testing.

```bash
mvn test
```

## Configuration Options

### Screenshot Configuration Options

| Key | Description | Required |
|-----|-------------|----------|
| projectToken | Your SmartUI project token | Yes |
| deviceName | Name of the device being tested | Yes |
| buildName | Custom name for your build | No |
| platform | Platform being tested (iOS/Android) | No |

### Supported Platforms and Devices

The `deviceName` and `platform` parameters in SmartUI App SDK are used as metadata to ensure consistent screenshot comparison across builds. You can use any device name and platform that matches your cloud provider's capabilities:

```java
ssConfig.put("deviceName", "iPhone 15");
ssConfig.put("platform", "iOS");
```

#### Important Notes:
- It is advised to use the same `deviceName` and `platform` combination across builds to compare screenshots of the same device 
- These parameters are metadata tags and don't affect the actual device selection on your cloud provider

Example configurations for different cloud providers:

```java
// For an iOS test on LambdaTest
ssConfig.put("deviceName", "iPhone 12");
ssConfig.put("platform", "iOS");

// For an Android test on BrowserStack
ssConfig.put("deviceName", "Samsung Galaxy S22");
ssConfig.put("platform", "Android");

// For a custom device on any cloud provider
ssConfig.put("deviceName", "Custom Device Name"); // Use the same name consistently
ssConfig.put("platform", "iOS/Android"); // Use the actual platform
```

:::note
The device name and platform you specify here are used only for screenshot organization and comparison. The actual device selection is handled by your cloud provider's capabilities configuration.
:::

## Region-Based Ignore/Select Functionality for Dynamic Content

To handle dynamic content like timestamps, usernames, or ads that cause false positives in visual comparisons, SmartUI App SDK supports region-based ignore and select functionality using XPath locators.

You can either:
- **Ignore specific regions** during comparison using `ignoreBoxes`
- **Compare only specific regions** using `selectBoxes`

This feature requires the `Gson` library for JSON serialization. Add it to your `pom.xml` if not already present:

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
```

### Usage Examples

#### 1. Ignoring Regions (Recommended for Dynamic Content)

```java
SmartUIAppSnapshot smartUI = new SmartUIAppSnapshot();

Map<String, String> config = new HashMap<>();
config.put("projectToken", "your-project-token-here");
config.put("deviceName", "Pixel 6");
config.put("fullPage", "true");

// Define XPaths of elements to ignore
List<String> ignoreXpath = Arrays.asList(
    "//*[@text=\"Backpack\"]",
    "//*[@text=\"Onesie\"]",
    "//*[@text=\"PRODUCTS\"]",
    "//*[@text=\"Terms of Service | Privacy Policy\"]"
);

Map<String, Object> ignoreBoxesMap = new HashMap<>();
ignoreBoxesMap.put("xpath", ignoreXpath);

Gson gson = new Gson();
config.put("ignoreBoxes", gson.toJson(ignoreBoxesMap));

smartUI.start(config);
smartUI.smartuiAppSnapshot(driver, "SmartUIAndroid", config);
smartUI.stop();
```

#### 2. Selecting Specific Regions for Comparison

```java
// Replace "ignoreBoxes" with "selectBoxes" to compare only specified regions
Map<String, Object> selectBoxesMap = new HashMap<>();
selectBoxesMap.put("xpath", Arrays.asList("//*[@resource-id='primary-content']"));

config.put("selectBoxes", gson.toJson(selectBoxesMap));
```

### Configuration Keys

| Key | Type | Description | Required |
|-----|------|-------------|----------|
| `ignoreBoxes` | JSON String | Defines regions to ignore during visual comparison. Accepts XPath locators. | No |
| `selectBoxes` | JSON String | Defines regions to include in visual comparison. Accepts XPath locators. | No |

:::note Best Practices
- Use `ignoreBoxes` for elements that change frequently (e.g., ads, timestamps, user avatars).
- Use `selectBoxes` when you want to focus comparison only on critical UI sections.
- Avoid using both `ignoreBoxes` and `selectBoxes` in the same config — they are mutually exclusive.
- Ensure XPath expressions are unique and stable across test runs.
:::

## View SmartUI Results

After test execution, visit your SmartUI project dashboard to:

1. View all captured screenshots
2. Compare against baseline images
3. Identify visual regressions
4. Approve or reject changes
5. Manage baseline images

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="SmartUI Results" width="768" height="373" className="doc_img"/>

For additional information about SmartUI APIs, please explore the documentation [here](https://www.lambdatest.com/support/api-doc/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link"> SmartUI Appium Java SDK </span>
    </li>
  </ul>
</nav>