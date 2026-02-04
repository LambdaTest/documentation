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
url: https://www.testmuai.com/support/docs/smartui-pdf-cli-upload/
site_name: LambdaTest
slug: smartui-pdf-cli-upload/
canonical: https://www.testmu.ai/support/docs/smartui-pdf-cli-upload/

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
          "name": "SmartUI PDF CLI Upload",
          "item": `${BRAND_URL}/support/docs/smartui-pdf-cli-upload/`
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using SmartUI

- Familiarity with command-line tools is essential.
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

## Step 1: Install the SmartUI CLI

Install the CLI globally using npm:

```bash
npm install -g @lambdatest/smartui-cli
```

## Step 2: Setup your credentials

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

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

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

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='file-management' label='PDF File Management' default>

**PDF File Management**

- Use consistent naming conventions for PDF files
- Organize PDFs in logical directory structures
- Verify PDF files are valid and not corrupted before upload
- Keep PDF files in version control when appropriate

</TabItem>

<TabItem value='token-management' label='Project Token Management'>

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
```bash
smartui upload-pdf ./pdfs/ --buildName Release-v1.0-$(date +%Y%m%d)"
```

</TabItem>

<TabItem value='error-handling' label='Error Handling'>

**Error Handling**

- Always check CLI exit codes
- Handle network failures gracefully
- Implement retry logic for transient failures
- Log errors for debugging

</TabItem>

<TabItem value='batch-processing' label='Batch Processing'>

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

**Symptoms**: CLI command fails or returns error

**Possible Causes**:
- Invalid PDF file
- File path incorrect
- File size too large
- Network connectivity issues
- Project token incorrect
- CLI not installed

**Solutions**:
1. Verify PDF file is valid and not corrupted:
   ```bash
   file document.pdf
   ```

2. Check file path is correct:
   ```bash
   ls -la ./pdfs/
   ```

3. Verify file size is within limits

4. Check network connectivity to <BrandName /> servers

5. Verify PROJECT_TOKEN is set correctly:
   ```bash
   echo $PROJECT_TOKEN
   ```

6. Verify SmartUI CLI is installed:
   ```bash
   smartui --version
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
<TabItem value='cli-command-not-found' label='CLI Command Not Found'>

**Issue: CLI Command Not Found**

**Symptoms**: `smartui` command not recognized

**Possible Causes**:
- CLI not installed
- npm not available
- PATH issues

**Solutions**:
1. Install SmartUI CLI:
   ```bash
   npm install -g @lambdatest/smartui-cli
   ```

2. Verify npm is available:
   ```bash
   npm --version
   ```

3. Check PATH includes npm global bin directory

</TabItem>
<TabItem value='upload-returns-error' label='Upload Returns Error'>

**Issue: Upload Returns Error**

**Symptoms**: CLI returns error status or failure message

**Possible Causes**:
- Invalid command syntax
- Missing required parameters
- Authentication issues
- Server-side processing error

**Solutions**:
1. Verify command syntax matches documentation
2. Check all required parameters are included
3. Verify authentication credentials
4. Review error message for specific details
5. Retry upload if transient error

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
4. Check CLI output for errors
5. Use `--fetch-results` to verify upload status

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
- [PDF Java SDK Upload](/support/docs/smartui-pdf-java-sdk)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)
