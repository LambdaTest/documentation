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

## Set Your Credentials
---
Clone the repository and install dependencies.

Your Username and Access Key are read from environment variables, set once per operating system.

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

Install selenium dependencies:
```bash
sudo gem install selenium-webdriver
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI Username and Access Key in environment variables.

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

## How the Sample Test Works
---
Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

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

## Run a Test in Your Framework
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
