---
id: smartui-project-settings
title: SmartUI Project Configuration
sidebar_label: Configure Projects
description: In this documentation, learn about the project settings available for SmartUI Projects in order to customize your project, manage approvals, configure comparison parameters, and more.

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
url: https://www.testmuai.com/support/docs/smartui-project-settings/
site_name: TestMu AI
slug: smartui-project-settings/
canonical: https://www.testmuai.com/support/docs/smartui-project-settings/
hide_title: true
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
          "name": "WebDriverIO With Appium",
          "item": `${BRAND_URL}/support/docs/smartui-cli-complete-reference/`
        }]
      })
    }}
></script>

# SmartUI Project Configuration

---

SmartUI Project Configuration covers the settings that control how your project authenticates, compares screenshots, groups builds, handles dynamic content, and organizes multiple projects in a single repository. SmartUI offers a wide array of settings to customize your project, manage approvals, configure comparison parameters, and more. Before delving into the Project Settings, ensure you meet the following prerequisites:

## Prerequisites for Accessing Project Settings in SmartUI

To access the Project Settings in SmartUI, you must meet the following requirements:

1. You need an active account with [TestMu AI](https://www.testmuai.com/login/).
2. Ensure you have an active [subscription plan](https://www.testmuai.com/pricing/) with a valid screenshots limit.
3. You must have created a project within the SmartUI web app.

## Navigating to Project Settings

To access the Project Settings, follow these simple steps:

1. Log in to your SmartUI account and navigate to your desired SmartUI project and click on it.

2. Click on the "Project Settings" section within the SmartUI dashboard to access the settings related to your project.

## Projects Page

All the tests on SmartUI get executed as a Project, and every Project lives on the Projects page — the best place to explore once you have [run your first sample project](/support/docs/smartui-running-your-first-project/). Each Project has an Approver, Tags, Platform, and a Sort By section followed by the details of the number of builds and who initiated the Project.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/guided-walkthrough/1.png').default} alt="SmartUI Projects Page" className='doc_img'/>

## Projects Dashboard Details

The SmartUI dashboard presents a comparison between the baseline and the captured screenshots for visual regression testing. It provides essential insights to detect any UI anomalies.

### Key Sections
- **Baseline View :** Displays the previously captured UI state for comparison. It serves as the reference point for regression testing.
- **Captured View :** Shows the latest UI version to compare against the baseline. Differences are highlighted for easy identification.

### Diff Controls
Located at the center of the top menu, the Diff Controls allow testers to customize how visual differences are displayed, offering multiple options to refine the comparison process. The available modes are:

#### Layers
- **Captured Diffs :** Highlights the differences detected in the current captured screenshots when compared to the baseline. Ideal for spotting changes introduced in the latest version.
- **Baseline Diffs :** Displays the differences by focusing on the baseline's unique elements. Helps identify elements missing or changed in the new capture. Annotations : Allows users to add notes or highlight specific regions of interest on the screenshots. Useful for documenting findings or collaborating with team members.
- **Annotations :** Controls the visibility of your annotations in both parallel and landscape views with a toggle, default set to off, ensuring a clean visual field when not needed.

#### Diff Options
- **Strict Mode :** Highlights exact pixel mismatches between the baseline and captured screenshots. Best suited for detailed visual inspections where high precision is required.
- **Smart Ignore :** Intelligently hides the displacement differences, allowing you to concentrate on actual content changes that impact the user experience.

### Variants
The top menu includes browser variants, which allow cross-browser testing. Variants visible in the screenshot include: Chrome, Firefox, Edge, Playwright WebKit (Pw-Webkit). Each variant shows the same test across different browsers and resolutions, helping identify browser-specific visual issues.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/guided-walkthrough/2.png').default} alt="SmartUI Projects Dashboard" className='doc_img'/>

## Project Settings

<Tabs className='docs__val' groupId='project-settings'>
<TabItem value='token' label='Project Token' default>

**Project Token**

The Project Token is a unique identifier that authenticates your SmartUI project for executing tests locally with CLI and APIs. You'll find your Project Token in the Project Settings after creating a project.

**Setting Up Project Token**

Use this key to authenticate your SmartUI project for executing locally with CLI and APIs.

<Tabs className='docs__val' groupId='platform'>
<TabItem value='macos-linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN='project#token'
```

</TabItem>
<TabItem value='windows-cmd' label='Windows - CMD'>

```bash
set PROJECT_TOKEN='project#token'
```

</TabItem>
<TabItem value='powershell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN='project#token'
```

</TabItem>
</Tabs>

### Using Project Token

The Project Token is required for:
- CLI executions (`npx smartui exec`, `npx smartui capture`)
- API uploads
- Local test execution
- CI/CD pipeline integrations

:::info
Keep your Project Token secure and never commit it to version control. Use environment variables or secret management tools in CI/CD pipelines.
:::

</TabItem>

<TabItem value='basic' label='Basic Settings'>

**Basic Settings**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Basic_ss.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

- **Project Name:** Customize the name of your project to enhance its identification.

:::info
Changing the Project Name will automatically update the `smartUI.project` capability's options for Web/App projects.
:::

- **Approvers:** Manage the list of authorized individuals responsible for approving changes within the project.

:::info
Altering Approvers will impact email notifications, which will be sent to the latest approver list for recent builds.
:::

- **Tags:** Add tags to your project for better organization and categorization.

</TabItem>

<TabItem value='comparison' label='Comparison Settings'>

**Comparison Settings**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/comparison.png').default} alt="Comparison Settings" width="768" height="373" className='doc_img'/>

Comparison settings allow you to fine-tune how SmartUI compares screenshots, balancing between highlighting important changes and ignoring noise.

**Pixel Threshold**

Strike a balance between highlighting important changes and ignoring noise. The pixel threshold determines the sensitivity of the comparison algorithm.

**Options:**
- **Relaxed**: Higher threshold, fewer differences detected (good for pages with minor rendering variations)
- **Recommended**: Balanced threshold (default, suitable for most use cases)
- **Strict**: Lower threshold, more differences detected (good for precise comparisons)
- **Custom**: Set a custom threshold value (0-10000)

**Example:**
- Custom value: `5000` - Higher value means more tolerance for pixel differences

:::info
Adjusting the Pixel Threshold in Comparison Settings will only affect new builds/screenshots captured after the update.
:::

**Error Highlight Color**

Set the color to show/highlight the changes in the pixel differences on your test output.

**Available Colors:**
- Red (default)
- Blue
- Orange
- Green
- Pink
- Gray
- Custom: Enter a hex color code (e.g., `#f687b3`)

**Use Case**: Choose a color that provides good contrast against your page background for easier visual identification of differences.

**Custom Mismatch Acceptance**

Configure pixel-to-pixel acceptance percentage for auto-approval.

**Settings:**
- **Accept**: Percentage threshold for auto-approval (0-100)
- **Reject**: Percentage threshold for auto-rejection (0-100)

**Example:**
- Accept: `0%` - No auto-approval
- Reject: `100%` - Auto-reject all differences

**Use Case**: Automatically approve screenshots with differences below the acceptance threshold, reducing manual review time.

**Smart Ignore**

Highlight content changes while smartly ignoring layout shifts and displacement differences.

**Toggle**: Enable/disable Smart Ignore for the project

**Benefits:**
- Reduces false positives from layout shifts
- Focuses on actual content changes
- Improves test reliability

For detailed information, refer to [Smart Ignore Documentation](/support/docs/smartui-smartignore).

**Bounding Boxes**

Configure your areas to which needs to be ignored or select a specific area for comparison.

**Use Cases:**
- Ignore specific regions (ads, dynamic content)
- Focus comparison on specific areas (main content, critical UI)
- Define regions of interest for comparison

**Advanced Comparison Settings**

Manage your Pixel to Pixel false positives and comparison view types.

**Ignore Pixel Scaling Options**

Choose options to remove the Pixel to Pixel false-positive rate in identifying the screenshot.

**Options:**
- **Ignore Antialiasing**: Ignore differences caused by antialiasing rendering
- **Ignore Less**: Minimal pixel difference tolerance
- **Ignore Nothing**: No pixel difference tolerance (strictest)
- **Ignore Alpha**: Ignore alpha channel differences
- **Ignore Colors**: Ignore color differences, focus on structure

**Use Case**: Reduce false positives from rendering differences, browser-specific rendering, or minor pixel variations.

**Error Type Identifier**

Show the differences in the output screen by identifying the pixel changes type and capture the intended view.

**Options:**
- **Flat**: Simple difference highlighting
- **Movement**: Highlight elements that moved
- **Movement with Diff Intensity**: Show movement with intensity levels
- **Diff portion from the Input**: Show only the different portions
- **Flat with Diff Intensity**: Flat view with intensity levels

**Use Case**: Choose the view that best helps you identify and understand the differences in your screenshots.

**Transparency**

Strike a balance between highlighting differences and maintaining visibility of the underlying content.

**Options:**
- **Opaque**: Full opacity, clear difference highlighting
- **Transparent**: Lower opacity, see underlying content

**Use Case**: Adjust transparency to see both the differences and the original content for better context.

**Resize Image**

Ability to scale the test screenshot according to baseline.

**Options:**
- **Use Original Image**: Compare at original size
- **Scale to same size**: Scale screenshots to match baseline size

**Use Case**: Handle cases where screenshots are captured at different resolutions or viewport sizes.

:::info
Changes to Project Settings will impact builds/comparisons executed after the changes and the previous builds/comparisons remain unaffected.
:::

**Additional Information:**
For detailed information on these options, refer to the [Test Settings](#test-settings) section below.

</TabItem>

<TabItem value='build' label='Build Settings'>

**Build Settings**

**Smart Baseline**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart_baseline_ss.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

Smart Baseline is a feature that simplifies and automates the process of updating the baseline for approved screenshots in your baseline build. This feature provides convenience and efficiency by ensuring your baseline remains in sync with approved changes without manual intervention.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart_baseline.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

- **Baseline Branch:** A baseline branch build consists of screenshots captured using SmartUI. All screenshots in this build are compared against non-baseline branch builds.

- **Non-Baseline Branches:** Non-baseline branch(s) builds are sets of screenshots captured using SmartUI. All screenshots in these builds are compared against the baseline build, matching them by screenshot names.

:::info
When **`Smart Baseline`** is turned on, the system automatically updates the baseline for approved screenshots in the baseline build, streamlining the testing process and saving time.
:::

:::caution Warning
Please note that this feature is not supported for projects integrated with `Git` as `Git`-based projects follow a [Git branching strategy](/support/docs/smartui-github-app-integration/).
:::

**Git Settings**

Configure Git-related settings for your project, including the baseline branch name, auto-approval branches, GitHub repository linkage, and run status checks.

**Additional Information:**
For detailed information on these options, refer to our [Git Baseline Branching Documentation](/support/docs/smartui-github-app-integration/).

**Overwrite Screenshot**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/overwrite_ss.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

- This feature allows to update and overwrite screenshots with the same name, ensuring that the latest version is updated for that screenshot.

- This capability provides users with more control over the management of screenshots with identical names, enabling them to maintain accurate visual records and efficiently track changes in their application's user interface over time.

</TabItem>

<TabItem value='notifications' label='Notifications'>

**Notifications**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/notif_ss.png').default} alt="Notifications Settings" width="768" height="373" className='doc_img'/>

Configure how you receive alerts and updates about your SmartUI project.

**Email Notifications**

Receive email notifications whenever there are changes found in your build or the project baseline changes.

**Settings:**
- **Build Changes**: Get notified when visual differences are found in builds
- **Baseline Changes**: Get notified when project baseline is updated
- **Approver Changes**: Get notified when project approvers list is modified

**Use Case**: Stay informed about visual changes without constantly checking the dashboard.

**Slack Alerts**

Receive Slack alerts whenever there are changes found in your build.

**Setup:**
1. Connect your Slack workspace in Project Settings
2. Configure which events trigger Slack notifications
3. Choose the Slack channel for notifications

**Use Case**: Integrate visual testing alerts into your team's communication workflow.

:::note
We are continually adding more notification channels for SmartUI.
:::

</TabItem>

<TabItem value='other' label='Other Settings'>

**<BrandName /> Badge**

Show the world that you are using <BrandName /> for your visual regression testing.

**Badge Code:**
```markdown
[![This project is using Lambda test for visual regression testing.](https://smartui.lambdatest.com/static/media/LTBadge.64a05e73.svg)](https://lambdatest.com)
```

**Use Case**: Add to your README or documentation to showcase your testing setup.

**Delete Project**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/delete.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

The "Delete Project" option allows administrators or project creators to permanently delete a project. Once a project is deleted, it cannot be retrieved.

:::info
Only the **Admin** or **Creator** of the project can delete a project. Once deleted, a project cannot be retrieved.
:::

</TabItem>
</Tabs>

## Test Settings

Test settings control the pixel-to-pixel (P2P) comparison SmartUI runs between your **Baseline** and **Test Output** screenshots captured during your automation testing suites.

### Our Pixel to Pixel (P2P) Comparison Options

We offer multiple options for comparing the **Baseline** and the **Test Output** screenshots captured during your automation testing suites.

Here are common **pixel-to-pixel** comparison options. The first group is **actively used** through `smartUI.options` (or your framework’s equivalent) in typical integrations:

- `largeImageThreshold`: Pixel granularity for how comparison blocks are formed.
- `errorType`: How differences are highlighted (`movement`, `flat`, etc.).
- `ignore`: Reduces P2P false positives (`antialiasing`, `alpha`, `colors`, `nothing`).
- `transparency`: Overlay transparency for the diff view.

The sections **[Bounding Boxes](#bounding-boxes---compare-only-specific-area)**, **[Ignore Boxes](#ignore-boxes---ignore-only-specific-area)**, and **[Ignore Areas Colored](#ignore-areas-colored---removes-the-colored-content-from-the-comparison)** describe **region- and color-based** comparison. Examples nest keys under **`smartUI.options`** / **`smart_ui.options`** like the options above; **still validate** with your integration or support, see the warning before **Bounding Boxes**. For region-level control in the product UI, prefer **[Draw on UI / annotations](/support/docs/smartui-draw-on-ui/)**.

### Examples with comparison settings

#### Image Threshold

The image threshold settings helps you in analyzing the granularity of the pixel resolution for each block which shall be created by the algorithm for the comparison.

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>" // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "largeImageThreshold": 100 // The image threshold for comparison the min of 100 and max of 1200
  }
};
```

</TabItem>

<TabItem value="cypress" label="Cypress" default>

```json title="Add the following in your /project/lambdatest-config.json"
"smart_ui": {
      "project": "<Your Project Name>" // Add your SmartUI Project Name here
      "options": {
        // highlight-next-line
        "largeImageThreshold": 100 // The image threshold for comparison the min of 100 and max of 1200
      }
    }
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/image-threshold-sample.png').default} alt="Image" className="doc_img"/>

#### Error Identifier Types

The pixel to pixel comparison at which we offer for the error highlighting in the test output is determined by the changes in the `pixel` distribution for the **Baseline** screenshot to the **Comparison** screenshot. This feature will help in determining for the approver that the pixels can be easily identified.

The following are the supported options for the pixel comparison feature:

- `movement` - specifies the pixel movements
- `flat` - specifies the pixel value changes

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>" // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "errorType": "movement" // To set the error identifier
  }
};
```

</TabItem>

<TabItem value="cypress" label="Cypress">

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
      "project": "<Your Project Name>" // Add your SmartUI Project Name here
      "options": {
        // highlight-next-line
        "errorType": "movement" // To set the error identifier
      }
    }

```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Error-Type-Sample.png').default} alt="Image" className="doc_img"/>

#### Ignore - P2P False Positives

When the screenshot is captured and it is then compressed to a file format such as `.png,.jpg,.jpeg,etc..` then there is high chance of pixelation enhancement will be made to the screenshot to enhance the quality of the image. This could be mis-leading to a visual appearance on the browser for the comparison with the current **Baseline** version. We provide you with options to mitigate this risk of flakiness in your comparison output.

The following are the supported options for the pixel comparison feature:

- `antialiasing` - ignores the smoothing of edges in digital images.
- `alpha` - ignores the alpha of the pixel color and makes into solid color without any opacity, click [here](https://sites.uci.edu/iap2015/2015/01/14/the-alpha-attribute-of-a-picture/#:~:text=In%20digital%20images%2C%20each%20pixel,of%200%20means%20totally%20transparent.) to know more.
- `colors` - added corrected lightness to the screenshot by ignoring the default pixel color value.
- `nothing` - ignores none of the false positive options from the comparison.

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>" // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "ignore": "antialiasing" // To set the ignore identifier
  }
};
```

</TabItem>

<TabItem value="cypress" label="Cypress">

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
      "project": "<Your Project Name>" // Add your SmartUI Project Name here
      "options": {
        // highlight-next-line
        "ignore": "antialiasing" // To set the ignore identifier
      }
    }

```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Ignore-Differences-sample.png').default} alt="Image" className="doc_img"/>

#### Transparency

An advanced configuration to set the comparison view image to be displayed as a `opquae` or `transparent` for easy identification for the approver.

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>" // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "transparency": 0.3 // minimum = 0 and maximum = 1 supports upto one decimal such as 0.1 to 0.9
  }
};
```

</TabItem>

<TabItem value="cypress" label="Cypress">

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
      "project": "<Your Project Name>" // Add your SmartUI Project Name here
      "options": {
        // highlight-next-line
        "transparency": 0.3 // minimum = 0 and maximum = 1 supports upto one decimal such as 0.1 to 0.9
      }
    }

```

</TabItem>
</Tabs>

:::warning `boundingBoxes`, `ignoredBoxes`, `ignoreAreasColoredWith`
These three comparison modes exist in SmartUI’s **pixel-to-pixel** model. The examples below nest them under **`smartUI.options`** (Selenium) and **`smart_ui.options`** (Cypress), the same shape as **Image Threshold** through **Transparency**, but **behavior can still vary by integration**; **do not copy into production** without validating against your session or with **[support](mailto:support@testmuai.com)**. For box/color-style ignores in the UI, use **[Draw on UI](/support/docs/smartui-draw-on-ui/)** or confirm the supported payload with support.
:::

#### Bounding Boxes - Compare only specific area {#bounding-boxes---compare-only-specific-area}

The bounding boxes are the areas created on the screenshot which needs to be compared with the baseline ignoring other areas from the screenshot.

**Reference only:** verify with support before relying on capability wiring.

This specific case is used to compare only a specific area of the screenshot from the **baseline**.

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
// Bounding box sample settings
const box1 = {
left: 100,
top: 500,
right: 800,
bottom: 300
};

const box2 = {
left: 800,
top: 50,
right: 20,
bottom: 700
};

let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>", // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "boundingBoxes": [box1, box2] // Compare only these regions (P2P)
  }
};

```

</TabItem>

<TabItem value="cypress" label="Cypress">

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
  "project": "<Your Project Name>",
  "options": {
    "boundingBoxes": [
      {
        "left": 100,
        "top": 500,
        "right": 800,
        "bottom": 300
      },
      {
        "left": 800,
        "top": 50,
        "right": 20,
        "bottom": 700
      }
    ]
  }
}

```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Bounding-Box-Sample.png').default} alt="Image" className="doc_img"/>

#### Ignore Boxes - Ignore only specific area {#ignore-boxes---ignore-only-specific-area}

**Reference only:** verify with support before relying on capability wiring.

The ignored boxes are the areas created on the screenshot which needs to be ignored with the baseline comparing the other areas from the screenshot.

This specific case is used to ignore only a specific area of the screenshot from the **baseline**.

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
// Bounding box sample settings
const box1 = {
left: 100,
top: 500,
right: 800,
bottom: 300
};

const box2 = {
left: 800,
top: 50,
right: 20,
bottom: 700
};

let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>", // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "ignoredBoxes": [box1, box2] // Ignore these regions during P2P compare
  }
};

```

</TabItem>

<TabItem value="cypress" label="Cypress">

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
  "project": "<Your Project Name>",
  "options": {
    "ignoredBoxes": [
      {
        "left": 100,
        "top": 500,
        "right": 800,
        "bottom": 300
      },
      {
        "left": 800,
        "top": 50,
        "right": 20,
        "bottom": 700
      }
    ]
  }
}

```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Ignored-Box-Sample.png').default} alt="Image" className="doc_img"/>

#### Ignore Areas Colored - Removes the colored content from the comparison {#ignore-areas-colored---removes-the-colored-content-from-the-comparison}

**Reference only:** verify with support before relying on capability wiring.

You can exclude the pixels that match the specified color on a **baseline** image from the comparison view. This feature will ignore that specific regions with the color pixels and shows the comparison view.

You can specify the following `capability` in the following format:

<Tabs className="docs__val" groupId="frameworks">

<TabItem value="selenium" label="Selenium" default>

```js title="Make changes in your  your test configuration file"
// Bounding box sample settings
const color = {
  r: 242,
  g: 201,
  b: 76,
  a: 1
};

let capabilities = {

  /*  ....Your Selenium capabilities go here */

  "smartUI.project": "<Your Project Name>", // Your SmartUI project name
  "smartUI.options": {
    // highlight-next-line
    "ignoreAreasColoredWith": color // Ignore pixels matching this RGBA in P2P compare
  }
};

```

</TabItem>

<TabItem value="cypress" label="Cypress">

```json title="Make changes in your /project/lambdatest-config.json"
"smart_ui": {
  "project": "<Your Project Name>",
  "options": {
    "ignoreAreasColoredWith": {
      "r": 242,
      "g": 201,
      "b": 76,
      "a": 1
    }
  }
}

```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Ignore-Colors-Sample.png').default} alt="Image" className="doc_img"/>

## HTML DOM Options

HTML DOM options let you handle dynamic content of your web pages during visual regression by ignoring or selecting specific areas of the DOM.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Ignored-DOM-Sample.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

Using the <BrandName /> platform, perform regression testing in just one click and explore various possible solutions for grouping your screenshots into different builds and map as per your testing suite needs.

In case if you have any dynamic elements that are not in the same position across test runs, you can ignore / select a specific area to be removed from the comparison.

### Configuration for Selenium

The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline    |     
| `fullPage` (boolean) | Specify `true` if you want to take a Full Page Screenshot and `false` for viewport screenshots; `fullPage: true` is currently only supported for `Chrome` |       
| `ignoreDOM` (object) **<NewTag value='New' color='#000' bgColor='#ffec02' />**     | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or Xpath` used by your webpage that should be excluded from the comparison |
| `selectDOM` (object)      | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or XPath` used by your webpage that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your webhook configuration for JavaScript to ignore by ID"
let config = {
  screenshotName: "Ignore-ID",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    id: ["ID-1", "ID-2"], // Ignoring elements by ID, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your webhook configuration for JavaScript to ignore by Class"
let config = {
  screenshotName: "Ignore-Class",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    class: ["Class-1", "Class-2"], // Ignoring elements by class, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your webhook configuration for JavaScript to ignore by XPath"
let config = {
  screenshotName: "Ignore-XPath",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    xpath: ["Xpath-1", "Xpath-2"], // Ignoring elements by XPath, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your webhook configuration for JavaScript to ignore by CSS Selector"
let config = {
  screenshotName: "Ignore-cssSelector",
  fullPage: false, //You can make this property as true in case of Chrome browser
  ignoreDOM: {
    cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Ignoring elements by CSS selector, you can ignore multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your webhook configuration for JavaScript to select by ID."
let config = {
  screenshotName: "Select-ID",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    id: ["ID-1", "ID-2"], // Selecting elements by ID, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your webhook configuration for JavaScript to select by Class"
let config = {
  screenshotName: "Select-Class",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    class: ["Class-1", "Class-2"], // Selecting elements by class, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for JavaScript to select by XPath"
let config = {
  screenshotName: "Select-XPath",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    xpath: ["Xpath-1", "Xpath-2"], // Selecting elements by XPath, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for JavaScript to select by CSS Selector"
let config = {
  screenshotName: "Select-cssSelector",
  fullPage: false, //You can make this property as true in case of Chrome browser
  selectDOM: {
    cssSelector: ["CSS-Selector-1", "CSS-Selector-2"], // Selecting elements by CSS selector, you can select multiple at once
  },
};
await driver.executeScript("smartui.takeScreenshot", config);
```
</TabItem>

</Tabs>

### Configuration for Puppeteer

The following are the different options which are currently supported:

| Key | Description  |
| ------------------------- | --------------------------------------- | 
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             | 
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be excluded from the comparison | 
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be included in the comparison |
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison | 
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)
```
</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Puppeteer"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>

### Configuration for Playwright

The following are the different options which are currently supported:

| Key                       | Description                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline             |
| `ignoreDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be excluded from the comparison | 
| `selectDOM` (object)      | Specify a selector based on the HTML DOM ID, CSS class or CSS selector used by your webpage that should be included in the comparison | 
| `ignoreXPath` (object)      |  Specify a selector based on theXPath of the element that should be  excluded from the comparison |
| `selectXPath` (object)      | Specify a selector based on theXPath of the element that should be included in the comparison |


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  ignoreXPath: ['Xpath-1', 'Xpath-2']} })}`)
```
</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', ignoreDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {id:["HTML DOM Id"]} }})}`)
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {class:["<CSS Class>"]} }})}`)
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot',  selectXPath: ['Xpath-1', 'Xpath-2']} })}`)
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Playwright"
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: false, screenshotName: 'dom-screenshot', selectDOM : {cssSelector:["<CSS Selector>"]} }})}`)
```
</TabItem>

</Tabs>

## Build Config & Options

Build options let you group screenshots into builds, mark a build as a baseline, and track build status across your testing suite. Using the <BrandName /> platform, perform regression testing in just one click and explore various possible solutions for grouping your screenshots into different builds and map as per your testing suite needs.

### Enabling build mapping for multiple screenshots

If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite. We have to enable the mapping with the `smartUI.build` to be added your capabilities.

<Tabs className="docs__val" groupId="framework">
<TabItem value="selenium" label="Selenium" default>

```js title="Please add the following to your capabilities configuration"
let capabilities = {
    // highlight-next-line
    "smartUI.build": <Your_Build_Name> // Please add your build name of choice here
}
```

</TabItem>
<TabItem value="cypress" label="Cypress" default>

```json title="Please make the changes in lambdatest-config.json"
"smart_ui": {
    // highlight-next-line
      "build": <Your_Build_Name> // Please add your build name of choice here
}
```

</TabItem>
<TabItem value="playwright" label="Playwright" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBuildName": <Your_Build_Name> // Please add your build name of choice here
    
}}
```
</TabItem>
<TabItem value="puppeteer" label="Puppeteer" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBuildName": <Your_Build_Name> // Please add your build name of choice here
    
}}
```
</TabItem>
<TabItem value="k6" label="K6" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBuildName": <Your_Build_Name> // Please add your build name of choice here
    
}}
```
</TabItem>
</Tabs>

### Enabling build as a baseline

If you want to mark your build as a baseline from your test suite while executing tests then you have to enable the below mentioned capability configuration needs to be enabled.

<Tabs className="docs__val" groupId="framework">
<TabItem value="selenium" label="Selenium" default>

```js title="Please add the following to your capabilities configuration"
let capabilities = {
  // highlight-next-line
  "smartUI.baseline": true / false, // Enable if you want to update to a new baseline build
};
```

</TabItem>
<TabItem value="cypress" label="Cypress" default>

```json title="Please make the changes in lambdatest-config.json"
"smart_ui": {
    // highlight-next-line
      "baseline": true/false // Enable if you want to update to a new baseline build
}
```

</TabItem>
<TabItem value="playwright" label="Playwright" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBaseline": true // Please add if you want to make this build as baseline
    
}}
```
</TabItem>
<TabItem value="puppeteer" label="Puppeteer" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBaseline": true // Please add if you want to make this build as baseline
    
}}
```
</TabItem>
<TabItem value="k6" label="K6" default>

```js title="Please add the following in <LT:Options> in your capabilities configuration "

const capabilities = {
'LT:Options': {
    // highlight-next-line
      "smartUIBaseline": true // Please add if you want to make this build as baseline
    
}}
```
</TabItem>
</Tabs>

### Build Features

The following are the list of features that are available for the build process in SmartUI:

- All the screenshots are grouped together as a one build.
- The screenshots are mapped from the **baseline** to the **Comparison screenshot** in the same sequential pattern as per the baseline build.
- Add additional screenshots if needed for the existing build by using the same build name in the capabilities. This will add new screenshots to the build.
- You can also update any build of choice as a new **Baseline** build.

:::info
We currently only support one baseline for one project in our current version. We recommend you to create a new project for multiple baseline builds
:::

### Build Status Information

We are provide multiple build status options for the project owners to check the status of builds and take required actions to the screenshots by the approver(s).

<img loading="lazy" src={require('../assets/images/smart-visual-testing/build-status-dotlapse.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Multiple Projects per Repo

Multiple projects per repo let you manage and test UI components across several SmartUI projects within a single repository. By organizing multiple projects in a single repository, you can centralize your workflows and streamline collaboration. This section walks you through setting up multiple projects in a repository for SmartUI and how you can trigger the same via GitHub Actions pipeline.

### Setting Up Multiple Projects in a Repository

#### Prerequisites
- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Your SmartUI Project Token

#### Step 1: Organize Your Repository
Create a repository where you can organize your projects into various directories. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.
<a href="https://github.com/LambdaTest/smartui-monorepo-sample/" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

#### Step 2: Create your Secrets
- Click on the **Settings** of your repository.
- Go to the **Security** option > **Secrets and Variables** > **Actions**.
- Create your secrets with variable name **LT_USERNAME** and **LT_ACCESS_KEY**. You can fetch your credentials from the [Accounts and Settings](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security) dashboard.

#### Step 3: Create your GitHub Actions Workflow
- Navigate to the main page of the repository.
- Under your repository name, click **Actions**.
- In the left sidebar, click the **New workflow** button.

```yaml reference
https://github.com/LambdaTest/smartui-monorepo-sample/blob/main/.github/workflows/main.yml
```

#### Step 4: Execute your projects
- Click on the **Actions** button of your repository to trigger the pipeline.
- Provide the **PROJECT TOKEN** to trigger your code projects.
- Go to the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) to check the results.

## Omni Projects <NewTag value="New" /> {#omni-projects}

An **Omni project** is a SmartUI project type in which every capture source can co-exist. A single Omni project accepts website screenshots, native app screenshots, PDFs, Figma designs, Storybook components and directly uploaded images, side by side in the same project. Each capture run still produces its own build, and builds from different sources sit together in the same build list.

Standard project types work the other way around. A standard project is created for one source, and that choice is fixed: a Website project accepts website captures, a PDF project accepts PDFs, an App project accepts app screenshots. Sending a different source type to a standard project is rejected, and the run fails with a project type mismatch telling you the project already exists with a different platform type, and to either use a different project name or create a project of the platform type you are sending. Covering a release that spans web, mobile and documents therefore means creating and managing several projects side by side.

### Omni vs Standard Projects

| | Omni project | Standard project |
| --- | --- | --- |
| Capture sources accepted | Website, App, Figma, Storybook, PDF, Image | One source, fixed at creation |
| Sending another source type | Accepted | Rejected with a project type mismatch error |
| Projects needed for a web + mobile + PDF release | One | One per source |
| Configuration screen | One tab per capture source | Instructions for the project's own source |
| Baseline selection | Per git branch | One baseline for the project, except CLI projects, which are also per git branch |
| Build list | One chronological list across all sources | Grouped into **Baseline Build** and **Non Baseline Build** |

The practical difference is consolidation. A team shipping a feature across a web app, a mobile app and a generated PDF statement can run all three into one Omni project and read one build list, instead of aggregating status by hand from three projects.

#### What this means if you are migrating

For an enterprise team weighing a move, the differences that actually change day to day work are these.

**Fewer projects, and one place to look.** A release that spans a web app, a mobile app and generated documents needs one Omni project rather than three. Approvers, tags and settings are configured once rather than kept in step across projects, and the release status is read from one build list.

**Branch aware baselines.** This is the change most likely to affect an existing pipeline, and how much it affects you depends on where you are coming from.

- Coming from a **CLI** project, nothing changes. CLI projects already resolve baselines per git branch, and Omni behaves the same way.
- Coming from a **Website**, **App** or **PDF** project, this is new. Those resolve against one baseline for the whole project, whereas Omni resolves per branch, so a feature branch compares against its own branch's baseline rather than against whatever the project's single baseline happens to be.

If your runs do not currently send branch information, add it before migrating, because Omni treats a build with no branch as being on the default branch.

**A different baseline mental model in the dashboard.** A standard project separates its build list into a **Baseline Build** and **Non Baseline Build** section, so the baseline is a specific build you can point at. An Omni project shows one chronological list, and the baseline is resolved per branch rather than being a single pinned build. Teams with a documented approval process that references "the baseline build" will want to revisit that wording.

**Document annotation is materially better on Omni.** In a standard PDF project a region applies only to the page you drew it on, so a 40 page document means 40 regions placed by hand. Omni adds page level propagation plus [Element Based Anchoring](/support/docs/smartui-draw-on-ui/#element-based-anchoring), so one region can cover the whole document and follow the anchored content as the pages reflow. For teams testing statements, invoices or policy packs this is usually the single biggest reason to move.

**Nothing changes for how you capture.** The CLI commands, SDK hooks and APIs are the same. Omni changes which project accepts the artifact and how baselines are resolved, not how the screenshot is taken, so existing test code does not need rewriting.

**Existing projects are unaffected.** Projects created before Omni was enabled keep their original type and behaviour. Migration is not automatic, and there is no in place conversion of a standard project into an Omni one, so plan for new projects rather than a switch on existing ones.

### Capture Sources

Every source below can be used in the same Omni project. Each one keeps the workflow it already has, because Omni changes where the results land, not how you capture them.

<Tabs className='docs__val' groupId='omni-sources'>
<TabItem value='website' label='Website' default>

Browser-based capture, through any of the supported routes:

- **CLI exec mode**, to wrap an existing automation suite, for example `npx smartui exec -- npx cypress run`
- **CLI capture mode**, to capture a list of static URLs with `npx smartui capture urls.json`
- **SDK hooks**, calling `smartui.snapshot()` directly inside your test code
- **Web Scanner**, for no-code crawling of a site

</TabItem>

<TabItem value='app' label='App'>

Native mobile app screenshots captured through the app automation SDKs (Appium, Espresso and XCUITest), using the SmartUI screenshot hook inside your test.

</TabItem>

<TabItem value='figma' label='Figma'>

Designs pulled straight from Figma with the CLI, so the intended design can sit in the same project as the implementation that is meant to match it.

```bash
smartui upload-figma <designs.json>
```

</TabItem>

<TabItem value='storybook' label='Storybook'>

Component-library validation by crawling a running Storybook instance.

```bash
npx smartui storybook <storybook-url>
```

</TabItem>

<TabItem value='pdf' label='PDF'>

Multi-page document verification. Each page of the PDF becomes its own comparison.

```bash
smartui upload-pdf <path-to-pdfs>
```

PDFs can also be uploaded through the SmartUI PDF API.

</TabItem>

<TabItem value='image' label='Image'>

Raw image assets uploaded directly, for cases where the screenshot is produced outside SmartUI.

```bash
smartui upload <path-to-images>
```

</TabItem>
</Tabs>

### Where Each Source Is Set Up

The project configuration screen carries one tab per capture source: **Website**, **App**, **Figma**, **Storybook**, **PDF** and **Image**. Each tab holds the integration instructions for that source, including the CLI, SDK and API routes where they apply, along with the project token to authenticate with.

In a standard project this screen shows the instructions for the single source the project was created for. In an Omni project all six tabs are available, so you can add a second or third source to a project that is already running without creating a new one.

### Reading Results

Results for every source land in the same place. The project's build list holds builds from all sources in one chronological list, and opening a build shows the screenshots captured in that run, whether they came from a browser, an app, a design file or a PDF.

Within a build, the **All** and **New** tabs filter by screenshot status rather than by source, and PDF pages are shown as variants of the document they came from.

### How Artifacts Are Matched

Mixing sources in one project only works if SmartUI never compares two things that should not be compared. Omni handles this by matching each artifact against a baseline of the same source, using a key appropriate to that source.

#### Visual sources

Website, App, Figma, Storybook and Image artifacts are all raster images, and are matched on a composite key:

`Screenshot Name` + `Browser` + `Resolution` + `Device Name` + `OS`

Every part of the key must match for a comparison to run. This is what stops a Chrome capture being compared against a Firefox baseline, or a desktop capture against a mobile one.

#### PDF sources

PDF artifacts are documents rather than raster screenshots, and are matched on their own key:

`Screenshot Name` + `Document Name` + `Page Number` + `Resolution`

PDFs are kept in a separate logical space from the visual sources, because document comparison and pixel comparison are different operations. A PDF is never compared against a website, app, Figma, Storybook or image artifact, and vice versa.

#### Same name, different sources

Because matching is source-aware, a PDF named `Report` and a web page named `Report` can live in the same project without colliding. They stay two separate entries and neither overwrites the other.

Similarly, two artifacts that share a name but were captured at different resolutions, say a page captured at 390x844 and the same page at 1920x1080, are treated as separate entries rather than compared against one another.

### Working with Regions in an Omni Project

Annotations behave the same way in an Omni project as anywhere else, and the [region types and scope controls](/support/docs/smartui-draw-on-ui/) are unchanged. What differs is the axis a region propagates along, which follows the source of the screenshot you drew it on:

- On a **PDF** artifact, a region can be applied to every page of that PDF, and [Element Based Anchoring](/support/docs/smartui-draw-on-ui/#element-based-anchoring) places it on the anchored content page by page. Page level propagation is specific to Omni: in a standard PDF project a region stays on the page it was drawn on. Anchoring itself is not limited to Omni, and is available on web comparisons in any project.
- On a **website or app** artifact, a region can be applied to every browser and viewport variant of that screenshot.

### Availability and Access

Omni projects are released behind a feature flag and are rolled out progressively.

:::info Enabled per organisation
Omni is switched on for an organisation as a whole, not per user or per project. Once it is enabled, every project you create is an Omni project regardless of which creation flow you use, and it accepts all six capture sources from the start.
:::

- **Existing projects are not converted.** Projects created before Omni was enabled keep their original type and continue to behave exactly as they did, accepting the single source they were created for. There is no in place conversion, so plan for new projects rather than a switch on existing ones.
- **You can tell the two apart from the dashboard URL.** An Omni project opens under `/test/omni/`, while a standard project opens under its own platform, for example `/test/pdf/`.
- **If you expect Omni and do not see it**, your organisation may not be enabled yet.

To have Omni enabled for your organisation, contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support).

### Omni Best Practices

- **Group by release, not by source.** The value of an Omni project comes from one project covering a whole release. Splitting by source recreates the silos Omni exists to remove.
- **Keep screenshot names stable across sources.** Names are part of every matching key, so a rename is read as a new artifact rather than a change to an existing one.
- **Keep git branch information accurate on every run.** Omni resolves baselines per branch, as CLI projects do, so a missing or wrong branch sends a build to compare against the wrong baseline.
- **Keep viewports consistent between runs.** A changed resolution produces a new entry rather than a comparison.

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for project configuration issues
- [Baseline Management](/support/docs/smartui-baseline-management) - Learn how to manage baselines effectively
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Configure ignoreDOM/selectDOM for dynamic content
- [Smart Ignore Feature](/support/docs/smartui-smartignore) - Automatically ignore layout shifts
- [Configuration Options](/support/docs/smartui-sdk-config-options) - SDK configuration file options
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI
