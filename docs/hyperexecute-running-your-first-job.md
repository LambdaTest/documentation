---
id: hyperexecute-running-your-first-job
title: Running Your First Job on HyperExecute
hide_title: false
sidebar_label: Running Your First Job 
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
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-running-your-first-job/"
    },
    "headline": "Running Your First Job on HyperExecute",
    "description": "Run your first job on HyperExecute",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-running-your-first-job/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-11-20T14:00:00+05:30"
  }) }}
/>
This page outlines how you can run your first End-to-End (E2E) testing execution job on HyperExecute.

:::info On-premise deployments
On-prem, use [2. Using Local System](#2-using-local-system). Use the access key from your organization's own dashboard, and add `--onprem-host` to the CLI command. See [Trigger a job from the CLI](/support/docs/hyperexecute-on-premise-user-guide/#step-5-trigger-a-job-from-the-cli).
:::

## Before you start

We recommend running your first test execution job using a sample project on HyperExecute. This can be done in three different ways, as mentioned below:

1. [**Using Quick Run**](/support/docs/hyperexecute-running-your-first-job/#1-using-quick-run): Execute tests directly from the HyperExecute Portal. ([Recommended](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) for new users) 
2. [**Using Local System**](/support/docs/hyperexecute-running-your-first-job/#2-using-local-system): Execute tests from your Local System. (Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/))
3. [**Using the HyperExecute Agent Skill**](/support/docs/hyperexecute-running-your-first-job/#3-using-the-hyperexecute-agent-skill): Generate and run tests using an AI coding assistant with the HyperExecute Agent Skill.

On the [Quickstart](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) page these options are labelled **Quick Run**, **Run on Local System** and **Run via Agent Skills**. The Quickstart page needs a signed-in account; to start from public resources only (for example from CI or an AI coding agent), see [Run without the Quickstart page](#run-without-the-quickstart-page).

## 1. Using Quick Run

As you are running tests directly from the HyperExecute GUI, you don't need to do anything.
The platform automatically gets the instructions from the HyperExecute YAML file and starts execution using the HyperExecute CLI.

**Step 1:** Go to the [Quickstart](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) page.

**Step 2:** Select your preferred test automation framework and hit **Get Started**.

**Step 3:** Configure your [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml) (optional), otherwise just click on **Trigger test** to run your first job. 

**Step 4:** Your test execution is initiated using the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in the background.

**Step 5:** Click on **View Test Result** to navigate to [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) where you can see the job getting executed and the test results.

> After your first job, you can open the Quickstart page again from the HyperExecute dashboard: select **Help** > **Quick Start**.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js" />
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
- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/), found under **Profile** > **Account Settings** > **Password & Security** ([accounts.lambdatest.com/security/username-accesskey](https://accounts.lambdatest.com/security/username-accesskey))

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
  <script async src="https://js.storylane.io/js/v2/storylane.js" />
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/qn3z533xbk7l?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

:::note
The generic command required to initiate test execution is given below. You will need to insert the name of your YAML file in place of the `RELATIVE_PATH_OF_YOUR_YAML_FILE` before running this command. (Skip if you already used the command from Step 6. )

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

:::tip
In case of MAC, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General** tab.
:::

> If you are facing any issues in running your first job? Watch our [Webinar Video](/support/docs/hyperexecute-running-your-first-job/#hyperexecute-webinar-video)

### Run without the Quickstart page

The Quickstart page needs a signed-in account. From CI, a terminal without a browser or an AI coding agent, you can run the same first job from public resources:

**Step 1:** Copy your username and access key from **Profile** > **Account Settings** > **Password & Security** ([accounts.lambdatest.com/security/username-accesskey](https://accounts.lambdatest.com/security/username-accesskey)). Keep them in environment variables or CI secrets, never in your YAML or code.

**Step 2:** Clone a sample project, for example the [TestNG Selenium sample](https://github.com/LambdaTest/testng-selenium-hyperexecute-sample). Its HyperExecute YAML files are in the `yaml/` folder.

**Step 3:** Download the HyperExecute CLI for your OS from the [download table](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#download-the-hyperexecute-cli) into the project root.

**Step 4:** On Linux or macOS, export your credentials and start the job:

```bash
export LT_USERNAME="your-username"
export LT_ACCESS_KEY="your-access-key"
chmod u+x ./hyperexecute
./hyperexecute --user "$LT_USERNAME" --key "$LT_ACCESS_KEY" --config yaml/linux/v2/testng_hyperexecute_autosplit_sample.yaml
```

**Step 5:** Once you see the `Job Link` in the CLI logs, open it, or the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute/jobs), to follow the job and its results.

***

## 3. Using Gitpod

You can generate production-ready HyperExecute tests and run them directly from your AI coding assistant (such as Claude or Cursor) using the HyperExecute Agent Skill. The skill writes the HyperExecute YAML for your project and runs the HyperExecute CLI for you. On the Quickstart page, this is the **Run via Agent Skills** option.

**Step 1:** Install the skill in your project:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/hyperexecute-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/hyperexecute-skill .cursor/skills/
```

**Step 2:** Export your username and access key as `LT_USERNAME` and `LT_ACCESS_KEY` (see [Run without the Quickstart page](#run-without-the-quickstart-page)).

**Step 3:** Ask your assistant to run your tests on HyperExecute.

For the skill's contents and other install options, refer to [Using the HyperExecute Agent Skill with TestMu AI](/support/docs/getting-started-with-hyperexecute/#using-the-hyperexecute-agent-skill-with-testmu-ai).

## HyperExecute Webinar Video

<div className="ytframe"> 
<div className="youtube" data-embed="7aZv7knyViw">
    <div className="play-button"></div>
</div>
</div>

