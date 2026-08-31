---
id: smartui-running-your-first-project
title: Running Your First Project on SmartUI
hide_title: true
sidebar_label: Run First Test
description: Learn how to run your first project on smartui step by step guide for the first time users to help them understand how the platform works
keywords:
  - smart visual testing in testmu ai
  - visual  ui testing,image to image comparison
  - free cross browser testing tool
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - internet explorer 9 browser test
  - test on samsung a7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.testmuai.com/support/docs/smartui-running-your-first-project/
site_name: TestMu AI
slug: smartui-running-your-first-project/
canonical: https://www.testmuai.com/support/docs/smartui-running-your-first-project/
toc_max_heading_level: 2

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-running-your-first-project/`
        }]
      })
    }}
></script>

# Running Your First Project on SmartUI

---

SmartUI is a smart visual testing feature of <BrandName /> that ensures your web applications look flawless across all browsers and devices. This walkthrough takes you from creating a project to running your first visual regression test, then covers the environment variables that control CLI behavior and the approval workflow that keeps your baselines accurate.

## Prerequisites

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on <BrandName /> platform using SmartUI Selenium SDK integration.

## Step 1: Create a SmartUI Project
The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

- Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and click on the **New Project** button.
- Select the platform as <b>CLI</b> for executing your **SDK** tests.
- Add name of the project, approver's name, and tags for any filter or easy navigation.
- Click on the **Continue** button.

Now select your desired framework and click on the **Configure** button. For the demo purpose we will select the Java framework.

## Step 2: Configure your Test Suite dependencies

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample code repository from the <BrandName /> GitHub repository to run the project on the SmartUI.

<a href="https://github.com/LambdaTest/smartui-java-testng-sample" target="_blank" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

- Add the following dependency in your `pom.xml` file

```xml title="pom.xml"
<dependency>
    <groupId>io.github.lambdatest</groupId>
    <artifactId>lambdatest-java-sdk</artifactId>
    <version>1.0.23</version>
</dependency>
```

:::note
You can check the latest version of [lambdatest-java-sdk]( https://mvnrepository.com/artifact/io.github.lambdatest/lambdatest-java-sdk) and update the latest version accordingly.
:::

- Install your CLI and required modules for running SmartUI SDK and compile your defined dependencies in the `pom.xml` file:

```zsh
npm install -g @lambdatest/smartui-cli
mvn clean compile
```

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

## Step 3: Setup your Project Token and Environment Variables

Setup your project token and credentials shown in the **SmartUI** app after creating your project.

### Setting Project Token

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

### Setting <BrandName /> Credentials (for Hooks)

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-1' label='MacOS/Linux' default>

```bash
export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
<TabItem value="Windows-1" label='Windows - CMD'>

```bash
set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
<TabItem value="PowerShell-1" label='PowerShell'>

```powershell
$env:LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
$env:LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"
```

</TabItem>
</Tabs>

:::info
- For CLI projects, use `PROJECT_TOKEN` (no username/access key needed)
- For Hooks (Selenium, Playwright, etc.), use `LT_USERNAME` and `LT_ACCESS_KEY`
:::

<img loading="lazy" src={require('../assets/images/smart-visual-testing/running-first-test/1.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Step 4: Create and Configure SmartUI Config
You can now configure your project configurations on using various available options to run your project with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create .smartui.json
```
Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```javascript title="/smartui-sdk-project/.smartui.json"
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
  },
  "waitForTimeout": 1000, //Optional (Should only be used in case lazy-loading/async components are present)
  "waitForPageRender": 50000, //Optional (Should only be used in case of websites which take more than 30s to load)
  "enableJavaScript": false, //Enable javascript for all the screenshots of the project
  "allowedHostnames": [] //Additional hostnames to capture assets from
}
```
:::info Advanced options in SmartUI configuration
- For capturing fullpage or viewport screenshots, please refer to this [documentation](/docs/smartui-sdk-config-options/#12-viewports)
- For the list of available mobile viewports, please refer to this [documentation](/docs/smartui-sdk-config-options/#list-of-supported-device-viewports)
- For more information about SmartUI config global options, please refer to this [documentation](/docs/smartui-sdk-config-options/#3-global-options-optional).
:::

## Step 5: Adding SmartUI function to take screenshot
You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below:

```java
 //Importing the lambdatest-java SDK
//Rest of your code here

@Test
    public void basicTest() throws Exception {
        String spanText;
        System.out.println("Loading URL");

        driver.get("<Required URL>");
        // ... test code snippet
        // highlight-next-line
        SmartUISnapshot.smartuiSnapshot(driver, "<Screenshot Name>");
    }
```

## Step 6: Execute the Tests on SmartUI Cloud
Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui --config .smartui.json exec -- mvn test -D suite="sdk-cloud.xml"
```
:::note
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Environment Variables

SmartUI reads additional details from the environment it runs in, such as the branch name, baseline branch, and proxies. The following variables let you modify SmartUI behavior by configuring them within your CI environment.

### 1. Setting the Project Name

Set the Project Name you want to add the current build run to by exporting these enviroment variables:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-1' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
export PROJECT_NAME="Required Project Name"
```

</TabItem>
<TabItem value='Windows-env-1' label='Windows - CMD'>

```bash
set LT_USERNAME="YOUR USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
set PROJECT_NAME="Required Project Name"
```

</TabItem>
<TabItem value='PowerShell-env-1' label='PowerShell'>

```powershell
$env:LT_USERNAME="YOUR USERNAME"
$env:LT_ACCESS_KEY="YOUR ACCESS KEY"
$env:PROJECT_NAME="Required Project Name"
```

</TabItem>
</Tabs>

> If you specify a project name that doesn't already exist, a new project will be created by the user whose authentication is added in the environment.

### 2. Set your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-2' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows-env-2" label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell-env-2" label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

> Setting the project token environment variable does not require any user level authentication.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

### 3. Setting the Baseline Branch

Set the baseline branch for `CLI` projects:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-3' label='MacOS/Linux' default>

```bash
export BASELINE_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows-env-3" label='Windows - CMD'>

```bash
set BASELINE_BRANCH="Required branch"
```

</TabItem>
<TabItem value="PowerShell-env-3" label='PowerShell'>

```powershell
$env:BASELINE_BRANCH="Required branch"
```

</TabItem>
</Tabs>

### 4. Setting the current branch

Set the current branch for `CLI` projects:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-4' label='MacOS/Linux' default>

```bash
export CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows-env-4" label='Windows - CMD'>

```bash
set CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value='PowerShell-env-4' label='PowerShell'>

```powershell
$env:CURRENT_BRANCH="Required branch"
```

</TabItem>
</Tabs>

### 5. Setting proxies

In case you are accessing your network using corporate proxies, set the proxies in the environment variables as follows

#### HTTP_PROXY:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-5' label='MacOS/Linux' default>

```bash
export HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
<TabItem value="Windows-env-5" label='Windows - CMD'>

```bash
set HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>"
```

</TabItem>
<TabItem value='PowerShell-env-5' label='PowerShell'>

```powershell
$env:HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
</Tabs>

#### HTTPS_PROXY:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-6' label='MacOS/Linux' default>

```bash
export HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>"
```

</TabItem>
<TabItem value='Windows-env-6' label='Windows - CMD'>

```bash
set HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>"
```

</TabItem>
<TabItem value='PowerShell-env-6' label='PowerShell'>

```powershell
$env:HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
</Tabs>

> **NOTE :** In most cases setting only HTTP_PROXY should be enough, but if you have different proxies for HTTP and HTTPS, you can set both.The format for proxy’s is `http[s]://<username>:<password>@<domain.com>:<port>/` [username and password is optional].

### 6. Enabling Debug mode

To enable SmartUI CLI Debug mode, use the following environment variable.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-7' label='MacOS/Linux' default>

```bash
export LT_SDK_DEBUG=true
```

</TabItem>
<TabItem value='Windows-env-7' label='Windows - CMD' default>

```bash
set LT_SDK_DEBUG=true
```

</TabItem>
<TabItem value='PowerShell-env-7' label='PowerShell'>

```powershell
$env:LT_SDK_DEBUG="true"
```

</TabItem>

</Tabs>

### 7. Ignoring captured cookies

Set the following variable to true, to stop the use of cookies captured automatically. The default is set to `false`.

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-8' label='MacOS/Linux' default>

```shell
export SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true
```

</TabItem>
<TabItem value='Windows-env-8' label='Windows - CMD' default>

```shell
set SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true
```

</TabItem>
<TabItem value='PowerShell-env-8' label='PowerShell'>

```powershell
$env:SMARTUI_DO_NOT_USE_CAPTURED_COOKIES="true"
```

</TabItem>
</Tabs>

### 8. Setting Server Address

For SDK integrations (non-Selenium), set the SmartUI server address:

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-env-9' label='MacOS/Linux' default>

```bash
export SMARTUI_SERVER_ADDRESS="http://localhost:8080"
```

</TabItem>
<TabItem value='Windows-env-9' label='Windows - CMD'>

```bash
set SMARTUI_SERVER_ADDRESS="http://localhost:8080"
```

</TabItem>
<TabItem value='PowerShell-env-9' label='PowerShell'>

```powershell
$env:SMARTUI_SERVER_ADDRESS="http://localhost:49152"
```

</TabItem>
</Tabs>

### 9. Additional Environment Variables

The following environment variables are also available for advanced configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `FIGMA_TOKEN` | Figma API token for Figma integration | - |
| `NO_PROXY` | Comma-separated hosts to bypass proxy | - |
| `SMARTUI_HTTP_PROXY` | SmartUI-specific HTTP proxy | - |
| `SMARTUI_HTTPS_PROXY` | SmartUI-specific HTTPS proxy | - |
| `SMARTUI_API_PROXY` | API proxy configuration | - |
| `SMARTUI_CLIENT_API_URL` | Override API URL | `https://api.lambdatest.com/visualui/1.0` |
| `SMARTUI_UPLOAD_URL` | Override upload URL | `https://api.lambdatest.com` |
| `SMARTUI_GIT_INFO_FILEPATH` | Custom git info file path | - |
| `GITHUB_ACTIONS` | GitHub Actions environment flag | - |
| `SMARTUI_API_SKIP_CERTIFICATES` | Skip SSL certificate validation | `false` |
| `USE_REMOTE_DISCOVERY` | Use remote discovery mode | `false` |
| `SMART_GIT` | Enable Smart Git feature | `false` |
| `SHOW_RENDER_ERRORS` | Show render errors | `false` |
| `SMARTUI_SSE_URL` | Server-sent events URL | `https://server-events.lambdatest.com` |
| `LT_SDK_SKIP_EXECUTION_LOGS` | Skip execution logs | `false` |
| `MAX_CONCURRENT_PROCESSING` | Max concurrent processing threads | `0` (auto) |
| `DO_NOT_USE_USER_AGENT` | Disable user agent | `false` |

## Approval Workflow

SmartUI provides baseline management functions that control how visual regression results are handled. Understanding these functions is crucial for maintaining accurate baselines and avoiding confusion about which screenshots serve as reference points for future comparisons.

:::warning **Critical Concept**
Every baseline change in SmartUI requires **explicit user action**. There is no automatic baseline updating - all baseline modifications must be intentionally triggered by users through approval workflows, CLI commands, or dashboard actions.
:::

### Core Functions Explained

#### Approve Function
**What it does**: Accepts the current screenshot as the new expected state and updates the baseline for future comparisons.

**When to use**:
- When visual changes are intentional and expected
- After UI updates, design changes, or feature implementations
- When screenshots represent the correct current state

**Behavior**:
- Moves screenshot to "Approved" tab
- Updates baseline automatically
- Creates audit trail with approver and timestamp
- Future builds will compare against this approved version

:::info
In CLI-based workflows, approval alone may not be sufficient for baseline persistence across different build contexts.
:::

#### Reject Function
**What it does**: Marks screenshots as unacceptable without updating the baseline.

**When to use**:
- When visual differences are unexpected or represent bugs
- For temporary issues (loading states, animations)
- When changes are not ready for production

**Behavior**:
- Moves screenshot to "Rejected" tab
- Preserves original baseline
- Keeps screenshot available for future re-evaluation
- Does not affect future comparisons

#### Move to Baseline Function
**What it does**: Explicitly promotes approved screenshots to become the new baseline reference.

**When to use**:
- When you want to permanently establish a new reference point
- After major releases or design system updates
- When consolidating changes from multiple builds

**Behavior**:
- Takes approved screenshots and makes them the new baseline
- Overwrites existing baseline for the same test name + viewport
- Creates permanent reference for all future comparisons
- Essential for CLI workflows where approval alone isn't enough

:::note
**Key Difference from Approve**: Approve updates baseline for that specific build context, while Move to Baseline establishes a global reference.
:::

#### Merge Function
**What it does**: Combines visual regression results from different branches or builds.

**When to use**:
- When merging feature branches into main
- Consolidating results from multiple environments
- Creating unified baselines from distributed testing

**CLI Usage**:
```bash
# Merge branches
npx smartui merge branch --source feature-branch --target main

# Merge builds
npx smartui merge build --source build-name --target baseline-build
```

### Tracking Moves and Merges in the Dashboard

When you move a screenshot into its baseline build, SmartUI records where that screenshot came from and where it went. That provenance is surfaced in four places, so you can always tell whether an image was captured in a build or injected into it from a later one.

#### Source and Destination Builds in the Move Dialog

Choosing **Approve & Update** opens the **Approve and Move Screenshot** dialog. Above the reason field, a highlighted note names the exact build pair the move will act on.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/merge-provenance/move-modal-build-note.png').default} alt="Approve and Move Screenshot dialog with the highlighted note naming the source build and the destination build" width="720" height="678" className="doc_img" />

The note resolves the real pair for the screenshot in front of you rather than a fixed one, so a screenshot in build #6 whose baseline is build #1 reads `Moving this variant from #6 to #1`. It appears on both the single variant dialog and the **Approve All Variants** dialog, where the wording changes to cover every variant of that screenshot.

:::tip
Read the note before confirming. It is the quickest way to catch a screenshot whose baseline is an older build than you expected, which happens when the project baseline pointer has moved back down the chain.
:::

#### Merge Tag on the Comparison Page

Once a screenshot has been moved, its comparison page carries a merge tag next to the status chip.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/merge-provenance/comparison-merged-into-tag.png').default} alt="Comparison page header showing the Added to Baseline status chip followed by the merge tag naming build number 1" width="674" height="170" className="doc_img" />

The **Added to Baseline** chip tells you the verdict, and the tag beside it tells you the destination, so this screenshot was merged into build #1. Hover the tag to see the full label.

#### Merge Badges on Screenshot Cards at Build Level

On the build page, any screenshot involved in a move carries a badge in the top right corner of its thumbnail.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/merge-provenance/build-card-merge-badge.png').default} alt="Screenshot card on the build page with the merge badge highlighted in the top right corner of the thumbnail" width="660" height="494" className="doc_img" />

The number on the badge is the count of variants involved in the move, not a build number. A screenshot with six variants where only two were moved shows `2`. The arrow gives you the direction:

| Badge arrow | Meaning | Where you see it |
|---|---|---|
| Arrow pointing up | Merged out of this build into its baseline | The source build, alongside the **Added to Baseline** marker |
| Arrow pointing down | Merged into this build from a later build | The destination build, on a screenshot that was never captured there |

A down arrow is worth pausing on. It marks an image that was injected from a later build rather than captured during that run, so the build no longer reflects only what was actually tested at that point in time.

#### Variant Level Details

Open the screenshot info drawer from the card to see which specific variants took part in the move.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/merge-provenance/variant-merge-details.png').default} alt="Screenshot info drawer with the variant row highlighted, showing the browser, resolution, and the merge tag naming build number 6" width="960" height="416" className="doc_img" />

Each variant row lists its browser and resolution, and merged variants carry their own tag naming the build on the other side of the move. Variants that were not part of the move have no tag, which makes partial moves easy to spot: in a screenshot with six variants, only the rows you actually moved are tagged.

### Workflow Types and Baseline Management

#### CLI-Based Workflows (Explicit User Control)
**Characteristics**:
- Each screenshot must be explicitly approved or moved
- Baseline management is manual and granular
- Greater control but requires more steps
- Best for complex, multi-environment setups

**Required Actions**:
1. Run build → Compare against baseline
2. Review differences → Approve valid changes
3. **Move approved screenshots to baseline** (critical step)
4. Next build uses updated baseline

**Baseline Update Mechanism**:
- Approval marks screenshots as accepted within current build
- Move to Baseline explicitly updates the global baseline reference
- Without Move to Baseline, subsequent builds may still compare against old baseline
- All baseline changes require explicit user intervention

#### Hooks/API/PDF Workflows (Capability-Driven)
**Characteristics**:
- Builds can be automatically marked as baseline via capabilities
- Less granular control over individual screenshots
- Simpler workflow for straightforward cases
- Best for continuous integration scenarios

**Baseline Update Mechanism**:
```javascript
// SDK capability to auto-mark baseline
capabilities.setCapability("smartUI.baseline", true);
```
- When `smartUI.baseline: true` is set, the entire build becomes the new baseline
- No individual screenshot approval needed
- Automatic progression of reference points
- Still requires explicit capability setting by user

#### Git-Integrated Projects (Branch-Based Automation)
**Characteristics**:
- Baseline automatically managed via Git branches
- Branch-specific baselines maintained
- Automatic baseline updates for baseline branch
- System-approved status for first builds

**Baseline Update Mechanism**:
- Baseline branch builds auto-update baseline
- Feature branches compare against baseline branch
- No manual Move to Baseline required for baseline branch
- Still requires user to configure baseline branch settings

### Deep Dive: How Baseline Updates Actually Work

#### The Baseline Reference System
SmartUI maintains baseline references at multiple levels:

1. **Global Project Baseline**: Default comparison point for all builds
2. **Branch-Specific Baselines**: Different baselines per Git branch
3. **Build-Level Baselines**: Specific builds marked as baseline
4. **Screenshot-Level References**: Individual screenshot comparisons

#### Explicit User Action Requirements
Every baseline modification requires deliberate user intervention:

**CLI Workflows**:
```bash
# 1. Run tests (no baseline change)
npx smartui exec -- npm test

# 2. Approve screenshots (marks as accepted, no baseline change)
# Manual dashboard action required

# 3. EXPLICIT: Move to baseline (updates global baseline)
npx smartui move-to-baseline --build current-build
```

**SDK with Capabilities**:
```javascript
// Explicit capability setting required
capabilities.setCapability("smartUI.baseline", true); // User must set this
```

**Git Projects**:
```bash
# Explicit baseline branch configuration required
export BASELINE_BRANCH="main" # User must configure
```

### Common Customer Confusion Scenarios

#### Scenario 1: "I approved B1, why isn't it the baseline for B5?"

**Problem**: Customer approved screenshots in Build 1 (B1), ran Build 2 (B2) which became baseline, then when running Build 5 (B5), expected B1 screenshots to be the reference.

**Root Cause**: In CLI workflows, approval updates baseline within that build's context, but doesn't necessarily persist as the global baseline for future builds unless explicitly moved.

**Solution**:
```bash
# After approving in B1
npx smartui move-to-baseline --build B1

# Or use the dashboard "Move to Baseline" function
```

#### Scenario 2: "I approved and moved SS3 from B3 and SS4 from B4 to B2, but B5 shows SS1 as new"

**Problem**: Customer performed "approve and update" (move) operations on screenshots from different builds, expecting them to consolidate into a single baseline.

**Root Cause**: Move operations work on individual screenshots, not entire builds. If B2 doesn't contain SS1 (which was in B1), it won't be in the baseline.

**Solution**:
1. Ensure all required screenshots are present in the target baseline build
2. Use merge functions to combine results from multiple builds
3. Consider using branch-based baselines for complex scenarios

#### Scenario 3: "I set smartUI.baseline=true, but baseline didn't update"

**Problem**: Customer expected automatic baseline updates but saw no changes.

**Root Cause**: The capability must be set correctly and the build must complete successfully for baseline marking to occur.

**Solution**:
```javascript
// Ensure correct capability syntax
capabilities.setCapability("smartUI.baseline", true);

// Verify build completion
// Check SmartUI dashboard for baseline status
```

### Ideal Usage Guidelines

#### For CLI Workflows
```bash
# 1. Run initial build to establish baseline
npx smartui exec -- npm test

# 2. Make necessary UI changes

# 3. Run comparison build
npx smartui exec -- npm test

# 4. Review and approve valid changes in dashboard

# 5. CRITICAL: Move approved changes to baseline
# Use dashboard "Move to Baseline" or CLI equivalent

# 6. Future builds will now use updated baseline
```

#### For SDK Integration
```java
// Set capability explicitly for baseline marking
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("smartUI.baseline", true);

// Or use individual screenshot approval
SmartUI.takeScreenshot("screenshot-name");
// Then manually move to baseline via dashboard
```

#### Branch-Based Development
```bash
# Feature branch development
npx smartui --baselineBranch main exec -- npm test

# After approval, merge to main
npx smartui merge branch --source feature-branch --target main
```

### Advanced Baseline Management

#### Multi-Level Baseline Strategy
```bash
# Different baselines for different environments
npx smartui --baselineBranch staging exec -- npm test  # Staging baseline
npx smartui --baselineBranch production exec -- npm test  # Production baseline

# Build-specific comparisons
npx smartui --baselineBuild "v2.1.0" exec -- npm test
```

#### Baseline Rollback
```bash
# Rollback to previous baseline
npx smartui --baselineBuild "previous-stable-build" exec -- npm test

# Mark old build as baseline again
npx smartui --markBaseline --baselineBuild "rollback-target"
```

### Best Practices

#### 1. **Understand Your Workflow Type**
- **CLI**: Requires explicit baseline management
- **Hooks/API**: Capability-driven baseline marking
- **Git**: Branch-based automatic baseline management
- **PDF**: Build-level baseline marking

#### 2. **Always Verify Baseline Changes**
- Check dashboard after baseline operations
- Confirm next build uses updated baseline
- Maintain audit trail of baseline changes
- Only move validated, production-ready screenshots
- Document baseline update reasons
- Maintain separate baselines for different environments

#### 3. **Leverage Branch Merging**
- Use for complex multi-branch workflows
- Maintain audit trails of merges
- Plan baseline consolidation carefully

#### 4. **Monitor Baseline Health**
- Regularly review baseline age and completeness
- Update baselines after major releases
- Clean up outdated baselines

#### 5. **Document Decisions**
- Add comments when approving/rejecting/moving
- Maintain change logs for baseline updates
- Train team on workflow differences

### Troubleshooting Common Issues

#### "Baseline not updating after approval"
**Cause**: Using CLI workflow without moving to baseline
**Solution**: Explicitly use "Move to Baseline" function

#### "Screenshots missing from baseline"
**Cause**: Moved screenshots from builds that don't contain all required images
**Solution**: Ensure target baseline build has complete screenshot set

#### "Unexpected rejections in new builds"
**Cause**: Baseline updated with incomplete or incorrect screenshots
**Solution**: Review baseline contents before moving

#### "Merge conflicts"
**Cause**: Conflicting screenshots between source and target
**Solution**: Resolve conflicts manually before merging

#### "Capability not working"
**Cause**: Incorrect capability syntax or build failure
**Solution**: Verify capability format and build status

### Getting Help

If you encounter issues with baseline management or need clarification on approval workflows:
- Check the [SmartUI Baseline Management Documentation](/support/docs/smartui-baseline-management/)
- Review [Multiselect & Bulk Operations Guide](/support/docs/smartui-multiselect-bulkops/)
- Contact support at support@testmuai.com

Understanding these functions and their workflow differences will help you maintain accurate visual regression testing and avoid baseline-related confusion.

## Next Steps

Now that you've run your first project, explore these resources to enhance your visual testing:

- **Configure Your Project**: Learn about [Project Settings](/support/docs/smartui-project-settings) to customize comparison parameters
- **Handle Dynamic Content**: See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for pages with changing content
- **Manage Baselines**: Understand [Baseline Management](/support/docs/smartui-baseline-management) for effective test comparisons
- **Troubleshooting**: If you encounter issues, check the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)

## Using the SmartUI Agent Skill with TestMu AI
***

The [smartui-skill](https://github.com/LambdaTest/agent-skills/tree/main/smartui-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The smartui-skill package includes:

```
smartui-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing SmartUI Agent Skill
***

Install a SmartUI Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/smartui-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/smartui-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only smartui-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for common issues
- [Project Settings](/support/docs/smartui-project-settings) - Configure your project settings
- [Configuration Options](/support/docs/smartui-sdk-config-options) - Learn about all available configuration options
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle pages with dynamic content
- [Baseline Management](/support/docs/smartui-baseline-management) - Manage your test baselines
- [SDK Documentation](/support/docs/smartui-selenium-js-sdk/) - Framework-specific integration guides
