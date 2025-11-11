---
id: smart-ui-storybook
title: Getting started with SmartUI using Storybook On LambdaTest
description: In this documentation, learn how to perform Visual UI Testing with Storybook on the LambdaTest Automation Cloud across 40+ browser versions.
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

url: https://www.lambdatest.com/support/docs/smart-ui-storybook/
slug: smart-ui-storybook/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

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
          "item": "https://www.lambdatest.com/support/docs/smartui-storybook-integration/"
        }]
      })
    }}
></script>

Using the LambdaTest platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

## Prerequisites for running SmartUI with StoryBook

- Basic understanding of [StoryBook](https://storybook.js.org/docs/react/get-started/introduction) is required.
- Node.js v20.3+ installed (required for SmartUI CLI v4.x.x)
- StoryBook version installed should be higher than `6.4.0.` Click [here](https://github.com/storybookjs/storybook/releases) to know more

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform -

## Steps to create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> for executing your `StoryBook` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

---

:::tip Github Sample

Please try our **StoryBook SmartUI** Github sample repository for trying an example.

```bash
git clone https://github.com/LambdaTest/smartui-storybook-sample.git
```

:::

### **Step 1**: Install the Dependencies

Install required NPM modules for `LambdaTest SmartUI StoryBook CLI` in your **Frontend** project.

```bash
npm install @lambdatest/smartui-storybook -g
```

### **Step 2:** Setup with StoryBook

Add the following to your .storybook/main.js. You can read more about this here Storybook [Feature flags](https://storybook.js.org/docs/react/configure/overview#feature-flags)

```js title=".storybook/main.js"
module.exports = {
  features: {
    buildStoriesJson: true,
  },
};
```

#### Storybook v9+ Play Function Support

SmartUI supports Storybook's `play` function (available in Storybook v9+) for interactive component testing. The `play` function allows you to interact with components before capturing screenshots.

**Example with Play Function:**

```js title="Button.stories.js"
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const InteractiveButton = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    
    // Interact with the button before screenshot
    await userEvent.click(button);
    await expect(button).toHaveTextContent('Clicked!');
  },
};
```

**Best Practices for Play Functions:**

- Use `play` functions to set up component states before screenshots
- Wait for async operations to complete using `waitFor` or `findBy` queries
- Avoid animations or transitions that might cause timing issues
- Use `waitForTimeout` in SmartUI config if components need additional render time after play functions

#### Storybook Globals (Themes) Configuration

SmartUI supports Storybook's global decorators and parameters, including theme switching. You can configure themes in your `.smartui.json` file.

**Configuration Example:**

```json title=".smartui.json"
{
  "storybook": {
    "browsers": ["chrome", "firefox", "safari", "edge"],
    "viewports": [[1920, 1080]],
    "backgroundTheme": "light",  // Options: "light", "dark", or "both"
    "useGlobals": true,  // Enable global decorators and parameters
    "waitForTimeout": 0
  }
}
```

**Theme Options:**

- `"light"`: Capture stories in light theme only
- `"dark"`: Capture stories in dark theme only
- `"both"`: Capture stories in both light and dark themes (creates separate screenshots)

**Example Story with Theme Globals:**

```js title="Card.stories.js"
export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export const Default = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      return (
        <div className={`theme-${theme}`}>
          <Story />
        </div>
      );
    },
  ],
};
```

**Using Multiple Themes:**

If you set `"backgroundTheme": "both"` in your SmartUI config, each story will be captured twice - once in light theme and once in dark theme. The screenshot names will be automatically suffixed (e.g., `Card-Default-light.png` and `Card-Default-dark.png`).

**Note**: When using `"backgroundTheme": "both"`, ensure your Storybook stories properly handle theme switching via globals or decorators.

### **Step 3:** Configure your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-project-token.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

### **Step 4:** Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
smartui config create .smartui.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json title="/smartUi-storybook-project/smartui.json"
{
  "storybook": {
    "browsers": [
      "chrome", 
      "firefox",
      "safari",
      "edge",
      // Add more browser configuration here
    ],
    "viewports": [
      [1920, 1080]        // Add more view ports to capture here
    ],
    "waitForTimeout": 0, // (Optional) Add wait time for the page to load
    "include": [],       // (Optional) Only compare limited stories
    "exclude": []        // (Optional) Don't compare the stories // Apply exclusions/inclusions at directory, sub-directory, or individual story level
  }
}
```

#### SmartUI StoryBook Config Options

Please read the following table for more information about the configuration file:

| Config Key     | Description                                                                                                                        | Usage     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| browsers       | You can add all the supported browsers brands here to run your tests for SmartUI. <br/> Ex: `"chrome", "firefox", "safari", "edge", etc..` | Mandatory |
| viewports    | You can add all the supported browser viewpoints here to run your tests for SmartUI <br/> Ex: `[1920, 1080],[width, height] etc..` <br/> | Mandatory |
| waitForTimeout | You can add wait time for the page to load DOM of your StoryBook components. This can be added globally to your configuration and to individual stories as well. <br/> Ex: `3000`                                      | Optional  |
| include        | Add the stories which should only be included in SmartUI tests <br/> Ex: `"/dashboard/","/features/"`                              | Optional  |
| exclude        | Don't compare the stories which should be excluded in SmartUI tests <br/> Ex: `"/login/","/marketing/"`                            | Optional  |
| backgroundTheme | Theme for capturing stories. Options: `"light"`, `"dark"`, or `"both"` (captures both themes) <br/> Ex: `"light"` | Optional (default: `"light"`) |
| useGlobals     | Enable Storybook global decorators and parameters (required for theme switching) <br/> Ex: `true` | Optional (default: `false`) |

:::note
SmartUI Storybook testing now supports `Edge` browser. 
:::

:::caution Please Note
The `waitForTimeout` is an optional configuration. This is available for the versions above `1.1.7` of the NPM CLI.

If you are using any `async` components in your StoryBook, then you can add the wait time for the page to load the DOM of your StoryBook components.

This will help you to avoid any false-positive results for your tests. You can add the wait time in milliseconds. This might increase the execution time of your tests.

:::

:::info 

For capturing the stories in **full page** without limiting the height to the viewport then in the `viewports` array, you can change the following configuration:

```json
"viewports": [
  [1920],  // Only mention the width of the viewport
  [1440]
]
```
:::

#### Custom Viewport Configuration <NewTag value='New' color='#000' bgColor='#ffec02' />

To facilitate the visualization of your UI components on various device screens, you can now setup custom viewport configurations. This feature is an extension of Storybook's existing Viewport toolbar item, enabling you to capture and view stories in different dimensions, such as `mobile` or `tablet`, with specific orientations like portrait or landscape.

To configure custom viewports for your stories, you can update the `.smartui.json` file within your project repository.

```json
{
...
...
"customViewports": [
      {
        "stories": [
          "<name of the stories/components>"
        ],
      {
        "styles": {
            "width": 322,
            "height": 321
          },
        "exclude": [ // Example: Excluding stories for a specific viewport
          "/directory1",
          "/directory2/subdirectory1",
          "/directory2/subdirectory2",
          "/directory3/subdirectory3/item1",
        ]
      },
      },
      {
        "stories": [
          "<name of the stories/components>"
        ],
        "styles": {
          "width": 834, //Tablet view
          "height": 1112
        },
        "waitForTimeout": 4000 //Story-level waitForTimeout (Applied to all the combinations of the mentioned stories)
      }
      {
        "stories": [
          "<name of the stories/components>" 
        ],
        "waitForTimeout": 3000 //Story-level waitForTimeout (Applied to all the combinations of the mentioned stories)
        }
      }
      // Additional custom viewport configurations can be added here
]
...
...
}
```

:::info
The `waitForTimeout` setting at the story level takes precedence over the global `waitForTimeout` configuration and only applies to the specific stories to which it is assigned. 

For instance, if `Story-1` has a story-level `waitForTimeout` value (T1) set within custom viewport settings, and there exists a global `waitForTimeout` value (T2) defined in the configuration, all browser and viewport combinations of `Story-1` will render with T1. Conversely, all other stories will be rendered with T2 across all combinations.
:::

### **Step 5:** Execute the Tests on SmartUI Cloud using CLI

You can now execute your `StoryBook` components for `Visual Regression Testing` using the following options:.

<Tabs className="docs__val" groupId="execution_type">
<TabItem value="locally-hosted" label="For Locally Hosted Server" default>

```bash
npm run storybook                                                 // Starts your local StoryBook server
smartui storybook http://localhost:6006 --config .smartui.json    // Captures all the stories running on local server
```

</TabItem>
<TabItem value="static-build-or-ci" label="For Static Build">

```bash
npm run build-storybook                                           // Creates a Static Build Folder of StoryBook Stories
smartui storybook ./storybook-static --config .smartui.json       // Captures all the stories added in the static build folder
```

</TabItem>
<TabItem value="public-hosted" label="For Public Hosted URL">

```bash
smartui storybook https://<your_public_hosted_url> --config .smartui.json    // Captures all the stories running on local server
```

</TabItem>
</Tabs>

:::note For Continuous Integration (CI)

If you are using the Continuous Integration (CI) pipeline for your application and want to integrate `SmartUI StoryBook` execution then the following are the steps needs to be added to your `.yaml` file:

<Tabs className="docs__val" groupId="ci_execution_type">
<TabItem value="static-build-or-ci" label="For Static Builds" default>

```yaml
steps:
  - name: Running SmartUI StoryBook Tests
    - run: npm i
    - run: npm install @lambdatest/smartui-storybook -g
    - run: npm run build-storybook
    - run: smartui storybook ./storybook-static --config .smartui.json
```

</TabItem>
<TabItem value="public-hosted" label="For Public Hosted URL">

```yaml
steps:
  - name: Running SmartUI StoryBook Tests
    - run: npm i
    - run: npm install @lambdatest/smartui-storybook -g
    - run: smartui storybook https://<replace_with_your_url> --config .smartui.json
```

</TabItem>
</Tabs>

:::

#### CLI Options and Keys

The following are supported `CLI (Command Line Interface)` options for Visual Regression Testing with SmartUI:

| CLI Flag Key | Description                                                                         | Usage    |
| ------------ | ----------------------------------------------------------------------------------- | -------- |
| --config     | This is the reference configuration file containing the SmartUI Cloud Configuration | Optional |
| --help       | This will print all help information for the SmartUI CLI options                    | Optional |

### **Step 6:** View SmartUI Results

You can now see the SmartUI dashboard to view the results. Can also identify the mis-matches from the existing `Baseline` build.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-storybook-results.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Troubleshooting

<Tabs className="docs__val" groupId="troubleshooting">
<TabItem value="verify-storybook-server" label="Verify Storybook Server" default>

Verify Storybook Server

- Ensure Storybook is running on the specified URL/port
   - Check that `buildStoriesJson: true` is set in `.storybook/main.js`

</TabItem>
<TabItem value="check-story-inclusion-exclusion" label="Check Story Inclusion/Exclusion" >

Check Story Inclusion/Exclusion

- Verify `include` and `exclude` patterns in `.smartui.json`
   - Ensure story paths match your Storybook structure

</TabItem>
<TabItem value="validate-configuration" label="Validate Configuration" >

Validate Configuration

```bash
   cat .smartui.json | python -m json.tool
   ```
   Ensure JSON is valid and configuration is correct
**Symptoms**:
- Play functions not executing
- Components not in expected state
**Solutions**:

</TabItem>
<TabItem value="increase-wait-timeout" label="Increase Wait Timeout" >

Increase Wait Timeout

```json
   {
     "storybook": {
       "waitForTimeout": 3000  // Increase if play functions need more time
     }
   }
   ```

</TabItem>
<TabItem value="check-play-function-syntax" label="Check Play Function Syntax" >

Check Play Function Syntax

- Ensure play functions are properly exported
   - Verify async/await usage is correct
   - Check for errors in browser console
**Symptoms**:
- Themes not switching
- Globals not applied
**Solutions**:

</TabItem>
<TabItem value="verify-useglobals-setting" label="Verify useGlobals Setting" >

Verify useGlobals Setting

```json
   {
     "storybook": {
       "useGlobals": true  // Must be true to use globals
     }
   }
   ```

</TabItem>
<TabItem value="check-storybook-version" label="Check Storybook Version" >

Check Storybook Version

- Ensure Storybook v6.4+ for globals support
   - Verify decorators are properly configured

</TabItem>
<TabItem value="validate-theme-configuration" label="Validate Theme Configuration" >

Validate Theme Configuration

- Check `backgroundTheme` value is correct (`light`, `dark`, or `both`)
   - Ensure theme decorators are properly set up in stories
If you encounter issues not covered here:
- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [Storybook Documentation](https://storybook.js.org/docs) for Storybook-specific issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [CLI Complete Reference](/support/docs/smartui-cli-complete-reference)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [Storybook Documentation](https://storybook.js.org/docs)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link"> SmartUI with Cypress  </span>
    </li>
  </ul>
</nav>
