# How to Map Custom DNS in Selenium on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The `customDnsMap` capability lets you define custom IP addresses for specific domains.

This is useful when you need to redirect domain requests to different IP addresses for testing purposes, without altering the global or browser-specific configurations.

The customDnsMap capability uses the following format:

```bash
"customDnsMap": {
"google.com": "<IP>",
"stackoverflow.com": "<IP>",
"<domain1>": "<IP1>",
"<domain2>": "<IP2>",
...
}
```

Here `` and `` are the domain names to be redirected, and `` and `` are the corresponding IP addresses. When a domain listed in the `customDnsMap` is accessed, it resolves to the specified IP address, overriding any existing DNS resolution for that domain.

## Use Cases


The customDnsMap capability serves a variety of testing purposes.

- **Domain Redirection for Testing:** Redirect a domain to a different IP address, such as a staging or development server, when testing a web application that needs to connect to a specific backend.

- **Local Development Testing:** Map a preferred domain to the local IP address to test application behavior when accessed via a domain name instead of localhost.

- **Simulating Server Failures:** Redirect a domain to an invalid or different IP address to test how an application responds to server failures.

- **Overriding Default DNS Resolutions:** When a default DNS resolution is set but a specific test scenario requires a different IP address, use customDnsMap to override the resolution for that particular test.

- **Load Balancer Testing:** Redirect traffic to a specific server to evaluate its performance and functionality in isolation.

The following example shows how to redirect traffic to a staging server for the domain `example.com`:

```bash
"customDnsMap": {
"example.com": "192.168.1.100"
}
```

With this configuration, whenever a user accesses `example.com`, the request redirects to `192.168.1.100`, which is the staging server.

## Benefits


The `customDnsMap` capability offers the following benefits.

- **Flexibility:** Easily and dynamically redirect traffic to different IP addresses without global configuration changes.

- **Control:** Gain full control over how domains are resolved, which is essential for testing and debugging. To shape the requests themselves, you can also set custom HTTP headers on the same test.

- **Efficiency:** Improve testing and development workflows by eliminating the need to switch between different environments manually.

## Conclusion


The `customDnsMap` capability improves the efficiency and flexibility of testing and development workflows on the TestMu AI platform. Use it to redirect domains, simulate server failures, and test against specific backend servers. For other environment options, see the full list of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) and how to route tests through a Selenium proxy.

## Next Steps


Continue with these related guides:

- [Custom Headers](/support/docs/custom-headers/)
- [Run Selenium Tests Behind the Proxy](/support/docs/selenium-tests-behind-proxy/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
