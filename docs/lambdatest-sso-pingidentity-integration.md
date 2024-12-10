---
id: lambdatest-sso-pingidentity-integration
title: LambdaTest SSO & PingIdentity Integration
hide_title: false
sidebar_label: PingIdentity
description: Integrate LambdaTest with Ping Identity for secure SSO using SAML. Follow step-by-step instructions to configure SP-initiated, IdP-initiated SSO, and group management.
keywords:
  - sso
  - lambdatest sso
  - pingidentity
  - lambdatest pingidentity integration
  - lambdatest pingidentity sso
url: https://www.lambdatest.com/support/docs/lambdatest-sso-pingidentity-integration
site_name: LambdaTest
slug: lambdatest-sso-pingidentity-integration/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "LambdaTest SSO",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-sso-pingidentity-integration"
        }]
      })
    }}
></script>
LambdaTest provides seamless integration with Ping Identity through SAML (Security Assertion Markup Language) to enable Single Sign-On (SSO) for your organization. By integrating Ping Identity with your LambdaTest organization, you can streamline user authentication and enhance security.

## Key Features of Ping Identity Integration:
- **SP-Initiated SSO :** Single Sign-On initiated from the LambdaTest platform.
- **IdP-Initiated SSO :** Single Sign-On initiated from Ping Identity.
- **Group Assignment :** Manage user groups via Ping's group functionality.

## Prerequisites
Before configuring the integration, ensure you meet the following requirements:

- **LambdaTest Enterprise Plan :** Your organization must have an active Enterprise plan.
- **SSO Enablement Request :** The admin of your LambdaTest organization must request SSO enablement.
> Raise a request via email at support@lambdatest.com or through LambdaTest’s 24/7 in-app chat support.
- **Ping Identity Admin Access :** You need administrative access to your Ping Identity account.
- **Metadata File :** Download the SAML metadata file for your LambdaTest organization using the following URL:

    Replace `{organizationID}` with your organization's ID

    ```bash
    https://auth.lambdatest.com/organization/{organizationID}/saml/metadata
    ```

## Configuring LambdaTest & Ping Identity Integration
Follow the steps below to configure the SAML-based integration between LambdaTest and Ping Identity.

### Step 1: Log in to Ping Identity
Log in to your Ping Identity account using admin credentials.

<img loading="lazy" src={require('../assets/images/sso/ping-identity/1.png').default} alt="setup sso button" className="doc_img"/>

### Step 2: Add a New Application
- Navigate to the Applications menu on the toolbar.
- Click on Add Application.
<img loading="lazy" src={require('../assets/images/sso/ping-identity/2.png').default} alt="setup sso button" className="doc_img"/>

- In the Add Application window, select Create New App to create a new application for LambdaTest SSO integration.
<img loading="lazy" src={require('../assets/images/sso/ping-identity/3.png').default} alt="setup sso button" className="doc_img"/>

### Step 3: Import Metadata File
Import the LambdaTest metadata file you downloaded earlier.

<img loading="lazy" src={require('../assets/images/sso/ping-identity/4.png').default} alt="setup sso button" className="doc_img"/>

Upon importing, Ping Identity will automatically populate the following:

- ACS URLs (Assertion Consumer Service URLs)
- Entity ID
- Save the application to proceed.

<img loading="lazy" src={require('../assets/images/sso/ping-identity/5.png').default} alt="setup sso button" className="doc_img"/>

### Step 4: Configure Attribute Mappings
- Go to the Attribute Mappings tab of the created application.
- Update the saml_object attribute value from user_ID to emailaddress.

<img loading="lazy" src={require('../assets/images/sso/ping-identity/6.png').default} alt="setup sso button" className="doc_img"/>

After completing these configurations, your LambdaTest and Ping Identity integration for SSO will be ready to use. Both SP-initiated and IdP-initiated SSO flows will be enabled, and you can manage users and groups via Ping Identity.