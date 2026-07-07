# Error Categorization Report

The Error Categorization Report is a specialized report that helps simplify the process of identifying and categorizing errors in your HyperExecute job. By organizing test failures with similar characteristics, this report provides a clear and structured overview of problematic stages and associated tests for efficient error tracking and analysis.

You can generate and download other reports as well, along with the error-report.

## Configure YAML file to Generate the Error Categorization Report

This report is generated when your job includes multiple error categories. To enable the error categorization report, simply pass the [`errorCategorizedReport`](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedreport) flag to your YAML file:

```yaml title="hyperexecute.yaml"
errorCategorizedReport:
enabled: true
```

This report does not depend on the [`report: true`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) flag. It will generate the error report even if you do not pass the `report: true` flag in your YAML file.

Now trigger your job on HyperExecute, and if your job fails (encounters any failed tests), it will generate the Error Categorization Report. This report list down all the error summaries along with the specific details. You can also check for the particular error for the specific test.
