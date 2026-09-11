---
id: teamcity-with-hyperexecute
title: How to integrate TeamCity with HyperExecute
hide_title: true
sidebar_label: TeamCity
description: Integrate TeamCity with HyperExecute effortlessly! Speed up your CI/CD pipeline while ensuring UI/UX consistency with TestMu AI’s reliable testing platform
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - hyperexecute integrations
  - hyperexecute integrations with ci/cd tools
  - continuous integration
  - aws codepipeline
  - continuous integration tools
  
url: https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/
site_name: TestMu AI
slug: teamcity-with-hyperexecute/
canonical: https://www.testmu.ai/support/docs/teamcity-with-hyperexecute/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.testmuai.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "AWS CodePipeline Integration with HyperExecute",
          "item": `${BRAND_URL}/support/docs/teamcity-with-hyperexecute/`
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
      "@id": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/"
    },
    "headline": "How to integrate TeamCity with HyperExecute",
    "description": "Integrate TeamCity with HyperExecute effortlessly! Speed up your CI/CD pipeline while ensuring UI/UX consistency with TestMu AI\u2019s reliable testing platform",
    "url": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "testmu ai integrations",
      "testmu ai integrations with ci/cd tools",
      "hyperexecute integrations"
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
        "name": "Step 4: Start the build process",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -O https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute\nchmod +x hyperexecute\n./hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_name>"
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
      "name": "How to Integrate TeamCity with HyperExecute",
      "description": "*** To integrate TeamCity with HyperExecute, follow the below mentioned steps: Install Java 17 (recommend) in your device. Download the TeamCity in your device.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Start the TeamCity GUI",
          "text": "Go to the teamcity/bin folder and run the command ./runAll.sh start to start the TeamCity Server in your system. Now type `http://localhost:8111/` in your browser to open the TeamCity GUI. Click on Create Project button.",
          "url": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/#step-1-start-the-teamcity-gui"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Create the Project",
          "text": "For the demo purposes, we will be using the GitHub repository to create the project. Thus, select From a repository URL section. Enter the Repository URL from which you want to set up the project. Enter the Username and Password of your GitHub. (It is required in case the access to the repo needed authentication). Click on Proceed button.",
          "url": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/#step-2-create-the-project"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Connect your Version Control System.",
          "text": "Connect your GitHub / GitLab wherever you have stored your tests. Enter your Project name. Enter your Build config name. Mention your Default branch which needs to be monitored. If you want that besides your default branch, TeamCity should monitor other branches too, define it in the Branch specification section. Click on Proceed button.",
          "url": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/#step-3-connect-your-version-control-system"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Start the build process",
          "text": "Configure your build setup either automatically (fetched by your VCS) or manually. For the demo purpose, we will configure the build process manually. Select the Command Line for the build setup Enter the Step name (optional). Select the Custom Script in the Run field. Enter the below mentioned script in the space provided. Since my default agent is mac I am using darwin CLI in the cURL command. Kindly change it according to your system default agent. Mac -> darwin Linux -> linux Windows-> windows",
          "url": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/#step-4-start-the-build-process"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Build process is complete",
          "text": "Now your build process is completed. This will take a couple of minutes to completely execute all the stages. After the build is successful, go to your TestMu AI Dashboard and check the output of the triggered Job.",
          "url": "https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/#step-5-build-process-is-complete"
        }
      ]
    }
  ]) }}
/>

# TeamCity Integration With HyperExecute

TeamCity is a build management and continuous integration server developed by JetBrains. It is used to automate the process of building, testing, and deploying software. It supports a wide range of programming languages and technologies, including Java, .NET, Ruby, and Python.

This document will show you how to integrate TeamCity with HyperExecute to greatly shorten your test cycles.

## How to Integrate TeamCity with HyperExecute
***

To integrate TeamCity with HyperExecute, follow the below mentioned steps:

### Pre-requisite:

- Install [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (recommend) in your device.
- Download the [TeamCity](https://www.jetbrains.com/teamcity/download/) in your device.

### Step 1: Start the TeamCity GUI

- Go to the **teamcity/bin** folder and run the command **./runAll.sh start** to start the TeamCity Server in your system.
- Now type ``http://localhost:8111/`` in your browser to open the TeamCity GUI.
- Click on Create Project button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step1.webp').default} alt="Image"  className="doc_img"/>

### Step 2: Create the Project

- For the demo purposes, we will be using the GitHub repository to create the project. Thus, select **From a repository URL** section.
- Enter the **Repository URL** from which you want to set up the project.
- Enter the **Username** and **Password** of your GitHub. (It is required in case the access to the repo needed authentication).
-  Click on **Proceed** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step2.webp').default} alt="Image"  className="doc_img"/>

### Step 3: Connect your Version Control System.

- Connect your GitHub / GitLab wherever you have stored your tests.
- Enter your **Project name**.
- Enter your **Build config name**.
- Mention your **Default branch** which needs to be monitored.
- If you want that besides your default branch, TeamCity should monitor other branches too, define it in the **Branch specification** section.
- Click on **Proceed** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step3.webp').default} alt="Image"  className="doc_img"/>

### Step 4: Start the build process

- Configure your build setup either **automatically** (fetched by your VCS) or **manually**. For the demo purpose, we will configure the build process manually.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step4.webp').default} alt="Image"  className="doc_img"/>

- Select the **Command Line** for the build setup

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step5.webp').default} alt="Image"  className="doc_img"/>

- Enter the **Step name** (optional).
- Select the **Custom Script** in the **Run** field.
- Enter the below mentioned script in the space provided.

<VerifiedTag value="Verified" />

```bash
curl -O https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
chmod +x hyperexecute
./hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_name>
```

> Since my default agent is mac I am using darwin CLI in the **cURL** command. Kindly change it according to your system default agent. <br /> 
  - **Mac** -> darwin <br />
  - **Linux** -> linux <br />
  - **Windows**-> windows

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step6.webp').default} alt="Image"  className="doc_img"/>

### Step 5: Build process is complete

- Now your build process is completed. This will take a couple of minutes to completely execute all the stages.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step7.webp').default} alt="Image"  className="doc_img"/>

- After the build is successful, go to your <BrandName /> Dashboard and check the output of the triggered Job.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/teamcity/Step8.webp').default} alt="Image"  className="doc_img"/>
