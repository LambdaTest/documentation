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
  - capybara rspec testunit selenium
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

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Ruby](https://www.ruby-lang.org/en/downloads/) and the `gem` package manager.
4. Install the `selenium-webdriver` gem (and `parallel_tests` for parallel runs), pulled in by the sample projects via Bundler.

## Set your credentials
---

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

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

Every framework below connects to the grid and passes your browser and OS choices through a capabilities hash:

<VerifiedTag value="Verified" />

```ruby
caps = {
  :browserName => "chrome",
  :version     => "latest",
  :platform    => "Windows 10",
  :name        => "Ruby Selenium Test",
  :build       => "Ruby Selenium Build",
  :video       => true
}
```

What changes between frameworks is only how the test is structured and launched. That is what each tab covers.

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.
:::

## Run a test in your framework
---

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="ruby-framework" queryString="framework">

<TabItem value="capybara" label="Capybara" default>

Capybara runs with Cucumber for BDD-style tests, driven by Bundler and Rake tasks.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Capybara-Cucumber-Ruby):

```bash
git clone https://github.com/LambdaTest/Capybara-Cucumber-Ruby
cd Capybara-Cucumber-Ruby
```

2. Set your browser and OS in the capabilities hash:

```ruby
@caps = {
  "browserName" => "chrome",
  "browserVersion" => "latest",
  "platformName" => "Windows 10",
  "build" => "capybara-lambdatest",
  "name" => "single-Test"
}
```

3. Run a single test, or in parallel:

```bash
bundle exec rake single
bundle exec rake parallel
```

</TabItem>

<TabItem value="rspec" label="RSpec">

RSpec loads capabilities from config YAML files and passes them to the remote WebDriver, run via Rake tasks.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/RSpec-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/RSpec-Selenium-Sample
cd RSpec-Selenium-Sample
```

2. Set your browser and OS in the config YAML.
3. Run a single test, or in parallel:

```bash
bundle exec rake single
bundle exec rake parallel
```

</TabItem>

<TabItem value="testunit" label="Test::Unit">

Test::Unit runs a Ruby test file directly, with capabilities inline, and no Bundler task runner.

1. Clone the [sample GitHub project](https://github.com/LambdaTest-sample-test-frameworks/Ruby-UnitTest-Selenium):

```bash
git clone https://github.com/LambdaTest-sample-test-frameworks/Ruby-UnitTest-Selenium
cd Ruby-UnitTest-Selenium
```

2. Set your browser and OS in the capabilities hash:

```ruby
caps = {
  :browserName => "chrome",
  :browser_version => "latest",
  :platform_name => "Windows 10",
  :name => "UnitTest Sample Test",
  :build => "UnitTest Selenium Build"
}
```

3. Run the test:

```bash
ruby LambdaTest.rb
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
      Selenium With Ruby
      </span>
    </li>
  </ul>
</nav>
