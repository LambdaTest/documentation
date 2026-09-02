# How to Use Variables and Secrets With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Variables are placeholders that store values you reuse across a test case instead of hardcoding them, which keeps tests maintainable when values like URLs, credentials, or device configurations change. KaneAI stores three kinds of values: variables you define, secrets for encrypted sensitive data, and smart variables that resolve dynamically at run time. You manage them from the [variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables).

Variables let you:
- Avoid repeating the same value across test cases.
- Capture a value from the application under test, store it, and assert on it.
- Reuse and adapt test steps for values that change often, such as URLs, credentials, or environment settings.

## Types of Variables

KaneAI supports two kinds of variables:

- **String Variables**: Store simple text values. They can be used for things like usernames, or any textual data. String variables can be created via KaneAI or manually within the session.

- **JSON Variables**: Store structured data in the form of key-value pairs. JSON variables are especially useful for passing complex objects such as API responses. JSON variables are auto-generated from API calls and DB queries used in KaneAI and cannot be created manually.

## Scope of Variables

KaneAI variables have one of three scopes, which controls where the value is available.

### Local Variables

Local variables are defined through natural language or as part of an instruction you provide. They are accessible only within the test case where you define them, which keeps values isolated to a specific context. You can convert a local variable to a global or environment variable within a KaneAI authoring session.

### Global Variables

Global variables are accessible across test cases within the entire organisation, so you reuse the same value in many places. When you convert a local variable to global, you can enable a persist check to keep the value across sessions if it changes during one. The Persist Value section below covers this.

### Environment Variables

Environment variables hold values set for a specific environment, such as staging or production. Use them for URLs or credentials that differ per environment, so one test case runs across multiple environments. The Environments section below covers this.

## Create and Edit Variables

Create a variable using one of the following three methods.

### Using the Slash Command

Define a variable directly with the `/` command in the step input, then select **Add a variable**. This method creates _global_ and _environment_ variables and sets their values. Edit a variable's value by clicking the variables listing icon at the top right.

### Using Natural Language

Create a variable in plain English inside a step. For example:

```bash
Set username as John
```
This creates a _local_ variable `{{username}}` with the value "John". For such local variables, you can change the scope to global and enable the persist check, which keeps the value across sessions and test executions when it updates in one.

### From the Variables Page

On the [variables page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables), click **Create new**, then add the details and scope. This page lists all global and environment variables. Editing a variable's session value here updates it in all new test executions and sessions for that variable.

### From a Manual Interaction Step

While reviewing a Manual Interaction step, replace any hard-coded value in the step's instruction with a Parameter, Variable, or Secret, without deleting or re-recording the step. This flow works on both **Desktop** and **Mobile App** Manual Interaction sessions.

#### Convert a Value in a Step

1. Open the recorded Manual Interaction step (for example, *Type in main search input field 'test.com'*).
2. **Select the portion** of the instruction text you want to replace (for example, highlight `test.com`).

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

- Existing secrets cannot be reused from the Convert as popover. The Secret tab only exposes the **`+` Create Secret** action. This is enforced for security, so a fresh secret must be created each time one is assigned to a Manual Interaction step.
- This is only supported for `Click` and `Type` Commands

For a deeper look at parameters, see [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).

## Use Variables During Authoring

Reference variables in your steps to make test cases dynamic.

### Syntax for Assertions

Type the `{{` prefix in the KaneAI session input box to list all existing variables. Use a variable to input a value or as part of the assertion logic.

#### String variables example:

```bash
Enter {{username}} in user input field
```
This will input the value of the username variable in the user input field.

```bash
assert {{username}} contains 'John'
```
This will assert if the username variable contains the value "John".

#### JSON variables example:
JSON variables come from an API response used via the slash command or from a database query output. Reach a specific object inside the JSON hierarchy by typing the `{{` prefix in the KaneAI session input box. For example, assert that the email field inside the API response variable matches "john.doe@example.com".

```bash
assert {{api_variable.response.email}} is 'john.doe@example.com'
```
Here is a video to further explain the JSON variables usage:

### Assert on a JSON API Response

When a step makes an API call, KaneAI stores the entire response as a JSON variable, so you can assert on the status code or any field in the response body. The following walkthrough shows the end-to-end flow.

**1. Make the API call.** Choose the HTTP method (GET, POST, and so on), add any required headers and a request body, then send the request to your endpoint.

**2. Access the response variables.** KaneAI automatically generates variables for the response status code, body, headers, and related metadata.

**3. Assert the response status.** Type `{{` to open the variable list, select the status variable, and set the expected code. For example, expect `200`; if the actual status is `500`, the assertion fails.

**4. Assert on the response body.** Open the variable menu again with `{{`, browse to the specific JSON element you want to validate, and create the assertion, for example confirming that a `dogs` element exists or that a nested property matches an expected value.

## Persist Value in Variables

The persist value check keeps a variable's value across multiple test executions, which matters when a value must stay consistent between test cases and runs. For example, if you fetch a value from the application under test while authoring, persist it so other test cases use the same value during execution.

The persist check option becomes available only when you change a variable's scope from local to global.

## Environments

Environments hold per-deployment variable values so one test case runs across staging, production, and more.

### How Environments Work

Environments in KaneAI are the configurations a test runs under, such as development, staging, and production. Each environment can hold its own set of variables tailored to that deployment.

### Use Environments in Test Runs

Once you author a test case with environment variables, run it in any environment where those variables exist.

#### From the UI
When you run or schedule a test run, choose the environment to execute on. All test cases in a test run execute on a single environment at a time.

#### From the API
Pass the environment name programmatically when you start a test run via the API, so you automate execution across environments. For example:

* Before running the command, replace `` with your Base64-encoded TestMu AI credentials and `YOUR_TEST_RUN_ID` with the relevant test run ID.
* To find the optional `environment_id`, click your desired environment. In the resulting URL, use the value of the `envId` parameter as the `environment_id`.
* For example, if the URL contains `envId=4133`, use **4133** as the environment_id.

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

For sensitive values you would not want stored as plain variables, use secrets instead. Secret variables store sensitive data such as passwords and API tokens in HashiCorp Vault, so values never appear in logs or generated code.

- In the Web/App Agent, you see all secrets created at your user level or your organisation level.
- A user role can create only user-level secrets. An admin can create user-level or org-level secrets.
- You can delete your own secrets. Only an admin can delete org-level secrets.
- Secrets are accessible in test steps, modules, and test cases.

### Create Secrets

Create secrets from either of these two places.
- Test Manager
- Web/App Agent

#### Create Secrets via Test Manager
**Step 1:** Navigate to the Test Manager.
**Step 2:** Click on the settings icon > Secrets.
**Step 3:** Click on the **Create new secret** button.
**Step 4:** Provide the secret key and value and click on the **Create Secret** button.

#### Create Secrets via Web/App Agent
**Step 1:** Navigate to the **"Write a Step"** field where you typically write your test scenarios in plain English.
**Step 2:** To switch to Secrets mode, type the forward slash / or click on the + icon. You will see a Secret pop-up option appear.
**Step 3:** Provide the secret key and value and click on the **Create Secret** button.

### Use Your Secrets

Once created, reference a secret in your test steps using **double-curly braces syntax (e.g.,`{{email}}`)**.

> To use a previously created variable in any subsequent step or test case, reference the variable using the same `{{` syntax. This will list down all existing variables for this test.

Format:
```bash
use the value of {{secrets.user.email}} in the email text field
```

### Update Your Secrets

**Step 1:** Navigate to the Test Manager.
**Step 2:** Click on the settings icon > Secrets.
**Step 3:** Click on the **pencil** icon to update that respective secret value.
**Step 4:** Provide the secret value and click on the **Update secret** button.

### Delete Your Secrets

**Step 1:** Navigate to the Test Manager.
**Step 2:** Click on the settings icon > Secrets.
**Step 3:** Click on the **delete** icon to update that respective secret value.
**Step 4:** Provide the secret value and click on the confirmation button.

### Data Masking and Anonymization

TestMu AI protects sensitive data in tests through synthetic substitution and capture-time masking. Four mechanisms apply.

- **AI Autofill (synthetic substitution)** - generates realistic substitute values against your real dataset structure, so production values are replaced rather than encoded. No mapping between original and substituted values is retained, removing the re-identification vector.
- **Secret variables (HashiCorp Vault)** - values marked as secret are resolved at runtime from HashiCorp Vault and are never written to action logs, session logs, screenshots (known secret values are redacted from screenshot OCR before upload), video recordings, run summaries, or reports.
- **Lambda Masking** - hides sensitive data in recorded test commands and session recordings.
- **SmartUI PII masking** - masks PII regions in visual snapshots. Masking is enforced at capture time, not applied post-hoc, so masked data is never persisted in artifacts.

## Smart Variables

Where the variables and secrets above hold values you supply, KaneAI also provides built-in smart variables for dynamic values it resolves for you. Smart variables are predefined, dynamic variables you use across test steps, modules, and test cases. They resolve to real-time values at run time, so tests adapt to the current environment and conditions without manual input.

They cover date and time, system information, location, connectivity, randomization, and device-specific details.

 Smart variables are predefined. You cannot create or delete them. They are accessible in test steps, modules, and test cases.
 When you type `{{` in the Web/App Agent, an overlay displays all available variables, including regular, secret, and smart variables. Smart variables are labeled "Smart" with a description.

Smart variables are listed under the variables section within an authoring session.

### Use Smart Variables

Reference smart variables in test steps, modules, and test cases using the `{{smart.variable_name}}` syntax. Follow these steps.

#### Step 1: Open the Test for Editing

Enter authoring or editing mode for a KaneAI test case.

#### Step 2: Reference a Smart Variable

In the **Write a Step** field, type `{{` to trigger the variable overlay, which lists all available variables including smart variables labeled "Smart". Type to search and filter, then select the one you want. For example, to use the current date:

```
Enter the value of {{smart.current_date}} in the date field
```

#### Step 3: Select a Smart Variable

From the overlay, select the smart variable. KaneAI inserts it into the step in the correct syntax (for example, `{{smart.current_date}}`).

#### Step 4: Run Your Test

When the step executes, the smart variable resolves to its value for the current environment or condition (for example, `2025-04-29` for `{{smart.current_date}}`).

### Supported Smart Variables

The table below lists every supported smart variable by category, with its syntax and description.

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
|                       | `user_name`           | `{{smart.user_name}}`         | Current user name on TestMu AI who trigger the test                        |
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

## Next Steps

Combine variables with live data sources and custom logic.

- Generate JSON variables from queries with [KaneAI Database](/support/docs/kaneai-database/).
- Capture a snippet's return value as a variable with [KaneAI JavaScript Execution](/support/docs/kane-ai-javascript-execution/).

If you have feedback or suggestions, reach out at [support@testmuai.com](mailto:support@testmuai.com).
