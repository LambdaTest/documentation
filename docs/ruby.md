---
id: ruby
title: Ruby with Selenium:Run Ruby Automation Testing Scripts on Online Selenium Grid
hide_title: true
sidebar_label: Ruby
description: You can now run Ruby Selenium automated test cases on online scalable TestMu AI Selenium grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - ruby selenium
  - Automation Testing Scripts
  - Selenium Grid
image: /assets/images/og-images/Ruby-with-Selenium.jpg
url: https://www.testmu.ai/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid
site_name: LambdaTest
slug: ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid
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
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Ruby Framework",
          "item": "https://www.lambdatest.com/support/docs/ruby-with-selenium-running-ruby-automation-scripts-on-testmu-selenium-grid/"
        }]
      })
    }}
></script>

# Ruby with Selenium: Tutorial to Run Your First Test on LambdaTest
***

In this topic, you will learn how to configure and run your Ruby automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Ruby** with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on LambdaTest platform.
4. Explore advanced features of LambdaTest.

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/ruby-selenium-sample.git). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Ruby With Selenium
***
Before you can start performing Ruby automation testing with Selenium, you would need to:

* Install **Ruby** and **gem** on your local system. Follow these instructions to install on different operating systems.
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
* LambdaTest binary file for running tests on your locally hosted web pages.

### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the LambdaTest’s [ruby-selenium-sample repository](https://github.com/LambdaTest/ruby-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/ruby-selenium-sample.git
cd ruby-selenium-sample
```
**Step 2:**  Install selenium dependencies for Ruby automation testing.
```bash
sudo gem install selenium-webdriver
```
### Setting up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts with Jest on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/) or through LambdaTest Profile.

**Step 3:** Set LambdaTest Username and Access Key in environment variables.
 * For Linux/macOS:
 `export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"`
 * For Windows:
 `set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"`

## Run Your First Test
***
### Sample Test with Ruby

**Step 4:** Let's check the sample ruby test script `todo-click-test.rb`. The code will select the basic capabilities such as OS, browser, browser version and so on. The Ruby automation testing script below tests a simple google search functionality.
```ruby
#todo-click-test.rb

require 'selenium-webdriver'
require 'test/unit'

class LtTest < Test::Unit::TestCase
    """
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessToken:  AccessToken can be generated from automation dashboard or profile section

    Result
    -------
    Execute Ruby Automation Tests on LambdaTest Distributed Selenium Grid 
    """

    def setup
        """
        Setup remote driver
        Params
        ----------
        platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
        browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge)
        version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/

        Result
        -------
        """
        username= ENV["LT_USERNAME"] || "LT_Username" #Enter your username here
        accessToken= ENV["LT_ACCESS_KEY"] || "LT_AccessKey" #Enter your Access Key here
        gridUrl = "hub.lambdatest.com/wd/hub"
 
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
 
        puts (caps)
        # URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
        @driver = Selenium::WebDriver.for(:remote,
            :url => "https://"+username+":"+accessToken+"@"+gridUrl,
            :desired_capabilities => caps)
    end

    def test_Login
        """
        Setup remote driver
        Params
        ----------
        Execute test:  navigate google.com search LambdaTest
        Result
        -------
        print title
        """
        puts("Searching lambdatest on google.com ")
        sleep(15)
        @driver.get("https://www.google.com/")
        elem = @driver.find_element(:name, 'q')
        elem.send_keys("lambdatest.com")
        elem.submit()
        puts("Printing title of current page :"+@driver.title)
    end
    def teardown
        """
        Quit selenium driver
        """
        @driver.quit
    end
end
```
### Configuration of Your Test Capabilities

**Step 5:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities in the above code are defined as:
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
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test
***
**Step 6:** To execute the test script, run the following script on terminal/cmd.
```bash
ruby todo-click-test.rb
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [LambdaTest Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish LambdaTest Tunnel.

>Download the binary file of:
>* [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```ruby
caps = {             
            ...          
            :tunnel => true,         
            ...
        }  
```
## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate LambdaTest with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Ruby Framework
      </span>
    </li>
  </ul>
</nav>
