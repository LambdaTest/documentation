---
id: nunit-with-selenium
title: NUnit with Selenium:Tutorial to run your first test on TestMu AI
hide_title: true
sidebar_label: NUnit
description: Now you can run your automation scripts using Selenium with NUnit on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - c# selenium
  - c# selenium tutorial
  - c# selenium webdriver
  - c# selenium testing
url: https://www.testmuai.com/support/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/
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
          "name": "NUnit",
          "item": `${BRAND_URL}/support/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# NUnit with Selenium: Tutorial to run your first test on Lambdatest
***
In this topic, you will learn how to configure and run your C# automation testing scripts on [<BrandName /> Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) using **C#** framework **NUnit**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **NUnit** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **NUnit** with **Selenium** to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/CSharp-NUnit-Selenium). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running NUnit Selenium Tests
***
>**Note:** This tutorial is specifically for Windows users using **Microsoft Visual Studio**.

Before you can start performing **C#** automation testing with **Selenium**, you would need to:

* Download and install **Selenium WebDriver** from the [official website](https://www.selenium.dev/downloads/).
* Make sure you work with latest version of C#.
* **.Net** framework to deliver guidelines while developing a range of application using C#.
* Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to appropriate folder. A [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
* You would also need <BrandName /> tunnel binary file for testing your locally hosted or privately hosted projects.

### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the <BrandName />’s [CSharp-NUnit-Selenium repository](https://github.com/LambdaTest/CSharp-NUnit-Selenium) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/CSharp-NUnit-Selenium
cd CSharp-NUnit-Selenium
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
### Sample Test Case

**Step 3:** Navigate to `NUnitSeleniumTests.cs` using VSCode. Here is a sample code base for a single C# automated test using NUnit Framework. Copy and replace this code in the NUnitSeleniumTests.cs file in the project you opened in the previous step.
```csharp
using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using NUnit.Framework;
using System.Threading;
using System.Collections.Generic;

namespace NUnitSelenium
{

    public class NUnitSeleniumSample1
    {
        public static string LT_USERNAME = Environment.GetEnvironmentVariable("LT_USERNAME") == null ? "YOUR LT_USERNAME" : Environment.GetEnvironmentVariable("LT_USERNAME");
        public static string LT_ACCESS_KEY = Environment.GetEnvironmentVariable("LT_ACCESS_KEY") == null ? "YOUR LT ACCESS KEY" : Environment.GetEnvironmentVariable("LT_ACCESS_KEY");
        public static bool tunnel = Boolean.Parse(Environment.GetEnvironmentVariable("LT_TUNNEL") == null ? "false" : Environment.GetEnvironmentVariable("LT_TUNNEL"));
        public static string build = Environment.GetEnvironmentVariable("LT_BUILD") == null ? "YOUR BUILD NAME" : Environment.GetEnvironmentVariable("LT_BUILD");
        public static string seleniumUri = "https://hub.lambdatest.com:443/wd/hub";


        ThreadLocal<IWebDriver> driver = new ThreadLocal<IWebDriver>();
        private String browser;
        private String version;
        private String os;

        [SetUp]
        public void Init()
        {

            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.SetCapability(CapabilityType.BrowserName, "Chrome");
            capabilities.SetCapability(CapabilityType.Version, "96");
            capabilities.SetCapability(CapabilityType.Platform, "Windows 10");

            //Requires a named tunnel.
            if (tunnel)
            {
                capabilities.SetCapability("tunnel", tunnel);
            }
            if (build != null)
            {
                capabilities.SetCapability("build", build);
            }

            capabilities.SetCapability("user", LT_USERNAME);
            capabilities.SetCapability("accessKey", LT_ACCESS_KEY);

            capabilities.SetCapability("name",
            String.Format("{0}:{1}",
            TestContext.CurrentContext.Test.ClassName,
            TestContext.CurrentContext.Test.MethodName));
            driver.Value = new RemoteWebDriver(new Uri(seleniumUri), capabilities, TimeSpan.FromSeconds(600));
            Console.Out.WriteLine(driver);
        }

        [Test]
        public void Todotest()
        {
            {
                Console.WriteLine("Navigating to todos app.");
                driver.Value.Navigate().GoToUrl("https://lambdatest.github.io/sample-todo-app/");

                driver.Value.FindElement(By.Name("li4")).Click();
                Console.WriteLine("Clicking Checkbox");
                driver.Value.FindElement(By.Name("li5")).Click();


                // If both clicks worked, then te following List should have length 2
                IList<IWebElement> elems = driver.Value.FindElements(By.ClassName("done-true"));
                // so we'll assert that this is correct.
                Assert.AreEqual(2, elems.Count);

                Console.WriteLine("Entering Text");
                driver.Value.FindElement(By.Id("sampletodotext")).SendKeys("Yey, Let's add it to list");
                driver.Value.FindElement(By.Id("addbutton")).Click();


                // lets also assert that the new todo we added is in the list
                string spanText = driver.Value.FindElement(By.XPath("/html/body/div/div/div/ul/li[6]/span")).Text;
                Assert.AreEqual("Yey, Let's add it to list", spanText);

            }
        }

        [TearDown]
        public void Cleanup()
        {
            bool passed = TestContext.CurrentContext.Result.Outcome.Status == NUnit.Framework.Interfaces.TestStatus.Passed;
            try
            {
                // Logs the result to LambdaTest
                ((IJavaScriptExecutor)driver.Value).ExecuteScript("lambda-status=" + (passed ? "passed" : "failed"));
            }
            finally
            {

                // Terminates the remote webdriver session
                driver.Value.Quit();
            }
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

**Step 5:** Build the solution by clicking on **Build > Build Solution**.

**Step 6:** As shown below click on Test Explorer on your MS Visual Studio:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/Test-Explorer-Screen.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**Step 7:** Click on **Run** from the Test Explorer to run the sample test as shown below:

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/Single-Test-Explorer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

### Executing in Linux/macOS:
 * Install NuGet Packages for the project.
```csharp
cd Packages
nuget.exe install ..\NUnitSelenium\packages.config
```
 * Clean and rebuild project.
```csharp
nmake clean build
```
Your results would be displayed on the test console and on the [<BrandName /> dashboard](https://automation.lambdatest.com/). <BrandName /> Dashboard will help you view all your text logs, screenshots and video recording for your entire Selenium tests.

## Running Your Parallel Tests Using NUnit Testing Framework
***
### Executing the Parallel Tests
 * **Executing parallel tests in Windows:**

 To run parallel tests, you may go to **Test Explorer** on Visual Studio as mentioned above and click on **Run All** tests to execute the tests. 
 
 * **Executing  parallel tests in Linux/MacOS:**
```bash
nmake test OR nmake all
```
Your results would be displayed on the test console and on the [<BrandName /> dashboard](https://automation.lambdatest.com/). <BrandName /> Dashboard will help you view all your text logs, screenshots and video recording for your entire Selenium tests.

## Testing Locally Hosted Projects Using NUnit Selenium
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

## Using the NUnit Agent Skill with TestMu AI
***

The [nunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/nunit-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The nunit-skill package includes:

```
nunit-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing NUnit Agent Skill
***

Install a NUnit Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/nunit-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/nunit-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only nunit-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


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
      NUnit Automation Testing  
      </span>
    </li>
  </ul>
</nav>
