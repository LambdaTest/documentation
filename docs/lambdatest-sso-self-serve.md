---
id: lambdatest-sso-self-serve
title: Create SSO Connection With LambdaTest
hide_title: false
sidebar_label: Create SSO Connection
description: LambdaTest allows you to integrate an external user directory with your LambdaTest Organization through an IDP so your team could leverage the Single Sign-on setup. This document will help you set up  your LambdaTest SSO connection.
keywords:
  - sso
  - LambdaTest SSO
  - Create SSO
  - SSO Self Serve
url: https://www.lambdatest.com/support/docs/lambdatest-sso-self-serve/
site_name: LambdaTest
slug: lambdatest-sso-self-serve/
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
          "name": "SSO Self Serve",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-sso-self-serve"
        }]
      })
    }}
></script>
LambdaTest allows you to integrate an external user directory with your LambdaTest Organization through an IDP so your team could leverage the Single Sign-on setup using SAML.

LambdaTest SSO supports the following:
* SP-initiated SSO.
* IdP-initiated SSO.
* JIT (Just In Time) Provisioning.

## Prerequisites ##
---
Create SSO Connection With LambdaTest:

* You will need an Enterprise plan with LambdaTest.
* The Admin of your LambdaTest organization needs to raise a request for enabling SSO Self Serve UI. They could drop us an email over <a href="mailto:support@lambdatest.com">support@lambdatest.com</a> or could reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in app chat support**</span>.
* You will also need the admin level access of OneLogin to configure the SSO.

## Configuring LambdaTest SSO Integration Using SAML
---
1. Go to <a href="https://accounts.lambdatest.com/auth/sso">SSO Section</a> in the **Security** tab of **Organization Settings** and click on **Setup SSO**.
<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sso-setup.webp').default} alt="setup sso button" width="944" height="409" className="doc_img"/> 

2. Enter Connection Name and Click on  **Add New Connection**.
<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sso-firs-step.webp').default} alt="connection name button" width="944" height="409" className="doc_img"/> 

3. Select your **Identity Provider**.
<img loading="lazy" src={require('../assets/images/sso-self-serve/select-idp.png').default} alt="select identity provider" width="944" height="407" className="doc_img"/>

4. Now copy the details required for setting up SSO connection in your **Identity Provider**.
Once configured, click on continue
<img loading="lazy" src={require('../assets/images/sso-self-serve/copy-info.png').default} alt="configure IDP details" width="945" height="542" className="doc_img"/>

5. Now Configure the Attributes and Claims in your **Identity Provider**.
Once configured, click on continue
<img loading="lazy" src={require('../assets/images/sso-self-serve/attributes.png').default} alt="configure attributes" width="945" height="542" className="doc_img"/>

6. Fill the required fields  and click on **Create Connection**:

* SSO Domains (Comma-separated list of the domains that can be authenticated in the Identity Provider.) 
* Have Metadata URL (Select this option if you have metadata file URL of your Identity Provider.)
* Metadata URL (Enter the metadata URL of your Identity Provider.)
* Sign In URL (Enter the sign-in URL of your Identity Provider.)
* X509 Certificate (Upload the base64 encoded X509 certificate of your Identity Provider.)

<h4>Create Connection with Metadata URL </h4>
<img loading="lazy" src={require('../assets/images/sso-self-serve/finalize-sso-metadata.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>
<h4>Create Connection without Metadata URL </h4>
<img loading="lazy" src={require('../assets/images/sso-self-serve/finalize-without-metadata.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

7. Once the connection is created, you will be redirected to the SSO settings page. From here you can <a href="/support/docs/lambdatest-sso-manage-connection">Manage SSO Connection</a>.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/edit-connection.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>


That's all you need to know for Configuring LambdaTest SSO Integration Using SAML. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).

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
        SSO Okta Integration
      </span>
    </li>
  </ul>
</nav>