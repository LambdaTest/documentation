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
url: https://www.testmu.ai/support/docs/smartui-pdf-java-sdk
site_name: LambdaTest
slug: smartui-pdf-java-sdk
canonical: https://www.testmu.ai/support/docs/smartui-pdf-java-sdk/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "SmartUI PDF Java SDK",
          "item": `${BRAND_URL}/support/docs/smartui-pdf-java-sdk/`
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using SmartUI

- Java 8 or higher installed on your system
- Maven or Gradle build tool
- Familiarity with Java development
- Visit the [`TestMu AI SmartUI`](https://smartui.lambdatest.com/) page and log in with your credentials.
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

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
$env:LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

## Step 4: Upload PDFs using Java SDK

You can upload PDFs in two modes:

<Tabs className='docs__val'>

<TabItem value='local' label='Local Mode' default>

Upload pre-existing PDFs from your local machine:

"> 📁 **Sample File**: [`SmartuiPdfLocalTest.java`](https://github.com/LambdaTest/junit-selenium-sample/blob/master/src/test/java/com/smartuiPdf/SmartuiPdfLocalTest.java)

```java

public class SmartuiPdfLocalTest {
    public void uploadLocalPdf() throws Exception {
        String projectToken = System.getenv(PROJECT_TOKEN");

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

<TabItem value='cloud' label='Cloud Mode'>

Upload PDFs downloaded during <BrandName /> cloud test execution:

"> 📁 **Sample File**: [`SmartuiPdfCloudTest.java`](https://github.com/LambdaTest/junit-selenium-sample/blob/master/src/test/java/com/smartuiPdf/SmartuiPdfCloudTest.java)

```java

public class SmartuiPdfCloudTest {
    public void uploadCloudPdf(WebDriver driver) throws Exception {
        String projectToken = System.getenv(PROJECT_TOKEN");

        // Download PDF from cloud session
        String base64Content = (String) ((JavaScriptExecutor) driver)
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

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='pdf-file-management' label='PDF File Management' default>

**PDF File Management**

- Use consistent naming conventions for PDF files
- Organize PDFs in logical directory structures
- Keep PDF files in version control when appropriate
- Document PDF sources and purposes

**Example:**
```java
String[] pdfPaths = {
    documents/reports/report-v1.0.pdf",
    "documents/specs/spec-v2.1.pdf"
};
```

</TabItem>
<TabItem value='project-token-management' label='Project Token Management'>

**Project Token Management**

- Store project token as environment variable
- Never commit tokens to version control
- Use different tokens for different environments
- Rotate tokens regularly

</TabItem>
<TabItem value='build-naming' label='Build Naming'>

**Build Naming**

- Use meaningful build names that include version info
- Include date or version in build names
- Use consistent naming conventions

**Example:**
```java
config.withBuildName(PDF-Comparison-v1.0-" + LocalDate.now());
```

</TabItem>
<TabItem value='error-handling' label='Error Handling'>

**Error Handling**

- Always wrap upload calls in try-catch blocks
- Log errors for debugging
- Handle network failures gracefully
- Implement retry logic for transient failures

</TabItem>
<TabItem value='batch-processing' label='Batch Processing'>

**Batch Processing**

- Process PDFs in batches for efficiency
- Monitor upload progress
- Handle partial failures in batch operations
- Use appropriate batch sizes

</TabItem>
<TabItem value='batch-processing-1' label='Batch Processing'>

**Batch Processing**

- Process PDFs in batches for efficiency
- Monitor upload progress
- Handle partial failures in batch operations
- Use appropriate batch sizes

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='pdf-upload-fails' label='PDF Upload Fails' default>

**Issue: PDF Upload Fails**

**Symptoms**: PDF upload returns error or fails silently

**Possible Causes**:
- Invalid PDF file
- File path incorrect
- File size too large
- Network connectivity issues
- Project token incorrect

**Solutions**:
1. Verify PDF file is valid and not corrupted:
   ```bash
   file document.pdf
   ```

2. Check file path is correct:
   ```java
   File pdfFile = new File(path/to/document.pdf");
   if (!pdfFile.exists()) {
       throw new FileNotFoundException("PDF file not found");
   }
   ```

3. Verify file size is within limits

4. Check network connectivity to <BrandName /> servers

5. Verify PROJECT_TOKEN is set correctly:
   ```bash
   echo $PROJECT_TOKEN
   ```

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: Project Not Found" Error**

**Symptoms**: Error message indicating project cannot be found

**Possible Causes**:
- Incorrect project token
- Project deleted or renamed
- Token from wrong project

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project token directly from Project Settings
3. Ensure token includes the project ID prefix (e.g., `123456#...`)
4. Check for extra spaces or quotes in token

</TabItem>
<TabItem value='upload-returns-null-or-empty-result' label='Upload Returns Null or Empty Result'>

**Issue: Upload Returns Null or Empty Result**

**Symptoms**: Upload completes but result is null or empty

**Possible Causes**:
- `withFetchResult(false)` or not set
- Network timeout
- Server-side processing error

**Solutions**:
1. Enable result fetching:
   ```java
   config.withFetchResult(true);
   ```

2. Check upload response:
   ```java
   FormattedResults result = pdfUploader.uploadPDF(pdfPath);
   if (result == null) {
       // Handle null result
   }
   ```

3. Review error logs for server-side issues

4. Retry upload if transient error

</TabItem>
<TabItem value='maven-dependencies-not-resolving' label='Maven Dependencies Not Resolving'>

**Issue: Maven Dependencies Not Resolving**

**Symptoms**: Maven cannot find `lambdatest-java-sdk` or dependencies fail

**Possible Causes**:
- Incorrect dependency version
- Maven repository access issues
- Network connectivity problems

**Solutions**:
1. Check latest version on [Maven Central](https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk)
2. Clear Maven cache:
   ```bash
   mvn clean
   ```
3. Verify internet connectivity for Maven repository access
4. Check pom.xml for version conflicts

</TabItem>
<TabItem value='batch-upload-partially-fails' label='Batch Upload Partially Fails'>

**Issue: Batch Upload Partially Fails**

**Symptoms**: Some PDFs upload successfully, others fail

**Possible Causes**:
- Individual file issues
- Network interruptions
- Timeout issues
- File size limits

**Solutions**:
1. Implement individual error handling:
   ```java
   for (String pdfPath : pdfPaths) {
       try {
           FormattedResults result = pdfUploader.uploadPDF(pdfPath);
           System.out.println(Uploaded: " + pdfPath);
       } catch (Exception e) {
           System.err.println("Failed: " + pdfPath + " - " + e.getMessage());
       }
   }
   ```

2. Verify each file individually
3. Check file sizes and formats
4. Implement retry logic for failed uploads

</TabItem>
<TabItem value='pdfs-not-appearing-in-dashboard' label='PDFs Not Appearing in Dashboard'>

**Issue: PDFs Not Appearing in Dashboard**

**Symptoms**: Uploads complete but PDFs don't appear in SmartUI dashboard

**Possible Causes**:
- Incorrect project token
- Project name mismatch
- Upload not completed
- Dashboard refresh needed

**Solutions**:
1. Verify PROJECT_TOKEN is correct
2. Check project name matches exactly (case-sensitive)
3. Wait a few moments and refresh dashboard
4. Check upload response for errors
5. Review test execution logs

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [PDF Comparison Overview](/support/docs/smartui-pdf-comparison) for PDF-specific information
- See [PDF API Upload](/support/docs/smartui-pdf-api-upload) for alternative upload methods
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmu.ai or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [PDF Comparison Overview](/support/docs/smartui-pdf-comparison)
- [PDF API Upload](/support/docs/smartui-pdf-api-upload)
- [PDF CLI Upload](/support/docs/smartui-pdf-cli-upload)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)
