---
id: ruby
title: How to Run Selenium Tests With Ruby on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Ruby"
description: "Run Ruby Selenium tests on the TestMu AI cloud grid across 10,000+ browsers. Covers Capybara, RSpec, and Test::Unit."
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

# How to Run Selenium Tests With Ruby on TestMu AI
---


Run your Ruby Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Ruby](https://www.ruby-lang.org/en/downloads/) and the `gem` package manager.
4. Install the `selenium-webdriver` gem (and `parallel_tests` for parallel runs), pulled in by the sample projects via Bundler.

## Set Your Credentials
---

Your Username and Access Key are read from environment variables, set once per operating system.

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

## How the Sample Test Works
---

Every framework below connects to the grid and passes your browser and OS choices through a capabilities hash:

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

## Run a Test in Your Framework
---

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

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

3. Install the project dependencies:

```bash
bundle install
```

4. Run a single test, or in parallel:

```bash
bundle exec rake single
bundle exec rake parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="rspec" label="RSpec">

RSpec loads capabilities from config YAML files and passes them to the remote WebDriver, run via Rake tasks.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/RSpec-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/RSpec-Selenium-Sample
cd RSpec-Selenium-Sample
```

2. Set your browser and OS in the config YAML.
3. Install the project dependencies:

```bash
bundle install
```

4. Run a single test, or in parallel:

```bash
bundle exec rake single
bundle exec rake parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

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

3. Install the project dependencies:

```bash
bundle install
```

4. Run the test:

```bash
ruby LambdaTest.rb
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

</Tabs>

## View Your Results
---

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps
---

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)

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