---
id: guide-to-ruby
title: How To Run Ruby Tests On Online Selenium Grid
hide_title: true
sidebar_label: Quick Guide To Run Ruby
description: Guide to running Ruby and Selenium test scripts on TestMu AI Selenium automation grid online. Automated cross browser testing online using Selenium and Ruby on 3000+ browsers on cloud.
keywords:
  - testmu ai automation using ruby
  - ruby and selenium automation
  - ruby documentation testmu ai
  - ruby and selenium tutorial
  - ruby and testmu ai tutorial
  - ruby on testmu ai selenium grid
  - getting started with ruby and selenium
  - selenium testing using ruby
  - ruby selenium scripts

image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmu.ai/support/docs/quick-guide-to-run-ruby-tests-on-testmu-selenium-grid/
site_name: LambdaTest
slug: quick-guide-to-run-ruby-tests-on-testmu-selenium-grid
canonical: https://www.testmu.ai/support/docs/quick-guide-to-run-ruby-tests-on-testmu-selenium-grid/
---
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
          "name": "Quick Guide To Run Ruby Tests On TestMu AI Selenium Grid",
          "item": `${BRAND_URL}/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/`
        }]
      })
    }}
></script>

# Quick Guide To Run Ruby Tests On <BrandName /> Selenium Grid
***

<BrandName /> Selenium Automation Grid is a secure, scalable, and reliable [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) on cloud that can help you run your Ruby automation scripts on 3000+ different browsers and operating system environments. The grid is specifically built for high performance and gives you not only a greater browser coverage but also an ability to run automation tests in parallel. This helps you reduce your automation test execution time significantly. This post will help you quickly get started with running Ruby test scripts on <BrandName /> Selenium Grid.

## Prerequisites
***

First, you would have to install Ruby and gem on your local system. We recommend installing the latest version of Ruby. Installing these platforms is a little different in each operating system

- For windows, you can download the latest installed the [official website](https://rubyinstaller.org/downloads/).

- If you are using Linux or Ubuntu OS, you can run a simple apt command like below. You can also refer to this doc to know more about which command suits your OS better.

        $ sudo apt-get install ruby-full

- If you are using MacOS you can run a [homebrew](https://brew.sh/) command like this-

        $ brew install ruby

## Installing Selenium Dependencies For Ruby
***

Once you have Ruby and Gem setup, you would now have to install Selenium dependencies. You can install Selenium via simple gem command-

    gem install selenium-webdriver

## Sample Ruby & Selenium Test To Get You started
***

Once you have installed necessary dependencies, you are all set to run your Ruby automation scripts on <BrandName /> Selenium grid. To get started you can try out the code below. It’s a simple Ruby scripts that opens up [Google.com](https://www.google.com/), searches <BrandName /> in Google search bar, and then displays the title of the search result page. You can also fork it from our [Ruby GitHub repository](https://github.com/LambdaTest/ruby-selenium-sample).

```ruby
//Sample Ruby and Selenium Automation Script

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
        username= "{YOUR_LAMBDATEST_USERNAME}"
        accessToken= "{YOUR_LAMBDATEST_ACCESS_KEY}"
        gridUrl = "hub.lambdatest.com/wd/hub"
  
        caps = {                      
            :browserName => "chrome",        
            :version =>   "67.0",        
            :platform =>  "win10",
            :name =>  "LambdaTest ruby google search name",
            :build =>  "LambdaTest ruby google search build",     
            :network =>  true,
            :visual =>  true,
            :video =>  true,
            :console =>  true
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
        puts("Searching LambdaTest on google.com ")
        sleep(15)
        @driver.get("https://www.google.com/ncr")
        elem = @driver.find_element(:name, 'q')
        elem.send_keys("LambdaTest.com")
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

Here’s how you can execute the test from your terminal.

    ruby google-search-lambdatest.rb

The first thing to note in this code is the use of remote webdriver. To access <BrandName /> grid, you would have to invoke remote webdriver instead of local webdrivers. In addition, the browser enthronement details are passed on through desired_capabilities.

In this example we are running a test on **Windows 10**, **Chrome 67 environment**. You can test your own choice of an environment by changing the parameters in the object. You can leverage our capabilities generator tool to create code for your environments.

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/capabilities-generator">LambdaTest Capability Generator Tool</a>
</div> 

> **Tear Down**: The tear down method helps <BrandName /> platform understand when the execution of a test is finished. It’s important to tear down each test or else it will give timeout errors.

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
       Quick Guide To Run Ruby Tests On <BrandName /> Selenium Grid
      </span>
    </li>
  </ul>
</nav>
