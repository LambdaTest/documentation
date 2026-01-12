---
id: single-sign-on
title: Getting Started With Single Sign On (SSO)
hide_title: true
sidebar_label: Getting Started
description: Single sign-on (SSO) is an authentication feature that allows users to authenticate and access to LambdaTest through an identity provider (IdP).  
keywords:
    - LambdaTest single sign on
    - LambdaTest single sign-on
    - LambdaTest SSO
url: https://www.lambdatest.com/support/docs/single-sign-on/
site_name: LambdaTest
slug: single-sign-on/
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
          "name": "Single Sign On",
          "item": "https://www.lambdatest.com/support/docs/single-sign-on/"
        }]
      })
    }}
></script>




# Getting Started With Single Sign On (SSO)

* * *

Single sign-on is an authentication feature that allows you to access multiple applications with one set of login credentials. Once you log in, you don't need to login repeatedly for every application linked to a particular application. LambdaTest supports Security Assertion Markup Language (SAML) that allows you to create a team account and authenticate to the LambdaTest dashboard with Identity Provider (IdP).

> SSO is supported in our Enterprise Plans. Please reach out to your account manager or [support@lambdatest.com](mailto:support@lambdatest.com) for questions.

## Benefits Of Authenticating Single Sign On (SSO)

* * *

Here are the following benefits of authenticating a Single sign-on to the LambdaTest dashboard.

*   **Security Enhancements**: Your team members can access the LambdaTest dashboard directly without creating a password. Also, you can leverage several authentication decisions provided by an identity provider(IdP) like security protocols, multi-factor authentication, etc.

*   **Easy to manage**: SSO consolidates passwords and user data, making it easier to access different platforms and resources. New team members can leverage Just-in-Time account provisioning to leverage login to the LambdaTest dashboard instantly. Also, with Just-in-Time (JIT), you can revoke LambdaTest dashboard access from one central place.

## Feature Of Single Sign On (SSO)

* * *

LambdaTest provides the support for the below Single sign-on features.

*   **Configure SSO**: You can configure SSO through multiple options. You can set up LambdaTest accounts to enable SSO for all team members or enable sign-in using SSO or by email and password.

*   **Just-in-Time Provisioning**: Just-in-Time provisioning automates user account creation when the user first tries to perform SSO and the user doesn't have an existing LambdaTest account.

*   **Identity provider(IdP-initiated) SSO**: You can directly authenticate with identify service provider like Okta, OneLogin, Azure AD. You need to ensure that the identity provider supports the Service Provider(SP-initiated) SSO.

## Enable LambdaTest SSO
***

**Step 1:** Sign in to your LambdaTest account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/new-dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Click on the **User Icon** on the top right and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings-new.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:**  Head to the **Security** tab and click the **SSO** option.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sso-setup.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


> That's all you need to know about Single sign-on(SSO) authentication feature.In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).


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
        Single Sign On
      </span>
    </li>
  </ul>
</nav>