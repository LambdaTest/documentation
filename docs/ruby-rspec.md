---
id: ruby-rspec
title: Selenium With RSpec
hide_title: false
sidebar_label: RSpec
description: Run RSpec Ruby Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.
keywords:
  - rspec selenium grid setup
  - run rspec tests on cloud
  - ruby rspec automation tutorial
  - rspec cross browser testing
  - rspec selenium parallel testing
image: /assets/images/og-images/selenium-testing-og.png

url: https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With RSpec",
          "item": `${BRAND_URL}/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With RSpec",
    "description": "Run RSpec Ruby Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "rspec selenium grid setup",
      "run rspec tests on cloud",
      "ruby rspec automation tutorial"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "For Windows, download from the Ruby Installer for Windows.; For Linux or Ubuntu, run a simple apt command like below:; For macOS, run a Homebrew command like this:.",
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   sudo apt-get install ruby-full"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   brew install ruby"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/RSpec-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/RSpec-Selenium-Sample.git\ncd RSpec-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install project dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "bundle install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "bundle exec rake single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run parallel tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "bundle exec rake parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/rspec-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/rspec-skill .cursor/skills/"
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
      "name": "Selenium With RSpec",
      "description": "Run RSpec Ruby Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Clone the repository and install dependencies. Install project dependencies:",
          "url": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Configure your credentials to connect to the TestMu AI Selenium Grid. Set TestMu AI Username and Access Key in environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define browser, version, and OS settings for your test run. In the test script, update your test capabilities. The capabilities are loaded from the config YAML files and passed to the Selenium RemoteWebDriver. Use the TestMu AI Capabilities Generator to auto-generate the capabilities class for your test requirements.",
          "url": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Execute the RSpec test from the command line. To run parallel tests:",
          "url": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the test output on the console and the TestMu AI dashboard. Visit the TestMu AI Automation Dashboard to view your test results. The dashboard provides: Text logs for each test step Screenshots captured during execution Video recordings of the full test session",
          "url": "https://www.testmuai.com/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run RSpec tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/RSpec-Selenium-Sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before you start Ruby automation testing with Selenium.

1. Install Ruby and gem on your local system. Follow these instructions to install on different operating systems.
   * For **Windows**, download from the [Ruby Installer for Windows](https://rubyinstaller.org/downloads/).
   * For **Linux** or **Ubuntu**, run a simple apt command like below:

   <VerifiedTag value="Verified" />

   ```bash
   sudo apt-get install ruby-full
   ```
   * For **macOS**, run a [Homebrew](https://brew.sh/) command like this:

   <VerifiedTag value="Verified" />

   ```bash
   brew install ruby
   ```
2. Install the [parallel_tests](https://github.com/grosser/parallel_tests) gem to run tests in parallel.
3. Get the TestMu AI binary file for running tests on your locally hosted web pages.

## Step 1: Clone the Sample Project
---
Clone the repository and install dependencies.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/RSpec-Selenium-Sample.git
cd RSpec-Selenium-Sample
```

Install project dependencies:

<VerifiedTag value="Verified" />

```bash
bundle install
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI Username and Access Key in environment variables.

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
Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. The capabilities are loaded from the config YAML files and passed to the Selenium RemoteWebDriver.

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the RSpec test from the command line.

<VerifiedTag value="Verified" />

```bash
bundle exec rake single
```

To run parallel tests:

<VerifiedTag value="Verified" />

```bash
bundle exec rake parallel
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run RSpec Tests Using Agent Skills
---

Use AI coding assistants to generate and run RSpec tests with the TestMu AI Agent Skill.

The [rspec-skill](https://github.com/LambdaTest/agent-skills/tree/main/rspec-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/rspec-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/rspec-skill .cursor/skills/
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
        Selenium With RSpec
      </span>
    </li>
  </ul>
</nav>