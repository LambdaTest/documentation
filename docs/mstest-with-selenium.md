---
id: mstest-with-selenium
title: MSTest With Selenium Grid
hide_title: true
sidebar_label: MSTest
description: Now you can run your automation scripts using Selenium with MSTest on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - mstest
  - mstest selenium
  - mstest tutorial
  - c# selenium
  - c# automation testing
  - selenium webdriver c#
  - selenium c# testing tutorial
  - c# selenium framework
url: https://www.testmuai.com/support/docs/mstest-with-selenium-running-mstest-automation-scripts-on-testmu-selenium-grid/
site_name: LambdaTest
slug: mstest-with-selenium-running-mstest-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/mstest-with-selenium-running-mstest-automation-scripts-on-testmu-selenium-grid/
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
          "name": "MSTest",
          "item": `${BRAND_URL}/support/docs/mstest-with-selenium-running-mstest-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# MSTest with Selenium: Tutorial to Run Your First Test on <BrandName />
***

In this topic, you will learn how to configure and run your C# automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **C#** framework **MSTest**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **MSTest** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **MSTest** with **Selenium** to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/MSTest-Selenium-Sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running MSTest Selenium Scripts
***

Before you can start performing **C#** automation testing with **Selenium**, you would need to:

* Download and Install **Selenium WebDriver** from the [official website](https://www.selenium.dev/downloads/).
* Make sure you work with latest version of C#.
* **.Net** framework to deliver guidelines while developing a range of application using C#.
* Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to appropriate folder.
* A [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 3.0.0.
* You would also need <BrandName /> tunnel binary file for testing your locally hosted or privately hosted projects.

### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the [<BrandName />’s MSTest-Selenium-Sample repository](https://github.com/LambdaTest/MSTest-Selenium-Sample) and navigate to the code directory as shown below:
```csharp
git clone https://github.com/LambdaTest/MSTest-Selenium-Sample
cd MSTest-Selenium-Sample
```
### Setting up Your Authentication 
Make sure you have your <BrandName /> credentials with you to run test automation scripts with C# on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/login) or through <BrandName /> Profile.

**Step 2:** Set <BrandName /> Username and Access Key in environment variables.

 * For Linux/macOS:
 `export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"`
 * For Windows:
 `set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"`

## Run Your First Test 
***
### Sample Test Case with MSTest

**Step 3:** Here is a sample code base for a single C# automated test using MSTest Framework. Copy and replace this code in the `LocalMSTest.cs` file.
```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using System;
using System.Threading;

namespace SingleLTSelenium
{
    [TestClass]
    public class SingleLTTests
    {
        IWebDriver driver;
        
        String username = "YOUR LT_USERNAME"; //Enter your username here
        String accesskey = "YOUR LT_ACCESS_KEY"; //Enter your access key here
        String gridURL = "@hub.lambdatest.com/wd/hub";

        DesiredCapabilities capabilities;

        [TestInitialize]
        public void setupInit()
        {
            capabilities = new DesiredCapabilities();

            capabilities.SetCapability("user", username);
            capabilities.SetCapability("accessKey", accesskey);
        }

        [DataTestMethod]
        [DataRow("chrome", "72.0", "Windows 10")]

        [TestMethod]
        public void LT_ToDo_Test(String browser, String version, String os)
        {
            String itemName = "Yey, Let's add it to list";

            capabilities.SetCapability("browserName", browser);
            capabilities.SetCapability("version", version);
            capabilities.SetCapability("platform", os);
            capabilities.SetCapability("build", "LT ToDoApp using MsTest on LambdaTest");
            capabilities.SetCapability("name", "LT ToDoApp using MsTest on LambdaTest");

            driver = new RemoteWebDriver(new Uri("https://" + username + ":" + accesskey + gridURL), capabilities, TimeSpan.FromSeconds(2000));

            driver.Url = "https://lambdatest.github.io/sample-todo-app/";

            Assert.AreEqual("Sample page - lambdatest.com", driver.Title);
            // Click on First Check box
            IWebElement firstCheckBox = driver.FindElement(By.Name("li1"));
            firstCheckBox.Click();

            // Click on Second Check box
            IWebElement secondCheckBox = driver.FindElement(By.Name("li2"));
            secondCheckBox.Click();

            // Enter Item name
            IWebElement textfield = driver.FindElement(By.Id("sampletodotext"));
            textfield.SendKeys(itemName);

            // Click on Add button
            IWebElement addButton = driver.FindElement(By.Id("addbutton"));
            addButton.Click();

            // Verified Added Item name
            IWebElement itemtext = driver.FindElement(By.XPath("/html/body/div/div/div/ul/li[6]/span"));
            String getText = itemtext.Text;
            Assert.IsTrue(itemName.Contains(getText));

            /* Perform wait to check the output */
        System.Threading.Thread.Sleep(2000);

            Console.WriteLine("LT_ToDo_Test Passed");
        }
        
        [TestCleanup]
        public void Cleanup()
        {
            if (driver != null)
                driver.Quit();
        }
    }
}
```
### Configuration of Your Test Capabilities

**Step 4:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```csharp
DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.SetCapability(CapabilityType.BrowserName, "Chrome");
            capabilities.SetCapability(CapabilityType.Version, "96");
            capabilities.SetCapability(CapabilityType.Platform, "Windows 10");
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 5:** Build the solution by clicking in **Build > Build Solution.** 

**Step 6:** As shown below click on **Test Explorer** on your MS Visual Studio:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/Test-Explorer-Screen.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 7:** Click on **Run** from the Test Explorer to run the sample test as shown below:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/MSTest-Test-Explorer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Executing in Linux/macOS:**
```csharp
dotnet test MS-Test-Cross-Browser.csproj
```
Your results would be displayed on the test console and on the <BrandName /> dashboard. [<BrandName /> Dashboard](https://automation.lambdatest.com/) will help you view all your text logs, screenshots and video recording for your entire Selenium tests.

## Running Your Parallel Tests Using MSTest Testing Framework
***
### Executing the Parallel Tests Using MSTest
To run parallel tests, you may go to **Test Explorer** on Visual Studio as mentioned above and click on **Run All** tests to execute the tests. Your results would be displayed on the test console and on the [<BrandName /> dashboard](https://automation.lambdatest.com/). <BrandName /> Dashboard will help you view all your text logs, screenshots and video recording for your entire Selenium tests.

## Testing Locally Hosted Projects Using MSTest Selenium
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish <BrandName /> Tunnel.

>Download the binary file of:
>* [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```bash
DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.SetCapability("tunnel", true);
```

## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)


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
      MSTest Automation Testing  
      </span>
    </li>
  </ul>
</nav>
