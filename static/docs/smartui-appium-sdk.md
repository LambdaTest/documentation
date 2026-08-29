# Integrate SmartUI with Appium Tests

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Appium is an open-source tool for automating mobile application testing. It allows developers and testers to write tests for native, hybrid, and mobile web applications across multiple platforms, such as iOS and Android, using a single codebase.

TestMu AI SmartUI supports Appium automation tests for mobile applications through two integration methods:

- **SDK Integration**: Available for Java
- **Hooks Integration**: Available for JavaScript, Python, Ruby, and C#

Below is the list of supported languages and their integration methods:





      Java SDK






      JavaScript Hooks






      Python Hooks






        Ruby Hooks






      C# Hooks





  We support all languages and frameworks that are compatible with Appium, so in case your favorite isn't in the table.Don't worry, you can still run the test. Contact Us for any help.


## Integration Methods

### SDK Integration (Java)

The SmartUI App SDK provides a native Java library for integrating visual regression testing into your Appium Java test suite. This method offers:

- Native Java API for screenshot capture
- Type-safe integration with your existing test framework
- Comprehensive error handling and logging

**Documentation**: [Appium Java SDK](/support/docs/smartui-appium-java-sdk) - Complete guide with best practices and troubleshooting

### Hooks Integration (JavaScript, Python, Ruby, C#)

For languages other than Java, SmartUI uses Hooks integration, which leverages Appium's execute command to capture screenshots. This method:

- Works with any Appium-compatible language
- Uses simple execute commands for screenshot capture
- Supports both viewport and full-page screenshots

**Documentation**: [Appium Hooks](/support/docs/smartui-appium-hooks) - Complete guide for JavaScript, Python, Ruby, and C# implementations

#### Quick Start with Hooks

**Prerequisites:**
- Appium driver instance initialized
- SmartUI project created with Project Token
- TestMu AI credentials configured

**Taking Viewport Screenshots:**

Add the following code snippet in your test where you want to capture a screenshot:




```javascript
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```




```python
driver.execute_script("smartui.takeScreenshot=<Your Screenshot Name>")
```




```ruby
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```




```csharp
driver.Execute("smartui.takeScreenshot=<Your Screenshot Name>");
```




**Taking Full Page Screenshots (Native Apps):**

For apps with scrolling functionality, you can capture full-page screenshots:




```javascript
let config = {
screenshotName: '<Name of your screenshot>',
fullPage: true,
pageCount: 15   // Minimum 1, Maximum 20
};
await driver.execute("smartui.takeScreenshot", config);
```




```python
config = {
'screenshotName': '<Your Screenshot Name>',
'fullPage': True,
'pageCount': 15  # Minimum 1, Maximum 20
}
driver.execute_script("smartui.takeScreenshot", config)
```




```ruby
config = {
'screenshotName' => '<Your Screenshot Name>',
'fullPage' => true,
'pageCount' => 15  # Minimum 1, Maximum 20
}
driver.execute("smartui.takeScreenshot", config)
```




```csharp
var config = new Dictionary<string, object> {
{"screenshotName", "<Your Screenshot Name>"},
{"fullPage", true},
{"pageCount", 15}  // Minimum 1, Maximum 20
};
driver.Execute("smartui.takeScreenshot", config);
```




**Configuration:**

Set your Project Token as an environment variable before running tests:




```bash
export PROJECT_TOKEN="your_project_token"
```




```bash
set PROJECT_TOKEN=your_project_token
```




```powershell
$env:PROJECT_TOKEN="your_project_token"
```




## Next Steps

After selecting your preferred language, refer to the specific documentation for detailed integration steps:

- **[Java SDK](/support/docs/smartui-appium-java-sdk)** - Complete guide with best practices and troubleshooting
- **[Appium Hooks](/support/docs/smartui-appium-hooks)** - For JavaScript, Python, Ruby, and C# implementations


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for common issues
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle dynamic content in mobile apps
- [Baseline Management](/support/docs/smartui-baseline-management) - Manage your test baselines
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI
