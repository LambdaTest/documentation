# Selenium With Ruby

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Ruby Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Ruby](https://www.ruby-lang.org/en/downloads/) and the `gem` package manager.
4. Install the `selenium-webdriver` gem (and `parallel_tests` for parallel runs), pulled in by the sample projects via Bundler.

## Step 1: Clone the Sample Project

Your Username and Access Key are read from environment variables, set once per operating system.

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Step 3: Configure Your Test Capabilities

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

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.

## Step 4: Run the Test

Execute the Ruby Selenium test from the command line.

```bash
ruby todo-click-test.rb
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Ruby Selenium Tests Using Agent Skills

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

Capybara runs with Cucumber for BDD-style tests, driven by Bundler and Rake tasks.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Capybara-Cucumber-Ruby):

```bash
git clone https://github.com/LambdaTest/Capybara-Cucumber-Ruby
cd Capybara-Cucumber-Ruby
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
