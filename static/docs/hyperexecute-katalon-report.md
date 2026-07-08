# Katalon Reports on HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

HyperExecute provides seamless integration with Katalon Studio, enabling you to generate and view detailed execution reports directly from your test runs. These reports include details such as:

- Test case execution status (Pass/Fail/Skipped)
- Execution time and duration
- Environment and browser details
- Stack traces for failed tests

> Ensure your project is configured with the [Katalon framework]( https://www.testmuai.com/support/docs/katalon-integration-with-hyperexecute/) and all test scripts are in place.

## Steps to Generate Katalon Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file

Add the following configurations in your YAML file:

```yaml
report: true
partialReports:
type: html
location: Reports/
frameworkName: katalon
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

> This image shows consolidated report of katalon 10+ versions
