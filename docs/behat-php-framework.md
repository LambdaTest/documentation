---
id: behat-php-framework
title: Selenium With Behat
hide_title: false
sidebar_label: Behat
description: Run Behat PHP Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.
keywords:
  - behat selenium grid setup
  - run behat tests on cloud
  - php behat automation tutorial
  - behat cross browser testing
  - behat selenium parallel testing
  - behat cloud selenium example
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With Behat",
          "item": `${BRAND_URL}/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With Behat",
    "description": "Run Behat PHP Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "behat selenium grid setup",
      "run behat tests on cloud",
      "php behat automation tutorial"
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
        "codeRepository": "https://github.com/LambdaTest/behat-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/behat-selenium-sample\ncd behat-selenium-sample"
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
        "name": "Set up Behat automation for your OS using composer",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "php composer.phar require behat/behat"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "default:\n   paths:\n       features: '../features/single'\n       bootstrap:  '../features/bootstrap'\n   context:\n       parameters:\n           lambdatest:\n               server: \"hub.lambdatest.com\"\n               user: \"YOUR_LAMBDATEST_USERNAME\"\n               key: \"YOUR_LAMBDATEST_ACCESS_KEY\"\n \n               capabilities:\n                   build: \"behat-selenium-sample\"\n                   name: \"single-behat-test\"\n                   video: true\n                   visual: true\n                   network: true\n                   console: true\n \n \n               environments:\n                   -\n                       browserName: chrome\n                       version: 71.0\n                       platform: Win10"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "composer single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run parallel tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "composer parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/behat-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/behat-skill .cursor/skills/"
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
      "name": "Selenium With Behat",
      "description": "Run Behat PHP Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Clone the repository and install dependencies. Install the composer dependencies: Set up Behat automation for your OS using composer:",
          "url": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Configure your credentials to connect to the TestMu AI Selenium Grid. Set TestMu AI Username and Access Key in environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define browser, version, and OS settings for your test run. In the test script, update your test capabilities to validate your TestMu AI credentials and select OS, browser, browser version, and other settings. Use the TestMu AI Capabilities Generator to auto-generate the capabilities class for your test requirements.",
          "url": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Execute the Behat test from the command line. To run parallel tests:",
          "url": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the test output on the console and the TestMu AI dashboard. Visit the TestMu AI Automation Dashboard to view your test results. The dashboard provides: Text logs for each test step Screenshots captured during execution Video recordings of the full test session",
          "url": "https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run Behat tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/behat-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before you begin automation testing with Selenium and Behat.

1. Install the latest **PHP** on your system. Use the following commands in the terminal:

   * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. For the latest **MacOS** versions starting with **Monterey**, download and install **PHP** manually: 

   <VerifiedTag value="Verified" />

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew install php
   ```
   * **Windows:** Download **PHP** from [PHP for Windows](http://windows.php.net/download/) and add it to your system PATH. Refer to the [PHP Windows installation guide](http://php.net/manual/en/install.windows.php) to ensure PHP is accessible through Command Prompt (cmd).

2. Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

   **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:

   <VerifiedTag value="Verified" />

   ```bash
   mv composer.phar /usr/local/bin/composer
   ```

## Step 1: Clone the Sample Project
---
Clone the repository and install dependencies.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/behat-selenium-sample
cd behat-selenium-sample
```

Install the composer dependencies:

<VerifiedTag value="Verified" />

```bash
composer install
```

Set up **Behat** automation for your OS using composer:

<VerifiedTag value="Verified" />

```bash
php composer.phar require behat/behat
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI `Username` and `Access Key` in environment variables.

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

In the test script, update your test capabilities to validate your TestMu AI credentials and select OS, browser, browser version, and other settings.

<VerifiedTag value="Verified" />

```php
default:
   paths:
       features: '../features/single'
       bootstrap:  '../features/bootstrap'
   context:
       parameters:
           lambdatest:
               server: "hub.lambdatest.com"
               user: "YOUR_LAMBDATEST_USERNAME"
               key: "YOUR_LAMBDATEST_ACCESS_KEY"
 
               capabilities:
                   build: "behat-selenium-sample"
                   name: "single-behat-test"
                   video: true
                   visual: true
                   network: true
                   console: true
 
 
               environments:
                   -
                       browserName: chrome
                       version: 71.0
                       platform: Win10
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Behat test from the command line.

<VerifiedTag value="Verified" />

```bash
composer single
```

To run parallel tests:

<VerifiedTag value="Verified" />

```bash
composer parallel
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Behat Tests Using Agent Skills
---

Use AI coding assistants to generate and run Behat tests with the TestMu AI Agent Skill.

The [behat-skill](https://github.com/LambdaTest/agent-skills/tree/main/behat-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/behat-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/behat-skill .cursor/skills/
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
        Selenium With Behat
      </span>
    </li>
  </ul>
</nav>
