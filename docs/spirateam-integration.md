---
id: spirateam-integration
title: SpiraTeam Integration
hide_title: false
sidebar_label: SpiraTeam
description: TestMu AI provides integrations with SpiraTeam to help you log bugs directly from the middle of your test session on TestMu AI to SpiraTeam platform.
keywords:
  - TestMu AI integrations
  - Push issues to SpiraTeam
  - TestMu AI SpiraTeam integration
image: /assets/images/og-images/default-user-image.png
url: https://www.lambdatest.com/support/docs/spirateam-integration/
site_name: LambdaTest
slug: spirateam-integration/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "SpiraTeam Integration",
          "item": "https://www.lambdatest.com/support/docs/spirateam-integration/"
        }]
      })
    }}
></script>

SpiraTeam is a software tool used for Application Lifecycle Management (ALM). It's designed to help teams manage various aspects of software development, from programs and portfolios to requirements, releases, test cases, issues, baselines, workflows, and tasks.

It is very useful for managing teams programs, portfolios, requirements, releases, test cases, issues, baselines, workflows, and tasks in one unified environment.

<div className="ytframe"> 
<div className="youtube" data-embed="kKSHidsC6tk">
    <div className="play-button"></div>
</div>
</div>

## Steps to Integrate LambdaTest with SpiraTeam

### Step 1: Setup Your Accounts

- Sign in to your LambdaTest account. If you don't have an account, **[Register for FREE !!](https://accounts.lambdatest.com/dashboard)**.

- Create your [**SpiraTeam account**](https://www.inflectra.com/Trial/Process.aspx?catalogItemId=90) and login to your account.

### Step 2: Configure the Integration

- On the [LambdaTest Dashboard](https://accounts.lambdatest.com/dashboard), click on the **Settings** option and select the **Integrations**.

- In the **Bug Tracker Section**, select the **SpiraTeam** and click on the **Connect** button.

<img loading="lazy" src={require('../assets/images/spirateam-integration/1.png').default} alt="1" className="doc_img"/>

- Enter the configuration details and click on **Install** button.

    - **Username :**  Go to your SpiraTeam account profile to find your Username.
    - **SpiraTeam URL :** Enter your organization URL using for the integration.
    - **RSS / API Key :** In your SpiraTeam profile, toggle the **Enable RSS Feeds** to **yes** and copy the **RSS / API Key** and click on the Save button.

    <img loading="lazy" src={require('../assets/images/spirateam-integration/2.png').default} alt="1" className="doc_img"/>

### Step 3: Create Your Incident Ticket

- Go to the **Automation** section.

- Click on the desired test for which you want to create the incident ticket.

- Click on **Create an issue**.

<img loading="lazy" src={require('../assets/images/spirateam-integration/3.png').default} alt="1" className="doc_img"/>

- Configure the ticket details as shown below and click on **Create Issue** button.

<img loading="lazy" src={require('../assets/images/spirateam-integration/4.png').default} alt="1" className="doc_img"/>

### Step 4: (Optional) Complete Your Ticket Configuration if needed

- Visit your SpiraTeam profile.

- Go to your desired dashboard in which you have created the ticket in the above step.

- Update your ticket information here and click on the **Save** button.

<img loading="lazy" src={require('../assets/images/spirateam-integration/5.png').default} alt="1" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/spirateam-integration/6.png').default} alt="1" className="doc_img"/>
