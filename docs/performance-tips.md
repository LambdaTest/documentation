---
id: performance-tips
title: How To Maximize Test Execution Performance on Automation Platform | TestMu AI
hide_title: true
sidebar_label: Performance Tips
description: This page will help you tom maximize test execution in a minimum time period.
keywords:
  - performance tips
  - virtual browser online
  - maximise performance
  - cross browser testing app
  - developer tools
  - sequential tests
  - automation tests
url: https://www.testmuai.com/support/docs/performance-tips/
site_name: LambdaTest
slug: performance-tips/
canonical: https://www.testmuai.com/support/docs/performance-tips/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Performance Tips
* * *

## Maximizing Test Execution In A Minimum Time Period

Please note, if you are running your tests on a [cloud based Selenium Grid](https://www.lambdatest.com/selenium-automation) then it may take a little longer time to complete an execution when compared with Local WebDriver execution. When running one to one sequential automation test threads, with <BrandName /> cloud grid it may take around 1.3-1.5 times longer to complete the test depending upon the network latency.

To serve you better we are running multiple complementary services in our machines that perform various functions like [take screenshots](https://www.lambdatest.com/full-page-screen-capture) after every command given, capture complete test execution video logs, capture network logs, console logs etc. This takes a little bit processing power which when combined with network latency leads to higher overall test execution times.

You can certainly decrease this execution time by turning off the complimentary services though desired capabilities object. To decrease your test execution times you can set the below capabilities as "false" if these are set to "true":

1. **Visual**: Enable step by step screenshot
2. **Network**: Enable network logs
3. **Console**: Capture console logs

**Note**: Console, network and visual capabilities are "false" by default.

Here's an example of such a capability object

```javascript
DesiredCapabilities capabilities = new DesiredCapabilities();
	capabilities.setCapability("build", "your build name");
	capabilities.setCapability("name", "your test name");
	capabilities.setCapability("platform", "Windows 10");
	capabilities.setCapability("browserName", "Chrome");
	capabilities.setCapability("version","79.0");
	capabilities.setCapability("console",false);
	capabilities.setCapability("network",false);
	capabilities.setCapability("visual",false);
```


If you are facing any latency or slowness even after setting the above capabilities as "false", you can reach out to us on our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**in-app chat support**</span> or by emailing to [automationsupport@testmuai.com](mailto:automationsupport@testmuai.com) with a screenshot of trace-route command that would really help us checking the reason behind latency.

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
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/getting-started-with-testmu-automation/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Maximizing Test Execution Performance</span>
    </li>
  </ul>
</nav>
