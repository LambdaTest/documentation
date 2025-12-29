---
id: lambdatest-sso-onelogin-using-saml
title: TestMu AI SSO & OneLogin Using SAML
hide_title: true
sidebar_label: OneLogin
description: Now integrate your OneLogin user directory with your TestMu AI organization subscription through an IDP, so that your team could leverage the SSO setup.
keywords:
  - sso
  - testmu ai sso
  - onelogin
  - saml
  - testmu ai onelogin integration
  - testmu ai onelogin sso
url: https://www.testmu.ai/support/docs/testmu-sso-onelogin-using-saml
site_name: LambdaTest
slug: testmu-sso-onelogin-using-saml
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

1. Go to LambdaTest <a href="https://accounts.lambdatest.com/auth/sso">Authentication & SSO settings</a> and click on **Setup SSO**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/setup-sso.png').default} alt="setup sso button" width="944" height="409" className="doc_img"/>

2. Enter Connection Name and Click on  **Add New Connection**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/connection-name.png').default} alt="connection name button" width="944" height="409" className="doc_img"/>

3. Select **OneLogin** as your identity provider.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/select-idp.png').default} alt="select identity provider" width="944" height="407" className="doc_img"/>

4. Now copy the details required for setting up SSO connection in your **Identity Provider**.
   Once configured, click on continue
   <img loading="lazy" src={require('../assets/images/sso/img_10.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
5. Now Configure the Attributes and Claims in your **Identity Provider**.
   Once configured, click on continue
   <img loading="lazy" src={require('../assets/images/sso/img_11.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>

6. Log in to the [OneLogin Dashboard](https://app.onelogin.com/login). 

<img loading="lazy" src={require('../assets/images/uploads/12cdf52a-e33f-41b1-ac1a-31171a542b1f.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="494"/>
7. Go to Applications 

<img loading="lazy" src={require('../assets/images/uploads/8d4b7e47-e9c1-454d-9df2-e9c127965aa9.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="460"/>
8. Add a new Application, by clicking on Add App. 

<img loading="lazy" src={require('../assets/images/uploads/9face4b3-94c8-4e53-a03b-0b74c3cfb0c2.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="492"/>
9. Search for SAML Test Connector and select **Add SAML Test Connector (Advanced)** 

<img loading="lazy" src={require('../assets/images/uploads/4f1de915-1d55-4169-a90a-ea1f00e46862.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="942" height="488"/>
10. In the window that appears, choose a suitable name for your app, and **save**. 

<img loading="lazy" src={require('../assets/images/uploads/d9b4d2bc-600c-4093-b76b-04050227732f.webp').default} alt="lambdatest onlogin integration"  className="doc_img" width="943" height="493"/>

11. Click on configurations tab in the sidebar and fill the details as per the details copied from LambdaTest in step 4.
    <img loading="lazy" src={require('../assets/images/sso/img_12.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>


12. Click on the parameters tab and fill the details as per the details copied from LambdaTest in step 5.
    <img loading="lazy" src={require('../assets/images/sso/img_13.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>


13. Now go to the SSO tab set the SAML Signature Algorithm to SHA-256
    <img loading="lazy" src={require('../assets/images/sso/img_16.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>


14. Copy the Issuer URL 

<img loading="lazy" src={require('../assets/images/sso/img_17.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>

15. Go back to LambdaTest and paste the copied Issuer URL in the **Metadata URL** field. Fill the required fields  and click on **Create Connection**:

* SSO Domains (Comma-separated list of the domains that can be authenticated in the Identity Provider.)
* Have Metadata URL (Select this option if you have metadata file URL of your Identity Provider.)
* Metadata URL (Enter the metadata URL of your Identity Provider.)

<img loading="lazy" src={require('../assets/images/sso-self-serve/finalize-sso-metadata.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

> That's it. Your enterprise's LambdaTest SSO and OneLogin has been integrated successfully. If you face any challenge, or come across any issues, please feel free to contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**Support Team**</span>. You can even mail us at [support@lambdatest.com](mailto:support@lambdatest.com). Happy Testing!

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
