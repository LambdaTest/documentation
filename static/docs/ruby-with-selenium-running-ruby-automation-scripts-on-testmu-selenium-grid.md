# Selenium With Ruby

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Ruby Selenium tests on the TestMu AI cloud grid across 3000+ browser and OS combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Ruby](https://www.ruby-lang.org/en/downloads/) and the `gem` package manager.
4. Install the `selenium-webdriver` gem (and `parallel_tests` for parallel runs), pulled in by the sample projects via Bundler.

## Set your credentials

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the sample test works

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

## Run a test in your framework

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

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

## View your results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).
