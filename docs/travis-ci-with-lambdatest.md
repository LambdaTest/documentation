---
id: travis-ci-with-lambdatest
title: How to integrate Travis CI with TestMu AI
hide_title: true
sidebar_label: Travis CI
description: TestMu AI now integrates with Travis CI to boost go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines, on cloud. Perform automation testing in parallel with TestMu AI’s Selenium grid to drastically trim down test cycles.
keywords:
    - testmu ai integrations
    - testmu ai integrations with ci/cd tools
    - ci/cd tools
    - continuous integration
    - continuous delivery
    - continuous integration tools
    - Travis CI integration
    - Travis CI integration with testmu ai
url: https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/
site_name: LambdaTest
slug: travis-ci-with-lambdatest/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Travis CI integration",
          "item": "https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/"
        }]
      })
    }}
></script>

# Travis CI Integration with LambdaTest
* * *

Travis CI is one of the most popular tool which facilitates continuous integration for GitHub projects. Open source projects can use Travis CI without having to pay anything from their pocket. Now, deploy your code rapidly and test it thoroughly for a robust delivery in your go-to market launch.

LambdaTest now integrates with Travis CI to boost your go-to market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines, on cloud. Perform automation testing in parallel with LambdaTest’s Selenium grid to drastically trim down your test cycles.

## Prerequisites For Integrating Travis CI With Our Online Selenium Grid
***
In order to perform your karma tests with LambdaTest, you would need the below things to be already set up:

**1. Global Dependencies**   

* A [Git or GitHub repository](https://github.com/)
* Download and [install node.js](https://nodejs.org/en/) and node package manager or npm.
To install node.js with homebrew use the below command.
```
$ brew install node
```

* If you have npm already installed, you may want to upgrade it to latest version. Here the code you can run in your terminal to upgrade npm.
```
npm install npm@latest -g
```

**2.LambdaTest Authentication Credentials**   

Be aware of your LambdaTest authentication credentials i.e. your LambdaTest username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [LambdaTest automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

* For Linux/Mac:
    ```
    $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```

* For Windows:

    ```
    $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```

## Integrating LambdaTest With Travis CI
***
To integrate Travis CI with LambdaTest you need to make minor tweaks in the ***.travisci/travis.yml***  which is the configuration file for your Travis CI instance. The changes you need to make will revolve around the environment variables such as access key, username, grid config and so on.

Below is a sample config file for integrating [Travis CI](https://github.com/LambdaTest/Nightwatch-travis-ci-selenium) with LambdaTest. You can use the sample file to test your own automation test suite by replacing the environment variables according to your need. All the code used for the demonstration of this topic can be find in our GitHub repository.

```
# Choose language and version
language: node_js
node_js:
  - "8"
branches:
  only:
    - master
 
# Setup custom environment variables
env:
  global:
    - LT_USERNAME=${LAMBDATEST_USERNAME}
    - LT_ACCESS_KEY=${LAMBDATEST_ACCESS_KEY}
 
# All the step which you want to run in container.
script:
  # Fetching latest code from  git
  - git pull origin master
  # Installing dependencies
  - npm install
  # Running test!
  - node_modules/.bin/nightwatch -e chrome
```

LambdaTest offers a [**Selenium Desired Capabilities Generator**](https://www.lambdatest.com/capabilities-generator/) to fetch coded values for your desired test configurations.

For Instance, if you select the below configurations:

|CAPABILITY|SELECTED VALUE|
| :---: | :---: |
|Operating System|Windows 8.1|
|Resolution|1280×1024|
|Browser|Firefox|
|Browser Version|62.0|
|Selenium Version|3.11.0|

Then Capabilities Generator at LambdaTest will provide you with the below program:
```
var capabilities = {
    "build" : "your build name", //You can edit this and assign a build name
    "name" : "your test name", // Assign a name to your Test
    "platform" : "Windows 8.1", // The operating system on which you want to test your website
    "browserName" : "Firefox", // The browser on which you want to test
    "version" : "62.0", // The browser version which you've selected to perform the test upon
    "resolution" : "1280x1024", // The resolution in which you want to run the test as per your operating system
    "selenium_version" : "3.11.0", //The version of Selenium on which the test will run
    "visual" : true,
    "firefox.driver" : v0.21.0
}
```

For more information, refer to our documentation on [Selenium Automation Capabilities](/docs/selenium-automation-capabilities/)

## Testing Locally Hosted or Privately Hosted Projects

To help you perform cross browser testing of your locally stored web pages, LambdaTest provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With Lambda Tunnel, you can execute a test server inside your Travis CI build container to perform automated cross browser testing on browsers offered by Selenium grid on LambdaTest. So you make sure how well your changes look, even before your customers. Curious to know more about Lambda Tunnel?

>Follow our documentation on Lambda Tunnel to know it all. OS specific instructions to download and setup tunnel binary can be found at the following links.
>
>* **[Documentation For Windows User](/docs/local-testing-for-windows/)**
>* **[Documentation For Mac User](/docs/local-testing-for-macos/)**
>* **[Documentation For Linux User](/docs/local-testing-for-linux/)**



>Download the binary file of:   
>* [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
>* [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
>* [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

The below example of ***travis.yml***  file would demonstrate you on how to leverage LambdaTest’s Selenium grid by performing a browser test through your testing server contained in your Travis CI build.

```
# Choose language and version
language: node_js
node_js:
  - "8"
branches:
  only:
    - master
 
# Setup custom environment variables
env:
  global:
    - LT_USERNAME=${LAMBDATEST_USERNAME}
    - LT_ACCESS_KEY=${LAMBDATEST_ACCESS_KEY}
 
# All the step which you want to run in container.
script:
  # Fetching latest code from  git
  - git pull origin master
  # Downloading tunnel binary
  - wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip
  # Extracting tunnel binary
  - sudo apt-get install unzip
  - unzip LT_Linux.zip
  # Executing tunnel binary
  - ./LT -user ${LAMBDATEST_EMAIL} -key ${LAMBDATEST_KEY} &
  - sleep 30
  # Installing dependencies
  - npm install
  # Running test!
  - node_modules/.bin/nightwatch -e chrome
```  

Once, the tunnel is successfully set up. You can add the below code to your capabilities for testing internal servers on your network.

```
"desiredCapabilities": {
       "tunnel":true
     }
```     

## Parallel Testing

Parallel Testing is one of the most demanding feature of LambdaTest Selenium Grid. By parallel testing, you can run more than one test case, simultaneously. This means that, Parallel testing would allow you to execute numerous automation test cases altogether. So you execute a single test scenario across different browsers or could run different test scenarios across the same browser but with different browser versions.

To perform automation testing in parallel on Windows use the below command.
```
$ node_modules\.bin\nightwatch -e chrome,edge,firefox tests
```

To perform automation testing in parallel on macOS/Linux use the below command.
```
$ ./node_modules/.bin/nightwatch -e chrome,edge,firefox tests
```

Monitor and analyze your test result on the [**LambdaTest Automation Dashboard**](https://automation.lambdatest.com/)

Deploy your code in a reliable manner at scale using Travis CI integration with LambdaTest, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Travis CI Integration with LambdaTest</span>
    </li>
  </ul>
</nav>
