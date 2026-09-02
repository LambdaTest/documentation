# Git & Branching in SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This is the guide to understand Git Branching with SmartUI projects, which can detect your commit history and execute the appropriate actions for your visual regression testing. It works across every CLI-based project type — SmartUI SDK, Static CLI, and Storybook.

## Prerequisites

- You have an account with [TestMu AI](https://www.testmuai.com/login/).
- You must have an active [subscription](https://www.testmuai.com/pricing/) plan with valid screenshots limit.
- You must have created an Project on the SmartUI web app.

**Warning**
This feature is supported for tests ran through CLI project type ([SDK](/support/docs/smartui-selenium-js-sdk/), [Static CLI](/support/docs/smartui-cli-complete-reference/), [Storybook](/support/docs/smart-ui-storybook/)) projects on the SmartUI platform. Please contact support@testmuai.com for further information or requests.

The following steps will guide you in running your Git branching Visual Regression test on TestMu AI SmartUI platform:

**Baseline Branch**: A baseline branch build is a set of screenshots which are captured using SmartUI where all the screenshots are compared against for the non-baseline branch builds.

**Non-Baseline Branches**: A non-baseline branch(s) build is a set of screenshots which are captured using SmartUI where all the screenshots are compared against with the **Baseline** build which are matched with the screenshot names.

## Getting Started with Git Branching

### **Step 1**: Setup your Git Baseline branch in the Project Settings

The following are the steps to add a **Baseline** branch to your SmartUI project with Git commits:

1. Go to **Project Settings** page for the created project.
2. Search for **Git Settings** and add your required **Baseline** branch in the input box.
3. Click on **Update Settings** button to update the project settings and set your **Baseline** Git branch.

Now, after the successful setup of your **Baseline** branch of your project.

### **Step 2**: Execute your SmartUI CLI with Git commits

The following are the steps to execute your SmartUI CLI with Git commits:

1. Go to your project repository and initialize Git if you have not already:

```bash
git init --y
```

You can ignore the above step if you already have a repository with `Git` initialized

2. Make your changes and commit them to your `Git`:

```bash
git commit -m "Your commit message"
```

3. Execute your SmartUI command to run the Visual Regression tests. Choose the tab for your project type:

```bash
npx smartui --config .smartui.json exec -- <Your execution command>
```

```bash
smartui capture urls.json --config .smartui.json
```

For a locally hosted Storybook server:

```bash
npm run storybook                                                 // Starts your local StoryBook server
smartui storybook http://localhost:6006 --config .smartui.json    // Captures all the stories running on local server
```

For a static Storybook build:

```bash
npm run build-storybook                                           // Creates a Static Build Folder of StoryBook Stories
smartui storybook ./storybook-static --config .smartui.json       // Captures all the stories added in the static build folder
```

## Git Branching Workflows and Strategies

### Ability to set the **Baseline Branch**

You can set any `branch` name as your **Baseline** branch in the SmartUI project settings page. You can follow the steps below to set your baseline branch:

1. Go to the SmartUI Web App.
2. Select the project in which you want to configure the `Git` baseline branch for.
3. Go to the project settings section by clicking on the top right icon on the `Builds` list page.
4. In the project settings section you can provide the input of the `branch` name.
5. Click on the `Update Settings` button to update the settings.

You can also set the Baseline branch name through your terminal by setting the following environment variable which will automatically update your project settings as well once the test is run.

```bash
export BASELINE_BRANCH="Required baseline branch"
```

```bash
set BASELINE_BRANCH="Required baseline branch"
```

```powershell
$env:BASELINE_BRANCH="Required baseline branch"
```

**Default Selection of Baseline Branch**

In case, if there is no branch is set in your new or existing project created. Then, the `repository's` where SmartUI CLI command is executed to run the tests, **HEAD Branch** will be updated as the **Baseline** branch for that project by default.

### Displaying the Git Commit Meta data

If you are using the `Git` based workflow with `SmartUI CLI` then the following information is displayed on the UI of the SmartUI Web App - Builds list page:

- **Branch Name** is set as the `Build Name` in the SmartUI project.
- The latest **commit ID**of the Git commit added to the current repository.
- The **commit message** of the Git commit of the `commit ID` to the current repository.
- The commit author **username** of the Git commit to the current repository.

The above metadata is displayed only for **Git** repositories (StoryBook and CLI).

### Git Baseline Branch Selection and Comparison Strategy:

### Working on the same branch name

In this workflow, if you are working on the same branch name and want to execute the `SmartUI CLI` command to run the Visual Regression tests for your project.

And, if you have created a project and set your **Baseline** branch name to `master` then executed the following commands:

```bash
// Your current branch name
$ git branch
* <Your Current Active branch>
<--Other branches-->

// Adds a new commit to your current active branch
$ git commit -m "Your commit message"

// Executing the SmartUI SDK/Static CLI/Storybook tests
$ npx smartui --config .smartui.json exec -- <Execution command>
```

```bash
// Your current branch name
$ git branch
* <Your Current Active branch>
<--Other branches-->

// Adds a new commit to your current active branch
$ git commit -m "Your commit message"

// Executing the SmartUI StoryBook tests
$ smartui storybook <Your localhost URL or Static Build folder path> --config .smartui.json
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

```bash
$ git branch
* master

$ git commit -m "Second Build Changes"

$ smartui storybook http://localhost:6006 --config .smartui.json
```

You can streamline your workflow by setting the current branch name directly through your terminal. By configuring the following environment variable, you can automatically designate the input branch name as the branch for that build. This approach effectively overwrites the current Git branch from which you are running the test, providing a convenient method to manage new branches according to specific use cases without altering the Git configuration.

```bash
export CURRENT_BRANCH="Required branch"
```

```bash
set CURRENT_BRANCH="Required branch"
```

```powershell
$env:CURRENT_BRANCH="Required branch"
```

### Updating the Baseline Branch Name

In this workflow, if you have created a SmartUI project on the Web App and have executed few builds with a `Branch Name: Master` and want to switch your **Baseline** branch to `development` branch in your `Git`, then following will be the workflow that will help you in switching the **Baseline Branch** for your project:

1. You can go to the `SmartUI Project Settings` page to update your **Baseline Branch** in the project settings from `master` to `development` or update the `BASELINE_BRANCH` variable in the environment to update the baseline branch.
2. Make changes in your project files in your repository (for Storybook projects, this is your `.stories` folder).
3. Now, execute the `SmartUI CLI` command to run the Visual Regression tests.
4. Then, SmartUI algorithm will check for existing latest `build` with `development` run on the SmartUI project in Builds history.

The following are the cases that SmartUI will update the **Baseline** build for the branch set in your SmartUI project settings:

##### **Case 1**: If a build with development branch exists in build history

In this case, the latest build run on the SmartUI project build history will be updated as a **New Baseline Build** in which the new **Non-Baseline** builds will be compared against.

##### **Case 2**: If a build with development branch does not exist in build history

In this case, the new build run with the `development` git branch name will be set to the current **Baseline** build for the SmartUI project.

**Note**
For the first build generated for the **Baseline branch build** in the SmartUI Projects will be automatically set to **SYSTEM APPROVED** status by default.

### Detect changes for Git commit added to **Baseline Branch**

In this workflow, if I make changes in the set Baseline branch in the SmartUI project that is master and make an commit to the Git then,

Execute `SmartUI CLI` commands to execute the tests (or `.stories` tests) will compare the results with the latest **APPROVED** build run for **Baseline Branch** build in the SmartUI project.

On approval of the all the screenshots then the new build will be updated as Baseline build for the baseline branch.

Here is an example of the above workflow:

```bash
// Step 1 - Commit changes to Git
$ git commit -am "Changes in login Flow"
(git) Changes added to your branch

// Step 2 - Execute SmartUI CLI to trigger Build in the SmartUI project
$ npx smartui --config .smartui.json exec -- <Execution command>
```

```bash
// Step 1 - Commit changes to Git
$ git commit -am "Changes in login stories"
(git) Changes added to your branch

// Step 2 - Execute SmartUI CLI to trigger Build in the SmartUI project
$ smartui storybook http://localhost:6006 --config .smartui.json
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

```bash
// Baseline Branch
$ git branch
* master

// Non-Baseline branch
$ git checkout -b develop
* develop
master

// Executing SmartUI Build with Non-Baseline Git branch
$ smartui storybook http://localhost:6006 --config .smartui.json
```

### Handling Builds with Missing Screenshots

When a build is executed in the same branch as the **Baseline Branch**, SmartUI will compare it against the latest approved baseline build. If some screenshots (or variants) that were present in the baseline are missing from the current build, a `Missing Screenshots` warning  will be displayed.

If this build with missing screenshots shows no visual changes compared to the baseline, it will be automatically approved. However, SmartUI will mark it as an `Incomplete` build and will not set it as a new baseline.

For builds with missing screenshots that do contain visual changes, you can manually approve them to set them as a new baseline if desired.

> **Note**: If a build contains any new screenshots that weren't present in the baseline, SmartUI interprets this as an intentional test case modification. In such cases, the `Missing Screenshots` tooltip will not be displayed, even if some screenshots from the baseline are missing.

### Auto Updating **Baseline** build for the **Baseline** branch

In this workflow, once all the `Changes Found` are approved by the `approver` for the screenshots in the **Baseline** branch's **Non-Baseline** build then the `latest` approved **Baseline Branch** build will be updated to the `Baseline`.

In case if the **Baseline** branch does not have an existing build then by default the new build run will be set as Baseline build.

### Running Force Builds

In this workflow, if you have not added any commit to your current `Git` in the repository after making the changes then SmartUI will consider that no changes are made to your files, and you will need to use the `--force-rebuild` flag to execute the build:

```bash
$ npx smartui --config .smartui.json exec -- <Execution command> --force-rebuild
```

```bash
$ smartui storybook <Your localhost URL or Static Build folder path> --config .smartui.json --force-rebuild
```

**Warning**
In the above workflow, if there are no changes which are committed to your `Git` repository and if a build with the same commit number already exists in the build history of the SmartUI project.

## Smart Git Strategy

Smart Git is an advanced feature in SmartUI that provides intelligent branch comparison and management capabilities. This guide explains how to use Smart Git effectively in your visual regression testing workflow.

### What is Smart Git?

Smart Git is a feature that enhances the default Git branching strategy in SmartUI by providing more flexible and intelligent branch comparison capabilities. When enabled, it automatically compares the latest build of a branch against the latest approved version of the same branch, regardless of the project's baseline settings.

#### Key Benefits

1. **Intelligent Comparison**: Automatically compares against the latest approved version of the same branch
2. **Flexible Workflow**: Works independently of project baseline settings
3. **Easy Configuration**: Simple environment variable toggle
4. **Fallback Support**: Gracefully falls back to default behavior when disabled

### Enabling Smart Git

Smart Git can be enabled using an environment variable:

```bash
export SMART_GIT=true
```

```bash
set SMART_GIT=true
```

```powershell
$env:SMART_GIT="true"
```

### How Smart Git Works

#### Default vs Smart Git Behavior

##### Default Behavior (SMART_GIT=false)
- Compares builds against the project's configured baseline branch
- All branches are compared against the same baseline
- Changes must be approved in the baseline branch

##### Smart Git Behavior (SMART_GIT=true)
- Compares builds against the latest approved version of the same branch
- Each branch maintains its own comparison history
- Changes can be approved independently in each branch
- **Automatic Approval**: New branches are automatically approved when first created, serving as their own baseline

#### Comparison Flow

1. **Build Execution**:
```bash
# Enable Smart Git
export SMART_GIT=true

# Run your tests
npx smartui --config .smartui.json exec -- <Your execution command>
```

2. **Comparison Process**:
   - SmartUI identifies the current branch
   - Finds the latest approved build in the same branch
   - Compares the new build against the latest approved version
   - Generates a comparison report

### Use Cases and Simulations

#### Use Case 1: Feature Branch Development

**Scenario**: You're developing a new feature in a feature branch and want to track visual changes independently.

```bash
# Create and switch to feature branch
git checkout -b feature/new-login

# Enable Smart Git
export SMART_GIT=true

# Make changes and run tests with different CLI commands
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "feature-login-tests"
npx smartui upload-figma-web designs.json --buildName "feature-login-designs"
npx smartui capture urls.json --buildName "feature-login-capture"
```

**Result**:
- Builds are compared against the latest approved version in `feature/new-login`
- Changes can be approved without affecting the main branch
- Independent visual regression tracking for the feature
- First build in the new branch is automatically approved as its baseline

#### Use Case 2: Parallel Development

**Scenario**: Multiple teams working on different features in separate branches.

```bash
# Team A: Feature branch
git checkout -b feature/team-a
export SMART_GIT=true
npx smartui --config .smartui.json exec -- <Team A tests>

# Team B: Different feature branch
git checkout -b feature/team-b
export SMART_GIT=true
npx smartui --config .smartui.json exec -- <Team B tests>
```

**Result**:
- Each team's changes are tracked independently
- No interference between different feature branches
- Teams can approve their changes without waiting for others

#### Use Case 3: Hotfix Development

**Scenario**: Need to make urgent fixes in a hotfix branch.

```bash
# Create hotfix branch
git checkout -b hotfix/security-patch

# Enable Smart Git
export SMART_GIT=true

# Run tests
npx smartui --config .smartui.json exec -- <Your execution command>
```

The Smart Git management works consistently across all SmartUI CLI commands (`exec`, `capture`, `upload`, `upload-figma-web`, `upload-figma-app`), ensuring a unified experience whether you're executing tests, capturing screenshots, uploading images, or comparing Figma designs with web pages or mobile apps. Each command supports the `--buildName` flag to provide custom names for your builds.

**Result**:
- Quick visual regression testing for hotfix
- Independent approval process
- No impact on other branches' baselines

### Best Practices

**Branch Naming**

Use clear, consistent branch naming conventions.

**Regular Updates**

Keep branches up to date with their parent branches.

**Approval Process**

Establish clear approval criteria for each branch.

**Documentation**

Document branch-specific visual changes.

**Cleanup**

Regularly clean up old branches and their builds.

### Troubleshooting

**Comparison Issues**

1. **Comparison Issues**:
   - Verify Smart Git is enabled: `echo $SMART_GIT`
   - Check branch name: `git branch --show-current`
   - Ensure previous builds exist in the branch

**Approval Issues**

1. **Approval Issues**:
   - Verify you have necessary permissions
   - Check if the build is in an approvable state
   - Ensure the branch has previous approved builds

#### Getting Help

If you encounter any issues with Smart Git, please contact our support team at support@testmuai.com.

## Branch-Level Merging

This guide explains how to effectively merge branches in SmartUI for managing your visual regression testing workflow.

### Branch-Level Merging

Branch-level merging allows you to merge visual regression test results from one branch to another, maintaining a clear history of changes and approvals.

#### Merge Command

```bash
npx smartui merge branch --source <source-branch> --target <target-branch>
```

#### Merge Process

1. **Source Branch Selection**: Identifies the latest approved build in the source branch
2. **Target Branch Update**: Updates the target branch with the approved changes
3. **Status Updates**: Updates build statuses in both branches
4. **Audit Trail**: Creates a merge commit with detailed information
5. **Build Naming**:
   - For branch merges: `merged-branch/-`
   - For build merges: `merged-build/-`

#### Example Workflow

```bash
# Merge feature branch into main
npx smartui merge branch --source feature/new-login --target main
# Creates: merged-branch/feature-new-login-main

# Merge hotfix into staging
npx smartui merge branch --source hotfix/security-patch --target staging
# Creates: merged-branch/hotfix-security-patch-staging
```

#### Merge Behavior

1. **Latest Version Merge**: Merges the latest approved version of the source branch
2. **Status Updates**: Updates build statuses in both branches
3. **Audit Trail**: Maintains a detailed merge history
4. **Merged Build Status**: The newly created merged build is always `approved`
5. **Naming Conventions**:
   - Branch merges: `merged-branch/-`
   - Build merges: `merged-build/-`

### Branch Merge Strategies

#### 1. Feature Branch Strategy

**Scenario**: Merging a feature branch into main after approval

```bash
# 1. Ensure feature branch is approved
npx smartui merge branch --source feature/new-login --target main
```

#### 2. Hotfix Strategy

**Scenario**: Merging a hotfix into multiple branches

```bash
# 1. Merge to staging
npx smartui merge branch --source hotfix/security-patch --target staging

# 2. Merge to production
npx smartui merge branch --source hotfix/security-patch --target production
```

#### 3. Release Branch Strategy

**Scenario**: Managing release branches

```bash
# 1. Create release branch
git checkout -b release/v1.0.0

# 2. Merge development into release
npx smartui merge branch --source development --target release/v1.0.0

# 3. After testing, merge to main
npx smartui merge branch --source release/v1.0.0 --target main
```

### Best Practices

**Merge Planning**

- Plan merges in advance
   - Document merge strategies
   - Establish approval processes

**Branch Management**

- Keep branches up to date
   - Clean up merged branches
   - Maintain clear branch naming

**Approval Process**

- Establish clear approval criteria
   - Document approval decisions
   - Maintain audit trail

### Troubleshooting

Merge Conflicts

- Check build compatibility
   - Verify branch status
   - Review merge history

Status Issues

- Verify build status
   - Check permissions
   - Review approval history
If you encounter any issues with branch merging in SmartUI, please contact our support team at support@testmuai.com.

### Pull Request Workflow with Branch Merging

#### Scenario: Feature Development with Multiple Iterations

Let's walk through a complete workflow where a team is developing a new feature with multiple iterations and PRs.

```bash
# Initial feature development
git checkout -b feature/new-dashboard

# First iteration of changes
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "dashboard-v1-tests"

# Create first PR
git push origin feature/new-dashboard
# Create PR on GitHub/GitLab/etc.

# After review feedback, make changes
git commit -m "Address review comments"
npx smartui exec -- <Your execution command> --buildName "dashboard-v2-capture"

# PR is approved and ready to merge
# First, merge the visual changes
npx smartui merge branch --source feature/new-dashboard --target main

# Then merge the code
git checkout main
git merge feature/new-dashboard

# Run final tests on main
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "main-dashboard-merge"
```

#### CI/CD Integration with Branch Merging

Here's a GitHub Actions workflow that automates the branch merging process in your CI/CD pipeline:

```yaml
name: Visual Regression Tests with Branch Merging

on:
pull_request:
types: [opened, synchronize, reopened]
branches: [ main, develop ]

jobs:
visual-tests:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v2

- name: Setup Node.js
uses: actions/setup-node@v2
with:
node-version: '16'

- name: Install dependencies
run: npm install

- name: Run SmartUI tests
env:
PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
run: |
# Run different types of tests
npx smartui --config .smartui.json exec -- <Your execution command> --buildName "pr-${{ github.event.pull_request.number }}-tests"

merge-visual-changes:
needs: visual-tests
if: github.event.pull_request.merged == true
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v2

- name: Setup Node.js
uses: actions/setup-node@v2
with:
node-version: '16'

- name: Install dependencies
run: npm install

- name: Merge visual changes
env:
PROJECT_TOKEN: ${{ secrets.PROJECT_TOKEN }}
run: |
# Merge visual changes from PR branch to target branch
# Creates: merged-branch/<pr-branch>-<target-branch>
npx smartui merge branch --source ${{ github.event.pull_request.head.ref }} --target ${{ github.event.pull_request.base.ref }}
```

#### Best Practices for PR Branch Merging

1. **Before Merging**:
   - Ensure all visual changes are approved
   - Run final tests on the feature branch
   - Document any special merge considerations
   - Note the expected merge naming conventions:
     - Branch merges: `merged-branch/-`
     - Build merges: `merged-build/-`

2. **During Merge**:
   - Use descriptive build names
   - Include PR number in build names
   - Run tests after merge
   - Verify merge naming follows conventions

3. **After Merge**:
   - Verify merged changes
   - Clean up old builds
   - Update documentation
   - Check merge naming in SmartUI dashboard

The branch merging process works consistently across all SmartUI CLI commands (`exec`, `capture`, `upload`, `upload-figma-web`, `upload-figma-app`), ensuring a unified experience whether you're executing tests, capturing screenshots, uploading images, or comparing Figma designs with web pages or mobile apps. Each command supports the `--buildName` flag to provide custom names for your builds.

## Build-Level Merging

This guide explains how to effectively merge builds in SmartUI for granular control over your visual regression testing workflow.

### Build-Level Merging

Build-level merging provides granular control over specific builds, allowing you to merge individual build results and manage your visual regression testing at a more detailed level.

#### Merge Command

```bash
npx smartui merge build --source <source-build> --target <target-build>
```

#### Merge Process

1. **Build Selection**: Identifies the source and target builds
2. **Content Merge**: Merges the visual regression results
3. **Status Update**: Updates build statuses
4. **Confirmation**: Provides merge confirmation

#### Example Workflow

```bash
# Merge specific builds
npx smartui merge build --source build-123 --target build-456

# Merge with status update
npx smartui merge build --source build-123 --target build-456
```

#### Merge Behavior

1. **Build Merging**: Merges the source build into the target build
2. **Status Updates**: Updates the new merged build status to "approved"
3. **Content Updates**: Updates target build with merged content
4. **Confirmation**: Provides detailed merge confirmation
5. **Build Naming**:
   - For branch merges: `merged-branch/-`
   - For build merges: `merged-build/-`

### Build Merge Strategies

#### 1. Build Promotion Strategy

**Scenario**: Promoting specific builds across environments

```bash
# 1. Merge staging build to production
npx smartui merge build --source staging-build-123 --target prod-build-456
```

#### 2. Feature Build Strategy

**Scenario**: Managing feature-specific builds

```bash
# 1. Merge feature build into main build
npx smartui merge build --source feature-build-789 --target main-build-101
```

#### 3. Hotfix Build Strategy

**Scenario**: Managing hotfix builds

```bash
# 1. Create hotfix build
npx smartui capture --name hotfix-build-202

# 2. Merge into production build
npx smartui merge build --source hotfix-build-202 --target prod-build-456
```

### Best Practices

**Build Management**

- Use meaningful build names
   - Document build purposes
   - Regular cleanup of old builds

**Merge Planning**

- Plan merges in advance
   - Document merge strategies
   - Establish approval processes

**Getting Help**

If you encounter any issues with build merging in SmartUI, please contact our support team at support@testmuai.com.

1. **Build Management**:
   - Use meaningful build names
   - Document build purposes
   - Regular cleanup of old builds

2. **Merge Planning**:
   - Plan merges in advance
   - Document merge strategies
   - Establish approval processes

#### Getting Help

If you encounter any issues with build merging in SmartUI, please contact our support team at support@testmuai.com.
