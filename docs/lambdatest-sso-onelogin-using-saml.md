---
id: lambdatest-sso-onelogin-using-saml
title: LambdaTest SSO & OneLogin Using SAML
hide_title: true
sidebar_label: OneLogin
description: Now integrate your OneLogin user directory with your LambdaTest organization subscription through an IDP, so that your team could leverage the SSO setup.
keywords:
  - sso
  - lambdatest sso
  - onelogin
  - saml
  - lambdatest onelogin integration
  - lambdatest onelogin sso
url: https://www.lambdatest.com/support/docs/lambdatest-sso-onelogin-using-saml/
site_name: LambdaTest
slug: lambdatest-sso-onelogin-using-saml/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "OneLogin Integration",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-sso-onelogin-using-saml/"
        }]
      })
    }}
></script>

# LambdaTest SSO & OneLogin Using SAML

* * *

LambdaTest allows you to integrate an external user directory with your LambdaTest Organization through an IDP so that your team could leverage the Single Sign-on setup. This document will help you integrate your LambdaTest organization with your OneLogin identity provider to configure SSO(Single sign-on).

## Prerequisites

* * *

To set-up and use OneLogin & LambdaTest Single Sign-on (SSO) feature:

*   An Enterprise plan with LambdaTest. ( Learn how to [manage your subscriptions](/docs/manage-subscriptions/). )
*   The Admin level access to your LambdaTest organization.
*   The Admin level access of your organization’s OneLogin instance

## Configure LambdaTest SSO & OneLogin Integration

* * *

>
**Important Note**: Once SSO is setup successfully for your LambdaTest organization then the colleagues would neither be able to login via their Google Auth nor by using login credentials for their LambdaTest account. Email invites for adding new members to the LambdaTest organization, won't work anymore as well.

Follow the below steps to configure LambdaTest SSO & OneLogin Integration

### Step 1: Add LambdaTest App to your enterprise's OneLogin SSO page

* * *

To configure the LambdaTest SSO and OneLogin Integration, the organization's admin must log into the OneLogin Identity Provider’s SSO page and then follow the below steps to complete the integration:

1.  Log in to the [OneLogin Dashboard](https://app.onelogin.com/login). 

<img loading="lazy" src={require('../assets/images/uploads/12cdf52a-e33f-41b1-ac1a-31171a542b1f.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="494"/>
2.  Go to Applications 

<img loading="lazy" src={require('../assets/images/uploads/8d4b7e47-e9c1-454d-9df2-e9c127965aa9.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="460"/>
3.  Add a new Application, by clicking on Add App. 

<img loading="lazy" src={require('../assets/images/uploads/9face4b3-94c8-4e53-a03b-0b74c3cfb0c2.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="492"/>
4.  Search for SAML Test Connector and select **Add SAML Test Connector (Advanced)** 

<img loading="lazy" src={require('../assets/images/uploads/4f1de915-1d55-4169-a90a-ea1f00e46862.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="942" height="488"/>
5.  In the window that appears, choose a suitable name for your app, and **save**. 

<img loading="lazy" src={require('../assets/images/uploads/d9b4d2bc-600c-4093-b76b-04050227732f.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="493"/>

### Step 2: Integrate the newly created app with LambdaTest SSO

* * *

Your enterprise SSO account will be created at OneLogin. Now to enable this SSO at LambdaTest, you need to fetch the below details and pass it on to the LambdaTest team.

1.   Go to the SSO tab, and after you choose _SAML Signature Algorithm_ to **SHA-256**, copy the values for **SAML 2.0 Endpoint (HTTP)** and **SLO Endpoint (HTTP). Once done, click on Save.** 

<img loading="lazy" src={require('../assets/images/uploads/fdd6893b-40ea-451a-9abb-de83579756d4.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="589"/>

2.    Now, click on the **View Details** link at the **X.509 certificate** field. 

<img loading="lazy" src={require('../assets/images/uploads/fbfd2747-d702-4a81-812d-98911e91b679.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="391"/>

3.   In the window that opens, make sure the SHA fingerprint is SHA256, and download the X.509 certificate as a _.pem_ file. Once done, click on Save. 

<img loading="lazy" src={require('../assets/images/uploads/f71b4398-0917-4c84-a762-5dc0fceb1369.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="546"/>

4. Now Click on the Parameters tab and set the user attributes to the following values:
<img loading="lazy" src={require('../assets/images/sso-self-serve/onelogin-claims.png').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="546"/>

### Step 3: Authenticate and complete LambdaTest SSO & OneLogin integration

* * *

Upon reviewing the data, the LambdaTest team will revert you with details of your LambdaTest SSO & OneLogin integration. Once you receive the details:

1.   Re-login to your enterprise's OneLogin dashboard, and go to applications. 

<img loading="lazy" src={require('../assets/images/uploads/65cd0ab0-b882-4534-a020-32d1612fa17e.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="460"/>

2.   Choose the previously created app (created in Step 1). 

<img loading="lazy" src={require('../assets/images/uploads/ce007004-3511-4d69-857b-c186cc374376.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="145"/>

3.   In the window that appears, go to **Configurations** tab, and update the details received. 

<img loading="lazy" src={require('../assets/images/uploads/f5300281-2902-4e75-8c5e-abfdf00fe7b0.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="467"/> For example, below are sample details to be updated in the Configurations section:

    ```Audience (EntityID): 	urn:auth0:{tenantID}:{ConnectionName}
    Recipient: 		https://{tenantID}.us.auth0.com/login/callback?connection={ConnectionName}
    ACS (Consumer) URL Validator: [-a-zA-Z0-9@:%.+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]*)
    ACS (Consumer) URL: 	https://{tenantID}.us.auth0.com/login/callback?connection={ConnectionName}
    Login URL: 		https://accounts.lambdatest.com/auth0/{version}/login
    SAML initiator: 	Service Provider
    SAML nameID format: 	Email
    SAML issuer type: 	Specific
    SAML signature element: Response
    Encrypt assertion: 	false (unchecked)
    

* * *


>
That's it. Your enterprise's LambdaTest SSO and OneLogin has been integrated successfully. If you face any challenge, or come across any issues, please feel free to contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**Support Team**</span>. You can even mail us at [support@lambdatest.com](mailto:support@lambdatest.com). Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        OneLogin Integration
      </span>
    </li>
  </ul>
</nav>