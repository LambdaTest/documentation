---
id: real-time-upload-and-download-files
title: Upload and Download Files
hide_title: false
sidebar_label: Upload and Download Files
description: Easily upload and download files during remote testing with TestMu AI. Manage cross-platform file transfers for seamless workflows across desktop and mobile devices.
keywords:
  - real time testing in testmu ai
  - testmu ai real time testing feature
  - online real time testing
  - free cross browser testing tool
  - cross browser compatibility testing tool
  - online real time website testing
  - test website in different screen sizes
  - ie browser compatibility testing tool
  - test on gionee elfie e7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.testmu.ai/support/docs/real-time-upload-and-download-files
site_name: LambdaTest
slug: real-time-upload-and-download-files
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Real Time Upload and Download Files",
          "item": "https://www.lambdatest.com/support/docs/real-time-upload-and-download-files/"
        }]
      })
    }}
></script>
The Upload and Download Files feature allows you to manage files directly within remote testing environments. This functionality enhances the testing process by allowing seamless file transfers between local and remote environments across desktop and mobile platforms.

## Key Benefits

- Direct file upload to remote testing environments
- Cross-platform file management support
- Integrated download capability for test outputs
- Seamless integration with existing manual testing workflows

## Steps to Upload or Download the Files

<Tabs className="docs__val">
<TabItem value="web-browser" label="Web Browser" default>

**Step 1 :** Log in to the [Web Browser Testing](https://app.lambdatest.com/console/realtime/browser/desktop) dashboard.

**Step 2 :** Select your required OS and relevant browser, and device from the listing to launch your test session.

**Step 3 :** Click on Files and Media from the toolbar.

**Step 4 :** Click **Uploads / Downloads** button Upload or Downlaod the file.

<img loading="lazy" src={require('../assets/images/real-time-testing/key-features/upload-download-web-browser.png').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

</TabItem>

<TabItem value="mobile-browser" label="Mobile Browser" default>

**Step 1 :** Log in to the [Virtual Mobile](https://app.lambdatest.com/console/realtime/browser/mobile) dashboard from the **Web Browser Testing** section.

**Step 2 :** Select your required OS and relevant browser, and device from the listing to launch your test session.

**Step 3 :** Click on Files and Media from the toolbar.

**Step 4 :** Click **Uploads / Downloads** button Upload or Downlaod the file.

<img loading="lazy" src={require('../assets/images/real-time-testing/key-features/upload-download-mobile-browser.png').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

</TabItem>

<TabItem value="mobile-app" label="Mobile App" default>

**Step 1 :** Log in to the [Virtual Mobile](https://app.lambdatest.com/console/realtime/app) dashboard from the **App Testing** section.

**Step 2 :** Select your OS and the required device, upload your app and then launch your test session.

**Step 3 :** Click on Files and Media from the toolbar.

**Step 4 :** Click **Uploads / Downloads** button Upload or Downlaod the file.

<img loading="lazy" src={require('../assets/images/real-time-testing/key-features/upload-download-app.png').default} alt="zebrunner integration" width="1281" height="722" className="doc_img"/>

</TabItem>
</Tabs>

## Supported Platform Compatibility

<Tabs className="docs__val">
<TabItem value="android" label="Android" default>

- **Supported Versions :** Android 7 and above.

#### File Upload Path
- **Android 10 and above :** Uploaded files will be accessible through the file picker in the "Downloads" folder.
- **Below Android 10 :** Files will be uploaded to the "Downloads" folder due to the absence of a "Documents" folder.

</TabItem>

<TabItem value="ios" label="iOS" default>

- **Supported Versions :** iOS 13 and above.
- **Upcoming Support :** iOS 18 support is planned for a future release.
- **Upload Location :** Files can be accessed from the "Downloads" section in the Files app.

#### Browser-Specific Download Locations:
- **Firefox :** Files are saved in the "Firefox" folder.
- **Chromium Browsers (e.g., Chrome, Edge) :** Files are stored in the "Chromium" folder.
- **Safari :** Files are downloaded to the "Downloads" folder.

</TabItem>

<TabItem value="windows" label="Windows" default>

- **Supported Versions :** Windows versions newer than XP and Windows 7 with Internet Explorer 8, 9, or 10.
- **Download Location :** Files are stored in the C:/ or E:/Downloads folder.
- **Upload Location :** Uploaded files appear in the "Downloads" folder.

</TabItem>

<TabItem value="macos" label="macOS" default>

- **Supported Versions :** macOS Sierra (version 10.12) and above.
- **Download Location :** Downloaded files are accessible under "Downloads" in Finder.
- **Upload Location :** Files can be found in the "Downloads" folder after uploading.

</TabItem>
</Tabs>

## File Types and Sizes

<Tabs className="docs__val">
<TabItem value="upload" label="Uploading Files" default>

| File Type | Supported Formats | Maximum File Size |
|-----------|-------------------|-------------------|
| Image | JPG, JPEG, PNG, GIF, BMP | 15 MB |
| Video | MP4, MOV, 3GP | 15 MB |
| Non-media | XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, PPT, Contacts | 15 MB |

</TabItem>
<TabItem value="download" label="Downloading Files" default>

| File Type | Supported Formats |
|-----------|-------------------|
|File Size  | The maximum total file size supported for download is 50 MB. <br /> The combined size of all the files you want to download must not exceed 50 MB. |

</TabItem>
</Tabs>

:::info
- **Number of File Uploads per Session :** You can upload 5 files max per testing session.

- **File Storage Duration :** All files uploaded to Lambdatest servers, whether media or non-media, will be retained for a period of 30 days. After this period, the files will be automatically purged from the servers.

<!-- - **Non-Media File Considerations for iOS :** For non-media files on iOS, it is imperative to ensure that the iOS app has the `UIFileSharingEnabled` and `LSSupportsOpeningDocumentsInPlace` keys set to `true` in the `Info.plist` file. -->
:::
