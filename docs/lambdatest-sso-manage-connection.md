---
id: lambdatest-sso-manage-connection
title: Manage SSO Connection
hide_title: false
sidebar_label: Manage SSO Connection
description: This document will help you set up and manage your TestMu AI SSO connection. 
keywords:
- sso
- TestMu AI SSO
- Update SSO
- Manage SSO
- Enforce SSO
- SSO Self Serve
- Exempt SSO Login
url: https://www.testmuai.com/support/docs/testmu-sso-manage-connection/
site_name: TestMu AI
slug: testmu-sso-manage-connection/
canonical: https://www.testmuai.com/support/docs/testmu-sso-manage-connection/
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
          "name": "SSO Self Serve",
          "item": `${BRAND_URL}/support/docs/testmu-sso-self-serve`
        }]
      })
    }}
></script>
Before proceeding you need to navigate to <a href="https://accounts.lambdatest.com/auth/sso">SSO Section</a> in the **Security** tab of **Organization Settings**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/edit-connection.png').default} alt="setup sso button" width="944" height="409" className="doc_img"/>


### Reconfigure SSO Connection
1. For Updating the SSO connection, click on **Reconfigure**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/reconfigure.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>
2. Update the  fields you need to change  and click on **Update Connection**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/update.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>


### Enforce SSO Login (Forcing Users to Log in with SSO Only)
1. For Enforcing SSO login, click on **Enforce SSO Login** Toggle.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/enforce-sso.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

### Exempt Users From SSO Login
1. For Exempting users from SSO login (Allows Users to Log in with <BrandName /> Credentials and Social Auth), click on **SSO User Settings**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/exempt-users.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

2. Check the toggle for the users you want to exempt from SSO login
   <img loading="lazy" src={require('../assets/images/sso-self-serve/exempt-users-toggle.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

That's all you need to know for Managing <BrandName /> SSO Integration. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmu.ai](mailto:support@testmu.ai).

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
        SSO Okta Integration
      </span>
    </li>
  </ul>
</nav>
