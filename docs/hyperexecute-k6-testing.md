---
id: hyperexecute-k6-testing
title: Execute k6 Tests on HyperExecute
hide_title: false
sidebar_label: k6
description: Prevent app launch disaster! Test app performance under load with HyperExecute and k6. Get real-time insights, identify weaknesses & ensure smooth launch. 
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - testmu ai
  - k6
url: https://www.testmuai.com/support/docs/hyperexecute-k6-testing/
site_name: TestMu AI
slug: hyperexecute-k6-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-k6-testing/
---

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
          "name": "Languages and Framework",
          "item": `${BRAND_URL}/support/docs/hyperexecute-k6-testing/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/"
    },
    "headline": "Execute k6 Tests on HyperExecute",
    "description": "Prevent app launch disaster! Test app performance under load with HyperExecute and k6. Get real-time insights, identify weaknesses & ensure smooth launch.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "hyperexecute performance testing",
      "hyperexecute",
      "testmu ai"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key; HyperExecute YAML file which contains all the necessary instructions.; HyperExecute CLI in order to initiate a test execution Job .; Setup the Environmental Variable.",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "You will have to add these flags mandatorily in your YAML file to execute the k6 tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "runtime:\n    addons:\n      - name: k6\n        version: \"v0.52.0\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure YAML in your Test Suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "env: \n  K6_BROWSER_ENABLED: true  #Indicates whether browser emulation is enabled for the k6 test.\n  K6_BROWSER_HEADLESS: false #Determines if the browser should run in headless mode\n  HE_CONTEXT_K6_SETUP_DEFAULT_BROWSER_PATH: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure YAML in your Test Suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Step 4: Execute your Test Suite\n\n> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** \u2192 **Security & Privacy** \u2192 **General tab**.\n\nRun the below command in your terminal at the root folder of the project:\n\n```bash\n./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Execute k6 Tests on HyperExecute",
      "description": "Prevent app launch disaster! Test app performance under load with HyperExecute and k6. Get real-time insights, identify weaknesses & ensure smooth launch.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Configure Your Test Suite",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample for the k6 from the TestMu AI GitHub repository to run the tests on the HyperExecute.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/#step-1-configure-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the CLI in your Test Suite",
          "text": "After cloning / downloading the sample repo, you need to setup the CLI and the environment variables. The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute. You can download the CLI for your desired platform from the below mentioned links: Now, you need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/#step-2-setup-the-cli-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure YAML in your Test Suite",
          "text": "You will have to add these flags mandatorily in your YAML file to execute the k6 tests: runtime flag to download and install the k6 of that respective version. env flag is used to install certain dependencies to run your test cases",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/#step-3-configure-yaml-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. Run the below command in your terminal at the root folder of the project: OR use this command if you have not exported your username and access key in the step 2. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE }",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/#step-4-execute-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Monitor the Test Execution",
          "text": "Visit the HyperExecute Dashboard and check your Job status.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-k6-testing/#step-5-monitor-the-test-execution"
        }
      ]
    }
  ]) }}
/>
[k6](https://grafana.com/docs/k6/latest/) is an open-source tool designed to make load testing easy and accessible for developers and QA engineers. It's specifically built for testing the performance of APIs, microservices, and websites.

[HyperExecute](/support/docs/getting-started-with-hyperexecute/) is an AI Native Test Orchestration Cloud Platform that empowers you to run **end-to-end** tests **quickly** and **efficiently**. It provides Just-in-Time (JIT) testing infrastructure with fast execution **speeds**, **smart orchestration**, and **detailed logs**.

This guide details how to execute your **k6** tests on **HyperExecute** using [YAML 0.1](/support/docs/hyperexecute-yaml-parameters/)

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

## Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the k6 from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/HYP-K6-browser-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

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

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VerifiedTag from '@site/src/component/verifiedTag';

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure YAML in your Test Suite

You will have to add these flags mandatorily in your YAML file to execute the k6 tests:

- [runtime flag](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) to download and install the k6 of that respective version.

<VerifiedTag value="Verified" />

```yaml
runtime:
    addons:
      - name: k6
        version: "v0.52.0"
```

- [env flag](/support/docs/deep-dive-into-hyperexecute-yaml/#env) is used to install certain dependencies to run your test cases

<VerifiedTag value="Verified" />

```yaml
env: 
  K6_BROWSER_ENABLED: true  #Indicates whether browser emulation is enabled for the k6 test.
  K6_BROWSER_HEADLESS: false #Determines if the browser should run in headless mode
  HE_CONTEXT_K6_SETUP_DEFAULT_BROWSER_PATH: true
```

<VerifiedTag value="Verified" />

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/HYP-K6-browser-sample/blob/main/hyperexecute.yaml
```

## Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

<VerifiedTag value="Verified" />

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/k6/output.png').default} alt="Image" className="doc_img"/>

---

## Run k6 Tests via HyperExecute UI

In addition to CLI-based execution, HyperExecute lets you upload a k6 script, set the load from the dashboard, and run it without writing a YAML file.

### Before You Begin

- Your script must export a `default` function. HyperExecute runs that function for every virtual user.
- The **Total Users**, **Duration** and **Ramp-up Time** you set in the dashboard replace the load profile in your script (`vus`, `duration`, `stages` and `scenarios` in `options`). Everything else in the script, such as thresholds, checks and tags, still applies.
- Scripts that use the `k6/browser` module are not supported in the UI flow yet. Run browser scripts with the [CLI flow](#step-1-configure-your-test-suite) above.

### Step 1: Setup your k6 Project

1. Go to the [HyperExecute Project's Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/projects) and click on the **New Project** button.
2. In **Type of Project**, select **k6**, enter a **Project Name** and click on the **Continue** button.
3. Browse and upload your k6 script (`.js` or `.ts`), along with any modules or data files it reads (for example `.json`, `.csv` or `.txt`).
4. Click on the **Save** button.

To add more files later, open the project and click on **+ Add files to Project**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-project.png').default} alt="k6 project with an uploaded script" width="1400" height="863" className="doc_img"/>

### Step 2: Configure Test Load Criteria

Select your script and click on the **Run** button. Configure the following parameters and click on the **Continue** button:

- **Total Users:** The number of virtual users (VUs) you want to run. The maximum depends on your plan.
- **Duration (min):** How long the test runs at full load. The maximum depends on your plan.
- **Ramp-up Time (min):** How long it takes to go from zero to the full number of users. Set it to `0` to start all users at once.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-test-load-criteria.png').default} alt="k6 Test Load Criteria step" width="1400" height="863" className="doc_img"/>

### Step 3: Configure Test Load Distribution

- **Region:** k6 tests run from **East US (Richmond, Virginia)**.
- **Job Labels:** Add meaningful labels or tags for better identification and traceability.
- **Max Users per Engine:** The maximum number of virtual users each load generator runs (up to 1500). This option appears when **Ramp-up Time** is greater than `0`. HyperExecute splits the total users across as many load generators as needed and starts them together.
- **Global Timeout:** The maximum duration for the HyperExecute job (default: 90 minutes). **Ramp-up Time** plus **Duration** must be shorter than this value.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-test-load-distribution.png').default} alt="k6 Test Load Distribution step" width="1400" height="863" className="doc_img"/>

Click **Run Test** to start the execution.

### Step 4: Analyze Your Test Results

Toggle to the **Jobs** section and open your job. You can follow the results while the test is running:

- **Summary:** Virtual users, average and 90th percentile response time, throughput, error rate, bandwidth and data sent, with the **Load** and **Response Time** graphs.
- **Timeline Report:** Request count and response time over the course of the test.
- **Request Stats:** Per-request statistics, grouped by request name.
- **Errors:** Failed requests grouped by request name and by response code.
- **Logs:** The k6 output of each load generator.
- **Artifacts:** The k6 HTML report and the end-of-test summary (`k6-summary.json`).

#### Summary Report

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-summary-report.png').default} alt="k6 job Summary report" width="1400" height="863" className="doc_img"/>

#### Timeline Report

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-timeline-report.png').default} alt="k6 job Timeline report" width="1400" height="863" className="doc_img"/>

#### Request Stats

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-request-stats.png').default} alt="k6 job Request Stats" width="1400" height="863" className="doc_img"/>

#### Logs

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/k6-logs.png').default} alt="k6 job logs" width="1400" height="863" className="doc_img"/>

:::tip Thresholds
If your script defines [thresholds](https://grafana.com/docs/k6/latest/using-k6/thresholds/) and one of them is crossed, the job is marked **Failed** and the job remark names the crossed threshold. The metrics and graphs collected up to that point remain available.
:::

## Frequently Asked Questions
***

### Why does my job run a different number of users than my script defines?

In the UI flow, the values you enter in **Total Users**, **Duration** and **Ramp-up Time** replace the load profile in your script, so every run uses the load you set in the dashboard.

### Why did my job fail a few seconds after it started?

This usually means k6 could not load the script, for example because of a syntax error or a missing module. The job remark shows k6's error, and the full message is in the **Logs** tab.

### Can I load test private or internal endpoints with k6?

Yes. A tunnel adds its own latency to every request, which skews response-time results, so it is not recommended for load testing. Instead, contact the <BrandName /> support team for HyperExecute's static outbound IPs and allow them in your firewall or security group.
