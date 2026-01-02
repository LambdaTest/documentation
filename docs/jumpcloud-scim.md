---
id: jumpcloud-scim
title: JumpCloud User Provisioning
hide_title: false
sidebar_label: JumpCloud 
description: Integrating TestMu AI SCIM with JumpCloud
keywords:
    - TestMu AI SCIM
    - JumpCloud
url: https://www.testmu.ai/support/docs/jumpcloud-scim
site_name: LambdaTest
slug: jumpcloud-scim
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Scim",
          "item": `${BRAND_URL}/support/docs/jumpcloud-scim/`
        }]
      })
    }}
></script>
JumpCloud is a cloud-based directory-as-a-service (DaaS) platform that provides comprehensive identity and access management (IAM) capabilities for organizations. It offers a centralized platform to manage and secure user identities, devices, and applications across a variety of environments, including cloud, on-premises, and hybrid infrastructures.

In the documentation, we will discuss how to integrate JumpCloud with <BrandName />:

## Prerequisites​
- You will need an Enterprise plan with <BrandName />.
- The SSO connection must be already established with <BrandName />. Learn how to [create a SSO Connection with <BrandName />](/support/docs/testmu-sso-self-serve/).

## Steps to Integrate SCIM with JumpCloud

- **Step 1:** Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/1.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 2:** Head to **Settings** > **Organization Settings** from the dropdown.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/2.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 3:** Go to <BrandName /> [Authentication & SSO settings](https://accounts.lambdatest.com/auth/sso) and click on Setup SSO. Head to the **Authentication and SSO** tab and click and copy the **SCIM Base URL and Bearer Token** option.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/3.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 4:** Log in to JumpCloud. Go to [JumpCloud Admin Console](https://console.jumpcloud.com/login/admin). Log in with your admin credentials. Sign in to the Jump-cloud. Select SSO Applications, then select Get Started.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/4.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 5:** Search for SCIM and then click on "**Create Custom Integration**" and then click next.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/5.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/6.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 6:** Check the box for "**Manage Single Sign-On (SSO)"** and then click "**Start**."
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/7.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 7:** Enter the name for **Display Label**, then click the **Save Application** and click  **configure Application**.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/8.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/9.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 8:** Go to <BrandName /> [**Authentication & SSO**](https://accounts.lambdatest.com/auth/sso) settings and click on **Setup SSO**.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/10.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- Enter the **Connection Name** and Click on Add New Connection. and Select your **Identity Provider**.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/11.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/12.png').default} alt="jira-self-hosted-integration"  className="doc_img"/>

- **Step 9:** Copy the required SSO details from <BrandName />, including:
  - IdP Entity ID
  - SP  Entity ID
  - ACS URL
  - Subject Name
  - Login URL
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/13.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 10:** Configure <BrandName /> SSO Integration Using SAML.
- Go to <BrandName /> Dashboard > **Authentication & SSO Settings**.
- Click **Setup SSO**. Enter a **Connection Name** and click **Add New Connection**.
- Select **JumpCloud** as your Identity Provider (IdP)
- Copy the required SSO details from <BrandName />, including:
  - IdP Entity ID
  - SP Entity ID
  - ACS URL
  - Subject Name
  - Login URL
- Click **Add Attribute** in jumpcloud, enter the necessary details, and save the configuration. (IdP)
- Copy the **Metadata URL** from JumpCloud.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/14.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/15.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/16.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 11:** Finalize the Integration
- Copy the **Metadata URL** from JumpCloud.
- Go to <BrandName /> Dashboard and paste the Metadata URL.
- Add the **SSO domain** in <BrandName /> and click **Create Connection**.
- Assign users to the SSO connection in JumpCloud and **Save** the configuration.

- **Step 12:** Go to <BrandName /> Dashboard and go **SSO connection**. Copy **Bearer Token** and **SCIM Base URL**.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/17.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 13:**  Go **Identity Management** and paste **SCIM Base URL** and **Bearer Token**. and then click Save button.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/18.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 

- **Step 14:** Enter email that does not exist on <BrandName /> platform and provide test email details, and click **Test Connection** and activate button.
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/19.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
  <img loading="lazy" src={require('../assets/images/lambdatest-scim/jumpcloud-scim/20.png').default} alt="jira-self-hosted-integration"  className="doc_img"/> 
