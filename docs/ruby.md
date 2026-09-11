---
id: ruby
title: Selenium With Ruby
hide_title: false
sidebar_label: Ruby
description: Run Ruby Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. Covers Capybara, RSpec, and Test::Unit.
keywords:
  - ruby selenium grid setup
  - run ruby tests on cloud
  - ruby selenium webdriver tutorial
  - ruby cross browser testing
  - ruby selenium automation example
image: /assets/images/og-images/selenium-testing-og.png

url: https://www.testmuai.com/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With Ruby",
          "item": `${BRAND_URL}/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With Ruby",
    "description": "Run Ruby Selenium automation tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. Covers Capybara, RSpec, and Test::Unit.",
    "url": "https://www.testmuai.com/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "ruby selenium grid setup",
      "run ruby tests on cloud",
      "ruby selenium webdriver tutorial"
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
        "name": "Every framework below connects to the grid and passes your browser and OS choices through a capabilities hash",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "caps = {\n  :browserName => \"chrome\",\n  :version     => \"latest\",\n  :platform    => \"Windows 10\",\n  :name        => \"Ruby Selenium Test\",\n  :build       => \"Ruby Selenium Build\",\n  :video       => true\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/Capybara-Cucumber-Ruby",
        "text": "git clone https://github.com/LambdaTest/Capybara-Cucumber-Ruby\ncd Capybara-Cucumber-Ruby"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the capabilities hash",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "@caps = {\n  \"browserName\" => \"chrome\",\n  \"browserVersion\" => \"latest\",\n  \"platformName\" => \"Windows 10\",\n  \"build\" => \"capybara-lambdatest\",\n  \"name\" => \"single-Test\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a single test, or in parallel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "bundle exec rake single\nbundle exec rake parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/RSpec-Selenium-Sample",
        "text": "git clone https://github.com/LambdaTest/RSpec-Selenium-Sample\ncd RSpec-Selenium-Sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run a single test, or in parallel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "bundle exec rake single\nbundle exec rake parallel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clone the sample GitHub project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest-sample-test-frameworks/Ruby-UnitTest-Selenium",
        "text": "git clone https://github.com/LambdaTest-sample-test-frameworks/Ruby-UnitTest-Selenium\ncd Ruby-UnitTest-Selenium"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set your browser and OS in the capabilities hash",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "caps = {\n  :browserName => \"chrome\",\n  :browser_version => \"latest\",\n  :platform_name => \"Windows 10\",\n  :name => \"UnitTest Sample Test\",\n  :build => \"UnitTest Selenium Build\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "ruby LambdaTest.rb"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

Run your Ruby Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---
Complete the following steps before you start Ruby automation testing with Selenium.

1. Install **Ruby** and **gem** on your local system. Follow these instructions to install on different operating systems.
   * For **Windows**, download from the [Ruby Installer for Windows](https://rubyinstaller.org/downloads/).
   * For **Linux** or **Ubuntu**, run a simple apt command like below:
   ```bash
   sudo apt-get install ruby-full
   ```
   * For **macOS**, run a [Homebrew](https://brew.sh/) command like this:
   ```bash
   brew install ruby
   ```
2. Install the [parallel_tests](https://github.com/grosser/parallel_tests) gem to run tests in parallel.
3. Get the TestMu AI binary file for running tests on your locally hosted web pages.

## Step 1: Clone the Sample Project
---
Clone the repository and install dependencies.

```bash
git clone https://github.com/LambdaTest/ruby-selenium-sample.git
cd ruby-selenium-sample
```

Install selenium dependencies:
```bash
sudo gem install selenium-webdriver
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

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
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---
Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

<VerifiedTag value="Verified" />

```ruby
caps = {                       
            :browserName => "chrome",         
            :version =>   "67.0",         
            :platform =>  "win10",
            :geoLocation =>  "US",
            :name =>  "LambdaTest ruby google search name",
            :build =>  "LambdaTest ruby google search build",      
            :network =>  false,
            :visual =>  false,
            :video =>  true,
            :console =>  false
        }  
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Ruby Selenium test from the command line.

```bash
ruby todo-click-test.rb
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Ruby Selenium Tests Using Agent Skills
---

Use AI coding assistants to generate and run Ruby Selenium tests with the TestMu AI Agent Skill.

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
        Selenium With Ruby
      </span>
    </li>
  </ul>
</nav>
