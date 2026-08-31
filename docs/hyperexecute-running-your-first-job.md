---
id: hyperexecute-running-your-first-job
title: Running Your First Job on HyperExecute
toc_max_heading_level: 2
hide_title: false
sidebar_label: "Run First Test"
description: Run your first job on HyperExecute
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - Run your first job on HyperExecute
url: https://www.testmuai.com/support/docs/hyperexecute-running-your-first-job/
site_name: TestMu AI
slug: hyperexecute-running-your-first-job/
canonical: https://www.testmuai.com/support/docs/hyperexecute-running-your-first-job/
---

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
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
          "name": "Running Your First Job on HyperExecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-running-your-first-job/`
        }]
      })
    }}
></script>
Run your first test execution job on HyperExecute using a sample project.

## Before you start

We recommend running your first test execution job using a sample project on HyperExecute. This can be done in three different ways, as mentioned below:

1. [**Using Quick Run**](/support/docs/hyperexecute-running-your-first-job/#1-using-quick-run): Execute tests directly from the HyperExecute Portal. ([Recommended](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) for new users) 
2. [**Using Local System**](/support/docs/hyperexecute-running-your-first-job/#2-using-local-system): Execute tests from your Local System. (Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/))
3. [**Using the HyperExecute Agent Skill**](/support/docs/hyperexecute-agent-skills/): Generate and run tests using an AI coding assistant with the HyperExecute Agent Skill.

## Set Up Authentication and Environment Variables

To provide you with a secure [cross-browser testing](https://www.testmuai.com) environment on-cloud, we recommend integrating <BrandName /> Authentication Credentials in your test scripts. This would allow our cloud servers to establish a secure connection between your local system and [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/). Setting up the HyperExecute environment variables for your respective operating system would also help authenticate your colleague's test cases when executed against an individual account.

### Where to find <BrandName /> Authentication Credentials?

<BrandName /> Authentication Credentials consists of two fields:

1. <BrandName /> Username
2. <BrandName /> Access Key

>You can find these authentication credentials by either visiting the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/) or your [<BrandName /> Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile). For step-by-step instructions with videos, see [How to Get my Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key).

### Configuring Environment Variables on your Operating System

Before the tests are run, please set the environment variables LT_USERNAME & LT_ACCESS_KEY from the terminal. The account details are available on your [<BrandName /> Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile) page.

#### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

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

## 1. Using Quick Run

As you are running tests directly from the HyperExecute GUI, you don't need to do anything.
The platform automatically gets the instructions from the HyperExecute YAML file and starts execution using the HyperExecute CLI.

**Step 1:** Go to the [Quickstart](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) page.

**Step 2:** Select your preferred test automation framework and hit **Get Started**.

**Step 3:** Configure your [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml) (optional), otherwise just click on **Trigger test** to run your first job. 

**Step 4:** Your test execution is initiated using the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in the background.

**Step 5:** Click on **View Test Result** to navigate to [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) where you can see the job getting executed and the test results.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/ydgq44tmjpdc?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

***

## 2. Using Local System

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/onboarding.png').default} alt="Image"  className="doc_img"/>

To run your Test Scripts on HyperExecute from you Local system, you'll need the following:
- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key)

We will be taking care of everything one by one, just follow the steps given below: 

**Step 1:** Go to the [Quickstart](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) page.

**Step 2:** Choose your test automation framework, Select **Run on Local System** and click on **Get Started**. 

**Step 3:** Download our sample project by clicking on **Download Sample**. (Skip this step if you already have a project you want to test)

**Step 4:** Download the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) as per the OS that you are on.

**Step 5:** Select the OS on which you want to run your tests and then download the [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file shown on screen. This contains all the configurations required for running tests on HyperExecute. 



   > **Note**: Your Yaml file should be in the root directory of your project. If you are renaming it, also change the file name in the execution script as well. You can learn more about the advanced configurations [here](/support/docs/deep-dive-into-hyperexecute-yaml/), however for the given sample projects you can simply download the file using the small icon on top right. 

**Step 6:** In order to run your tests, copy the command from screen and run in your terminal.

**Step 7:** When you run this command, the HyperExecute CLI will send your test scripts to the HyperExecute Platform for execution across multiple parallel Test Execution Nodes.

**Step 8:** Once your Job is running, you can click on **View Test Results** to navigate to HyperExecute Dashboard where you can see the job getting executed along with the test results.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/qn3z533xbk7l?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

:::note
The generic command required to initiate test execution is given below. You will need to insert the name of your YAML file in place of the `RELATIVE_PATH_OF_YOUR_YAML_FILE` before running this command. (Skip if you already used the command from Step 6. )

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

:::tip
In case of MAC, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General** tab.
:::

> If you are facing any issues in running your first job? Watch our [Webinar Video](/support/docs/hyperexecute-running-your-first-job/#hyperexecute-webinar-video)

***

## 3. Using the HyperExecute Agent Skill

You can generate production-ready HyperExecute tests and run them directly from your AI coding assistant (such as Claude or Cursor) using the HyperExecute Agent Skill, with no manual YAML or CLI setup required.

For installation and usage, refer to [Using the HyperExecute Agent Skill with TestMu AI](/support/docs/hyperexecute-agent-skills/).

## HyperExecute Webinar Video

<div className="ytframe"> 
<div className="youtube" data-embed="7aZv7knyViw">
    <div className="play-button"></div>
</div>
</div>

## Ignore Unnecessary Files in your Payload

When you trigger your job, [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) creates a zip of your test scripts before sending it for execution on the HyperExecute Platform.

If you want to ignore any un-necessary files during this process, you can use the `.hyperexecuteignore` file. The HyperExecuteIgnore file serves as a configuration file to specify files that should be excluded when HyperExecute prepares a zipped archive of your test scripts. This functionality is similar to the `.gitignore` file used in Git version control.

### Benefits
Excluding unnecessary files from the archive offers several advantages:

- **Improved Security and Privacy :** HyperExecuteIgnore allows you to exclude sensitive information like log files, hidden files, or any other private data from the test archive. This helps maintain security and protects confidential information during test execution.
- **Reduced Archive Size :** By omitting irrelevant files, the zipped archive containing your test scripts becomes smaller. This is beneficial for storage and transmission purposes.
- **Faster Testing Process :** A smaller archive size can potentially lead to a faster test execution process, as less 
data needs to be transferred and uploaded to the testing environment.

### How to write `.hyperexecuteignore`  file?

The HyperExecuteIgnore file follows a format similar to the .gitignore file used with Git. It allows the use of wildcards to exclude patterns of files based on specific naming conventions.

```bash
examplename
hyperexecute.exe
*.type
examplename/
```
The above file would make sure that following are excluded while the zip is created:

1. **examplename**: All files and folder with the name `examplename`.
2. **examplename.type**: All files with the name `examplename` and format `type`.
3. ***.type**: All files of the format `type`.
4. **examplename/**: All files and folders under the parent folder called `examplename`.

:::info
- By leveraging `.hyperexecuteignore` file, you can achieve similar functionality to `.gitignore` and streamline the test execution process by keeping the archive size minimal.

- If both files are present in the directory then the files listed in the `.gitignore` only are ignored. The items listed in `.gitignore` file take **precedence** over the items listed under `.hyperexecuteignore`.
:::

## How to Get my Username and Access key

Your LT Username and Access Key authenticate every HyperExecute job. Here is where to find them. 

**Step 1:** Go to the right side Profile dropdown and select **Account Settings**.

**Step 2:** Under Account Settings, go to **Password & Security**

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/username-accesskey/method1.mp4').default} type="video/mp4" />
</video>

**Step 3:** You will find your LT Username and Access Key here, this would be required in order to trigger a Job using the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/)

:::tip
You can directly copy your Username and Access Key using shortcut key button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/username-accesskey/method2.mp4').default} type="video/mp4" />
</video>
:::

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Running Your First Job on HyperExecute
      </span>
    </li>
  </ul>
</nav>
