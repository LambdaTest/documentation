---
id: selenium-set-browser-options
title: Setting Browser Options
sidebar_label: Set Browser-Specific Options
description: Set browser options for Chrome, Firefox, and Edge in Selenium tests on TestMu AI.
keywords:
  - selenium set browser options
  - chrome options selenium configuration
  - firefox options selenium setup
  - edge options selenium testing
  - ie mode microsoft edge selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-set-browser-options/
site_name: TestMu AI
slug: selenium-set-browser-options/
canonical: https://www.testmuai.com/support/docs/selenium-set-browser-options/
---

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
          "name": "Browser Configuration",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Set Browser Options",
          "item": `${BRAND_URL}/support/docs/selenium-set-browser-options/`
        }]
      })
    }}
></script>

## Browser-Specific Options
---
Configure Chrome, Firefox, and Edge browser arguments using their respective Options classes.

Selenium lets you set browser arguments for Chromium-based browsers. When selecting Chrome, Firefox, and Edge, you can set browser options using `ChromeOptions`, `EdgeOptions`, and `FirefoxOptions` capability as shown below.

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


## Automate IE Mode in Microsoft Edge
---
Run IE Mode automation on Microsoft Edge for Windows 11 using the InternetExplorerOptions class.

TestMu AI's Automation allows you to automate IE Mode in Microsoft Edge on Windows 11. Pass the below desired capability in your test script and execute your tests.

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

:::tip
For a detailed guide on IE Mode testing, see [Test in IE Mode on Edge](/support/docs/ie-mode-on-edge/).
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
      <span className="breadcrumbs__link">
        Setting Browser Options
      </span>
    </li>
  </ul>
</nav>
