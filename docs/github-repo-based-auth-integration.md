---
id: github-repo-based-oauth
title: Integrate TestMu AI With GitHub Using Repo-Based OAuth
hide_title: true
sidebar_label: GitHub Repo-based OAuth
description: Easily integrate TestMu AI with GitHub using repo-based OAuth to log bugs directly from the TestMu AI platform to your GitHub repositories.
keywords:
- testmu ai github integration
- github repo oauth testmu ai
- testmu ai bug logging github
- connect github to testmu ai
- testmu ai oauth setup
- log bugs from testmu ai to github
- github repository integration testmu ai
url: https://www.testmuai.com/support/docs/github-repo-based-oauth-integration/
site_name: TestMu AI
slug: github-repo-based-oauth-integration/
canonical: https://www.testmuai.com/support/docs/github-repo-based-oauth-integration/
---
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
          "name": "GitHub Repo-Based OAuth Integration",
          "item": `${BRAND_URL}/support/docs/github-repo-based-oauth-integration/`
        }]
      })
    }}
></script>

# GitHub Repo-Based OAuth Integration
---

<BrandName /> allows you to integrate with GitHub using repo-based OAuth to log issues directly to your GitHub repository from the <BrandName /> platform. 

## Integrating Your GitHub Account Using Repo-Based OAuth
***

1. Log in to your <BrandName /> account. Ensure that you have either admin or user level access to view and install third-party integrations.

2. Navigate to **Integrations** from the left-sidebar under **Settings**.

3. Click on Project Management, then click **Connect** on the GitHub card.

<img loading="lazy" src={require('../assets/images/github-oauth-integration/select-github.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

4. Select instance as **Repo-based OAuth**.

<img loading="lazy" src={require('../assets/images/github-oauth-integration/click-repo-based-oauth.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

5. Click **Install** to install the <BrandName /> App. 

<img loading="lazy" src={require('../assets/images/github-oauth-integration/install-lambdatest-app.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

6. Choose the installation location. Instead of granting access to all GitHub repositories, you also have the option to select a specific repository for installing the <BrandName /> App. 

After selecting the installation location, click **Request** to get the approval for the repository authorization. 
 
<img loading="lazy" src={require('../assets/images/github-oauth-integration/request.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

8. Once your installation request is approved, navigate back to the GitHub setup dashboard and click **Authorize**.

<img loading="lazy" src={require('../assets/images/github-oauth-integration/authorize.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

9. Click **Continue** to authorize the GitHub repository.

<img loading="lazy" src={require('../assets/images/github-oauth-integration/authorize-user.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

10. After you complete the authorization, GitHub will install the <BrandName /> App.

<img loading="lazy" src={require('../assets/images/github-oauth-integration/app-installed.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

11. Navigate back to the Integrations console and you'll notice your <BrandName /> account will be integrated with GitHub using repository-based OAuth authentication. 

<img loading="lazy" src={require('../assets/images/github-oauth-integration/integration-success.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

You can now start testing your website or mobile app testing and log bugs directly from the <BrandName /> platform to your GitHub repository.

Looking to get started? Check out this documentation on [real-time testing on desktop browsers](/support/docs/getting-started-with-desktop-browser-real-time-testing/).














