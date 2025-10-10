---
id: smartui-cli-git-branching-strategy
title: Branching Strategy in SmartUI SDK
sidebar_label: Default Branching Strategy
description: In this documentation, learn how the Git Branching Strategy is implemented for the SmartUI SDK
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
url: https://www.lambdatest.com/support/docs/smartui-github-app-integration/
site_name: LambdaTest
slug: smartui-cli-git-branching-strategy/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "WebDriverIO With Appium",
          "item": "https://www.lambdatest.com/support/docs/smartui-upload-api-v2/"
        }]
      })
    }}
></script>


:::info
This is the guide to understand our Git Branching with SmartUI projects which can detect the commit history and execute the appropriate actions for your visual regression testing.
:::

### Prerequisites for running Git with Smart UI

- You have an account with [Lambdatest](https://accounts.lambdatest.com).
- You must have an active [subscription](https://www.lambdatest.com/pricing) plan with valid screenshots limit.
- You must have created an Project on the SmartUI web app.

:::caution Warning
This feature is supported for tests ran through <b>CLI</b> project type ([SDK](../smartui-selenium-java-sdk/), [Static CLI](../smartui-cli/), [Storybook](../smart-ui-storybook/)) projects on the SmartUI platform. Please contact support@lambdatest.com for further information or requests.
:::

The following steps will guide you in running your Git branching Visual Regression test on LambdaTest SmartUI platform:

:::info
**Baseline Branch**: A baseline branch build is a set of screenshots which are captured using SmartUI where all the screenshots are compared against for the non-baseline branch builds.

**Non-Baseline Branches**: A non-baseline branch(s) build is a set of screenshots which are captured using SmartUI where all the screenshots are compared against with the **Baseline** build which are matched with the screenshot names.

:::

<img loading="lazy" src={require('../assets/images/smart-visual-testing/git-baseline-non-baseline-diff.webp').default} alt="Smart Visual Testing" width="1600" height="803" className="doc_img"/>

### **Step 1**: Setup your Git Baseline branch in the Project Settings

The following are the steps to add **Baseline** branch to your `CLI projects` with Git commits:

1. Go to **Project Settings** page for the created project.
2. Search for **Git Settings** and add your required **Baseline** branch in the input box.
3. Click on **Update Settings** button to update the project settings and set your **Baseline** Git branch.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/git-settings.webp').default} alt="Smart Visual Testing" width="1600" height="803" className="doc_img"/>

Now, after the successful setup of your **Baseline** branch of your project.

### **Step 2**: Execute your SmartUI CLI with Git commits

The following are the steps to execute your SmartUI CLI with Git commits on CLI projects:

1. Go to your current **project repository** and run the following command:

```bash
git init --y
```

:::tip
You can ignore the above step if you already have a repository with `Git` initialized
:::

2. Now, commit the changes (if any) to your `Git`:

```bash
git commit -m "Your commit message"
```

3. Execute your **SmartUI CLI** command to execute the Visual Regression tests for your files:

<Tabs className="docs__val" groupId="execution_type">

<TabItem value="cli" label="For Static CLI test" default>

```bash
smartui capture urls.json --config .smartui.json                                           
```

</TabItem>

<TabItem value="sdk" label="For SmartUI SDK test" default>

```bash
npx smartui --config .smartui.json exec -- <Your execution command>                                             
```

</TabItem>
<TabItem value="static-build-or-ci" label="For Static Storybook Build">

```bash
npm run build-storybook                                           // Creates a Static Build Folder of StoryBook Stories
smartui storybook ./storybook-static --config .smartui.json       // Captures all the stories added in the static build folder
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/git-basic-setup.webp').default} alt="Smart Visual Testing" width="1600" height="803" className="doc_img"/>

## Git Branching Workflows and Strategies

### Ability to set the **Baseline Branch**

You can set any `branch` name as your **Baseline** branch in the SmartUI project settings page. You can follow the steps below to set your baseline branch:

1. Go to the SmartUI Web App.
2. Select the project in which you want to configure the `Git` baseline branch for.
3. Go to the project settings section by clicking on the top right icon on the `Builds` list page.
4. In the project settings section you can provide the input of the `branch` name.
5. Click on the `Update Settings` button to update the settings.

You can also set the Baseline branch name through your terminal by setting the following environment variable which will automatically update your project settings as well once the test is run.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export BASELINE_BRANCH="Required baseline branch"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set BASELINE_BRANCH="Required baseline branch"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:BASELINE_BRANCH="Required baseline branch"
```

</TabItem>
</Tabs>

:::caution Default Selection of Baseline Branch

In case, if there is no branch is set in your new or existing project created. Then, the `repository's` where SmartUI CLI command is executed to run the tests, **HEAD Branch** will be updated as the **Baseline** branch for that project by default.

:::

### Displaying the Git Commit Meta data

If you are using the `Git` based workflow with `SmartUI CLI` then the following information is displayed on the UI of the SmartUI Web App - Builds list page:

- **Branch Name** is set as the `Build Name` in the SmartUI project.
- The latest **commit ID**of the Git commit added to the current repository.
- The **commit message** of the Git commit of the `commit ID` to the current repository.
- The commit author **username** of the Git commit to the current repository.

:::note

The above metadata is displayed only for CLI **Git** repositories.

:::

### Git Baseline Branch Selection and Comparison Strategy:

### Working on the same branch name

In this workflow, if you are working on the same branch name and want to execute the `SmartUI CLI` command to run the Visual Regression tests for your test cases.

And, if you have created a project and set your **Baseline** branch name to `master` then executed the following commands:

```powershell
// Your current branch name
$ git branch
* <Your Current Active branch>
  <--Other branches-->

// Adds a new commit to your current active branch
$ git commit -m "Your commit message"

// Executing the SmartUI SDK/Static CLI/Storybook tests
$ npx smartui --config .smartui.json exec -- <Execution command>
```

Then, a new build will be created with your `Current Active Branch` on the SmartUI Web App - Build Lists page for the project in which the `SmartUI CLI` command is executed.

If the current Baseline build branch is set to `Current Active Branch` in the SmartUI project settings, then SmartUI will compare the screenshots captured to the latest `APPROVED` status build of the `Current Active Branch` branch available in the same project.

Here is an example of the above workflow:

```bash
$ git branch
* master

$ git commit -m "Second Build Changes"

$ npx smartui --config .smartui.json exec -- <Execution command>
```

<img loading="lazy" src={require('../assets/images/smart-visual-testing/git-working-on-same-branch.webp').default} alt="Smart Visual Testing" width="1600" height="803" className="doc_img"/>

You can streamline your workflow by setting the current branch name directly through your terminal. By configuring the following environment variable, you can automatically designate the input branch name as the branch for that build. This approach effectively overwrites the current Git branch from which you are running the test, providing a convenient method to manage new branches according to specific use cases without altering the Git configuration.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:CURRENT_BRANCH="Required branch"
```

</TabItem>
</Tabs>

### Updating the Baseline Branch Name

In this workflow, if you have created a SmartUI project on the Web App and have executed few builds with a `Branch Name: Master` and want to switch your **Baseline** branch to `development` branch in your `Git`, then following will be the workflow that will help you in switching the **Baseline Branch** for your project:

1. You can go to the `SmartUI Project Settings` page to update your **Baseline Branch** in the project settings from `master` to `development` or update the `BASELINE_BRANCH` variable in the environment to update the baseline branch.
2. Now, execute the `SmartUI CLI` command to run the Visual Regression tests.
3. Then, SmartUI algorithm will check for existing latest `build` with `development` run on the SmartUI project in Builds history.

The following are the cases that SmartUI will update the **Baseline** build for the branch set in your SmartUI project settings:

##### **Case 1**: If a build with development branch exists in build history

In this case, the latest build run on the SmartUI project build history will be updated as a **New Baseline Build** in which the new **Non-Baseline** builds will be compared against.

##### **Case 2**: If a build with development branch does not exist in build history

In this case, the new build run with the `development` git branch name will be set to the current **Baseline** build for the SmartUI project.

:::caution Note
For the first build generated for the **Baseline branch build** in the SmartUI Projects will be automatically set to **SYSTEM APPROVED** status by default.  
:::

### Detect changes for Git commit added to **Baseline Branch**

In this workflow, if I make changes in the set Baseline branch in the Smart UI project that is master and make an commit to the Git then,

Execute `SmartUI CLI` commands to execute the test cases. Tests will compare the results with the latest **APPROVED** build run for **Baseline Branch** build in the SmartUI project.


:::note
On approval of the all the screenshots then the new build will be updated as Baseline build for the baseline branch.
:::

Here is an example of the above workflow:

```bash
// Step 1 - Commit changes to Git
$ git commit -am "Changes in login Flow"
(git) Changes added to your branch

// Step 2 - Execute SmartUI CLI to trigger Build in the SmartUI project
$ npx smartui --config .smartui.json exec -- <Execution command>
```

### Comparing Non-Baseline Branch builds with **Baseline** branch builds

In this workflow, if you want to compare a **non-baseline branch build** to a **baseline build** the following are steps to be followed:

Step 1: Checkout to a non-baseline branch in your `Git` repository.

Step 2: Then run the SmartUI CLI command to execute the tests should compare the screenshots captured of **Non-Baseline** branch build with the **Baseline branch** latest **APPROVED** build in the SmartUI project.

Here is an example of the above workflow:

```bash
// Baseline Branch
$ git branch
* master

// Non-Baseline branch
$ git checkout -b develop
* develop
  master

// Executing SmartUI Build with Non-Baseline Git branch
$ npx smartui --config .smartui.json exec -- <Execution command>
```

<img loading="lazy" src={require('../assets/images/smart-visual-testing/git-baseline-non-baseline.webp').default} alt="Smart Visual Testing" width="1600" height="803" className="doc_img"/>

### Handling Builds with Missing Screenshots

When a build is executed in the same branch as the **Baseline Branch**, SmartUI will compare it against the latest approved baseline build. If some screenshots (or variants) that were present in the baseline are missing from the current build, a `Missing Screenshots` warning <img loading="lazy" src={require('../assets/images/smart-visual-testing/missing-ss/Validation.webp').default} alt="Smart Visual Testing" className="doc_img"/> will be displayed.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/missing-ss/Tooltip-missing.webp').default} alt="Smart Visual Testing" className="doc_img"/>

If this build with missing screenshots shows no visual changes compared to the baseline, it will be automatically approved. However, SmartUI will mark it as an `Incomplete` build and will not set it as a new baseline.

For builds with missing screenshots that do contain visual changes, you can manually approve them to set them as a new baseline if desired.

> **Note**: If a build contains any new screenshots that weren't present in the baseline, SmartUI interprets this as an intentional test case modification. In such cases, the `Missing Screenshots` tooltip will not be displayed, even if some screenshots from the baseline are missing.

### Auto Updating **Baseline** build for the **Baseline** branch

In this workflow, once all the `Changes Found` are approved by the `approver` for the screenshots in the **Baseline** branch's **Non-Baseline** build then the `latest` approved **Baseline Branch** build will be updated to the `Baseline`.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/git-auto-update-baseline-build.webp').default} alt="Smart Visual Testing" width="1600" height="803" className="doc_img"/>
