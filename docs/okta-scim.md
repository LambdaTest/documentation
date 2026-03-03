---
id: okta-scim
title: Okta Scim User Provisioning
hide_title: false
sidebar_label: Okta
description: Integrating TestMu AI SCIM with Okta 
keywords:
    - TestMu AI SCIM
url: https://www.testmuai.com/support/docs/scim/okta/
site_name: TestMu AI
slug: scim/okta/
canonical: https://www.testmuai.com/support/docs/scim/okta/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


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

- You will need an Enterprise plan with <BrandName />.
- SSO must be already integrated. Please complete [<BrandName /> SSO & Okta Integration](/support/docs/testmu-sso-okta-integration/)

## Integrating SCIM with Okta
**Step 1:** Sign in to your <BrandName /> account. Don't have an account, <a href="https://accounts.lambdatest.com/register" onClick={CookieTrackingSignup}>register for free</a>.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:**  Head to the **Authentication and SSO** tab and click and copy the **SCIM Base URL and Bearer Token** option.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 4:** Sign in to the [Okta](https://developer.okta.com). Select Enterprise Applications, then select Applications tab.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/applications-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 5:** In the applications list, select application used for <BrandName /> SSO setup

**Step 6:** Select the Provisioning tab.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/provisioning-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 7:** Under the Integration section, input your <BrandName /> SCIM Base URL-`https://auth.lambdatest.com/api/scim`  and Bearer Token retrieved earlier in Step 3. 

**Unique identifier field for users** field must be set to **userName**
Click Test Connection to ensure Okta can connect to <BrandName />. If the connection fails, ensure your <BrandName /> account has Admin permissions and try again.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/integration-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 8:** Now navigate to App tab
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/app-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 9:** Review the User Attribute mappings:
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/mapping-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

userName, Active, name.givenName, name.familyName are required attributes

**Creating Custom Attributes**

For creating custom attribute in Okta, go to Directory > Profile Editor > Add Attribute > [Create Custom Attribute](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-custom-user-attributes.htm)

**`urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole`**: 

**`urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:LambdatestGroup`** : Applicable only if organisation has group support active)

Enter Display Name as per your choice 
Enter Variable name as **OrganizationRole**
Enter External name as **OrganizationRole**
Enter External namespace as **urn:ietf:params:scim:schemas:extension:<BrandName />:2.0:User**
<img loading="lazy" src={require('../assets/images/sso/img_18.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>

Set the data type as **String**
Select Enum as **Yes**
Enter the values as **Admin, Guest, User**
<img loading="lazy" src={require('../assets/images/sso/img_19.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>

Also if you want to assign this attribute at a okta group level choose AttributeType as Group

<img loading="lazy" src={require('../assets/images/sso/img_20.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>

**Step 10:** To enable the Okta provisioning service for <BrandName />, set Create Users, Update User Attributes and Deactivate Users to enabled
<img loading="lazy" src={require('../assets/images/lambdatest-scim/okta/provisioning-enabled.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

## Pushing Groups from Okta

Once user provisioning is working, you can push Okta groups to <BrandName /> for automatic team, concurrency group, or sub-org assignment.

:::note Prerequisites
Group Provisioning must be enabled for your org. Contact <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> to activate it.
:::

**Step 1:** In Okta, go to your <BrandName /> application > **Push Groups** tab.

**Step 2:** Click **Push Groups** > choose **Find groups by name** or **Find groups by rule**.

**Step 3:** Search for or select the groups you want to push, then click **Save**.

**Step 4:** Okta will immediately push the group and its members to <BrandName /> via SCIM.

**Step 5:** In <BrandName />, go to **Settings** > **Organization Settings** > **SCIM Group Provisioning** to view the pushed groups and configure mappings.

### Setting Roles on Okta Groups

To assign <BrandName /> roles (Admin, User, Guest) to all members of an Okta group:

1. In your Okta app's **Push Groups** settings, the `LambdatestRoles` attribute is sent automatically if configured
2. Alternatively, set `LambdatestRoles` in the SCIM group extension: `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group`
3. The role applies to **all** members of the group. When a user is in multiple groups, the **highest** role wins (Admin > User > Guest)

### What Happens After Pushing

| Okta Action | <BrandName /> Effect |
|---|---|
| Push a group | Group created, mapping rules evaluated, members synced |
| Add member to group | Member added to all mapped <BrandName /> entities |
| Remove member from group | Member removed (if no other group maps them there), role recomputed |
| Rename group in Okta | Group renamed, mapped entity renamed to match, rules re-evaluated |
| Unlink/delete pushed group | Group soft-deleted, members safely unassigned, roles recomputed |

> For details on mapping, conflicts, and rules, see the [SCIM Provisioning guide](/support/docs/scim/#group-provisioning).

> That's all you need to know about <BrandName /> SCIM Auto User Provisioning with Okta. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmuai.com](mailto:support@testmuai.com).


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
