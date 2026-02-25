---
id: appium-upload-media
title: Upload File and Media
hide_title: true
sidebar_label: Upload Files and Media
description: Seamlessly upload media and files on Real Devices to enhance your testing scenarios and ensure comprehensive validation of your application's functionalities.
keywords:
  - files upload
  - app test automation
  - media upload
  - upload automate
  - framework on testmu ai
  - app testing appium
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/upload-media/
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
          "item": `${BRAND_URL}/support/docs/upload-media/`
        }]
      })
    }}
></script>

# Uploading Files and Media on Real Devices
<RealDeviceTag value="Real Device" />
<BrandName />'s file upload feature provides a convenient way to enhance your testing scenarios by allowing you to upload various media and non-media files directly to <BrandName />'s cloud devices. In this section, we'll guide you through the process of uploading files, highlight the supported file types, and explain how to use `uploadMedia` capability while running your test scripts.

## Objectives
By the end of this topic, you will be able to:

1. Use Upload File and Media feature in Manual App testing.
2. Use Upload File and Media feature in App Automation.

-----

## File Storage Paths on Devices


| Category        | Platform | Location                                             | File Type      |
|-----------------|----------|------------------------------------------------------|----------------|
| Media Files     | Android  | Default gallery app, `/sdcard/Pictures`              | Images         |
|                 |          | Default gallery app, `/sdcard/Movies`                | Videos         |
|                 | iOS      | Camera Roll, `/private/var/mobile/Media/DCIM/`       | Images and Videos |
| Non-Media Files | Android  | Default Downloads folder of the device               | Files          |
|                 | iOS      | App’s directory: Files app → On My iPhone → Your app's directory | Files          |

### Supported File Types

<BrandName /> supports various file types for upload, ensuring flexibility in your testing scenarios. Below are the supported file types:

- **Images**: JPG, JPEG, PNG, GIF, BMP, HEIC (Maximum size: 10 MB)
- **Videos**: MP4  (Maximum size: 50 MB)
- **Files**: XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, GED (Maximum size: 15 MB)

## Upload File and Media feature in App Automation

This section provides a comprehensive guide on leveraging this feature within automation tests. It comprises two fundamental steps:

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
- In manual testing, iOS app needs to installed first to upload non-media files.
- For non-media files, make sure your iOS app's Info.plist file includes the UIFileSharingEnabled and LSSupportsOpeningDocumentsInPlace keys set to true. This configuration is necessary to enable your app's folder accessibility within the Files app.

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
