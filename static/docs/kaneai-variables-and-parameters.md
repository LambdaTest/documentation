# Variables & Parameters in KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI provides variables, secrets, smart variables, parameters, Datasets, and Files for test data. Parameters supply named inputs to a test case; Datasets provide the values for one or more executions. Files provide reusable uploaded content through `{{file.alias}}` references.

All variables and parameters in KaneAI can be accessed from https://kaneai.lambdatest.com/variables

    Variables
    Placeholders that store dynamic values, enabling reuse and reducing redundancy in test cases.

    Secrets
    Securely stored sensitive data (e.g., passwords) that are used in tests without exposing them in the code.

    Smart Variables
    Context-aware variables that automatically pull data in real-time during test execution.

    Parameters
    Values passed into test cases at runtime to customize test execution for different configurations or environments.

    Datasets
    Collections of test data used in a test, allowing for data-driven testing by running the same test with different inputs.

    Files
    Reusable uploaded files that a test step references by alias.
