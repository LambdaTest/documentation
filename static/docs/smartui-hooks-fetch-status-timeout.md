# Auto-Wait and Retry for Screenshot Status

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The `smartui.fetchScreenshotStatus` hook now accepts an optional **`timeout`** option. With a timeout set, SmartUI **polls for the comparison result on the server side** and returns as soon as it is ready, instead of failing immediately when the screenshot is still processing.

A screenshot goes through capture, upload, and comparison before its status exists. If your script calls `fetchScreenshotStatus` right after `smartui.takeScreenshot`, the result is often not ready yet and the call returns a `404`. Until now, the only way around this was a hand-written sleep-and-retry loop in every test, tuned by trial and error and different for every framework. The `timeout` option builds that wait into the hook itself: one argument replaces the custom loop, the call returns as soon as the result exists, and slow builds with large captures or many uploads no longer need their own polling code.

## How it works

| | |
|---|---|
| **Option** | `timeout` |
| **Type** | integer, seconds, optional |
| **Poll interval** | 5 seconds, fixed |
| **Maximum timeout** | 300 seconds |
| **Default (absent or `0`)** | Single lookup, same behavior as before |
| **Retry condition** | Retries only while the lookup returns `404` (result not ready yet). A `200` and real errors (`400`, `5xx`) return immediately |
| **On expiry** | Returns `404` with an enriched message that includes the number of attempts and the total seconds waited |

The retry loop runs inside SmartUI, so your script makes a single hook call and blocks until the status is available or the timeout expires.

## Usage

Pass a config object with the `screenshotName` and the `timeout` in seconds.

### Selenium




```javascript
const result = await driver.executeScript("smartui.fetchScreenshotStatus", {
screenshotName: "checkout-page",
timeout: 120
});
console.log("status:", JSON.stringify(result, null, 2));
```




```python
result = driver.execute_script("smartui.fetchScreenshotStatus", {
"screenshotName": "checkout-page",
"timeout": 120,
})
print("status:", result)
```




```java
import java.util.HashMap;
import java.util.Map;
import org.openqa.selenium.JavascriptExecutor;

Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "checkout-page");
config.put("timeout", 120);

Object result = ((JavascriptExecutor) driver)
.executeScript("smartui.fetchScreenshotStatus", config);
System.out.println(result);
```




### Playwright / Puppeteer

```javascript
const result = await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
action: "smartui.fetchScreenshotStatus",
arguments: {
screenshotName: "checkout-page",
timeout: 120
}
})}`);
console.log(result);
```

## Interaction with session `idleTimeout`

- **Selenium:** `idleTimeout` applies between commands, so it has no impact on the hook's `timeout`. The polling happens inside a single command.
- **Playwright / Puppeteer (CDP):** the connection deadline is the session `idleTimeout` (default 300 seconds). This is why the maximum `timeout` is capped at 300 seconds.

## Notes

- Without `timeout` (or with `timeout: 0`) the hook behaves exactly as before: one lookup, and a `404` if the result is not ready yet. Existing scripts are unaffected.
- Pick a `timeout` that covers your slowest snapshot. Large full-page captures and builds with many parallel uploads take longer to compare. `120` seconds is a reasonable starting point.
- Only the "not ready yet" case is retried. Genuine failures surface immediately, so a misspelled `screenshotName` or a server error does not silently burn the whole timeout.
- On expiry the enriched `404` message tells you how many attempts were made and how long the hook waited, which makes it easy to distinguish "needs a larger timeout" from "screenshot never happened."

## Related Docs

- [Selenium Visual Regression](/support/docs/selenium-visual-regression/)
- [Playwright Visual Regression](/support/docs/playwright-visual-regression/)
- [SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore](/support/docs/smartui-hooks-layout-fullpage-smartignore/)
- [Take a Screenshot of a Specific Element (SmartUI Hooks)](/support/docs/smartui-hooks-element-screenshot/)
