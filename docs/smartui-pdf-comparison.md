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

## Use Cases of Smart PDF Comparison

1. **Software Documentation**: In software development, PDF comparison can be utilized to ensure the accuracy and consistency of user manuals, system documentation, and more. It can help in tracking changes made in the document across different software versions or updates.

2. **Legal and Compliance Checks**: In legal practices and compliance-heavy industries, comparing different versions of contracts, agreements, or regulatory documents is common. With PDF comparison, one can easily spot differences, alterations, or anomalies, ensuring every detail aligns with legal and compliance requirements.

3. **Design Validation**: For graphic designers, artists, or anyone involved in the creation of visual content, PDF comparison can be used to validate design changes and ensure consistency across different versions of a design.

4. **Proofreading and Editing**: In the publishing industry or any other industry where documents are created and edited, the PDF comparison feature can be invaluable. It can help detect any changes made between different versions of a document, allowing editors and proofreaders to quickly find and correct mistakes.

5. **Quality Assurance**: In industries where accuracy is paramount, such as manufacturing or engineering, PDF comparison can be used for quality assurance. Comparing design specs, product blueprints, or operational guidelines can ensure consistency and adherence to quality standards.

6. **Archiving and Record Keeping**: For businesses or organizations that need to maintain records over a long period, PDF comparison can help verify the accuracy and integrity of these archives. It can highlight any alterations or modifications made to a document over time.

In summary, PDF comparison is a versatile tool that can streamline workflows, improve accuracy, and enhance productivity in many different sectors and use cases.