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
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
import VerifiedTag from '@site/src/component/verifiedTag';


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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/scim/azure/"
    },
    "headline": "Azure AD Scim User Provisioning",
    "description": "Integrating TestMu AI SCIM with Azure AD",
    "url": "https://www.testmuai.com/support/docs/scim/azure/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Setting and Security",
    "keywords": [
      "TestMu AI SCIM"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "You will need an Enterprise plan with TestMu AI.; SSO must be already integrated. Please complete TestMu AI SSO & Azure AD Integration.",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "IIF(SingleAppRoleAssignment([appRoleAssignments])=\"Admin\", \"Admin\",\nIIF(SingleAppRoleAssignment([appRoleAssignments])=\"Guest\", \"Guest\",\nIIF(SingleAppRoleAssignment([appRoleAssignments])=\"User\", \"User\", \"User\")))"
      }
    ],
    "dateModified": "2026-05-29T18:18:43+05:30"
  }) }}
/>
## Prerequisites
Integrate SCIM With <BrandName />:

* You will need an Enterprise plan with <BrandName />.
* SSO must be already integrated. Please complete [<BrandName /> SSO & Azure AD Integration](/support/docs/sso-azure-integration/)

## Integrating SCIM with Azure AD
**Step 1:** Sign in to your <BrandName /> account. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>register for free</a>.

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

<VerifiedTag value="Verified" />

```javascript
IIF(SingleAppRoleAssignment([appRoleAssignments])="Admin", "Admin",
IIF(SingleAppRoleAssignment([appRoleAssignments])="Guest", "Guest",
IIF(SingleAppRoleAssignment([appRoleAssignments])="User", "User", "User")))
```

In the above example we are using the appRoleAssignments attribute of microsoft user to set string value.

After custom attribute creation, we have to map them using “Add new mapping”

## Provisioning Groups from Azure AD

Once user provisioning is configured, you can also push Azure AD groups to <BrandName />.

:::note Prerequisites
Group Provisioning must be enabled for your org. Contact <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> to activate it.
:::

**Step 1:** In Azure portal, go to your <BrandName /> Enterprise Application > **Provisioning** > **Mappings**.

**Step 2:** Click **Provision Azure Active Directory Groups** and ensure it is **Enabled**.

**Step 3:** Review the attribute mappings. The required mappings are:
- `displayName` → `displayName`
- `members` → `members`

**Step 4:** Under **Users and groups**, assign the groups you want to provision.

**Step 5:** Start a provisioning cycle (or wait for the 40-minute auto sync).

**Step 6:** In <BrandName />, go to **Settings** > **Organization Settings** > **SCIM Group Provisioning** to view the synced groups and configure mappings.

### Setting Roles on Azure AD Groups

Azure AD sends roles via the SCIM group extension `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group`. To assign roles:

1. Create a custom attribute `LambdatestRoles` under the group schema in your Azure AD attribute mappings
2. Map it to an Azure AD attribute or set it as a constant (e.g., `User`, `Admin`, or `Guest`)
3. The role applies to **all** members of the group. Highest role wins across multiple groups (Admin > User > Guest)

### What Happens After Provisioning

| Azure AD Action | <BrandName /> Effect |
|---|---|
| Group provisioned | Group created, mapping rules evaluated, members synced |
| Member added to group | Member added to all mapped <BrandName /> entities |
| Member removed from group | Member removed (if no other group maps them there), role recomputed |
| Group renamed | Group renamed, mapped entity renamed to match, rules re-evaluated |
| Group deprovisioned | Group soft-deleted, members safely unassigned, roles recomputed |

> For details on mapping, conflicts, and rules, see the [SCIM Provisioning guide](/support/docs/scim/#group-provisioning).

---

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
