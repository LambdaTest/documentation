# How to Mask Sensitive Data in Selenium on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use the **maskCommands** capability to hide sensitive data sent to or retrieved from remote browsers at TestMu AI.

When used, this capability hides all the keystrokes and other required values, and replaces them with **'*'** in test session logs (both text and raw).

## Syntax


Add the maskCommands capability to your capabilities configuration. It sits alongside the other [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can set for a test session.

**Syntax (Java)**:

`capabilities.setCapability("lambdaMaskCommands", {""});`

## Supported Values


Use the following comma-separated values to specify what data to mask.

| Value | Description |
|-------|-------------|
| `setValues`	| Hide/Redact all the text sent via sendKeys command. |
| `setCookies` | Hide/Redact all the cookies set by the addCookie command.|
| `getCookies` | Hide/Redact all the cookie values obtained using the getCookies and getCookieNamed command.|

## Language Examples


The following examples show how to configure maskCommands in each supported language.

| Language | Example |
|-------|-------------|
| Java	|`capabilities.setCapability("lambdaMaskCommands", {"setValues", "setCookies, getCookies"});` |
| Node.js | `capabilities['lambdaMaskCommands'] = ["setValues", "setCookies", "getCookies"]`|
| C# | `capabilities.SetCapability("lambdaMaskCommands", {"setValues", "setCookies", "getCookies"});`|
| PHP	| `$capabilities["lambdaMaskCommands"] = array("setValues", "setCookies", "getCookies")`|
| Python | `capabilities["lambdaMaskCommands"] = ["setValues", "setCookies", "getCookies"]`|
| Ruby |`capabilities["lambdaMaskCommands"] = ["setValues", "setCookies", "getCookies"]`|

## Network Data Masking


While `maskCommands` hides values sent through commands like `sendKeys` and `addCookie`, you can also mask sensitive data at the network layer. This is especially useful when you set custom HTTP headers that carry authentication tokens or keys you do not want surfaced in logs. TestMu AI's network data masking capability automatically masks sensitive data in network logs on the TestMu AI platform, ensuring that confidential information like passwords, tokens, and authentication keys are not exposed in test logs and network traffic reports.

### How Network Data Masking Works


Network data masking automatically identifies and masks sensitive information in HTTP network logs on the TestMu AI platform during test execution.

When enabled, the system scans for predefined sensitive keywords in network requests and responses, replacing their values with masked placeholders to prevent data exposure.

### Sensitive Keywords Detected


The system automatically masks values for keys containing the following keywords.

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

### Configuration


Set the `network.mask` capability to `true` to enable network data masking.

#### Java Implementation


```java
// Java code for configuring Network Masking in tests on LambdaTest
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("network.mask", "true");
// Add other capabilities as needed
```

#### Alternative Language Examples


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

### Supported Values


The capability accepts the following values.

| Value | Description |
|-------|-------------|
| true | Enables network data masking for sensitive information |
| false (default) | Disables network data masking (default behavior) |

### Masking Coverage


Network data masking covers the following areas of HTTP traffic.

#### Request Headers


- Authorization headers containing tokens or keys
- Custom headers with sensitive authentication data
- API key headers

#### Response Headers


- Set-Cookie headers with sensitive session data
- Authentication response headers
- Custom security headers

#### Request/Response Cookies


- Session cookies containing tokens
- Authentication cookies
- Security cookies with sensitive identifiers

### Example Scenarios


The following examples show how network logs appear before and after masking.

#### Before Masking (network.mask: false)


```
Request Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
X-API-Key: sk_live_abcd1234567890
User-Email: user@example.com

Response Cookies:
auth_token=abc123xyz789; session_key=def456uvw012
```

#### After Masking (network.mask: true)


```
Request Headers:
Authorization: Bearer ********
X-API-Key: ********
User-Email: ********

Response Cookies:
auth_token=********; session_key=********
```

### Use Cases


Network data masking supports several testing and security scenarios.

- **Security Compliance**: Ensure sensitive data does not appear in test logs for compliance with security standards and regulations.
- **Team Collaboration**: Share test results and network logs safely without exposing production credentials or sensitive user data.
- **CI/CD Pipeline Security**: Protect sensitive information in automated test reports that may be stored or shared across development teams.
- **Third-party Integration Testing**: Mask API keys and authentication tokens when testing integrations with external services.
- **Debug and Troubleshooting**: Review network traffic for debugging while keeping sensitive authentication data protected. Combine masking with the other tools available to debug your Selenium tests for a safe, complete view of a failing session.

## Next Steps


Continue with these related guides:

- [Custom Headers](/support/docs/custom-headers/)
- [Debugging Options](/support/docs/debugging-options/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
