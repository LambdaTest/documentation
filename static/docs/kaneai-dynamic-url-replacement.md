# How to Replace URLs Dynamically With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Dynamic URL Replacement lets you run the same KaneAI test cases across multiple environments (for example, staging and production) without modifying your test scripts.

> This feature is applicable only for Web Tests

## Prerequisites


You must have already set up your [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/).

## Use Dynamic URL Replacement


Follow these steps to open a test run, set the pattern and replacement URLs, and execute the run against a different environment.

### Step 1: Open Test Run


- Log in to TestMu AI.
- Go to the Test Manager > Test Runs section.
- Click on your desired **Test Run**.
- Click the **Run on HyperExecute** button.



### Step 2: Configure Execution URL


- In the Run on HyperExecute side drawer, locate the new field labeled **Replace Test Execution URL**.
- Enter the **Pattern URL** (your original URL used in the tests) and **Replacement URL** (URL of different environment you want to test) in the text field.

> You can add multiple URLs for all web tests in the run to execute in different environments

### Step 3: Execute Test Run


- If the **Replace Test Execution URL** field is filled, the entered URL will override the default (Pattern) URL during execution.
- If left empty, the test will run with the default URL.
- Click on the **Execute** button



## Use It via API


If you prefer to use the API to configure and execute tests with Dynamic URL Replacement, follow the instructions below:

### API Endpoint


```text title="POST request"
https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute
```

### Request Headers


```javascript
Content-Type: application/json
Authorization: Basic <Base64Auth>
```

### Request Body


The following JSON payload demonstrates how to use the API to configure Dynamic URL Replacement:

```javascript
{
"test_run_id": "YOUR_TEST_RUN_ID", // Replace with your test run ID
"concurrency": 1, // Optional, Default: 1
"title": "UNIQUE_BUILD_NAME", // Optional
"region": "YOUR_DESIRED_REGION", // e.g., eastus, centralindia
"replaced_url": [
{
"pattern_url": "TEST_URL_1",
"replacement_url": "REPLACED_TEST_URL_1"
},
{
"pattern_url": "TEST_URL_2",
"replacement_url": "REPLACED_TEST_URL_2"
},
{
"pattern_url": "TEST_URL_3",
"replacement_url": "REPLACED_TEST_URL_3"
}
],
"accessibility": false
}
```

### Parameters Explained


| Parameter | Description |
|-----------|-------------|
| `test_run_id` | The unique identifier for the test run. |
| `concurrency` | (Optional) Number of parallel executions. Default is 1. |
| `title` | (Optional) A unique name for the build. |
| `region` | The region where the tests will be executed (e.g., eastus, centralindia). |
| `replaced_url` |  An array of objects containing `pattern_url` and `replacement_url` |
| `accessibility` | (Optional) Enable or disable accessibility testing. |

### Example cURL Command


Here’s an example cURL command to trigger a test run with Dynamic URL Replacement:

```bash
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
"test_run_id": "YOUR_TEST_RUN_ID",
"concurrency": 1,
"title": "UNIQUE_BUILD_NAME",
"region": "eastus",
"replaced_url": [
{
"pattern_url": "https://staging.example.com",
"replacement_url": "https://production.example.com"
}
],
"accessibility": false
}'
```

- Replace `` with the Base64 encoding of `username:accessKey` (find both in your account settings).
- Ensure that the `pattern_url` matches the exact URL pattern used in your test scripts.
- Multiple `replaced_url` entries can be added to replace different URLs dynamically.

## Next Steps


Continue with these guides:

- [Test Runs Configurations](/support/docs/test-runs-configurations/): Manage the browser and device configurations your test run executes against.
