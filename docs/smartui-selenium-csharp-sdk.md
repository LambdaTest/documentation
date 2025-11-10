---
id: smartui-selenium-csharp-sdk
title: Integrate SmartUI SDK with Selenium-CSharp
sidebar_label: C#
description: In this documentation, learn how integrate your Selenium C# automated tests with LambdaTest's SmartUI.
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

url: https://www.lambdatest.com/support/docs/smartui-selenium-csharp-sdk/
slug: smartui-selenium-csharp-sdk/
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
          "item": "https://www.lambdatest.com/support/docs/smartui-selenium-csharp-sdk/"
        }]
      })
    }}
></script>

Welcome to the world of simplified visual testing with the SmartUI SDK. 

Integrating seamlessly into your existing Selenium testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

## Prerequisites

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Selenium SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots

### **Step 1:** Create/Update your test

You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use `LTCloudTest.cs` file located in the `LambdaTest.Selenium.Driver.Test` folder.
  
```bash
git clone https://github.com/LambdaTest/smartui-csharp-sample
cd smartui-csharp-sample/LambdaTest.Selenium.Driver.Test
```

### **Step 2**: Update the Dependencies

- Add the following dependencies in your `.csproj` file

```cs
<ItemGroup>
    <PackageReference Include="LambdaTest.Selenium.Driver" Version="1.0.4" />
</ItemGroup>
```

:::note
You can check the latest version of [LambdaTest.Selenium.Driver]( https://www.nuget.org/packages/LambdaTest.Selenium.Driver) and update the latest version accordingly.
:::
### **Step 3**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Selenium SDK` in your **Frontend** project.

```bash
npm i @lambdatest/smartui-cli
```

```bash
dotnet restore
```

### **Step 4:** Configure your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


### **Step 5:** Create and Configure SmartUI Config

You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
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

### **Step 6:** Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which you would like to take the screenshot, as shown below:

```csharp
using System;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using LambdaTest.Selenium.Driver;

namespace LambdaTest.Selenium.TestProject
{
        public static class LocalTest
        {
                public static async Task Run()
                {
                        using IWebDriver driver = new ChromeDriver();
                        try
                        {
                                Console.WriteLine("Driver started");
                                driver.Navigate().GoToUrl("Required URL");
                                await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name"); //utilize this function to take the dom snapshot of your test
                        }
                        catch (Exception ex)
                        {
                                Console.WriteLine(ex);
                        }
                        finally
                        {
                                driver.Quit();
                        }
                }
        }
}
```

#### **Additional Functionality: Using `sync` Option in SmartUI C# SDK**

You can enable synchronous snapshot status response by setting the `sync` option to `true` in the options dictionary. This allows you to wait for the snapshot status and receive the result directly in your test script.

:::info
- The `sync` functionality is supported only in LambdaTest.Selenium.Driver version **1.0.4 and above**.
:::

**Set the sync value in options:**

     ```csharp
     var optionsForSync = new Dictionary<string, object>
     {
             { "sync", true },
             { "timeout", 100 } // timeout in seconds (30-900, default 600)
     };

     Console.WriteLine("Driver started");
     driver.Navigate().GoToUrl("https://www.lambdatest.com");
     var result = await SmartUISnapshot.CaptureSnapshot(driver, "NYC", optionsForSync);
     Console.WriteLine(result);
     ```

**Notes:**
- The default value of `sync` is `false` if not specified.
- The `timeout` option defines how long to wait for the snapshot status response (in seconds). Allowed range: 30-900, default is 600.
- When `sync` is `true`, the `result` variable will hold the value of the snapshot status response.


**Sample response:**
```json
{
    "snapshotName": "Sync-True",
    "snapshotUUID": "95226130-72b6-4d45-ad6d-4ad8ddsa1",
    "buildId": "8e0c078d-e85a-41ae-a8d5-4a0dsdf8bbd5",
    "snapshotStatus": "failed",
    "startedProcessingAt": "2025-08-26 09:58:21",
    "finishedProcessingAt": "2025-08-26 10:03:12",
    "screenshots": [
        {
            "captured_image": "<URL>",
            "baseline_image": "<URL>",
            "browser_name": "firefox",
            "viewport": "1028",
            "mismatch_percentage": 89.58,
            "status": "Changes found",
            "captured_image_timestamp": "2025-08-26 10:00:40",
            "compared_image_timestamp": "2025-08-26 10:00:58",
            "captured_diff": "<URL>",
            "baseline_diff": "<URL>",
        },
        // ... more screenshots in the same format
    ]
}
```

### **Step 7:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui --config .smartui.json exec -- dotnet run cloud 
```
:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.


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

```cs title="This is a sample for your configuration for C# to ignore by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "id", new[] { "ID-1", "ID-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```cs title="This is a sample for your configuration for C# to ignore by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "class", new[] { "class-1", "class-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```cs title="This is a sample for your configuration for C# to ignore by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "xpath", new[] { "xpath-1", "xpath-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```cs title="This is a sample for your configuration for C# to ignore by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "ignoreDOM", new Dictionary<string, object>
        {
            { "cssSelector", new[] { "cssSelector-1", "cssSelector-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```cs title="This is a sample for your configuration for C# to select by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "id", new[] { "ID-1", "ID-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```cs title="This is a sample for your configuration for C# to select by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "class", new[] { "class-1", "class-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```cs title="This is a sample for your configuration for C# to select by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "xpath", new[] { "xpath-1", "xpath-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```cs title="This is a sample for your configuration for C# to select by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "selectDOM", new Dictionary<string, object>
        {
            { "cssSelector", new[] { "cssSelector-1", "cssSelector-2" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```
</TabItem>

</Tabs>

## For capturing the screenshot of a specific element

You can capture screenshots of targeted elements by leveraging various locator mechanisms such as XPath, CSS ID, class, and selectors. This precision-driven approach ensures accurate and specific visual regression testing for your web application's components.


<Tabs className="docs__val" groupId="framework">
<TabItem value="ElementID" label="Capture Element by ID" default>

```cs title="This is a sample for your configuration for C# to capture an element by ID"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "id", new[] { "Required ID"} }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value="ElementClass" label="Capture Element by Class">

```cs title="This is a sample for your configuration for C# to capture an element by Class"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "class", new[] { "Required class" } }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>
<TabItem value="ElementXPath" label="Capture Element by XPath">

```cs title="This is a sample for your configuration for C# to capture an element by XPath"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "xpath", new[] { "Required xpath"} }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```

</TabItem>

<TabItem value="ElementSelector" label="Element CSS Selector">

```cs title="This is a sample for your configuration for C# to capture an element by CSS Selector"
driver.Navigate().GoToUrl("Required URL");

var options = new Dictionary<string, object>
{
    { "element", new Dictionary<string, object>
        {
            { "cssSelector", new[] { "Required cssSelector"} }
        }
    }
};
await SmartUISnapshot.CaptureSnapshot(driver, "Screenshot Name",options);
```
</TabItem>

</Tabs>


## Best Practices

### 1. Screenshot Naming

- Use descriptive, consistent names for screenshots
- Include page/component name in screenshot names
- Avoid special characters that might cause issues
- Use consistent naming conventions across your test suite

**Example:**
```csharp
await SmartUISnapshot.CaptureSnapshot(driver, "HomePage-Header");
await SmartUISnapshot.CaptureSnapshot(driver, "ProductPage-MainContent");
```

### 2. Wait for Page Load

- Always wait for pages to fully load before taking screenshots
- Use Selenium's WebDriverWait for dynamic content
- Consider using `waitForTimeout` in configuration for lazy-loaded content

**Example:**
```csharp
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;

driver.Navigate().GoToUrl("https://example.com");
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.ElementExists(By.Id("main-content")));
await SmartUISnapshot.CaptureSnapshot(driver, "Page Loaded");
```

### 3. Handle Dynamic Content

- Use `ignoreDOM` for elements that change between runs
- Use `selectDOM` when you only need to compare specific areas
- Document why elements are ignored for future reference

### 4. Configuration Management

- Keep `.smartui.json` in version control
- Use environment variables for sensitive data
- Document custom configuration choices

### 5. Test Organization

- Group related screenshots in the same build
- Use meaningful build names
- Run tests in consistent environments

## Troubleshooting

### Common Issues

#### Issue: Screenshots Not Appearing in Dashboard

**Symptoms**: Tests run successfully but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Project token not set or incorrect
- Project name mismatch
- Network connectivity issues
- CLI not installed or outdated

**Solutions**:
1. Verify `PROJECT_TOKEN` is set correctly:
   ```powershell
   echo $env:PROJECT_TOKEN
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify SmartUI CLI is installed:
   ```bash
   npx smartui --version
   ```

4. Check network connectivity to LambdaTest servers

5. Review test execution logs for error messages

#### Issue: "Project Not Found" Error

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

#### Issue: Screenshots Show Blank or Incorrect Content

**Symptoms**: Screenshots captured but show blank pages or incorrect content

**Possible Causes**:
- Page not fully loaded
- JavaScript not executed
- Viewport size issues
- Timing issues

**Solutions**:
1. Add explicit waits before screenshots:
   ```csharp
   WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
   wait.Until(ExpectedConditions.ElementExists(By.Id("content")));
   wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(".main-content")));
   ```

2. Enable JavaScript in configuration:
   ```json
   {
     "enableJavaScript": true
   }
   ```

3. Increase `waitForTimeout` in configuration

4. Verify viewport size matches expected dimensions

#### Issue: Build Execution Fails

**Symptoms**: `npx smartui exec` command fails

**Possible Causes**:
- Missing or incorrect configuration file
- Invalid JSON in configuration
- Port conflicts
- Permission issues

**Solutions**:
1. Verify `.smartui.json` exists and is valid JSON
2. Check configuration file syntax
3. Try different port if default is in use:
   ```bash
   npx smartui exec -P 5000 -- <command>
   ```
4. Check file permissions for configuration and project files

#### Issue: NuGet Dependencies Not Resolving

**Symptoms**: NuGet cannot find `LambdaTest.Selenium.Driver` package

**Possible Causes**:
- Incorrect package version
- NuGet registry access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [NuGet.org](https://www.nuget.org/packages/LambdaTest.Selenium.Driver)
2. Clear NuGet cache:
   ```bash
   dotnet nuget locals all --clear
   ```
3. Verify internet connectivity for NuGet registry access
4. Check project file for version conflicts

#### Issue: Screenshot Names Not Matching Baseline

**Symptoms**: Screenshots appear as "New" instead of comparing with baseline

**Possible Causes**:
- Screenshot name changed
- Baseline doesn't exist
- Name contains special characters

**Solutions**:
1. Ensure screenshot names are consistent across test runs
2. Verify baseline exists in project
3. Avoid special characters in screenshot names
4. Check for case sensitivity issues

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)


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
      <span className="breadcrumbs__link"> SmartUI Selenium C# SDK </span>
    </li>
  </ul>
</nav>
