---
id: hyperexecute-qtest-integration
title: Integrate qTest with HyperExecute
hide_title: false
sidebar_label: qTest
description:  Unleash the power of QTest & TestMu AI HyperExecute! Streamline test management & experience blazing-fast execution.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - qtest
  - Integrations
  - Products
  - Test case management
  - Automated testing
  - Cloud-based testing
url: https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/
site_name: TestMu AI
slug: hyperexecute-qtest-integration/
canonical: https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/
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
          "name": "Integration with Products",
          "item": `${BRAND_URL}/support/docs/hyperexecute-qtest-integration/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/"
    },
    "headline": "Integrate qTest with HyperExecute",
    "description": "Unleash the power of QTest & TestMu AI HyperExecute! Streamline test management & experience blazing-fast execution.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/",
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
    "proficiencyLevel": "Beginner",
    "dependencies": "You must have Python 3.6, Apache Maven, and Git installed on your local machine.; Download and extract the agentctl-[version]-mac-x64-full.tgz file to a desired installation directory.; Login to qTest Manager as an administrator and access the Resources page.; Expand the APIs and SDK sections.; Navigate to the agentctl directory and start the host by running the following command:; Visit `http://localhost:6789`, add your details and click on the Register button.; Host Name : You have to enter any name that will be assigned as the host name.; qTest URL : Enter the URL of your qTest Manager page. For e.g. https://aman.qtestnet.com; qTest Token : Enter the Token you have copied in the above step.; Full Name : Mention your name here..",
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./agentctl start"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Update the Configuration Files",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "{\n  \"git_url\": \"<YOUR_PROJECT_GItHUB_URL>\",\n  \"local_repository\": \"<RELATIVE_PATH_OF_THE_PROJECT>\",\n  \"qtest_api_token\": \"<TOKEN_ACQUIRED_IN_PREREQUISITES>\",\n  \"qtest_url\": \"<YOUR_QTEST_URL>\"\n}"
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
      "name": "Integrate qTest with HyperExecute",
      "description": "Unleash the power of QTest & TestMu AI HyperExecute! Streamline test management & experience blazing-fast execution.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup your Shell Agent",
          "text": "This repository is used to pull tests from GitHub, run an Apache Maven build of JUnit tests, parse the results, and automatically upload the test results to qTest Manager. Download or Clone the code for the Shell Script Automation Host Feature from the TestMu AI GitHub repository to run the tests on the HyperExecute. You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample for the JUnit framework from the TestMu AI GitHub repository to run the tests on the HyperExecute. The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute. You can download the CLI for your desired platform from the below mentioned links: NOTE : In case of macOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/#step-1-setup-your-shell-agent"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Update the Configuration Files",
          "text": "Go to the conf.json file and make the following changes: giturl :** The shell script uses the url to clone a repository and send pull requests every time it runs if -g input is used. localrepository :** The folder containing the test cases. The shell script will use this to know where to run the maven build. Make sure to place this folder in the same directory as the the python and shell scripts. qtestapitoken : The token used to authorize the connection to qTest Manager. qtesturl :** The personal url that is used to access QASymphony API. If you are macOS user, go to the run.sh file or if you are a windows user go to the run.bat file and instead of mvn command, you need to pass the below mentioned command: {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE } Refer the documentation to understand how to get your Username and Access key.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/#step-2-update-the-configuration-files"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Setup the Automation",
          "text": "Navigate to your Automation Host `http://localhost:6789/home` and click on the Add button to add a new agent. A popup will appear to create an agent, fillup the following details: Agent Name : You can give any name to your agent. qTest Manager Project : Choose your project inside which you want to create this build. Agent Type : Choose Shell Agent as your agent type. Directory : Path of the directory containing your scripts and shell agent. Allocated Execution Time : Amount of time you expect the script to take to execute in minutes Kick-off scripts : The file path to your shell script. This shell scripts takes in two inputs, one for using git and the second for updating your current test cycle.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/#step-3-setup-the-automation"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute the Shell Script",
          "text": "Click on the Actions button > Kick-off shell scripts now button to start the shell script. This will upload all of the tests cases to qTest.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/#step-4-execute-the-shell-script"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Monitor Your Tests",
          "text": "Login into qTest Manager, go to the Test Execution tab, and there should be a test cycle under your project called Junit Automated Tests Click on the test cycle and it should show all of the tests that were run through the maven build and their statuses. Visit the HyperExecute Dashboard and check your Job status.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-qtest-integration/#step-5-monitor-your-tests"
        }
      ]
    }
  ]) }}
/>

qTest is a comprehensive test management tool designed for Project Management, Bug Tracking, and Test Management. It embraces a centralized test management approach, facilitating seamless communication and accelerating task development across QA teams and stakeholders.

This document details the seamless integration between HyperExecute and qTest, enabling you to run your automated tests on a variety of devices and real devices provided by <BrandName />.

## Prerequisites

- You must have [Python 3.6](https://www.python.org/downloads/), [Apache Maven](https://maven.apache.org), and [Git](https://git-scm.com/downloads) installed on your local machine.
- [Download](https://support-hub.tricentis.com/open?sys_kb_id=194a54eedb4f5c181ea7bb13f3961950&id=kb_article_view&number=KB0015571) and extract the **agentctl-[version]-mac-x64-full.tgz** file to a desired installation directory.
- Login to qTest Manager as an administrator and access the Resources page.
- Expand the **APIs and SDK** sections.
   
<img loading="lazy" src={require('../assets/images/qtest-integration/qtest1.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

- Navigate to the **agentctl** directory and start the host by running the following command:

```bash
./agentctl start
```

- Visit ``http://localhost:6789``, add your details and click on the **Register** button.

    - **Host Name :** You have to enter any name that will be assigned as the host name.
    - **qTest URL :** Enter the URL of your qTest Manager page. For e.g. `https://aman.qtestnet.com`
    - **qTest Token :** Enter the Token you have copied in the above step.
    - **Full Name :** Mention your name here.

<img loading="lazy" src={require('../assets/images/qtest-integration/qtest_img_2.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

## Step 1: Setup your Shell Agent

- This repository is used to pull tests from GitHub, run an Apache Maven build of JUnit tests, parse the results, and automatically upload the test results to qTest Manager.

:::tip Automate JUnit
Download or Clone the code for the Shell Script Automation Host Feature from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-xcui-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

- You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the JUnit framework from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/junit-selenium-hyperexecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

## Step 2: Update the Configuration Files

- Go to the `conf.json` file and make the following changes:

    - **git_url :** The shell script uses the url to clone a repository and send pull requests every time it runs if -g input is used.
    - **local_repository :** The folder containing the test cases. The shell script will use this to know where to run the maven build. Make sure to place this folder in the same directory as the the python and shell scripts.
    - **qtest_api_token :** The token used to authorize the connection to qTest Manager.
    - **qtest_url :** The personal url that is used to access QASymphony API.

```bash
{
  "git_url": "<YOUR_PROJECT_GItHUB_URL>",
  "local_repository": "<RELATIVE_PATH_OF_THE_PROJECT>",
  "qtest_api_token": "<TOKEN_ACQUIRED_IN_PREREQUISITES>",
  "qtest_url": "<YOUR_QTEST_URL>"
}
```

- If you are macOS user, go to the `run.sh` file or if you are a windows user go to the `run.bat` file and instead of `mvn` command, you need to pass the below mentioned command:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

> Refer the documentation to understand how to get your [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).

## Step 3: Setup the Automation

- Navigate to your Automation Host ``http://localhost:6789/home`` and click on the **Add** button to add a new agent.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/qtest/1.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

- A popup will appear to create an agent, fillup the following details:

    - **Agent Name :** You can give any name to your agent.
    - **qTest Manager Project :** Choose your project inside which you want to create this build.
    - **Agent Type :** Choose Shell Agent as your agent type.
    - **Directory :** Path of the directory containing your scripts and shell agent.
    - **Allocated Execution Time :** Amount of time you expect the script to take to execute in minutes
    - **Kick-off scripts :** The file path to your shell script. This shell scripts takes in two inputs, one for using git and the second for updating your current test cycle.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/qtest/2.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

## Step 4: Execute the Shell Script

- Click on the **Actions** button > **Kick-off shell scripts now** button to start the shell script. This will upload all of the tests cases to qTest.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/qtest/3.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

## Step 5: Monitor Your Tests

- Login into qTest Manager, go to the Test Execution tab, and there should be a test cycle under your project called **Junit Automated Tests**
- Click on the test cycle and it should show all of the tests that were run through the maven build and their statuses.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/qtest/4.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

- Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/qtest/5.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>
