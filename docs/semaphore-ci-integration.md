---
id: semaphore-ci-integration
title: Semaphore CI Integration With TestMu AI
hide_title: true
sidebar_label: Semaphore
description: Boost market delivery with TestMu AI's integration with Semaphore CI and automate tests on a cloud grid with 3000+ real browsers seamlessly.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration
  - continuous delivery
  - continuous integration tools
  - semaphore ci
url: https://www.testmuai.com/support/docs/semaphore-integration-with-testmu/
site_name: LambdaTest
slug: semaphore-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/semaphore-integration-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Semaphore Integration",
          "item": `${BRAND_URL}/support/docs/semaphore-integration-with-testmu/`
        }]
      })
    }}
></script>

# Semaphore CI Integration With <BrandName />
* * *
Semaphore is a hosted continuous integration and deployment service used to test and deploy software projects hosted on GitHub and BitBucket. While open-source projects can use Semaphore for free in its full capacity, free use for private projects is limited to 100 builds per month.
<BrandName /> now integrates with Semaphore CI to boost your go-to-market delivery. Perform automated cross browser testing hand in hand with your CI/CD pipeline and ensure your web-app renders seamlessly on more than 2000 real browsers and browser versions. Using <BrandName /> Selenium Grid, you can fully automate your continuous testing process and trim down your test cycles significantly.

## Prerequisites
***
We will be performing a demonstration by using the Protractor framework

* Global Dependencies

    * A [Git or GitHub](https://github.com/) repository
    * Download and install node.js and node package manager or npm.
    To install node.js with homebrew, use the below command.
    ```
    $ brew install node
    ```
    * If you have npm already installed, you may want to upgrade it to the latest version. Here the code you can run in your terminal to upgrade npm.
    ```
    npm install npm@latest -g
    ```

* <BrandName /> Authentication Credentials

    * Be aware of your <BrandName /> authentication credentials, i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your <BrandName /> automation dashboard by clicking on the key icon near the help button.
    ```
    $ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME>
    $ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
    ```

## Integrating <BrandName /> With Semaphore CI
***
A few changes in the .semaphore/semaphore.yml are all you need to integrate <BrandName /> With Semaphore CI. According to your test configurations, these changes would include replacing the environment variables such as access key, username, grid config, and so on.

Here is a sample config file for integrating your <BrandName /> account with your Semaphore CI instance. You can also find the below code at our [GitHub repository of Semaphore](https://github.com/LambdaTest/protractor-selenium-semaphore-sample).

```js
version: v1.0
name: Run Protractor Test In LambdaTest
agent:
  machine:
    type: e1-standard-2
    os_image: ubuntu1804
execution_time_limit:
  hours: 3

blocks:
  - name: Set Env Variables
    task:
      jobs:
      - name: NODE_ENV
        commands:
          - echo 'export LT_USERNAME="{your_lambdatest_username}"' >> ~/.bashrc
          - echo 'export LT_ACCESS_KEY="{your_lambda_access_key}"' >> ~/.bashrc
  
  - name: Run Tests
    task:
      jobs:
      - name: Run Protractor
        commands:
          - checkout
          - cd /home/semaphore/protractor-selenium-semaphore-sample
          - npm install
          - node node_modules/protractor/bin/protractor single.conf.js
```

<BrandName /> offers a Selenium [Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to fetch coded values for your desired test configurations.
For Instance, if you select the below configurations:

| FIELDS | SELECTED VALUES |
|-----------|-------------------|
| Operating System | Windows 8.1 |
| Browser | Mozilla Firefox |
| Browser Version | 62.0 |
| Resolution | 1280x1024 |
| Selenium Version | 3.11.0 |

Then Capabilities Generator at <BrandName /> will provide you with the below program:

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

>For more information, refer to our documentation on [Selenium Automation Capabilities](/docs/selenium-automation-capabilities/).

## Testing Locally Hosted or Privately Hosted Projects
***
To help you perform cross browser testing of your locally stored web pages, <BrandName /> provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With Lambda Tunnel, you can execute a test server inside your Semaphore CI build container to perform automated cross browser testing on browsers offered by Selenium grid on <BrandName />. So you make sure how well your changes look, even before your customers. Curious to know more about Lambda Tunnel?

>Follow our documentation on Lambda Tunnel to know it all. OS-specific instructions to download and set up tunnel binary are at the following links.
>
>- [Documentation For Windows User](/docs/local-testing-for-windows/)
>- [Documentation For Mac User](/docs/local-testing-for-macos/)
>- [Documentation For Linux User](/docs/local-testing-for-linux/)

>**Download the binary file of:**
>
>- [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
>- [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
>- [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Now, let us take an example of Semaphore.yml for Lambda Tunnel.

```js
//Example of .semaphore/semaphore.yml for Lambda Tunnel
version: v1.0
name: Run Protractor Test In LambdaTest
agent:
  machine:
    type: e1-standard-2
    os_image: ubuntu1804
execution_time_limit:
  hours: 3

blocks:
  - name: Set Env Variables
    task:
      jobs:
      - name: NODE_ENV
        commands:
          - ls -al
          - echo 'export LT_USERNAME="<YOUR_LAMBDATEST_USERNAME>"' >> .bashrc
          - echo 'export LT_ACCESS_KEY="<YOUR_LAMBDATEST_ACCESS_KEY>"' >> .bashrc
          
  - name: Set Tunnel
    task:
      jobs:
      - name: Download and install tunnel
        commands:
          - checkout
          - cd /home/semaphore/protractor-selenium-semaphore-sample
          - wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip
          #Extracting tunnel binary
          - sudo apt-get install unzip
          - unzip LT_Linux.zip
          #Executing tunnel library
          - ./LT -user ${LAMBDATEST_EMAIL} -key ${LAMBDATEST_KEY} & sleep 30

  - name: Run Tests
    task:
      jobs:
      - name: Run Protractor
        commands:
          - checkout
          - cd /home/semaphore/protractor-selenium-semaphore-sample
          - npm install
          - node node_modules/protractor/bin/protractor single.conf.js
```

## Parallel Testing
***
Parallel Testing is one of the most demanding features of <BrandName /> Selenium Grid. By parallel testing, you can run more than one test case simultaneously. This means that Parallel testing would allow you to execute numerous automation test cases altogether. You perform a single test scenario across different browsers or run different test scenarios across the same browser but with different browser versions.

To perform automation testing in parallel on Windows, use the below command.

```
node ./node_modules/protractor/bin/protractor parallel.conf.js
```

Monitor and analyze your test result on the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/). Reliably deploy your code at scale using Semaphore CI integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Semaphore Integration
      </span>
    </li>
  </ul>
</nav>
