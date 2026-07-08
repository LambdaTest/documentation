# Karate Report

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Karate framework supports generating detailed test execution reports that help visualize test results and insights. On HyperExecute, you can run your Karate tests and configure it to generate and download these reports seamlessly.

> Ensure your project is configured with the **Karate framework** and all test scripts are in place.

## Steps to Generate Karate Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

```yaml
report: true
partialReports:
location: target
type: html
frameworkName: karate
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.
