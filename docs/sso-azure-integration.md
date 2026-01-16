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
url: https://www.testmu.ai/support/docs/sso-azure-integration/
site_name: LambdaTest
slug: sso-azure-integration
canonical: https://www.testmu.ai/support/docs/sso-azure-integration/
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
          "name": "Azure AD Integration",
          "item": `${BRAND_URL}/support/docs/sso-azure-integration/`
        }]
      })
    }}
></script>

# <BrandName /> SSO & Azure AD Integration

* * *

<BrandName /> allows you to integrate an external user directory with your <BrandName /> Organization through an IDP so your team could leverage the Single Sign-on setup. This document will help you integrate your <BrandName /> organization with your Azure AD directory to configure SSO(Single sign-on). After you integrate your Azure AD instance with your <BrandName /> for Single Sign-on, you can benefit from the following features:

*   Monitor who access to <BrandName />
*   Manage your account in Azure Active Directory.
*   Sign-in directly to the <BrandName /> with Azure AD credentials.

To know more, refer [How SSO is implemented in Azure](https://docs.microsoft.com/azure/active-directory/active-directory-appssoaccess-whatis).

## Prerequisites

* * *

To enable <BrandName /> SSO through Azure AD integration, you will need:

*   Azure AD Subscription. If you haven't subscribed, you can subscribe by creating a [free Azure account](https://azure.microsoft.com/en-us/free/).
*   An Enterprise plan with <BrandName />.
*   The Admin of your <BrandName /> organization needs to raise a request for enabling SSO. They could drop us an email over [support@testmu.ai](mailto:support@testmu.ai) or could reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in-app chat support**</span>.
*   The Admin level access to your <BrandName /> organization.
*   The Admin level access of your organization in Azure AD.

## How To Configure <BrandName /> & Azure AD Integration

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

**Step 7:** Go to <BrandName /> <a href="https://accounts.lambdatest.com/auth/sso">Authentication & SSO settings</a> and click on **Setup SSO**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/setup-sso.png').default} alt="setup sso button" width="944" height="409" className="doc_img"/>

**Step 8:**  Enter Connection Name and Click on  **Add New Connection**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/connection-name.png').default} alt="connection name button" width="944" height="409" className="doc_img"/>

**Step 9:** Select **Azure AD** from the list of Identity Providers.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/select-idp.png').default} alt="select identity provider" width="944" height="407" className="doc_img"/>

**Step 10:** Now copy the details required for setting up SSO connection in your **Identity Provider**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/copy-info.png').default} alt="configure IDP details" width="945" height="542" className="doc_img"/>

**Step 11:** Click on **Basic SAML Configuration**. Enter your SSO identifier ID and Reply URL information that you copied from <BrandName /> SSO setup page and click on **Save**.

<img loading="lazy" src={require('../assets/images/sso-azure-integration/basic-saml-1-1.webp').default} alt="azure integration with lambdatest"  className="doc_img" width="1173" height="644"/>

**Step 12:** Copy the App Federation Metadata URL and paste it in the **Metadata URL** field in the <BrandName /> SSO setup page.

<img loading="lazy" src={require('../assets/images/uploads/azure-metadata-url.png').default} alt="azure integration with lambdatest"  className="doc_img" width="1173" height="644"/>

**Step 13:** Fill the required fields  and click on **Create Connection**:

* SSO Domains (Comma-separated list of the domains that can be authenticated in the Identity Provider.)
* Have Metadata URL (Select this option if you have metadata file URL of your Identity Provider.)
* Metadata URL (Enter the metadata file URL of your Identity Provider.)
<h4>Create Connection with Metadata URL </h4>
<img loading="lazy" src={require('../assets/images/sso-self-serve/finalize-sso-metadata.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

**Step 14:** Once the connection is created, you will be redirected to the SSO settings page. From here you can <a href="/support/docs/lambdatest-sso-manage-connection/">Manage SSO Connection</a>.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/edit-connection.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>


> That’s all you need to know <BrandName /> and Azure AD integration. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmu.ai](mailto:support@testmu.ai).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
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
