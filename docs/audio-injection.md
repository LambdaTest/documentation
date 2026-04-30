---
id: audio-injection
title: Audio Injection/Input on Real Devices
sidebar_label: Audio Injection
description: Test audio-driven and microphone-dependent features on real Android and iOS devices by injecting pre-recorded audio files directly into the device microphone.

keywords:
  - audio injection
  - app test automation
  - microphone input
  - voice commands
  - audio recording
  - testmu ai audio testing
  - framework on testmu ai
  - app testing appium
  - app testing
  - real devices
  - android audio injection
  - ios audio injection
url: https://www.testmuai.com/support/docs/audio-injection/
site_name: TestMu AI
slug: audio-injection/
canonical: https://www.testmuai.com/support/docs/audio-injection/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
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
          "name": "Audio Injection",
          "item": `${BRAND_URL}/support/docs/audio-injection/`
        }]
      })
    }}
></script>

# Audio Injection on Real Devices
<RealDeviceTag value="Real Device" />

Test audio-driven and microphone-dependent features on real Android and iOS devices through Appium / Selenium automation. Inject pre-recorded audio files directly into the device microphone — no physical mic input required.

> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@testmuai.com**.<br />

---

## Overview

Audio Injection enables you to simulate microphone input on real devices by injecting pre-recorded audio files (MP3, WAV) into the device's mic pipeline during automated tests.

Use it to test speech-to-text, voice commands, voice assistants, in-app recording, KYC voice verification, and any other microphone-dependent feature.

---

## Supported Platforms

| Platform | Minimum OS Version | 
|---|---|
| **Android** | Android 13 (SDK 33) and above | 
| **iOS** | iOS 16 and above | 

Audio Injection is supported on **real devices only**. It is **not** available on emulators or simulators.

---

## Supported File Formats

| Format | Max Size |
|---|---|
| MP3 | 200 MB |
| WAV | 200 MB |

The audio file must be uploaded to <BrandName /> before it can be injected.

---

## Step 1 - Upload Audio File

Use the **Upload Media API** to upload an audio file to your <BrandName /> account.

```bash
curl -u "LT_USERNAME:LT_ACCESS_KEY"   -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload"   -F "media_file=@/path/to/test.wav"   -F "type=audio"   -F "custom_id=SampleAudio"
```

**Response**

```json
{
  "media_url": "lt://MEDIAID",
  "status": "success"
}
```

Save the returned `media_url` — you will use it in subsequent steps.

---

## Step 2 - Enable Audio Injection on Your Session

Set the `enableAudioInjection` capability when creating your driver session.

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("enableAudioInjection", true);
caps.setCapability("media", "lt://MEDIA1234567890abcdef"); // optional — pre-set audio
```

</TabItem>

<TabItem value="python" label="Python">

```python
desired_caps = {
    "enableAudioInjection": True,
    "media": "lt://MEDIA1234567890abcdef",  # optional
    # ... other capabilities
}
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const capabilities = {
  enableAudioInjection: true,
  media: "lt://MEDIA1234567890abcdef", // optional
  // ... other capabilities
};
```

</TabItem>

</Tabs>

:::tip
Setting the `media` capability pre-injects the audio when the session starts. You can still use the `lambda-audio-injection` hook later to switch to a different file mid-session.
:::

---

## Step 3 - Inject and Control Audio with Lambda Hooks

Use the following hooks via `driver.executeScript`:

| Hook | Description |
|---|---|
| `lambda-audio-injection=<media_url>` | Set the audio file to be injected |
| `lambda-audio-start` | Start playing the injected audio into the device microphone |
| `lambda-audio-stop` | Stop audio playback |

<Tabs className="docs__val">

<TabItem value="java" label="Java" default>

```java
// 1. Set the audio file
driver.executeScript("lambda-audio-injection=lt://MEDIA1234567890abcdef");

// 2. Trigger the app's mic input (e.g., tap Record / Start Voice Search)
driver.findElement(AppiumBy.id("recordButton")).click();

// 3. Start audio playback — the app receives the file as live mic input
driver.executeScript("lambda-audio-start");

// ... wait for the app to finish capturing ...

// 4. Stop audio playback
driver.executeScript("lambda-audio-stop");
```

</TabItem>

<TabItem value="python" label="Python">

```python
driver.execute_script("lambda-audio-injection=lt://MEDIA1234567890abcdef")
driver.find_element(AppiumBy.ID, "recordButton").click()
driver.execute_script("lambda-audio-start")
# ...
driver.execute_script("lambda-audio-stop")
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
await driver.executeScript("lambda-audio-injection=lt://MEDIA1234567890abcdef");
await driver.findElement(By.id("recordButton")).click();
await driver.executeScript("lambda-audio-start");
// ...
await driver.executeScript("lambda-audio-stop");
```

</TabItem>

</Tabs>

---

## Execution Rules

- Audio must be **injected before** triggering the microphone in the app. The last injected audio is the active input.
- The session must be created with `enableAudioInjection: true`. Hooks called without the capability return **HTTP 403 Forbidden**.
- Calling `lambda-audio-start` before any file has been injected returns **HTTP 400** with `AUDIO_INJECTION_MEDIA_FILE_NOT_PROVIDED_ERROR`.
- Multiple injections in the same session — the last injected audio is used on the next `lambda-audio-start`.
- The app must be granted microphone permission. Audio Injection does **not** bypass permission prompts.

---

## Best Practices

- Keep audio files short (under 5 minutes) for predictable timing.
- Use 16 kHz mono PCM-encoded MP3 or WAV for best compatibility across devices.
- Inject the audio file once at session start, then call `lambda-audio-start` / `lambda-audio-stop` around your test steps for precise control.
- For voice-recognition tests, allow the device 1-2 seconds of silence before injecting speech to let the recognizer initialize.

---

## FAQs

**Q. Can I use Audio Injection with my own automation framework?**

Yes — Audio Injection is a server-side feature controlled entirely by capabilities and `executeScript` hooks. It works with any Appium- or Selenium-compatible framework.

**Q. Does Audio Injection work in parallel test runs?**

Yes — each session has its own isolated injection pipeline. Multiple parallel sessions can inject different audio files simultaneously without interference.

**Q. What audio formats give the best results?**

16 kHz mono MP3 or WAV files give the most consistent results across both Android and iOS. iOS internally upscales to 48 kHz; Android operates natively at 16 kHz.

**Q. My speech-to-text app isn't picking up the injected audio. What's happening?**

Confirm:
1. `enableAudioInjection: true` is set on the session.
2. `lambda-audio-injection=<url>` was called **before** `lambda-audio-start`.
3. The app has been granted microphone permission.
4. Some apps (e.g., Google Recorder on Pixel) use privileged hardware audio paths that bypass standard injection — use a different recorder app to verify.

**Q. Can I switch audio files mid-session?**

Yes — call `lambda-audio-injection=<new_url>` followed by `lambda-audio-start`. The new file replaces the previous one immediately.

---

## Related Features

- [Camera Image Injection](/docs/camera-image-injection/) — Inject images into the device camera
- [Video Injection](/docs/video-injection/) — Inject videos into the device camera
- [Biometric Authentication](/docs/biometric-authentication/) — Simulate fingerprint/face authentication

---

**Need help?** Contact <a href={`${BRAND_URL}/support/`}>Support</a> or chat with us at the bottom-right of any page.
