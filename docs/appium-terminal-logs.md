---
id: appium-terminal-logs
title: Terminal Logs for Appium Tests
hide_title: true
sidebar_label: Terminal Logs
description: Upload your own Appium server, test-runner, or CI logs to any app automation session and view or download them from the TestMu AI dashboard under Logs › Terminal.
keywords:
  - appium terminal logs
  - upload terminal logs appium
  - appium debugging logs
  - app automation terminal logs
  - real device virtual device logs
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/appium-terminal-logs/
site_name: TestMu AI
slug: appium-terminal-logs/
canonical: https://www.testmuai.com/support/docs/appium-terminal-logs/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "View Terminal Logs for Appium Tests",
          "item": `${BRAND_URL}/support/docs/appium-terminal-logs/`
        }]
      })
    }}
></script>

# Terminal Logs for Appium Tests
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
---

<BrandName /> lets you attach **your own terminal logs** (Appium server logs, test-runner output, or CI logs) to any app automation session through a single REST API. Once uploaded, you can view or download them directly from the <BrandName /> Automation dashboard under **Logs › Terminal**.

This keeps your own diagnostic logs next to the session they belong to, so you can correlate them with the session's native logs (Appium, device, network, crash) in one place, without jumping between your CI system, local files, and the dashboard.

---
## How it works

- **One log per session** A session holds at most one terminal log at a time.
- **Latest upload** Every upload replaces the existing log, regardless of the filename.
- **No special capability is required.** Any valid session can receive a terminal log. There is no opt-in flag to set in your test capabilities.
- **Retention** follows the session's normal artifact retention. The log is kept and expires on the same schedule as the session's other logs.

---

## Upload a terminal log

Use the **upload** endpoint to attach a log file to a session. The file is sent as a multipart form field named `file`. Uploading again replaces the previous file.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/<YOUR_SESSION_ID>/log/terminallog" --form "file=@/path/to/appium.log"
`}
</CodeBlock>
</div>

Replace `<YOUR_SESSION_ID>` with your actual session ID and `/path/to/appium.log` with the path to your log file.

On success, the API returns:

```json
{ "status": "success", "message": "File has been uploaded successfully!" }
```

## View terminal logs in the dashboard
---

Open the session on the <BrandName /> Automation dashboard. The **Terminal** sub-tab is always available under **Logs** (next to **Crash**). Once you upload a log file, it starts showing up in this tab, where you can view the file and read its contents in the browser.

:::note
The **Terminal** tab is always present. It stays empty until a terminal log is uploaded for the session.
:::

{/* <img loading="lazy" src={require('../assets/images/terminal-logs/terminal-logs-tab.png').default} alt="Terminal logs sub-tab on the Automation dashboard" width="1347" height="610" className="doc_img"/> */}

## Download a terminal log
---

To download the uploaded log, add the `download=true` query parameter to the view endpoint:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/<YOUR_SESSION_ID>/log/terminallog?download=true" --output terminal-logs.log
`}
</CodeBlock>
</div>

:::info
The downloaded file is always named `terminal-logs.<ext>`, where `<ext>` is your original file extension. The original base filename is not retained.
:::

## Delete a terminal log
---

To remove the attached log from a session, use the **delete** endpoint:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X DELETE "https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions/<YOUR_SESSION_ID>/log/terminallog"
`}
</CodeBlock>
</div>

## Supported formats and limits
---

|                     | Value                                                                              |
| ------------------- | ---------------------------------------------------------------------------------- |
| Maximum file size   | 5 MB                                                                                |
| Allowed file types  | `.txt`, `.json`, `.xml`, `.log`, `.csv`, `.html`, `.yaml`, `.yml`, `.har`, `.gz`    |
| Files per session   | 1 (each upload replaces the previous file)                                          |
| Empty (0-byte) file | Not allowed                                                                         |



## FAQ
---

**Can I upload more than one file to a session?**
No. A session holds one terminal log at a time, and each new upload replaces the previous one.

**How long are terminal logs kept?**
They follow the session's normal artifact retention, on the same schedule as the session's other logs. There is no separate retention setting.

**Do I need a special capability to use this?**
No. Any valid app automation session can receive a terminal log; there is no opt-in flag to set in your test capabilities.


If you still have any questions for us, please feel free to let us know via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Portal**</span> or mail us to support@testmuai.com

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
        View Terminal Logs for Appium Tests
      </span>
    </li>
  </ul>
</nav>
