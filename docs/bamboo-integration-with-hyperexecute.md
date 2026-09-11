---
id: bamboo-integration-with-hyperexecute
title: Bamboo CI
hide_title: true
sidebar_label: Bamboo CI
description: TestMu AI now integrates with Bamboo CI Pipeline to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/
site_name: TestMu AI
slug: bamboo-integration-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/
---


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
          "name": "Bamboo CI Integration",
          "item": `${BRAND_URL}/support/docs/bamboo-integration-with-hyperexecute/`
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
      "@id": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/"
    },
    "headline": "Bamboo CI",
    "description": "TestMu AI now integrates with Bamboo CI Pipeline to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/",
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
      "ci/cd tools"
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
        "name": "Step 1: Setup Bamboo CI in your local device",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "    ROOT_FOLDER/atlassian-bamboo/WEB-INF/classes/bamboo-init.properties"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Start the Bamboo Server",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd ROOT_FOLDER\n\n./bin/start-bamboo.sh"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Configure Job",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -O https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute\nchmod +x hyperexecute\n./hyperexecute --user <username>--key <key> --config <file>"
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
      "name": "How To Integrate Bamboo CI Pipeline with HyperExecute",
      "description": "*** To integrate CircleCI Pipeline with HyperExecute, follow the below steps: You can refer to different supported versions from here as per your requirements. Below are the mentioned softwares used for this documentation: Java 11 DataBase - PostgreSQL 14.9 Operating System - Linux Ubuntu 22.04 LTS",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup Bamboo CI in your local device",
          "text": "Download the Bamboo CI in your device. Extract the file in your desired location. Let's say it as ROOTFOLDER** Before you run Bamboo for the first time, specify your Bamboo Home Directory, where your Bamboo data is stored. Create your Bamboo Home Directory (without spaces in the name). NOTE: You should not create your Bamboo Home Directory inside the ROOTFOLDER. They should be entirely separate locations. If you do put the Home Directory in the ROOTFOLDER, it will be overwritten and lost when Bamboo is upgraded. Go to the following file location You have to uncomment the bamboo.home line and provide the absolute path to your Home Directory.",
          "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/#step-1-setup-bamboo-ci-in-your-local-device"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Start the Bamboo Server",
          "text": "Change to the ROOTFOLDER** from the command-line and start the server Now type `http://localhost:8085/` in your browser to open the Bamboo GUI. NOTE: If you are running Bamboo for the very first time, then you need to configure the Setup Wizard as well. Follow the instructions here to configure it.",
          "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/#step-2-start-the-bamboo-server"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Create a Project and a Plan",
          "text": "Click on Create Project button. Enter the required details for your project: Enter your Project Name Provide a Project Key Give a brief description of your project. You can choose whether to provide access to this project to everyone or not. Click on Save button. Now click on Create Plan button. Select your required Project. Enter a Plan Name Enter your Project Key (it should be same as the one you entered in the above step). Click on Create button.",
          "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/#step-3-create-a-project-and-a-plan"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Configure the Source Code",
          "text": "Select the Repository Host. In this case, we are using Git to manage the source code. Enter the Display Name. Provide the Repository URL. Select the Authentication Type of your choice. We are selecting \"Username and Password\" Enter the Username and Password. Enter the desired Branch name. Click on Test Connection button to check whether the connection is successfully established or not. Define who can access to this repository. Click on Save and Continue button.",
          "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/#step-4-configure-the-source-code"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure Job",
          "text": "Select the environment where do you want to execute this job. For the demo purpose, we are using Agent Environment. Click on Add Task button Select the Script option from the provided Task Types. Enter your Task Description. Select the Interpreter as Shell. Choose the Script Location as Inline. Add the following code in the Script Body Add the Task and click on Create button. Configure the pipeline as per your need in the Trigger tab or leave it to Default Click on Actions -> Enable Plan button. Click on Run -> Run plan button. Test will get triggered and start executing. You can check the activity status of your Job here.",
          "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/#step-5-configure-job"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Check the Output",
          "text": "Logs of the Job Build Result on HyperExecute Dashboard",
          "url": "https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/#step-6-check-the-output"
        }
      ]
    }
  ]) }}
/>

# Bamboo CI Integration with HyperExecute
* * *

Bamboo is a continuous integration (CI) and continuous delivery (CD) server from Atlassian. It helps teams automate the software development and delivery process, from code commit to production deployment. Bamboo can be used to build, test, and deploy software on a variety of platforms, including cloud, on-premises, and hybrid environments.

This document will show you how to integrate Bamboo CI Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate Bamboo CI Pipeline with HyperExecute
***

To integrate CircleCI Pipeline with HyperExecute, follow the below steps:

### Pre-requisite:

You can refer to different supported versions from [here](https://confluence.atlassian.com/bamboo/supported-platforms-289276764.html) as per your requirements.

Below are the mentioned softwares used for this documentation:

- Java 11
- **DataBase** - PostgreSQL 14.9
- **Operating System** - Linux Ubuntu 22.04 LTS

### Step 1: Setup Bamboo CI in your local device

1. [Download](https://www.atlassian.com/software/bamboo/download) the Bamboo CI in your device.

2. Extract the file in your desired location. Let's say it as **ROOT_FOLDER**

3. Before you run Bamboo for the first time, specify your Bamboo Home Directory, where your Bamboo data is stored.
    - Create your Bamboo Home Directory (without spaces in the name).

    > **NOTE:** You should not create your Bamboo Home Directory inside the **ROOT_FOLDER**. They should be entirely separate locations. If you do put the Home Directory in the **ROOT_FOLDER**, it will be overwritten and lost when Bamboo is upgraded.

    - Go to the following file location

    ```bash
    ROOT_FOLDER/atlassian-bamboo/WEB-INF/classes/bamboo-init.properties
    ``` 
    - You have to uncomment the **bamboo.home** line and provide the absolute path to your Home Directory.

### Step 2: Start the Bamboo Server

- Change to the **ROOT_FOLDER** from the command-line and start the server

```bash
cd ROOT_FOLDER

./bin/start-bamboo.sh
```

- Now type ``http://localhost:8085/`` in your browser to open the Bamboo GUI.

> **NOTE:** If you are running Bamboo for the very first time, then you need to configure the Setup Wizard as well. Follow the instructions [here](https://confluence.atlassian.com/bamboo/running-the-setup-wizard-289276851.html) to configure it.

### Step 3: Create a Project and a Plan

- Click on **Create Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/1.png').default} alt="Image"  className="doc_img"/>

- Enter the required details for your project:

    - Enter your **Project Name**
    - Provide a **Project Key**
    - Give a brief description of your project.
    - You can choose whether to provide access to this project to everyone or not.
    - Click on **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/2.png').default} alt="Image"  className="doc_img"/>

- Now click on **Create Plan** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/3.png').default} alt="Image"  className="doc_img"/>

- Select your required **Project**.
- Enter a **Plan Name**
- Enter your **Project Key** (it should be same as the one you entered in the above step).
- Click on **Create** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/4.png').default} alt="Image"  className="doc_img"/>

### Step 4: Configure the Source Code

- Select the Repository Host. In this case, we are using Git to manage the source code.
- Enter the **Display Name**.
- Provide the **Repository URL**.
- Select the **Authentication Type** of your choice. We are selecting "Username and Password"
- Enter the **Username** and **Password**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/5.png').default} alt="Image"  className="doc_img"/>

- Enter the desired **Branch** name.
- Click on **Test Connection** button to check whether the connection is successfully established or not.
- Define who can access to this repository.
- Click on **Save and Continue** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/6.png').default} alt="Image"  className="doc_img"/>

### Step 5: Configure Job

- Select the **environment** where do you want to execute this job. For the demo purpose, we are using **Agent Environment**.
- Click on **Add Task** button

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/7.png').default} alt="Image"  className="doc_img"/>

- Select the **Script** option from the provided Task Types.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/8.png').default} alt="Image"  className="doc_img"/>

- Enter your Task Description.
- Select the **Interpreter** as **Shell**.
- Choose the **Script Location** as **Inline**.
- Add the following code in the **Script Body**

```bash
curl -O https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
chmod +x hyperexecute
./hyperexecute --user <username>--key <key> --config <file>
```

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/9.png').default} alt="Image"  className="doc_img"/>

- Add the Task and click on **Create** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/10.png').default} alt="Image"  className="doc_img"/>

- Configure the pipeline as per your need in the **Trigger** tab or leave it to *Default*

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/11.png').default} alt="Image"  className="doc_img"/>

- Click on **Actions** -> **Enable Plan** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/12.png').default} alt="Image"  className="doc_img"/>

- Click on **Run** -> **Run plan** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/13.png').default} alt="Image"  className="doc_img"/>

- Test will get triggered and start executing. You can check the activity status of your Job here.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/14.png').default} alt="Image"  className="doc_img"/>

### Step 6: Check the Output

- Logs of the Job Build

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/15.png').default} alt="Image"  className="doc_img"/>

- Result on HyperExecute Dashboard

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/bamboo/16.png').default} alt="Image"  className="doc_img"/>
