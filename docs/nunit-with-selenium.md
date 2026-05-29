---
id: nunit-with-selenium
title: Selenium With NUnit
sidebar_label: NUnit
description: Run NUnit Selenium tests on TestMu AI cloud grid with 3000+ browsers. Set up, configure, and execute C# tests.
keywords:
  - run NUnit Selenium tests cloud
  - NUnit Selenium grid setup
  - NUnit C# automation testing
  - Selenium NUnit cross browser testing
  - NUnit parallel testing cloud
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Selenium With NUnit",
          "item": `${BRAND_URL}/support/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run NUnit tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/CSharp-NUnit-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before running NUnit Selenium tests.

1. Download and install **Selenium WebDriver** from the [official website](https://www.selenium.dev/downloads/).
2. Install the latest version of C#.
3. Install the **.Net** framework for developing applications using C#.
4. Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to the appropriate folder.
5. Install a [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
6. Get your TestMu AI Username and Access Key from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

## Step 1: Clone the Sample Project
---
Clone the repository and navigate to the project directory.

```bash
git clone https://github.com/LambdaTest/CSharp-NUnit-Selenium
cd CSharp-NUnit-Selenium
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI Username and Access Key in environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---
Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
    { "build", "NUnit Build" },
    { "name", "NUnit Test" },
    { "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the NUnit test from Visual Studio or the command line.

**In Visual Studio (Windows):**

1. Build the solution by clicking **Build > Build Solution**.
2. Open **Test Explorer** in Visual Studio.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/Test-Explorer-Screen.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

3. Click **Run** from the Test Explorer to run the sample test.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/Single-Test-Explorer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

**In Linux/macOS:**

Install NuGet packages and build the project:
```csharp
cd Packages
nuget.exe install ..\NUnitSelenium\packages.config
```
```csharp
nmake clean build
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run NUnit Tests Using Agent Skills
---

Use AI coding assistants to generate and run NUnit tests with the TestMu AI Agent Skill.

The [nunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/nunit-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/nunit-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/nunit-skill .cursor/skills/
```

:::tip
Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

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
      Selenium With NUnit
      </span>
    </li>
  </ul>
</nav>
