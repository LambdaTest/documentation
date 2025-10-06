---
id: smartui-pdf-comparison
title: SmartUI Visual Regression Testing for PDF Files
sidebar_label: Smart PDF Comparison 
description: In this documentation, learn how to perform Visual Regression testing of PDFs using SmartUI.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.lambdatest.com/support/docs/smartui-pdf-comparison/  
site_name: LambdaTest
slug: smartui-pdf-comparison/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
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
          "name": "SmartUI PDF Comparison",
          "item": "https://www.lambdatest.com/support/docs/smartui-pdf-comparison/"
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using Smart UI

- Familiarity with HTTP APIs is essential.
- Visit the [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

In the following section, we will walk you through the process of conducting your first Visual Regression test using LambdaTest's SmartUI platform.

<div className="ytframe"> 
<div className="youtube" data-embed="H91z4j5_JvQ">
    <div className="play-button"></div>
</div>
</div>

## Getting Started with PDF Comparison

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/czorj4fbzohf?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

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

## Option 1: Integrating PDFs via API

After setting up your SmartUI Project, you can upload your local PDF files to your project. This will automatically generate a build by capturing snapshots of every page.

Here's how you can upload your PDFs:

1. Retrieve your API `URL Endpoint` post activation of your enterprise plan. To schedule a demonstration, click [here](https://www.lambdatest.com/demo).

2. Append the following parameters to your request payload via `form-body`:

| Variable     | Type   | Description                                                                                                                                      | Required? |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| projectToken | string | This token is required to upload PDF files and validate your project. <br/> Example: `projectToken:123456#1234abcd-****-****-****-************` | Yes       |
| pathToFiles  | array  | Add the path to the PDFs that will be uploaded. <br/> Example: `pathToFiles : [ "path/to/pdf-1", "path/to/pdf-2"]`                                | Yes       |
| buildName    | string | Assign a name of your choice to the build comprising the uploaded PDFs. <br/> Example: `buildName : #<Build_Name>`                                | No        |

:::note 
Only files in `.pdf` format are compatible with this feature.
:::

## Option 2: Uploading PDFs via SmartUI CLI (Alternative Method)

For users who prefer command-line tools, SmartUI provides a CLI to easily upload PDFs and fetch test results.

### Step 1: Install the SmartUI CLI

Install the CLI globally using npm:

```bash
npm install -g @lambdatest/smartui-cli
```
### Step 2: Setup your credentials

<Tabs className="docs__val">

<TabItem value="terminal" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="cmd" label="Windows-CMD" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows-PS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`$Env:LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$Env:LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
$Env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"`}

  </CodeBlock>
</div>

</TabItem>

</Tabs>


<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

### Step 3: Upload PDFs Using CLI

Use the `upload-pdf` command to upload one or multiple PDF files from a directory:

```bash
smartui upload-pdf <directory_or_filename> [options]
```

#### Arguments:
- `directory_or_filename`: Path to a single PDF file or a directory containing multiple PDFs.

#### Options:
- `--fetch-results [filename]`: Fetch test results after upload. Optionally specify an output file (e.g., `results.json`).
- `--buildName <string>`: Assign a custom name to the build.

#### Example Usage:

Upload all PDFs from a folder and name the build:

```bash
smartui upload-pdf ./pdfs/ --buildName "Release-v2.1"
```

Fetch results and save to a file:

```bash
smartui upload-pdf ./spec.pdf --fetch-results results.json
```

This CLI method streamlines PDF uploads and result retrieval, making it ideal for CI/CD pipelines and automated workflows.

## Option 3: Uploading PDFs via SmartUI Java SDK

For developers who prefer programmatic control, SmartUI provides a Java SDK to upload PDFs and manage visual regression testing programmatically.

### Step 1: Clone the Sample Project

First, clone the sample project to get started:

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample.git
cd junit-selenium-sample
```

### Step 2: Install the SmartUI Java SDK

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

### Step 3: Set up your credentials

<Tabs className="docs__val">

<TabItem value="terminal" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="cmd" label="Windows-CMD" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows-PS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`$Env:LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
$Env:LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"
$Env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

### Step 4: Upload PDFs using Java SDK

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

### Step 5: Configuration Options

| Method | Description |
|-------|-------------|
| `.withProjectToken(token)` | Required. Your SmartUI project token. |
| `.withFetchResult(true)` | Optional. Returns structured test results. |
| `.withBuildName("v2.1")` | Optional. Assign a custom build name. |

### Step 6: Run your tests

```bash
mvn test
```

The SDK method provides programmatic control over PDF uploads and is ideal for integration into existing Java-based test automation frameworks.

## Use Cases of Smart PDF Comparison

- **Software Documentation**: Track changes and ensure consistency across document versions.
- **Legal & Compliance**: Spot differences in contracts or regulatory documents.
- **Design Validation**: Verify design updates and maintain visual consistency.
- **Proofreading**: Detect edits between document versions for quick review.
- **Quality Assurance**: Compare specs or blueprints to uphold standards.
- **Archiving**: Confirm integrity of records over time by highlighting modifications.
