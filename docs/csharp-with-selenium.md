---
id: csharp-with-selenium
title: Selenium With C#
sidebar_label: C#
description: Run C# Selenium tests on TestMu AI cloud grid with 3000+ browsers. Set up, configure capabilities, and execute tests.
keywords:
  - run C# Selenium tests cloud
  - C# Selenium grid setup
  - C# Selenium WebDriver tutorial
  - Selenium C# cross browser testing
  - C# automation testing online
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With C#",
          "item": `${BRAND_URL}/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run C# tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/CSharp-Selenium-Sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before running C# Selenium tests.

1. Download and install **Selenium WebDriver** from its [official website](https://www.selenium.dev/downloads/).
2. Install the latest version of C#.
3. Install the **.Net** framework for developing applications using C#.
4. Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to the appropriate folder.
5. Install a [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
6. [Install .NET Runtime](https://dot.net/v1/dotnet-install.sh) to execute tests on Linux or macOS.
7. Get your TestMu AI Username and Access Key from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).

## Step 1: Clone the Sample Project
---
Clone the repository and navigate to the project directory.

```bash
git clone https://github.com/LambdaTest/CSharp-Selenium-Sample
cd CSharp-Selenium-Sample
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
    { "username", LT_USERNAME },
    { "accessKey", LT_ACCESS_KEY },
    { "project", "Demo LT" },
    { "w3c", true },
    { "plugin", "c#-c#" }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute a sample C# Selenium test against the TestMu AI cloud grid.

Use the following commands to run your single and parallel tests.

**Single test**

```csharp
dotnet run single
```

**Parallel test**

```csharp
dotnet run parallel
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run C# Selenium Tests Using Agent Skills
---

Use AI coding assistants to generate and run C# Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
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
      Selenium With C#
      </span>
    </li>
  </ul>
</nav>
