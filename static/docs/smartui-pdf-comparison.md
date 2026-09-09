# SmartUI Visual Regression Testing for PDF Files

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.testmuai.com/demo/).

## Prerequisites for Using SmartUI

- Familiarity with HTTP APIs is essential.
- Visit the [`TestMu AI SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

In the following section, we will walk you through the process of conducting your first Visual Regression test using TestMu AI's SmartUI platform.

## Getting Started with PDF Comparison

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

## Upload Methods

SmartUI provides three different methods to upload PDFs for visual regression testing. Choose the method that best fits your workflow:

      API Upload
      Upload PDFs using REST API for programmatic integration and automation.

      CLI Upload
      Upload PDFs using command-line interface for quick testing and CI/CD integration.

      Java SDK Upload
      Upload PDFs using Java SDK for enterprise applications and test automation frameworks.

Only files in `.pdf` format are compatible with this feature.

## Use Cases of Smart PDF Comparison

- **Software Documentation**: Track changes and ensure consistency across document versions.
- **Legal & Compliance**: Spot differences in contracts or regulatory documents.
- **Design Validation**: Verify design updates and maintain visual consistency.
- **Proofreading**: Detect edits between document versions for quick review.
- **Quality Assurance**: Compare specs or blueprints to uphold standards.
- **Archiving**: Confirm integrity of records over time by highlighting modifications.
