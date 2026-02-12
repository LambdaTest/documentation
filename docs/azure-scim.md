---
id: azure-scim
title: Azure AD Scim User Provisioning
hide_title: false
sidebar_label: Azure AD
description: Integrating TestMu AI SCIM with Azure AD 
keywords:
    - TestMu AI SCIM
url: https://www.testmuai.com/support/docs/scim/azure/
site_name: TestMu AI
slug: scim/azure/
canonical: https://www.testmuai.com/support/docs/scim/azure/
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
          "name": "Scim",
          "item": `${BRAND_URL}/support/docs/scim/`
        }]
      })
    }}
></script>
## Prerequisites
Integrate SCIM With <BrandName />:

* You will need an Enterprise plan with <BrandName />.
* SSO must be already integrated. Please complete [<BrandName /> SSO & Azure AD Integration](/support/docs/sso-azure-integration/)

## Integrating SCIM with Azure AD
**Step 1:** Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:**  Head to the **Authentication and SSO** tab and click and copy the **SCIM Base URL and Bearer Token** option.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 4:** Sign in to the [Azure portal](https://portal.azure.com). Select Enterprise Applications, then select All applications.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/enterprise-applications.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 5:** In the applications list, select application used for <BrandName /> SSO setup
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/search-lambdatest-sso.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 6:** Select the Provisioning tab.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/provisioning-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


**Step 7:** Under the Admin Credentials section, input your <BrandName /> SCIM Base URL `https://auth.lambdatest.com/api/scim?aadOptscim062020`  and Bearer Token retrieved earlier in Step 3. Click Test Connection to ensure Azure AD can connect to <BrandName />. If the connection fails, ensure your <BrandName /> account has Admin permissions and try again.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/credentials.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 8:** Under the Mappings section, select Synchronize Azure Active Directory Users.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/mapping-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 9:** Creating Custom Attributes

- Show advanced options > Edit attribute list for customappsso > Add attributes
- userName, Active, name.givenName, name.familyName are required attributes

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/userName.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>
 
- **`urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole`**: Custom attribute used to set <BrandName /> Organization Role for Users, If this attribute is not mapped User role would be set by default. Allowed values are (Admin/Guest/User)

- **`urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:LambdatestGroup`**: Used to assign an existing group in TestMu AI to a new user created in TestMu AI through SCIM. (Applicable only if organisation has group support active)

For filtering only **userName** attribute is supported and must be selected for filtering, click edit on userPrincipalName and make sure **Apply this mapping** is set to **Always**

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/attribute-mapping.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

- **Dynamic/Static assignment of custom attributes**: After custom attribute creation, we have to map them using “Add new mapping”

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/dynamic_1.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/dynamic_2.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


Now there are three types Mapping type in AzureAD, “Direct”, “Constant” and “Expression”.


For example we can set Constant association “Guest” for `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole`

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/dynamic_3.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

Or, can create association using the Expression like this ,

```javascript
IIF(SingleAppRoleAssignment([appRoleAssignments])="Admin", "Admin",
IIF(SingleAppRoleAssignment([appRoleAssignments])="Guest", "Guest",
IIF(SingleAppRoleAssignment([appRoleAssignments])="User", "User", "User")))
```

In the above example we are using the appRoleAssignments attribute of microsoft user to set string value.

After custom attribute creation, we have to map them using “Add new mapping”

**Step 10:** To enable the Azure AD provisioning service for <BrandName />, change the Provisioning Status to On in the Settings section.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/provisioning-on.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 11:** When you are ready to provision, click Save.

This operation starts the initial synchronization cycle of all users in Scope in the Settings section. The initial cycle takes longer to perform than subsequent cycles, which occur approximately every 40 minutes as long as the Azure AD provisioning service is running.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/save.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


> That's all you need to know about <BrandName /> SCIM Auto User Provisioning with Azure AD.In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmuai.com](mailto:support@testmuai.com).


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
        Single Sign On
      </span>
    </li>
  </ul>
</nav>
