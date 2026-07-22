# SmartWait Functionality for Selenium Automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

With TestMu AI's SmartWait feature, you can increase the efficiency and accuracy of automated test execution. Before performing any action on a webpage element, SmartWait conducts a series of actionability checks. It holds off on performing an action until all relevant checks pass. If the checks do not pass within a set timeframe, it returns the appropriate Selenium error message.

You can use this feature to reduce the amount of code dedicated to explicit/implicit waits in your test suite, making it easier to read and maintain.

> **Note:** The **SmartWait** functionality is fully supported on HyperExecute as well, allowing you to leverage intelligent wait handling during parallel and distributed test executions.

## How SmartWait Can Help You

SmartWait improves your test automation workflow in multiple ways.

- **Increased Accuracy**: SmartWait ensures that actions are only executed on elements that are ready and actionable, increasing the accuracy of your test results.
- **Code Optimization**: Your test scripts will have fewer explicit and implicit wait commands, making them easier to read and maintain.
- **Enhanced Efficiency**: Your test suite becomes more efficient by eliminating unnecessary waits and performing actions as soon as the elements are ready.
- **Intelligent Error Handling**: When actionability checks fail, SmartWait returns the relevant Selenium error, helping you identify and resolve issues more quickly.

## How to Use SmartWait Functionality

Follow the below steps to configure SmartWait for your tests.

1. **Set SmartWait Time Limit:** Specify the maximum amount of time you want your test script to wait until an element becomes actionable.

```javascript
LT:Options {
...
"smartWait": 10 // It accepts integer values as second
"smartWaitRetryDelay": 1
...
}
```

- Min value of `smartWait` is 5 seconds and max is 120 seconds, default being 1 seconds.
- The capability `smartWaitRetryDelay` to define the time interval of retries. If not provided, default interval of 1 second is considered.
- Min value of `smartWaitRetryDelay` is 1 second and max is 4 seconds, default being 1 second.

2. **Execute Test Suite:** Run your test suite as usual. SmartWait automatically performs actionability checks before each action on a webpage element.

3. **View Test Results:** Review your results after execution. SmartWait returns the relevant Selenium error message if any actionability checks failed within the set timeframe.

TestMu AI's SmartWait feature enhances automated testing by intelligently managing wait times and ensuring actions execute at the most opportune time.
