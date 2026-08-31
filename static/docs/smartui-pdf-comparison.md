# SmartUI PDF Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

SmartUI PDF Testing is a visual regression capability that captures snapshots of every page in a PDF and compares them against a baseline to surface pixel-level differences. Upload your PDFs through the REST API, the Java SDK, or the CLI, and review the highlighted changes directly in the SmartUI dashboard.

This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.testmuai.com/demo/).

## Prerequisites for Using SmartUI

- Familiarity with HTTP APIs is essential.
- Visit the [`TestMu AI SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

In the following section, we will walk you through the process of conducting your first Visual Regression test using TestMu AI's SmartUI platform.

## Getting Started with PDF Comparison

## Establishing a SmartUI Project

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

Only files in `.pdf` format are compatible with this feature.

## Upload PDFs via API

Use the REST API to upload local PDF files programmatically and generate a build automatically by capturing snapshots of every page.

Here's how you can upload your PDFs:

1. Retrieve your API `URL Endpoint` post activation of your enterprise plan. To schedule a demonstration, click [here](https://www.testmuai.com/demo/).

2. Append the following parameters to your request payload via `form-body`:

| Variable     | Type   | Description                                                                                                                                      | Required? |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| projectToken | string | This token is required to upload PDF files and validate your project.  Example: `projectToken:123456#1234abcd-****-****-****-************` | Yes       |
| pathToFiles  | array  | Add the path to the PDFs that will be uploaded.  Example: `pathToFiles : [ "path/to/pdf-1", "path/to/pdf-2"]`                                | Yes       |
| buildName    | string | Assign a name of your choice to the build comprising the uploaded PDFs.  Example: `buildName : #`                                | No        |

Only files in `.pdf` format are compatible with this feature.

### API Request Example

Here's a sample API request using cURL:

```bash
curl -X POST "YOUR_API_ENDPOINT" \
-H "Content-Type: multipart/form-data" \
-F "projectToken=123456#1234abcd-****-****-****-************" \
-F "pathToFiles[]=path/to/document1.pdf" \
-F "pathToFiles[]=path/to/document2.pdf" \
-F "buildName=Release-v2.1"
```

### Response Format

The API will return a JSON response containing:

- **Build ID**: Unique identifier for the uploaded build
- **Status**: Upload status (success/failure)
- **Pages Captured**: Number of pages processed
- **Test Results**: Visual comparison results (if available)

### API Use Cases

- **Automated CI/CD Integration**: Seamlessly integrate PDF testing into your deployment pipeline
- **Batch Processing**: Upload multiple PDFs simultaneously for efficient testing
- **Custom Workflows**: Build custom applications that interact with SmartUI programmatically
- **Enterprise Integration**: Connect with existing enterprise systems and workflows

### API Best Practices

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
buildName="PDF-Comparison-v1.0-$(date +%Y%m%d)"
```

**Error Handling**

- Always check API response status
- Handle network failures gracefully
- Implement retry logic for transient failures
- Log errors for debugging

**Batch Processing**

- Process PDFs in batches for efficiency
- Monitor upload progress
- Handle partial failures in batch operations
- Use appropriate batch sizes

### API Troubleshooting

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
4. Check network connectivity to TestMu AI servers
5. Verify PROJECT_TOKEN is set correctly
6. Confirm API endpoint URL is correct

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
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

## Upload PDFs via Java SDK

Use the SmartUI Java SDK to upload PDFs programmatically from Java applications and test automation frameworks.

For the Java SDK you will also need:

- Java 8 or higher installed on your system
- Maven or Gradle build tool
- Familiarity with Java development

### Clone the Sample Project

First, clone the sample project to get started:

```bash
git clone https://github.com/LambdaTest/junit-selenium-sample.git
cd junit-selenium-sample
```

### Install the SmartUI Java SDK

Add the SmartUI Java SDK to your `pom.xml`:

```xml
<dependency>
<groupId>io.github.lambdatest</groupId>
<artifactId>lambdatest-java-sdk</artifactId>
<version>1.0.23</version>
</dependency>
```

Then compile your project:

```bash
mvn clean compile
```

### Set up your credentials

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

### Upload PDFs using Java SDK

You can upload PDFs in two modes:

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

Upload PDFs downloaded during TestMu AI cloud test execution:

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

### Java SDK Configuration Options

| Method | Description |
|-------|-------------|
| `.withProjectToken(token)` | Required. Your SmartUI project token. |
| `.withFetchResult(true)` | Optional. Returns structured test results. |
| `.withBuildName("v2.1")` | Optional. Assign a custom build name. |

### Run your tests

```bash
mvn test
```

### Advanced Java SDK Usage

#### Batch Upload Example

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

#### Error Handling

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

### Java SDK Use Cases

- **Enterprise Applications**: Integrate PDF testing into large-scale Java applications
- **Test Automation Frameworks**: Build comprehensive test suites with PDF validation
- **CI/CD Integration**: Automate PDF testing in Java-based deployment pipelines
- **Custom Tools**: Develop specialized tools for PDF comparison and validation

### Java SDK Best Practices

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
```java
config.withBuildName("PDF-Comparison-v1.0-" + LocalDate.now());
```

**Error Handling**

- Always wrap upload calls in try-catch blocks
- Log errors for debugging
- Handle network failures gracefully
- Implement retry logic for transient failures

**Batch Processing**

- Process PDFs in batches for efficiency
- Monitor upload progress
- Handle partial failures in batch operations
- Use appropriate batch sizes

**Batch Processing**

- Process PDFs in batches for efficiency
- Monitor upload progress
- Handle partial failures in batch operations
- Use appropriate batch sizes

### Java SDK Troubleshooting

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

4. Check network connectivity to TestMu AI servers

5. Verify PROJECT_TOKEN is set correctly:
```bash
echo $PROJECT_TOKEN
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
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

## Upload PDFs via CLI

Use the SmartUI CLI to upload one or multiple PDF files from the command line, ideal for quick testing and CI/CD integration.

For the CLI, familiarity with command-line tools is essential.

### Install the SmartUI CLI

Install the CLI globally using npm:

```bash
npm install -g @lambdatest/smartui-cli
```

### Setup your credentials

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

### Upload PDFs Using CLI

Use the `upload-pdf` command to upload one or multiple PDF files from a directory:

```bash
smartui upload-pdf <directory_or_filename> [options]
```

#### Arguments:
- `directory_or_filename`: Path to a single PDF file or a directory containing multiple PDFs.

#### Options:
- `--fetch-results [filename]`: Fetch test results after upload. Optionally specify an output file (e.g., `results.json`).
- `--buildName `: Assign a custom name to the build.
- `--markBaseline`: Mark this build as the baseline.
- `--pdfNames `: Comma-separated list of PDF file names to upload.

#### Example Usage:

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

### Advanced CLI Options

#### Batch Processing

Process multiple directories:

```bash
smartui upload-pdf ./documents/ --buildName "Batch-1"
smartui upload-pdf ./reports/ --buildName "Batch-2"
```

#### CI/CD Integration

Example for GitHub Actions:

```yaml
- name: Upload PDFs to SmartUI
run: |
smartui upload-pdf ./generated-pdfs/ --buildName "${{ github.sha }}" --fetch-results test-results.json
```

### CLI Use Cases

- **CI/CD Pipelines**: Integrate PDF testing into automated deployment workflows
- **Batch Processing**: Upload multiple PDFs efficiently from command line
- **Automated Testing**: Schedule PDF uploads as part of automated test suites
- **Developer Workflows**: Quick PDF testing during development and debugging

### CLI Best Practices

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

### CLI Troubleshooting

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
- Visit [TestMu AI Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

## Use Cases of Smart PDF Comparison

- **Software Documentation**: Track changes and ensure consistency across document versions.
- **Legal & Compliance**: Spot differences in contracts or regulatory documents.
- **Design Validation**: Verify design updates and maintain visual consistency.
- **Proofreading**: Detect edits between document versions for quick review.
- **Quality Assurance**: Compare specs or blueprints to uphold standards.
- **Archiving**: Confirm integrity of records over time by highlighting modifications.

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
