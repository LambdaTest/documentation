---
id: netlify-integration-with-lambdatest
title: Netlify Integration With TestMu AI
hide_title: true
sidebar_label: Netlify
description: Simplify DevOps! Run blazing-fast Cypress tests on TestMu AI directly from your Netlify builds.
keywords:
  - testmu ai integrations
  - testmu ai netlify integration
  - integrate netlify with testmu ai
  - netlify integration with testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmuai.com/support/docs/netlify-integration-with-testmu/
site_name: TestMu AI
slug: netlify-integration-with-testmu/
canonical: https://www.testmu.ai/support/docs/netlify-integration-with-testmu/
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
          "name": "Netlify Integration",
          "item": `${BRAND_URL}/support/docs/netlify-integration-with-testmu/`
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
      "@id": "https://www.testmuai.com/support/docs/netlify-integration-with-testmu/"
    },
    "headline": "Netlify Integration With TestMu AI",
    "description": "Simplify DevOps! Run blazing-fast Cypress tests on TestMu AI directly from your Netlify builds.",
    "url": "https://www.testmuai.com/support/docs/netlify-integration-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "testmu ai integrations",
      "testmu ai netlify integration",
      "integrate netlify with testmu ai"
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
    "dateModified": "2026-06-02T12:20:54+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Setup the Netlify Plugin",
      "description": "Simplify DevOps! Run blazing-fast Cypress tests on TestMu AI directly from your Netlify builds.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Configure your TestMu AI Integration on Netlify Dashboard",
          "text": "Go to your Netlify Dashboard. Click on the Integrations tab, search for TestMu AI and click on the Enable button. You need to provide your configuration details Enter your Username and Access Key from the TestMu AI Dashboard. Enter your Smart-UI Project Name For the Smart-UI Project Name, you can enter any project name. Even if you have not set up any projects in the Smart UI Dashboard. You can also enter your already-existing smart-UI project name. Click on the Save button",
          "url": "https://www.testmuai.com/support/docs/netlify-integration-with-testmu/#step-1-configure-your-testmu-ai-integration-on-netlify-dashboard"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Deploy the Site for which you want to compare the results",
          "text": "Go to the Deploys section, click on Deploy site button and deploy your project. This deployment is before any changes you have made and will be your Baseline image. Now you need to make the required changes in your project and push the changes. Visit the Netlify Dashboard again, and re-deploy your project. Your changes will be triggered and deployed.",
          "url": "https://www.testmuai.com/support/docs/netlify-integration-with-testmu/#step-2-deploy-the-site-for-which-you-want-to-compare-the-results"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 4: Compare the Changes Smart-UI Dashboard",
          "text": "Go to your Smart-UI Dashbard. You will notice there is already a project with the same name you entered while configuring in Step 1 Go on that project. Click on the latest build. You can now compare the changes done to your project with-respect-to the provious build.",
          "url": "https://www.testmuai.com/support/docs/netlify-integration-with-testmu/#step-4-compare-the-changes-smart-ui-dashboard"
        }
      ]
    }
  ]) }}
/>

# Netlify Integration with <BrandName />

Netlify is a cloud computing company that offers hosting and serverless backend services for web applications and static websites. It allows developers to deploy their websites and applications quickly and easily, with features such as continuous deployment, serverless functions, and global CDN.

## Prerequisite

1. A <BrandName /> account. If you don't have an account, [sign up for free](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard).

2. You need to have a site deployed in your Netlify account.

## Steps to Setup the Netlify Plugin

### Step 1: Configure your <BrandName /> Integration on Netlify Dashboard

- Go to your Netlify Dashboard.

- Click on the Integrations tab, search for **<BrandName />** and click on the **Enable** button.

<img loading="lazy" src={require('../assets/images/netlify-integration/n1.png').default} alt="Image" className="doc_img"/>

- You need to provide your configuration details

    - Enter your **Username** and **Access Key** from the **<BrandName /> Dashboard**.

    - Enter your **Smart-UI Project Name**

:::info
For the Smart-UI Project Name, you can enter any project name. Even if you have not set up any projects in the Smart UI Dashboard.

You can also enter your already-existing smart-UI project name.
:::

- Click on the **Save** button

<img loading="lazy" src={require('../assets/images/netlify-integration/n2.png').default} alt="Image" className="doc_img"/>

### Step 2: Deploy the Site for which you want to compare the results

- Go to the **Deploys** section, click on **Deploy site** button and deploy your project. 

<img loading="lazy" src={require('../assets/images/netlify-integration/n3.png').default} alt="Image" className="doc_img"/>

- This deployment is before any changes you have made and will be your **Baseline** image.

- Now you need to make the required changes in your project and push the changes.

- Visit the Netlify Dashboard again, and re-deploy your project.

Your changes will be triggered and deployed.

<img loading="lazy" src={require('../assets/images/netlify-integration/n4.png').default} alt="Image" className="doc_img"/>

### Step 4: Compare the Changes Smart-UI Dashboard

- Go to your Smart-UI Dashbard. You will notice there is already a project with the same name you entered while configuring in **Step 1**

<img loading="lazy" src={require('../assets/images/netlify-integration/n5.png').default} alt="Image" className="doc_img"/>

- Go on that project. Click on the latest build. You can now compare the changes done to your project with-respect-to the provious build.

<img loading="lazy" src={require('../assets/images/netlify-integration/n6.png').default} alt="Image" className="doc_img"/>
