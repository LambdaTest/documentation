# Filter by Custom Data

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Ability to sent any custom `key` and `value` pair to TestMu AI platform and then filter the test cases based on the custom data. This feature is available for `Web Automation` and `App Automation` coming soon.

## Prerequisites For Insights:

1. You should have an active TestMu AI account.
2. You should han active subscription plan with Web Automation.
3. You should have executed at least one test on the TestMu AI Web Automation platform.

## Capture Custom Data Filter for Insights in Web Automation &nbsp;

### Update your existing test capabilities

You can use the `customData` capability to send custom data to the TestMu AI platform. The custom data will be displayed in the `Builds Comparison Insights` module. The custom data will be displayed in the `Custom Data` Filter. You can filter the test cases based on the custom data.

```js
{
"capabilities": {
"browserName": "chrome",
"version": "latest",
"platform": "Windows 10",
// highlight-start
"customData": {
"key": "value"
}
// highlight-end
}
}

```

## How To Access Custom Filters?

Currently, the feature is in the  phase and will be supported for Build Comparison for Web Automation.

1. Go to the `Insights` tab on the left navigation bar and click on the `Builds Comparison`.
2. Select the `Build` from the list to drill-down.
3. Now, search for `Test Case` widgets in the `Web Automation, App Automation & HyperExecute` products.
4. Add the widgets to the dashboard by clicking on the `Add Widget` button.

## Custom Filters Use Cases

1. You can send the `key` and `value` pair to the TestMu AI platform.
2. You can filter the test cases based on the custom data.
