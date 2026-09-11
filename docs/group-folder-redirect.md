---
id: group-folder-redirects
title: Group Folder Redirect for iOS Apps in Appium Tests
sidebar_label: Group Folder Redirect
description: Learn how to enable Group Folder Redirect for iOS apps during Appium testing on TestMu AI Real Device Cloud.
keywords:
  - testmu ai automation
  - ios app automation
  - group folder redirect
  - appium ios file system testing
  - private app container automation
url: https://www.testmuai.com/support/docs/group-folder-redirects/
site_name: TestMu AI
slug: group-folder-redirects/
canonical: https://www.testmuai.com/support/docs/group-folder-redirects/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/group-folder-redirects/"
    },
    "headline": "Group Folder Redirect for iOS Apps in Appium Tests",
    "description": "Learn how to enable Group Folder Redirect for iOS apps during Appium testing on TestMu AI Real Device Cloud.",
    "url": "https://www.testmuai.com/support/docs/group-folder-redirects/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "testmu ai automation",
      "ios app automation",
      "group folder redirect"
    ],
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Group Folder Redirect for iOS Apps
<RealDeviceTag value="Real Device" /> 
<BrandName /> now supports **Group Folder Redirect** for iOS apps during automation testing with Appium.  
This feature ensures your app uses its **private container directory** instead of the **shared app group container**, which becomes inaccessible after **app resigning** on Real Devices.

:::note Availability
This feature is being rolled out gradually. Please contact your <BrandName /> support representative to get it enabled or you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmuai.com.
:::

---

 ## Use Cases 

- Ensure your app maintains **file system access** after being re-signed on Real Devices.  
- Prevent issues when your app relies on the **shared App Group container**, which becomes inaccessible after resigning.  
- Guarantee consistent **storage and retrieval of files** by using the app’s private container.  

---

## Steps to Enable Group Folder Redirect

### 1. Upload Your Application
- Upload your iOS app to <BrandName /> following standard procedures.  
- Refer to the [**Upload your Application**](/support/docs/application-setup-via-api/#upload-your-application) documentation for detailed instructions.  
- Note the **App ID** returned after uploading, you will use this in your automation scripts.

---

### 2. Configure Desired Capabilities
Include the `groupFolderRedirectEnabled` capability in your Appium desired capabilities and set it to `True`.  

<Tabs>
  <TabItem value="ios" label="iOS">
    <CodeBlock className="language-java">
{`desired_caps = {
    "deviceName":"iPhone 16",
    "platformName":"iOS",
    "platformVersion":"18",
    "isRealMobile": True,
    "app":"YOUR_APP_URL",
    "build":"Sample Build",
    "name":"Sample Test",
    #highlight-next-line
    "groupFolderRedirectEnabled": True
}`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

### 3. Run Your Automation Test
Launch your Appium test, the app will automatically use its private container for all file operations without any code changes.

---

:::info
- <BrandName /> launches an **instrumented version** of your app with **Group Folder Redirect** support.  
- All file system operations that previously relied on the App Group container now use the **private container**.  
- Your tests remain compatible and functional, even after app resigning.
:::
