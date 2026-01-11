---
id: hyperexecute-smart-ui-testing-using-selenium
title: SmartUI Tests in HyperExecute using Selenium
hide_title: false
sidebar_label: Selenium
description: Accelerate bug identification with HyperExecute's intelligent UI testing via Selenium. Conduct Visual UI Regression Testing for flawless application deployment.
keywords:
  - smart ui testing in testmu ai
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - free cross browser testing tool
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - internet explorer 9 browser test
  - test on samsung a7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.testmu.ai/support/docs/hyperexecute-smart-ui-testing-using-selenium
site_name: LambdaTest
slug: hyperexecute-smart-ui-testing-using-selenium

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
          "name": "SmartUI Testing",
          "item": `${BRAND_URL}/support/docs/hyperexecute-smart-ui-testing-using-selenium/`
        }]
      })
    }}
></script>
This documentation will guide you step-by-step to execute the SmartUI tests on the HyperExecute platform using Selenium

## Prerequisites

- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environment Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- To run SmartUI tests, you need to have a **Baseline Image** and a **Comparison** image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.

## Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the TestNG from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/cucumber-testNG-smartui-hyperexecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **HUB endpoint** in your tests file.

By setting up the HUB endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

```bash
const GRID_HOST = "@hub.lambdatest.com/wd/hub";
```

Configure the desired capabilities based on your test requirements. For example:

```bash
DesiredCapabilities capability = new DesiredCapabilities();
capability.setCapability(CapabilityType.BROWSER_NAME, browser);
capability.setCapability(CapabilityType.VERSION, version);
capability.setCapability(CapabilityType.PLATFORM, os);
capability.setCapability("screen_resolution", res);
capability.setCapability("build", "Cucu-Sel-TestNG-" + jobid);
capability.setCapability("name", scenario);
capability.setCapability("network", true);
capability.setCapability("video", true);
capability.setCapability("console", true);
capability.setCapability("visual", true);
capability.setCapability("smartUI.project", "HyperExecute-smartUI-project");
```
> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

## Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://accounts.lambdatest.com/detail/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.


<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-auto-split-strategy/). You can also opt for [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: "0.1"
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

autosplit: true

retryOnFailure: true
maxRetries: 2

concurrency: 1

debug: false

dataJsonPath: ['src/datame.json', 'src/data1.json','me/data.json', 'data.json']

mergeArtifacts: true
stripParentDirectory: true
taskIdentifierInNonConflictingArtefacts: true

pre:
  - pwd
  - echo ${PAT}
  - echo ${qa}
  - echo %PAT%
  - echo %qa%
  - sed -i -e 's/MyKey/%PAT%/g' key.txt
  - cat key.txt
  - mvn compile
  - cat longlogs.txt

post:
  - cat hyperexecute.yaml
  - cat longlogs.txt

testRunnerCommand: mvn test `-Dcucumber.options="$test" `-Dscenario="$test" `-Dmaven.repo.local=m2_cache_dir

testDiscovery:
  type: raw
  mode: static
  command: snooper --featureFilePaths=src/main/**/ --frameWork=java --query="@Addition AND @me"| sed -n 1,'5p'

jobLabel: [ 'HYP', 'Selenium', 'smartUI'] 
```

## Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/selenium/smart-ui-3.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

Here you can see the difference.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/selenium/smart-ui-4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Handling Dynamic Data with DOM Configuration

| Key | Description |
|-----|------------ |
| `screenshotName` (string) | Specify a name for the screenshot in your tests to match the same screenshot with the name from your baseline. |
| `fullPage` (boolean) | Specify `true` if you want to take a Full Page Screenshot and `false` for viewport screenshots; `fullPage: true` is currently only supported for `Chrome`. |
| `ignoreDOM` (object) | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or Xpath` used by your webpage that should be excluded from the comparison. |
| `selectDOM` (object) | Specify one or a combination of selectors based on the `HTML DOM ID, CSS class, CSS selector or XPath` used by your webpage that should be included in the comparison. |

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

> **NOTE :** Please contact [Customer Support](mailto:support@testmu.ai) team to enable the **ignoreDOM** feature.