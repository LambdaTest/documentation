---
id: upload-files-using-lambdatest
title: Upload Files Using TestMu AI Selenium Grid
hide_title: true
sidebar_label: Upload Files Using TestMu AI Selenium Grid
description: TestMu AI Selenium Grid allows you to upload any file inside your Selenium test scripts, to ensure cross-browser compatibility on over 3000+ browsers and OS. 
keywords:
  - upload files
  - upload files inside selenium scripts
  - upload files using testmu ai
  - testmu ai upload files
  - upload files selenium
url: https://www.testmu.ai/support/docs/upload-files-using-testmu
site_name: LambdaTest
slug: upload-files-using-testmu
canonical: https://www.testmu.ai/support/docs/upload-files-using-testmu/
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

# Upload Files Using <BrandName /> Selenium Grid

In Selenium automation testing, you might have come across the need to test the upload functionality on a web app or a website. <BrandName /> now allows you to work with upload file functionality on the cloud-based Selenium Grid and test the upload feature on 3000+ browser and OS combinations.

In this document, you will see how you can upload a file on the <BrandName /> platform and access it via an automation test script.

## How To Upload Files On <BrandName /> Platform

* * *

You can upload the files on the <BrandName /> cloud based Selenium Grid, using our [API for uploading user-files](/api-doc/). Follow the steps below to learn how:

*   Open [<BrandName />'s API for uploading user-files](/api-doc/) <img loading="lazy" src={require('../assets/images/uploads/upload-files.webp').default} alt="Upload file" width="1281" height="721" className="doc_img"/>
*   Click on the Lock icon to authorize your account. <img loading="lazy" src={require('../assets/images/uploads/upload-files-1.webp').default} alt="lock icon" width="1281" height="721" className="doc_img"/>]
*   Enter your <BrandName /> username and access key, in the box that appears, to validate your credentials. Once done, click on the "Authorise button to verify the credentials, and click on Close to close the window. <img loading="lazy" src={require('../assets/images/uploads/upload-files-2.webp').default} alt="authorize button" width="1281" height="722" className="doc_img"/>


> To get your <BrandName /> Username and Access Key, visite your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) and click on the "key" icon, present on the top right corner.
<img loading="lazy" src={require('../assets/images/uploads/access-key.webp').default} alt="automation key" width="1281" height="721" className="doc_img"/>

*   Then click on the "Try it out" button. <img loading="lazy" src={require('../assets/images/uploads/upload-files-3.webp').default} alt="choose file" width="1281" height="721" className="doc_img"/>
*   Once your authorization is successful and you click on the Try it out button, an option to select the file will appear on your screen. Choose the file to be uploaded using the "Choose File" button and click on Execute to upload it on the <BrandName /> platform. <img loading="lazy" src={require('../assets/images/uploads/upload-files-4.webp').default} alt="200 status code" width="1281" height="721" className="doc_img"/>
   

> **Note**: You can upload multiple files to our lambda storage. A maximum of 150 files can be uploaded per organization. We have limit of 20 MB files size per API. So if you are total file sizes reach the limit, please upload your files in multiple API calls.

Once the file is successfully uploaded, you will see a response body with 200 response code, as shown in the image below: <img loading="lazy" src={require('../assets/images/uploads/upload-files-5.webp').default} alt="upload file" width="1281" height="721" className="doc_img"/>

## How To Test The Uploaded File On <BrandName /> Platform

* * *

Now once the file is uploaded successfully, you can test this file on the <BrandName /> platform, to perform automation testing on cloud-based Selenium Grid on over 3000 browser and OS combinations.

To do so, you need to first add the [desired capability](https://www.lambdatest.com/capabilities-generator/) into your automation script for file upload.

For example: Suppose you uploaded 3 files with name "804402.png", "file_example_JPG_2500kB.jpg", and "Sample_File_To_Upload.txt", then the desired capability to be added will be:

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

Now you can use the files uploaded for your use case in the automation test script. 

Shown below is the file path for uploading on both desktop and mobile operating systems.

|Operating System  | Default Download Path |
|------------- | --------------------------|
| Linux | /home/ltuser/Downloads |
| Windows | C:\\Users\ltuser\Downloads |
| macOS | /Users/ltuser/Downloads |
| Android | /storage/emulated/0/Android/data/com.android.chrome/files/Download/ |
| iOS | /Users/ltuser/Downloads/ios/media |

For example, let's say you want to upload a file on a web page via test script, then the sample Java code for this operation (on Windows and macOS) will be:

```java
   // If the file is 804402.png, and testing environment is Windows OS
   WebElement addFile = driver.findElement(By.xpath(".//input[@type='file']"));
   addFile.sendKeys("C:\\Users\\ltuser\\Downloads\\804402.png");

   // If the file is 804402.png, and testing environment is macOS
   WebElement addFile = driver.findElement(By.xpath(".//input[@type='file']"));
   addFile.sendKeys("/Users/ltuser/Downloads/804402.png");
```

* * *

# Download Files from <BrandName /> Storage while test execution

During Selenium automation testing, there are scenarios where you need to retrieve files from <BrandName />'s cloud storage directly to the machine running your test. <BrandName /> provides a download hook that enables you to fetch files from lambda storage seamlessly during test execution.


Before using the download hook, ensure that:
- Files are already uploaded to <BrandName /> storage using the [file upload API](https://www.lambdatest.com/support/api-doc/)
- You have the exact file names stored in lambda storage

## Download Hook Implementation

### Basic Syntax

The download hook uses a simple executeScript command to fetch files from lambda storage:

```
driver.executeScript("lambda-files-download=file_name")
```



* * *

That's it! You can now successfully upload files and use them with Selenium Automation testing on <BrandName />'s cloud server. If you face any issues, please feel free to reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>, or you can even mail us at [support@testmu.ai](mailto:support@testmu.ai) <br />Happy Testing!

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
        Upload Files Using <BrandName />
      </span>
    </li>
  </ul>
</nav>
