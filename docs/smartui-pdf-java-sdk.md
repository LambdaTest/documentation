---
id: smartui-pdf-java-sdk
title: Upload PDFs via Java SDK
sidebar_label: Java SDK Upload
description: Learn how to upload PDF files to SmartUI using the Java SDK for programmatic visual regression testing.
keywords:
  - PDF Java SDK
  - SmartUI Java SDK
  - Visual Regression Testing
  - PDF Testing
  - Java Development
url: https://www.lambdatest.com/support/docs/smartui-pdf-java-sdk/
site_name: LambdaTest
slug: smartui-pdf-java-sdk/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "SmartUI PDF Java SDK",
          "item": "https://www.lambdatest.com/support/docs/smartui-pdf-java-sdk/"
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using Smart UI

- Java 8 or higher installed on your system
- Maven or Gradle build tool
- Familiarity with Java development
- Visit the [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

## Step 1: Establishing a SmartUI Project

To initiate a SmartUI PDF Comparison Project, adhere to the following instructions:

1. Navigate to the [SmartUI Projects Page](https://smartui.lambdatest.com/).
2. Tap on the `new project` button.
3. Specify your platform type as `PDF`.
4. Provide your `project` name, designate `approvers`, and add `tags` (optional).
5. Confirm your entry by clicking on **Submit**.

Once your project is active, retrieve your `Project Token` from the application. Here's an example of a project token:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Step 1: Clone the Sample Project

First, clone the sample project to get started:

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample.git
cd junit-selenium-sample
```

## Step 2: Install the SmartUI Java SDK

Add the SmartUI Java SDK to your `pom.xml`:

```xml
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-java-sdk</artifactId>
    <version>1.0.18</version>
</dependency>
```

Then compile your project:

```bash
mvn clean compile
```

## Step 3: Set up your credentials

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$env:LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

## Step 4: Upload PDFs using Java SDK

You can upload PDFs in two modes:

<Tabs className="docs__val">

<TabItem value="local" label="Local Mode" default>

Upload pre-existing PDFs from your local machine:

> 📁 **Sample File**: [`SmartuiPdfLocalTest.java`](https://github.com/LambdaTest/junit-selenium-sample/blob/master/src/test/java/com/smartuiPdf/SmartuiPdfLocalTest.java)

```java
import io.github.lambdatest.SmartUIConfig;
import io.github.lambdatest.SmartUIPdf;
import io.github.lambdatest.models.FormattedResults;

public class SmartuiPdfLocalTest {
    public void uploadLocalPdf() throws Exception {
        String projectToken = System.getenv("PROJECT_TOKEN");
        
        SmartUIConfig config = new SmartUIConfig()
            .withProjectToken(projectToken)
            .withFetchResult(true);

        SmartUIPdf pdfUploader = new SmartUIPdf(config);

        // Upload PDF file
        String pdfPath = "path/to/your/document.pdf";
        FormattedResults result = pdfUploader.uploadPDF(pdfPath);

        System.out.println("Upload result: " + result);
    }
}
```

</TabItem>

<TabItem value="cloud" label="Cloud Mode">

Upload PDFs downloaded during LambdaTest cloud test execution:

> 📁 **Sample File**: [`SmartuiPdfCloudTest.java`](https://github.com/LambdaTest/junit-selenium-sample/blob/master/src/test/java/com/smartuiPdf/SmartuiPdfCloudTest.java)

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;

public class SmartuiPdfCloudTest {
    public void uploadCloudPdf(WebDriver driver) throws Exception {
        String projectToken = System.getenv("PROJECT_TOKEN");
        
        // Download PDF from cloud session
        String base64Content = (String) ((JavascriptExecutor) driver)
            .executeAsyncScript("lambda-file-content=LambdaTest.pdf");
        
        // Convert base64 to PDF file
        byte[] pdfBytes = Base64.getDecoder().decode(base64Content);
        File pdfFile = new File("downloaded.pdf");
        try (FileOutputStream fos = new FileOutputStream(pdfFile)) {
            fos.write(pdfBytes);
        }

        // Upload to SmartUI
        SmartUIConfig config = new SmartUIConfig()
            .withProjectToken(projectToken)
            .withFetchResult(true);

        SmartUIPdf pdfUploader = new SmartUIPdf(config);
        FormattedResults result = pdfUploader.uploadPDF(pdfFile.getAbsolutePath());

        System.out.println("Upload result: " + result);
    }
}
```

</TabItem>

</Tabs>

## Step 5: Configuration Options

| Method | Description |
|-------|-------------|
| `.withProjectToken(token)` | Required. Your SmartUI project token. |
| `.withFetchResult(true)` | Optional. Returns structured test results. |
| `.withBuildName("v2.1")` | Optional. Assign a custom build name. |

## Step 6: Run your tests

```bash
mvn test
```

## Advanced Java SDK Usage

### Batch Upload Example

```java
public class SmartuiPdfBatchTest {
    public void uploadMultiplePdfs() throws Exception {
        String projectToken = System.getenv("PROJECT_TOKEN");
        
        SmartUIConfig config = new SmartUIConfig()
            .withProjectToken(projectToken)
            .withFetchResult(true)
            .withBuildName("Batch-Upload-v1.0");

        SmartUIPdf pdfUploader = new SmartUIPdf(config);

        String[] pdfPaths = {
            "documents/report1.pdf",
            "documents/report2.pdf",
            "documents/specification.pdf"
        };

        for (String pdfPath : pdfPaths) {
            FormattedResults result = pdfUploader.uploadPDF(pdfPath);
            System.out.println("Uploaded " + pdfPath + ": " + result);
        }
    }
}
```

### Error Handling

```java
public class SmartuiPdfErrorHandling {
    public void uploadWithErrorHandling() {
        try {
            String projectToken = System.getenv("PROJECT_TOKEN");
            
            SmartUIConfig config = new SmartUIConfig()
                .withProjectToken(projectToken)
                .withFetchResult(true);

            SmartUIPdf pdfUploader = new SmartUIPdf(config);
            FormattedResults result = pdfUploader.uploadPDF("document.pdf");
            
            System.out.println("Upload successful: " + result);
            
        } catch (Exception e) {
            System.err.println("Upload failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

## Use Cases

- **Enterprise Applications**: Integrate PDF testing into large-scale Java applications
- **Test Automation Frameworks**: Build comprehensive test suites with PDF validation
- **CI/CD Integration**: Automate PDF testing in Java-based deployment pipelines
- **Custom Tools**: Develop specialized tools for PDF comparison and validation
