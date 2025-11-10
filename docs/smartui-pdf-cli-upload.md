---
id: smartui-pdf-cli-upload
title: Upload PDFs via CLI
sidebar_label: CLI Upload
description: Learn how to upload PDF files to SmartUI using the command-line interface for visual regression testing.
keywords:
  - PDF CLI Upload
  - SmartUI CLI
  - Visual Regression Testing
  - PDF Testing
  - Command Line
url: https://www.lambdatest.com/support/docs/smartui-pdf-cli-upload/
site_name: LambdaTest
slug: smartui-pdf-cli-upload/
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
          "name": "SmartUI PDF CLI Upload",
          "item": "https://www.lambdatest.com/support/docs/smartui-pdf-cli-upload/"
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using SmartUI

- Familiarity with command-line tools is essential.
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

## Step 1: Install the SmartUI CLI

Install the CLI globally using npm:

```bash
npm install -g @lambdatest/smartui-cli
```

## Step 2: Setup your credentials

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Step 3: Upload PDFs Using CLI

Use the `upload-pdf` command to upload one or multiple PDF files from a directory:

```bash
smartui upload-pdf <directory_or_filename> [options]
```

### Arguments:
- `directory_or_filename`: Path to a single PDF file or a directory containing multiple PDFs.

### Options:
- `--fetch-results [filename]`: Fetch test results after upload. Optionally specify an output file (e.g., `results.json`).
- `--buildName <string>`: Assign a custom name to the build.
- `--projectToken <token>`: Specify the project token (if not set as environment variable).

### Example Usage:

Upload all PDFs from a folder and name the build:

```bash
smartui upload-pdf ./pdfs/ --buildName "Release-v2.1"
```

Upload a single PDF file:

```bash
smartui upload-pdf ./document.pdf --buildName "Single-PDF-Test"
```

Fetch results and save to a file:

```bash
smartui upload-pdf ./spec.pdf --fetch-results results.json
```

Upload with custom project token:

```bash
smartui upload-pdf ./pdfs/ --projectToken "123456#1234abcd-****-****-****-************" --buildName "Custom-Build"
```

## Advanced CLI Options

### Batch Processing

Process multiple directories:

```bash
smartui upload-pdf ./documents/ --buildName "Batch-1"
smartui upload-pdf ./reports/ --buildName "Batch-2"
```

### CI/CD Integration

Example for GitHub Actions:

```yaml
- name: Upload PDFs to SmartUI
  run: |
    smartui upload-pdf ./generated-pdfs/ --buildName "${{ github.sha }}" --fetch-results test-results.json
```

## Use Cases

- **CI/CD Pipelines**: Integrate PDF testing into automated deployment workflows
- **Batch Processing**: Upload multiple PDFs efficiently from command line
- **Automated Testing**: Schedule PDF uploads as part of automated test suites
- **Developer Workflows**: Quick PDF testing during development and debugging
