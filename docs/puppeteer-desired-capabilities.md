---
id: puppeteer-capabilities
title: How to Configure Puppeteer Capabilities on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Supported Capabilities"
description: Configure Puppeteer capabilities on TestMu AI to select browsers and OS, organize tests, set desktop resolution, and enable debugging logs.
keywords:
  - puppeteer testing
  - puppeteer e2e testing 
  - puppeteer mobile testing
  - puppeteer testing tool
  - puppeteer testing on testmu ai
  - puppeteer testing testmu ai

url: https://www.testmuai.com/support/docs/capabilities-for-puppeteer/
site_name: TestMu AI
slug: capabilities-for-puppeteer/
canonical: https://www.testmuai.com/support/docs/capabilities-for-puppeteer/
---
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
          "name": "Test Execution Setup",
          "item": `${BRAND_URL}/support/docs/capabilities-for-puppeteer/`
        }]
      })
    }}
></script>

# How to Configure Puppeteer Capabilities on TestMu AI
***

When you run a Puppeteer test on TestMu AI, capabilities tell the cloud machine which browser, OS, resolution, and logs each session needs. Setting them correctly means every test targets the exact environment you want and captures the debugging data you need. You define these capabilities in your Puppeteer script and pass them to the CDP endpoint at connection time.

The TestMu AI Capability Generator can auto-create the capabilities class for your Puppeteer scripts. The table below lists the capabilities you can configure and an example of each.

| Key | Expected Values | Description | Capability |
| -------- | -----| ------- | ----------------- |
| browserName   |  Chrome, Edge |   Specify the browser to test on    |  `const capability = {"browserName": "Chrome"}`
| browserVersion  |  Chrome 83 & above, Edge 83 & above |   Specify the browser version to test on    |  `const capability = {"browserVersion": "113.0"}`
| platform  |  **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave |    Specify the platform name    | `const capability = { "LT:Options": {"platform": "Windows 10",}}`
| build   |  Puppeteer Sample Build |   Represent the build number for your test | `const capability = { "LT:Options": {"build": "<build_name>",}}`
| name   |  Puppeteer Sample Test |    Represents the name of a test   | `const capability = { "LT:Options": {"name": "<test_name>",}}`
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | `const capability = {"LT:Options": {"resolution": '1024x768'}}` |
| projectName   | Example: My Test |   Represent the name of your project    |  `const capability = { "LT:Options": {"projectName": "<project_name>",}}` |
| tags   |  ["tag1", "tag2", "tag3"] |  Group your Puppeteer tests |``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}`` |
| buildTags   |  ["build1", "build2", "build3"] |  Group your Puppeteer builds |`const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |
| network   | true/false |   Enable network logs    |  `const capability = { "LT:Options": {"network": true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { "LT:Options": {"console": true,}}` |
| video   |  true/false |    Enable video recording of the entire screen     | `const capability = { "LT:Options": {"video": true,}}` |
| tunnel   |  true/false |    Enable tunnel for local testing     | `const capability = { "LT:Options": {"tunnel": true,}}` |
| tunnelName   |  true/false | Specify tunnel name     | `const capability = { "LT:Options": {"tunnelName": "<tunnel_name>",}}` |
| geoLocation   |  AR (Argentina) | Specify country code | `const capability = { "LT:Options": {"geoLocation": "AR",}}` |
| idleTimeout | number| Specifies the timeout of the commands in seconds. <br /><br /> <b>Default value:</b> 300 <br /><br /> <b>Max value:</b> 1800<br /><br /> If a value greater than 1800 is added, idleTimeout will be set to 1800.| `const capability = { "LT:Options": {"idleTimeout": "<number>",}}`|

## Related Puppeteer Guides
***

Continue with the guides below to run and configure your Puppeteer tests on TestMu AI.

- [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/) walks through the end-to-end setup.
- [Set up the Puppeteer test environment](/support/docs/puppeteer-test-execution-setup/) covers browser selection, test organization, and debugging logs.
- [Run Puppeteer tests with Mocha](/support/docs/puppeteer-testing-with-mocha/) covers the Mocha test runner integration.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Capabilities for Puppeteer
      </span>
    </li>
  </ul>
</nav>
