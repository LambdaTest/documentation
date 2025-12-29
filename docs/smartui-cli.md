---
id: smartui-cli
title: Capture Static URLs via CLI
sidebar_label: Capture Static URLs
description: In this documentation, learn how to perform Visual UI Testing using command line interface on the TestMu AI Automation Cloud across 40+ browser versions.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.testmu.ai/support/docs/smartui-cli
slug: smartui-cli

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smartui-cli/"
        }]
      })
    }}
></script>

With SmartUI CLI, you can seamlessly perform visual regression testing on the LambdaTest platform using your command line, identifying Visual UI Regression bugs effortlessly. This guide will walk you through the process of running successful Visual Regression tests using SmartUI CLI.

<div className='storylane-iframe'>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className='sl-embed'>
    <iframe loading="lazy" className='sl-demo' src="https://app.storylane.io/demo/7vwai2zbxhzm?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Prerequisites for running SmartUI CLI

- Basic understanding of Command Line Interface is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI CLI.

## Create a SmartUI Web-Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `CLI` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Step 1: Install the Dependencies

Install required NPM modules for `LambdaTest SmartUI CLI` globally or in your project:

**Global Installation (Recommended):**
```bash
npm install -g @lambdatest/smartui-cli
```

**Local Installation:**
```bash
npm install @lambdatest/smartui-cli
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

## Step 2: Create URL file

```
smartui config:create-web-static urls.json
```
Once, the `URLs` file will be created, you will be seeing the sample pre-filled URLs in the `urls.json` file:

```json title="/smartui-cli-project/urls.json"
[
  {
    "name": "lambdatest-home-page",
    "url": "https://www.lambdatest.com",
    "waitForTimeout": 1000 //Optional
  },
  {
    "name": "example-page",
    "url": "https://example.com/"
  }
]

```
:::caution Please Note
The `waitForTimeout` is an optional configuration.

If you are using any async components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.

:::

## Step 3: Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Step 4: Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

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

:::note
You may use the `smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

### SmartUI CLI Config Options

Please read the following table for more information about the configuration file:

| Config Key     | Description                                                                                                                        | Usage     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| browsers       | You can add all the supported browsers brands here to run your tests for SmartUI. <br/> Ex: `"chrome", "firefox", "safari", "edge", etc..` | Mandatory |
| viewports    | You can add all the supported browser viewpoints here to run your tests for SmartUI <br/> Ex: `[1920, 1080],[width, height] etc..` <br/> | Mandatory |

## **Step 5:** Execute the Tests on SmartUI Cloud using CLI

You can now execute tests for `Visual Regression Testing` using the following options:.

```bash
npx smartui capture urls.json --config .smartui.json
```

### Additional Options

You can also use the following options with the capture command:

- `--scheduled <string>` - Specify schedule ID for scheduled test runs
- `--userName <string>` - Override LambdaTest username
- `--accessKey <string>` - Override LambdaTest access key
- `--buildName <string>` - Specify a custom build name
- `--fetch-results [filename]` - Fetch and save results to JSON file

**Example with additional options:**
```bash
npx smartui capture urls.json --config .smartui.json --buildName "Release-v1.0" --fetch-results results.json
```

## Executing browser scripts using the Capture Command

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

### Execute Option Keys

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

## Fetch results

You can fetch build results by adding the `--fetch-results` flag to your test execution command. Here are different ways to use this feature:

### Default Usage
If no filename is specified, results will be stored in `results.json`:

```bash
npx smartui capture urls.json --config .smartui.json --fetch-results
```

### Custom Filename
Specify a custom filename for your results:

```bash
npx smartui capture urls.json --config .smartui.json --fetch-results custom-results.json
```

## Adding a custom build name
You can add a custom build name by adding the `--buildName` flag to your test execution command. Here is how you can utilise this feature:

Specify a custom build name to group your screenshots in the following way:

```bash
npx smartui capture urls.json --buildName "Sample Build Name" --config .smartui.json
```

> Note:
> - If no build name is provided, a random name will be automatically assigned to the build.
> - Specifying the name of an existing build within the project will append the screenshots to that build.
> - Existing screenshots with the same name and configuration in the build will be overwritten during a re-run.

## Setup with Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI CLI` execution then the following are the steps needs to be added to your `.yaml` file:

```yaml
steps:
  - name: Running SmartUI CLI Tests
    - run: |
       npm install -g @lambdatest/smartui-cli
       npx playwright install-deps
       smartui capture urls.json --config smartui-web.json
```

## SmartUI CLI Options and Keys

The following are supported `CLI (Command Line Interface)` options for Visual Regression Testing with SmartUI:

| CLI Flag Key | Description                                                                         | Usage    |
| ------------ | ----------------------------------------------------------------------------------- | -------- |
| --config     | This is the reference configuration file containing the SmartUI Cloud Configuration | Optional |
| --help       | This will print all help information for the SmartUI CLI options                    | Optional |

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Parallel execution of static URLs

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

### Determining Optimal Thread Count
The maximum number of parallel threads is calculated using the formula: log<sub>2</sub>(N) where N is the total number of URLs.

>**For example:**
>- For 100 URLs: Maximum parallel threads = log<sub>2</sub>(100) = 6 threads
>- For 50 URLs: Maximum parallel threads = log<sub>2</sub>(50) = 5 threads
>- For 25 URLs: Maximum parallel threads = log<sub>2</sub>(25) = 4 threads

### Best Practices for parallel execution

- Start with a lower thread count and gradually increase based on your system's performance
- Monitor system resources during execution
- Ensure stable internet connection for reliable parallel processing

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [CLI Exec Commands](/support/docs/smartui-cli-exec)
- [CLI Upload](/support/docs/smartui-cli-upload)
- [Environment Variables](/support/docs/smartui-cli-env-variables)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI CLI </span>
    </li>
  </ul>
</nav>
