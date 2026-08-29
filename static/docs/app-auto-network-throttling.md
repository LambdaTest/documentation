# How to Throttle Network for Appium on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Network throttling on TestMu AI simulates 2G, 3G, LTE, and offline conditions during Appium tests, letting you validate how your mobile app behaves under varying upload and download speeds while the device keeps uninterrupted connectivity, replicating real-world usage across devices.

**Supported on:** Real &amp; Virtual devices

## Workflow
### Initialization

- **Capability:** Initiate a test session with predefined network profiles using the `networkProfile` capability. Example:
```python
caps = {
"network": True,
"networkProfile": "2g-gprs-good"  # Set the desired network profile
}
```


To utilize the **networkProfile** capability, ensure that you include `network: True` in the capabilities.


### During Test Execution

- **LambdaHook:** Dynamically alter the network profile within the test session using the following LambdaHook:
```python
driver.execute_script("updateNetworkProfile=3g-umts-good")
```

### Supported Network Profiles

| Profile Name             | Download Speed | Upload Speed | Latency |
|--------------------------|-----------------|--------------|---------|
| 2g-gprs-poor             | 20 Kbps         | 6 Kbps       | 1000 ms |
| 2g-gprs-good             | 50 Kbps         | 16 Kbps      | 500 ms  |
| 3g-umts-poor             | 200 Kbps        | 64 Kbps      | 400 ms  |
| 4g-lte-poor              | 1 Mbps          | 500 Kbps     | 200 ms  |
| 3g-umts-good             | 5 Mbps          | 2 Mbps       | 100 ms  |
| 4g-lte-good              | 15 Mbps         | 7 Mbps       | 70 ms   |
| 4g-lte-advanced-good     | 25 Mbps         | 12 Mbps      | 20 ms   |
| default                  | NA             | NA           | NA      |


### Custom Profiles

- **LambdaHook:** Define and implement custom network profiles with LambdaHook by specifying the maximum download speed (kbps), maximum upload speed (kbps), and latency (ms) for the custom condition, as illustrated in the example.
```python
driver.execute_script("customNetworkProfile: { \"downloadSpeed\": 500, \"uploadSpeed\" : 250, \"latency\": 100 }" )
```

### Default/Reset Network Configuration

- **LambdaHook:** Employ this webhook to seamlessly restore the device's network profile to its default state. Invocation of this LambdaHook removes any predefined or custom network settings, ensuring the device is reset to its original configuration.
```python
driver.execute_script("updateNetworkProfile=default")
```

### Offline Mode

- To initialize tests in **offline mode**, set the `networkProfile` capability to `offline` during session initiation:
```python
caps = {
"network": True,
"networkProfile": "offline"  # Set to offline mode
}
```

- **LambdaHook:** You can also switch to offline mode during the test execution with the following command:
```python
driver.execute_script("updateNetworkProfile=offline")
```


## Toggle Offline/Online Mode via API

- For Android and iOS devices, you can use the offline/online mode API within the running test session:

```bash
curl --location 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/<session-id>/update_network' \
--header 'Authorization: Basic <username:access_key>' \
--header 'Content-Type: application/json' \
--data '{"mode": "offline"}'
```


- **Network throttling** results may vary sometimes based on multiple factors including network conditions and device performance.

- **Wrong Capability Name or Value:** Providing an incorrect capability value results in a bad request error with a descriptive message.

- **LambdaHook Error:** If you pass any wrong value in LambdaHook, you will receive an error message.

- In offline mode, **live video** will not be available for the duration of the test session.


> In case you have any questions, feel free to share them with us.Our experts are available on **24/7 Customer chat support**. You can also drop us a mail at support@testmuai.com. Happy testing! 🙂
