---
id: debugging-options
title: Debugging Options for Automation Testing on TestMu AI
hide_title: true
sidebar_label: Debugging Options
description: This documentation explains how to use various debugging logs options for your failed tests and fix them easily.
keywords:
  - debug log options
  - debugging options
  - debugging options lambdatest
  - debugging options automation testing
  - debugging options selenium testing
  - debugging options appium testing

url: https://www.lambdatest.com/support/docs/debugging-options/
site_name: LambdaTest
slug: debugging-options/
---

# Debugging Options for Automation Testing
---

LambdaTest platform supports different automation capabilities for enabling different debugging log options. This documentation explains how to use various logging options for your failed tests and fix them quickly and easily.

## Command Logs
---

Command logs are a comprehensive record of your test. They are used to identify all the steps executed in the test and troubleshoot errors for failed steps. Command logs are accessible from the LambdaTest Automation dashboard as well as via our REST API to access Command logs.

## Visual Logs
---

Visual logs capture screenshots of web pages automatically generated at every Selenium command executed by your code. Visual logs help debug the exact step and how the page was rendered when a failure occurs. They also help identify layout or design-related issues with your web pages on different browsers.

## Video Logs
---

The LambdaTest Selenium Grid records every test run exactly as executed on the remote machine. This feature is beneficial whenever a browser test fails so that you can see the entire test in action. You can access these videos from the LambdaTest Automation dashboard for each session.

You can also navigate the video via command logs to view the step behavior at the time of command execution for the failed command.

## Selenium Logs
---

Selenium logs capture information about every Selenium command in your test script, along with browser preferences. These logs provide insight into any errors that might have occurred during the execution of your tests.

It has details about Selenium internals logs and downstream and upstream commands that Grid has received.

## Appium Logs
---

The LambdaTest Appium server generates Appium logs, which contain a detailed record of your test session for Mobile Tests. If a test fails, the logs will aid in troubleshooting any errors.

It is similar to Selenium logs, though have a different log structure which is standard to the Appium framework

## Console Logs
---
Console logs capture browser console output at various steps of the Tests to troubleshoot JavaScript/DOM issues. You can retrieve console logs using both the LambdaTest Automation dashboard and REST API.

## Network Logs
---

Network Logs capture the browser’s performance data, such as network traffic, latency, HTTP requests, and responses in the HAR format. You can access network logs using the LambdaTest Automation dashboard and the REST API.

## Terminal Logs
---

Using the Session API, you can upload the terminal logs, i.e., logs printed on the client machine for specific tests/sessions. It helps to view the stack traces in case of failure and pinpoint actual issues in the code.

## Telemetry Logs
---

Selenium 4 and OpenTelemetry support lets you view the tracing of requests and event logs for each request, which helps you troubleshoot sessions, especially from the Selenium internals perspective. It collects all the events inside the Selenium services to triage the issue with Selenium servers.

For more details, visit [Debugging in Selenium using Telemetry Logs](/support/docs/selenium-telemetry-logs/)


## Enhanced Analytics
---

### Test Case Health Snapshot 

The Test Case Health Snapshot widget allows the user to quickly analyze the flakiness of the tests executed on the platform. The user can effortlessly track the performance of the tests by viewing the count of tests that are consistently passing or failing.

### Test Summary

The Test Summary widget lets the user track the total tests being run on the platform grouped by their status and includes information about the errors like Test case errors, idle timeouts, queue timeouts, and Lambda errors.

### Test Browser

The Test Browser widget displays the overall distribution of the tests on various browsers on the platform. The distribution can be further categorized by clicking on a particular browser. This shows the information about the specific versions of that browser where the tests are executed.

### Test OS

The Test OS widget displays the overall distribution of the tests on various Operating Systems. The distribution can be further categorized by clicking on a particular OS. This displays the information about the specific versions of that OS where the tests are executed.

### Test Trends

The Test Trends widget makes it very straightforward for the user to analyze the trends of the tests executed on the platforms over a period of time. The user can compare the current trends with the previous trends on the platform by clicking on the legends at the bottom of the graph.

### Test Device Coverage

The Test Device Coverage widget is an App Automation-specific widget that displays the overall distribution of the tests on various mobile devices on the platform. The distribution can be further categorized by clicking on a particular mobile device. This displays the information about the specific model of the mobile devices where the tests are executed.

### Test Status Ratio

The Test Status Ratio widget seamlessly provides information about the quality of the user's current test cases based on the status marked on the platform. The information can be filtered by clicking on the relevant legends at the bottom of the graph.

### Error Insights

The Error Stats widget allows the user to quickly analyze the tests categorized by their Status on the LambdaTest platform, including Test Case Errors, Idle Timeout, Queue Timeout, and Lambda Error. The user can even filter the graph by clicking on the relevant legends at the bottom.

### Concurrency Trends

The Concurrency Trends widget allows the user to know the tests kept in the queue and the tests put in a running state. The information can be filtered by clicking on the relevant legends at the bottom of the graph.

## HyperExecute
---

For details about HyperExecute Analytics, please refer to our tutorial - [HyperExecute Analytics Modules](/support/docs/analytics-modules-hyperexecute/).



