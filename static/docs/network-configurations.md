# How to Configure Network Logs on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Network configurations on TestMu AI capture and analyze HTTP/S traffic in real time on real devices during automation. Logs stored in HAR format record API calls, requests, responses, and load times, while content capture and domain filtering help reduce noise.

**Supported on:** Real devices

On TestMu AI, you can enable **network configurations** to capture and analyze this traffic in real time on real devices. With flexible options such as content capture and domain-based filtering, you can focus on the most relevant network interactions while reducing noise from unrelated requests. This helps ensure faster debugging, clearer insights, and more efficient test runs.

**Plus Plan Feature**
This feature is available exclusively with the **Real Device Plus Automation Cloud** Plan.

To unlock this feature, purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your TestMu AI support representative, reach out to our **[24×7 Chat Support]**, or email us at **support@testmuai.com**.




## Use Cases


- **Debug API calls** by viewing HTTP/S request and response data directly from real device sessions.
- **Verify backend integration** by checking if calls are made to the correct endpoints.
- **Filter noise** by including/excluding specific hosts.
- **Reproduce production issues** that depend on specific network conditions or API behaviors.





## Capabilities

| Capability                  | Type                   | Default | Description                                                  |
|-----------------------------|------------------------|---------|--------------------------------------------------------------|
| **network**                 | Boolean                | true   | Enables network logs for the session.                        |



## Network Configuration Settings
To enable the following you would need to pass them under `networkLogsOptions` Capability.

| Network Configurations Capability | Type                   | Default | Description                                                  |
|-----------------------------|------------------------|---------|--------------------------------------------------------------|
| **captureContent**          | Boolean                | true    | Captures the response body in network logs.                  |
| **excludeHosts** | List                 | None    | Hosts to exclude from network logs.                          |
| **includeHosts** | List                 | None    | Only capture network logs for these hosts; all others will be excluded. |



- `networkLogsExcludeHosts` and `networkLogsIncludeHosts` are mutually exclusive. If both are set, **IncludeHosts** takes precedence.



## Managing Certificate Pinning in Network Logs

Some mobile apps add an extra layer of security by using **certificate pinning**, a process where the app is hard-coded to trust only a specific certificate or public key for certain hosts. This means that whenever the app communicates with those hosts, it **verifies the server’s certificate** against its pinned copy before allowing the connection.

When you enable **network logging** on TestMu AI, traffic passes through a **secure proxy** so requests and responses can be captured. For **certificate-pinned hosts**, this interception may cause the connection to fail because the certificate no longer matches exactly. To avoid such issues, you can exclude pinned hosts from being proxied by adding them to the `networkLogsExcludeHosts` capability. This ensures your tests run smoothly without breaking **secure connections**.


## Network Configurations in Automation Test

### Step 1: Upload Your App to TestMu AI

Before enabling network configurations, ensure your app is uploaded to TestMu AI.

1. **Uploading Your App** - Follow the detailed steps in our [Upload Your Application](/support/docs/application-setup-via-api/) guide.
2. Once uploaded, **note the App ID** returned by the API or dashboard.
3. Use this **App ID** in the `"app"` capability in your automation script.



### Step 2: Add Desired Capabilities




{`desired_caps = {
    "deviceName": "Galaxy S20",
    "platformName": "Android",
    "platformVersion": "15",
    "isRealMobile": True,
    "app": "YOUR_APP_ID",
    "build": "Sample Build",
    "name": "Sample Test",
    "network": True,
    #highlight-next-line
    "networkLogsOptions": {
        "captureContent": False,
        "excludeHosts": ["lambdatest"],
        "includeHosts": ["youtube", "facebook"]
    },
}`}





{`desired_caps = {
    "deviceName": "iPhone 16",
    "platformName": "ios",
    "platformVersion": "18",
    "isRealMobile": True,
    "app": "YOUR_APP_ID",
    "build": "Sample Build",
    "name": "Sample Test",
    "network": True,
    #highlight-next-line
    "networkLogsOptions": {
        "captureContent": False,
        "excludeHosts": ["lambdatest"],
        "includeHosts": ["youtube", "facebook"]
    },
}`}








### Step 3: Run Your Test
Execute your test script using your preferred automation framework with the above capabilities.



## Best Practices

- **Exclude analytics/tracking domains** to reduce log noise.
- For **certificate-pinned apps**, always add pinned hosts to `networkLogsExcludeHosts`.
- Use **networkLogsIncludeHosts** for focused debugging when investigating specific endpoints.
- Keep `captureContent: false` if you only need headers for performance gains.




- **Certificate-pinned apps** may fail if pinned hosts are not excluded.
- Certain HTTPS connections (e.g., using custom certificate pinning) cannot be intercepted even with MITM.
