# How to Run Cucumber Tests with Espresso on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI runs Espresso test suites built with **cucumber-android** on real Android devices and on Android emulators. Add a `cucumberOptions` object to your build request or your HyperExecute YAML to choose which scenarios run and which Cucumber reports are generated.

With `cucumberOptions` you can:

- **Select the scenarios to run** with Cucumber tag expressions, feature file paths and scenario names.
- **Get Cucumber reports** in JUnit XML, JSON and HTML, for the full build, for each test, and for each HyperExecute job and shard.

Each Cucumber scenario is a separate test on the App Automation dashboard, with its own video, device logs and status.

You can use `cucumberOptions` with the [Espresso REST API](#run-cucumber-tests-with-the-rest-api) and with [HyperExecute](#run-cucumber-tests-with-hyperexecute).

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Your **Android** app (`.apk` or `.aab`) and your **Espresso test suite** (`.apk`).
- A test suite that uses **cucumber-android 4.x or 7.x** and the Cucumber instrumentation runner. A custom runner that extends `CucumberAndroidJUnitRunner` is also supported.

```groovy title="app/build.gradle"
android {
defaultConfig {
testInstrumentationRunner "io.cucumber.android.runner.CucumberAndroidJUnitRunner"
}
}

dependencies {
androidTestImplementation "io.cucumber:cucumber-android:7.18.1"
}
```

- Feature files in the assets of the test APK, for example `app/src/androidTest/assets/features/`.

TestMu AI checks the test suite when you start the build. If you send `cucumberOptions` with a test suite that does not use cucumber-android, the build is rejected before it starts. See [Test suite is not a Cucumber suite](#test-suite-is-not-a-cucumber-suite).

## Run Cucumber Tests with the REST API

### Step 1: Upload your app and test suite

Upload the app and the test suite with the same API. Each upload returns an `app_url` in the format `lt://APP...`. For details, see [Run Espresso tests](/support/docs/getting-started-with-espresso-testing/).

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form 'appFile=@""' --form 'type="espresso-android"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form 'appFile=@""' --form 'type="espresso-android"'`}

### Step 2: Start the build with `cucumberOptions`

Add the `cucumberOptions` object to the Espresso build request. Replace `APP_ID` and `TEST_SUITE_ID` with the values from Step 1.

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
--location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "lt://APP_ID",
"testSuite": "lt://TEST_SUITE_ID",
"device": ["Pixel 8-14", "Galaxy S23-13"],
"build": "Cucumber smoke tests",
"singleRunnerInvocation": false,
"cucumberOptions": {
"tags": "@smoke and not @wip",
"features": ["features/login.feature"],
"name": "^Login",
"plugins": ["json", "junit", "html"]
}
}'
```

The response contains the build ID. Use it to [download the Cucumber reports](#download-cucumber-reports).

### `cucumberOptions` parameters

All parameters are optional. If you set more than one filter, only the scenarios that match **all** of the filters run.

| Parameter | Type | Description | Example |
|---|---|---|---|
| `tags` | String | A Cucumber tag expression. Only the scenarios that match the expression run. | `"@smoke and not @wip"` |
| `features` | Array of strings | The feature files or folders to run, relative to the test APK assets. Add `:` to run the scenario at that line. | `["features/login.feature", "features/cart.feature:12"]` |
| `name` | String | A regular expression. Only the scenarios with a matching name run. | `"^Checkout"` |
| `plugins` | Array of strings | The Cucumber reports to generate. Allowed values: `json`, `junit`, `html`. If you do not set `plugins`, no Cucumber report is generated. | `["json", "junit"]` |

### How scenarios run

The `singleRunnerInvocation` capability controls how the selected scenarios are executed.

| `singleRunnerInvocation` | Behaviour |
|---|---|
| `false` (default) | TestMu AI finds the scenarios that match your filters, then runs each scenario in a separate instrumentation call. Each scenario has its own video and logs, and failed scenarios are retried one by one. |
| `true` | TestMu AI runs all the selected scenarios in one instrumentation call. The result still shows one test for each scenario. |

## Filter Scenarios

The examples below show only the `cucumberOptions` object. The same keys work in the REST API request and in the HyperExecute YAML.

### Filter by feature file path

Paths are relative to the assets folder of the test APK.

Run every feature file in one or more folders:

```json
"cucumberOptions": {
"features": ["features/login", "features/checkout"]
}
```

Run specific feature files:

```json
"cucumberOptions": {
"features": ["features/login.feature", "features/cart.feature"]
}
```

Run the single scenario at a given line of a feature file:

```json
"cucumberOptions": {
"features": ["features/cart.feature:12"]
}
```

### Filter by tags

Pass a Cucumber tag expression. You can combine tags with `and`, `or`, `not` and parentheses.

```json
"cucumberOptions": {
"tags": "@smoke and not @wip"
}
```

### Filter by scenario name

Pass a regular expression. Every scenario whose name matches the expression runs.

```json
"cucumberOptions": {
"name": "^Checkout"
}
```

## Run Cucumber Tests with HyperExecute

Add `cucumberOptions` under `framework.args` in your HyperExecute YAML file. The fields are the same as in the REST API. For the rest of the YAML and the CLI setup, see [Espresso on HyperExecute](/support/docs/hyperexecute-espresso-testing/).

```yaml title="hyperexecute.yaml"
version: "0.2"
concurrency: 2
runson: android
autosplit: true

framework:
name: "android/espresso"
args:
buildName: "Cucumber regression"
appPath: app.apk
testSuitePath: test-suite.apk
singleRunnerInvocation: false
deviceSelectionStrategy: any
devices: ["Pixel 8-14", "Galaxy S23-13"]
#highlight-start
cucumberOptions:
tags: "not @wip"
plugins: ["json", "junit"]
#highlight-end
```

With `autosplit: true`, HyperExecute splits the selected scenarios across the devices.

### Shard by tags

Use the `tags` shard strategy to give each shard its own tag expressions.

```yaml title="hyperexecute.yaml"
framework:
name: "android/espresso"
args:
cucumberOptions:
tags: "not @wip"
plugins: ["json"]
shards:
mappings:
- name: smoke
strategy: tags
values: ["@smoke"]
- name: payments
strategy: tags
values: ["@payments", "@refunds"]
```

Each shard runs the scenarios that match the job-level `tags` **and** at least one of its shard `values`. In this example:

| Shard | Scenarios that run |
|---|---|
| `smoke` | `not @wip and @smoke` |
| `payments` | `not @wip and (@payments or @refunds)` |

You can also use the `tags` shard strategy without job-level `cucumberOptions`. Each shard then runs only its own tags.

A Cucumber suite supports only the `tags` shard strategy. You cannot use the `class`, `package`, `annotation` or `size` strategies with `cucumberOptions`. To learn more about shards, see [Sharding Espresso tests](/support/docs/sharding-espresso-rd-hyperexecute/).

## Download Cucumber Reports

Set `plugins` in `cucumberOptions` to generate reports. You do not need to set a plugin path in your `@CucumberOptions` annotation. TestMu AI sets the report path on the device and collects the files.

The report APIs are available after the build or the job has ended. Authenticate with your TestMu AI username and access key.

**Base URL:** `https://mobile-api.lambdatest.com/mobile-automation/api/v1`

### Reports of an Espresso build

| Report | Endpoint |
|---|---|
| JUnit XML of the full build | `GET /framework/builds/{buildId}/report/cucumber` |
| JUnit XML of one test | `GET /framework/builds/{buildId}/report/cucumber?test_id={testId}` |
| ZIP with JSON, XML and HTML of the full build | `GET /framework/builds/{buildId}/report/cucumber/assets` |
| ZIP with JSON, XML and HTML of one test | `GET /framework/builds/{buildId}/report/cucumber/assets?test_id={testId}` |

```bash
# JUnit XML of a build
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
"https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/builds/<buildId>/report/cucumber"

# ZIP of all the reports of a build
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" -o cucumber_reports.zip \
"https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/builds/<buildId>/report/cucumber/assets"
```

To get the test IDs of a build, list its sessions:

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
"https://mobile-api.lambdatest.com/mobile-automation/api/v1/sessions?build_id=<buildId>"
```

### Reports of a HyperExecute job

| Report | Endpoint |
|---|---|
| JUnit XML of the job | `GET /framework/jobs/{jobId}/report/cucumber` |
| JUnit XML of one shard | `GET /framework/jobs/{jobId}/report/cucumber?shard={shardId}` |
| ZIP of the job | `GET /framework/jobs/{jobId}/report/cucumber/assets` |
| ZIP of one shard | `GET /framework/jobs/{jobId}/report/cucumber/assets?shard={shardId}` |

```bash
# JUnit XML of one HyperExecute shard
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
"https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/jobs/<jobId>/report/cucumber?shard=<shardId>"
```

Run the HyperExecute CLI with the `--verbose` flag to print the job ID and the shard IDs in the logs.

### JUnit XML format

The XML has the same format as the Cucumber `JUnitFormatter`: one `` for each scenario. A failed scenario has a `` element with the error message.

```xml
<testsuite failures="1" name="cucumber.runtime.formatter.JUnitFormatter" skipped="0" tests="2" time="1.84">
<testcase classname="Subtraction" name="Subtract to a negative result" time="0.83"/>
<testcase classname="Subtraction" name="Deliberately wrong subtraction" time="1.00">
<failure message="...">...</failure>
</testcase>
</testsuite>
```

### ZIP layout

```text
assets_<buildId>/
└── reports/
├── json/<testId>.json
├── xml/<testId>.xml
└── html/<testId>/index.html
```

Open `index.html` in a browser to see the Cucumber HTML report of a scenario.

### Report API responses

| Status | Cause |
|---|---|
| `200` | The report is returned. |
| `401` | The username or access key is missing or incorrect. |
| `403` | The build has not ended. Try again after it ends. |
| `404` | The build ran without `plugins`, the build does not exist, the `test_id` is not in the build, or the `shard` is not in the job. |

## Supported Versions and Devices

| | Support |
|---|---|
| cucumber-android 7.x | Filters and reports |
| cucumber-android 4.x | Filters and reports |
| Real devices | Yes |
| Virtual devices (Android emulators) | Yes |
| Espresso REST API | Yes |
| HyperExecute (autosplit and `tags` shards) | Yes |
| Data residency | US and EU (GDPR) organizations |
| Frameworks | Espresso only |

## Troubleshooting

### Request errors (REST API)

TestMu AI validates the request before it creates the build. If the request is not valid, the API returns HTTP `400` and no build is created.

| Cause | Error message |
|---|---|
| `cucumberOptions` is not an object | `cucumberOptions must be an object. Please provide a valid input` |
| `tags` or `name` is not a string | `cucumberOptions tags must be a string. Please provide a valid input` |
| `features` is not an array of strings | `cucumberOptions features must be a list of strings. Please provide a valid input` |
| `cucumberOptions` is sent with the `class`, `package`, `annotation` or `size` filters | `cannot use cucumberOptions with class, package, annotation or size filters. Please provide a valid input` |
| `clearPackageData` is sent with `singleRunnerInvocation: true` | `cannot use cucumberOptions with clearPackageData when singleRunnerInvocation is true. Please provide a valid input` |
| A comma in one `features` value | `cucumberOptions features cannot have a comma in one value. Please provide a valid input` |
| Both `'` and `"` in one value | `cucumberOptions tags, features and name cannot have both ' and " in one value. Please provide a valid input` |
| A `plugins` value that is not `json`, `junit` or `html` | `invalid cucumberOptions plugin "". Allowed values are json, junit, html` |

### HyperExecute YAML errors

The HyperExecute CLI validates the YAML before it uploads anything.

| Cause | Error message |
|---|---|
| A `plugins` value that is not allowed | `Invalid yaml content: invalid cucumberOptions plugin ""; allowed values are json, junit, html` |
| Both `'` and `"` in one value | `Invalid yaml content: cucumberOptions tags, features and name cannot have both ' and " in one value` |
| A shard strategy other than `tags` with a Cucumber suite | `Invalid yaml content: shards of a Cucumber suite support only the tags strategy` |

### Test suite is not a Cucumber suite

If you send `cucumberOptions` with a test suite that does not use cucumber-android, the build or job is not created:

```text
[INVALID_TEST_SUITE_APP_ID] cucumberOptions needs a test suite built with cucumber-android,
but the test suite lt://APP... has no cucumber-android runner.
Please remove cucumberOptions or upload a cucumber-android test suite
```

### Build errors

In these cases the build status is `error` and the remark gives the cause.

| Cause | Remark |
|---|---|
| No scenario matches the filters (REST API) | `No tests found in the test suite. Please check your test suite or applied filters.` |
| No scenario matches the filters (HyperExecute) | `No tests matched your filters. Please verify that your filters are correctly configured and that the test suite contains the expected tests.` |
| A feature or scenario name has a comma or `#`, with `singleRunnerInvocation: false` | `Cucumber test # cannot run on its own because its feature or scenario name has a comma or a hash (#). Please rename it.` |
| A feature or scenario name is too long | `Cucumber test  has a feature or scenario name longer than  characters, so its result cannot be stored. Please shorten the name.` |
| Cucumber cannot start with the given options, for example an incorrect tag expression | `Cucumber could not start with the given cucumberOptions. Please check the tags expression, the feature paths and the name regular expression.` |

## Limitations

- `cucumberOptions` is available only for Espresso.
- With `singleRunnerInvocation: false`, a scenario cannot run if its feature name or scenario name has a comma (`,`) or a hash (`#`). Rename the scenario, or use `singleRunnerInvocation: true`.
- One `tags`, `features` or `name` value cannot have both a single quote (`'`) and a double quote (`"`).
- You cannot combine `cucumberOptions` with the Espresso `class`, `package`, `annotation` or `size` filters, or with those HyperExecute shard strategies.
- You cannot combine `cucumberOptions` with `clearPackageData` when `singleRunnerInvocation` is `true`.
- Cucumber reports are available through the API. The dashboard does not show them yet.

## Frequently Asked Questions

**Do I need to set a plugin path in my `@CucumberOptions` annotation?**

No. Set `plugins` in the request or in the YAML. TestMu AI sets the report path on the device and collects the files.

**What happens if I do not set `plugins`?**

The filters still work, but no Cucumber report is generated. The report APIs then return `404`.

**Can I run a single scenario?**

Yes. Use `features` with a line number, for example `["features/login.feature:12"]`, or use `name` with a regular expression.

**Are retries supported?**

Yes. With `singleRunnerInvocation: false`, each scenario is retried as a separate test. The reports use the result of the last attempt.

**Does a Scenario Outline give one test for each example row?**

Yes. Each example row is a separate test on the dashboard and a separate `` in the report.
