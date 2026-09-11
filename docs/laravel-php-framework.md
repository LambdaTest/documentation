---
id: laravel-php-framework
title: Selenium With Laravel Dusk
hide_title: false
sidebar_label: Laravel
description: Run Laravel Dusk Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.
keywords:
  - laravel dusk selenium grid setup
  - run laravel dusk tests on cloud
  - php laravel automation tutorial
  - laravel dusk cross browser testing
  - laravel selenium parallel testing
  - laravel dusk cloud testing example
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With Laravel Dusk",
          "item": `${BRAND_URL}/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With Laravel Dusk",
    "description": "Run Laravel Dusk Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "laravel dusk selenium grid setup",
      "run laravel dusk tests on cloud",
      "php laravel automation tutorial"
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
        "codeRepository": "https://github.com/LambdaTest/php-laravel-dusk-todo",
        "text": "git clone https://github.com/LambdaTest/php-laravel-dusk-todo\ncd php-laravel-dusk-todo"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the composer dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "composer install\ncomposer dump-autoload"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create .env from the example file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cp .env.example .env"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update your TestMu AI credentials in the newly created .env file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "LT_USERNAME=\"<Your_Username>\"\nLT_ACCESS_KEY=\"<Your_Access_Key>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "$capabilities = array(\n\t\t\t\"build\" => \"LaravelDusk Build\",\n\t\t\t\"name\" => \"LaravelDusk Build\",\n\t\t\t\"platform\" => \"Windows 10\",\n\t\t\t\"browserName\" => \"Chrome\",\n\t\t\t\"version\" => \"latest\"\n     );"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "php artisan dusk"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/laravel-dusk-skill .claude/skills/\n\n# For Cursor / Copilot\ncp -r agent-skills/laravel-dusk-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run Laravel Dusk tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/php-laravel-dusk-todo" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before you begin automation testing with Laravel Dusk.

1. Download **PHP 8.1 or later** (current LTS recommended). Use the following commands in the terminal:

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
git clone https://github.com/LambdaTest/php-laravel-dusk-todo
cd php-laravel-dusk-todo
```

Install the composer dependencies:
```bash
composer install
composer dump-autoload
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Create .env from the example file:
```bash
cp .env.example .env
```

Update your TestMu AI credentials in the newly created .env file:
```bash
LT_USERNAME="<Your_Username>"
LT_ACCESS_KEY="<Your_Access_Key>"
```

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

Update platform configuration in the driver method of `tests/DuskTestCase.php` to specify the target where tests should run.

```php
$capabilities = array(
			"build" => "LaravelDusk Build",
			"name" => "LaravelDusk Build",
			"platform" => "Windows 10",
			"browserName" => "Chrome",
			"version" => "latest"
     );
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Laravel Dusk test from the command line.

```bash
php artisan dusk
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Laravel Dusk Tests Using Agent Skills
---

Use AI coding assistants to generate and run Laravel Dusk tests with the TestMu AI Agent Skill.

The [laravel-dusk-skill](https://github.com/LambdaTest/agent-skills/tree/main/laravel-dusk-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/laravel-dusk-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/laravel-dusk-skill .cursor/skills/
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
        Selenium With Laravel Dusk
      </span>
    </li>
  </ul>
</nav>
