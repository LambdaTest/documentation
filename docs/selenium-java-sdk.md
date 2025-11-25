---
id: selenium-java-sdk
title: LambdaTest Selenium Java SDK - Zero Code Changes
sidebar_label: Selenium Java SDK
description: Run your Selenium Java tests on LambdaTest with zero code changes. Simple YAML configuration, Maven dependencies, and a single listener is all you need.
keywords:
  - selenium java sdk
  - lambdatest java sdk
  - selenium sdk
  - zero code changes
  - java selenium automation
  - selenium testing
  - lambdatest selenium

url: https://www.lambdatest.com/support/docs/selenium-java-sdk/
slug: selenium-java-sdk/
---

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "LambdaTest Selenium Java SDK",
          "item": "https://www.lambdatest.com/support/docs/selenium-java-sdk/"
        }]
      })
    }}
></script>

# LambdaTest Selenium Java SDK

---

The LambdaTest Selenium Java SDK enables you to run your existing Selenium Java tests on LambdaTest's cloud grid with **zero code changes**. Simply configure a YAML file, add a Maven dependency, and include a single listener - that's all you need to get started.

## Key Features

---

- **Zero Code Changes** - Run your existing Selenium tests without modifying your test code
- **Simple Configuration** - YAML-based configuration for credentials and capabilities
- **Thread-Safe by Default** - Built-in thread safety for parallel test execution
- **Easy Integration** - Just add a dependency and listener to your project
- **Cloud Grid Access** - Run tests on 3000+ real browsers and operating systems

## Prerequisites

---

Before you begin, ensure you have:

- A LambdaTest account. [Sign up for free](https://www.lambdatest.com/signup) if you don't have one
- Your LambdaTest [Username and Access Key](https://accounts.lambdatest.com/security)
- Java 8 or higher installed
- Maven installed and configured
- An existing Java test project using TestNG (support for additional frameworks is coming soon).

## Quick Start

---

Getting started with the LambdaTest Selenium Java SDK requires only three simple steps:

### Step 1: Add Maven Dependency

Add the LambdaTest Selenium Java SDK dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-selenium-java-sdk</artifactId>
    <version>1.0.1</version>
</dependency>
```

:::note
You can check the latest version of [lambdatest-selenium-java-sdk](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-selenium-java-sdk) and update the version accordingly.
:::

### Step 2: Create Configuration File

Create a `lambdatest.yml` file in your project root directory with your LambdaTest credentials and desired capabilities:

```yaml
# LambdaTest Configuration File for Tests
# This file is loaded automatically by the LambdaTest SDK

username: YOUR_LAMBDATEST_USERNAME
accesskey: YOUR_LAMBDATEST_ACCESS_KEY

platforms:
  - browserName: Chrome
    browserVersion: latest
    platformName: Windows 10

# Test metadata
build: SDK Build Classes Methods v1
project: SDK Project
name: SDK Test

# LambdaTest features
video: true
network: false
console: true
visual: false

# Additional capabilities
resolution: 1920x1080
tunnel: true
```

:::tip Using Environment Variables
You can also use environment variables in your YAML file:

```yaml
username: ${LT_USERNAME}
accesskey: ${LT_ACCESS_KEY}
```

Set these environment variables before running your tests:
- `LT_USERNAME` - Your LambdaTest username
- `LT_ACCESS_KEY` - Your LambdaTest access key
:::

### Step 3: Add TestNG Listener

Add the LambdaTest status listener to your TestNG configuration:

**Using testng.xml**

```xml
<suite name="LambdaTest Suite">
    <listeners>
        <listener class-name="com.lambdatest.selenium.LambdaTestStatusListener"/>
    </listeners>
    
    <test name="My Tests">
        <classes>
            <class name="com.example.MyTest"/>
        </classes>
    </test>
</suite>
```


That's it! Your tests are now configured to run on LambdaTest. No code changes required in your existing test methods.



## Thread Safety

---

The LambdaTest Selenium Java SDK is **thread-safe by default**, making it perfect for parallel test execution. You can run multiple tests concurrently without worrying about thread synchronization issues.

### Parallel Execution Example

The SDK fully supports parallel test execution with TestNG:

```xml
<suite name="Parallel Suite" parallel="tests" thread-count="5">
    <test name="Chrome Test">
        <parameter name="browser" value="chrome"/>
        <classes>
            <class name="com.example.Test1"/>
        </classes>
    </test>
    <test name="Firefox Test">
        <parameter name="browser" value="firefox"/>
        <classes>
            <class name="com.example.Test1"/>
        </classes>
    </test>
</suite>
```

## Example Test

---

Here's a simple example of how your existing tests work without any modifications:

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import java.net.URL;

public class BasicTest {
    WebDriver driver;
    
    @BeforeMethod
    public void setup() throws Exception {
        ChromeOptions options = new ChromeOptions();
        options.setCapability("platformName", "Windows 10");
        options.setCapability("browserVersion", "latest");
        
        // SDK automatically injects LambdaTest capabilities from lambdatest.yml
        driver = new RemoteWebDriver(
            new URL("https://hub.lambdatest.com/wd/hub"), 
            options
        );
    }
    
    @Test
    public void testExample() {
        driver.get("https://www.example.com");
        String title = driver.getTitle();
        System.out.println("Page title: " + title);
        assert title.contains("Example");
    }
    
    @AfterMethod
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
```

## Troubleshooting

---

### Common Issues

**Issue: Driver not connecting to LambdaTest**

- Verify credentials in `lambdatest.yml` or environment variables
- Check your LambdaTest account has active minutes

**Issue: Tests not marked as passed/failed**

- Ensure TestNG listener is configured correctly
- Verify driver session ID is available
- Check network connectivity to LambdaTest

**Issue: Configuration not loading**

- Ensure `lambdatest.yml` is in the project root directory
- Verify YAML syntax is correct


## Additional Resources

---

- [LambdaTest Selenium Grid Documentation](/support/docs/getting-started-with-lambdatest-automation)
- [Capabilities Generator](https://www.lambdatest.com/capabilities-generator/)
- [GitHub Repository](https://github.com/Lambdatest/lambdatest-java-selenium-sdk)
- [LambdaTest Support](https://www.lambdatest.com/support)


---

Made with ❤️ by LambdaTest

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> LambdaTest Selenium Java SDK </span>
    </li>
  </ul>
</nav>

