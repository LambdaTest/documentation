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
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/"
    },
    "headline": "Mock Video Injection on Web Automation (Selenium/Chromium)",
    "description": "Inject a custom video file as a fake camera feed in Chromium-based Selenium tests for WebRTC and KYC workflows.",
    "url": "https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "mock video injection selenium",
      "fake camera feed chromium webrtc",
      "getUserMedia selenium automation"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "cURL",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -X POST \\\n  \"https://api.lambdatest.com/automation/api/v1/user-files\" \\\n  -u \"$LT_USERNAME:$LT_ACCESS_KEY\" \\\n  -F \"files=@/path/to/sample_640x360.mjpeg\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Response",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"error\": \"\",\n      \"message\": \"File have been uploaded successfully to our lambda storage\",\n      \"key\": \"sample_640x360.mjpeg\"\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Java (Selenium 4, W3C)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import org.openqa.selenium.chrome.ChromeOptions;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport java.net.URL;\nimport java.util.*;\n\nChromeOptions options = new ChromeOptions();\n\noptions.addArguments(\n    \"--use-fake-ui-for-media-stream\",\n    \"--use-fake-device-for-media-stream\",\n    \"--use-file-for-fake-video-capture=/home/ltuser/Downloads/sample_640x360.mjpeg\"\n);\n\nHashSet<String> userFiles = new HashSet<>();\nuserFiles.add(\"sample_640x360.mjpeg\");\n\nHashMap<String, Object> ltOptions = new HashMap<>();\nltOptions.put(\"platform\", \"Linux\");\nltOptions.put(\"build\", \"Mock Video Injection Test\");\nltOptions.put(\"name\", \"Fake Camera Feed Test\");\nltOptions.put(\"video\", true);\nltOptions.put(\"w3c\", true);\n\noptions.setCapability(\"LT:Options\", ltOptions);\noptions.setCapability(\"lambda:userFiles\", userFiles);\n\nRemoteWebDriver driver = new RemoteWebDriver(\n    new URL(\"https://\" + LT_USERNAME + \":\" + LT_ACCESS_KEY + \"@hub.lambdatest.com/wd/hub\"),\n    options\n);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "from selenium import webdriver\n\noptions = webdriver.ChromeOptions()\noptions.add_argument(\"--use-fake-ui-for-media-stream\")\noptions.add_argument(\"--use-fake-device-for-media-stream\")\noptions.add_argument(\"--use-file-for-fake-video-capture=/home/ltuser/Downloads/sample_640x360.mjpeg\")\n\nlt_options = {\n    \"platform\": \"Linux\",\n    \"build\": \"Mock Video Injection Test\",\n    \"name\": \"Fake Camera Feed Test\",\n    \"video\": True,\n    \"w3c\": True,\n}\n\noptions.set_capability(\"LT:Options\", lt_options)\noptions.set_capability(\"lambda:userFiles\", [\"sample_640x360.mjpeg\"])\n\ndriver = webdriver.Remote(\n    command_executor=f\"https://{LT_USERNAME}:{LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub\",\n    options=options,\n)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "JavaScript (WebDriverIO or raw WebDriver)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = {\n  browserName: \"Chrome\",\n  browserVersion: \"latest\",\n  platformName: \"Linux\",\n  \"LT:Options\": {\n    platform: \"Linux\",\n    build: \"Mock Video Injection Test\",\n    name: \"Fake Camera Feed Test\",\n    video: true,\n    w3c: true,\n  },\n  \"lambda:userFiles\": [\"sample_640x360.mjpeg\"],\n  \"goog:chromeOptions\": {\n    args: [\n      \"--use-fake-ui-for-media-stream\",\n      \"--use-fake-device-for-media-stream\",\n      \"--use-file-for-fake-video-capture=/home/ltuser/Downloads/sample_640x360.mjpeg\",\n      \"--no-sandbox\",\n      \"--disable-gpu\",\n    ],\n  },\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Verify the Video Feed in Your Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.get(\"https://www.lambdatest.com/selenium-playground/webrtc-video\");\n\n// Or open your application's camera page\ndriver.get(\"https://your-app.com/video-call\");\n\nBoolean isPlaying = (Boolean) driver.executeScript(\n    \"const video = document.querySelector('video');\" +\n    \"return video && !video.paused && video.readyState >= 2;\"\n);"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Mock Video Injection on Web Automation (Selenium/Chromium)",
      "description": "Inject a custom video file as a fake camera feed in Chromium-based Selenium tests on TestMu AI. This is useful for testing WebRTC, video conferencing, KYC or identity verification, and any flow that calls getUserMedia(). Upload a video file, pre-load it onto the test VM, and pass Chrome flags to use it as a fake camera device. Upload your .mjpeg or .y4m video file to TestMu AI using the web automation user-files API. Pre-load the file onto the test VM using the lambda:userFiles capability. Pass Chrome flags to use the uploaded file as a fake camera device. Chrome treats the file as a looping camera feed, so any getUserMedia({ video: true }) call receives frames from your file instead of a real camera. Verify the following before configuring mock video injection. Get a TestMu AI account with Web Automation access from your dashboard. Prepare a .mjpeg video file such as sample_640x360.mjpeg (recommended resolution: 640x360 or 1280x720; Chrome also supports .y4m format). Set TestMu AI credentials as LTUSERNAME and LTACCESS_KEY.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Upload the Video File",
          "text": "Upload your .mjpeg file using the web automation user-files API. Limits: maximum 20 MB per upload and maximum 150 files per organization. The /mfs/v1.0/media/upload endpoint is for mobile and app automation. For web automation, use /automation/api/v1/user-files.",
          "url": "https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/#step-1-upload-the-video-file"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure Selenium Capabilities",
          "text": "Add the video file and Chrome flags to your Selenium capabilities configuration.",
          "url": "https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/#step-2-configure-selenium-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Verify the Video Feed in Your Test",
          "text": "Navigate to a page that requests camera access and confirm the fake stream is active. After the session starts, navigate to a page that requests camera access and confirm the fake stream is being used.",
          "url": "https://www.testmuai.com/support/docs/mock-video-injection-web-automation-selenium-chromium/#step-3-verify-the-video-feed-in-your-test"
        }
      ]
    }
  ]) }}
/>

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

1. Get a TestMu AI account with Web Automation access from [your dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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
