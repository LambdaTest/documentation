---
id: smartui-playwright-java-sdk
title: Integrate SmartUI SDK with Playwright - Java
sidebar_label: Java
description: In this documentation, learn how integrate your Playwright Java automated tests with LambdaTest's SmartUI.
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

url: https://www.lambdatest.com/support/docs/smartui-playwright-java-sdk/
slug: smartui-playwright-java-sdk/
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
          "item": "https://www.lambdatest.com/support/docs/smartui-playwright-java-sdk/"
        }]
      })
    }}
></script>
The SmartUI SDK is a powerful tool that simplifies the process of capturing, comparing, and analyzing screenshots across multiple browsers and resolutions. By combining the strengths of Playwright's automation capabilities with SmartUI's visual testing features, you can:

- Ensure your application's UI is consistent across all supported environments.
- Detect and address visual discrepancies early in the development lifecycle.
- Streamline your testing process with minimal setup and maximum coverage.

This documentation provides step-by-step instructions for developers and QA engineers to integrate the SmartUI SDK with Playwright-Java, enabling reliable and efficient visual regression testing.

## Prerequisites

- Basic understanding of Command Line Interface and Playwright is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

## Steps to run your first test
Follow these steps to successfully run your first visual regression test on the LambdaTest platform with the SmartUI Playwright SDK integration.

### Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

### Step 2: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Java from the LambdaTest GitHub repository to run the tests on the SmartUI.

<a href="https://github.com/LambdaTest/smartui-java-playwright-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 3: Install the Dependencies

Update your dependencies in `pom.xml` file Install required modules for LambdaTest SmartUI SDK in your frontend project.

```bash
npm i @lambdatest/smartui-cli @lambdatest/playwright-driver playwright
mvn clean compile
```

### Step 4: Setup your credentials

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
```

</TabItem>
</Tabs>


<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


### Step 5: Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create smartui-web.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json title="/smartui-sdk-project/.smartui.json"
{
  "web": {
    "browsers": [
      "chrome",
      "firefox",
      "safari",
      "edge"
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        1028
      ]
    ] // Full Page screenshots are captured by default for web viewports
  },
  "mobile": {
    "devices": [
      "iPhone 14",  //iPhone 14 viewport
      "Galaxy S24"  //Galaxy S24 viewport
    ],
    "fullPage": true, //Full Page is true by default for mobile viewports
    "orientation": "portrait" //Change to "landscape" for landscape snapshot
  },
  "waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
  "waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
  "enableJavaScript": false, //Enable javascript for all the screenshots of the project
  "allowedHostnames": [] //Additional hostnames to capture assets from
}
```
:::info Advanced options in SmartUI configuration
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).
:::

### Step 6: Adding SmartUI function to take screenshot
You can incorporate SmartUI into your custom `Playwright` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of Playwright script of which we would like to take the screenshot, as shown below: 
  
```java reference
https://github.com/LambdaTest/smartui-java-playwright-sample/blob/main/src/test/java/com/lambdatest/SmartUISDKPlaywrightCloud.java
```

### Step 6: Execute the Tests on SmartUI Cloud

Execute visual regression tests on SmartUI using the following commands

```bash
npx smartui exec -- mvn test -D suite=sdk-playwright-local-java.xml
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Playwright tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.


<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Arguments supported in the `smartUISnapshot` function

The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `driver` (instance)    | The instance of the web driver used in your tests. |
| `"Screenshot Name"` (string)    | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `options` (object)    | Specify one or a combination of selectors in the `ignoreDOM` or `selectDOM` objects. These selectors can be based on `HTML DOM IDs, CSS classes, CSS selectors, or XPaths` used by your webpage. They define elements that should be excluded from or included in the visual comparison.|


## Handling Dynamic Data in SmartUI SDK  **<NewTag value='New' color='#000' bgColor='#ffec02' />** 

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```java title="This is a sample for your configuration for Java to ignore by ID"
List<String> cssID = Arrays.asList("<required ID>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("id", cssID);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```java title="This is a sample for your configuration for Java to ignore by Class"
List<String> cssclass = Arrays.asList("<required class>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("class", cssclass);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```java title="This is a sample for your configuration for Java to ignore by XPath"
List<String> path = Arrays.asList("<required xpath>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("xpath", path);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```java title="This is a sample for your configuration for Java to ignore by CSS Selector"
List<String> selector = Arrays.asList("<required selector>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> ignore = new HashMap<>();
ignore.put("cssSelector", selector);
options.put("ignoreDOM", ignore);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```java title="This is a sample for your configuration for Java to select by ID."
List<String> cssID = Arrays.asList("<required ID>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("id", cssID);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```java title="This is a sample for your configuration for Java to select by Class"
List<String> cssclass = Arrays.asList("<required class>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("class", cssclass);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```java title="This is a sample for your configuration for Java to select by XPath"
List<String> path = Arrays.asList("<required xpath>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("xpath", path);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```java title="This is a sample for your webhook configuration for Java to select by CSS Selector"
List<String> selector = Arrays.asList("<required selector>");
Map<String, Object> options = new HashMap<>();
Map<String, List<String>> select = new HashMap<>();
select.put("cssSelector", selector);
options.put("selectDOM", select);

driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.


<Tabs className="docs__val" groupId="framework">
<TabItem value="ElementID" label="Capture Element by ID" default>

```java title="This is a sample for your configuration for Javas to capture an element by ID."
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("id", "Required ID");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value="ElementClass" label="Capture Element by Class">

```java title="This is a sample for your configuration for Java to capture an element by Class"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("class", "Required Class");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>
<TabItem value="ElementXPath" label="Capture Element by XPath">

```java title="This is a sample for your configuration for Java to capture an element by XPath"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("xpath", "Required Xpath");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```

</TabItem>

<TabItem value="ElementSelector" label="Capture Element by Selector">

```java title="This is a sample for your configuration for Java to capture an element by CSS Selector"
HashMap<String, Object> options = new HashMap<>();
HashMap<String, String> locator = new HashMap<>();
options.put("element", locator);
locator.put("cssSelector", "Required Selector");
driver.get("Required URL");
SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name", options);
```
</TabItem>

</Tabs>

## For capturing interactive lazy loading elements

If you encounter difficulties loading interactive elements that appear on scroll in full-page screenshots, consider functionally incorporating a full-page scroll into your script before capturing the screenshot. This approach ensures the elements load first, facilitating the screenshot processing.

```java Example for scrolling to bottom for lazy elements
//Rest of your code here

@Test
public void basicTest() throws Exception {
    System.out.println("Loading Url");
    driver.get("Required URL");
    quickScrollToBottom();

    SmartUISnapshot.smartuiSnapshot(driver, "Screenshot Name");
    Thread.sleep(5000); // wait for 5 seconds
    System.out.println("Test Finished");
}

public void quickScrollToBottom() throws InterruptedException {
    long lastHeight = ((Number) ((JavascriptExecutor) driver).executeScript("return document.body.scrollHeight")).longValue();
    while (true) {
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight);");
        Thread.sleep(2000);
        
        long newHeight = ((Number) ((JavascriptExecutor) driver).executeScript("return document.body.scrollHeight")).longValue();
        if (newHeight == lastHeight) {
            break;
        }
        lastHeight = newHeight;
    }
    ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
    Thread.sleep(1000); // wait for 1 second
}

@AfterMethod
public void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
}
```

For additional information about SmartUI APIs please explore the documentation [here](https://www.lambdatest.com/support/api-doc/)
