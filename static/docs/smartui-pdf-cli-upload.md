# Upload PDFs via CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.testmuai.com/demo).

## Prerequisites for Using SmartUI

- Familiarity with command-line tools is essential.
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

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Step 1: Install the SmartUI CLI

Install the CLI globally using npm:

```bash
npm install -g @lambdatest/smartui-cli
```

## Step 2: Setup your credentials

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
$env:LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

## Step 3: Upload PDFs Using CLI

Use the `upload-pdf` command to upload one or multiple PDF files from a directory:

```bash
smartui upload-pdf <directory_or_filename> [options]
```

### Arguments:
- `directory_or_filename`: Path to a single PDF file or a directory containing multiple PDFs.

### Options:
- `--fetch-results [filename]`: Fetch test results after upload. Optionally specify an output file (e.g., `results.json`).
- `--buildName `: Assign a custom name to the build.
- `--markBaseline`: Mark this build as the baseline.
- `--pdfNames `: Comma-separated list of PDF file names to upload.
- `--config `: Path to a config file. Use it for [per-PDF thresholds](#per-pdf-approval-and-rejection-thresholds) and [project tags](/support/docs/smartui-project-tags/).
- `--approvalThreshold `: Mismatch percentage (0 to 100) at or below which every PDF in this upload is auto-approved.
- `--rejectionThreshold `: Mismatch percentage (0 to 100) at or above which every PDF in this upload is auto-rejected.
- `--sync`: Wait until the uploaded PDFs are compared and print the result for every page.

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

## Per-PDF Approval and Rejection Thresholds  {#per-pdf-approval-and-rejection-thresholds}

By default every PDF in a project uses the **Accept** and **Reject** percentages from the project's comparison settings. When some documents need a different tolerance from the rest, set the thresholds at upload time instead of splitting them into separate projects.

- **Approval threshold**: a page whose mismatch is at or below this percentage is auto-approved.
- **Rejection threshold**: a page whose mismatch is at or above this percentage is auto-rejected.
- Anything in between is marked **Changes found** and waits for an approver.

Per-PDF thresholds need SmartUI CLI **4.1.82** or later and work on both PDF projects and Omni projects.

### Set one threshold for the whole upload

Pass the flags to apply the same values to every PDF in the command:

```bash
smartui upload-pdf ./pdfs/strict --buildName "release-42" --approvalThreshold 0 --rejectionThreshold 1
```

To use several tolerances in one build, run one command per folder and pass the same `--buildName` each time. All uploads land in a single build, so the build status still covers every document.

```bash
smartui upload-pdf ./pdfs/strict  --buildName "release-42" --approvalThreshold 0  --rejectionThreshold 1
smartui upload-pdf ./pdfs/review  --buildName "release-42" --approvalThreshold 1  --rejectionThreshold 20
smartui upload-pdf ./pdfs/lenient --buildName "release-42" --approvalThreshold 10 --rejectionThreshold 30
```

### Set thresholds for individual PDFs

To mix tolerances inside one folder, list the PDFs in a `pdf.thresholds` block in a config file. Each key is a PDF file name, and each entry takes `approval`, `rejection` or both.

```json title="pdf-thresholds.json"
{
"pdf": {
"approvalThreshold": 1,
"rejectionThreshold": 20,
"thresholds": {
"ifu-dosage-EN.pdf":   { "approval": 0,  "rejection": 1 },
"brochure-hcp-EN.pdf": { "approval": 10, "rejection": 30 },
"label-carton-EN.pdf": { "rejection": 5 }
}
}
}
```

```bash
smartui upload-pdf ./pdfs --config pdf-thresholds.json --buildName "release-42" --sync
```

The `pdf` block accepts only `approvalThreshold`, `rejectionThreshold` and `thresholds`. The top-level `approvalThreshold` and `rejectionThreshold` used for web screenshots are **not** applied to PDFs, so put PDF values inside the `pdf` block.

### Which value applies

For each PDF, SmartUI resolves the approval and rejection values separately, highest priority first:

| Priority | Source |
|---|---|
| 1 | The PDF's entry in `pdf.thresholds` |
| 2 | `--approvalThreshold` / `--rejectionThreshold` on the command |
| 3 | `pdf.approvalThreshold` / `pdf.rejectionThreshold` in the config file |
| 4 | The project's comparison settings |

An entry that sets only one side takes the other side from the next level down. In the example above, `label-carton-EN.pdf` is rejected at 5% and approved at 1% from the `pdf` block, and any PDF not listed uses 1% and 20%.

A page with 0% mismatch is always approved. A rejection threshold of `0` means the page is never auto-rejected, so `"approval": 5, "rejection": 0` approves up to 5% and sends everything above that to review.

Values can have decimals and the boundaries are inclusive. For a page with a 4.2049% mismatch, an approval threshold of `4.21` approves it, `4.2` does not, and a rejection threshold of `4.2` rejects it.

### Validation

The CLI checks thresholds before anything is uploaded. When a check fails, it prints the reason, uploads nothing and creates no build.

| Problem | Message |
|---|---|
| A key in `pdf.thresholds` matches no uploaded file | `pdf.thresholds in the config file names PDFs that are not in this upload: typo-lable.pdf. Keys must match the uploaded file names (or --pdfNames) exactly.` |
| Approval is higher than a non-zero rejection | `thresholds[label-carton-EN.pdf]: approvalThreshold (6) cannot exceed rejectionThreshold (3)` |
| A config file value outside 0 to 100, or not a number | `Invalid config; pdf.thresholds..approval must be a number between 0 and 100` |
| A flag value that is not a number | `approvalThreshold must be a number between 0 and 100, got "abc"` |

Keys must match the file name exactly, including `.pdf`. If you rename documents with `--pdfNames`, use those names as the keys.

**Check the output, not only the exit code**
A config file that fails schema validation (the `Invalid config; ...` messages) stops the CLI with exit code 1. Every other refusal in the table above ends with `PDF upload failed` and exit code **0**. In CI, also fail the step when the output contains `PDF upload failed`.

### Things to know

- **Thresholds are fixed at upload.** Each PDF keeps the values it was uploaded with. They cannot be edited later from the dashboard, and changing the project's Accept and Reject settings does not change them. To apply new values, upload again.
- **The viewer does not show the applied threshold.** The **Threshold** value in the comparison viewer is the pixel comparison setting, not the approval or rejection percentage that decided the result.
- **Use `--sync` for results on PDF projects.** `--sync` returns the status and mismatch for every page. On PDF (non-Omni) projects, `--fetch-results` currently reports `Total PDFs: 0` even when pages were rejected, so do not use it to gate a pipeline there.

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

**PDF File Management**

- Use consistent naming conventions for PDF files
- Organize PDFs in logical directory structures
- Verify PDF files are valid and not corrupted before upload
- Keep PDF files in version control when appropriate

**Project Token Management**

- Store project token as environment variable
- Never commit tokens to version control
- Use different tokens for different environments
- Rotate tokens regularly

**Build Naming**

- Use meaningful build names that include version info
- Include date or version in build names
- Use consistent naming conventions

**Example:**
```bash
smartui upload-pdf ./pdfs/ --buildName "Release-v1.0-$(date +%Y%m%d)"
```

**Error Handling**

- Always check CLI exit codes
- Handle network failures gracefully
- Implement retry logic for transient failures
- Log errors for debugging

**Batch Processing**

- Process PDFs in batches for efficiency
- Monitor upload progress
- Handle partial failures in batch operations
- Use appropriate batch sizes

## Troubleshooting

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

4. Check network connectivity to TestMu AI servers

5. Verify PROJECT_TOKEN is set correctly:
```bash
echo $PROJECT_TOKEN
```

6. Verify SmartUI CLI is installed:
```bash
smartui --version
```

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
- Visit [TestMu AI Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [PDF Comparison Overview](/support/docs/smartui-pdf-comparison)
- [PDF API Upload](/support/docs/smartui-pdf-api-upload)
- [PDF Java SDK Upload](/support/docs/smartui-pdf-java-sdk)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
