---
id: appium-upload-media
title: Upload File and Media
hide_title: true
sidebar_label: Upload Files and Media
description: Seamlessly upload media and files on Real Devices during app and browser automation to enhance your testing scenarios and ensure comprehensive validation of your application's functionalities.
keywords:
  - files upload
  - app test automation
  - browser test automation
  - media upload
  - upload automate
  - framework on testmu ai
  - app testing appium
  - app testing
  - browser testing
  - real devices
url: https://www.testmuai.com/support/docs/uploadMedia/
site_name: TestMu AI
slug: upload-media/
canonical: https://www.testmuai.com/support/docs/upload-media/
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
          "name": "Camera Image Injection",
          "item": `${BRAND_URL}/support/docs/uploadFileMedia/`
        }]
      })
    }}
></script>

# Uploading Files and Media on Real Devices
<RealDeviceTag value="Real Device" />
<BrandName />'s file upload feature provides a convenient way to enhance your testing scenarios by allowing you to upload various media and non-media files directly to <BrandName />'s cloud devices. In this section, we'll guide you through the process of uploading files, highlight the supported file types, and explain how to use the `uploadMedia` capability while running your test scripts. The same capability works for both **App** and **Browser** (web) automation — no separate capability to learn.

## Objectives
By the end of this topic, you will be able to:

1. Use Upload File and Media feature in Manual App testing.
2. Use Upload File and Media feature in App Automation.
3. Use Upload File and Media feature in Browser (web) Automation.

-----

## File Storage Paths on Devices

Where an uploaded file lands on the device depends on whether it is an **App** or **Browser** session. Everything else about the upload flow is identical.

| Category        | Platform | App session location                             | Browser session location                                        | File Type         |
|-----------------|----------|--------------------------------------------------|-----------------------------------------------------------------|-------------------|
| Media Files     | Android  | Default gallery app, `/sdcard/Pictures` / `/sdcard/Movies` | Downloads (reachable from the browser file picker)     | Images, Videos    |
|                 | iOS      | Camera Roll, `/private/var/mobile/Media/DCIM/`   | Photo Library (reachable from the native *Photo Library* picker) | Images, Videos    |
| Non-Media Files | Android  | Default Downloads folder of the device           | Downloads (reachable from the browser file picker)              | Files             |
|                 | iOS      | App’s directory: Files app → On My iPhone → Your app's directory | Files app → On My iPhone → **Chrome** (even in Safari) | Files             |

### Supported File Types

<BrandName /> supports various file types for upload, ensuring flexibility in your testing scenarios. Below are the supported file types:

- **Images**: JPG, JPEG, PNG, GIF, BMP (Maximum size: 10 MB)
- **Videos**: MP4  (Maximum size: 50 MB)
- **Files**: XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (Maximum size: 15 MB)

## Upload File and Media feature in App & Browser Automation

This section provides a comprehensive guide on leveraging this feature within automation tests. The steps are identical for **app automation** and **browser (web) automation** on real devices. It comprises two fundamental steps:

- Uploading the files and obtaining the `media_url`.
- Using `media_url` into your tests using `uploadMedia` capability.

### Step 1 : Uploading the files on TestMu AI Cloud

#### Using REST API

You can use the following curl command to upload any file `media` and `non-media` from your system to the <BrandName /> cloud.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --user "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/image.jpeg"" -F "type=image" -F "custom_id=SampleImage"`
}
</CodeBlock>
</div>

**Request Parameters**
- `media_file`: This parameter denotes the media file to be uploaded from your local.
- `type`: This parameter denotes file type out of image,video and doc. 
- `custom_id`: This parameter specifies a custom identifier for the media file.

Below is a sample response demonstrating the return of the `media_url` parameter value:

```bash
{
    "media_url": "lt://MEDIAb48ab11c599944ee9dcd26b3e2978d3c",
    "name": "sample.csv",
    "status": "success",
    "custom_id": "Sample"
}
```
#### Using App Automation Interface

You can also utilize <BrandName />'s user-friendly UI to upload the files on TestMu AI cloud and get the `media_url` using the upload button located at the top of the automation dashboard.

----

### Step 2 : Setting Capability in Your Test Script

Once the files are uploaded to <BrandName />'s cloud, seamlessly integrate files into your automation tests via the capability. Set the **uploadMedia** capability to the **media_url** parameter returned in the API response.

<Tabs className="docs__val">
  <TabItem value="Java" label="Java">
    <div className="lambdatest__codeblock">
      <CodeBlock className="language-java">
        {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("uploadMedia", Arrays.asList("lt://MEDIAfcdb39b9602d474f825d6002416a3969", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"));`}
      </CodeBlock>
    </div>
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
    <div className="lambdatest__codeblock">
      <CodeBlock className="language-javascript">
        {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("uploadMedia", ["lt://MEDIAfcdb39b9602d474f825d6002416a3969", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"]);`}
      </CodeBlock>
    </div>
  </TabItem>
  
  <TabItem value="python" label="Python" default>
    <div className="lambdatest__codeblock">
      <CodeBlock className="language-python">
        {`desired_capabilities = {
  "uploadMedia": ["lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"]
}`}
      </CodeBlock>
    </div>
  </TabItem>
</Tabs>

:::note

- Each automation session permits a maximum of five file uploads.
- The `uploadMedia` capability is set the same way for **app** and **browser (web)** automation.
- In manual testing, iOS app needs to installed first to upload non-media files.
- For non-media files, make sure your iOS app's Info.plist file includes the UIFileSharingEnabled and LSSupportsOpeningDocumentsInPlace keys set to true. This configuration is necessary to enable your app's folder accessibility within the Files app.

:::

:::info Browser automation — differences to note
- **iOS documents** uploaded in a browser session appear under **Chrome** in the Files app, even when testing in Safari. This is by design, as only Chrome on iOS exposes a browsable file container. Pick the file via *Choose File → On My iPhone → Chrome*.
- **iOS images and videos** appear in the **Photo Library** and are picked from the native *Photo Library* picker.
- On Android, all uploaded files land in **Downloads**, reachable from the browser file picker. Inputs using `accept="image/*"` may open the photo picker instead; the default file input works across the board.
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
      Camera Image Injection
      </span>
    </li>
  </ul>
</nav>
