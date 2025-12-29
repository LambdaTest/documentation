---
id: extended-debugging-options
title: Extended Debugging Options for Selenium Testing
hide_title: false
sidebar_label: Extended Debugging Options
description: Learn how to use Extended Debugging Options on TestMu AI to intercept network requests, throttle CPU and network conditions, and download HAR files for advanced test debugging and performance analysis.
keywords:
- extended debugging options
- selenium debugging
- intercept network requests
- throttle cpu selenium
- throttle network selenium
- har file download
url: https://www.testmu.ai/support/docs/extended-debugging-options
site_name: LambdaTest
slug: extended-debugging-options
---

LambdaTest's Extended Debugging Options provide powerful capabilities to debug and optimize your Selenium tests by giving you granular control over network behavior and system performance. These advanced debugging features allow you to intercept and modify network requests, simulate various CPU and network conditions, and download comprehensive network analysis files—all within your test automation workflow.

With Extended Debugging Options, you can replicate real-world scenarios such as slow networks, resource-constrained devices, API failures, and connectivity issues, ensuring your application delivers a robust user experience across diverse conditions and environments.

## How can Extended Debugging Options help you?

Extended Debugging Options on LambdaTest provide comprehensive capabilities for advanced testing and debugging scenarios:

- **Network Request Control**: Intercept and modify outgoing requests to test API failures, redirects, and mock responses without setting up complex backend infrastructure.
- **Performance Testing**: Simulate various CPU and network throttling conditions to understand how your application performs on low-end devices or poor network connections.
- **Network Analysis**: Download HAR (HTTP Archive) files to perform detailed analysis of network traffic, load times, and resource optimization.
- **Realistic Test Scenarios**: Create test conditions that mirror real-world user experiences, including offline modes, slow connections, and server errors.

## Available Extended Debugging Methods

LambdaTest supports the following extended debugging methods:

| Method | Description |
|--------|-------------|
| `lt:intercept:redirect` | Redirect network requests to different URLs |
| `lt:intercept:response` | Mock responses for intercepted requests |
| `lt:intercept:error` | Simulate error responses for requests |
| `lt:throttle:cpu` | Simulate different CPU performance levels |
| `lambda-throttle-network` | Configure and simulate network conditions |
| `lt:downloadHAR` | Download HTTP Archive files for analysis |

---

## 1. Intercept Network Requests

LambdaTest provides three specialized methods to intercept and modify network requests, enabling you to test how your application behaves under different network conditions, mock API responses, and simulate error scenarios.

### Method 1: Redirect Requests (`lt:intercept:redirect`)

Redirect outgoing requests to a different URL using the `lt:intercept:redirect` command.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | String | Yes | URL pattern to intercept. |
| `redirectUrl` | String | Yes | Target URL to redirect the request to. |

#### Example Usage

**Python:**
```python
driver.execute_script("lt:intercept:redirect", {
    "url": "https://www.google.com",
    "redirectUrl": "https://www.bing.com"
})
driver.get("https://www.google.com")
```

**Node.js:**
```javascript
await driver.executeScript("lt:intercept:redirect", {
    url: "https://www.google.com",
    redirectUrl: "https://www.bing.com"
});
await driver.get("https://www.google.com");
```

**Response:**
```json
{
    "status": "success",
    "message": "Requests to 'https://www.google.com' will be redirected to 'https://www.bing.com'"
}
```

---

### Method 2: Mock Response (`lt:intercept:response`)

Mock a custom response for the intercepted URL using the `lt:intercept:response` command.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | String | Yes | URL pattern to intercept. |
| `response` | Object | Yes | Response object containing status, headers, and body. |
| `response.status` | Integer | No | HTTP status code (default: 200). |
| `response.headers` | Object | No | Custom response headers as key-value pairs. |
| `response.body` | String | No | Response body content (use JSON string for JSON responses). |

#### Example Usage

**Python:**
```python
driver.execute_script("lt:intercept:response", {
    "url": "https://www.amazon.com",
    "response": {
        "status": 200,
        "headers": {
            "Content-Type": "application/json",
            "keyheader": "valueheader"
        },
        "body": "{\"keybody\":\"valuebody\"}"
    }
})
driver.get("https://www.amazon.com")
```

**Node.js:**
```javascript
await driver.executeScript("lt:intercept:response", {
    url: "https://jsonplaceholder.typicode.com/todos/1",
    response: {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 999,
            title: "Custom mocked response",
            completed: true
        })
    }
});
await driver.get("https://jsonplaceholder.typicode.com/todos/1");
```

**Response:**
```json
{
    "status": "success",
    "message": "Mock response configured for the specified URL"
}
```

---

### Method 3: Simulate Error Response (`lt:intercept:error`)

Inject error responses to test how your application handles failures using the `lt:intercept:error` command.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | String | Yes | URL pattern to intercept. |
| `error` | String | Yes | Error type to simulate. See supported error types below. |

#### Example Usage

**Python:**
```python
driver.execute_script("lt:intercept:error", {
    "url": "https://www.lambdatest.com",
    "error": "TimedOut"
})
driver.get("https://www.lambdatest.com")
```

**Node.js:**
```javascript
await driver.executeScript("lt:intercept:error", {
    url: "https://example.com/images/*",
    error: "Failed"
});
await driver.get("https://example.com/images/photo.jpg");
```

**Response:**
```json
{
    "status": "success",
    "message": "Error 'TimedOut' configured for the specified URL"
}
```

#### Supported Error Types

| Error Type | Description |
|------------|-------------|
| `Failed` | Generic network failure |
| `Aborted` | Request was aborted |
| `TimedOut` | Request timed out |
| `AccessDenied` | Access to resource denied |
| `ConnectionClosed` | Connection closed unexpectedly |
| `ConnectionReset` | Connection reset by peer |
| `ConnectionRefused` | Connection refused by server |
| `ConnectionAborted` | Connection aborted |
| `ConnectionFailed` | Connection failed to establish |
| `NameNotResolved` | DNS name resolution failed |
| `InternetDisconnected` | Internet connection lost |
| `AddressUnreachable` | Network address unreachable |

---

## 2. Throttle CPU Performance

The `lt:throttle:cpu` method simulates lower or higher CPU usage on the testing device, allowing you to measure your application's performance under resource constraints.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rate` | Integer | Yes | Rate of slowdown. Example: `2` equals 2x slowdown, `4` equals 4x slowdown. |

### Example Usage

**Python:**
```python
driver.execute_script("lt:throttle:cpu", {"rate": 4})
driver.get("https://lambdatest.com")
```

**Node.js:**
```javascript
await driver.executeScript("lt:throttle:cpu", { rate: 4 });
await driver.get("https://www.wikipedia.org");
```

**Response:**
```json
{
    "status": "success",
    "message": "CPU throttled to 4x slowdown."
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

The `lambda-throttle-network` method enables you to simulate various network conditions including slower speeds, high latency, and offline modes. This helps ensure your application performs well across different connection types.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `download` | Integer | Conditional | Download speed in kb/s (required for custom configuration). |
| `upload` | Integer | Conditional | Upload speed in kb/s (required for custom configuration). |
| `latency` | Integer | Conditional | Round Trip Time (RTT) in milliseconds (required for custom configuration). |

Alternatively, you can pass a predefined network profile name as a string (e.g., `"Regular 3G"`, `"Offline"`).

### Custom Network Configuration

**Python:**
```python
driver.execute_script("lambda-throttle-network", {
    "download": 1000,
    "upload": 750,
    "latency": 20
})
driver.get("https://lambdatest.com")
```

**Node.js:**
```javascript
await driver.executeScript("lambda-throttle-network", {
    download: 1000,
    upload: 500,
    latency: 40
});
await driver.get("https://www.cnn.com");
```

**Response:**
```json
{
    "status": "success",
    "message": "Network conditions set with 1000 kb/s download, 750 kb/s upload, and 20 ms latency."
}
```

### Using Predefined Network Profiles

**Python:**
```python
driver.execute_script("lambda-throttle-network", "Offline")
driver.get("https://lambdatest.com")
```

**Node.js:**
```javascript
await driver.executeScript("lambda-throttle-network", "Regular 3G");
await driver.get("https://www.nytimes.com");
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

---

---

## 4. Download HAR File

The `lt:downloadHAR` method downloads network activity data in HAR (HTTP Archive) format, enabling detailed analysis of network performance, resource loading times, and HTTP transactions.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | String | Yes | Unique job identifier for the test session. |
| `output_file` | String | Yes | Filename to save the HAR file. |

### Example Usage

**Python:**
```python
driver.execute_script("lt:downloadHAR", {
    "job_id": "123456",
    "output_file": "network.har"
})
```

**Node.js:**
```javascript
await driver.executeScript("lt:downloadHAR", {
    job_id: "123456",
    output_file: "network.har"
});
```

**Response:**
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
- **Analyze HAR Files**: Download HAR files for failed tests to identify network-related issues and performance bottlenecks.

By leveraging these Extended Debugging Options, you can create comprehensive test scenarios that validate your application's behavior under diverse real-world conditions, ensuring a robust and reliable user experience.
