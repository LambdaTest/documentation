# Mask Your Sensitive Data in Selenium Tests

## Overview

Use the **maskCommands** capability to hide sensitive data sent to or retrieved from remote browsers at TestMu AI.

When used, this capability hides all the keystrokes and other required values, and replaces them with **'*'** in test session logs (both text and raw).

## Syntax

Add the maskCommands capability to your desired capabilities configuration.

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
