---
id: java-with-playwright
title: Run your Java automation scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: Java
description: Run your Java automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - java playwright
  - java automation testing
  - playwright java
  - playwright java testing guide
  - java playwright framework

url: https://www.lambdatest.com/support/docs/java-with-playwright/
site_name: LambdaTest
slug: java-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Java with Playwright",
          "item": "https://www.lambdatest.com/support/docs/java-with-playwright/"
        }]
      })
    }}
></script>

# Java with Playwright: Running Your First Test
* * *

Learn how to use Playwright with Java to automate web application testing across 50+ real browsers and operating systems on LambdaTest cloud platform.

## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright Java from the LambdaTest GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-java" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-java
```

2. Install the npm dependencies.

```
npm install
```

3. A LambdaTest Username and Access key. You can get it from your LambdaTest Profile section. Don't have an account, [sign up for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. To run Playwright tests, set your LambdaTest Username and Access key in the Environment Variables.


## Run your Playwright tests with Java
---

Navigate to the `PlaywrightTestSingle.java` file.

```java
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

Pass the below command in the terminal to run the test.

```java
mvn -Dexec.mainClass="com.lambdatest.PlaywrightTestSingle" -Dexec.classpathScope=test test-compile exec:java
```

## View your test results
---

Go to the [LambdaTest Web Automation Dashboard](https://automation.lambdatest.com/build) to see your Playwright Java test results.




