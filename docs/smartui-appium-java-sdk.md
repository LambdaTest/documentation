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

url: https://www.testmuai.com/support/docs/smartui-appium-java-sdk/
slug: smartui-appium-java-sdk/
canonical: https://www.testmuai.com/support/docs/smartui-appium-java-sdk/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-app-sdk/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-appium-java-sdk/"
    },
    "headline": "SmartUI App SDK Integration Guide",
    "description": "Learn how to integrate SmartUI App SDK with your existing mobile app testing framework to perform visual regression testing on any cloud provider.",
    "url": "https://www.testmuai.com/support/docs/smartui-appium-java-sdk/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Basic understanding of mobile app testing and Appium; Login to TestMu AI SmartUI with your credentials; An active subscription plan with valid screenshots limit.",
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
        "name": "Add the following dependency to your pom.xml file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<dependency>\n    <groupId>io.github.lambdatest<\/groupId>\n    <artifactId>lambdatest-java-sdk<\/artifactId>\n    <version>1.0.23<\/version>\n<\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using Environment Variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Configure Your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set PROJECT_TOKEN=123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Configure Your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:PROJECT_TOKEN=123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Import the required SmartUI class and add the screenshot capture code where needed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "\npublic class YourTestClass {\n    @Test\n    public void testMethod() {\n        // Initialize SmartUI\n        SmartUIAppSnapshot SmartUI = new SmartUIAppSnapshot();\n\n        // Configure screenshot settings\n        Map<String, String> ssConfig = new HashMap<>();\n        // Either use environment variable\n        ssConfig.put(\"projectToken\", \"your-project-token-here\"); // Use this if you are not setting the project token in environment variable\n        // ssConfig.put(\"buildName\", \"First Build\"); // Optional\n        ssConfig.put(\"deviceName\", \"iPhone 15\"); // Required, you can use the variables that you are setting in the cloud capabilities\n\n        ssConfig.put(\"platform\", \"iOS\"); // Optional,you can use the variables that you are setting in the cloud capabilities\n\n        try {\n            // Start SmartUI session\n            SmartUI.start(ssConfig);\n\n            // Your test code here\n// Your test code here - Example of native app interactions\n            driver.findElement(MobileBy.AccessibilityId(\"username-input\")).sendKeys(\"test@example.com\");\n            driver.findElement(MobileBy.AccessibilityId(\"password-input\")).sendKeys(\"password123\");\n\n            // Take screenshot of login form\n            SmartUI.smartuiAppSnapshot(driver, \"Login Form\", ssConfig);\n\n            driver.findElement(MobileBy.AccessibilityId(\"login-button\")).click();\n\n            // Wait for home screen to load\n            WebDriverWait wait = new WebDriverWait(driver, 10);\n            wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId(\"home-screen\")));\n\n            // Take screenshot of home screen\n            SmartUI.smartuiAppSnapshot(driver, \"Home Screen\", ssConfig);\n\n            // More test steps...\n\n        } finally {\n            // Stop SmartUI session\n            SmartUI.stop();\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Execute the Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can use any device name and platform that matches your cloud provider's capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ssConfig.put(\"deviceName\", \"iPhone 15\");\nssConfig.put(\"platform\", \"iOS\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example configurations for different cloud providers",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// For an iOS test on LambdaTest\nssConfig.put(\"deviceName\", \"iPhone 12\");\nssConfig.put(\"platform\", \"iOS\");\n\n// For an Android test on BrowserStack\nssConfig.put(\"deviceName\", \"Samsung Galaxy S22\");\nssConfig.put(\"platform\", \"Android\");\n\n// For a custom device on any cloud provider\nssConfig.put(\"deviceName\", \"Custom Device Name\"); // Use the same name consistently\nssConfig.put(\"platform\", \"iOS/Android\"); // Use the actual platform"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add it to your pom.xml if not already present",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<dependency>\n    <groupId>com.google.code.gson<\/groupId>\n    <artifactId>gson<\/artifactId>\n    <version>2.10.1<\/version>\n<\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Ignoring Regions (Recommended for Dynamic Content)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "SmartUIAppSnapshot smartUI = new SmartUIAppSnapshot();\n\nMap<String, String> config = new HashMap<>();\nconfig.put(\"projectToken\", \"your-project-token-here\");\nconfig.put(\"deviceName\", \"Pixel 6\");\nconfig.put(\"fullPage\", \"true\");\n\n// Define XPaths of elements to ignore\nList<String> ignoreXpath = Arrays.asList(\n    \"//*[@text=\\\"Backpack\\\"]\",\n    \"//*[@text=\\\"Onesie\\\"]\",\n    \"//*[@text=\\\"PRODUCTS\\\"]\",\n    \"//*[@text=\\\"Terms of Service | Privacy Policy\\\"]\"\n);\n\nMap<String, Object> ignoreBoxesMap = new HashMap<>();\nignoreBoxesMap.put(\"xpath\", ignoreXpath);\n\nGson gson = new Gson();\nconfig.put(\"ignoreBoxes\", gson.toJson(ignoreBoxesMap));\n\nsmartUI.start(config);\nsmartUI.smartuiAppSnapshot(driver, \"SmartUIAndroid\", config);\nsmartUI.stop();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Selecting Specific Regions for Comparison",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Replace \"ignoreBoxes\" with \"selectBoxes\" to compare only specified regions\nMap<String, Object> selectBoxesMap = new HashMap<>();\nselectBoxesMap.put(\"xpath\", Arrays.asList(\"//*[@resource-id='primary-content']\"));\n\nconfig.put(\"selectBoxes\", gson.toJson(selectBoxesMap));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "SmartUISnapshot.smartuiSnapshot(driver, \"HomeScreen-Header\");\nSmartUISnapshot.smartuiSnapshot(driver, \"CheckoutScreen-PaymentForm\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));\nwait.until(ExpectedConditions.presenceOfElementLocated(By.id(\"main-content\")));\nSmartUISnapshot.smartuiSnapshot(driver, \"Screen Loaded\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify PROJECT_TOKEN is set correctly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   echo $PROJECT_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify SDK dependency is added to pom.xml",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "   <dependency>\n       <groupId>io.github.lambdatest<\/groupId>\n       <artifactId>lambdatest-java-sdk<\/artifactId>\n       <version>1.0.23<\/version>\n   <\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add explicit waits before screenshots",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));\n   wait.until(ExpectedConditions.presenceOfElementLocated(By.id(\"content\")));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Wait for specific elements to be visible",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"main-content\")));"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check JSON formatting in configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   Map<String, Object> ignoreBoxes = new HashMap<>();\n   ignoreBoxes.put(\"xpath\", new String[]{\"//*[@text='Dynamic Ad']\"});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clear Maven cache",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   mvn clean"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Run Your First Test",
      "description": "Learn how to integrate SmartUI App SDK with your existing mobile app testing framework to perform visual regression testing on any cloud provider.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Add the SmartUI SDK Dependency",
          "text": "Add the following dependency to your pom.xml file:",
          "url": "https://www.testmuai.com/support/docs/smartui-appium-java-sdk/#step-1-add-the-smartui-sdk-dependency"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure Your Project Token",
          "text": "You can configure your project token in one of two ways: Using Environment Variables: Directly in the Configuration: You can pass the project token directly in your test configuration as shown in Step 3.",
          "url": "https://www.testmuai.com/support/docs/smartui-appium-java-sdk/#step-2-configure-your-project-token"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Integrate SmartUI in Your Test Script",
          "text": "Import the required SmartUI class and add the screenshot capture code where needed:",
          "url": "https://www.testmuai.com/support/docs/smartui-appium-java-sdk/#step-3-integrate-smartui-in-your-test-script"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute the Tests",
          "text": "Run your tests as you normally would with your cloud provider. SmartUI will automatically capture and process the screenshots for visual regression testing.",
          "url": "https://www.testmuai.com/support/docs/smartui-appium-java-sdk/#step-4-execute-the-tests"
        }
      ]
    }
  ]) }}
/>

SmartUI App SDK enables you to perform visual regression testing on your mobile applications using any cloud testing provider. This guide will help you integrate SmartUI App SDK with your existing mobile app testing framework.

## Prerequisites

- Basic understanding of mobile app testing and Appium
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials
- An active [subscription](https://www.testmuai.com/pricing) plan with valid screenshots limit

## Create a SmartUI Project

The first step is to create a project that will contain all your builds. To create a SmartUI Project:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
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
    <version>1.0.23</version>
</dependency>
```

### Step 2: Configure Your Project Token

You can configure your project token in one of two ways:

1. **Using Environment Variables**:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN=123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

2. **Directly in the Configuration**:
You can pass the project token directly in your test configuration as shown in Step 3.

### Step 3: Integrate SmartUI in Your Test Script

Import the required SmartUI class and add the screenshot capture code where needed:

<VerifiedTag value="Verified" />

```java

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

<VerifiedTag value="Verified" />

```java
ssConfig.put("deviceName", "iPhone 15");
ssConfig.put("platform", "iOS");
```

#### Important Notes:
- It is advised to use the same `deviceName` and `platform` combination across builds to compare screenshots of the same device
- These parameters are metadata tags and don't affect the actual device selection on your cloud provider

Example configurations for different cloud providers:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="SmartUI Results" width="768" height="373" className='doc_img'/>

## Best Practices

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='screenshot-naming' label='Screenshot Naming' default>

**Screenshot Naming**

- Use descriptive, consistent names for screenshots
- Include screen/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```java
SmartUISnapshot.smartuiSnapshot(driver, HomeScreen-Header");
SmartUISnapshot.smartuiSnapshot(driver, "CheckoutScreen-PaymentForm");
```

</TabItem>
<TabItem value='wait-for-screen-load' label='Wait for Screen Load'>

**Wait for Screen Load**

- Always wait for screens to fully load before taking screenshots
- Use Appium's wait methods for dynamic content
- Consider device-specific loading times

**Example:**
```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.presenceOfElementLocated(By.id(main-content")));
SmartUISnapshot.smartuiSnapshot(driver, "Screen Loaded");
```

</TabItem>
<TabItem value='handle-dynamic-content' label='Handle Dynamic Content'>

**Handle Dynamic Content**

- Use `ignoreBoxes` for elements that change between runs (ads, timestamps, user avatars)
- Use `selectBoxes` when you only need to compare specific regions
- Test XPath locators using Appium Inspector before integrating

</TabItem>
<TabItem value='device-configuration' label='Device Configuration'>

**Device Configuration**

- Use consistent `deviceName` and `platform` combinations across builds
- Document device configurations for reference
- Test on devices that match your user base

</TabItem>
<TabItem value='test-organization' label='Test Organization'>

**Test Organization**

- Group related screenshots in the same build
- Use meaningful build names
- Run tests on consistent device configurations

**Troubleshooting**

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-captured' label='Screenshots Not Captured' default>

**Issue: Screenshots Not Captured**

**Symptoms**: Tests run but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Incorrect project name
- Network connectivity issues
- SDK not properly integrated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
   ```bash
   echo $PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify SDK dependency is added to pom.xml:
   ```xml
   <dependency>
       <groupId>io.github.lambdatest</groupId>
       <artifactId>lambdatest-java-sdk</artifactId>
       <version>1.0.23</version>
   </dependency>
   ```

4. Check network connectivity to <BrandName /> servers

5. Review test execution logs for error messages

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: Project Not Found" Error**

**Symptoms**: Error indicating SmartUI project cannot be found

**Possible Causes**:
- Project name typo or mismatch
- Project deleted
- Wrong account credentials
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check credentials match the account with the project

</TabItem>
<TabItem value='screenshots-show-blank-or-incorrect-content' label='Screenshots Show Blank or Incorrect Content'>

**Issue: Screenshots Show Blank or Incorrect Content**

**Symptoms**: Screenshots captured but show blank screens or incorrect content

**Possible Causes**:
- Screen not fully loaded
- App state issues
- Timing issues
- Device-specific rendering

**Solutions**:
1. Add explicit waits before screenshots:
   ```java
   WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
   wait.until(ExpectedConditions.presenceOfElementLocated(By.id(content")));
   ```

2. Wait for specific elements to be visible:
   ```java
   wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("main-content")));
   ```

3. Increase wait time for slow-loading screens

4. Verify app is in correct state before screenshot

</TabItem>
<TabItem value='ignoreboxes-selectboxes-not-working' label='ignoreBoxes/selectBoxes Not Working'>

**Issue: ignoreBoxes/selectBoxes Not Working**

**Symptoms**: Dynamic content still causing false positives

**Possible Causes**:
- XPath locators incorrect
- Elements not found at screenshot time
- JSON formatting issues

**Solutions**:
1. Verify XPath locators using Appium Inspector
2. Ensure elements exist at screenshot time
3. Check JSON formatting in configuration:
   ```java
   Map<String, Object"> ignoreBoxes = new HashMap<">();
   ignoreBoxes.put(xpath", new String[]{"//*[@text="'Dynamic" Ad']"});
   ```

4. Test XPath locators in isolation before using in config

</TabItem>
<TabItem value='maven-dependencies-not-resolving' label='Maven Dependencies Not Resolving'>

**Issue: Maven Dependencies Not Resolving**

**Symptoms**: Maven cannot find `lambdatest-java-sdk` or dependencies fail

**Possible Causes**:
- Incorrect dependency version
- Maven repository access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)
2. Clear Maven cache:
   ```bash
   mvn clean
   ```
3. Verify internet connectivity for Maven repository access
4. Check pom.xml for version conflicts

</TabItem>
<TabItem value='screenshot-names-not-matching-baseline' label='Screenshot Names Not Matching Baseline'>

**Issue: Screenshot Names Not Matching Baseline**

**Symptoms**: Screenshots appear as New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

</TabItem>
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [Appium Hooks Documentation](/support/docs/smartui-appium-hooks)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI Appium Java SDK </span>
    </li>
  </ul>
</nav>

</TabItem>
</Tabs>

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI Appium Java SDK </span>
    </li>
  </ul>
</nav>