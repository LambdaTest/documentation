---
id: mock-video-injection-web-automation-selenium-chromium
title: Mock Video Injection on Web Automation (Selenium/Chromium)
sidebar_label: Inject a Mock Video Stream
description: Inject a custom video file as a fake camera feed in Chromium-based Selenium tests for WebRTC and KYC workflows.
tags:
  - how-to
  - web-automation
  - selenium
  - webrtc
  - video-injection
  - mock-camera
  - getUserMedia
keywords:
  - mock video injection selenium
  - fake camera feed chromium webrtc
  - getUserMedia selenium automation
  - lambda userFiles video capture
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/
site_name: TestMu AI
slug: mock-video-injection-web-automation-selenium-chromium/
canonical: https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/
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
          "name": "Mock Video Injection on Web Automation (Selenium/Chromium)",
          "item": `${BRAND_URL}/support/docs/mock-video-injection-web-automation-selenium-chromium/`
        }]
      })
    }}
></script>

# Mock Video Injection on Web Automation (Selenium/Chromium)

Inject a custom video file as a fake camera feed in Chromium-based Selenium tests on TestMu AI. This is useful for testing WebRTC, video conferencing, KYC or identity verification, and any flow that calls `getUserMedia()`.

## How It Works
---

Upload a video file, pre-load it onto the test VM, and pass Chrome flags to use it as a fake camera device.

1. Upload your `.mjpeg` or `.y4m` video file to TestMu AI using the web automation user-files API.
2. Pre-load the file onto the test VM using the `lambda:userFiles` capability.
3. Pass Chrome flags to use the uploaded file as a fake camera device.

Chrome treats the file as a looping camera feed, so any `getUserMedia({ video: true })` call receives frames from your file instead of a real camera.

## Prerequisites
---

Verify the following before configuring mock video injection.

1. Get a TestMu AI account with Web Automation access from [your dashboard](https://accounts.lambdatest.com/dashboard).
2. Prepare a `.mjpeg` video file such as `sample_640x360.mjpeg` (recommended resolution: `640x360` or `1280x720`; Chrome also supports `.y4m` format).
3. Set TestMu AI credentials as `LT_USERNAME` and `LT_ACCESS_KEY`.

## Step 1: Upload the Video File
---

Upload your `.mjpeg` file using the web automation user-files API.

### cURL

```bash
curl -X POST \
  "https://api.lambdatest.com/automation/api/v1/user-files" \
  -u "$LT_USERNAME:$LT_ACCESS_KEY" \
  -F "files=@/path/to/sample_640x360.mjpeg"
```

### Response

```json
{
  "status": "success",
  "data": [
    {
      "error": "",
      "message": "File have been uploaded successfully to our lambda storage",
      "key": "sample_640x360.mjpeg"
    }
  ]
}
```

:::note
**Limits**: maximum 20 MB per upload and maximum 150 files per organization.

The `/mfs/v1.0/media/upload` endpoint is for mobile and app automation. For web automation, use `/automation/api/v1/user-files`.
:::

## Step 2: Configure Selenium Capabilities
---

Add the video file and Chrome flags to your Selenium capabilities configuration.

### Java (Selenium 4, W3C)

```java
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
import java.util.*;

ChromeOptions options = new ChromeOptions();

options.addArguments(
    "--use-fake-ui-for-media-stream",
    "--use-fake-device-for-media-stream",
    "--use-file-for-fake-video-capture=/home/ltuser/Downloads/sample_640x360.mjpeg"
);

HashSet<String> userFiles = new HashSet<>();
userFiles.add("sample_640x360.mjpeg");

HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("platform", "Linux");
ltOptions.put("build", "Mock Video Injection Test");
ltOptions.put("name", "Fake Camera Feed Test");
ltOptions.put("video", true);
ltOptions.put("w3c", true);

options.setCapability("LT:Options", ltOptions);
options.setCapability("lambda:userFiles", userFiles);

RemoteWebDriver driver = new RemoteWebDriver(
    new URL("https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@hub.lambdatest.com/wd/hub"),
    options
);
```

### Python

```python
from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument("--use-fake-ui-for-media-stream")
options.add_argument("--use-fake-device-for-media-stream")
options.add_argument("--use-file-for-fake-video-capture=/home/ltuser/Downloads/sample_640x360.mjpeg")

lt_options = {
    "platform": "Linux",
    "build": "Mock Video Injection Test",
    "name": "Fake Camera Feed Test",
    "video": True,
    "w3c": True,
}

options.set_capability("LT:Options", lt_options)
options.set_capability("lambda:userFiles", ["sample_640x360.mjpeg"])

driver = webdriver.Remote(
    command_executor=f"https://{LT_USERNAME}:{LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub",
    options=options,
)
```

### JavaScript (WebDriverIO or raw WebDriver)

```javascript
const capabilities = {
  browserName: "Chrome",
  browserVersion: "latest",
  platformName: "Linux",
  "LT:Options": {
    platform: "Linux",
    build: "Mock Video Injection Test",
    name: "Fake Camera Feed Test",
    video: true,
    w3c: true,
  },
  "lambda:userFiles": ["sample_640x360.mjpeg"],
  "goog:chromeOptions": {
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--use-file-for-fake-video-capture=/home/ltuser/Downloads/sample_640x360.mjpeg",
      "--no-sandbox",
      "--disable-gpu",
    ],
  },
};
```

## Step 3: Verify the Video Feed in Your Test
---

Navigate to a page that requests camera access and confirm the fake stream is active.

After the session starts, navigate to a page that requests camera access and confirm the fake stream is being used.

```java
driver.get("https://www.lambdatest.com/selenium-playground/webrtc-video");

// Or open your application's camera page
driver.get("https://your-app.com/video-call");

Boolean isPlaying = (Boolean) driver.executeScript(
    "const video = document.querySelector('video');" +
    "return video && !video.paused && video.readyState >= 2;"
);
```

## File Paths by OS
---

The `lambda:userFiles` capability places files in these directories.

| Platform | File Path |
|---|---|
| Linux | `/home/ltuser/Downloads/sample_640x360.mjpeg` |
| Windows | `C:\\Users\\ltuser\\Downloads\\sample_640x360.mjpeg` |
| macOS | `/Users/ltuser/Downloads/sample_640x360.mjpeg` |

Adjust the `--use-file-for-fake-video-capture` path to match your target platform.

## Chrome Flags Reference
---

The following Chrome flags control fake media device behavior.

| Flag | Purpose |
|---|---|
| `--use-fake-ui-for-media-stream` | Auto-grants `getUserMedia()` permission without a popup |
| `--use-fake-device-for-media-stream` | Replaces real camera and microphone hardware with fake devices |
| `--use-file-for-fake-video-capture=<path>` | Uses the specified file as the fake camera feed |
| `--use-file-for-fake-audio-capture=<path>` | Uses the specified file as fake microphone input (`.wav` format) |

## Troubleshooting
---

Refer to the following table for common issues and solutions.

| Issue | Solution |
|---|---|
| Black or empty video feed | Verify the file name in `lambda:userFiles` matches exactly, including case |
| Permission popup still appears | Confirm `--use-fake-ui-for-media-stream` is set |
| File not found on VM | Check the OS-specific path; if needed, use `driver.executeScript("lambda-files-download=sample_640x360.mjpeg")` as a fallback |
| Video not looping | Chrome loops `.mjpeg` files automatically; `.y4m` files also loop by default |
| Wrong resolution | Use a file resolution that matches your app expectations; `640x360` is a safe default |
| Windows path errors | Use escaped backslashes: `C:\\Users\\ltuser\\Downloads\\sample_640x360.mjpeg` |
| macOS video does not render | This is a known Chrome limitation; use Linux when visual verification is required |

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
        Mock Video Injection on Web Automation (Selenium/Chromium)
      </span>
    </li>
  </ul>
</nav>
