---
id: geb-frameworks
title: Selenium With Geb
sidebar_label: Geb
description: Run Geb Groovy Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.
keywords:
  - geb selenium cloud testing
  - run geb tests on selenium grid
  - geb groovy automation setup
  - geb parallel test execution
  - geb cross browser testing
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/
site_name: TestMu AI
slug: run-geb-tests-on-selenium-grid/
canonical: https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';
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
          "name": "Selenium With Geb",
          "item": `${BRAND_URL}/support/docs/run-geb-tests-on-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/"
    },
    "headline": "Selenium With Geb",
    "description": "Run Geb Groovy Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.",
    "url": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "geb selenium cloud testing",
      "run geb tests on selenium grid",
      "geb groovy automation setup"
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
        "codeRepository": "https://github.com/LambdaTest/geb-parallel-sample-code",
        "text": "git clone https://github.com/LambdaTest/geb-parallel-sample-code\ncd geb-parallel-sample-code"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Compile Maven dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn compile"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn versions:display-dependency-updates"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n:::tip\nUse the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.\n:::\n\n## Step 4: Run the Test\n---\n\nTrigger the test from your terminal.\n\n```bash\n./run.sh"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn -Dlambdageb.capabilities=capabilities clean test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/geb-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/geb-skill .cursor/skills/"
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
      "name": "Selenium With Geb",
      "description": "Run Geb Groovy Selenium tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Pull the sample repo to your local machine and navigate into the project directory. Compile Maven dependencies: You may also want to run the command below to check for outdated dependencies.",
          "url": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Add your TestMu AI credentials as environment variables so the test can authenticate with the grid. Visit the TestMu AI Dashboard, navigate to the left sidebar, and select Credentials. Copy your Username and Access Key, then set them as environment variables: {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define the browser, version, and OS for your test run. Update the capabilities.json file with your desired browser, version, and platform: Use the Capabilities Generator to auto-generate capabilities for any browser, version, and OS combination.",
          "url": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Trigger the test from your terminal.",
          "url": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the Automation Dashboard to see exactly what happened during your test. Visit the TestMu AI Automation Dashboard to see your test results. Each session includes: Video recording of the full test execution Screenshots captured at each step Console logs from the browser Network logs for every request and response Selenium command logs showing each driver action",
          "url": "https://www.testmuai.com/support/docs/run-geb-tests-on-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

Run Geb tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/geb-parallel-sample-code" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the **Java development environment** (Java 11 recommended).
4. Install **Maven**. Download it from [the official website](https://maven.apache.org/) or install it on **Linux/MacOS** using [**Homebrew**](https://brew.sh/).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/geb-parallel-sample-code
cd geb-parallel-sample-code
```

Compile Maven dependencies:

<VerifiedTag value="Verified" />

```bash
mvn compile
```

You may also want to run the command below to check for outdated dependencies.

<VerifiedTag value="Verified" />

```bash
mvn versions:display-dependency-updates
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

<Tabs className="docs__val">
<TabItem value="bash" label="macOS / Linux" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

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

Update the `capabilities.json` file with your desired browser, version, and platform:

<VerifiedTag value="Verified" />

```json title="capabilities.json"
{
  "build": "GebFirstTest",
  "platformName": "Windows 10",
  "browserName": "firefox",
  "browserVersion": "latest"
}
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Trigger the test from your terminal.

<VerifiedTag value="Verified" />

```bash
./run.sh
```

<VerifiedTag value="Verified" />

```bash
mvn -Dlambdageb.capabilities=capabilities clean test
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

## Run Geb Tests Using Agent Skills
---

Use AI coding assistants to generate and run Geb tests with the TestMu AI Agent Skill.

The [geb-skill](https://github.com/LambdaTest/agent-skills/tree/main/geb-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/geb-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/geb-skill .cursor/skills/
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
       Selenium With Geb
      </span>
    </li>
  </ul>
</nav>
