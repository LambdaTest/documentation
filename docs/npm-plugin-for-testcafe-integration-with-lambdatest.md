---
id: npm-plugin-for-testcafe-integration-with-lambdatest
title: npm Plugin For TestCafe Integration With TestMu AI | TestMu AI
hide_title: true
sidebar_label: npm Plugin For TestCafe
description: TestMu AI with an npm plugin would allow you to integrate TestCafe with your TestMu AI account. That way, you can expand your test coverage using TestMu AI Selenium Grid of 3000+ real browsers, and browser versions running across various operating systems for mobile, desktop, and tablets. Similar to TestCafe, TestMu AI Selenium Grid also allows you to perform parallel testing.
keywords:
  - testcafe
  - testcafe integration
  - node.js
  - cross browser testing
  - developer tools
  - npm package
url: https://www.testmu.ai/support/docs/npm-plugin-for-testcafe-integration-with-testmu
site_name: LambdaTest
slug: npm-plugin-for-testcafe-integration-with-testmu
canonical: https://www.testmu.ai/support/docs/npm-plugin-for-testcafe-integration-with-testmu/
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
          "name": "npm Plugin Testcafe",
          "item": `${BRAND_URL}/support/docs/npm-plugin-for-testcafe-integration-with-testmu/`
        }]
      })
    }}
></script>

# npm Plugin For TestCafe Integration With <BrandName />

***
TestCafe offers a comprehensive and extensive platform to perform end-to-end tests for node.js applications. It supports both JavaScript and Typescript so that you can write tests in either one of the two. With TestCafe, you can create stable tests that are easy to integrate with your continuous integration process. You can also execute multiple test cases in parallel.

<BrandName />, a cloud-based, cross browser testing platform, is out with an npm plugin that would allow you to integrate TestCafe with your <BrandName /> account. That way, you can expand your test coverage using <BrandName /> [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) on 3000+ real browsers and browser versions running across various operating systems for mobile, desktop, and tablets. Similar to TestCafe, <BrandName /> Selenium Grid also allows you to perform parallel testing.

## Prerequisites
***

>**Important:** Visit <BrandName /> [npm package for TestCafe](https://www.npmjs.com/package/testcafe-browser-provider-lambdatest).

* Add the dependency `"testcafe": "<testcafe_version>"` in the package.json file.

* Make sure you have your [TestCafe Credentials][1].

   * For Linux/Mac:  

        ``` js
        $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```

    * For Windows: 
        ``` js
        $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```




## Install <BrandName /> npm Plugin For TestCafe
-----------------------------------------------------------------------------------------------------------------------------
Use the below command for installing the npm plugin to integrate <BrandName /> with TestCafe.

``` js
npm install testcafe-browser-provider-lambdatest
```

## How To Use npm Plugin For <BrandName /> & TestCafe Integration?
-----------------------------------------------------------------------------------------------------------------------------
To acknowledge all available browsers aliases offered by <BrandName /> Selenium Grid, type the below command:

``` js
testcafe -b lambdatest
```

To execute the test from cmd/terminal by declaring the browsers and operating systems to test:

``` js
$ testcafe "lambdatest:Chrome@74.0:Windows 8" 'path/to/test/file.js'
```


For Parallel testing:

``` js
$ testcafe "lambdatest:Chrome@74.0:Windows 8","lambdatest:Chrome@75.0:Windows 10" "path/to/test/file.js"
```


If you are using API, then you need to declare the aliases inside your `browser()` method:

``` js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('lambdatest:Chrome@74.0:Windows 8')
    .run();
```

## Additional Configuration Parameters
-----------------------------------------------------------------------------------------------------------------------------
>**Note**: TestCafe integration with <BrandName /> does not support Geolocation testing.

In case you wish to make some additional configurations to your automation test scripts, then you can incorporate the below variables:

| VARIABLE            | DESCRIPTION                                                                                                                                                                                                                                                                          |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LT_TEST_NAME        | To specify a name to your test on <BrandName /> Selenium Grid.                                                                                                                                                                                                                          |
| LT_BUILD            | To specify a name to your build on <BrandName /> Selenium Grid.                                                                                                                                                                                                                         |
| LT_CAPABILITY_PATH  | To specify the path of a JSON file that declares additional Desired Capabilities. <br/> `     "Chrome@63.0:Windows 8.1" : {`             <br/>`"network" : true,`         <br/>`"visual" : true,`         <br/>`"timezone" : "UTC+11:00"`     <br/>`}`  <br/>Here, ``Chrome@63.0:Windows 8.1`` represents browser alias. | 
| LT_RESOLUTION       | To perform cross browser testing on a specific screen resolution in the &#36;&lbrace;width&rbrace;x&#36;&lbrace;height&rbrace; format.                                                                                                                                                                                   |
| LT_LOGFILE          | Presents detailed logs of your automation script execution. Provide a specific path to this file. If you won’t provide a path, then the logs would be saved in your present working directory by the filename: tunnel.log.                                                            |
| LT_VERBOSE          | Set flag for verbose to either true or false.                                                                                                                                                                                                                                         |
| LT_PROXY_HOST       | A mandatory variable if you wish to perform cross browser testing through proxy. This variable is where you need to declare the hostname/IP of proxy.                                                                                                                                |
| LT_PROXY_PORT       | Port of the proxy. Default value for proxy port would be 3128.                                                                                                                                                                                                                       |
| LT_PROXY_USER       | Username for connecting to proxy, mandatory value for using ‘proxypass’.                                                                                                                                                                                                             |
| LT_PROXY_PASS       | Password for the USERNAME option.                                                                                                                                                                                                                                                    |
| LT_TUNNEL_NAME      | Human readable tunnel identifier (Name of the tunnel)..                                                                                                                                                                                                                               |
| LT_DIR              | Path of the local folder you want to test.                                                                                                                                                                                                                                           |
| LT_SELENIUM_VERSION | Browser specific capability.                                                                                                                                                                                                                                                          |
| LT_CONSOLE          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_NETWORK          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_VIDEO            | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_SCREENSHOT       | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_TIMEZONE         | Configure tests to run on a custom time zone.                                                                                                                                                                                                                                        |
| LT_TUNNEL_NUMBER       |  Number of tunnels to be spawned at a time.                                                                                                                                                                                                                                                           |
| LOAD_BALANCED_MODE       | Load Balanced Mode in Testcafe                                                                                                                                                                                                                                                         |



## Example
***
``` js
export LT_RESOLUTION="1920x1080"
export LT_TEST_NAME="Test TestCafe"
export LT_BUILD="Build x"
export LT_TUNNEL_NUMBER=2
export LOAD_BALANCED_MODE=true
testcafe "lambdatest:Chrome","lambdatest:Chrome@74.0:Windows 8" tests/
```

[1]: https://bitbucket.org/dashboard/overview

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href={`${BRAND_URL}/support/docs/`}>Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">npm Plugin Testcafe</span>
    </li>
  </ul>
</nav>
