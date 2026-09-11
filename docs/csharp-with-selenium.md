---
id: csharp-with-selenium
title: Selenium With C#
sidebar_label: C#
description: Run C# Selenium tests on TestMu AI cloud grid with 3000+ browsers. Covers NUnit, MSTest, SpecFlow, and xUnit.
keywords:
  - run C# Selenium tests cloud
  - C# Selenium grid setup
  - C# Selenium WebDriver tutorial
  - Selenium C# cross browser testing
  - C# automation testing online
  - nunit mstest specflow xunit selenium
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
import VerifiedTag from '@site/src/component/verifiedTag';


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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With C#",
    "description": "Run C# Selenium tests on TestMu AI cloud grid with 3000+ browsers. Covers NUnit, MSTest, SpecFlow, and xUnit.",
    "url": "https://www.testmuai.com/support/docs/c-with-selenium-running-c-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "run C# Selenium tests cloud",
      "C# Selenium grid setup",
      "C# Selenium WebDriver tutorial"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "Every framework below connects to the grid and passes your browser and OS choices through an LT:Options object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var browserOptions = new ChromeOptions();\nbrowserOptions.PlatformName = \"Windows 10\";\nbrowserOptions.BrowserVersion = \"latest\";\n\nvar ltOptions = new Dictionary<string, object>\n{\n    { \"username\", LT_USERNAME },\n    { \"accessKey\", LT_ACCESS_KEY },\n    { \"project\", \"Demo LT\" },\n    { \"w3c\", true }\n};\nbrowserOptions.AddAdditionalOption(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/CSharp-NUnit-Selenium",
        "text": "git clone https://github.com/LambdaTest/CSharp-NUnit-Selenium\ncd CSharp-NUnit-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the LT:Options object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var browserOptions = new ChromeOptions();\nbrowserOptions.PlatformName = \"Windows 10\";\nbrowserOptions.BrowserVersion = \"latest\";\n\nvar ltOptions = new Dictionary<string, object>\n{\n    { \"build\", \"NUnit Build\" },\n    { \"name\", \"NUnit Test\" },\n    { \"w3c\", true }\n};\nbrowserOptions.AddAdditionalOption(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Build the solution, then run in the Test Explorer, or on Linux/macOS",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "nmake clean build"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/MSTest-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/MSTest-Selenium-Sample\ncd MSTest-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the LT:Options object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var browserOptions = new ChromeOptions();\nbrowserOptions.PlatformName = \"Windows 10\";\nbrowserOptions.BrowserVersion = \"latest\";\n\nvar ltOptions = new Dictionary<string, object>\n{\n    { \"build\", \"MSTest Build\" },\n    { \"name\", \"MSTest Test\" },\n    { \"w3c\", true }\n};\nbrowserOptions.AddAdditionalOption(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "dotnet test MS-Test-Cross-Browser.csproj"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/SpecFlow-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/SpecFlow-Selenium-Sample\ncd SpecFlow-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the LT:Options object",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var browserOptions = new ChromeOptions();\nbrowserOptions.PlatformName = \"Windows 10\";\nbrowserOptions.BrowserVersion = \"latest\";\n\nvar ltOptions = new Dictionary<string, object>\n{\n    { \"build\", \"SpecFlow Build\" },\n    { \"name\", \"SpecFlow Test\" },\n    { \"w3c\", true }\n};\nbrowserOptions.AddAdditionalOption(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/CSharp-xUnit-Selenium",
        "text": "git clone https://github.com/LambdaTest/CSharp-xUnit-Selenium\ncd CSharp-xUnit-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n3. Run a single test, or the parallel profile:\n\n```bash\ndotnet clean\ndotnet test --filter \"profile=single\"\ndotnet test --filter \"profile=parallel\""
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run your C# Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the [.NET Core SDK](https://dotnet.microsoft.com/download) 2.1 or later (MSTest needs 3.0.0).
4. Install the [Selenium WebDriver C# bindings](https://www.selenium.dev/downloads/).

## Set your credentials
---

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the sample test works
---

Every framework below connects to the grid and passes your browser and OS choices through an `LT:Options` object:

<VerifiedTag value="Verified" />

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
    { "username", LT_USERNAME },
    { "accessKey", LT_ACCESS_KEY },
    { "project", "Demo LT" },
    { "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

What changes between frameworks is only the test runner and how you launch it. That is what each tab covers.

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build an `LT:Options` block for any browser, version, and OS combination.
:::

## Run a test in your framework
---

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then build and run.

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="csharp-framework" queryString="framework">

<TabItem value="nunit" label="NUnit" default>

NUnit runs from the Visual Studio Test Explorer, or from the CLI on Linux/macOS.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/CSharp-NUnit-Selenium):

```bash
git clone https://github.com/LambdaTest/CSharp-NUnit-Selenium
cd CSharp-NUnit-Selenium
```

2. Set your browser and OS in the `LT:Options` object:

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

3. Build the solution, then run in the Test Explorer, or on Linux/macOS:

```bash
nmake clean build
```

</TabItem>

<TabItem value="mstest" label="MSTest">

MSTest requires .NET Core SDK 3.0.0 and runs via `dotnet test` or the Test Explorer.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/MSTest-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/MSTest-Selenium-Sample
cd MSTest-Selenium-Sample
```

2. Set your browser and OS in the `LT:Options` object:

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
    { "build", "MSTest Build" },
    { "name", "MSTest Test" },
    { "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

3. Run the test:

```bash
dotnet test MS-Test-Cross-Browser.csproj
```

</TabItem>

<TabItem value="specflow" label="SpecFlow">

SpecFlow is BDD for .NET: you write Gherkin feature files, and step definitions drive WebDriver. Requires SpecFlow installed.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/SpecFlow-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/SpecFlow-Selenium-Sample
cd SpecFlow-Selenium-Sample
```

2. Set your browser and OS in the `LT:Options` object:

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
    { "build", "SpecFlow Build" },
    { "name", "SpecFlow Test" },
    { "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

3. Build the solution, then run in the Test Explorer (use **Run All** for parallel tests).

</TabItem>

<TabItem value="xunit" label="xUnit">

xUnit reads its capabilities and environments from a `config.json`, filtered by profile.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/CSharp-xUnit-Selenium):

```bash
git clone https://github.com/LambdaTest/CSharp-xUnit-Selenium
cd CSharp-xUnit-Selenium
```

2. Set your browsers in `config.json`:

```json title="config.json"
{
  "server": "hub.lambdatest.com",
  "user": "LT_USERNAME",
  "key": "LT_ACCESS_KEY",
  "capabilities": {
    "lt:options": {
      "buildName": "xunit build",
      "sessionName": "lambdatest xunit sample test",
      "visual": "true",
      "plugin": "xunit:sample"
    }
  },
  "environments": [
    { "browserName": "chrome" },
    { "browserName": "firefox" },
    { "browserName": "safari" }
  ],
  "TunnelOptions": { "tunnel": false }
}
```

3. Run a single test, or the parallel profile:

```bash
dotnet clean
dotnet test --filter "profile=single"
dotnet test --filter "profile=parallel"
```

</TabItem>

</Tabs>

## View your results
---

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

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
