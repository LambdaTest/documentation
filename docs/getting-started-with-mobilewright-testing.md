---
id: getting-started-with-mobilewright-testing
title: Run Your First Mobilewright Test on TestMu AI
sidebar_label: Run Your First Test
description: Install the TestMu AI driver for Mobilewright, point your mobilewright.config.ts at it, and run your first Mobilewright test on a real Android or iOS device.
keywords:
  - mobilewright
  - mobilewright getting started
  - mobilewright first test
  - testmuai mobilewright driver
  - mobilewright real device testing
  - mobilewright config
url: https://www.testmuai.com/support/docs/getting-started-with-mobilewright-testing/
site_name: TestMu AI
slug: getting-started-with-mobilewright-testing/
canonical: https://www.testmuai.com/support/docs/getting-started-with-mobilewright-testing/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import RealDeviceTag from '../src/component/realDevice';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Run Your First Mobilewright Test",
          "item": `${BRAND_URL}/support/docs/getting-started-with-mobilewright-testing/`
        }]
      })
    }}
></script>

# Run Your First Mobilewright Test

<RealDeviceTag value="Real Device" />

This guide shows you how to run your first Mobilewright test on a real Android or iOS device on <BrandName />. You clone a sample project, upload the sample app, set your credentials, and run the test with the usual `npx mobilewright test` command.

:::info Currently in BETA
Mobilewright testing on <BrandName /> is currently in **Beta**. To share feedback or report an issue, contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.
:::

## Prerequisites

- Your <BrandName /> [Username and Access Key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). You can find them under **Profile > Account Settings > Password & Security**.
- **Node.js 22.12** or later, and npm.
- Git, to clone the sample project.

## Step 1: Get a sample project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
All the code samples in this documentation can be found on **<BrandName />'s GitHub Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/rishirajs123/testmuai-mobilewright-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

Clone the repository and install its dependencies:

```bash
git clone https://github.com/rishirajs123/testmuai-mobilewright-sample && cd testmuai-mobilewright-sample
npm install
```

The sample project already includes Mobilewright, its test fixtures, and the <BrandName /> driver, [`@testmuai/mobilewright`](https://www.npmjs.com/package/@testmuai/mobilewright).

## Step 2: Set your credentials

Set your <BrandName /> Username and Access Key as environment variables. The driver reads them automatically.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / macOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows">

<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

</TabItem>

</Tabs>

## Step 3: Upload your app

The sample references the app under test by an `lt://` app ID. Upload the app once to get that ID. The commands below upload the Proverbial sample app; replace the URL with the path or URL of your own build to test your app.

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=proverbial_android"`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS">

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa" -F "name=proverbial_ios"`}
</CodeBlock>
</div>

</TabItem>

</Tabs>

The response is a JSON object that contains an `app_url` of the form `lt://APP123456789123456789`. Set it as an environment variable for the platform you uploaded:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / macOS" default>

```bash
export LT_APP_ANDROID="lt://APP_ANDROID_ID"
export LT_APP_IOS="lt://APP_IOS_ID"
```

</TabItem>

<TabItem value="powershell" label="Windows">

```bash
set LT_APP_ANDROID="lt://APP_ANDROID_ID"
set LT_APP_IOS="lt://APP_IOS_ID"
```

</TabItem>

</Tabs>

:::tip
To use a single app for whichever platform you run, set `TESTMU_APP` instead. It takes precedence over `LT_APP_ANDROID` and `LT_APP_IOS` in the sample config.
:::

## Step 4: Review the configuration

You do not need to change the sample config. When your credentials are set, `mobilewright.config.ts` attaches the <BrandName /> driver and passes it the app ID for the selected platform. Without credentials, the same config runs the test on a local device instead, so your tests never change between local and cloud runs. The relevant part of the config is:

```ts title="mobilewright.config.ts"
const platform = (process.env.PLATFORM || 'android') as 'android' | 'ios';

const app = process.env.TESTMU_APP
  || (platform === 'ios' ? process.env.LT_APP_IOS : process.env.LT_APP_ANDROID);

const config: any = {
  testDir: './tests',
  timeout: 180_000,
  expect: { timeout: 20_000 },
  reporter: [['list']],
  projects: [{ name: platform, use: { platform } }],
};

if (process.env.TESTMU_USERNAME || process.env.LT_USERNAME) {
  if (platform === 'ios') {
    config.projects[0].use.autoAppLaunch = false;
  }
  //highlight-start
  config.driver = testMuDriver({
    app,
    build: 'testmuai-mobilewright-sample',
    project: 'mobilewright-sample',
    video: true,
    networkLog: true,
    deviceLog: true,
    autoGrantPermissions: true,
    autoAcceptAlerts: true,
  });
  //highlight-end
}

export default defineConfig(config);
```

- `app` is the `lt://` app ID from Step 3.
- `build` and `project` group the session on the dashboard.
- `video`, `networkLog`, and `deviceLog` capture debugging artifacts for the session.
- `autoGrantPermissions` (Android) and `autoAcceptAlerts` (iOS) stop permission prompts from blocking the test.
- On iOS, the sample sets `autoAppLaunch` to `false` so that the app launch done when the session starts is kept, and a permission alert cannot interrupt an extra relaunch.

For every option you can pass, see [Driver options](/support/docs/mobilewright-references/#driver-options).

The test itself is plain Mobilewright. It taps through the Proverbial app and asserts that the label changes:

```ts title="tests/proverbial.test.ts"
import { test, expect } from '@mobilewright/test';
import { proverbial, type Platform } from '../src/proverbial';

test('Proverbial smoke — color, text, toast, notification', async ({ screen, platform }) => {
  const app = proverbial(screen, platform as Platform);

  await app.colorButton().tap();

  await app.textButton().tap();
  await expect(app.proverbialText()).toBeVisible();

  await app.toastButton().tap();
  await app.notificationButton().tap();
});
```

## Step 5: Run the test

Select the platform with the `PLATFORM` environment variable and run the test:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / macOS" default>

```bash
PLATFORM=android npx mobilewright test
PLATFORM=ios npx mobilewright test
```

</TabItem>

<TabItem value="powershell" label="Windows">

```bash
set PLATFORM=android
npx mobilewright test
```

</TabItem>

</Tabs>

The driver waits for a device to be allocated, runs the test on it, and releases the device when the run finishes. You can also use the standard Mobilewright CLI flags, such as `--reporter html`, `--workers 4`, or `--retries 2`.

## Step 6: View your test results

Open the [App Automation dashboard](https://appautomation.lambdatest.com/build) and select the **testmuai-mobilewright-sample** build. The session is named after the test it ran, is marked **Passed** or **Failed**, and shows **Mobilewright** as its framework. Open the session to watch the video recording and read the device logs, network logs, and command logs.

{/* IMAGE PLACEHOLDER: App Automation dashboard showing a Mobilewright build with a session open
<img loading="lazy" src={require('../assets/images/mobilewright/mobilewright-dashboard.png').default} alt="Mobilewright session on the TestMu AI App Automation dashboard" width="1444" height="703" className="doc_img"/>
*/}

For more about the dashboard, see [App Automation Dashboard](/support/docs/app-automation-dashboard/).

## Run your own project

To run an existing Mobilewright project, on version **0.0.56** or later (below **0.1.0**), install the <BrandName /> driver from [npm](https://www.npmjs.com/package/@testmuai/mobilewright):

```bash
npm i -D @testmuai/mobilewright
```

Then set the `driver` field in `mobilewright.config.ts` and describe the device in the `use` block:

```ts title="mobilewright.config.ts"
import { defineConfig } from 'mobilewright';
//highlight-next-line
import { testMuDriver } from '@testmuai/mobilewright';

export default defineConfig({
  testDir: './tests',
  //highlight-start
  driver: testMuDriver({
    app: 'lt://APP123456789123456789', // or a local .apk/.ipa path, or a public https URL
    build: 'My first Mobilewright build',
  }),
  //highlight-end
  use: {
    platform: 'android', // or 'ios'
    bundleId: 'com.example.app', // package name or bundle ID
    deviceType: 'real',
    deviceName: /Galaxy S2[34]/,
  },
});
```

For app options and device matching, see [Set up your test environment](/support/docs/mobilewright-set-up-test-environment/).

## Run tests in parallel

You can run a Mobilewright suite on several real devices at the same time to cut the total run time. Mobilewright controls parallelism through **workers**, and you can target several devices or both platforms in one run through **projects**.

### How parallel runs work on <BrandName />

- Each Mobilewright **worker** gets its own real device and its own session on <BrandName />.
- A worker keeps its device for the whole run and runs its tests one after another on it. The driver keeps the session alive between tests, so you do not pay the device allocation time again for every test.
- The number of devices running at once is capped by your plan's **parallel session limit**. If you start more workers than your plan allows, the driver prints a warning and the extra workers wait in the queue until a device is released.

:::tip
Set the number of workers to your plan's parallel session limit or lower. Workers above the limit add queue time without making the run faster.
:::

### Set the number of workers

Set `workers` in your config, or pass `--workers` on the command line. The command-line flag overrides the config value.

```bash
npx mobilewright test --workers 4
```

By default, Mobilewright runs the tests inside one file in order on one worker and spreads the files across workers. Set `fullyParallel: true` to spread individual tests across workers as well.

### Run on Android and iOS in one run

Use `projects` to run the same tests on several device profiles. Each project has its own `use` block, so you can set a different platform, device, OS version, and app ID per project.

Use the driver's `apps` option to give each platform its own build. The driver picks the app that matches the project's platform.

```ts title="mobilewright.config.ts"
import { defineConfig } from 'mobilewright';
import { testMuDriver } from '@testmuai/mobilewright';

export default defineConfig({
  testDir: './tests',
  workers: 4,
  //highlight-start
  driver: testMuDriver({
    apps: {
      android: './build/app.apk',
      ios: './build/app.ipa',
    },
    build: 'Cross-platform Run',
  }),
  projects: [
    {
      name: 'android',
      use: {
        platform: 'android',
        bundleId: 'com.example.app',
        deviceType: 'real',
        deviceName: /Galaxy S2[34]/,
      },
    },
    {
      name: 'ios',
      use: {
        platform: 'ios',
        bundleId: 'com.example.app',
        deviceType: 'real',
        deviceName: /iPhone 1[56]/,
        osVersion: '>=17 <19',
      },
    },
  ],
  //highlight-end
});
```

Run every project:

```bash
npx mobilewright test
```

Or run one project only:

```bash
npx mobilewright test --project ios
```

## Test status and reports

The driver reports results to the App Automation dashboard without any extra code.

### Session status and names

You do not need to add a reporter or call a status hook. When the run ends, the driver updates every session on the dashboard:

- **Status:** A session is marked **Passed** when every test that ran on it passed, and **Failed** when at least one did not. Only the tests that actually ran on that session count.
- **Retries:** A test is judged by its final attempt. A test that fails and then passes on retry does not fail its session.
- **Name:** A session that ran one test is named after that test. A session that ran several tests is named after the first three, followed by a count of the rest, for example `sign in · sign out · add to cart (+2 more)`. Names are capped at 255 characters.

To give every session the same fixed name instead, set the driver's `name` option. To stop the driver from pushing status, set `testResults: false`.

### Build names

Use the driver options `build`, `project`, and `tags` to organize runs on the dashboard. The build name is chosen in this order:

1. The `build` option.
2. The `TESTMU_BUILD` or `LT_BUILD` environment variable.
3. A name detected from your CI system, as described below.

#### Build names from CI

When you run inside a supported CI system and do not set a build name, the driver names the build after the pipeline and run number, so every pipeline run gets its own build.

| CI system | Build name |
|-----------|------------|
| GitHub Actions | `<owner>/<repo> #<run number>` |
| GitLab CI | `<project path> #<pipeline number>` |
| CircleCI | `<repo> #<build number>` |
| Buildkite | `<pipeline> #<build number>` |
| Bitrise | `<app title> #<build number>` |
| Azure Pipelines | `<repository> #<build number>` |
| Jenkins | `<job name> #<build number>` |
| TeamCity | `<build configuration name>` |

## Run in CI/CD

To run your suite from a pipeline, store your <BrandName /> credentials as secrets, expose them as environment variables, and run `npx mobilewright test`.

<Tabs className="docs__val">

<TabItem value="github" label="GitHub Actions" default>

```yaml title=".github/workflows/mobilewright.yml"
name: Mobilewright tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npx mobilewright test
        env:
          LT_USERNAME: ${{ secrets.LT_USERNAME }}
          LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
```

</TabItem>

<TabItem value="jenkins" label="Jenkins">

```groovy title="Jenkinsfile"
pipeline {
  agent any
  environment {
    LT_USERNAME   = credentials('lt-username')
    LT_ACCESS_KEY = credentials('lt-access-key')
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm ci'
        sh 'npx mobilewright test'
      }
    }
  }
}
```

</TabItem>

<TabItem value="gitlab" label="GitLab CI">

```yaml title=".gitlab-ci.yml"
mobilewright:
  image: node:22
  script:
    - npm ci
    - npx mobilewright test
  # Set LT_USERNAME and LT_ACCESS_KEY as masked CI/CD variables
```

</TabItem>

</Tabs>

:::tip
Upload your app once at the start of the pipeline and pass the `lt://` app ID through the `TESTMU_APP` or `LT_APP` environment variable. Later jobs can then reuse the same upload. See [Upload your app](/support/docs/mobilewright-set-up-test-environment/#upload-your-app).
:::

## Next steps

- [Set up your test environment](/support/docs/mobilewright-set-up-test-environment/) to manage apps, device selection, and test features.
- Review every option in the [References](/support/docs/mobilewright-references/).
- See [known differences](/support/docs/mobilewright-references/#known-differences-from-local-runs) between cloud and local runs before you move a suite over.
