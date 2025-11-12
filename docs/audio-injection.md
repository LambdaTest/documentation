---
id: audio-injection
title: Audio Injection on iOS Real Devices
sidebar_label: Audio Injection
description: Inject audio content in your tests with LambdaTest to simulate microphone inputs for automated testing, enhancing your app's audio capabilities.

keywords:
  - audio injection
  - app test automation
  - microphone input
  - voice commands
  - audio recording
  - lambdatest audio testing
  - framework on lambdatest
  - app testing appium
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/audio-injection/
site_name: LambdaTest
slug: audio-injection/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Audio Injection",
          "item": "https://www.lambdatest.com/support/docs/audio-injection/"
        }]
      })
    }}
></script>

# Audio Injection on iOS Real Devices
<RealDeviceTag value="Real Device" /> 
Audio Injection allows you to inject microphone input on real iOS devices in the LambdaTest Real Device Cloud.  
Use it to test audio-driven flows such as audio verification and in-app recording—without manual mic input.

## Key Use Cases
- In-app audio recording  
- Audio-based verification/KYC flows  



> This feature is currently in Beta. We are actively refining it based on real-world usage and feedback.
---
## Supported APIs & Devices
- **API:** [AVAudioRecorder](https://developer.apple.com/documentation/avfaudio/avaudiorecorder)  
- **Supported Devices:** iOS **14 and above** 

---

## Step 1: Upload Audio File
**Supported formats:** `.mp3`, `.wav`  
**Max size:** 15 MB  , 100 MB respectively

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

---

## Step 2: Enable Audio Injection via Capabilities

`media` can be set here or injected later in the test.

**Python**
```python
desired_caps = {
  "enableAudioInjection": True,
  "media": "lt://MEDIA123456789"  # optional
}
```

---

## Step 3: Control Audio in Test
Inject the uploaded audio file from LambdaTest into the recorder or app when you are at the dedicated space for microphone input.

**Inject File**
```python
driver.execute_script('lambda-audio-injection: {"action":"inject","arguments":{"media_url":"lt://MEDIA123..."}}')
```

:::note
The injected audio can come from a standalone audio file **or** from the audio track of a recorded video.
:::
---
