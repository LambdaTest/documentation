---
id: network-data-masking
title: Network Data Masking
hide_title: true
sidebar_label: Network Data Masking
description: TestMu AI provides network data masking capability to protect sensitive information during automation testing sessions.
keywords:
- Network logs
- Network Data Masking
- custom headers bypass firewalls
- masking of sensitive data
url: https://www.testmuai.com/support/docs/network-data-masking/
site_name: TestMu AI
slug: network-data-masking/
canonical: https://www.testmu.ai/support/docs/network-data-masking/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Network Data Masking 

<BrandName /> provides network data masking capability to protect sensitive information during automation testing sessions. This feature automatically masks sensitive data in network logs on <BrandName /> platform, ensuring that confidential information like passwords, tokens, and authentication keys are not exposed in test logs and network traffic reports.

By the end of this document, you will be able to:

- Enable automatic masking of sensitive data in network logs
- Protect confidential information

## What is Network Data Masking?

Network data masking automatically identifies and masks sensitive information in HTTP network logs on <BrandName /> traffic during test execution. When enabled, the system scans for predefined sensitive keywords in network requests and responses on <BrandName />, replacing their values with masked placeholders to prevent data exposure.


## Sensitive Keywords Detected

The system automatically masks values for keys containing the following keywords:

| Keyword | Description |
|---------|-------------|
| key | API keys, encryption keys |
| password | User passwords, system passwords |
| token | Authentication tokens, access tokens |
| auth | Authorization headers, auth credentials |
| email | Email addresses in headers/cookies |
| cipher | Cipher keys, encrypted data |
| secret | Secret keys, client secrets |
| nonce | Cryptographic nonces |
| salt | Password salts, hash salts |

## Configuration

### Java Implementation

```java
// Java code for configuring Network Masking in tests on LambdaTest
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("network.mask", "true");
// Add other capabilities as needed
```

### Alternative Language Examples

**Python:**

```python
capabilities = {
    "network.mask": "true"
    # Add other capabilities as needed
}
```

**Node.js:**

```javascript
const capabilities = {
    "network.mask": "true"
    // Add other capabilities as needed
};
```

## Supported Values

| Value | Description |
|-------|-------------|
| true | Enables network data masking for sensitive information |
| false (default) | Disables network data masking (default behavior) |

## Masking Coverage

### Request Headers

- Authorization headers containing tokens or keys
- Custom headers with sensitive authentication data
- API key headers

### Response Headers

- Set-Cookie headers with sensitive session data
- Authentication response headers
- Custom security headers

### Request/Response Cookies

- Session cookies containing tokens
- Authentication cookies
- Security cookies with sensitive identifiers

## Example Scenarios

### Before Masking (network.mask: false)

```
Request Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
X-API-Key: sk_live_abcd1234567890
User-Email: user@example.com

Response Cookies:
auth_token=abc123xyz789; session_key=def456uvw012
```

### After Masking (network.mask: true)

```
Request Headers:
Authorization: Bearer ********
X-API-Key: ********
User-Email: ********

Response Cookies:
auth_token=********; session_key=********
```

## Use Cases

- **Security Compliance**: Ensure sensitive data doesn't appear in test logs for compliance with security standards and regulations.
- **Team Collaboration**: Share test results and network logs safely without exposing production credentials or sensitive user data.
- **CI/CD Pipeline Security**: Protect sensitive information in automated test reports that may be stored or shared across development teams.
- **Third-party Integration Testing**: Mask API keys and authentication tokens when testing integrations with external services.
- **Debug and Troubleshooting**: Review network traffic for debugging while keeping sensitive authentication data protected.
