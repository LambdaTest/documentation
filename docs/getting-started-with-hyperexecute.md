---
id: getting-started-with-hyperexecute
title: Getting Started with HyperExecute
toc_max_heading_level: 2
hide_title: false
sidebar_label: "Overview"
description: Get started with HyperExecute on TestMu AI for faster web automation tests using Matrix and Auto-Split strategies. Test with Selenium languages at high speeds.
keywords:
  - testmu ai automation
  - testmu ai hyperexecute
  - hyperexecute automation grid
  - hyperexecute online
  - online hyperexecute
  - hyperexecute automation grid online
  - testmu ai hypterest tutorial
  - hyperexecute getting started
  - testmu ai hyperexecute getting started
  - hyperexecute automation testing
  - hyperexecute matrix execution
  - hyperexecute autosplit execution
  - hyperexecute auto-split execution
image: /assets/images/og-images/hyperexecute-og.png
url: https://www.testmuai.com/support/docs/getting-started-with-hyperexecute/
site_name: TestMu AI
slug: getting-started-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/getting-started-with-hyperexecute/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HyperExecuteSupportedLanguageDocs from '../src/component/SupportedLanguages/HyperExecuteSupportedLanguageDocs';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Getting Started With HyperExecute on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-hyperexecute`
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
      "@id": "https://www.testmuai.com/support/docs/getting-started-with-hyperexecute/"
    },
    "headline": "Getting Started with HyperExecute",
    "description": "Get started with HyperExecute on TestMu AI for faster web automation tests using Matrix and Auto-Split strategies. Test with Selenium languages at high speeds.",
    "url": "https://www.testmuai.com/support/docs/getting-started-with-hyperexecute/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "testmu ai automation",
      "testmu ai hyperexecute",
      "hyperexecute automation grid"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "The hyperexecute-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "hyperexecute-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a HyperExecute Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/hyperexecute-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/hyperexecute-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
Welcome to HyperExecute, **an AI-Native Test Orchestration Cloud Platform**, designed to accelerate your testing process, enabling test automation teams worldwide to achieve an accelerated time to market by providing **JIT (Just-in-time) testing infrastructure**.

This page covers the basics of HyperExecute and walks you through running your first test.

<!-- HyperExecute is an AI Native Test Orchestration Cloud Platform, enabling test automation teams worldwide to achieve an accelerated time to market by providing JIT (Just-in-time) testing infrastructure that offers enhanced test execution speeds, smart test orchestration, detailed execution logs and much more. -->

<!-- It requires a [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file which contains all the necessary instructions and a [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job. -->

<!-- > Let's understand the [HyperExecute Dashboard](/support/docs/hyperexecute-guided-walkthrough/) together. -->

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/hyperexecute.png').default} alt="Image"  className="doc_img"/>

## What is HyperExecute?

HyperExecute by <BrandName /> is a cutting-edge, AI-powered platform designed for DevOps teams and QA engineers to significantly accelerate software testing pipelines. HyperExecute **replaces traditional hub-and-node test grids** with advanced orchestration techniques, **eliminating network latency and optimizing resource usage**. With HyperExecute:

  - **Slash your time-to-market** with parallel execution that distributes tests optimally across available resources improving efficiency.
  - **Make data-driven testing decisions** using historical performance trends that reveal patterns and help optimize your testing strategy
  - **Never worry about infrastructure constraints** with dynamic scaling to handle peak testing demands, running 10 tests or 10,000.
  - **Enable multiple teams using different frameworks** to run tests simultaneously across various environments on same license.
  <!-- -	**Intelligent Test Distribution**: Smart test allocation ensures optimal execution efficiency. -->
  <!-- - **Real-Time Insights**: Access immediate feedback with comprehensive live logs and detailed execution analytics. -->
  <!-- - **On-Demand Scalability**: Dynamically scale testing infrastructure to handle any volume or complexity of tests. -->
  <!-- - **Seamless Integration**: Effortlessly integrate with major CI/CD pipelines and testing frameworks for streamlined workflows. -->

Whether testing web or mobile applications, HyperExecute empowers your team to deliver higher-quality software rapidly and reliably.

## Compatible with All Major Frameworks
HyperExecute seamlessly supports all major test automation frameworks as shown below. Regardless of your existing testing stack, it will integrate smoothly to enhance your workflows without disruption.

Out of the box, HyperExecute supports multiple languages and testing frameworks like Selenium, Cypress, Playwright, Puppeteer etc. Currently we provide sample code for the following languages and frameworks:

<HyperExecuteSupportedLanguageDocs />

<div className="lt-framework-list-footer">
    <p>In case your favorite framework or tool isn't listed here, just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Shout Out Here</span>.
    <br/>In case of any other problems, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span>.</p>
  </div>

## Let's Run your First Test
Ready to experience the power of HyperExecute? Getting started is easy. We’ve simplified the process so you can effortlessly launch your first test with three flexible approaches and experience the speed by yourself:

:::note RUN SAMPLE TEST
<Tabs>
  <TabItem value="quick" label="Quick Run" default>
    Execute tests directly from the HyperExecute Portal with sample setup - perfect for new users who want to see results immediately.    

    <a href="https://www.testmuai.com/support/docs/hyperexecute-running-your-first-job/#1-using-quick-run" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/hyp.png').default} alt="Image" className="doc_img"/>Learn More</a>

  </TabItem>
  <TabItem value="CLI" label="Run on Local System">
     Run tests from your own machine using the HyperExecute CLI with sample project and preset configuration file. 

     <a href="https://www.testmuai.com/support/docs/hyperexecute-running-your-first-job/#2-using-local-system" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/hyp.png').default} alt="Image" className="doc_img"/>Learn More</a>
  </TabItem>
  <TabItem value="agentskill" label="Run With Agent Skill">
    Generate and run production-ready HyperExecute tests directly from your AI coding assistant, with no manual YAML or CLI setup.

    <a href="https://www.testmuai.com/support/docs/hyperexecute-agent-skills/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/hyp.png').default} alt="Image" className="doc_img"/>Learn More</a>
  </TabItem>
</Tabs>
:::

<!-- Each method provides a streamlined experience with sample projects. Our step-by-step guide walks you through the entire process, from selecting your framework to viewing your test results on the HyperExecute Dashboard. -->

## Watch HyperExecute in Action

Get a comprehensive overview of HyperExecute's capabilities by watching our introductory webinar.
<div className="ytframe"> 
<div className="youtube" data-embed="7aZv7knyViw">
    <div className="play-button"></div>
</div>
</div>

## Key Features of HyperExecute

HyperExecute provides you with the tools that you need to run your tests at the fastest speeds possible. In addition to all of the core features that <BrandName /> cloud provides to your tests (for example: detailed logs, smart CI features, network insights, video recording, access to browsers & platforms on the cloud), HyperExecute takes a step forward to improve your experience. It supports all [programming languages and major test automation frameworks](/support/docs/getting-started-with-hyperexecute/).

>Check out [<BrandName /> HyperExecute on Microsoft Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyper_execute?exp=ubp8&tab=Overview)
    
<!-- ### Core Features -->
<div className="support_main">
  
  <a href = "/support/docs/hyperexecute-test-splitting-and-multiplexing/">
  <div className="support_inners">
    <h3>Test Splitting and Multiplexing</h3>
    <p>Use Smart Auto Split Strategy, Matrix Strategy or Hybrid Strategy modes to split and execute tests as per your requirements.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-job-reports/">
  <div className="support_inners">
    <h3>Detailed Test Reports and Logs</h3>
    <p>Get a detailed test report for every job and stream the terminal logs in real time to understand everything that happened with your test.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-failfast/">
  <div className="support_inners">
    <h3>FailFast</h3>
    <p>Run your jobs faster or fail them quickly to receive instant feedback and save your test time.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-prioritize-tests/">
  <div className="support_inners">
    <h3>Jobs Prioritization</h3>
    <p>Label the jobs that you want to run first on HyperExecute by giving them a higher priority.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-artifacts/#construct-urls-for-your-artifacts">
  <div className="support_inners">
    <h3>Test Artifact Management</h3>
    <p>HyperExecute also manages all of your test artifacts and provides you with the option to implement smart workflows on your test code without modifying it.</p>
  </div>
  </a>

  <a href="/support/docs/ai-powered-test-failure-analysis/">
  <div className="support_inners">
    <h3>AI Native Root Cause Analysis</h3>
    <p>Root Cause Analysis and Error Classification features in HyperExecute to view different kinds of errors and directly land on corrective measures or fixes.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-background-services/">
  <div className="support_inners">
    <h3>Background Services</h3>
    <p>Triggers long-running Application Servers tasks like running WebApps or Databases and generates the logs report in the Dashboard.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-auto-healing/">
  <div className="support_inners">
    <h3>Auto Healing</h3>
    <p>Auto Healing Feature allows you to automatically rеcovеr from cеrtain typеs of failurеs during thе еxеcution of your tеst scripts.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-projects/">
  <div className="support_inners">
    <h3>Projects</h3>
    <p>Setup your custom projects using HyperExecute GUI itself and initiate the tests execution from the platform only.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-jobs-archiving/">
  <div className="support_inners">
    <h3>Jobs Archiving</h3>
    <p>Jobs Archiving allows you to archive the non important jobs so that you and your team can focus only on required ones.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-test-muting/">
  <div className="support_inners">
    <h3>Test Muting</h3>
    <p>Mute scenarios that have been continuously failing for a pre-defined number of times, ignore expected failures, achieve better runtimes and faster feedback on the executed Jobs.</p>
  </div>
  </a>  

  <a href="/support/docs/hyperexecute-task-metrics/">
  <div className="support_inners">
    <h3>Task Metrics</h3>
    <p>Track your CPU, and Memory utilization of the virtual machines for a seamless user experience.</p>
  </div>
  </a>  

  <a href="/support/docs/hyperexecute-workflows/">
  <div className="support_inners">
    <h3>Workflows</h3>
    <p>Schedule and chain your HyperExecute jobs to automate recurring test runs and orchestrate multi-job pipelines.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-rerun-failed-jobs/">
  <div className="support_inners">
    <h3>Rerun Failed Tests</h3>
    <p>Re-execute only the failed tests from a previous job to quickly validate fixes without rerunning the entire suite.</p>
  </div>
  </a>  
</div>

### Availability

HyperExecute is available on Windows, Linux and Mac. You can use HyperExecute in more than 60 regions that are supported by Microsoft Azure.

### Security
HyperExecute prioritises the safety and security of your data above everything else. The entirety of your data is encrypted for the entire duration of your testing lifecycle. HyperExecute is compliant with the industry leading security standards offering you:

- **Data Encryption and Compliance :** HyperExecute prioritizes data safety through full encryption, adhering to industry standards like ([SOC2, GDPR, and CCPA](https://www.testmuai.com/security/)).
- **Dedicated Proxy Server Option :** Ensure secure connections by utilizing dedicated proxy servers for your testing activities.
- **Automatic Tunnel Management :** Maintain data security for private websites with automatic tunnel management through Network Address Translation (NAT) instances.

### Enterprise
For enterprises that want to keep everything behind their own firewalls, HyperExecute comes with [private cloud facilities](/support/docs/hyperexecute-private-cloud-setup/). You can set up your own cloud runners and storage which ensures that no data leaves your organisation’s firewalls. 

You can use HyperExecute’s [Quickstart feature](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) to run your first test, and go through our Concepts page to understand the ins and out of HyperExecute. 

[Frequently asked questions](/support/docs/hyperexecute-general-faqs/#hyperexecute-feature-faqs) about HyperExecute Features.

## List of Supported Languages and Addons w.r.t. Operating System

This document provides a comprehensive list of all the supported versions of programming languages across different operating systems on our platform.

<Tabs className="docs__val">

<TabItem value="linux" label="Linux" default>
| Supported Languages | Version |
|---------------------|---------|
|<b>Java</b>| `1.8.0` **(default)**, `8`, `9`, `11`, `13`, `15`, `16`, `17`, `18`, `19`, `21`|
|<b>Ruby</b>|`2.0.0`, `2.1.9`, `2.3.0`, `2.3.1`, `2.3.3`, `2.4.1`, `2.4.2`, `2.4.3`, `2.4.4`, `2.4.5`, `2.4.6`,` 2.4.7`, `2.4.9`, `2.4.10`, `2.5.0`, `2.5.1`, `2.5.3`, `2.5.5`, `2.5.6`, `2.5.7`, `2.5.8`, `2.5.9`, `2.6.0`, `2.6.1`, `2.6.2`, `2.6.3`, `2.6.4`, `2.6.5`, `2.6.6`, `2.6.7`, `2.6.8`, `2.6.9`, `2.6.10`, `2.7.0` **(default)** , `2.7.1`, `2.7.2`, `2.7.3`, `2.7.4`, `2.7.5`, `2.7.5`, `2.7.6`, `3.0.0`, `3.0.1`, `3.0.2`, `3.0.3`, `3.0.4`, `3.1.0`, `3.1.1`, `3.1.2` |
|<b>DotNet</b>| `5`, `6.0.425` **(default)** , `7`, `8`|
|<b>Python </b>| `3.8.10` **(default)** , `3.9`, `3.10`, `3.11`|
|<b>NodeJs </b>| `12`, `13`, `14`, `15`, `16`, `17`, `18.20.0` **(default)**, `19`, `20` |
</TabItem>

<TabItem value="windows" label="Windows" default>
    <Tabs className="docs__val">
        <TabItem value="win10" label="Windows 10" default>
            | Supported Languages | Version |
            |---------------------|---------|
            |<b>Java</b>| `1.8.0` **(default)**, `8`, `9`, `11`, `13`, `15`, `16`, `17`, `18`, `19`, `21`|
            |<b>Ruby</b>|`2.0.0`, `2.1.9`, `2.2.6`, `2.3.0`, `2.3.1`, `2.3.3`, `2.4.1`, `2.4.2`, `2.4.3`, `2.4.4`, `2.4.5`, `2.4.6`, `2.4.7`, `2.4.9`, `2.4.10`, `2.5.0`, `2.5.1`, `2.5.3`, `2.5.5`, `2.5.6`, `2.5.7`, `2.5.8`, `2.5.9`, `2.6.0`, `2.6.1`, `2.6.2`, `2.6.3`, `2.6.4`, 2.6.5, `2.6.6`, `2.6.7`, `2.6.8`, `2.6.9`, `2.6.10`, `2.7.0`, `2.7.1`, `2.7.2` **(default)** , `2.7.3`, `2.7.4`, `2.7.5`, `2.7.5`, `2.7.6`, `3.0.0`, `3.0.1`, `3.0.2`, `3.0.3`, `3.0.4`, `3.1.0`, `3.1.1`, `3.1.2`|
            |<b>DotNet</b>| `4.6`, `4.7`, `5`, `6`, `7`, `8` **(default)**,|
            |<b>Python</b> |`3.7.9` **(default)**, `3.8`, `3.9`, `3.10`, `3.11` |
            |<b>NodeJs </b>| `12`, `13`, `14`, `15`, `16`, `17`, `18`, `18.17.1` **(default)**, `19`, `20` |
            |<b>Katalon</b>| `9.0.0`, `9.1.0`, `9.2.0`, `9.3.1`|
        </TabItem>
        <TabItem value="win11" label="Windows 11" default>
            | Supported Languages | Version |
            |---------------------|---------|
            |<b>Java</b>|  `1.8.0` **(default)**, `8`, `9`, `11`, `13`, `15`, `16`, `17`, `18`, `19`, `21`|
            |<b>Ruby</b>| `2.0.0`, `2.1.9`, `2.2.6`, `2.3.0`, `2.3.1`, `2.3.3`, `2.4.1`, `2.4.2`, `2.4.3`, `2.4.4`, `2.4.5`, `2.4.6`, `2.4.7`, `2.4.9`, `2.4.10`, `2.5.0`, `2.5.1`, `2.5.3`, `2.5.5`, `2.5.6`, `2.5.7`, `2.5.8`, `2.5.9`, `2.6.0`, `2.6.1`, `2.6.2`, `2.6.3`, `2.6.4`, `2.6.5`, `2.6.6`, `2.6.7`, `2.6.8`, `2.6.9`, `2.6.10`, `2.7.0` **(default)**, `2.7.1`, `2.7.2`, `2.7.3`, `2.7.4`, `2.7.5`, `2.7.5`, `2.7.6`, `3.0.0`, `3.0.1`, `3.0.2`, `3.0.3`, `3.0.4`, `3.1.0`, `3.1.1`, `3.1.2`|
            |<b>DotNet</b>|`5` **(default)**, `6`, `7`, `8` |
            |<b>Python</b> |`3.8`, `3.9`, `3.10`, `3.11`, `3.11.1` **(default)** |
            |<b>NodeJs </b>| `12`, `13`, `14`, `15`, `16`, `17`, `18`, `18.17.1` **(default)**, `19`, `20` |
        </TabItem>
    </Tabs>
</TabItem>

<TabItem value="mac" label="macOS (Intel)" default>
    <Tabs className="docs__val">
        <TabItem value="mac12" label="macOS 12" default>
            | Supported Languages | Version |
            |---------------------|---------|
            |<b>Java</b>| `8` **(default)**, `9`, `11`, `13`, `15`, `16`, `17`, `18`, `19`, `21`|
            |<b>Ruby</b>| `2.0.0`, `2.1.9`, `2.2.6`, `2.3.0`, `2.3.1`, `2.3.3`, `2.4.1`, `2.4.2`, `2.4.3`, `2.4.4`, `2.4.5`, `2.4.6`, `2.4.7`, `2.4.9`, `2.4.10`, `2.5.0`, `2.5.1`, `2.5.3`, `2.5.5`, `2.5.6`, `2.5.7`, `2.5.8`, `2.5.9`, `2.6.0`, `2.6.1`, `2.6.2`, `2.6.3`, `2.6.4`, `2.6.5`, `2.6.6`, `2.6.7`, `2.6.8`, `2.6.9`, `2.6.10` **(default)**, `2.7.0`, `2.7.1`, `2.7.2`, `2.7.3`, `2.7.4`, `2.7.5`, `2.7.5`, `2.7.6`, `3.0.0`, `3.0.1`, `3.0.2`, `3.0.3`, `3.0.4`, `3.1.0`, `3.1.1`, `3.1.2`|
            |<b>DotNet</b>| `5`, `5.0.407` **(default)**, `6`, `7`, `8`|
            |<b>Python</b> |`3.8`, `3.9`, `3.10`, `3.10.11` **(default)**, `3.11` |
            |<b>NodeJs </b>| `12`, `13`, `14`, `15`, `16`, `17`, `18`, `18.17.1` **(default)**, `19`, `20` |
        </TabItem>
        <TabItem value="mac13" label="macOS 13" default>
            | Supported Languages | Version |
            |---------------------|---------|
            |<b>Java</b>| `8` **(default)**, `9`, `11`, `13`, `15`, `16`, `17`, `18`, `19`, `21`|
            |<b>Ruby</b>| `2.0.0`, `2.1.9`, `2.2.6`, `2.3.0`, `2.3.1`, `2.3.3`, `2.4.1`, `2.4.2`, `2.4.3`, `2.4.4`, `2.4.5`, `2.4.6`, `2.4.7`, `2.4.9`, `2.4.10`, `2.5.0`, `2.5.1`, `2.5.3`, `2.5.5`, `2.5.6`, `2.5.7`, `2.5.8`, `2.5.9`, `2.6.0`, `2.6.1`, `2.6.2`, `2.6.3`, `2.6.4`, `2.6.5`, `2.6.6`, `2.6.7`, `2.6.8`, `2.6.9`, `2.6.10` **(default)**, `2.7.0`, `2.7.1`, `2.7.2`, `2.7.3`, `2.7.4`, `2.7.5`, `2.7.5`, `2.7.6`, `3.0.0`, `3.0.1`, `3.0.2`, `3.0.3`, `3.0.4`, `3.1.0`, `3.1.1`, `3.1.2`|
            |<b>DotNet</b>| `5`, `5.0.407` **(default)**, `6`, `7`, `8`|
            |<b>Python</b> |`3.8`, `3.9`, `3.10`, `3.10.11` **(default)**, `3.11` |
            |<b>NodeJs </b>| `12`, `13`, `14`, `15`, `16`, `17`, `18`, `18.17.1` **(default)**, `19`, `20` |
        </TabItem>
    </Tabs>
</TabItem>

</Tabs>

## HyperExecute Integrations

Integrate HyperExecute with your favourite CI/CD tools, products and <BrandName /> tools to accelerate and optimize your testing ecosystem. To ensure that your testing environment can be optimised, HyperExecute provides you with multiple integrations, such as:

<div className="support_main">
  <a href="#hyperexecute-integration-with-cicd-tools">
  <div className="support_inners">
    <h3>Integrations with CI/CD Tool</h3>
    <p>Explore a range of CI/CD tool integrations to optimize your testing pipeline.</p>
  </div>
  </a>

  <a href="#hyperexecute-integrations-with-products">
  <div className="support_inners">
    <h3>Integration with Products</h3>
    <p>Effortlessly integrate with products like Tosca, Katalon and more for streamlined test execution and management.</p>
  </div>
  </a>

  <a href="#hyperexecute-integrations-with-testmu-ai-products">
  <div className="support_inners">
    <h3>Integration with <BrandName /> Products</h3>
    <p>Integrate seamlessly with other <BrandName /> products sucha as Smart UI or Real Device and enhance your testing environment's efficiency.</p>
  </div>
  </a>
</div>

>If your favourite integrations are not mentioned in the list above, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will have them ready for you.

### Related integrations

- [HyperExecute GitHub App Integration](/support/docs/hyperexecute-github-app-integration/) — trigger and manage HyperExecute jobs directly from the GitHub App.

### HyperExecute Integration With CI/CD Tools
HyperExecute offers integrations with numerous CI/CD tools to assist you to:
- Expend less manual effort
- Deliver faster
- Reduce risk

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/ci-cd.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

To integrate any CI pipeline with HyperExecute, follow these steps:

1. **Download the HyperExecute CLI Binary:**

To integrate HyperExecute with your preferred CI pipeline, you need to make use of the HyperExecute CLI. HyperExecute CLI is a command line client used to interact and run tests on HyperExecute and provide a host of other useful features that accelerate test execution.

For triggering tests using HyperExecute CLI, you have to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered: Below are the HyperExecute CLI download links for different operating systems:

| OS | HyperExecute CLI download link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

- If the Pipeline VM Image agent has the OS flavor of Linux or Mac, then the HyperExecute CLI binary would need additional permission. Run the command below to get the required permission: 

<VerifiedTag value="Verified" />

```
chmod u+x hyperexecute
```

2. **Execute the HyperExecute CLI Binary**

To execute the HyperExecute CLI binary, run the following command:

- **For Windows**

<VerifiedTag value="Verified" />

```
hyperexecute.exe –user LT_USERNAME –key LT_ACCESS_KEY –config path of the Hyperexecute YAML file 
```

- **For Mac/Linux**

<VerifiedTag value="Verified" />

```
./hyperexecute –user LT_USERNAME –key LT_ACCESS_KEY –config path of the Hyperexecute YAML file 
```

Below are detailed instructions for CI/CD tool integrations to help you get the most out of HyperExecute.

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/aws-codepipeline-with-hyperexecute/">AWS CodePipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/azure-with-hyperexecute/">Azure DevOps Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/github-actions-with-hyperexecute/">GitHub Actions Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/gitlab-integration-with-hyperexecute/">GitLab Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/circle-ci-with-hyperexecute/">CircleCI Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/jenkins-with-hyperexecute/">Jenkins Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/bitbucket-pipeline-with-hyperexecute/">Bitbucket Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/travis-ci-with-hyperexecute/">Travis CI Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/">TeamCity Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/gocd-integration-with-hyperexecute/">GoCD Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/">Bamboo CI Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/semaphore-integration-with-hyperexecute/">Semaphore Integration</a>
</div>

***

Want to know more about HyperExecute? Here’s a [link](/support/docs/getting-started-with-hyperexecute/) to our Documentation.

>If your favourite CI/CD tool is not in the list mentioned above, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will have it ready shortly for you.

#### Using the CI/CD Pipeline Agent Skill with TestMu AI
***

The [cicd-pipeline-skill](https://github.com/LambdaTest/agent-skills/tree/main/cicd-pipeline-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cicd-pipeline-skill package includes:

<VerifiedTag value="Verified" />

```
cicd-pipeline-skill/
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

##### Installing CI/CD Pipeline Agent Skill
***

Install a CI/CD Pipeline Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cicd-pipeline-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cicd-pipeline-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cicd-pipeline-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

### HyperExecute Integrations with Products

<BrandName /> now offers you the chance to integrate HyperExecute with products like Tosca, Katalon and more. You can go through the links below to see the integrations we offer at the moment. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/hyp-products.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

<div className="support_main">

  <a href = "/support/docs/hyperexecute-accelq-integration/">
  <div className="support_inners">
    <h2>ACCELQ</h2>
    <p>Perform codeless automated functional and API testing using Acceelq.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-algoqa-integration/">
  <div className="support_inners">
    <h2>algoQA</h2>
    <p>Perform software testing through automated test case generation and execution for various applications.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-azure-test-plan/">
  <div className="support_inners">
    <h2>Azure Test Plan</h2>
    <p>Manage test plans, test suites, and test cases for your web and desktop applications.</p>
  </div>
  </a>

  <a href = "/support/docs/katalon-integration-with-hyperexecute/">
  <div className="support_inners">
    <h2>Katalon</h2>
    <p>Perform Cross Platform Testing ranging from web, API, mobile, and desktop applications.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-provar-integration/">
  <div className="support_inners">
    <h2>Provar</h2>
    <p>Enable efficient creation and execution of UI and API tests.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-qtest-integration/">
  <div className="support_inners">
    <h2>qTest</h2>
    <p>Perform Cross Platform Testing, and get a centralized test management tool.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-sikuli-integration/">
  <div className="support_inners">
    <h2>Sikuli</h2>
    <p>Automate the visual testing of any software by integrating Sikuli with HyperExecute.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-slack-integration/">
  <div className="support_inners">
    <h2>Slack</h2>
    <p>Receive real-time notifications and crucial job details directly within your Slack workspace.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-testim-integration/">
  <div className="support_inners">
    <h2>Testim</h2>
    <p>Automate your software testing by creating stable automated tests.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-testsigma-integration/">
  <div className="support_inners">
    <h2>Testsigma</h2>
    <p>Perform codeless test automation to easily create and maintain tests.</p>
  </div>
  </a>

  <a href = "/support/docs/tosca-integration-with-hyperexecute/">
  <div className="support_inners">
    <h2>Tosca</h2>
    <p>Optimize and accelerate end-to-end testing for your entire digital landscape.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-winapp-integration/">
  <div className="support_inners">
    <h2>WinAppDriver</h2>
    <p>Perform the testing for the tests that are based on Microsoft Office Suite for TestNG Framework.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-zephyr-scale-integration/">
  <div className="support_inners">
    <h2>Zephyr</h2>
    <p>Zephyr is a test case management tool allows you to centrally manage your test suite cases.</p>
  </div>
  </a>
</div>

>If your favourite products are not mentioned in the list above, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will have them ready for you.

### HyperExecute Integrations with TestMu AI Products

You can now integrate HyperExecute with other <BrandName /> products like Smart UI testing. You can go through the links below to see the integrations we offer at the moment. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/hyp-lt-products.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

<div className="support_main">
  
  <a href = "/support/docs/smart-ui-testing/">
  <div className="support_inners">
    <h2>Smart UI - Hooks</h2>
    <p>Execute Smart UI Tests to ensure the visual consistency of web applications using HyperExecute.</p>
  </div>
  </a>

  <a href = "/support/docs/smart-ui-testing/">
  <div className="support_inners">
    <h2>Smart UI - SDK</h2>
    <p>Execute Smart UI Tests using SDK to ensure the visual consistency of web applications using HyperExecute.</p>
  </div>
  </a>
  
  <a href = "/support/docs/hyperexecute-appium-testing/#virtual-device-integration-with-hyperexecute">
  <div className="support_inners">
    <h2>Virtual Devices</h2>
    <p>Run app automated tests on Emulators and Simulators using HyperExecute.</p>
  </div>
  </a>

  <a href = "/support/docs/hyperexecute-appium-testing/#real-devices-integration-with-hyperexecute">
  <div className="support_inners">
    <h2>Real Devices</h2>
    <p>Run app automated tests on Real Mobile Devices using HyperExecute..</p>
  </div>
  </a>

</div>

>If your favourite products are not mentioned in the list above, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will have them ready for you.

### Seamless Integration for Enhanced Test Orchestration

HyperExecute, a powerful test automation orchestration platform, boasts seamless compatibility and effortless integration with a wide range of industry-leading testing tools. This document delves into HyperExecute's integration capabilities, highlighting its compatibility with Katalon, ACCELQ, Provar, Tosca, Azure Test Plans, Excel, and other <BrandName /> products.

#### Integrate HyperExecute Effortlessly

- [**Katalon Studio**](/docs/katalon-integration-with-hyperexecute/): HyperExecute directly integrates with Katalon Studio, enabling you to leverage Katalon's robust object repository and keyword-driven testing within your orchestrated test suites. Execute Katalon tests seamlessly alongside other tools for comprehensive test coverage.

- [**ACCELQ**](/docs/hyperexecute-accelq-integration/): HyperExecute seamlessly integrates with ACCELQ's data-driven testing capabilities. Leverage ACCELQ's data sheets and dynamic test case generation within HyperExecute's orchestration workflows for efficient test execution.

- [**MS Office Suite**](/docs/hyperexecute-winapp-integration/): HyperExecute seamlessly integrates with MS Office tools. Leverage Excel, Notepad and other tools for data-driven testing within HyperExecute's orchestration workflows, using familiar functionalities for efficient test data management.

<!-- - Provar: HyperExecute integrates with Provar's low-code test automation framework. Execute Provar tests alongside other tools within HyperExecute's orchestration, benefiting from Provar's intuitive interface and ease of use. -->

- [**Tosca**](/docs/tosca-integration-with-hyperexecute/): HyperExecute integrates with Tosca's model-based testing capabilities. Execute Tosca tests orchestrated within HyperExecute's workflows, combining the power of model-based testing with flexible orchestration.

- [**Azure Test Plans**](/docs/hyperexecute-azure-test-plan/): HyperExecute integrates with Azure Test Plans, enabling you to execute tests defined within Azure Pipelines directly from HyperExecute. Manage and orchestrate your Azure test executions efficiently.

- [**<BrandName /> Products**](#hyperexecute-integrations-with-testmu-ai-products): HyperExecute integrates with various <BrandName /> products, including Smart UI and Real Devices. Execute tests across diverse browsers, devices, and operating systems seamlessly within HyperExecute's orchestration framework.

#### Benefits of Integration

There are enormous advantages of integrating HyperExecute with the above mentioned tools, some of them are:

- **Unified Test Orchestration:** Manage and execute tests from various tools within a single platform, streamlining your testing process.

- **Improved Efficiency:** Automate repetitive tasks and orchestrate complex test flows across diverse tools, saving time and resources.

- **Enhanced Coverage:** Combine the strengths of different tools to achieve comprehensive test coverage across various testing methodologies.

- **Simplified Management:** Gain centralized control over your testing ecosystem, reducing complexity and improving visibility.

#### Conclusion

HyperExecute's seamless compatibility and effortless integration with various testing tools empower you to create robust, efficient, and scalable test automation strategies. Embrace the power of unified test orchestration and experience the value of HyperExecute's integrations firsthand.

## Next Steps

Now that you've set up HyperExecute and run your first test, explore these resources to make the most of the platform:

<div className="support_main">
  <a href="/support/docs/hyperexecute-running-your-first-job/">
    <div className="support_inners">
      <h3>Running Your First Job on HyperExecute</h3>
      <p>A step-by-step walkthrough of how to run your first job on the HyperExecute Platform.</p>
    </div>
  </a>
   <a href="/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/">
    <div className="support_inners"> 
      <h3>HyperExecute CLI</h3>
      <p>Understand how you can initiate jobs using our CLI from your local setup or CI/CD pipelines.</p>
    </div>
  </a>
   <a href="/support/docs/deep-dive-into-hyperexecute-yaml/">
    <div className="support_inners">
      <h3>HyperExecute YAML</h3>
      <p>Learn about the different configurations & creating a YAML suited for your needs.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-job-reports/#hyperexecute-status">
    <div className="support_inners">
      <h3>Status</h3>
      <p>Everything you need to know about HyperExecute status and what does it implies.</p>
    </div>
  </a>
  <a href="/support/docs/getting-started-with-hyperexecute/#key-features-of-hyperexecute">
    <div className="support_inners">
      <h3>Key Features</h3>
      <p>Learn about the different features and how you can use them in your project.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-vs-traditional-test-grids/">
    <div className="support_inners">
      <h3>HyperExecute vs Traditional Test grids</h3>
      <p>Understand how we expedite test execution as compared to traditional grids.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-private-cloud-setup/">
    <div className="support_inners">
      <h3>HyperExecute Private Cloud</h3>
      <p>Learn how to setup HyperExecute Private Cloud for your organization.</p>
    </div>
  </a>
</div>

### Run your framework on HyperExecute

Already using one of these frameworks? Follow the dedicated guide to run it on the HyperExecute grid:

<div className="support_main">
  <a href="/support/docs/hyperexecute-selenium-testing/#ruby">
    <div className="support_inners">
      <h3>Ruby on HyperExecute</h3>
      <p>Run your Ruby test suite on the HyperExecute grid.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-puppeteer-testing/#run-a-puppeteer-test-in-your-runner">
    <div className="support_inners">
      <h3>Mocha on HyperExecute</h3>
      <p>Run your Mocha (JavaScript) tests on the HyperExecute grid.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-selenium-testing/#ruby">
    <div className="support_inners">
      <h3>Capybara on HyperExecute</h3>
      <p>Run your Capybara acceptance tests on the HyperExecute grid.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-selenium-testing/#javascript">
    <div className="support_inners">
      <h3>Protractor on HyperExecute</h3>
      <p>Run your Protractor tests on the HyperExecute grid.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-selenium-testing/#c">
    <div className="support_inners">
      <h3>NUnit on HyperExecute</h3>
      <p>Run your NUnit (C#) tests on the HyperExecute grid.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-selenium-testing/#python">
    <div className="support_inners">
      <h3>Behave on HyperExecute</h3>
      <p>Run your Behave (Python BDD) tests on the HyperExecute grid.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-selenium-testing/#python">
    <div className="support_inners">
      <h3>Robot Framework on HyperExecute</h3>
      <p>Run your Robot Framework tests on the HyperExecute grid.</p>
    </div>
  </a>
</div>

### More HyperExecute guides

Once your first job is running, these guides cover day-to-day configuration, monitoring, and private-cloud setup:

- [HyperExecute CLI errors](/support/docs/hyperexecute-how-to-debug-job/): diagnose and resolve common HyperExecute CLI errors.
- [GUI query](/support/docs/hyperexecute-guided-walkthrough/): filter and search your jobs from the HyperExecute UI.
- [YAML capability overrides](/support/docs/deep-dive-into-hyperexecute-yaml/#yaml-based-capability-overrides-for-selenium-tests-on-hyperexecute): override capabilities per job in your HyperExecute YAML.
- [Task metrics](/support/docs/hyperexecute-task-metrics/): read the per-task performance metrics for a run.
- [Task widgets](/support/docs/hyperexecute-widgets/#task-widgets): customize the task widgets on your dashboard.
- [Org product preferences](/support/docs/hyperexecute-org-product-preferences/): set organization-level HyperExecute preferences.
- [MCP server release notes 1.0.0](/support/docs/hyperexecute-mcp-server-release-notes-1-0-0/): what shipped in the HyperExecute MCP server 1.0.0.
- [Slack integration](/support/docs/hyperexecute-slack-integration/): get HyperExecute job notifications in Slack.
- [Private Cloud setup on Azure](/support/docs/hyperexecute-private-cloud-setup-with-azure/): deploy HyperExecute Private Cloud on Microsoft Azure.
- [VNet peering for Private Cloud](/support/docs/hyperexecute-private-cloud-setup-with-azure/#vnet-peering-and-vnet-links): connect your VNet to HyperExecute Private Cloud.
- [Migrate from Sauce Labs to HyperExecute](/support/docs/saucelabs-to-hyperexecute-migrate/): move your Sauce Labs suite to HyperExecute.
- [C# use cases on HyperExecute](/support/docs/hyperexecute-csharp-use-cases/) — common C# test scenarios and configurations on HyperExecute.
- [TestNG use cases on HyperExecute](/support/docs/hyperexecute-testng-use-cases/) — common TestNG scenarios on HyperExecute.
- [Provar on HyperExecute](/support/docs/hyperexecute-provar-integration/) — run Provar (Salesforce) tests on HyperExecute.

### How-To Guides

<div className="support_main">  
  <a href="/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key">
    <div className="support_inners">
      <h2>Username and Access Key</h2>
      <p>Understand the step by step process of how to get your username and access key.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-running-your-first-job/#set-up-authentication-and-environment-variables">
    <div className="support_inners">
      <h2>Environment Variables</h2>
      <p>Learn how to setup HyperExecute environment variables.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-how-to-save-and-manage-secrets/">
    <div className="support_inners">
      <h2>Manage Secrets</h2>
      <p>Learn how to save and manage your secrets in HyperExecute Vault.</p>
    </div>
  </a>
    <a href="/support/docs/hyperexecute-how-to-configure-tunnel/">
  <div className="support_inners">
    <h2>Configure Tunnel</h2>
    <p>Learn how to configure tunnel for testing locally hosted websites using HyperExecute.</p>
  </div>
  </a>
  <a href="/support/docs/hyperexecute-how-to-find-correct-concurrency/">
  <div className="support_inners">
    <h2>Job Concurrency</h2>
    <p>Learn how to find correct concurrency for my Job</p>
  </div>
  </a>
    <a href="/support/docs/hyperexecute-how-to-configure-sourcePayload/">
  <div className="support_inners">
    <h2>Configure your Source Payload</h2>
    <p>Learn about how you can configure your sourcePayload.</p>
  </div>
  </a>
  <a href="/support/docs/hyperexecute-browser-list-api/">
  <div className="support_inners">
    <h2>Supported Browsers</h2>
    <p>How to get the list of all the supported browsers in HyperExecute via API call.</p>
  </div>
  </a>
    <a href="/support/docs/hyperexecute-how-to-run-tests-using-local-selenium-drivers/">
    <div className="support_inners">
      <h2>Local Selenium Webdriver</h2>
      <p>Learn how to run your selenium tests via local driver without setting remote driver in HyperExecute.</p>
    </div>
  </a>
</div>

### HyperExecute Knowledge Base

<div className="support_main">  
  <a href="/support/docs/hyperexecute-job-reports/#hyperexecute-status">
    <div className="support_inners">
      <h2>HyperExecute Status</h2>
      <p>Learn all the status of the HyperExecute at different levels - Job level, Task level, Stage level and Test level.</p>
    </div>
  </a>
  <a href="/support/docs/getting-started-with-hyperexecute/#how-to-guides">
    <div className="support_inners">
      <h2>How To Guide</h2>
      <p>Understand how to perform various activities in the HyperExecute Dashboard.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-testng-use-cases/">
    <div className="support_inners">
      <h2>HyperExecute Use Cases</h2>
      <p>Learn about the real world implementations of the HyperExecute.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-widgets/">
    <div className="support_inners">
      <h2>HyperExecute Widgets</h2>
      <p>Learn the insights of your Tasks based on the defined parameters in the Tests.</p>
    </div>
  </a>
  <a href="/support/docs/hyperexecute-job-reports/">
  <div className="support_inners">
    <h2>HyperExecute Job Reports</h2>
    <p>Learn about different types of Job Reports based on various frameworks.</p>
  </div>
  </a>
  <a href="/support/docs/saucelabs-to-hyperexecute-migrate/">
  <div className="support_inners">
    <h2>Migration Guide</h2>
    <p>Learn how to migrate your tests from the Sauce Labs to HyperExecute.</p>
  </div>
  </a>
</div>

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

:::tip  We’re Already in Your Favorite Cloud!
Deploy our cloud-native test orchestration platform directly from your trusted marketplace:
- [Microsoft Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyper_execute?exp=ubp8&tab=Overview)
- [Amazon Web Services Marketplace](https://aws.amazon.com/marketplace/pp/prodview-35cneaxfou2eq)
- [Google Cloud Provider Marketplace](https://console.cloud.google.com/marketplace/product/hyperexecute-privatecloud/lambdatest?pli=1)
:::

<!-- Here are all the languages and frameworks supported by HyperExecute. -->

<!-- > HyperExecute supports multiple languages and testing frameworks. See the comprehensive list & samples [here](/support/docs/getting-started-with-hyperexecute/). -->

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
       Languages and Frameworks Supported By HyperExecute
      </span>
    </li>
  </ul>
</nav>

