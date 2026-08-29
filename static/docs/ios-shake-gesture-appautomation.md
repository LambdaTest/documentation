# How to Trigger iOS Shake Gesture on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI supports simulating a shake gesture on iOS real devices and simulators during Appium automation sessions using the lambda_executor hook. Apps often bind shake to switching between build environments, opening debug menus, surfacing feedback prompts, or undoing the action.

**Supported on:** Real &amp; Virtual devices

By the end of this document, you will be able to:
- Trigger a shake gesture on iOS Real Devices and Simulators
- Validate the response returned by the `lambda_executor` hook
- Use the same hook inside Web Automation tests running on iOS Real Devices


This feature also works in **Web Automation tests on Real Devices**. The same `lambda_executor` script can be used inside your Appium-based web automation session.




## Supported Platforms

| Platform           | OS Version          |
|--------------------|---------------------|
| iOS Real Device    | iOS 16 and above    |
| iOS Simulator (Virtual) | All OS   |



## Support for Automation on Mobile Devices

To trigger a shake gesture, use the `lambda_executor` Appium hook with the `gestures` action. No additional capability is required.



## Supported Arguments

| Argument          | Type      | Description                                                                 |
| ----------------- | --------- | --------------------------------------------------------------------------- |
| `action`          | String    | Must be `"gestures"` (lowercase).                                           |
| `arguments.shake` | Boolean   | Set to `true` to trigger the shake. Set to `false` to skip without erroring.|

> 💡 **Note:** The hook **can be invoked multiple times** in the same session.



### Appium Hook Example




```python
response = driver.execute_script(
'lambda_executor: {"action": "gestures", "arguments": {"shake": true}}'
)
# response → "shake gesture triggered successfully"
```




```java
String response = (String) ((JavascriptExecutor) driver).executeScript(
"lambda_executor: {\"action\": \"gestures\", \"arguments\": {\"shake\": true}}"
);
// response → "shake gesture triggered successfully"
```






## Response References

| Scenario                   | Response                                          |
|----------------------------|---------------------------------------------------|
| `shake: true`| `shake gesture triggered successfully`            |
| `shake: false`             | `shake gesture skipped (shake=false)`             |
| Wrong type for `shake`     | `argument 'shake' must be a boolean, got string`  |
| `shake` argument missing   | `missing required argument: shake`                |
| Wrong action casing        | `Please send a valid action for LambdaHook`       |
| Android session            | `shake gesture is supported on iOS only`          |
