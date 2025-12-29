---
id: sso-azure-integration
title: TestMu AI SSO & Azure AD Integration
hide_title: true
sidebar_label: Azure AD Integration
description: This document will help you integrate your TestMu AI organization with your Azure AD directory to configure a Single sign-on for your organization.  
keywords:
    - TestMu AI single sign on
    - TestMu AI SSO
    - TestMu AI Azure AD Integration
url: https://www.lambdatest.com/support/docs/sso-azure-integration/
site_name: LambdaTest
slug: sso-azure-integration/
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
          "name": "Azure AD Integration",
          "item": "https://www.lambdatest.com/support/docs/sso-azure-integration/"
        }]
      })
    }}
></script>

# LambdaTest SSO & Azure AD Integration

* * *

LambdaTest allows you to integrate an external user directory with your LambdaTest Organization through an IDP so your team could leverage the Single Sign-on setup. This document will help you integrate your LambdaTest organization with your Azure AD directory to configure SSO(Single sign-on). After you integrate your Azure AD instance with your LambdaTest for Single Sign-on, you can benefit from the following features:

*   Monitor who access to LambdaTest
*   Manage your account in Azure Active Directory.
*   Sign-in directly to the LambdaTest with Azure AD credentials.

To know more, refer [How SSO is implemented in Azure](https://docs.microsoft.com/azure/active-directory/active-directory-appssoaccess-whatis).

## Prerequisites

* * *

To enable LambdaTest SSO through Azure AD integration, you will need:

*   Azure AD Subscription. If you haven't subscribed, you can subscribe by creating a [free Azure account](https://azure.microsoft.com/en-us/free/).
*   An Enterprise plan with LambdaTest.
*   The Admin of your LambdaTest organization needs to raise a request for enabling SSO. They could drop us an email over [support@lambdatest.com](mailto:support@lambdatest.com) or could reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in-app chat support**</span>.
*   The Admin level access to your LambdaTest organization.
*   The Admin level access of your organization in Azure AD.

## How To Configure LambdaTest & Azure AD Integration

* * *

**Step 1:** To begin, you will need to login with your [Microsoft Azure](https://portal.azure.com/#home) account.

**Step 2:** Navigate to **Manage Azure Active Directory**.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/manage-azure-active-1.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1511" height="843"/>

**Step 3:** Select the **Enterprise Application** from the left sidebar.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/enterprise-application-1.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1667" height="629"/>

**Step 4:** Click on **New Application**.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/new-application-2.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1173" height="635"/>

**Step 5:** Then click on **Create your own application**.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/create-app-1.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1174" height="655"/>

**Step 6:** Now navigate back to the Enterprise applications category. Select the application that you just created and then click on **Set up single sign on**.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/set-up-sso-1.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1173" height="643"/>

**Step 7:** Go to LambdaTest <a href="https://accounts.lambdatest.com/auth/sso">Authentication & SSO settings</a> and click on **Setup SSO**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/setup-sso.png').default} alt="setup sso button" width="944" height="409" className="doc_img"/>

**Step 8:**  Enter Connection Name and Click on  **Add New Connection**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/connection-name.png').default} alt="connection name button" width="944" height="409" className="doc_img"/>

**Step 9:** Select **Azure AD** from the list of Identity Providers.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/select-idp.png').default} alt="select identity provider" width="944" height="407" className="doc_img"/>

**Step 10:** Now copy the details required for setting up SSO connection in your **Identity Provider**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/copy-info.png').default} alt="configure IDP details" width="945" height="542" className="doc_img"/>

**Step 11:** Click on **Basic SAML Configuration**. Enter your SSO identifier ID and Reply URL information that you copied from LambdaTest SSO setup page and click on **Save**.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/basic-saml-1-1.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1173" height="644"/>

**Step 12:** Copy the App Federation Metadata URL and paste it in the **Metadata URL** field in the LambdaTest SSO setup page.

<img loading="lazy" src={require('../assets/images/uploads/azure-metadata-url.png').default} alt="azure integration with lambdatest"  className="doc_img" width="1173" height="644"/>

**Step 13:** Fill the required fields  and click on **Create Connection**:

* SSO Domains (Comma-separated list of the domains that can be authenticated in the Identity Provider.)
* Have Metadata URL (Select this option if you have metadata file URL of your Identity Provider.)
* Metadata URL (Enter the metadata file URL of your Identity Provider.)
<h4>Create Connection with Metadata URL </h4>
<img loading="lazy" src={require('../assets/images/sso-self-serve/finalize-sso-metadata.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

**Step 14:** Once the connection is created, you will be redirected to the SSO settings page. From here you can <a href="/support/docs/lambdatest-sso-manage-connection/">Manage SSO Connection</a>.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/edit-connection.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>


> That’s all you need to know LambdaTest and Azure AD integration. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).

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
        Azure AD Integration
      </span>
    </li>
  </ul>
</nav>
