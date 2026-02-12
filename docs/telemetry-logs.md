---
id: telemetry-logs
title: Getting Started With Selenium Debugging Using Telemetry Logs
sidebar_label: Telemetry Logs
hide_title: true
description: In this documentation, learn how to debugging your Selenium tests using Telemetry logs.
keywords:
  - telemetry logs
  - debugging using telemetry logs
  - selenium telemetry logs

url: https://www.testmuai.com/support/docs/selenium-telemetry-logs/
site_name: TestMu AI
slug: selenium-telemetry-logs/
canonical: https://www.testmuai.com/support/docs/selenium-telemetry-logs/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Debugging in Selenium using Telemetry Logs
---

<BrandName /> Automation allows you to perform parallel test execution through a standalone mode that connects to the Selenium server, where each test can have multiple requests. 

To trace each request, you can leverage Selenium 4 and OpenTelemetry integration to achieve greater visibility into the tracing of requests and event logs for each request. Tracing enables the monitoring of a request's life cycle and stores essential information about the request's critical operations. You can use this information to identify issues and optimize the performance of your web applications.

However, managing several requests, tracing logs, and troubleshooting request failures in a distributed environment can be challenging. In such instances, you can integrate Telemetry logs with Jaeger - a distributed tracing system - to quickly visualize and query traces. 

<div className="ytframe"> 
<div className="youtube" data-embed="uOGxauw0K4w">
    <div className="play-button"></div>
</div>
</div>

## Supported Operating Systems
---

Following are the supported OS that supports Telemetry logs on <BrandName />.

* Windows 11 
* Windows 10 
* macOS Ventura 
* macOS Catalina 
* macOS Mojave


## Enabling Telemetry Logs
---

:::info Note
<BrandName /> Automation support Telemetry logs on the Selenium version above than 4.2.0.
:::

By default, Telemetry logs are disabled for Selenium automation on <BrandName />. To enable them in your test sessions:

1. Pass the `seTelemetryLogs` capability in your test scripts and set it as true.

```bash
caps.setCapability("seTelemetryLogs", true);
```

2. Pass the `selenium_version` capability in your test scripts and set it as `4.2.0`.

```bash
caps.setCapability("selenium_version", "4.2.0");
```

## Visualizing Telemetry Logs using Jaeger 
---

Jaeger is an open-source, end-to-end distributed tracing system to monitor and troubleshoot complex distributed systems. Using Jaeger, you can visualize the request traces of your tests run on <BrandName />.

Here are the steps to integrate Jaeger with your test suites:

1. Download Jaeger from its [official website](https://www.jaegertracing.io/download/#binaries).

2. Extract the compressed (*.tar.gz* or *.zip*) Jaeger file  to the directory where your test script resides.  You'll now have several Jaeger files like `jaeger-query`, `jaeger-collector`, etc, in your test script directory.

3. Download Telemetry logs of your test session from the **Telemetry Logs** tab of your <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/telemetry-logs/download.png').default} alt="cmd" className="doc_img"/>


4. Start the Jaeger UI to visualize the Telemetry logs by passing the below command.

```bash
jaeger-all-in-one
```

5. Visit `http://localhost:16686/search` and click the **Upload** tab to upload the downloaded Telemetry logs from the <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/telemetry-logs/upload.png').default} alt="cmd" className="doc_img"/>

Post that, you can view the request traces in the Jaeger UI for your <BrandName /> test sessions.
















