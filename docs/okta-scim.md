---
id: okta-scim
title: Okta Scim User Provisioning
hide_title: true
sidebar_label: Okta
description: Integrating LambdaTest SCIM with Okta 
keywords:
    - LambdaTest SCIM
url: https://www.lambdatest.com/support/docs/scim/okta/
site_name: LambdaTest
slug: scim/okta/
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
          "name": "Scim",
          "item": "https://www.lambdatest.com/support/docs/scim/"
        }]
      })
    }}
></script>




#   LambdaTest SCIM Auto User Provisioning with Okta

* * *
## Prerequisites ##
---
Integrate SCIM With LambdaTest:

* You will need an Enterprise plan with LambdaTest.
* SSO must be already integrated. Please complete [LambdaTest SSO & Okta Integration](/support/docs/lambdatest-sso-okta-integration/)

## Integrating SCIM with Okta
**Step 1:** Sign in to your LambdaTest account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:**  Head to the **Authentication and SSO** tab and click and copy the **SCIM Base URL and Bearer Token** option.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 4:** Sign in to the [Okta](https://developer.okta.com). Select Enterprise Applications, then select Applications tab.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/applications-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 5:** In the applications list, select application used for LambdaTest SSO setup

**Step 6:** Select the Provisioning tab.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/provisioning-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 7:** Under the Integration section, input your LambdaTest SCIM Base URL-`https://auth.lambdatest.com/api/scim`  and Bearer Token retrieved earlier in Step 3. 

**Unique identifier field for users** field must be set to **userName**
Click Test Connection to ensure Okta can connect to LambdaTest. If the connection fails, ensure your LambdaTest account has Admin permissions and try again.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/integration-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 8:** Now navigate to App tab
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/app-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 9:** Review the User Attribute mappings:
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/mapping-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

userName, Active, name.givenName, name.familyName are required attributes

**urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole**: Custom attribute used to set LambdaTest Organization Role for Users, If this attribute is not mapped **User** role would be set by default. Allowed values are (Admin/Guest/User)


**Step 10:** To enable the Okta provisioning service for LambdaTest, set Create Users, Update User Attributes and Deactivate Users to enabled
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/provisioning-enabled.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

> That's all you need to know about LambdaTest SCIM Auto User Provisioning with Okta. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).


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