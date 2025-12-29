---
id: selenium-set-browser-options
title: Setting Browser Options
hide_title: false
sidebar_label: Browser Options
description: This document leverages you to play around your browser options for setting up in the selenium
keywords:
  - testmu ai automation
  - selenium automation grid
  - selenium browser
  - chrome
  - firefox
  - edge
url: https://www.lambdatest.com/support/docs/selenium-set-browser-options/
site_name: LambdaTest
slug: selenium-set-browser-options/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Browser Configuration",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Set Browser Option",
          "item": "https://www.lambdatest.com/support/docs/selenium-set-browser-options/"
        }]
      })
    }}
></script>

Selenium lets you set browser arguments for Chromium based browsers. When selecting Chrome, Firefox, and Edge, you can set browser options using `ChromeOptions`, `EdgeOptions`, and `FirefoxOptions` capability as shown below.

<Tabs className="docs__val">

<TabItem value="chrome" label="Chrome" default>
  <div className="lambdatest__codeblock">
        ```java
            import org.openqa.selenium.WebDriver;
            import org.openqa.selenium.chrome.ChromeDriver;
            import org.openqa.selenium.chrome.ChromeOptions;

            public class ChromeTest {
                public static void main(String[] args) {
                    ChromeOptions options = new ChromeOptions();
                    // Set Chrome capabilities
                    options.addArguments("--headless");

                    WebDriver driver = new ChromeDriver(options);
                    driver.get("http://example.com");
                    // Your test code here
                    driver.quit();
                }
            }
        ```
    </div>
</TabItem>

<TabItem value="firefox" label="Firefox" default>
    <div className="lambdatest__codeblock">
        ```java
            import org.openqa.selenium.WebDriver;
            import org.openqa.selenium.firefox.FirefoxDriver;
            import org.openqa.selenium.firefox.FirefoxOptions;

            public class FirefoxTest {
                public static void main(String[] args) {
                    FirefoxOptions options = new FirefoxOptions();
                    // Set Firefox capabilities
                    options.addArguments("--headless");

                    WebDriver driver = new FirefoxDriver(options);
                    driver.get("http://example.com");
                    // Your test code here
                    driver.quit();
                }
            }
        ```
    </div>
</TabItem>

<TabItem value="edge" label="Edge" default>
    <div className="lambdatest__codeblock">
        ```java
            import org.openqa.selenium.WebDriver;
            import org.openqa.selenium.edge.EdgeDriver;
            import org.openqa.selenium.edge.EdgeOptions;

            public class EdgeTest {
                public static void main(String[] args) {
                    EdgeOptions options = new EdgeOptions();
                    // Set Edge capabilities
                    options.addArguments("--headless");

                    WebDriver driver = new EdgeDriver(options);
                    driver.get("http://example.com");
                    // Your test code here
                    driver.quit();
                }
            }
        ```
    </div>
</TabItem>

</Tabs>


## Desired Capability to Automate IE Mode in Microsoft Edge

LambdaTest's Automation allows you to automate IE Mode in Microsoft Edge on Windows 11. You can pass the below desired capability in your test script and execute your tests.

```java
InternetExplorerOptions browserOptions = new InternetExplorerOptions();
browserOptions.setPlatformName("Windows 11");
browserOptions.setBrowserVersion("11.0");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "Your LambdaTest Username");
ltOptions.put("accessKey", "Your LambdaTest Access Key");
ltOptions.put("project", "Untitled");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```
