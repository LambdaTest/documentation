---
id: debugging-options
title: Debugging Options for Automation Testing on TestMu AI
hide_title: true
sidebar_label: Set Debugging Options
description: Use logging options like command, visual, video, network, and console logs to debug failed automation tests.
keywords:
  - selenium debugging options testmu ai
  - debug failed automation tests
  - selenium command logs debugging
  - selenium visual video network logs
  - automation test troubleshooting logs
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/debugging-options/
site_name: TestMu AI
slug: debugging-options/
canonical: https://www.testmuai.com/support/docs/debugging-options/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Debugging Options for Automation Testing
---

TestMu AI supports different automation capabilities for enabling debugging log options. This documentation explains how to use various logging options for your failed tests and fix them quickly.

## Command Logs
---
Command logs record every step executed in your test for troubleshooting failed steps.

Command logs are a record of your test. Use them to identify all the steps executed in the test and troubleshoot errors for failed steps. Command logs are accessible from the TestMu AI Automation dashboard and via the REST API.

## Visual Logs
---
Visual logs capture screenshots at every Selenium command to help identify rendering issues.

Visual logs capture screenshots of web pages automatically generated at every Selenium command executed by your code. Visual logs help debug the exact step and how the page rendered when a failure occurred. They also help identify layout or design-related issues with your web pages on different browsers.

## Video Logs
---
Video logs record the entire test run on the remote machine for playback.

The TestMu AI Selenium Grid records every test run exactly as executed on the remote machine. This feature is useful when a browser test fails so that you can see the entire test in action. Access these videos from the TestMu AI Automation dashboard for each session.

You can also navigate the video via command logs to view the step behavior at the time of command execution for the failed command.

## Selenium Logs
---
Selenium logs capture information about every Selenium command and browser preferences.

Selenium logs capture information about every Selenium command in your test script, along with browser preferences. These logs provide insight into any errors that occurred during the execution of your tests.

They contain details about Selenium internal logs and downstream and upstream commands that Grid received.

## Appium Logs
---
Appium logs provide a detailed record of your mobile test session for troubleshooting.

The TestMu AI Appium server generates Appium logs, which contain a detailed record of your test session for mobile tests. If a test fails, the logs aid in troubleshooting any errors.

Appium logs are similar to Selenium logs but have a different log structure standard to the Appium framework.

## Console Logs
---
Console logs capture browser console output at various test steps for JavaScript and DOM debugging.

Console logs capture browser console output at various steps of the tests to troubleshoot JavaScript/DOM issues. You can retrieve console logs using both the TestMu AI Automation dashboard and REST API.

## Network Logs
---
Network logs capture browser performance data like traffic, latency, and HTTP requests in HAR format.

Network Logs capture the browser's performance data, such as network traffic, latency, HTTP requests, and responses in the HAR format. Access network logs using the TestMu AI Automation dashboard and the REST API.

## Terminal Logs
---
Upload terminal logs from the client machine to view stack traces for specific test sessions.

Using the Session API, you can upload the terminal logs (logs printed on the client machine) for specific tests/sessions. This helps you view the stack traces in case of failure and pinpoint actual issues in the code.

## Telemetry Logs
---
Use Selenium 4 and OpenTelemetry to trace requests and event logs for each session.

Selenium 4 and OpenTelemetry support lets you view the tracing of requests and event logs for each request, which helps you troubleshoot sessions from the Selenium internals perspective. It collects all the events inside the Selenium services to triage the issue with Selenium servers.

For more details, visit [Debugging in Selenium using Telemetry Logs](/support/docs/selenium-telemetry-logs/)


## Enhanced Analytics
---
Use analytics widgets to track test health, trends, browser distribution, and error insights.

### Test Case Health Snapshot 

The Test Case Health Snapshot widget allows you to quickly analyze the flakiness of the tests executed on the platform. Track the performance of the tests by viewing the count of tests that are consistently passing or failing.

### Test Summary

The Test Summary widget lets you track the total tests run on the platform grouped by their status and includes information about errors like test case errors, idle timeouts, queue timeouts, and Lambda errors.

### Test Browser

The Test Browser widget displays the overall distribution of tests on various browsers on the platform. Click on a particular browser to see the specific versions where the tests ran.

### Test OS

The Test OS widget displays the overall distribution of tests on various operating systems. Click on a particular OS to see the specific versions where the tests ran.

### Test Trends

The Test Trends widget allows you to analyze the trends of tests executed on the platform over a period of time. Compare the current trends with previous trends by clicking on the legends at the bottom of the graph.

### Test Device Coverage

The Test Device Coverage widget is an App Automation-specific widget that displays the overall distribution of tests on various mobile devices on the platform. Click on a particular mobile device to see the specific models where the tests ran.

### Test Status Ratio

The Test Status Ratio widget provides information about the quality of your current test cases based on the status marked on the platform. Filter the information by clicking on the relevant legends at the bottom of the graph.

### Error Insights

The Error Stats widget allows you to quickly analyze the tests categorized by their status on the TestMu AI platform, including Test Case Errors, Idle Timeout, Queue Timeout, and Lambda Error. Filter the graph by clicking on the relevant legends at the bottom.

### Concurrency Trends

The Concurrency Trends widget allows you to view the tests kept in the queue and the tests in a running state. Filter the information by clicking on the relevant legends at the bottom of the graph.

## HyperExecute
---
View detailed analytics for your HyperExecute test runs.

For details about HyperExecute Analytics, refer to our tutorial - [HyperExecute Analytics Modules](/support/docs/analytics-modules-hyperexecute/).

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
        Debugging Options for Automation Testing on TestMu AI
      </span>
    </li>
  </ul>
</nav>
