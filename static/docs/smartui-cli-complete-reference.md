# Upload and Capture Screenshots with SmartUI CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The SmartUI CLI is a command line tool for visual regression testing on the TestMu AI platform. It captures screenshots of static URLs, uploads existing screenshots or PDFs from a directory, and drives SDK test runs, then compares each capture against a baseline across 40+ browser versions to surface Visual UI Regression bugs. You can also upload screenshots programmatically through the SmartUI Upload API (v2) without the CLI.

This reference covers every method to get screenshots into SmartUI along with the complete CLI command, option, flag, and configuration reference.








## Prerequisites

- Node.js v20.3+ installed (required for SmartUI CLI v4.x.x)
- npm or yarn package manager
- Basic understanding of the Command Line Interface
- TestMu AI account credentials, logged in to [TestMu AI SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
- SmartUI project created


If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.


## Installation

Install the SmartUI CLI or Storybook CLI globally, or add the SmartUI CLI locally to your project.




**Global Installation (Recommended):**
```bash
npm install -g @lambdatest/smartui-cli@latest
```

**Local Installation:**
```bash
npm install @lambdatest/smartui-cli
```

**Current Version**: v4.1.43+



```bash
npm install -g @lambdatest/smartui-storybook@latest
```
**Current Version**: v1.1.29+




## Create a SmartUI Project

Create a project to combine all builds run on it into one dashboard.

1. Go to the [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).
2. Click on the `new project` button.
3. Select the platform as CLI for executing your `CLI` tests.
4. Add the name of the project, approvers for the changes found, and tags for any filter or easy navigation.
5. Click on **Submit**.

After the project is created, copy the `Project Token` shown in the SmartUI app. A sample project token looks like this:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Configure your Project Token

Set the project token shown in the SmartUI app so the CLI can authenticate to your project.




```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```




```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```




```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```








## Upload Existing Screenshots via CLI

Use the `upload` command to send a directory of existing images (jpgs, jpegs, pngs) to SmartUI for comparison.

1. Upload the required directory of images:

```
npx smartui upload <directoryName>
```

   Expected result: the screenshots in the directory are uploaded to SmartUI and grouped into a build.

2. To ignore image resolutions, add the `--ignoreResolutions` flag. By default, SmartUI captures and considers image resolutions. To compare images solely based on their names, use the following flag:

```
npx smartui upload <directoryName> --ignoreResolutions
```

### SmartUI CLI Upload Options

Please read the following table for more information about the options available to upload a directory of static images to SmartUI.

| Config Key Shortcut  |       Configuration Key     &nbsp;&nbsp;&nbsp;  | Description|               Usage     &nbsp;&nbsp;&nbsp;       |
| ---------------------| ---------------------------------------------------------------------------|--------------| -------------------- |
| -R |      --ignoreResolutions | Ignores resolutions to compare only based on screenshot names | `npx smartui upload  -R` |
| -F | --files `extensions`            | Comma-separated list of allowed file extensions| `npx smartui upload  -F jpg,png`|
| -E | --removeExtensions          | Strips file extensions from snapshot names| `npx smartui upload   -E` |
| -i | --ignoreDir `patterns`        | Comma-separated list of directories to ignore | `npx smartui upload  -i dir1/dir2,dir3` |
|    | --fetch-results [filename] | Live fetched comparison results in a json file | `npx smartui upload  --fetch-results [custom-results.json]`|
|    | --buildName &lt;string&gt; | Specify a custom build name | `npx smartui upload  --buildName "Build Name"`|
|    | --userName &lt;string&gt; | Override TestMu AI username | `npx smartui upload  --userName "user"`|
|    | --accessKey &lt;string&gt; | Override TestMu AI access key | `npx smartui upload  --accessKey "key"`|
|    | --config &lt;filepath&gt; | Configuration file path | `npx smartui upload  --config .smartui.json`|


You may use the `smartui upload --help` command in case you are facing issues during the execution of SmartUI Upload options in the CLI.


### Setup with Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI CLI` execution then the following are the steps needs to be added to your `.yaml` file:

```yaml
steps:
- name: Running SmartUI CLI Tests
- run: |
npm install @lambdatest/smartui-cli
npx playwright install-deps
npx smartui upload <Directory Name> --removeExtensions
```

### Fetch results

You can fetch build results by adding the `--fetch-results` flag to your test execution command. Here are different ways to use this feature:

**Default Usage** — If no filename is specified, results will be stored in `results.json`:

```bash
npx smartui upload <directoryName> --fetch-results
```

**Custom Filename** — Specify a custom filename for your results:

```bash
npx smartui upload <directoryName> --fetch-results custom-results.json
```

### Adding a custom build name

You can add a custom build name by adding the `--buildName` flag to your test execution command. Specify a custom build name to group your screenshots in the following way:

```bash
npx smartui upload <directoryName>  --buildName "Sample Build Name"
```

> Note:
> - If no build name is provided, a random name will be automatically assigned to the build.
> - Specifying the name of an existing build within the project will append the screenshots to that build.
> - Existing screenshots with the same name and configuration in the build will be overwritten during a re-run.

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.





## Capture Static URLs via CLI

Use the `capture` command to run visual regression tests against a list of static URLs defined in a web static config file.

1. Create the URL file:

```
smartui config:create-web-static urls.json
```

   Once the `URLs` file is created, you will see the sample pre-filled URLs in the `urls.json` file:

```json title="/smartui-cli-project/urls.json"
[
{
"name": "lambdatest-home-page",
"url": "https://www.testmuai.com",
"waitForTimeout": 1000 //Optional
},
{
"name": "example-page",
"url": "https://example.com/"
}
]

```

**Please Note**
   The `waitForTimeout` is an optional configuration.

   If you are using any async components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.



2. Create and configure the SmartUI config. Generate the configuration file:

```bash
npx smartui config:create .smartui.json
```

   Once the configuration file is created, you will see the default configuration pre-filled in the configuration file:

```json title="/smartui-sdk-project/.smartui.json"
{
"web": {
"browsers": [
"chrome",
"firefox",
"safari",
"edge"
],
"viewports": [
[
1920
],
[
1366
],
[
1028
]
] // Full Page screenshots are captured by default for web viewports
},
"mobile": {
"devices": [
"iPhone 14",  //iPhone 14 viewport
"Galaxy S24"  //Galaxy S24 viewport
],
"fullPage": true, //Full Page is true by default for mobile viewports
"orientation": "portrait" //Change to "landscape" for landscape snapshot
}
}
```

3. Execute the tests on SmartUI Cloud using the CLI:

```bash
npx smartui capture urls.json --config .smartui.json
```

   Expected result: SmartUI captures each URL across the configured browsers and viewports and groups the screenshots into a build.

### For capturing viewport screenshots

To capture a screenshot of the content currently visible in your viewport, rather than the entire page, it's important to define the viewport's width and height in your configuration settings. Specify the desired width and height parameters as demonstrated in the following example to ensure that the screenshot encompasses only the viewport area.

```json
"viewports": [
[
1920,
1080
],
[
1366,
768
],
[
360,
640
]
],
```


You may use the `smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.


### SmartUI CLI Config Options

Please read the following table for more information about the configuration file:

| Config Key     | Description                                                                                                                        | Usage     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| browsers       | You can add all the supported browsers brands here to run your tests for SmartUI.  Ex: `"chrome", "firefox", "safari", "edge", etc..` | Mandatory |
| viewports    | You can add all the supported browser viewpoints here to run your tests for SmartUI  Ex: `[1920, 1080],[width, height] etc..`  | Mandatory |

### Additional Options

You can also use the following options with the capture command:

- `--scheduled ` - Specify schedule ID for scheduled test runs
- `--userName ` - Override TestMu AI username
- `--accessKey ` - Override TestMu AI access key
- `--buildName ` - Specify a custom build name
- `--fetch-results [filename]` - Fetch and save results to JSON file

**Example with additional options:**
```bash
npx smartui capture urls.json --config .smartui.json --buildName "Release-v1.0" --fetch-results results.json
```

### Executing browser scripts using the Capture Command

SmartUI CLI provides the flexibility to execute custom JavaScript code on target URLs at specific stages of the snapshot process. This feature is crucial for:

- Interacting with dynamic elements
- Managing loading states
- Modifying page content
- Validating page states
- Performing actions like accepting cookies, clicking on buttons, etc.
These capabilities ensure that your visual tests accurately capture the true representation of your web pages.

You can execute any valid JavaScript code that you would typically run inside a browser. For example, to simulate a button click, you might use:

```js
document.querySelector('.my-button-example').click();
```

**Execute Option Keys**

The `execute` option accepts an object with the following keys:

- **afterNavigation**: This function is called after the page navigates to the specified URL. It is useful for actions that need to occur once the page has loaded.

- **beforeSnapshot**: This function is called just before SmartUI captures a snapshot. It is ideal for final adjustments or interactions needed to prepare the page for capture.

Example usage in a configuration:

```json
{
"name": "Example Page",
"url": "https://example.com/",
"waitForTimeout": 3000,
"execute": {
"afterNavigation": "await page.waitForSelector('.loading', { hidden: true })",
"beforeSnapshot": "document.querySelector('.cookie-banner').click()"
}
}
```

This example waits for a loading element to disappear after navigation and clicks a cookie banner before taking a snapshot.

### Fetch results

You can fetch build results by adding the `--fetch-results` flag to your test execution command. Here are different ways to use this feature:

**Default Usage** — If no filename is specified, results will be stored in `results.json`:

```bash
npx smartui capture urls.json --config .smartui.json --fetch-results
```

**Custom Filename** — Specify a custom filename for your results:

```bash
npx smartui capture urls.json --config .smartui.json --fetch-results custom-results.json
```

### Adding a custom build name

You can add a custom build name by adding the `--buildName` flag to your test execution command. Specify a custom build name to group your screenshots in the following way:

```bash
npx smartui capture urls.json --buildName "Sample Build Name" --config .smartui.json
```

> Note:
> - If no build name is provided, a random name will be automatically assigned to the build.
> - Specifying the name of an existing build within the project will append the screenshots to that build.
> - Existing screenshots with the same name and configuration in the build will be overwritten during a re-run.

### Setup with Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI CLI` execution then the following are the steps needs to be added to your `.yaml` file:

```yaml
steps:
- name: Running SmartUI CLI Tests
run: |
npm install -g @lambdatest/smartui-cli
npx playwright install-deps
smartui capture urls.json --config smartui-web.json
```

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.



### Parallel execution of static URLs

You can reduce the build time by executing parallel URLs in the following way.

```bash
npx smartui capture urls.json --config .smartui.json --parallel <number-of-parallels> --fetch-results
```

- The `--parallel` flag determines how many URLs will be processed simultaneously per browser
- Each thread captures screenshots independently, maximizing throughput
- Use `--force` flag to forcefully apply parallel instances even if not optimal

>**Example:**
>```bash
>npx smartui capture urls.json --config .smartui.json --parallel 3 --fetch-results
>```

>**Example with force flag:**
>```bash
>npx smartui capture urls.json --config .smartui.json --parallel 5 --force --fetch-results
>```

**Determining Optimal Thread Count**

The maximum number of parallel threads is calculated using the formula: log2(N) where N is the total number of URLs.

>**For example:**
>- For 100 URLs: Maximum parallel threads = log2(100) = 6 threads
>- For 50 URLs: Maximum parallel threads = log2(50) = 5 threads
>- For 25 URLs: Maximum parallel threads = log2(25) = 4 threads

**Best Practices for parallel execution**

- Start with a lower thread count and gradually increase based on your system's performance
- Monitor system resources during execution
- Ensure stable internet connection for reliable parallel processing



## Upload Screenshots via Upload API (v2)

Upload local screenshots to a SmartUI project programmatically over HTTP, without the CLI. This is version 2 of the SmartUI upload API.


This is the guide to setup the **version 2** of the SmartUI upload API.


**Prerequisites for the Upload API:**

- Basic understanding of HTTP APIs is required.
- Go to [`LambdaTest SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and login along with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from the `Access Key` button on the top right of the dashboard.

Once you have created a SmartUI Project, you can upload your local screenshots to the project, which will create a build. Follow the below steps to upload screenshots.

1. Copy the below API endpoint to your project:

```
API_URL="https://api.lambdatest.com/automation/smart-ui/v2/upload"
```

**NOTE**
   For more information, please visit our [API documentation](https://www.testmuai.com/support/api-doc/).


2. Add the following information to your API payload `form-body`:

   | Variable            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Is Mandatory? |
   | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
   | files               | array   | You can add the path to the files which will be uploaded. `files : [ "path/to/file-1", ""path/to/file-2"]`                                                                                                                                                                                                                                                                                                                                       | True          |
   | projectToken        | string  | Project token needs to be specified to upload the files and validate the project . `projectToken:123456#1234abcd-****-****-****-************`                                                                                                                                                                                                                                                                                   | True          |
   | buildName           | string  | Name anything of your choice specified for the uploaded screenshots to a build. `buildName : #`                                                                                                                                                                                                                                                                                                                                      | Optional      |
   | baseline            | boolean | An option to make your build as a baseline build for comparison . `baseline : true/false`                                                                                                                                                                                                                                                                                                                                                        | Optional      |
   | screenshotName  new | string  | Pass the unique screenshot name in order to compare it. | Optional         |

**NOTE**
   We only support the following formats: `.png` `.jpeg` `.jpg`


   Expected result: the uploaded screenshots are grouped into a build in your SmartUI project.

Please see the below screenshots for adding the screenshots which need to be uploaded for your project to generate a build.






## SmartUI CLI Commands

### Main Commands Overview



| Command | Description | Usage |
|---------|------------|-------|
| `exec` | Execute test commands with SmartUI server | `smartui exec [options] -- ` |
| `capture` | Capture screenshots of static URLs | `smartui capture [options] ` |
| `upload` | Upload screenshots from directory | `smartui upload [options] ` |
| `upload-pdf` | Upload PDFs for visual comparison | `smartui upload-pdf [options] ` |




| Command | Description | Usage |
|---------|------------|-------|
| `exec:start` | Start SmartUI snapshot server | `smartui exec:start [options]` |
| `exec:stop` | Stop SmartUI snapshot server | `smartui exec:stop` |
| `exec:ping` | Check if server is running | `smartui exec:ping` |
| `exec:pingTest` | Ping server using default HTTP client | `smartui exec:pingTest` |




| Command | Description | Usage |
|---------|------------|-------|
| `config:create` | Create SmartUI config file | `smartui config:create [filepath]` |
| `config:create-web-static` | Create Web Static config file | `smartui config:create-web-static [filepath]` |
| `config:create-figma` | Create Figma designs config file | `smartui config:create-figma [filepath]` |
| `config:create-figma-web` | Create Figma config with browsers | `smartui config:create-figma-web [filepath]` |
| `config:create-figma-app` | Create Figma config for mobile apps | `smartui config:create-figma-app [filepath]` |




| Command | Description | Usage |
|---------|------------|-------|
| `upload-figma` | Capture Figma screenshots | `smartui upload-figma [options] ` |
| `upload-figma-web` | Capture Figma into CLI build | `smartui upload-figma-web [options] ` |
| `upload-figma-app` | Capture Figma into App build | `smartui upload-figma-app [options] ` |




| Command | Description | Usage |
|---------|------------|-------|
| `merge branch` | Merge source branch into target | `smartui merge branch [options]` |
| `merge build` | Merge source build into target | `smartui merge build [options]` |







## Command Details



**Execute Tests**

Execute test commands with SmartUI server running.

**Syntax:**
```bash
smartui exec [options] -- <command>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Test command to execute | `npm test`, `mvn test`, `python test.py` |

**Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--port ` | `-P` | Port number for the server | `49152` |
| `--fetch-results [filename]` | | Fetch results and save to JSON file | `results.json` |
| `--buildName ` | | Custom build name for test run | Random |
| `--scheduled ` | | Specify schedule ID | - |
| `--userName ` | | TestMu AI username (overrides env) | - |
| `--accessKey ` | | TestMu AI access key (overrides env) | - |
| `--config ` | `-c` | Configuration file path | `.smartui.json` |

**Examples:**
```bash
# Basic execution
smartui exec -- npm test

# Custom port
smartui exec -P 5000 -- npm test

# With build name and results
smartui exec --buildName "Release-1.0" --fetch-results results.json -- npm test

# With custom config
smartui exec --config custom-config.json -- npm test

# Override credentials
smartui exec --userName "user" --accessKey "key" -- npm test
```



**Capture Static URLs**

Capture screenshots of static URLs from a configuration file.

**Syntax:**
```bash
smartui capture [options] <file>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Web static config file | `urls.json` |

**Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--parallel [number]` | `-C` | Number of parallel instances per browser | Auto-calculated |
| `--force` | `-F` | Forcefully apply parallel instances | `false` |
| `--fetch-results [filename]` | | Fetch results and save to JSON | `results.json` |
| `--buildName ` | | Custom build name | Random |
| `--scheduled ` | | Schedule ID | - |
| `--userName ` | | TestMu AI username | - |
| `--accessKey ` | | TestMu AI access key | - |
| `--config ` | `-c` | Configuration file path | `.smartui.json` |

**Examples:**
```bash
# Basic capture
smartui capture urls.json --config .smartui.json

# With parallel execution
smartui capture urls.json --parallel 3 --config .smartui.json

# Force parallel execution
smartui capture urls.json --parallel 5 --force --config .smartui.json

# With build name and results
smartui capture urls.json --buildName "Daily-Run" --fetch-results daily-results.json
```
**Parallel Execution:**
- Maximum parallel threads: `log₂(N)` where N = total URLs
- Example: 100 URLs = max 6 threads, 50 URLs = max 5 threads




**Upload Screenshots**

Upload screenshots from a directory for comparison.

**Syntax:**
```bash
smartui upload [options] <directory>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Path to directory containing screenshots | `./screenshots` |

**Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--ignoreResolutions` | `-R` | Ignore resolutions, compare by name only | `false` |
| `--files ` | `-F` | Comma-separated allowed extensions | All image types |
| `--removeExtensions` | `-E` | Strip extensions from snapshot names | `false` |
| `--ignoreDir ` | `-i` | Comma-separated directories to ignore | - |
| `--fetch-results [filename]` | | Fetch results and save to JSON | `results.json` |
| `--buildName ` | | Custom build name | Random |
| `--userName ` | | TestMu AI username | - |
| `--accessKey ` | | TestMu AI access key | - |

**Examples:**
```bash
# Basic upload
smartui upload ./screenshots

# Ignore resolutions
smartui upload ./screenshots --ignoreResolutions

# Filter file types
smartui upload ./screenshots --files jpg,png

# Remove extensions from names
smartui upload ./screenshots --removeExtensions

# Ignore specific directories
smartui upload ./screenshots --ignoreDir temp,old

# Combined options
smartui upload ./screenshots -R -E --buildName "Test-Run"
```



**Upload PDFs**

Upload PDF files for visual comparison.

**Syntax:**
```bash
smartui upload-pdf [options] <directory>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Path to directory or single PDF file | `./pdfs` or `./document.pdf` |

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--fetch-results [filename]` | Fetch results and save to JSON | `results.json` |
| `--buildName ` | Custom build name | Random |
| `--markBaseline` | Mark this build as baseline | `false` |
| `--pdfNames ` | Comma-separated list of PDF file names to upload | - |

**Examples:**
```bash
# Upload directory of PDFs
smartui upload-pdf ./pdfs --buildName "Release-v2.1"

# Upload single PDF
smartui upload-pdf ./document.pdf --buildName "Single-PDF"

# Mark as baseline
smartui upload-pdf ./pdfs --markBaseline --buildName "Baseline-v1.0"

# With results
smartui upload-pdf ./pdfs --fetch-results pdf-results.json
```



**Start Server**

Start the SmartUI snapshot server.

**Syntax:**
```bash
smartui exec:start [options]
```
**Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--port ` | `-P` | Port number for server | `49152` |
| `--fetch-results [filename]` | | Fetch results and save to JSON | `results.json` |
| `--buildName ` | | Custom build name | Random |

**Examples:**
```bash
# Start on default port
smartui exec:start

# Start on custom port
smartui exec:start -P 5000

# With build name
smartui exec:start --buildName "Server-Build"
```
**Usage Workflow:**

1. Start server:
```bash
smartui exec:start
```
2. Set server address (for non-Selenium SDKs):
```bash
export SMARTUI_SERVER_ADDRESS='http://localhost:49152'
```
3. Run tests:
```bash
npm test
```
4. Stop server:
```bash
smartui exec:stop
```



**Stop Server**

Stop the SmartUI snapshot server.

**Syntax:**
```bash
smartui exec:stop
```
**Important:** Always use `exec:stop` instead of Ctrl+C. Using Ctrl+C will cause the build to stop after 12 minutes.




**Check Server Status**

Check if the SmartUI server is running.

**Syntax:**
```bash
smartui exec:ping
# or
smartui exec:pingTest
```
**Command Comparison:**

| Command | Description | HTTP Client |
|---------|-------------|-------------|
| `exec:ping` | Check server status | Custom HTTP client |
| `exec:pingTest` | Check server status | Default HTTP client |




**Merge Branches/Builds**

Merge source branch or build into target.

**Merge Branch Syntax:**
```bash
smartui merge branch [options]
```
**Merge Branch Options:**

| Option | Description | Required |
|--------|-------------|----------|
| `--source ` | Source branch to merge | Yes |
| `--target ` | Target branch to merge into | Yes |

**Merge Build Syntax:**
```bash
smartui merge build [options]
```
**Merge Build Options:**

| Option | Description | Required |
|--------|-------------|----------|
| `--source ` | Source build to merge | Yes |
| `--target ` | Target build to merge into | Yes |

**Examples:**
```bash
# Merge feature branch into main
smartui merge branch --source feature/new-ui --target main

# Merge build
smartui merge build --source "Build-123" --target "Baseline-Build"
```



**Figma Integration Commands**



Upload Figma designs for visual comparison.

**Syntax:**
```bash
smartui upload-figma [options] <file>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Figma design config file | `figma-config.json` |

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--markBaseline` | Mark uploaded images as baseline | `false` |
| `--buildName ` | Name of the build | Random |




Capture Figma screenshots into CLI build.

**Syntax:**
```bash
smartui upload-figma-web [options] <file>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Figma config file | `figma-config.json` |

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--markBaseline` | Mark as baseline | `false` |
| `--buildName ` | Build name | Random |
| `--fetch-results [filename]` | Fetch results and save to JSON | `results.json` |




Capture Figma screenshots into App build.

**Syntax:**
```bash
smartui upload-figma-app [options] <file>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Figma config file | `figma-config.json` |

**Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `--markBaseline` | Mark as baseline | `false` |
| `--buildName ` | Build name | Random |
| `--fetch-results [filename]` | Fetch results and save to JSON | `results.json` |










## Global Options

These options can be used with most commands:

| Option | Short | Description |
|--------|-------|-------------|
| `--version` | `-V` | Output version number |
| `--config ` | `-c` | Config file path |
| `--markBaseline` | | Mark this build as baseline |
| `--baselineBranch ` | | Mark build baseline for branch |
| `--baselineBuild ` | | Mark build baseline |
| `--githubURL ` | | GitHub URL including commit ID |
| `--help` | `-h` | Display help |

The following are the core supported `CLI (Command Line Interface)` options for Visual Regression Testing with SmartUI:

| CLI Flag Key | Description                                                                         | Usage    |
| ------------ | ----------------------------------------------------------------------------------- | -------- |
| --config     | This is the reference configuration file containing the SmartUI Cloud Configuration | Optional |
| --help       | This will print all help information for the SmartUI CLI options                    | Optional |



## Storybook CLI Commands



**Main Command**

**Syntax:**
```bash
smartui storybook [options] <url|directory>
```
**Arguments:**

| Argument | Description | Example |
|----------|-------------|---------|
| `` | Storybook URL or static build directory | `http://localhost:6006` or `./storybook-static` |

**Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--config ` | `-c` | Config file path | `.smartui.json` |
| `--force-rebuild` | | Force rebuild of existing build | `false` |
| `--buildName ` | | Build name for pipeline | Random |
| `--env ` | | Runtime environment | `prod` |

**Examples:**
```bash
# Local Storybook server
smartui storybook http://localhost:6006 --config .smartui.json

# Static build
smartui storybook ./storybook-static --config .smartui.json

# Public hosted URL
smartui storybook https://your-storybook-url.com --config .smartui.json

# Force rebuild
smartui storybook ./storybook-static --force-rebuild

# Stage environment
smartui storybook http://localhost:6006 --env stage
```



**Config Command**

**Syntax:**
```bash
smartui config create [filepath]
```
**Arguments:**

| Argument | Description | Default |
|----------|-------------|---------|
| `[filepath]` | Optional config file path | `.smartui.json` |

**Options:**

| Option | Description |
|--------|-------------|
| `--help`, `-h` | Display help information |

**Description:**
Create a SmartUI Storybook configuration file with default settings.






## Advanced Options

### Hidden/Advanced Options

These options are available but may not be prominently documented:

| Option | Commands | Description | Example |
|--------|----------|-------------|---------|
| `--scheduled ` | `capture`, `exec` | Specify schedule ID for scheduled test runs | `smartui capture urls.json --scheduled "schedule-123"` |
| `--userName ` | `capture`, `exec`, `upload` | Override TestMu AI username (overrides env) | `smartui capture urls.json --userName "user"` |
| `--accessKey ` | `capture`, `exec`, `upload` | Override TestMu AI access key (overrides env) | `smartui exec --accessKey "key" -- npm test` |
| `--env ` | `storybook` | Switch between production and staging environments | `smartui storybook http://localhost:6006 --env stage` |
| `--force` | `capture` | Forcefully apply parallel instances even if not optimal | `smartui capture urls.json --parallel 10 --force` |
| `--force-rebuild` | `storybook` | Force rebuild of an already existing Storybook build | `smartui storybook ./storybook-static --force-rebuild` |

**Usage Examples:**
```bash
# Scheduled test runs
smartui capture urls.json --scheduled "schedule-123"
smartui exec --scheduled "schedule-123" -- npm test

# Override credentials
smartui capture urls.json --userName "user" --accessKey "key"
smartui exec --userName "user" --accessKey "key" -- npm test

# Environment switching (Storybook)
smartui storybook http://localhost:6006 --env stage
smartui storybook http://localhost:6006 --env prod

# Force parallel execution
smartui capture urls.json --parallel 10 --force

# Force rebuild (Storybook)
smartui storybook ./storybook-static --force-rebuild
```


## Environment Variables



| Variable | Description | Required |
|----------|-------------|----------|
| `PROJECT_TOKEN` | SmartUI project token | Yes (for CLI projects) |
| `LT_USERNAME` | TestMu AI username | Yes (for Hooks) |
| `LT_ACCESS_KEY` | TestMu AI access key | Yes (for Hooks) |




| Variable | Description | Default |
|----------|-------------|---------|
| `PROJECT_NAME` | Project name (creates if doesn't exist) | - |
| `BASELINE_BRANCH` | Baseline branch for CLI projects | - |
| `CURRENT_BRANCH` | Current branch for CLI projects | - |




| Variable | Description | Format |
|----------|-------------|--------|
| `HTTP_PROXY` | HTTP proxy URL | `http://[user:pass@]host:port/` |
| `HTTPS_PROXY` | HTTPS proxy URL | `https://[user:pass@]host:port/` |
| `SMARTUI_HTTP_PROXY` | Proxy for SmartUI HTTP traffic | - |
| `SMARTUI_HTTPS_PROXY` | Proxy for SmartUI HTTPS traffic | - |
| `SMARTUI_API_PROXY` | Proxy for SmartUI API traffic | - |




| Variable | Description | Default |
|----------|-------------|---------|
| `SMARTUI_SERVER_ADDRESS` | Server address for SDKs | `http://localhost:49152` |




| Variable | Description | Default |
|----------|-------------|---------|
| `LT_SDK_DEBUG` | Enable debug mode | `false` |
| `SMARTUI_DO_NOT_USE_CAPTURED_COOKIES` | Disable captured cookies | `false` |




**Setting Environment Variables:**



```bash
export PROJECT_TOKEN="123456#token"
export LT_USERNAME="username"
export LT_ACCESS_KEY="access_key"
export HTTP_PROXY="http://proxy:8080"
export LT_SDK_DEBUG=true
```


```bash
set PROJECT_TOKEN="123456#token"
set LT_USERNAME="username"
set LT_ACCESS_KEY="access_key"
set HTTP_PROXY="http://proxy:8080"
set LT_SDK_DEBUG=true
```


```powershell
$env:PROJECT_TOKEN="123456#token"
$env:LT_USERNAME="username"
$env:LT_ACCESS_KEY="access_key"
$env:HTTP_PROXY="http://proxy:8080"
$env:LT_SDK_DEBUG="true"
```





## End-to-End Workflows



**Basic Static URL Capture**
```bash
# 1. Install CLI
npm install -g @lambdatest/smartui-cli

# 2. Set project token
export PROJECT_TOKEN="123456#token"

# 3. Create config
npx smartui config:create .smartui.json

# 4. Create URLs file (urls.json)
# 5. Capture screenshots
npx smartui capture urls.json --config .smartui.json

# 6. Fetch results
npx smartui capture urls.json --fetch-results results.json
```



**SDK Test Execution**
```bash
# 1. Set project token
export PROJECT_TOKEN="123456#token"

# 2. Start server
npx smartui exec:start

# 3. Set server address (for non-Selenium)
export SMARTUI_SERVER_ADDRESS='http://localhost:49152'

# 4. Run tests
npm test

# 5. Stop server
npx smartui exec:stop
```



**Upload Existing Screenshots**
```bash
# 1. Set project token
export PROJECT_TOKEN="123456#token"

# 2. Upload directory
npx smartui upload ./screenshots --buildName "Manual-Test"

# 3. With options
npx smartui upload ./screenshots \
--ignoreResolutions \
--removeExtensions \
--buildName "Test-Run" \
--fetch-results results.json
```


**Storybook Testing**
```bash
# 1. Install Storybook CLI
npm install -g @lambdatest/smartui-storybook

# 2. Set project token
export PROJECT_TOKEN="123456#token"

# 3. Start Storybook
npm run storybook

# 4. Capture stories
smartui storybook http://localhost:6006 --config .smartui.json

# 5. Or use static build
npm run build-storybook
smartui storybook ./storybook-static --config .smartui.json
```



**PDF Testing**
```bash
# 1. Set project token
export PROJECT_TOKEN="123456#token"

# 2. Upload PDFs
npx smartui upload-pdf ./pdfs --buildName "PDF-Release-v1.0"

# 3. Mark as baseline
npx smartui upload-pdf ./pdfs --markBaseline --buildName "PDF-Baseline"
```



**CI/CD Integration**

**GitHub Actions Example:**
```yaml
- name: Run SmartUI Tests
env:
PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
run: |
npm install -g @lambdatest/smartui-cli
npx smartui exec --buildName "${{ github.sha }}" -- npm test
```
**GitLab CI Example:**
```yaml
test:
variables:
PROJECT_TOKEN: $PROJECT_TOKEN
script:
- npm install -g @lambdatest/smartui-cli
- npx smartui exec --buildName "$CI_COMMIT_SHA" -- npm test
```





## Best Practices



**Build Naming**

- Use meaningful, consistent names
- Include version or commit info
- Avoid special characters
- Use environment variables for dynamic names
```bash
# Good
--buildName "Release-v1.0.0"
--buildName "$(git rev-parse --short HEAD)"
--buildName "${{ github.sha }}"

# Bad
--buildName "test"
--buildName "build-$(date)"
```



**Configuration Management**

- Keep config files in version control
- Use environment variables for sensitive data
- Document custom configurations
- Use separate configs for different environments




**Parallel Execution**

- Start with lower thread counts
- Monitor system resources
- Use `--force` only when necessary
- Calculate optimal threads: `log₂(N)`



**Server Management**

- Always use `exec:stop` to terminate server
- Check server status with `exec:ping`
- Use custom ports to avoid conflicts
- Set `SMARTUI_SERVER_ADDRESS` before running tests




**Error Handling**

- Always use `--fetch-results` for CI/CD
- Check exit codes in scripts
- Implement retry logic for transient failures
- Log errors for debugging




**Results Reporting**

Use the [SmartUI Reporter](https://smartui-reporter.netlify.app/) to visualize and analyze test results:

1. **Export Results**: Use `--fetch-results` flag to generate JSON
```bash
npx smartui capture urls.json --config config.json --fetch-results results.json
```

2. **Upload to Reporter**: Visit [SmartUI Reporter](https://smartui-reporter.netlify.app/) and upload `results.json`

3. **View & Export**: Access tabular view with statistics, screenshot links, and export to PDF/CSV

**Alternative**: Fetch results via [SmartUI API](https://swagger-api-support.lambdatest.com/smartui/index.html#/Fetch%20Build%20Screenshots)

For detailed steps, see [Fetch Results Documentation](/support/docs/smartui-sdk-fetch-results/#using-smartui-reporter-tool).




**URL Grouping for Large Test Suites**

When working with large numbers of URLs (1000+) that can be divided into sections/groups, you have two strategies:

**Strategy 1: Single Project with Branching**
- Use one SmartUI project with Smart Git branching
- All sections in a single project dashboard
- Each section can have its own branch
- Unified tracking and reporting

```bash
# Enable Smart Git
export SMART_GIT=true

# Run different sections in different branches
git checkout -b section1-bathroom
npx smartui capture sections/section1.json --config config.json --buildName "Section1-Bathroom"
```

**Strategy 2: Separate Projects**
- Create individual projects for each section
- Complete isolation between sections
- Independent baselines and approvals
- Minimal projects with single branch

```bash
# Section 1 - Bathroom Project
export PROJECT_TOKEN="${PROJECT_TOKEN_BATHROOM}"
npx smartui capture bathroom/urls.json --config config.json

# Section 2 - Kitchens Project
export PROJECT_TOKEN="${PROJECT_TOKEN_KITCHENS}"
npx smartui capture kitchens/urls.json --config config.json
```

**When to Use Each:**
- **Single Project**: Unified dashboard, cross-section analysis, shared configs
- **Separate Projects**: Complete isolation, independent workflows, different configs

For detailed guidance, see [SmartUI Capture Onboarding with HyperExecute](/support/docs/smartui-hooks-with-hyperexecute/).






## Troubleshooting



**Server Not Running**
```bash
# Check status
npx smartui exec:ping

# Start server
npx smartui exec:start

# Verify address
echo $SMARTUI_SERVER_ADDRESS
```



**Port Conflicts**
```bash
# Use custom port
npx smartui exec:start -P 5000
npx smartui exec -P 5000 -- npm test
```



**Authentication Issues**
```bash
# Verify credentials
echo $PROJECT_TOKEN
echo $LT_USERNAME
echo $LT_ACCESS_KEY

# Override with command options
npx smartui capture urls.json --userName "user" --accessKey "key"
```


**Configuration Errors**
```bash
# Validate JSON
cat .smartui.json | python -m json.tool

# Check config path
npx smartui capture urls.json --config .smartui.json
```






## Additional Resources

- [CLI Exec Commands](/support/docs/smartui-cli-exec)
- [Environment Variables](/support/docs/smartui-running-your-first-project/)
- [Storybook Integration](/support/docs/smart-ui-storybook)
- [Configuration Options](/support/docs/smartui-sdk-config-options)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
