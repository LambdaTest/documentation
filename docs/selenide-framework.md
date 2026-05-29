---
id: selenide-frameworks
title: Selenium With Selenide
sidebar_label: Selenide
description: Run Selenide tests on TestMu AI cloud grid with parallel execution across 3000+ browsers.
keywords:
  - selenide selenium cloud testing
  - run selenide tests on selenium grid
  - selenide parallel test execution
  - selenide automation setup
  - selenide cross browser testing
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/
site_name: TestMu AI
slug: selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/
canonical: https://www.testmuai.com/support/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Selenium With Selenide",
          "item": `${BRAND_URL}/support/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/`
        }]
      })
    }}
></script>

Run Selenide tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/selenide-testng-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).
3. Install the **Java development environment** (Java 11 recommended).
4. Install **Maven**. Download it from [the official website](https://maven.apache.org/) or install it on **Linux/MacOS** using [**Homebrew**](https://brew.sh/).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/selenide-testng-sample
cd selenide-testng-sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

<Tabs className="docs__val">
<TabItem value="bash" label="macOS / Linux" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
<TabItem value="powershell" label="Windows" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>
</TabItem>
</Tabs>

:::info Note

You can also mention your TestMu AI credentials in each of the config files located at `selenide-testng-sample/src/test/resources/conf/`.

:::

## Step 3: Configure Your Test Capabilities
---

Define the browser, version, and OS for your test run.

```java
ChromeOptions browserOptions = new ChromeOptions();
        browserOptions.setPlatformName("Windows 10");
        browserOptions.setBrowserVersion("latest");

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("build", "LambdaTestSampleApp");
        ltOptions.put("name", "LambdaTestJavaSample");
        ltOptions.put("network", true); // To enable network logs
        ltOptions.put("visual", true); // To enable step by step screenshot
        ltOptions.put("video", true); // To enable video recording
        ltOptions.put("console", true); // To capture console logs
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);
```

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

Below is the sample Selenide test used in this project:

```java title="Selenide To Do"
package com.lambdatest;

import java.io.FileReader;
import java.net.URL;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.sleep;
import static com.codeborne.selenide.Selenide.title;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.codeborne.selenide.WebDriverRunner;

public class LambdaTestSetup {
    public RemoteWebDriver driver;
    public String status="failed";

    public static String username;
    public static String accessKey;
    public static String sessionId;

    @BeforeMethod(alwaysRun = true)
    @Parameters(value = { "config", "environment" })
    public void setUp(String config_file, String environment) throws Exception {
        JSONParser parser = new JSONParser();
        JSONObject config = (JSONObject) parser.parse(new FileReader("src/test/resources/conf/" + config_file));
        JSONObject envs = (JSONObject) config.get("environments");

        ChromeOptions browserOptions = new ChromeOptions();
        HashMap<String, Object> ltOptions = new HashMap<String, Object>();

        Map<String, String> envCapabilities = (Map<String, String>) envs.get(environment);
        Iterator it = envCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            String key = pair.getKey().toString();
            if (key.equals("platformName")) {
                browserOptions.setPlatformName(pair.getValue().toString());
            } else if (key.equals("browserVersion")) {
                browserOptions.setBrowserVersion(pair.getValue().toString());
            } else {
                ltOptions.put(key, pair.getValue().toString());
            }
        }

        Map<String, String> commonCapabilities = (Map<String, String>) config.get("capabilities");
        it = commonCapabilities.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            if (!ltOptions.containsKey(pair.getKey().toString())) {
                ltOptions.put(pair.getKey().toString(),
                        (pair.getValue().toString().equalsIgnoreCase("true")
                                || (pair.getValue().toString().equalsIgnoreCase("false"))
                                        ? Boolean.parseBoolean(pair.getValue().toString())
                                        : pair.getValue().toString()));
            }
        }
        ltOptions.put("name", this.getClass().getName());
        ltOptions.put("w3c", true);
        browserOptions.setCapability("LT:Options", ltOptions);

        username = System.getenv("LT_USERNAME");
        if (username == null) {
            username = (String) config.get("user");
        }

        accessKey = System.getenv("LT_ACCESS_KEY");
        if (accessKey == null) {
            accessKey = (String) config.get("key");
        }

        driver = new RemoteWebDriver(
                new URL("https://" + username + ":" + accessKey + "@" + config.get("server") + "/wd/hub"), browserOptions);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        sessionId = driver.getSessionId().toString();

        WebDriverRunner.setWebDriver(driver);
    }

    @Test
    public void test() throws Exception {

        open("http://www.google.co.uk");

        $(By.name("q")).setValue("LambdaTest").pressEnter();

        sleep(2000);

        Assert.assertEquals(title(), "LambdaTest - Google Search");

        status = "passed";
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() throws Exception {
        driver.executeScript("lambda-status="+status);
        driver.quit();
    }

}
```

## Step 4: Run the Test
---

Trigger the test from your terminal.

First, install the mandatory Selenium dependencies for Maven:

```bash
mvn compile
```

Then execute the tests:

<Tabs className="docs__val">
<TabItem value="single" label="Single Test" default>

```bash
mvn test -P single
```

</TabItem>
<TabItem value="parallel" label="Parallel Tests">

```bash
mvn test -P parallel
```

</TabItem>
</Tabs>

For parallel execution, the sample project includes a `parallel.testng.xml` that runs the test across multiple browsers simultaneously:

```xml title="parallel.testng.xml"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="Parallel" thread-count="3" parallel="tests">
	<test name="SingleTestChrome">
    <parameter name="config" value="parallel.conf.json"/>
    <parameter name="environment" value="chrome"/>
    <classes>
      <class name="com.lambdatest.SingleTest"/>
    </classes>
	</test>

	<test name="SingleTestFirefox">
    <parameter name="config" value="parallel.conf.json"/>
    <parameter name="environment" value="firefox"/>
    <classes>
      <class name="com.lambdatest.SingleTest"/>
    </classes>
	</test>

	<test name="SingleTestSafari">
    <parameter name="config" value="parallel.conf.json"/>
    <parameter name="environment" value="safari"/>
    <classes>
      <class name="com.lambdatest.SingleTest"/>
    </classes>
	</test>
</suite>
```

```json title="parallel.config.json"
{
  "server": "hub.lambdatest.com",
  "user": "YOUR_USERNAME",
  "key": "YOUR_ACCESS_KEY",

  "capabilities": {
    "build": "Java Selenide Parallel"
  },

  "environments": {
    "chrome": {
      "platformName": "Windows 10",
      "browserName": "chrome",
      "browserVersion": "latest"
    },
    "firefox": {
      "platformName": "Windows 10",
      "browserName": "firefox",
      "browserVersion": "latest"
    },
    "safari": {
      "platformName": "macOS Mojave",
      "browserName": "safari",
      "browserVersion": "latest"
    }
  }
}
```

## Step 5: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run Selenide Tests Using Agent Skills
---

Use AI coding assistants to generate and run Selenide tests with the TestMu AI Agent Skill.

The [selenide-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenide-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenide-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenide-skill .cursor/skills/
```

:::tip
Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

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
      <span className="breadcrumbs__link"> Selenium With Selenide </span>
    </li>
  </ul>
</nav>
