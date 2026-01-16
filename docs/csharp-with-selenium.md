---
id: csharp-with-selenium
title: C# with Selenium:Tutorial to run your first test on TestMu AI
hide_title: true
sidebar_label: C#
description: You can now run C# Selenium automated test cases on online scalable TestMu AI Selenium grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - c# selenium
  - c# selenium tutorial
  - c# selenium webdriver
  - c# selenium testing
url: https://www.testmu.ai/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/
site_name: LambdaTest
slug: c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/
---
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
          "name": "C#",
          "item": "https://www.lambdatest.com/support/docsc-with-selenium-running-c-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# C# with Selenium: Tutorial to run your first test on Lambdatest
***
In this topic, you will learn how to configure and run your C# automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using C# with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on <BrandName /> platform.
4. Explore advanced features of <BrandName />.


## Prerequisites
---

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/CSharp-Selenium-Sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

Before you can start performing **C#** automation testing with **Selenium**, you would need to:

* Download and install **Selenium WebDriver** from its [official website](https://www.selenium.dev/downloads/).
* Make sure you have the latest version of C#.
* **.Net** framework to deliver guidelines while developing a range of application using C#.
* Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to appropriate folder. A [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
* To execute tests on Linux or macOS, [install .NET Runtime](https://dot.net/v1/dotnet-install.sh).
## Installing Selenium Dependencies And Tutorial Repo
---

Clone the [<BrandName /> CSharp Selenium GitHub repository](https://github.com/LambdaTest/CSharp-Selenium-Sample) and navigate to the code directory.

```
git clone https://github.com/LambdaTest/CSharp-Selenium-Sample
cd CSharp-Selenium-Sample
```

## Setting up Your Authentication
---

Make sure you have your <BrandName /> credentials with you to run C# automation scripts. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/login/) or by your <BrandName /> Profile.

Set <BrandName /> Username and Access Key in environment variables.

 **For Linux/macOS**:
 
 ```
 export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
 ```
 
 **For Windows**:
 
 ```
 set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
 ```

## Run Your First Test
---

The following C# Selenium script tests a sample to-do list app by marking couple items as done, adding a new item to the list and finally displaying the count of pending items as output.

 ```csharp
 using System;
    using OpenQA.Selenium;
    using static System.Environment;
    using OpenQA.Selenium.Safari;
    using OpenQA.Selenium.Chrome;
    using OpenQA.Selenium.Edge;
    using OpenQA.Selenium.Firefox;
    using OpenQA.Selenium.Remote;
    using OpenQA.Selenium.Support.UI;

    namespace csharp_selenium_lambdatest
    {
        class SingleTest
        {
            public static void execute()
            {
                // Update your lambdatest credentials
                String LT_USERNAME = GetEnvironmentVariable("LT_USERNAME");
                String LT_ACCESS_KEY =  GetEnvironmentVariable("LT_ACCESS_KEY");
                IWebDriver driver;
                ChromeOptions capabilities = new ChromeOptions();
                capabilities.BrowserVersion = "latest";
                Dictionary<string, object> ltOptions = new Dictionary<string, object>();
                ltOptions.Add("username", LT_USERNAME);
                ltOptions.Add("accessKey", LT_ACCESS_KEY);
                ltOptions.Add("platformName", "Windows 10");
                ltOptions.Add("project", "Demo LT");
                ltOptions.Add("build", "C# Build");
                ltOptions.Add("sessionName", "C# Single Test");
                ltOptions.Add("w3c", true);
                ltOptions.Add("plugin", "c#-c#");
                capabilities.AddAdditionalOption("LT:Options", ltOptions);

                driver = new RemoteWebDriver(new Uri("https://hub.lambdatest.com/wd/hub/"), capabilities);
                WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
                try
                {
                      Console.WriteLine("Navigating to todos app.");
                    driver.Navigate().GoToUrl("https://lambdatest.github.io/sample-todo-app/");

                    driver.FindElement(By.Name("li4")).Click();
                    Console.WriteLine("Clicking Checkbox");
                    driver.FindElement(By.Name("li5")).Click();

                    // If both clicks worked, then te following List should have length 2
                    IList<IWebElement> elems = driver.FindElements(By.ClassName("done-true"));
                    // so we"ll assert that this is correct.
                    if (elems.Count != 2)
                        throw new Exception();

                    Console.WriteLine("Entering Text");
                    driver.FindElement(By.Id("sampletodotext")).SendKeys("Yey, Let's add it to list");
                    driver.FindElement(By.Id("addbutton")).Click();

                    // lets also assert that the new todo we added is in the list
                    string spanText = driver.FindElement(By.XPath("/html/body/div/div/div/ul/li[6]/span")).Text;
                    if (!"Yey, Let's add it to list".Equals(spanText))
                        throw new Exception();
                    ((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=passed");
                }
                catch
                {
                    ((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=failed");
                }
                finally{  
                driver.Quit();
                }
            }
        }
    }
```


## Configuration of Your Test Capabilities
---

In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:

```csharp
 ChromeOptions capabilities = new ChromeOptions();
            capabilities.BrowserVersion = 'latest';
            Dictionary<string, object> ltOptions = new Dictionary<string, object>();
            ltOptions.Add("username", LT_USERNAME);
            ltOptions.Add("accessKey", LT_ACCESS_KEY);
            ltOptions.Add("platformName", "Windows 10");
            ltOptions.Add("project", "Demo LT");
            ltOptions.Add("w3c", true);
            ltOptions.Add("plugin", "c#-c#");
            capabilities.AddAdditionalOption('LT:Options', ltOptions);
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator](https://www.lambdatest.com/capabilities-generator/)**.

## Executing the Test
---

Following are the commands to run your single and parallel tests.

**Single test**

```csharp
dotnet run single
```

**Parallel test**

```csharp
dotnet run parallel
```

## Running your Parallel tests using .NET Runtime
---

To run your test in parallel using .NET Runtime, pass the following command in the terminal.

```csharp
dotnet run parallel
```

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = true` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

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
ltOptions.Add("tunnel", true);      
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
      C# Automation Testing  
      </span>
    </li>
  </ul>
</nav>
