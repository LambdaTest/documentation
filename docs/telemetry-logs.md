---
id: telemetry-logs
title: Getting Started With Selenium Debugging Using Telemetry Logs
sidebar_label: View Telemetry Logs
hide_title: true
description: Debug Selenium tests using telemetry logs with OpenTelemetry and Jaeger on TestMu AI.
keywords:
  - selenium telemetry logs debugging
  - opentelemetry selenium 4 tracing
  - jaeger selenium distributed tracing
  - enable telemetry logs testmu ai
  - debug selenium requests telemetry
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-telemetry-logs/
site_name: TestMu AI
slug: selenium-telemetry-logs/
canonical: https://www.testmuai.com/support/docs/selenium-telemetry-logs/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Debugging in Selenium Using Telemetry Logs
---

TestMu AI Automation allows you to perform parallel test execution through a standalone mode that connects to the Selenium server, where each test can have multiple requests. 

To trace each request, you can use Selenium 4 and OpenTelemetry integration to achieve greater visibility into request tracing and event logs. Tracing enables the monitoring of a request's life cycle and stores essential information about the request's critical operations. You can use this information to identify issues and optimize the performance of your web applications.

Managing several requests, tracing logs, and troubleshooting request failures in a distributed environment can be challenging. In such instances, you can integrate Telemetry logs with Jaeger - a distributed tracing system - to quickly visualize and query traces. 

<div className="ytframe"> 
<div className="youtube" data-embed="uOGxauw0K4w">
    <div className="play-button"></div>
</div>
</div>

## Supported Operating Systems
---
Telemetry logs are available on these operating systems.

* Windows 11 
* Windows 10 
* macOS Ventura 
* macOS Catalina 
* macOS Mojave


## Enabling Telemetry Logs
---
Pass the `seTelemetryLogs` and `selenium_version` capabilities to activate telemetry logging.

:::info Note
TestMu AI Automation supports Telemetry logs on Selenium versions above 4.2.0.
:::

By default, Telemetry logs are disabled for Selenium automation on TestMu AI. To enable them in your test sessions:

1. Pass the `seTelemetryLogs` capability in your test scripts and set it to true.

```bash
caps.setCapability("seTelemetryLogs", true);
```

2. Pass the `selenium_version` capability in your test scripts and set it to `4.2.0`.

```bash
caps.setCapability("selenium_version", "4.2.0");
```

## Visualizing Telemetry Logs Using Jaeger
---
Integrate Jaeger to visualize request traces from your test sessions.

Jaeger is an open-source, end-to-end distributed tracing system to monitor and troubleshoot distributed systems. Using Jaeger, you can visualize the request traces of your tests run on TestMu AI.

Here are the steps to integrate Jaeger with your test suites:

1. Download Jaeger from its [official website](https://www.jaegertracing.io/download/#binaries).

2. Extract the compressed (*.tar.gz* or *.zip*) Jaeger file to the directory where your test script resides. You will now have several Jaeger files like `jaeger-query`, `jaeger-collector`, etc., in your test script directory.

3. Download Telemetry logs of your test session from the **Telemetry Logs** tab of your TestMu AI Automation Dashboard.

<img loading="lazy" src={require('../assets/images/telemetry-logs/download.png').default} alt="cmd" className="doc_img"/>


4. Start the Jaeger UI to visualize the Telemetry logs by running the below command.

```bash
jaeger-all-in-one
```

5. Visit `http://localhost:16686/search` and click the **Upload** tab to upload the downloaded Telemetry logs from the TestMu AI Automation Dashboard.

<img loading="lazy" src={require('../assets/images/telemetry-logs/upload.png').default} alt="cmd" className="doc_img"/>

After uploading, you can view the request traces in the Jaeger UI for your TestMu AI test sessions.

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
        Getting Started With Selenium Debugging Using Telemetry Logs
      </span>
    </li>
  </ul>
</nav>
