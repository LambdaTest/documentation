---
id: smartui-appium-sdk
title: Integrate SmartUI with Appium Tests
sidebar_label: Appium
description: Learn how to integrate your Appium automated tests with TestMu AI's SmartUI. Java uses both SDK and hooks integration, while JavaScript, Python, Ruby, and C# use Hooks integration.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.testmu.ai/support/docs/smartui-appium-sdk/
slug: smartui-appium-sdk
canonical: https://www.testmu.ai/support/docs/smartui-appium-sdk/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-appium-sdk/`
        }]
      })
    }}
></script>
Appium is an open-source tool for automating mobile application testing. It allows developers and testers to write tests for native, hybrid, and mobile web applications across multiple platforms, such as iOS and Android, using a single codebase.

<BrandName /> SmartUI supports Appium automation tests for mobile applications through two integration methods:

- **SDK Integration**: Available for Java
- **Hooks Integration**: Available for JavaScript, Python, Ruby, and C#

Below is the list of supported languages and their integration methods:

<div className='lt_row lt_framework_list_row'>
  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-java-sdk/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}} >Java SDK</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="181" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>JavaScript Hooks</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>Python Hooks</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
     <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className='language-icon no-zoom'/>
      <ul className='lt_framework_list'>
        <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>Ruby Hooks</a></li>
    </ul>
  </div>

  <div className='lt_col lt_framework_wrapper'>
    <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className='language-icon no-zoom'/>
    <ul className='lt_framework_list'>
      <li><a href="/support/docs/smartui-appium-hooks/" target="_blank" style={{color: '#0a69da', textDecoration: 'underline'}}>C# Hooks</a></li>
    </ul>
  </div>
</div>

<div className='lt-framework-list-footer'>
  <p>We support all languages and frameworks that are compatible with Appium, so in case your favorite isn't in the table.<br/>Don't worry, you can still run the test. <span className='doc__lt' onClick={() => window.openLTChatWidget()}>Contact Us</span> for any help.</p>
</div>

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
- <BrandName /> credentials configured

**Taking Viewport Screenshots:**

Add the following code snippet in your test where you want to capture a screenshot:

<Tabs className='docs__val' groupId='hooks-language'>
<TabItem value='javascript' label='JavaScript' default>

```javascript
driver.execute("smartui.takeScreenshot=<Name of your screenshot>");
```

</TabItem>
<TabItem value='python' label='Python'>

```python
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value='ruby' label='Ruby'>

```ruby
driver.execute("smartui.takeScreenshot=<Your Screenshot Name>")
```

</TabItem>
<TabItem value='csharp' label='C#'>

```csharp
driver.Execute("smartui.takeScreenshot=<Your Screenshot Name>");
```

</TabItem>
</Tabs>

**Taking Full Page Screenshots (Native Apps):**

For apps with scrolling functionality, you can capture full-page screenshots:

<Tabs className='docs__val' groupId='hooks-fullpage'>
<TabItem value='javascript-full' label='JavaScript' default>

```javascript
let config = {
  screenshotName: '<Name of your screenshot>',
  fullPage: true,
  pageCount: 15   // Minimum 1, Maximum 20
};
await driver.execute("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value='python-full' label='Python'>

```python
config = {
  'screenshotName': '<Your Screenshot Name>',
  'fullPage': True,
  'pageCount': 15  # Minimum 1, Maximum 20
}
driver.execute("smartui.takeScreenshot", config)
```

</TabItem>
<TabItem value='ruby-full' label='Ruby'>

```ruby
config = {
  'screenshotName' => '<Your Screenshot Name>',
  'fullPage' => true,
  'pageCount' => 15  # Minimum 1, Maximum 20
}
driver.execute("smartui.takeScreenshot", config)
```

</TabItem>
<TabItem value='csharp-full' label='C#'>

```csharp
var config = new Dictionary<string, object> {
  {"screenshotName", "<Your Screenshot Name>"},
  {"fullPage", true},
  {"pageCount", 15}  // Minimum 1, Maximum 20
};
driver.Execute("smartui.takeScreenshot", config);
```

</TabItem>
</Tabs>

**Configuration:**

Set your Project Token as an environment variable before running tests:

<Tabs className='docs__val' groupId='hooks-config'>
<TabItem value='macos-linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="your_project_token"
```

</TabItem>
<TabItem value='windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN=your_project_token
```

</TabItem>
<TabItem value='powershell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="your_project_token"
```

</TabItem>
</Tabs>

## Next Steps

After selecting your preferred language, refer to the specific documentation for detailed integration steps:

- **[Java SDK](/support/docs/smartui-appium-java-sdk)** - Complete guide with best practices and troubleshooting
- **[Appium Hooks](/support/docs/smartui-appium-hooks)** - For JavaScript, Python, Ruby, and C# implementations

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for common issues
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle dynamic content in mobile apps
- [Baseline Management](/support/docs/smartui-baseline-management) - Manage your test baselines
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI
