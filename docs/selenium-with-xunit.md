---
id: selenium-xunit
title: Selenium With xUnit
sidebar_label: xUnit
description: Run xUnit Selenium tests on TestMu AI cloud grid with 3000+ browsers. Set up, configure, and execute C# tests.
keywords:
  - run xUnit Selenium tests cloud
  - xUnit Selenium grid setup
  - xUnit C# automation testing
  - Selenium xUnit cross browser testing
  - xUnit parallel testing cloud
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-with-xunit/
site_name: TestMu AI
slug: selenium-with-xunit/
canonical: https://www.testmuai.com/support/docs/selenium-with-xunit/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium With xUnit",
          "item": `${BRAND_URL}/support/docs/selenium-with-xunit/`
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
      "@id": "https://www.testmuai.com/support/docs/selenium-with-xunit/"
    },
    "headline": "Selenium With xUnit",
    "description": "Run xUnit Selenium tests on TestMu AI cloud grid with 3000+ browsers. Set up, configure, and execute C# tests.",
    "url": "https://www.testmuai.com/support/docs/selenium-with-xunit/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "run xUnit Selenium tests cloud",
      "xUnit Selenium grid setup",
      "xUnit C# automation testing"
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
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/CSharp-xUnit-Selenium",
        "text": "git clone https://github.com/LambdaTest/CSharp-xUnit-Selenium\ncd CSharp-xUnit-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update the config.json file with your desired capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "{\n  \"server\": \"hub.lambdatest.com\",\n  \"user\": \"LT_USERNAME\",\n  \"key\": \"LT_ACCESS_KEY\",\n\n  \"capabilities\": {\n    \"lt:options\": {\n      \"buildName\": \"xunit build\",\n      \"sessionName\": \"lambdatest xunit sample test\",\n      \"visual\": \"true\",\n      \"plugin\": \"xunit:sample\"\n    }\n  },\n\n  \"environments\": [\n    {\n      \"browserName\": \"chrome\"\n    },\n    {\n      \"browserName\": \"firefox\"\n    },\n    {\n      \"browserName\": \"safari\"\n    }\n  ],\n\n  \"TunnelOptions\": {\n    \"tunnel\": false\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "dotnet clean\ndotnet test --filter \"profile=single\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run tests in parallel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "dotnet test --filter \"profile=parallel\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/xunit-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/xunit-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Selenium With xUnit",
      "description": "Run xUnit Selenium tests on TestMu AI cloud grid with 3000+ browsers. Set up, configure, and execute C# tests.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Pull the sample repo to your local machine and navigate into the project directory.",
          "url": "https://www.testmuai.com/support/docs/selenium-with-xunit/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Add your TestMu AI credentials as environment variables so the test can authenticate with the grid. Visit the TestMu AI Dashboard, navigate to the left sidebar, and select Credentials. Copy your Username and Access Key, then set them as environment variables: {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/selenium-with-xunit/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define the browser, version, and OS for your test run. Update the config.json file with your desired capabilities: Use the Capabilities Generator to auto-generate capabilities for any browser, version, and OS combination.",
          "url": "https://www.testmuai.com/support/docs/selenium-with-xunit/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Build and run xUnit tests from Visual Studio or the command line. From Visual Studio: Build the solution and run tests from the Test Explorer. From the terminal (macOS/Linux): To run tests in parallel:",
          "url": "https://www.testmuai.com/support/docs/selenium-with-xunit/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the Automation Dashboard to see exactly what happened during your test. Visit the TestMu AI Automation Dashboard to see your test results. Each session includes: Video recording of the full test execution Screenshots captured at each step Console logs from the browser Network logs for every request and response Selenium command logs showing each driver action",
          "url": "https://www.testmuai.com/support/docs/selenium-with-xunit/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run xUnit Selenium tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and running tests in parallel.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/CSharp-xUnit-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [.NET Core SDK](https://dotnet.microsoft.com/download) 8.0 or later.
4. Download [Selenium WebDriver](https://www.selenium.dev/downloads/) Language Binding for C#.

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/CSharp-xUnit-Selenium
cd CSharp-xUnit-Selenium
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

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

Define the browser, version, and OS for your test run.

Update the `config.json` file with your desired capabilities:

<VerifiedTag value="Verified" />

```csharp
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
    {
      "browserName": "chrome"
    },
    {
      "browserName": "firefox"
    },
    {
      "browserName": "safari"
    }
  ],

  "TunnelOptions": {
    "tunnel": false
  }
}
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Build and run xUnit tests from Visual Studio or the command line.

**From Visual Studio:** Build the solution and run tests from the Test Explorer.

**From the terminal (macOS/Linux):**

```bash
dotnet clean
dotnet test --filter "profile=single"
```

To run tests in parallel:

```bash
dotnet test --filter "profile=parallel"
```

## Step 5: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run xUnit Tests Using Agent Skills
---

Use AI coding assistants to generate and run xUnit tests with the TestMu AI Agent Skill.

The [xunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/xunit-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/xunit-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/xunit-skill .cursor/skills/
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
        Selenium With xUnit
      </span>
    </li>
  </ul>
</nav>
