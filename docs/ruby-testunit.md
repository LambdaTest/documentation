---
id: ruby-testunit
title: Selenium With Test::Unit
hide_title: false
sidebar_label: Test::Unit
description: Run Test::Unit Ruby Selenium automation tests on the TestMu AI cloud grid across 3000+ browser and OS combinations.
keywords:
  - testunit selenium grid setup
  - run testunit tests on cloud
  - ruby testunit automation tutorial
  - testunit cross browser testing
  - testunit selenium example
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/testunit-with-selenium-running-testunit-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: testunit-with-selenium-running-testunit-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/testunit-with-selenium-running-testunit-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With Test::Unit",
          "item": `${BRAND_URL}/support/docs/testunit-with-selenium-running-testunit-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

---

Run Test::Unit tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/Ruby-UnitTest-Selenium" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before you start Ruby automation testing with Selenium.

1. Install Ruby and gem on your local system. Follow these instructions to install on different operating systems.
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
git clone https://github.com/LambdaTest-sample-test-frameworks/Ruby-UnitTest-Selenium.git
cd Ruby-UnitTest-Selenium
```

Install project dependencies:
```bash
bundle install
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

## Step 3: Configure Your Test Capabilities
---
Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```ruby
caps = {						
			:browserName => lt_browser,			
			:browser_version => lt_browser_version,			
			:platform_name =>  lt_os,
			:name =>  "UnitTest Sample Test",
			:build =>  "UnitTest Selenium Build"
		} 	
```

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Execute the Test::Unit test from the command line.

```bash
ruby LambdaTest.rb
```

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Test::Unit Tests Using Agent Skills
---

Use AI coding assistants to generate and run Test::Unit tests with the TestMu AI Agent Skill.

The [testunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/testunit-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/testunit-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/testunit-skill .cursor/skills/
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
        Selenium With Test::Unit
      </span>
    </li>
  </ul>
</nav>
