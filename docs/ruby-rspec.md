---
id: ruby-rspec
title: RSpec With Selenium – Run RSpec Tests On TestMu AI Selenium Grid
hide_title: true
sidebar_label: RSpec
description: Now you can run your automation scripts using Selenium with RSpec on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - rspec
  - rspec selenium
  - ruby selenium
image: /assets/images/og-images/selenium-testing-og.png

url: https://www.testmu.ai/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/
site_name: LambdaTest
slug: rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "RSpec Test",
          "item": `${BRAND_URL}/support/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# RSpec With Selenium: Tutorial to Run Your First Test on <BrandName />
*** 

In this topic, you will learn how to configure and run your Java automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using Ruby framework RSpec.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **RSpec** framework with Selenium.
2. Run a sample Selenium with **RSpec Ruby** on <BrandName /> Automation.
3. Setting up environment for testing your locally hosted web pages or website.
4. Run multiple tests in parallel with **RSpec Ruby** using <BrandName /> Selenium Grid.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/RSpec-Selenium-Sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites To Run RSpec Tests With Selenium
***
Before you can start performing Ruby automation testing with Selenium, you would need to:

* Install Ruby and gem on your local system. Follow these instructions to install on different operating systems.
  * For **Windows**, you can download from the [official website](https://rubyinstaller.org/downloads/).
  * For **Linux** or **Ubuntu**, you can run a simple apt command like below:
  ```bash
  sudo apt-get install ruby-full
  ```
  * For **macOS**, you can run a [Homebrew](https://brew.sh/) command like this:
  ```bash
  brew install ruby
  ```
* To run tests in parallel you will require the [parallel_tests](https://github.com/grosser/parallel_tests) gem.
* <BrandName /> binary file for running tests on your locally hosted web pages.

### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the <BrandName />’s [RSpec-Selenium repository](https://github.com/LambdaTest/RSpec-Selenium-Sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/RSpec-Selenium-Sample.git
cd RSpec-Selenium-Sample
```
**Step 2:** After navigating to the cloned directory, install project dependencies using the below commands:
```bash
bundle install
```
### Setting up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts with Jest on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/) or through <BrandName /> Profile.

**Step 3:** Set <BrandName /> Username and Access Key in environment variables.
 * For Linux/macOS:
 `export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"`
 * For Windows:
 `set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"`

## Run Your First Test
***
### Sample Test with RSpec Ruby

The example mentioned below would help you to execute your automation test using **RSpec Ruby**.
```ruby
# LambdaTest.rb

require 'yaml'
require 'rspec'
require 'selenium-webdriver'

TASK_ID = (ENV['TASK_ID'] || 0).to_i
CONFIG_NAME = ENV['CONFIG_NAME'] || 'single'

CONFIG = YAML.load(File.read(File.join(File.dirname(__FILE__), "../config/#{CONFIG_NAME}.config.yml")))
CONFIG['user'] = ENV['LT_USERNAME'] || CONFIG['user']
CONFIG['key'] = ENV['LT_ACCESS_KEY'] || CONFIG['key']


RSpec.configure do |config|
  config.around(:example) do |example|
    @caps = CONFIG['common_caps'].merge(CONFIG['browser_caps'][TASK_ID])
    @caps["name"] = ENV['name'] || example.metadata[:name] || example.metadata[:file_path].split('/').last.split('.').first

    @driver = Selenium::WebDriver.for(:remote,:url => "https://#{CONFIG['user']}:#{CONFIG['key']}@#{CONFIG['server']}/wd/hub",:desired_capabilities => @caps)

    begin
      example.run
    ensure
      @driver.quit
    end
  end
end
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 4:** Navigate to the directory where you cloned the sample of RSpec Ruby and run the following command.
```bash
bundle exec rake single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on <BrandName /> automation dashboard. [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running the Parallel Tests Using RSpec Framework
***
### Executing the Parallel Tests 
Navigate to the directory where you cloned the sample of RSpec Ruby and run the following command.
```bash
bundle exec rake parallel
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build).

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish <BrandName /> Tunnel.

>Download the binary file of:
>* [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```ruby
caps = {             
            ...          
            :tunnel => true,         
            ...
        }  
```
Use the below command for running a local test.
```bash
bundle exec rake local
```
## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

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
        RSpec Test
      </span>
    </li>
  </ul>
</nav>
