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
url: https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/
site_name: TestMu AI
slug: smartui-pdf-java-sdk/
canonical: https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/"
    },
    "headline": "Upload PDFs via Java SDK",
    "description": "Learn how to upload PDF files to SmartUI using the Java SDK for programmatic visual regression testing.",
    "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "PDF Java SDK",
      "SmartUI Java SDK",
      "Visual Regression Testing"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Java 8 or higher installed on your system; Maven or Gradle build tool; Familiarity with Java development; Visit the TestMu AI SmartUI page and log in with your credentials.; Obtain your LT_USERNAME and LT_ACCESS_KEY by clicking on the Access Key button, located at the top right corner of your dashboard..",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Here's an example of a project token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "projectToken = \"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "First, clone the sample project to get started",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/junit-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/junit-selenium-sample.git\ncd junit-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the SmartUI Java SDK to your pom.xml",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<dependency>\n    <groupId>io.github.lambdatest<\/groupId>\n    <artifactId>lambdatest-java-sdk<\/artifactId>\n    <version>1.0.23<\/version>\n<\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Then compile your project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn clean compile"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Set up your credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"${YOUR_LAMBDATEST_USERNAME}\"\nexport LT_ACCESS_KEY=\"${YOUR_LAMBDATEST_ACCESS_KEY}\"\nexport PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Set up your credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"${YOUR_LAMBDATEST_USERNAME}\"\nset LT_ACCESS_KEY=\"${YOUR_LAMBDATEST_ACCESS_KEY}\"\nset PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Set up your credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME=\"${YOUR_LAMBDATEST_USERNAME}\"\n$env:LT_ACCESS_KEY=\"${YOUR_LAMBDATEST_ACCESS_KEY}\"\n$env:PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Upload pre-existing PDFs from your local machine",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "\npublic class SmartuiPdfLocalTest {\n    public void uploadLocalPdf() throws Exception {\n        String projectToken = System.getenv(\"PROJECT_TOKEN\");\n\n        SmartUIConfig config = new SmartUIConfig()\n            .withProjectToken(projectToken)\n            .withFetchResult(true);\n\n        SmartUIPdf pdfUploader = new SmartUIPdf(config);\n\n        // Upload PDF file\n        String pdfPath = \"path/to/your/document.pdf\";\n        FormattedResults result = pdfUploader.uploadPDF(pdfPath);\n\n        System.out.println(\"Upload result: \" + result);\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Upload PDFs downloaded during TestMu AI cloud test execution",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "\npublic class SmartuiPdfCloudTest {\n    public void uploadCloudPdf(WebDriver driver) throws Exception {\n        String projectToken = System.getenv(\"PROJECT_TOKEN\");\n\n        // Download PDF from cloud session\n        String base64Content = (String) ((JavascriptExecutor) driver)\n            .executeAsyncScript(\"lambda-file-content=LambdaTest.pdf\");\n\n        // Convert base64 to PDF file\n        byte[] pdfBytes = Base64.getDecoder().decode(base64Content);\n        File pdfFile = new File(\"downloaded.pdf\");\n        try (FileOutputStream fos = new FileOutputStream(pdfFile)) {\n            fos.write(pdfBytes);\n        }\n\n        // Upload to SmartUI\n        SmartUIConfig config = new SmartUIConfig()\n            .withProjectToken(projectToken)\n            .withFetchResult(true);\n\n        SmartUIPdf pdfUploader = new SmartUIPdf(config);\n        FormattedResults result = pdfUploader.uploadPDF(pdfFile.getAbsolutePath());\n\n        System.out.println(\"Upload result: \" + result);\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 6: Run your tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Batch Upload Example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "public class SmartuiPdfBatchTest {\n    public void uploadMultiplePdfs() throws Exception {\n        String projectToken = System.getenv(\"PROJECT_TOKEN\");\n\n        SmartUIConfig config = new SmartUIConfig()\n            .withProjectToken(projectToken)\n            .withFetchResult(true)\n            .withBuildName(\"Batch-Upload-v1.0\");\n\n        SmartUIPdf pdfUploader = new SmartUIPdf(config);\n\n        String[] pdfPaths = {\n            \"documents/report1.pdf\",\n            \"documents/report2.pdf\",\n            \"documents/specification.pdf\"\n        };\n\n        for (String pdfPath : pdfPaths) {\n            FormattedResults result = pdfUploader.uploadPDF(pdfPath);\n            System.out.println(\"Uploaded \" + pdfPath + \": \" + result);\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Error Handling",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "public class SmartuiPdfErrorHandling {\n    public void uploadWithErrorHandling() {\n        try {\n            String projectToken = System.getenv(\"PROJECT_TOKEN\");\n\n            SmartUIConfig config = new SmartUIConfig()\n                .withProjectToken(projectToken)\n                .withFetchResult(true);\n\n            SmartUIPdf pdfUploader = new SmartUIPdf(config);\n            FormattedResults result = pdfUploader.uploadPDF(\"document.pdf\");\n\n            System.out.println(\"Upload successful: \" + result);\n\n        } catch (Exception e) {\n            System.err.println(\"Upload failed: \" + e.getMessage());\n            e.printStackTrace();\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "String[] pdfPaths = {\n    \"documents/reports/report-v1.0.pdf\",\n    \"documents/specs/spec-v2.1.pdf\"\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "config.withBuildName(\"PDF-Comparison-v1.0-\" + LocalDate.now());"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify PDF file is valid and not corrupted",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   file document.pdf"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check file path is correct",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   File pdfFile = new File(\"path/to/document.pdf\");\n   if (!pdfFile.exists()) {\n       throw new FileNotFoundException(\"PDF file not found\");\n   }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify PROJECT_TOKEN is set correctly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   echo $PROJECT_TOKEN"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable result fetching",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   config.withFetchResult(true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check upload response",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   FormattedResults result = pdfUploader.uploadPDF(pdfPath);\n   if (result == null) {\n       // Handle null result\n   }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clear Maven cache",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "   mvn clean"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Implement individual error handling",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "   for (String pdfPath : pdfPaths) {\n       try {\n           FormattedResults result = pdfUploader.uploadPDF(pdfPath);\n           System.out.println(\"Uploaded: \" + pdfPath);\n       } catch (Exception e) {\n           System.err.println(\"Failed: \" + pdfPath + \" - \" + e.getMessage());\n       }\n   }"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Upload PDFs via Java SDK",
      "description": "Learn how to upload PDF files to SmartUI using the Java SDK for programmatic visual regression testing.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Establishing a SmartUI Project",
          "text": "To initiate a SmartUI PDF Comparison Project, adhere to the following instructions: Navigate to the SmartUI Projects Page. Tap on the new project button. Specify your platform type as PDF. Provide your project name, designate approvers, and add tags (optional). Confirm your entry by clicking on Submit. Once your project is active, retrieve your Project Token from the application. Here's an example of a project token:",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-1-establishing-a-smartui-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 1: Clone the Sample Project",
          "text": "First, clone the sample project to get started:",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 2: Install the SmartUI Java SDK",
          "text": "Add the SmartUI Java SDK to your pom.xml: Then compile your project:",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-2-install-the-smartui-java-sdk"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 3: Set up your credentials",
          "text": "Step 3: Set up your credentials",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-3-set-up-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 4: Upload PDFs using Java SDK",
          "text": "You can upload PDFs in two modes: Upload pre-existing PDFs from your local machine: \"> \ud83d\udcc1 Sample File: SmartuiPdfLocalTest.java Upload PDFs downloaded during TestMu AI cloud test execution: \"> \ud83d\udcc1 Sample File: SmartuiPdfCloudTest.java",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-4-upload-pdfs-using-java-sdk"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 5: Configuration Options",
          "text": "Step 5: Configuration Options",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-5-configuration-options"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Step 6: Run your tests",
          "text": "Step 6: Run your tests",
          "url": "https://www.testmuai.com/support/docs/smartui-pdf-java-sdk/#step-6-run-your-tests"
        }
      ]
    }
  ]) }}
/>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.testmuai.com/demo/).
:::

## Prerequisites for Using SmartUI

- Java 8 or higher installed on your system
- Maven or Gradle build tool
- Familiarity with Java development
- Visit the [`TestMu AI SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

## Step 1: Establishing a SmartUI Project

To initiate a SmartUI PDF Comparison Project, adhere to the following instructions:

1. Navigate to the [SmartUI Projects Page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).
2. Tap on the `new project` button.
3. Specify your platform type as `PDF`.
4. Provide your `project` name, designate `approvers`, and add `tags` (optional).
5. Confirm your entry by clicking on **Submit**.

Once your project is active, retrieve your `Project Token` from the application. Here's an example of a project token:

<VerifiedTag value="Verified" />

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Step 1: Clone the Sample Project

First, clone the sample project to get started:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample.git
cd junit-selenium-sample
```

## Step 2: Install the SmartUI Java SDK

Add the SmartUI Java SDK to your `pom.xml`:

<VerifiedTag value="Verified" />

```xml
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-java-sdk</artifactId>
    <version>1.0.23</version>
</dependency>
```

Then compile your project:

<VerifiedTag value="Verified" />

```bash
mvn clean compile
```

## Step 3: Set up your credentials

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

<Tabs className='docs__val'>

<TabItem value='local' label='Local Mode' default>

Upload pre-existing PDFs from your local machine:

"> 📁 **Sample File**: [`SmartuiPdfLocalTest.java`](https://github.com/LambdaTest/junit-selenium-sample/blob/master/src/test/java/com/smartuiPdf/SmartuiPdfLocalTest.java)

```java

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

<TabItem value='cloud' label='Cloud Mode'>

Upload PDFs downloaded during <BrandName /> cloud test execution:

"> 📁 **Sample File**: [`SmartuiPdfCloudTest.java`](https://github.com/LambdaTest/junit-selenium-sample/blob/master/src/test/java/com/smartuiPdf/SmartuiPdfCloudTest.java)

```java

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

<VerifiedTag value="Verified" />

```bash
mvn test
```

## Advanced Java SDK Usage

### Batch Upload Example

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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
    "documents/reports/report-v1.0.pdf",
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
config.withBuildName("PDF-Comparison-v1.0-" + LocalDate.now());
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

<VerifiedTag value="Verified" />

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
   File pdfFile = new File("path/to/document.pdf");
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
           System.out.println("Uploaded: " + pdfPath);
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
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [PDF Comparison Overview](/support/docs/smartui-pdf-comparison)
- [PDF API Upload](/support/docs/smartui-pdf-api-upload)
- [PDF CLI Upload](/support/docs/smartui-pdf-cli-upload)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
