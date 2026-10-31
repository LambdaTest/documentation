---
id: kane-ai-using-variables
title: How to Use Variables and Secrets With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Variables & Secrets
description: Create and reference variables, secrets, and smart variables in KaneAI to reuse dynamic data across your test cases.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai secrets
  - kaneai parameters
  - kaneai smart variables
url: https://www.testmuai.com/support/docs/kane-ai-using-variables/
site_name: TestMu AI
slug: kane-ai-using-variables/
canonical: https://www.testmuai.com/support/docs/kane-ai-using-variables/
---

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Variables & Secrets",
          "item": `${BRAND_URL}/support/docs/kane-ai-using-variables/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-ai-using-variables/"
    },
    "headline": "How to Use Variables and Secrets With KaneAI",
    "description": "Create and reference variables, secrets, and smart variables in KaneAI to reuse dynamic data across your test cases.",
    "url": "https://www.testmuai.com/support/docs/kane-ai-using-variables/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai secrets",
      "kaneai parameters",
      "kaneai smart variables"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "For instance, you can write",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "Set username as John"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "String variables example:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "Enter {{username}} in user input field"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "String variables example:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "assert {{username}} contains 'John'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "JSON variables example:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "assert {{api_variable.response.email}} is 'john.doe@example.com'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Leveraging API",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic <Base64Auth>' \\\n--data '{\n    \"test_run_id\": \"<YOUR_TEST_RUN_ID>\",\n    \"concurrency\": 1,\n    \"environment_id\": <Environment_ID> #Optional"
      }
    ],
    "dateModified": "2026-09-30T12:00:00+05:30"
  }) }}
/>

# How to Use Variables and Secrets With KaneAI
***

Variables are placeholders that store values you reuse across a test case instead of hardcoding them, which keeps tests maintainable when values like URLs, credentials, or device configurations change. KaneAI stores three kinds of values: variables you define, secrets for encrypted sensitive data, and smart variables that resolve dynamically at run time. You manage them from the [variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables).

Variables let you:
- Avoid repeating the same value across test cases.
- Capture a value from the application under test, store it, and assert on it.
- Reuse and adapt test steps for values that change often, such as URLs, credentials, or environment settings.

## Variables, Parameters, and Other Test Data
***

Beyond variables, KaneAI provides secrets, smart variables, parameters, Datasets, and Files for test data. Parameters supply named inputs to a test case; Datasets provide the values for one or more executions. Files provide reusable uploaded content through `{{file.alias}}` references.

:::tip
All variables and parameters in KaneAI can be accessed from the [variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables).
:::

- **[Variables](#types-of-variables)**: Placeholders that store dynamic values, enabling reuse and reducing redundancy in test cases.
- **[Secrets](#secrets)**: Securely stored sensitive data (for example, passwords) that tests use without exposing it in the code.
- **[Smart Variables](#smart-variables)**: Context-aware variables that automatically pull data in real time during test execution.
- **[Parameters](/support/docs/kane-ai-using-parameters/)**: Values passed into test cases at runtime to customize test execution for different configurations or environments.
- **[Datasets](/support/docs/kane-ai-using-datasets/)**: Collections of test data used in a test, allowing data-driven testing by running the same test with different inputs.
- **[Files](/support/docs/kaneai-upload-and-download-files/)**: Reusable uploaded files that a test step references by alias.

## Types of Variables
***

KaneAI supports two kinds of variables:

- **String Variables**: Store simple text values. They can be used for things like usernames, or any textual data. String variables can be created via KaneAI or manually within the session.

- **JSON Variables**: Store structured data in the form of key-value pairs. JSON variables are especially useful for passing complex objects such as API responses. JSON variables are auto-generated from API calls and DB queries used in KaneAI and cannot be created manually.

## Scope of Variables
***

KaneAI variables have one of three scopes, which controls where the value is available.

### Local Variables
***

Local variables are defined through natural language or as part of an instruction you provide. They are accessible only within the test case where you define them, which keeps values isolated to a specific context. You can convert a local variable to a global or environment variable within a KaneAI authoring session.

### Global Variables
***

Global variables are accessible across test cases within the entire organisation, so you reuse the same value in many places. When you convert a local variable to global, you can enable a persist check to keep the value across sessions if it changes during one. The Persist Value section below covers this.

### Environment Variables
***

Environment variables hold values set for a specific environment, such as staging or production. Use them for URLs or credentials that differ per environment, so one test case runs across multiple environments. You can also [select the environment for an authoring session](#select-an-environment-for-an-authoring-session) before it starts. The Environments section below covers this.

## Create and Edit Variables
***

Create a variable using one of the following three methods.

### Using the Slash Command
***

Define a variable directly with the `/` command in the step input, then select **Add a variable**. This method creates _global_ and _environment_ variables and sets their values. Edit a variable's value by clicking the variables listing icon at the top right.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/environment.png').default} alt="Using the Slash Command" className="doc_img img_center"/>

### Using Natural Language
***

Create a variable in plain English inside a step. For example:

<VerifiedTag value="Verified" />

```bash
Set username as John
```
This creates a _local_ variable `{{username}}` with the value "John". For such local variables, you can change the scope to global and enable the persist check, which keeps the value across sessions and test executions when it updates in one.

### From the Variables Page
***

On the [variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables), click **Create new**, then add the details and scope. This page lists all global and environment variables. Editing a variable's session value here updates it in all new test executions and sessions for that variable.

### From a Manual Interaction Step
***

While reviewing a Manual Interaction step, replace any hard-coded value in the step's instruction with a Parameter, Variable, or Secret, without deleting or re-recording the step. This flow works on both **Desktop** and **Mobile App** sessions, and while the session is **Paused**, where step editing is available.

#### Convert a Value in a Step

1. Open the recorded Manual Interaction step (for example, *Type in main search input field 'test.com'*).
2. **Select the portion** of the instruction text you want to replace (for example, highlight `test.com`).
<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/HighlightScreenshot.png').default} alt="Convert a Value in a Step" className="doc_img img_center"/>
3. In the **Convert as** popover, choose one of the three tabs:
   - **`{$}` Parameter**: a test-level variable. Select an existing parameter or create a new one.
   - **`{x}` Variable**: a Global or Environment variable. Select an existing variable or create a new one.
   - **🔒 Secret**: an encrypted value that resolves only at execution time. You can only create new secrets from this tab.
4. Pick an existing entry from the searchable list, or click **`+` Create Parameter / Variable / Secret** to define a new one inline.
5. The selected text is replaced with the variable reference (for example, `{{search_query}}`), and the step updates in place.

#### Support matrix

| Variable Type | Use Existing | Create New | Scope |
|---------------|--------------|------------|-------|
| `{$}` Parameter | Supported | Supported | Test-level |
| `{x}` Variable | Supported | Supported | Global / Environment |
| 🔒 Secret | Not supported | Supported | Vault-level |

:::note
- Existing secrets cannot be reused from the Convert as popover. The Secret tab only exposes the **`+` Create Secret** action. This is enforced for security, so a fresh secret must be created each time one is assigned to a Manual Interaction step.
- This is only supported for `Click` and `Type` Commands
:::

For details on secrets and parameters, see [Secrets](#secrets) and [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).

## Use Variables During Authoring
***

Reference variables in your steps to make test cases dynamic.

### Syntax for Assertions
***

Type the `{{` prefix in the KaneAI session input box to list all existing variables. Use a variable to input a value or as part of the assertion logic.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/syntax.png').default} alt="Syntax for Assertions" className="doc_img img_center"/>

#### String variables example:

<VerifiedTag value="Verified" />

```bash
Enter {{username}} in user input field
```
This will input the value of the username variable in the user input field.

<VerifiedTag value="Verified" />

```bash
assert {{username}} contains 'John'
```
This will assert if the username variable contains the value "John".

#### JSON variables example:
JSON variables come from an API response used via the slash command or from a database query output. Reach a specific object inside the JSON hierarchy by typing the `{{` prefix in the KaneAI session input box. For example, assert that the email field inside the API response variable matches "john.doe@example.com".

<VerifiedTag value="Verified" />

```bash
assert {{api_variable.response.email}} is 'john.doe@example.com'
```
Here is a video to further explain the JSON variables usage:
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/knowledge-base/variables/json-variable.mp4').default} type="video/mp4" />
</video>

### Assert on a JSON API Response
***

This section outlines the process of using JSON variables in KaneAI to assert specific objects within an API response. It provides a step-by-step procedure for executing API calls, examining responses, and performing assertions on both status and body of the response.

#### Prerequisites

- Access to KaneAI platform
- Basic understanding of API testing
- Familiarity with JSON structures

#### Step 1: Understanding JSON Variable Assertions

In KaneAI, you can use JSON variables to perform detailed assertions on API responses. This allows you to validate specific objects and elements within the response structure.

#### Step 2: Initiating an API Call

- Navigate to your desired API endpoint (e.g., a pet store website)
- Configure the necessary API call parameters
- Execute the API request

##### Example Workflow:

- Select the appropriate HTTP method (GET, POST, etc.)
- Add required headers
- Input any necessary request body
- Send the request

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/json-variable/image2.jpg').default} alt="Configure and send an API request in KaneAI" className="doc_img img_center"/>

#### Step 3: Accessing Response Variables

After executing the API call, KaneAI automatically generates variables containing:

- Response status code
- Response body
- Response headers
- Other relevant metadata

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/json-variable/image3.jpg').default} alt="Response variables generated from the API call" className="doc_img img_center"/>

#### Step 4: Asserting Response Status

To assert the response status:

- Use double curly braces `{{` to access the variable list
- Navigate using arrow keys to select the status variable
- Define your expected status code

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/json-variable/image4.jpg').default} alt="Select the status variable using the double-curly-brace syntax" className="doc_img img_center"/>

##### Example:

- Expected status: 200
- If actual status is 500, the assertion will fail

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/json-variable/image5.jpg').default} alt="Assert the expected response status code" className="doc_img img_center"/>

#### Step 5: Asserting Response Body

Navigate through the response body using the same double curly brace method:

- Open the variable selection menu with `{{`
- Browse to the specific JSON element you want to validate
- Create an assertion for that element

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/json-variable/image6.jpg').default} alt="Browse to a JSON element in the response body" className="doc_img img_center"/>

##### Example Validation:

- Check if 'dogs' element exists in the response
- Verify specific property values
- Validate nested JSON structures

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/json-variable/image7.jpg').default} alt="Validate a nested value in the JSON response body" className="doc_img img_center"/>

## Persist Value in Variables
***

The persist value check keeps a variable's value across multiple test executions, which matters when a value must stay consistent between test cases and runs. For example, if you fetch a value from the application under test while authoring, persist it so other test cases use the same value during execution.

:::tip
The persist check option becomes available only when you change a variable's scope from local to global.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/variable-listing-in-session.png').default} alt="Persist Value in Variables" className="doc_img img_center"/>

## Environments
***

Environments hold per-deployment variable values so one test case runs across staging, production, and more.

### How Environments Work
***

Environments in KaneAI are the configurations a test runs under, such as development, staging, and production. Each environment can hold its own set of variables tailored to that deployment.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/persist-value.png').default} alt="How Environments Work" className="doc_img img_center"/>

### Select an Environment for an Authoring Session
***

You can choose the environment (for example, Dev, Stage, or Production) before an authoring session starts. The whole session is then locked to that environment, so every `{{environment.X}}` variable resolves from the environment you picked. A test you author against Stage uses Stage values throughout, and does not switch to Production values on a rerun.

:::note
**Available on request.** Please reach out to Support to enable it. This feature is partially rolled out and will soon be generally available for all users.
:::

#### How to Select an Environment

1. Create a new test or open an existing test in the playground.
2. In the session configuration panel, open the **Environment** dropdown and choose the environment you want to author against. Choosing an environment is optional.
3. Start the session.

Once the session starts with an environment, the environment is locked and cannot be changed until the session ends. To author against a different environment, end the session and start a new one with the other environment selected.

#### What Changes in a Session With a Selected Environment

| Behavior | With an environment selected | Without an environment |
|---|---|---|
| Variables offered in the `{{` picker | Only the selected environment's variables, plus global variables | Global variables only. No environment variables are offered |
| Choosing an environment mid-session | Not allowed | Allowed once. The environment you choose is then locked for the rest of the session |
| A step uses a variable missing from the environment | The step fails with an error naming the variable and the environment | Choose an environment before using environment variables |

For example, if `web_url` is not defined in the Production environment, a step that uses `{{environment.web_url}}` fails with:

```text
The variable "web_url" is not defined in environment "production".
```

To fix it, add the variable to that environment from the [variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables), or end the session and select an environment that defines it.

:::tip
KaneAI does not check your test's variables against the environment when you select it. A missing variable is reported only when the step that uses it runs.
:::

#### Import a Module That Uses Environment Variables

If you import a module that uses environment variables into a session without an environment, you're prompted to choose one. This counts as your one environment choice for the session. If the chosen environment is missing any of the module's environment variables, a warning names them and lets you create them in that environment.

#### Choose an Environment Before Automating With KaneAI

You can also choose the environment before KaneAI starts authoring from:

- **Create and Automate** when [generating test cases with AI](/support/docs/generate-test-cases-with-ai/).
- **Bulk Automate**, when automating several manual test cases at once.
- **Automate with KaneAI** on a [manual test case](/support/docs/manual-test-case-creation/).

To use environment variables in manual test cases and modules, see Variables, Parameters, and Secrets in Manual Test Cases and Modules.

#### Your Last Choice Is Remembered

When you save or close a session, KaneAI stores the environment you used on the test case, including an environment you chose during the session. The next time you open the test for authoring, that environment is pre-selected.

The environment is also saved with the test case's [advanced settings](/support/docs/kaneai-advanced-settings/). Changes to it are shown in the test case's version history.

:::note
Sessions started from [Kane CLI](/support/docs/kane-cli-introduction/) do not support environment selection yet. They use the environment of the first step that references an `{{environment.X}}` variable.
:::

### Use Environments in Test Runs
***

Once you author a test case with environment variables, run it in any environment where those variables exist.

#### From the UI
When you run or schedule a test run, choose the environment to execute on. All test cases in a test run execute on a single environment at a time.

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/variables/test-run-environment.png').default} alt="From the UI" className="doc_img img_center"/>

#### From the API
Pass the environment name programmatically when you start a test run via the API, so you automate execution across environments. For example:

:::note
* Before running the command, replace `<Base64Auth>` with your Base64-encoded <BrandName /> credentials and `YOUR_TEST_RUN_ID` with the relevant test run ID.
* To find the optional `environment_id`, click your desired environment. In the resulting URL, use the value of the `envId` parameter as the `environment_id`. 
* For example, if the URL contains `envId=4133`, use **4133** as the environment_id.
:::

<VerifiedTag value="Verified" />

```bash
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "<YOUR_TEST_RUN_ID>",
    "concurrency": 1,
    "environment_id": "<Environment_ID>"
}'
```

This runs the test case in the environment associated with the specified environment ID.

## Secrets
***

For sensitive values you would not want stored as plain variables, use secrets instead. KaneAI now supports the use of secret variables to enhance security and streamline functionality. This feature leverages HashiCorp Vault for secure management of sensitive information, ensuring robust protection for your data while maintaining ease of use. This section outlines the process for creating, managing, and utilizing secret variables within KaneAI.

:::note
- In Web/App Agent, users will see list of all secrets created at user or org level for that user.
- A user role can create only user level secrets, while an admin can create either user-level or org-level secrets.
- A user can delete their own secrets, but only an admin can delete org-level secrets.
- Secret variables will be accessible in test steps, modules, and test cases.
:::

### Create Secrets
***

You can create Secrets variables via:
- Test Manager
- Web/App Agent

#### Create Secrets via Test Manager
**Step 1:** Navigate to the Test Manager. <br />
**Step 2:** Click on the settings icon > Secrets.<br />
**Step 3:** Click on the **Create new secret** button.<br />
**Step 4:** Provide the secret key and value and click on the **Create Secret** button.

<img loading="lazy" src={require('../assets/images/kane-ai/features/secrets/test-manager-secret.gif').default} className="doc_img"/> 

#### Create Secrets via Web/App Agent
**Step 1:** Navigate to the **"Write a Step"** field where you typically write your test scenarios in plain English. <br />
**Step 2:** To switch to Secrets mode, type the forward slash / or click on the + icon. You will see a Secret pop-up option appear. <br />
**Step 3:** Provide the secret key and value and click on the **Create Secret** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/secrets/kane-ai-secret.mp4').default} type="video/mp4" />
</video>

### Use Your Secrets
***

Once created, you can now reference any secret variables in your test steps using **double-curly braces syntax (e.g.,`{{email}}`)**.

> To use a previously created variable in any subsequent step or test case, reference the variable using the same `{{` syntax. This will list down all existing variables for this test.

Format:
<VerifiedTag value="Verified" />

```bash
use the value of {{secrets.user.email}} in the email text field
```

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/secrets/use-secrets.mp4').default} type="video/mp4" />
</video>

### Update Your Secrets
***

**Step 1:** Navigate to the Test Manager. <br />
**Step 2:** Click on the settings icon > Secrets.<br />
**Step 3:** Click on the **pencil** icon to update that respective secret value.<br />
**Step 4:** Provide the secret value and click on the **Update secret** button.

<img loading="lazy" src= {require('../assets/images/kane-ai/features/secrets/update-secret.png').default} alt="Update Your Secrets"  className="doc_img"/>

### Delete Your Secrets
***

**Step 1:** Navigate to the Test Manager. <br />
**Step 2:** Click on the settings icon > Secrets.<br />
**Step 3:** Click on the **delete** icon to update that respective secret value.<br />
**Step 4:** Provide the secret value and click on the confirmation button.

<img loading="lazy" src= {require('../assets/images/kane-ai/features/secrets/delete-secret.png').default} alt="Delete Your Secrets"  className="doc_img"/>

### Data Masking and Anonymization
***

TestMu AI protects sensitive data in tests through synthetic substitution and capture-time masking.

- **AI Autofill (synthetic substitution)** - generates realistic substitute values against your real dataset structure, so production values are replaced rather than encoded. No mapping between original and substituted values is retained, removing the re-identification vector.
- **Secret variables (HashiCorp Vault)** - values marked as secret are resolved at runtime from HashiCorp Vault and are never written to action logs, session logs, screenshots (known secret values are redacted from screenshot OCR before upload), video recordings, run summaries, or reports.
- **Lambda Masking** - hides sensitive data in recorded test commands and session recordings.
- **SmartUI PII masking** - masks PII regions in visual snapshots. Masking is enforced at capture time, not applied post-hoc, so masked data is never persisted in artifacts.

## Smart Variables
***

Where the variables and secrets above hold values you supply, KaneAI also provides built-in smart variables for dynamic values it resolves for you.

KaneAI's Smart Variables feature enhances test automation by providing predefined, dynamic variables that can be used across test steps, modules, and test cases. These variables enable dynamic adaptation to various environments and conditions, improving test reliability, reusability, and efficiency. 

They cover categories such as date & time, system information, location, connectivity, randomization, and device-specific details, allowing users to create flexible and robust test scenarios that adapt to real-time conditions without manual input.

:::note
 Smart variables are predefined and cannot be created or deleted by users. They are accessible in test steps, modules, and test cases.
 When typing `{{` in the Web/App Agent, an overlay displays all available variables, including regular, secret, and smart variables, with smart variables labeled as "Smart" and accompanied by descriptions.
:::

Smart Variables are listed under the variables section within an authoring session.

<img loading="lazy" src={require('../assets/images/kane-ai/features/smart-variables/smart-variables-list.png').default} className="doc_img"/>

### How to Use Smart Variables in Your Tests?
***

Smart variables can be referenced in test steps, modules, and test cases using the `{{smart.variable_name}}` syntax. Follow these steps to integrate them into your tests:

#### Step 1: Access the Test Environment

Enter the Authoring or Editing mode for a KaneAI test case

#### Step 2: Reference a Smart Variable

In the "Write a Step" field type `{{` to trigger the variable overlay. This will display a list of all available variables, including smart variables labeled with "Smart".

For example, to use the current date in a test step:

Use `{{` syntax to get the list of smart variables listed and type to search and filter them out then select the desired one.

<VerifiedTag value="Verified" />

```
Enter the value of {{smart.current_date}} in the date field
```

<img loading="lazy" src={require('../assets/images/kane-ai/features/smart-variables/smart-variables-fetching.png').default} className="doc_img"/> 

#### Step 3: Select a Smart Variable

From the overlay, select the desired smart variable. The variable will be inserted into the test step in the correct syntax (e.g., `{{smart.current_date}}`).

#### Step 4: Run Your Test

Once the test step is executed the smart variable will dynamically resolve to its corresponding value based on the current environment or condition (e.g., `2025-04-29` for `{{smart.current_date}}`).

### Supported Smart Variables
***

Below is a comprehensive list of supported smart variables, organized by category, along with their syntax and descriptions:

| Category              | Variable Name         | Syntax                        | Description                                                                 |
|-----------------------|-----------------------|-------------------------------|-----------------------------------------------------------------------------|
| **Date & Time**       | `current_date`        | `{{smart.current_date}}`      | Current date in YYYY-MM-DD format                                           |
|                       | `current_day`         | `{{smart.current_day}}`       | Current day of the week (Monday, Tuesday, etc.)                             |
|                       | `current_month`       | `{{smart.current_month}}`     | Current month name (January, February, etc.)                                |
|                       | `current_month_number`| `{{smart.current_month_number}}`| Current month number (01, 02, ..., 12)                                      |
|                       | `current_year`        | `{{smart.current_year}}`      | Current year (YYYY)                                                         |
|                       | `current_hour`        | `{{smart.current_hour}}`      | Current hour in 24-hour format (00 to 23)                                   |
|                       | `current_minute`      | `{{smart.current_minute}}`    | Current minute (00 to 59)                                                   |
|                       | `current_timestamp`   | `{{smart.current_timestamp}}` | Current timestamp in epoch milliseconds                                     |
|                       | `current_timezone`    | `{{smart.current_timezone}}`  | Current timezone name (e.g., GMT, UTC+5:30)                                 |
|                       | `next_day`            | `{{smart.next_day}}`          | Date of the next day in YYYY-MM-DD format                                   |
|                       | `previous_day`        | `{{smart.previous_day}}`      | Date of the previous day in YYYY-MM-DD format                               |
|                       | `start_of_week`       | `{{smart.start_of_week}}`     | Date of the first day of the current week (YYYY-MM-DD)                      |
|                       | `end_of_week`         | `{{smart.end_of_week}}`       | Date of the last day of the current week (YYYY-MM-DD)                       |
|                       | `start_of_month`      | `{{smart.start_of_month}}`    | Date of the first day of the current month (YYYY-MM-DD)                     |
|                       | `end_of_month`        | `{{smart.end_of_month}}`      | Date of the last day of the current month (YYYY-MM-DD)                      |
| **User/System Information** | `os_type`       | `{{smart.os_type}}`           | Operating system name on which test is running (e.g., Windows, macOS, Linux)|
|                       | `os_version`          | `{{smart.os_version}}`        | Operating system version on which test is running (e.g., 10.0, 14.2)        |
|                       | `browser_name`        | `{{smart.browser_name}}`      | Browser name on which test is running (e.g., Chrome, Firefox, Safari)       |
|                       | `browser_version`     | `{{smart.browser_version}}`   | Browser version on which test is running (e.g., 112.0, 101.0.1)             |
|                       | `user_name`           | `{{smart.user_name}}`         | Current user name on <BrandName /> who trigger the test                        |
| **Randomized**        | `random_int`          | `{{smart.random_int}}`        | Random 3 digit integer                                                      |
|                       | `random_float`        | `{{smart.random_float}}`      | Random 2 digit float                                                        |
|                       | `random_string_8`     | `{{smart.random_string_8}}`   | Random alphanumeric string of specified length                              |
|                       | `random_string_56`    | `{{smart.random_string_56}}`  | Random alphanumeric string of specified length                              |
|                       | `random_email`        | `{{smart.random_email}}`      | Random email address                                                        |
|                       | `random_phone`        | `{{smart.random_phone}}`      | Random phone number                                                         |
| **Device-Specific**   | `device_name`         | `{{smart.device_name}}`       | Name of the mobile device under test                                        |
|                       | `device_model`        | `{{smart.device_model}}`      | Model of the mobile device                                                  |
|                       | `device_os`           | `{{smart.device_os}}`         | Operating system of the mobile device (iOS, Android)                        |
|                       | `device_os_version`   | `{{smart.device_os_version}}` | Version of the operating system (14.4, 11.0)                                |
|                       | `device_orientation`  | `{{smart.device_orientation}}`| Orientation of the device (Portrait, Landscape)                             |
|                       | `app_version`         | `{{smart.app_version}}`       | Version of the app under test                                               |
|                       | `app_package_name`    | `{{smart.app_package_name}}`  | Package name of the app under test                                          |

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/smart-variables/smart-variables-guide.mp4').default} type="video/mp4" />
</video>

## Next Steps
***

Combine variables with live data sources and custom logic.

- Generate JSON variables from queries with [KaneAI Database](/support/docs/kaneai-database/).
- Capture a snippet's return value as a variable with [KaneAI JavaScript Execution](/support/docs/kane-ai-javascript-execution/).

If you have feedback or suggestions, reach out at [support@testmuai.com](mailto:support@testmuai.com).
