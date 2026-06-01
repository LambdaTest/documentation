---
id: upload-files-using-lambdatest
title: Upload Files Using TestMu AI Selenium Grid
sidebar_label: Upload Files to the Browser
description: Upload files to the TestMu AI Selenium Grid and use them in automation test scripts across 3000+ browsers.
keywords:
  - upload files selenium grid cloud
  - lambda userFiles capability
  - file upload automation testing selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/upload-files-using-testmu/
site_name: TestMu AI
slug: upload-files-using-testmu/
canonical: https://www.testmuai.com/support/docs/upload-files-using-testmu/
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
          "name": "Upload Files Using TestMu AI",
          "item": `${BRAND_URL}/support/docs/upload-files-using-testmu/`
        }]
      })
    }}
></script>

# Upload Files Using TestMu AI Selenium Grid

In Selenium automation testing, you may need to test the upload functionality on a web app or website. TestMu AI lets you test the upload feature on the cloud-based Selenium Grid across 3000+ browser and OS combinations.

This document explains how to upload a file on the TestMu AI platform and access it via an automation test script.

## How to Upload Files on TestMu AI Platform
---

Upload files to the cloud-based Selenium Grid using the [API for uploading user-files](/api-doc/).

1. Open [TestMu AI's API for uploading user-files](/api-doc/). <img loading="lazy" src={require('../assets/images/uploads/upload-files.webp').default} alt="Upload file" width="1281" height="721" className="doc_img"/>
2. Click on the Lock icon to authorize your account. <img loading="lazy" src={require('../assets/images/uploads/upload-files-1.webp').default} alt="lock icon" width="1281" height="721" className="doc_img"/>]
3. Enter your TestMu AI username and access key to validate your credentials. Click the "Authorise" button to verify the credentials, and click Close to close the window. <img loading="lazy" src={require('../assets/images/uploads/upload-files-2.webp').default} alt="authorize button" width="1281" height="722" className="doc_img"/>


> Get your TestMu AI Username and Access Key from your [TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the "key" icon in the top right corner.
<img loading="lazy" src={require('../assets/images/uploads/access-key.webp').default} alt="automation key" width="1281" height="721" className="doc_img"/>

4. Click on the "Try it out" button. <img loading="lazy" src={require('../assets/images/uploads/upload-files-3.webp').default} alt="choose file" width="1281" height="721" className="doc_img"/>
5. Select the file using the "Choose File" button and click Execute to upload it on the TestMu AI platform. <img loading="lazy" src={require('../assets/images/uploads/upload-files-4.webp').default} alt="200 status code" width="1281" height="721" className="doc_img"/>
   

> **Note**: You can upload multiple files to lambda storage. A maximum of 150 files can be uploaded per organization. The file size limit is 20 MB per API call. If your total file sizes reach the limit, upload your files in multiple API calls.

Once the file uploads successfully, you will see a response body with 200 response code, as shown in the image below: <img loading="lazy" src={require('../assets/images/uploads/upload-files-5.webp').default} alt="upload file" width="1281" height="721" className="doc_img"/>

## How to Test the Uploaded File on TestMu AI Platform
---

Test the uploaded file on the TestMu AI platform to perform automation testing on the cloud-based Selenium Grid.

Add the [desired capability](https://www.testmuai.com/capabilities-generator/) into your automation script for file upload.

For example: If you uploaded 3 files named "804402.png", "file_example_JPG_2500kB.jpg", and "Sample_File_To_Upload.txt", add the following desired capability:

**Java**

```java
HashSet<String> ab = new HashSet<>();
ab.add("Sample-Spreadsheet-10-rows.csv");
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Upload");
capabilities.setCapability("name","Upload Files");
capabilities.setCapability("browserName", "Chrome");
capabilities.setCapability("browserVersion","104");
capabilities.setCapability("platformName", "Windows 10");
capabilities.setCapability("lambda:userFiles",ab);
```

**C#**

```csharp
//HashMap
string testName = callStack[0].ToString();
InitCaps
String[] ltFile = new string[] { "file-name.csv" };

// Capabilities
capabilities.AddAdditionalOption("lambda:userFiles", ltFile);
```

**PHP**

```javascript
$capabilities = array(
    .
    .
"lambda:userFiles" => [
"804402.png",
"file_example_JPG_2500kB.jpg",
"Sample_File_To_Upload.txt"
])
```

**Python**

```py
capabilities = {
      .
      .
"lambda:userFiles" : [
"804402.png",
"file_example_JPG_2500kB.jpg",
"Sample_File_To_Upload.txt"
]
}
```

**JavaScript**

```js
var capabilities = {
    .
    .
"lambda:userFiles" : [
"804402.png",
"file_example_JPG_2500kB.jpg",
"Sample_File_To_Upload.txt"
]
}
```

Now you can use the uploaded files in your automation test script. 

The following table shows the file path for uploaded files on both desktop and mobile operating systems.

|Operating System  | Default Download Path |
|------------- | --------------------------|
| Linux | /home/ltuser/Downloads |
| Windows | C:\\Users\ltuser\Downloads |
| macOS | /Users/ltuser/Downloads |
| Android | /storage/emulated/0/Android/data/com.android.chrome/files/Download/ |
| iOS | /Users/ltuser/Downloads/ios/media |

For example, to upload a file on a web page via test script, use the following Java code (on Windows and macOS):

```java
   // If the file is 804402.png, and testing environment is Windows OS
   WebElement addFile = driver.findElement(By.xpath(".//input[@type='file']"));
   addFile.sendKeys("C:\\Users\\ltuser\\Downloads\\804402.png");

   // If the file is 804402.png, and testing environment is macOS
   WebElement addFile = driver.findElement(By.xpath(".//input[@type='file']"));
   addFile.sendKeys("/Users/ltuser/Downloads/804402.png");
```

* * *

# Download Files from TestMu AI Storage During Test Execution
---

Retrieve files from TestMu AI cloud storage directly to the machine running your test during Selenium automation testing.

## Prerequisites
---

Verify the following before using the download hook.

1. Upload files to TestMu AI storage using the [file upload API](https://www.testmuai.com/support/api-doc/).
2. Confirm the exact file names stored in lambda storage.

## Download Hook Implementation
---

Use the executeScript command to fetch files from lambda storage.

### Basic Syntax

```
driver.executeScript("lambda-files-download=file_name")
```



* * *

You can now successfully upload files and use them with Selenium Automation testing on TestMu AI's cloud server. If you face any issues, reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>, or mail us at [support@testmuai.com](mailto:support@testmuai.com). <br />Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Upload Files Using TestMu AI
      </span>
    </li>
  </ul>
</nav>
