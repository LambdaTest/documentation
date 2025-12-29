---
id: smartui-cli-upload
title: Upload your Screenshots via CLI
sidebar_label: Upload through CLI
description: In this documentation, learn how to upload and compare images (jpgs, jpegs, pngs) using the SmartUI CLI.
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

url: https://www.testmu.ai/support/docs/smartui-cli-upload
slug: smartui-cli-upload

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
          "item": "https://www.lambdatest.com/support/docs/smartui-cli-upload/"
        }]
      })
    }}
></script>
With SmartUI CLI, you can seamlessly perform visual regression testing on the LambdaTest platform using your command line, identifying Visual UI Regression bugs effortlessly. This guide will walk you through the process of uploading and comparing images using the SmartUI CLI.

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

## Step 2: Configure your Project Token

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

## Step 3: Upload the required directory of images

```
npx smartui upload <directoryName>
```
The screenshots in the directory name will be uploaded to SmartUI.

### For ignoring the resolutions of the images

By default, SmartUI captures and considers image resolutions. If you prefer to ignore resolutions and compare images solely based on their names, use the following flag:

```
npx smartui upload <directoryName> --ignoreResolutions
```

### SmartUI CLI Upload Options

Please read the following table for more information about the options available to upload a directory of static images to SmartUI.

| Config Key Shortcut  |       Configuration Key     &nbsp;&nbsp;&nbsp;  | Description|               Usage     &nbsp;&nbsp;&nbsp;       |
| ---------------------| ---------------------------------------------------------------------------|--------------| -------------------- |
| -R |      --ignoreResolutions | Ignores resolutions to compare only based on screenshot names | `npx smartui upload <directoryName> -R` |
| -F | --files `extensions`            | Comma-separated list of allowed file extensions| `npx smartui upload <directoryName> -F jpg,png`|
| -E | --removeExtensions          | Strips file extensions from snapshot names| `npx smartui upload <directoryName>  -E` |
| -i | --ignoreDir `patterns`        | Comma-separated list of directories to ignore | `npx smartui upload <directoryName> -i dir1/dir2,dir3` |
|    | --fetch-results [filename] | Live fetched comparison results in a json file | `npx smartui upload <directoryName> --fetch-results [custom-results.json]`|
|    | --buildName &lt;string&gt; | Specify a custom build name | `npx smartui upload <directoryName> --buildName "Build Name"`|
|    | --userName &lt;string&gt; | Override LambdaTest username | `npx smartui upload <directoryName> --userName "user"`|
|    | --accessKey &lt;string&gt; | Override LambdaTest access key | `npx smartui upload <directoryName> --accessKey "key"`|
|    | --config &lt;filepath&gt; | Configuration file path | `npx smartui upload <directoryName> --config .smartui.json`|

:::note
You may use the `smartui upload --help` command in case you are facing issues during the execution of SmartUI Upload options in the CLI.
:::

## Setup with Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI CLI` execution then the following are the steps needs to be added to your `.yaml` file:

```yaml
steps:
  - name: Running SmartUI CLI Tests
    - run: |
       npm install @lambdatest/smartui-cli
       npx playwright install-deps
       npx smartui upload <Directory Name> --removeExtensions
```

## SmartUI CLI Options and Keys

The following are supported `CLI (Command Line Interface)` options for Visual Regression Testing with SmartUI:

| CLI Flag Key | Description                                                                         | Usage    |
| ------------ | ----------------------------------------------------------------------------------- | -------- |
| --config     | This is the reference configuration file containing the SmartUI Cloud Configuration | Optional |
| --help       | This will print all help information for the SmartUI CLI options                    | Optional |

## View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

## Fetch results

You can fetch build results by adding the `--fetch-results` flag to your test execution command. Here are different ways to use this feature:

### Default Usage
If no filename is specified, results will be stored in `results.json`:

```bash
npx smartui upload <directoryName> --fetch-results
```

### Custom Filename
Specify a custom filename for your results:

```bash
npx smartui upload <directoryName> --fetch-results custom-results.json
```
## Adding a custom build name
You can add a custom build name by adding the `--buildName` flag to your test execution command. Here is how you can utilise this feature:

Specify a custom build name to group your screenshots in the following way:

```bash
npx smartui upload <directoryName>  --buildName "Sample Build Name"
```

> Note:
> - If no build name is provided, a random name will be automatically assigned to the build.
> - Specifying the name of an existing build within the project will append the screenshots to that build.
> - Existing screenshots with the same name and configuration in the build will be overwritten during a re-run.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [CLI Documentation](/support/docs/smartui-cli)
- [CLI Exec Commands](/support/docs/smartui-cli-exec)
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
      <span className='breadcrumbs__link'> SmartUI Upload Screenshots </span>
    </li>
  </ul>
</nav>