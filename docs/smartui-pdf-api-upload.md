---
id: smartui-pdf-api-upload
title: Upload PDFs via API
sidebar_label: API Upload
description: Learn how to upload PDF files to SmartUI using the REST API for visual regression testing.
keywords:
  - PDF API Upload
  - SmartUI API
  - Visual Regression Testing
  - PDF Testing
  - REST API
url: https://www.testmuai.com/support/docs/smartui-pdf-api-upload/
site_name: LambdaTest
slug: smartui-pdf-api-upload/
canonical: https://www.testmuai.com/support/docs/smartui-pdf-api-upload/

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
          "name": "SmartUI PDF API Upload",
          "item": `${BRAND_URL}/support/docs/smartui-pdf-api-upload/`
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using SmartUI

- Familiarity with HTTP APIs is essential.
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

## Uploading PDFs via API

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

## API Request Example

Here's a sample API request using cURL:

```bash
curl -X POST "YOUR_API_ENDPOINT" \
  -H "Content-Type: multipart/form-data" \
  -F "projectToken=123456#1234abcd-****-****-****-************" \
  -F "pathToFiles[]=path/to/document1.pdf" \
  -F "pathToFiles[]=path/to/document2.pdf" \
  -F "buildName=Release-v2.1"
```

## Response Format

The API will return a JSON response containing:

- **Build ID**: Unique identifier for the uploaded build
- **Status**: Upload status (success/failure)
- **Pages Captured**: Number of pages processed
- **Test Results**: Visual comparison results (if available)

## Use Cases

- **Automated CI/CD Integration**: Seamlessly integrate PDF testing into your deployment pipeline
- **Batch Processing**: Upload multiple PDFs simultaneously for efficient testing
- **Custom Workflows**: Build custom applications that interact with SmartUI programmatically
- **Enterprise Integration**: Connect with existing enterprise systems and workflows

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
buildName="PDF-Comparison-v1.0-$(date +%Y%m%d)"
```

</TabItem>

<TabItem value='error-handling' label='Error Handling'>

**Error Handling**

- Always check API response status
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

**Symptoms**: PDF upload returns error or fails silently

**Possible Causes**:
- Invalid PDF file
- File path incorrect
- File size too large
- Network connectivity issues
- Project token incorrect
- API endpoint incorrect

**Solutions**:
1. Verify PDF file is valid and not corrupted
2. Check file path is correct and accessible
3. Verify file size is within limits
4. Check network connectivity to <BrandName /> servers
5. Verify PROJECT_TOKEN is set correctly
6. Confirm API endpoint URL is correct

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

**Issue: "Project Not Found" Error**

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
<TabItem value='upload-returns-error-response' label='Upload Returns Error Response'>

**Issue: Upload Returns Error Response**

**Symptoms**: API returns error status or failure message

**Possible Causes**:
- Invalid request format
- Missing required parameters
- Authentication issues
- Server-side processing error

**Solutions**:
1. Verify request format matches API specification
2. Check all required parameters are included
3. Verify authentication credentials
4. Review error response for specific details
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
4. Check upload response for errors
5. Review API response for upload status

**Getting Help**

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [PDF Comparison Overview](/support/docs/smartui-pdf-comparison) for PDF-specific information
- See [PDF CLI Upload](/support/docs/smartui-pdf-cli-upload) for alternative upload methods
- Visit [<BrandName /> Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@testmu.ai or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [PDF Comparison Overview](/support/docs/smartui-pdf-comparison)
- [PDF CLI Upload](/support/docs/smartui-pdf-cli-upload)
- [PDF Java SDK Upload](/support/docs/smartui-pdf-java-sdk)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)
