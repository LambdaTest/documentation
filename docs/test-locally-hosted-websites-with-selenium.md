---
id: test-locally-hosted-websites-with-selenium
title: Test Locally Hosted Websites With Selenium
sidebar_label: Test Locally Hosted Websites
description: Test locally hosted or staging web apps on the TestMu AI cloud grid using TestMu AI Tunnel with Selenium.
keywords:
  - selenium local testing
  - testmu ai tunnel selenium
  - test localhost on cloud
  - selenium tunnel setup
  - test staging environment selenium
  - local testing cloud grid
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/test-locally-hosted-websites-with-selenium/
site_name: TestMu AI
slug: test-locally-hosted-websites-with-selenium/
canonical: https://www.testmuai.com/support/docs/test-locally-hosted-websites-with-selenium/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Test Locally Hosted Websites With Selenium",
          "item": `${BRAND_URL}/support/docs/test-locally-hosted-websites-with-selenium/`
        }]
      })
    }}
></script>

---

TestMu AI Tunnel creates a secure, encrypted connection between your local machine and the TestMu AI cloud grid. Use it to test web apps running on `localhost`, staging servers, or behind a firewall without exposing them to the internet. The tunnel uses TCP with TLS 1.2 over port 443 or WebSocket.

## How It Works
---

The tunnel binary runs on your machine and establishes an encrypted connection to the TestMu AI cloud. When you set `tunnel: true` in your test capabilities, the cloud browser routes traffic through this connection to reach your local app.

```
Your Machine (localhost:3000) <-- Encrypted Tunnel --> TestMu AI Grid <--> Cloud Browser
```

## Step 1: Download the Tunnel Binary
---

Download the binary for your operating system and architecture.

| Platform | Download Link |
|----------|---------------|
| **Windows** (AMD64) | https://downloads.lambdatest.com/tunnel/v3/windows/amd64/LT.exe |
| **macOS** (AMD64) | https://downloads.lambdatest.com/tunnel/v3/mac/amd64/LT |
| **macOS** (ARM64 / Apple Silicon) | https://downloads.lambdatest.com/tunnel/v3/mac/arm64/LT |
| **Linux** (AMD64) | https://downloads.lambdatest.com/tunnel/v3/linux/amd64/LT |
| **Linux** (ARM64) | https://downloads.lambdatest.com/tunnel/v3/linux/arm64/LT |

For the full list of platform binaries, see the [TestMu AI Tunnel documentation](/support/docs/testing-locally-hosted-pages/).

After downloading, make the binary executable (macOS/Linux):

```bash
chmod +x LT
```

## Step 2: Start the Tunnel
---

Open a terminal, navigate to the folder with the binary, and start the tunnel with your credentials.

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`LT --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

You should see a message confirming the tunnel is active. Keep this terminal open while running your tests.

:::tip Named tunnels
Run multiple tunnels by giving each a name:

```bash
LT --user YOUR_USERNAME --key YOUR_ACCESS_KEY --tunnelName my-staging-tunnel
```

Then reference it in your capabilities with `"tunnelName": "my-staging-tunnel"`.
:::

## Step 3: Add the Tunnel Capability to Your Tests
---

Set `tunnel: true` in your test capabilities. Here is how to do it in each language.

<Tabs>
  <TabItem value="java" label="Java" default>

  ```java
  ChromeOptions browserOptions = new ChromeOptions();
  browserOptions.setPlatformName("Windows 10");
  browserOptions.setBrowserVersion("latest");

  HashMap<String, Object> ltOptions = new HashMap<String, Object>();
  ltOptions.put("build", "Local Test Build");
  ltOptions.put("name", "Local Test");
  ltOptions.put("tunnel", true);       // Enable tunnel
  ltOptions.put("w3c", true);
  browserOptions.setCapability("LT:Options", ltOptions);
  ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

  ```javascript
  const capabilities = {
    browserName: 'Chrome',
    browserVersion: 'latest',
    'LT:Options': {
      platformName: 'Windows 10',
      build: 'Local Test Build',
      name: 'Local Test',
      tunnel: true,       // Enable tunnel
      w3c: true,
    }
  };
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  lt_options = {
      "build": "Local Test Build",
      "name": "Local Test",
      "tunnel": True,       # Enable tunnel
      "w3c": True,
  }
  options.set_capability("LT:Options", lt_options)
  ```

  </TabItem>
  <TabItem value="csharp" label="C#">

  ```csharp
  var ltOptions = new Dictionary<string, object>
  {
      { "build", "Local Test Build" },
      { "name", "Local Test" },
      { "tunnel", true },       // Enable tunnel
      { "w3c", true }
  };
  browserOptions.AddAdditionalOption("LT:Options", ltOptions);
  ```

  </TabItem>
  <TabItem value="php" label="PHP">

  ```php
  $capabilities = [
      "browserName" => "Chrome",
      "browserVersion" => "latest",
      "LT:Options" => [
          "platformName" => "Windows 10",
          "build" => "Local Test Build",
          "name" => "Local Test",
          "tunnel" => true,       // Enable tunnel
          "w3c" => true,
      ]
  ];
  ```

  </TabItem>
  <TabItem value="ruby" label="Ruby">

  ```ruby
  options = Selenium::WebDriver::Options.chrome(
    platform_name: "Windows 10",
    browser_version: "latest",
    "LT:Options": {
      build: "Local Test Build",
      name: "Local Test",
      tunnel: true,       # Enable tunnel
      w3c: true,
    }
  )
  ```

  </TabItem>
</Tabs>

If you are using a named tunnel, add `"tunnelName": "my-staging-tunnel"` to the `LT:Options` as well.

## Step 4: Point Your Test to localhost
---

Use `localhost` or your internal URL in `driver.get()`. The tunnel routes the request from the cloud browser to your local machine.

```java
// This works because the tunnel is active
driver.get("http://localhost:3000");
```

## Common Issues
---

Quick fixes for problems you might hit with local testing.

| Problem | Solution |
|---------|----------|
| Tunnel won't start | Check that your username and access key are correct. Ensure no firewall is blocking outbound connections over port 443. |
| Page loads but shows "connection refused" | Verify your local app is running on the port you specified. Check that the app binds to `0.0.0.0`, not just `127.0.0.1`. |
| Tests timeout on local URLs | Increase the idle timeout capability: `"idleTimeout": 300`. Local apps may respond slower through the tunnel. |
| Multiple tunnels conflicting | Use named tunnels with `--tunnelName` and reference the name in capabilities with `"tunnelName"`. |
| SSL certificate errors on localhost | Start the tunnel with `--mitm` flag to test sites with self-signed certificates on your local machine or internal network. |

:::note
For YAML-based configuration, verbose logging, Info APIs, MITM mode, and all advanced options, see the [TestMu AI Tunnel documentation](/support/docs/testing-locally-hosted-pages/) and [TestMu AI Tunnel Features](/support/docs/advanced-tunnel-features/).
:::

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
        Test Locally Hosted Websites With Selenium
      </span>
    </li>
  </ul>
</nav>
