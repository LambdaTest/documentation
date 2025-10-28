---
id: extended-debugging-options
title: Extended Debugging Options for Selenium Testing
hide_title: false
sidebar_label: Extended Debugging Options
description: Learn how to use Extended Debugging Options on LambdaTest to intercept network requests, throttle CPU and network conditions, capture console logs, and download HAR files for advanced test debugging and performance analysis.
keywords:
- extended debugging options
- selenium debugging
- intercept network requests
- throttle cpu selenium
- throttle network selenium
- har file download
- selenium console logs
url: https://www.lambdatest.com/support/docs/extended-debugging-options/
site_name: LambdaTest
slug: extended-debugging-options/
---

LambdaTest's Extended Debugging Options provide powerful capabilities to debug and optimize your Selenium tests by giving you granular control over network behavior, system performance, and diagnostic data collection. These advanced debugging features allow you to intercept and modify network requests, simulate various CPU and network conditions, capture detailed console logs, and download comprehensive network analysis files—all within your test automation workflow.

With Extended Debugging Options, you can replicate real-world scenarios such as slow networks, resource-constrained devices, API failures, and connectivity issues, ensuring your application delivers a robust user experience across diverse conditions and environments.

## How can Extended Debugging Options help you?

Extended Debugging Options on LambdaTest provide comprehensive capabilities for advanced testing and debugging scenarios:

- **Network Request Control**: Intercept and modify outgoing requests to test API failures, redirects, and mock responses without setting up complex backend infrastructure.
- **Performance Testing**: Simulate various CPU and network throttling conditions to understand how your application performs on low-end devices or poor network connections.
- **Enhanced Debugging**: Capture console logs in real-time to identify JavaScript errors and warnings during test execution.
- **Network Analysis**: Download HAR (HTTP Archive) files to perform detailed analysis of network traffic, load times, and resource optimization.
- **Realistic Test Scenarios**: Create test conditions that mirror real-world user experiences, including offline modes, slow connections, and server errors.

## Available Extended Debugging Methods

LambdaTest supports the following extended debugging methods:

| Method | Description |
|--------|-------------|
| `lt:intercept` | Intercept and modify network requests |
| `lt:throttleCPU` | Simulate different CPU performance levels |
| `lt:throttleNetwork` | Configure and simulate network conditions |
| `lt:log` | Capture JavaScript console logs |
| `lt:downloadHAR` | Download HTTP Archive files for analysis |

---

## 1. Intercept Network Requests

The `lt:intercept` method allows you to intercept and modify network requests, enabling you to test how your application behaves under different network conditions, mock API responses, and simulate error scenarios.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | String | Yes | URL pattern to intercept. Wildcards (*) are supported. |
| `redirect` | String | No | Redirect the request to a different URL. |
| `response` | Object | No | Mock the response with custom headers and body. |
| `error` | String | No | Inject an error response. Supported values: `Failed`, `Aborted`, `TimedOut`, `AccessDenied`, etc. |

### Method 1: Redirect Requests

Redirect outgoing requests to a different URL using `lt:intercept` with the `redirect` parameter.

**Example Request:**

```json
{
    "command": "lt:intercept",
    "parameters": {
        "url": "https://example.com/api/*",
        "redirect": "https://mock-server.com/api/v1"
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "Requests to 'https://example.com/api/*' will be redirected to 'https://mock-server.com/api/v1'"
}
```

### Method 2: Mock Response

Mock a custom response for the intercepted URL using `lt:intercept` with the `response` parameter.

**Example Request:**

```json
{
    "command": "lt:intercept",
    "parameters": {
        "url": "https://example.com/api/todos",
        "response": {
            "headers": {
                "Content-Type": "application/json"
            },
            "body": [{
                "title": "Test ToDo",
                "completed": false
            }]
        }
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "Mock response configured for 'https://example.com/api/todos'"
}
```

### Method 3: Simulate Error Response

Inject error responses to test how your application handles failures using `lt:intercept` with the `error` parameter.

**Example Request:**

```json
{
    "command": "lt:intercept",
    "parameters": {
        "url": "https://example.com/images/*",
        "error": "Failed"
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "Error 'Failed' configured for 'https://example.com/images/*'"
}
```

:::info Supported Error Types
Common error types include: `Failed`, `Aborted`, `TimedOut`, `AccessDenied`, `ConnectionClosed`, `ConnectionReset`, `InternetDisconnected`, `NameNotResolved`, and more.
:::

---

## 2. Throttle CPU Performance

The `lt:throttleCPU` method simulates lower or higher CPU usage on the testing device, allowing you to measure your application's performance under resource constraints.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rate` | Integer | Yes | Rate of slowdown. Example: `2` equals 2x slowdown, `4` equals 4x slowdown. |

### How to Use

**Example Request:**

```json
{
    "command": "lt:throttleCPU",
    "parameters": {
        "rate": 3
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "CPU throttled to 3x slowdown."
}
```

:::info CPU Throttling Rates
- A rate of `1` means no throttling (normal CPU performance)
- A rate of `2` means 2x slower than normal
- A rate of `4` means 4x slower than normal
- Higher values simulate lower-end devices or heavy CPU load scenarios
:::

---

## 3. Throttle Network Conditions

The `lt:throttleNetwork` method enables you to simulate various network conditions including slower speeds, high latency, and offline modes. This helps ensure your application performs well across different connection types.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `condition` | String/Object | Yes | Predefined network profile (e.g., `GPRS`, `3G`, `4G`) or custom configuration object. |
| `download` | Integer | No | Download speed in kb/s (used with custom configuration). |
| `upload` | Integer | No | Upload speed in kb/s (used with custom configuration). |
| `latency` | Integer | No | Round Trip Time (RTT) in milliseconds (used with custom configuration). |

### Custom Network Configuration

**Example Request:**

```json
{
    "command": "lt:throttleNetwork",
    "parameters": {
        "condition": {
            "download": 1000,
            "upload": 500,
            "latency": 40
        }
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "Network conditions set with 1000 kb/s download, 500 kb/s upload, and 40 ms latency."
}
```

### Predefined Network Profiles

LambdaTest provides predefined network profiles for quick testing across common connection types:

| Profile | Download Speed | Upload Speed | Latency (ms) |
|---------|----------------|--------------|--------------|
| `offline` | 0 kb/s | 0 kb/s | 0 |
| `GPRS` | 50 kb/s | 20 kb/s | 500 |
| `Regular 2G` | 250 kb/s | 50 kb/s | 300 |
| `Good 2G` | 450 kb/s | 150 kb/s | 150 |
| `Regular 3G` | 750 kb/s | 250 kb/s | 100 |
| `Good 3G` | 1 Mb/s | 750 kb/s | 40 |
| `Regular 4G` | 4 Mb/s | 3 Mb/s | 20 |
| `DSL` | 2 Mb/s | 1 Mb/s | 5 |
| `WiFi` | 30 Mb/s | 15 Mb/s | 2 |
| `online` | No Restrictions | No Restrictions | No Restrictions |

**Example with Predefined Profile:**

```json
{
    "command": "lt:throttleNetwork",
    "parameters": {
        "condition": "Regular 3G"
    }
}
```

---

## 4. Capture Console Logs

The `lt:log` method captures JavaScript console logs from the browser session, helping you identify errors, warnings, and debug information during test execution.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | String | Yes | Log type to capture. Supported values: `console`, `error`, etc. |

### How to Use

**Example Request:**

```json
{
    "command": "lt:log",
    "parameters": {
        "type": "console"
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "Console logs captured successfully."
}
```

:::info Log Types
- `console`: Captures all console logs including log, info, warn, and error messages
- `error`: Captures only error messages for focused debugging
:::

---

## 5. Download HAR File

The `lt:downloadHAR` method downloads network activity data in HAR (HTTP Archive) format, enabling detailed analysis of network performance, resource loading times, and HTTP transactions.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | String | Yes | Unique job identifier for the test session. |
| `output_file` | String | Yes | Filename to save the HAR file. |

### How to Use

**Example Request:**

```json
{
    "command": "lt:downloadHAR",
    "parameters": {
        "job_id": "123456",
        "output_file": "network.har"
    }
}
```

**Example Response:**

```json
{
    "status": "success",
    "message": "HAR file downloaded as 'network.har'."
}
```

:::info HAR File Analysis
HAR files can be analyzed using tools like:
- Chrome DevTools (Network tab → right-click → "Save all as HAR")
- Online HAR analyzers
- Performance monitoring tools

These files contain detailed information about request/response headers, timing data, cookies, and more.
:::

---

## Best Practices

When using Extended Debugging Options on LambdaTest, consider the following best practices:

- **Use Wildcards Wisely**: When intercepting requests, use specific URL patterns to avoid unintended interceptions.
- **Test Incrementally**: Start with mild throttling conditions and gradually increase constraints to identify performance breaking points.
- **Combine Methods**: Use multiple methods together (e.g., network throttling + CPU throttling) to simulate realistic low-end device scenarios.
- **Capture Logs Early**: Enable console log capturing at the start of your test to ensure all debug information is collected.
- **Analyze HAR Files**: Download HAR files for failed tests to identify network-related issues and performance bottlenecks.

By leveraging these Extended Debugging Options, you can create comprehensive test scenarios that validate your application's behavior under diverse real-world conditions, ensuring a robust and reliable user experience.