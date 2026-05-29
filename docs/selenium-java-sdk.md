---
id: selenium-java-sdk
title: TestMu AI Selenium Java SDK - Zero Code Changes
sidebar_label: Java SDK
description: Run Selenium TestNG tests on TestMu AI cloud grid with zero code changes using YAML config and Maven.
keywords:
  - selenium java sdk zero code changes
  - testmu ai java sdk setup
  - selenium cloud grid java maven
  - java selenium testng cloud execution
  - testmu selenium sdk configuration
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-java-sdk/
slug: selenium-java-sdk/
canonical: https://www.testmuai.com/support/docs/selenium-java-sdk/
---

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "TestMu AI Selenium Java SDK",
          "item": `${BRAND_URL}/support/docs/selenium-java-sdk/`
        }]
      })
    }}
></script>

# TestMu AI Selenium Java SDK

---

The TestMu AI Selenium Java SDK enables you to run your existing Selenium TestNG tests on TestMu AI's cloud grid with **zero code changes**. Configure a YAML file, add a Maven dependency, and include a single listener to get started.

## Key Features

---

Review what the SDK offers out of the box.

- **Zero Code Changes** - Run your existing Selenium tests without modifying your test code
- **Simple Configuration** - YAML-based configuration for credentials and capabilities
- **Thread-Safe by Default** - Built-in thread safety for parallel test execution
- **Easy Integration** - Add a dependency and listener to your project
- **Cloud Grid Access** - Run tests on 3000+ real browsers and operating systems

## Prerequisites

---

Complete these steps before using the SDK.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you do not have one.
2. Get your TestMu AI [Username and Access Key](https://accounts.lambdatest.com/dashboard).
3. Install Java 8 or higher.
4. Install and configure Maven.
5. Prepare an existing Java test project using TestNG (support for additional frameworks is coming soon).

## Quick Start

---

Get running on the cloud grid in three steps.

### Step 1: Add Maven Dependency

Add the TestMu AI Selenium Java SDK dependency to your `pom.xml`. Configure the agent to start automatically during your build process:

```xml
<dependencies>
  ....
    <dependency>
        <groupId>io.github.lambdatest</groupId>
        <artifactId>lambdatest-selenium-java-sdk</artifactId>
        <version>1.0.1</version>
    </dependency>
</dependencies>

<build>
   ....
    <plugins>
        <plugin>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.7.0</version>
            <configuration>
                <release>10</release>
            </configuration>
        </plugin>

        <plugin>
            <artifactId>maven-dependency-plugin</artifactId>
            <executions>
                <execution>
                    <id>getClasspathFilenames</id>
                    <goals>
                        <goal>properties</goal>
                    </goals>
                </execution>
                <execution>
                    <id>copy-lambdatest-agent</id>
                    <phase>generate-test-resources</phase>
                    <goals>
                        <goal>copy</goal>
                    </goals>
                    <configuration>
                        <artifactItems>
                            <artifactItem>
                                <groupId>io.github.lambdatest</groupId>
                                <artifactId>lambdatest-selenium-java-sdk</artifactId>
                                <version>1.0.1</version>
                                <destFileName>lambdatest-agent.jar</destFileName>
                                <outputDirectory>${project.build.directory}/agents</outputDirectory>
                            </artifactItem>
                        </artifactItems>
                    </configuration>
                </execution>
            </executions>
        </plugin>

        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.19.1</version>
            <executions>
                <execution>
                    <goals>
                        <goal>test</goal>
                    </goals>
                </execution>
            </executions>
            <configuration>
                <suiteXmlFiles>
                    <suiteXmlFile>${suite}</suiteXmlFile>
                </suiteXmlFiles>
                <argLine>
                    -javaagent:${project.build.directory}/agents/lambdatest-agent.jar
                </argLine>
            </configuration>
        </plugin>
    </plugins>   
</build>

```

:::note
Check the latest version of [testmuai-selenium-java-sdk](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-selenium-java-sdk) and update the version accordingly.
:::

### Step 2: Create Configuration File

Create a `lambdatest.yml` file in your project root directory with your TestMu AI credentials and desired capabilities:

```yaml
# TestMu AI Configuration File for Tests
# This file is loaded automatically by the TestMu AI SDK

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

# TestMu AI features
video: true
network: false
console: true
visual: false

# Advanced capabilities (optional)
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

- `LT_USERNAME` - Your TestMu AI username
- `LT_ACCESS_KEY` - Your TestMu AI access key
  :::

### Step 3: Add TestNG Listener

Add the TestMu AI status listener to your TestNG configuration:

**Using testng.xml**

```xml
<suite name="LambdaTest Suite">
    <listeners>
         <listener class-name="com.lambdatest.selenium.testng.TestNgTestListener"/>
    </listeners>

    <test name="My Tests">
        <classes>
            <class name="com.example.MyTest"/>
        </classes>
    </test>
</suite>
```

That's it! Your tests are now configured to run on TestMu AI. No code changes required in your existing test methods.

## Thread Safety

---

The SDK handles parallel execution without additional synchronization.

The TestMu AI Selenium Java SDK is **thread-safe by default**, making it suitable for parallel test execution. You can run multiple tests concurrently without worrying about thread synchronization issues.

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

See how your existing tests work without any modifications.

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

        // SDK automatically injects TestMu AI capabilities from lambdatest.yml
        driver = new RemoteWebDriver(
            new URL("https://hub.lambdatest.com/wd/hub"),
            options
        );
    }

    @Test
    public void testExample() {
        driver.get("https://www.lambdatest.com");
        String title = driver.getTitle();
        System.out.println("Page title: " + title);
        assert title.contains("LambdaTest");
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

Resolve common issues when running tests with the SDK.

### Common Issues

**Issue: Driver not connecting to TestMu AI**

- Verify credentials in `lambdatest.yml` or environment variables
- Check your TestMu AI account has active minutes

**Issue: Tests not marked as passed/failed**

- Ensure TestNG listener is configured correctly
- Verify driver session ID is available
- Check network connectivity to TestMu AI

**Issue: Configuration not loading**

- Ensure `lambdatest.yml` is in the project root directory
- Verify YAML syntax is correct

## Additional Resources

---

Find related guides and tools for further configuration.

- [TestMu AI Selenium Grid Documentation](/support/docs/getting-started-with-testmu-automation)
- [Capabilities Generator](https://www.testmuai.com/capabilities-generator/)
- [GitHub Repository](https://github.com/Lambdatest/lambdatest-java-selenium-sdk)
- [TestMu AI Support](https://www.testmuai.com/support)

## Changelog

---

Track SDK version history and feature additions.

### Version 1.0.1 (Latest)

**New Features:**

- **Enhanced Thread Safety:** Improved driver instance management for thread-safe parallel test execution
- **Tunnel Support**: Added support for TestMu AI Tunnel configuration in `lambdatest.yml`
  - Configure tunnel settings directly in YAML configuration
  - Automatic tunnel lifecycle management
- **Enhanced Configuration**: Improved YAML configuration parsing and validation
- **Better Error Handling**: More descriptive error messages for configuration issues

**Improvements:**

- Optimized SDK initialization and configuration loading
- Improved compatibility with TestNG execution

### Version 1.0.0 (Initial Release)

**Core Features:**

- Zero code changes approach for running Selenium tests on TestMu AI
- YAML-based configuration (`lambdatest.yml`)
- Two TestNG listener integration for automatic test status updates
- Integration with TestMu AI Selenium Grid

**Supported Features:**

- Video recording
- Network logging
- Console logging
- Visual debugging
- Test metadata (build, project, name)

---

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> TestMu AI Selenium Java SDK </span>
    </li>
  </ul>
</nav>
