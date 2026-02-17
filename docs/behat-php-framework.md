---
id: behat-php-framework
title: Behat Selenium Testing:Running Behat Automation Scripts on Selenium Grid Cloud
hide_title: true
sidebar_label: Behat
description: Now you can run your automation scripts using Selenium with Behat on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - behat
  - behat selenium
  - php selenium
  - php automation testing
  - selenium webdriver php
  - selenium php testing tutorial
  - php selenium framework
  - selenium
  - selenium automation testing
  - selenium testing tool
  - selenium testing tutorial
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "Behat Test",
          "item": `${BRAND_URL}/support/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Behat with Selenium: Tutorial to Run Your First Test on <BrandName />
* * *

In this topic, you will learn how to configure and run your PHP automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **PHP** framework **Behat**.

## Objective
***

By the end of this topic, you will be able to:

1. Set up an environment for testing your locally hosted web pages using **Behat** automation testing.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Behat** with Selenium to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [Behat <BrandName /> Repository on  GitHub](https://github.com/LambdaTest/behat-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Behat Selenium Scripts
***
Before you begin automation testing with Selenium and Behat, you would need to:

* Make sure that you have the latest **PHP** installed on your system. You can download and install **PHP** using following commands in the terminal:

  * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands: 
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  brew install php
  ```
    * **Windows:** 
  ```bash
  sudo apt-get install curl libcurl3 libcurl3-dev php
  ```
  **Note:** For **Windows**, you can download **PHP** from [here](http://windows.php.net/download/). Also, refer to this [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

* Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

  **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
  ```bash
  mv composer.phar /usr/local/bin/composer
  ```
### Installing Selenium Dependencies and tutorial repo
**Step 1:** Clone the <BrandName />’s [Behat-Selenium-sample repository](https://github.com/LambdaTest/behat-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/behat-selenium-sample
cd behat-selenium-sample
```
**Step 2:** Install the composer dependencies in the current project directory using the command below:
```bash
composer install
```
**Step 3:** Set up **Behat** automation for your OS using composer.
```bash
php composer.phar require behat/behat
```

### Setting up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through <a href="https://stage-accounts.lambdatestinternal.com/login" onClick={CookieTrackingLogin}><BrandName /> Profile</a>.

**Step 4:** Set <BrandName /> `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

## Run Your First Test
***
### Sample Test with Behat
```bash
Feature: Google's Search Functionality
 
Scenario: Can find search results
 
    Given I am on "https://www.google.com/ncr"
 
    When I search for "LambdaTest"
 
    Then I get title as "LambdaTest - Google Search"
```

### Configuration of Your Test Capabilities
**Step 5:** In the test script, you need to update your test capabilities. Let us have a look at an example which will validate your <BrandName /> credentials for authentication purpose. Later, the code will select the basic capabilities such as OS, browser, browser version and so on.
```php
default:
   paths:
       features: '../features/single'
       bootstrap:  '../features/bootstrap'
   context:
       parameters:
           lambdatest:
               server: "hub.lambdatest.com"
               user: "YOUR_LAMBDATEST_USERNAME"
               key: "YOUR_LAMBDATEST_ACCESS_KEY"
 
               capabilities:
                   build: "behat-selenium-sample"
                   name: "single-behat-test"
                   video: true
                   visual: true
                   network: true
                   console: true
 
 
               environments:
                   -
                       browserName: chrome
                       version: 71.0
                       platform: Win10
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.


### Executing the Test
**Step 6:** The tests can be executed in the terminal using the following command:
```bash
composer single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Parallel Tests Using Behat Framework
***
### Executing Parallel Tests Using Behat
To run parallel tests using **Behat**, we would have to execute the below command in the terminal: 

```bash
composer parallel
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
Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on to set the tunnel value to true by adding the following line in your config files:

**Tunnel Capability**
```php
 tunnel = true
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
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Behat Automation Testing
      </span>
    </li>
  </ul>
</nav>
