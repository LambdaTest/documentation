---
id: java-with-playwright
title: Run your Java automation scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: Java
description: Run your Java and JUnit automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - java playwright
  - java automation testing
  - playwright java
  - playwright java testing guide
  - java playwright framework
  - junit playwright

url: https://www.testmuai.com/support/docs/java-with-playwright/
site_name: TestMu AI
slug: java-with-playwright/
canonical: https://www.testmuai.com/support/docs/java-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


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
          "name": "Java with Playwright",
          "item": `${BRAND_URL}/support/docs/java-with-playwright/`
        }]
      })
    }}
></script>

# Java with Playwright: Running Your First Test
* * *

Run Playwright tests written in Java, either with plain Playwright or with JUnit, across real browsers and operating systems on the <BrandName /> cloud platform. The setup is the same for both: you connect Playwright to the grid over a CDP WebSocket. This guide covers the shared steps once, then gives you a per-framework setup in the tabs below.

## Prerequisites
***

1. A <BrandName /> **Username** and **Access Key**. Get them from your <BrandName /> Profile. Don't have an account? <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>Sign up for free</a>.
2. [JDK](https://www.oracle.com/java/technologies/downloads/) 8 or later and [Apache Maven](https://maven.apache.org/) installed. The sample projects are Maven projects, so Maven resolves the dependencies when you build.
3. Clone the sample repository (each framework lives in its own subdirectory):

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
```

## Set your credentials
***

Set your Username and Access Key as environment variables. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## Set Up and Run in Your Framework
***

Both frameworks build a `capabilities` object (browser, version, platform, and your `LT:Options`) and connect Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. What differs is how the test is structured. Pick your framework:

<Tabs className="docs__val" groupId="java-framework" queryString="framework">

<TabItem value="java" label="Vanilla Java" default>

Plain Playwright with a `main()` method and no test runner.

1. Go to the sample directory:

```bash
cd playwright-java
```

2. The test lives in `PlaywrightTestSingle.java`. It builds capabilities from your env vars, connects to the grid, runs a search, and reports status:

```java title="PlaywrightTestSingle.java"
package com.lambdatest;

import com.google.gson.JsonObject;
import com.microsoft.playwright.*;

import java.net.URLEncoder;

public class PlaywrightTestSingle {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            JsonObject capabilities = new JsonObject();
            JsonObject ltOptions = new JsonObject();

            String user = System.getenv("LT_USERNAME");
            String accessKey = System.getenv("LT_ACCESS_KEY");

            capabilities.addProperty("browsername", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
            capabilities.addProperty("browserVersion", "latest");
            ltOptions.addProperty("platform", "Windows 10");
            ltOptions.addProperty("name", "Playwright Test");
            ltOptions.addProperty("build", "Playwright Testing in Java");
            ltOptions.addProperty("user", user);
            ltOptions.addProperty("accessKey", accessKey);
            capabilities.add("LT:Options", ltOptions);

            BrowserType chromium = playwright.chromium();
            String caps = URLEncoder.encode(capabilities.toString(), "utf-8");
            String cdpUrl = "wss://cdp.lambdatest.com/playwright?capabilities=" + capabilities;
            Browser browser = chromium.connect(cdpUrl);
            Page page = browser.newPage();
            try {
                page.navigate("https://www.duckduckgo.com");
                Locator locator = page.locator("#search_form_input_homepage");
                locator.click();
                page.fill("#search_form_input_homepage", "LambdaTest");
                page.keyboard().press("Enter");
                String title = page.title();

                if (title.equals("LambdaTest at DuckDuckGo")) {
                    // Use the following code to mark the test status.
                    setTestStatus("passed", "Title matched", page);
                } else {
                    setTestStatus("failed", "Title not matched", page);
                }

            } catch (Exception err) {
                setTestStatus("failed", err.getMessage(), page);
                err.printStackTrace();
            }
            browser.close();
        } catch (Exception err) {
            err.printStackTrace();
        }
    }

    public static void setTestStatus(String status, String remark, Page page) {
        Object result;
        result = page.evaluate("_ => {}", "lambdatest_action: { \"action\": \"setTestStatus\", \"arguments\": { \"status\": \"" + status + "\", \"remark\": \"" + remark + "\"}}");
    }
}
```

3. Run the test:

```bash
mvn -Dexec.mainClass="com.lambdatest.PlaywrightTestSingle" -Dexec.classpathScope=test test-compile exec:java
```

</TabItem>

<TabItem value="junit" label="JUnit 5">

JUnit runs the same connection through a `@DataProvider`, so a single test runs across multiple browser configurations (here Chrome and Microsoft Edge).

1. Go to the sample directory:

```bash
cd playwright-java-junit
```

2. `LTCapability.java` supplies the parameterized capabilities:

```java title="LTCapability.java"
import com.google.gson.JsonObject;
import com.tngtech.JUnit.junit.dataprovider.DataProvider;

public class LTCapability {
  @DataProvider
  public static Object[] getDefaultTestCapability() {
    JsonObject capabilities1 = new JsonObject();
    JsonObject ltOptions1 = new JsonObject();

    String user = System.getenv("LT_USERNAME");
    String accessKey = System.getenv("LT_ACCESS_KEY");

    capabilities1.addProperty("browserName", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    capabilities1.addProperty("browserVersion", "latest");
    ltOptions1.addProperty("platform", "Windows 10");
    ltOptions1.addProperty("name", "Playwright Test");
    ltOptions1.addProperty("build", "Playwright Testing using Junit");
    ltOptions1.addProperty("user", user);
    ltOptions1.addProperty("accessKey", accessKey);
    capabilities1.add("LT:Options", ltOptions1);


    JsonObject capabilities2 = new JsonObject();
    JsonObject ltOptions2 = new JsonObject();
    capabilities2.addProperty("browserName", "MicrosoftEdge"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    capabilities2.addProperty("browserVersion", "latest");
    ltOptions2.addProperty("platform", "Windows 10");
    ltOptions2.addProperty("name", "Playwright Test");
    ltOptions2.addProperty("build", "Playwright Testing using Junit");
    ltOptions2.addProperty("user", user);
    ltOptions2.addProperty("accessKey", accessKey);
    capabilities2.add("LT:Options", ltOptions2);
    return new Object[]{
      capabilities1,capabilities2
    };
  }
}
```

3. Run the test:

```bash
mvn clean test
```

</TabItem>

</Tabs>

## View your test results
***

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright Java test results.
