---
id: codeception-php-framework
title: Selenium With Codeception
hide_title: false
sidebar_label: Codeception
description: Run Codeception PHP Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.
keywords:
  - codeception selenium grid setup
  - run codeception tests on cloud
  - php codeception automation tutorial
  - codeception cross browser testing
  - codeception selenium webdriver php
  - codeception cloud testing example
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/codeception-integration-with-testmu/
site_name: TestMu AI
slug: codeception-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/codeception-integration-with-testmu/
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
          "name": "Selenium With Codeception",
          "item": `${BRAND_URL}/support/docs/codeception-integration-with-testmu/`
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
      "@id": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/"
    },
    "headline": "Selenium With Codeception",
    "description": "Run Codeception PHP Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "codeception selenium grid setup",
      "run codeception tests on cloud",
      "php codeception automation tutorial"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "MacOS: Previous versions of MacOS have PHP installed by default. For the latest MacOS versions starting with Monterey, download and install PHP manually:; Windows: Download PHP from PHP for Windows and add it to your system PATH. Refer to the PHP Windows installation guide to ensure PHP is accessible through Command Prompt (cmd)..",
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
        "name": "Use the following commands in the terminal",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"\n   brew install php"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   mv composer.phar /usr/local/bin/composer"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/codeception-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/codeception-selenium-sample\ncd codeception-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the composer dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "composer install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "# Codeception Test Suite Configuration\n#\n# Suite for acceptance tests.\n# Perform tests in browser using the WebDriver or PhpBrowser.\n# If you need both WebDriver and PHPBrowser tests - create a separate suite.\n  \nclass_name: AcceptanceTester\nmodules:\n    enabled:\n        - WebDriver:\n            url: 'https://lambdatest.github.io/sample-todo-app/'\n            host: '{username}:{token}@hub.lambdatest.com' #provide your TestMu AI credentials\n            port: 80\n            browser: chrome\n             \n            capabilities:\n            name: 'Codeception Example'\n            build: '1.0'   \n            browserName: 'Chrome' # request the latest version of chrome\n            platform: 'ANY'\n            version: '71.0'\n            tunnel: false # sets tunnel value to true for routing traffic through your local machine"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./vendor/bin/codecept run --steps"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/codeception-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/codeception-skill .cursor/skills/"
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
      "name": "Selenium With Codeception",
      "description": "Run Codeception PHP Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Clone the repository and install dependencies. Install the composer dependencies:",
          "url": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Configure your credentials to connect to the TestMu AI Selenium Grid. Set TestMu AI Username and Access Key in environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define browser, version, and OS settings for your test run. In the test script, update your test capabilities. Notice the declaration of class name \"AcceptanceTester\". This class specifies test configuration, port number, browser name, browser version, and other desired capabilities. Use the TestMu AI Capabilities Generator to auto-generate the capabilities class for your test requirements.",
          "url": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Execute the Codeception test from the command line.",
          "url": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the test output on the console and the TestMu AI dashboard. Visit the TestMu AI Automation Dashboard to view your test results. The dashboard provides: Text logs for each test step Screenshots captured during execution Video recordings of the full test session",
          "url": "https://www.testmuai.com/support/docs/codeception-integration-with-testmu/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run Codeception tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/codeception-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before you begin automation testing with Selenium and Codeception.

1. Install the latest **PHP** on your system. Use the following commands in the terminal:

   * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. For the latest **MacOS** versions starting with **Monterey**, download and install **PHP** manually: 
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew install php
   ```
   * **Windows:** Download **PHP** from [PHP for Windows](http://windows.php.net/download/) and add it to your system PATH. Refer to the [PHP Windows installation guide](http://php.net/manual/en/install.windows.php) to ensure PHP is accessible through Command Prompt (cmd).

2. Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

   **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
   ```bash
   mv composer.phar /usr/local/bin/composer
   ```

## Step 1: Clone the Sample Project
---
Clone the repository and install dependencies.

```bash
git clone https://github.com/LambdaTest/codeception-selenium-sample
cd codeception-selenium-sample
```

Install the composer dependencies:
```bash
composer install
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI `Username` and `Access Key` in environment variables.

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

In the test script, update your test capabilities. Notice the declaration of class name **"AcceptanceTester"**. This class specifies test configuration, port number, browser name, browser version, and other desired capabilities.

<VerifiedTag value="Verified" />

```php
# Codeception Test Suite Configuration
#
# Suite for acceptance tests.
# Perform tests in browser using the WebDriver or PhpBrowser.
# If you need both WebDriver and PHPBrowser tests - create a separate suite.
  
class_name: AcceptanceTester
modules:
    enabled:
        - WebDriver:
            url: 'https://lambdatest.github.io/sample-todo-app/'
            host: '{username}:{token}@hub.lambdatest.com' #provide your TestMu AI credentials
            port: 80
            browser: chrome
             
            capabilities:
            name: 'Codeception Example'
            build: '1.0'   
            browserName: 'Chrome' # request the latest version of chrome
            platform: 'ANY'
            version: '71.0'
            tunnel: false # sets tunnel value to true for routing traffic through your local machine
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Codeception test from the command line.

```bash
./vendor/bin/codecept run --steps
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Codeception Tests Using Agent Skills
---

Use AI coding assistants to generate and run Codeception tests with the TestMu AI Agent Skill.

The [codeception-skill](https://github.com/LambdaTest/agent-skills/tree/main/codeception-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/codeception-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/codeception-skill .cursor/skills/
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
        Selenium With Codeception
      </span>
    </li>
  </ul>
</nav>
