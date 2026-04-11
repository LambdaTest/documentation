---
id: performance-tips
title: Maximize Test Execution Performance on Automation Platform
sidebar_label: Speed Up Your Tests
description: Speed up Selenium test execution on the cloud grid by disabling optional logging capabilities.
keywords:
  - reduce selenium test execution time
  - disable visual network console logs
  - cloud grid performance optimization
  - selenium test speed improvement
  - desired capabilities performance
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/performance-tips/
site_name: TestMu AI
slug: performance-tips/
canonical: https://www.testmuai.com/support/docs/performance-tips/
---
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
          "name": "Performance Tips",
          "item": `${BRAND_URL}/support/docs/performance-tips/`
        }]
      })
    }}
></script>

# Performance Tips
* * *

Running Selenium tests on a cloud grid introduces network latency compared to local execution. These tips help you reduce total execution time on TestMu AI.

## Disable Unnecessary Logging
---
Turn off visual, network, and console logging to reduce per-command overhead.

TestMu AI runs complementary services that capture screenshots after every command, record video, and collect network and console logs. Each service adds processing time. If you do not need these logs, disable them through capabilities:

```java
ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("latest");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("build", "your build name");
ltOptions.put("name", "your test name");
ltOptions.put("console", false);  // Disable console logs
ltOptions.put("network", false);  // Disable network logs
ltOptions.put("visual", false);   // Disable step-by-step screenshots
browserOptions.setCapability("LT:Options", ltOptions);
```

:::note
Console, network, and visual capabilities are `false` by default. Only set them explicitly if a previous configuration enabled them.
:::

## Run Tests in Parallel
---
Execute multiple tests simultaneously to reduce total build time.

Sequential test execution multiplies wait time across every test. Use your framework's parallel execution feature (TestNG `parallel="methods"`, pytest-xdist, Mocha `--parallel`) and set the desired concurrency in your TestMu AI plan. This is the single most impactful change for reducing build duration.

## Use the Latest Browser Version
---
Set `browserVersion` to `latest` instead of pinning a specific version number.

Pinning old browser versions can cause delays if TestMu AI needs to spin up a less common environment. Using `latest` ensures your tests run on the most readily available browser instances:

```java
browserOptions.setBrowserVersion("latest");
```

## Set an Appropriate Idle Timeout
---
Configure `idleTimeout` to balance between premature timeouts and wasted session time.

The `idleTimeout` capability controls how long TestMu AI waits before closing an idle session. Setting it too high wastes concurrency slots. Setting it too low causes premature session termination during long page loads or waits.

```java
ltOptions.put("idleTimeout", 120); // seconds - adjust based on your longest expected wait
```

A value between 60 and 150 seconds works well for most test suites.

## Use a Smaller Resolution
---
Set a lower screen resolution if your tests do not require visual validation.

Higher resolutions increase rendering time. If you are not running visual or screenshot-based tests, use a standard resolution:

```java
ltOptions.put("resolution", "1024x768");
```

## Minimize Page Loads
---
Reduce the number of `driver.get()` calls to cut down on navigation overhead.

Each `driver.get()` call triggers a full page load over the network. Combine test steps that can share a page state, and avoid redundant navigations between steps.

## Use Explicit Waits Instead of Thread.sleep()
---
Replace fixed sleep calls with explicit waits to proceed as soon as the condition is met.

`Thread.sleep()` always waits the full duration, even if the element is ready in milliseconds. Explicit waits poll for the expected condition and continue immediately:

```java
// Avoid this
Thread.sleep(5000);

// Use this instead
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("element-id")));
```

## Close Sessions Properly
---
Always call `driver.quit()` to release the session and free up concurrency slots.

If a test exits without calling `driver.quit()`, the session stays open until the idle timeout expires. This wastes concurrency and slows down queued tests.

```java
@AfterMethod
public void tearDown() {
    if (driver != null) {
        driver.quit();
    }
}
```

## Troubleshoot Latency
---
Run a traceroute if performance remains slow after applying the above tips.

If you still experience latency after applying these optimizations, reach out to us on our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**in-app chat support**</span> or email [automationsupport@testmuai.com](mailto:automationsupport@testmuai.com). Include a screenshot of the traceroute output:

For Windows:
```
tracert hub.lambdatest.com
```
For Linux/Mac:
```
traceroute hub.lambdatest.com
```
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
        Performance Tips
      </span>
    </li>
  </ul>
</nav>
