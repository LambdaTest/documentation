---
id: lambdatest-sso-okta-integration
title: TestMu AI SSO & Okta Integration
hide_title: false
sidebar_label: Okta
description: TestMu AI allows you to integrate an external user directory with your TestMu AI Organization through an IDP so your team could leverage the Single Sign-on setup. This document will help you integrate your TestMu AI organization with your Okta directory.
keywords:
  - sso
  - testmu ai sso
  - okta
  - testmu ai okta integration
  - testmu ai okta sso
url: https://www.testmu.ai/support/docs/testmu-sso-okta-integration
site_name: LambdaTest
slug: testmu-sso-okta-integration
---

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SSO Okta Integration",
          "item": "https://www.lambdatest.com/support/docs/testmu-sso-okta-integration/"
        }
      ]
    })
  }}
></script>
<BrandName /> allows you to integrate an external user directory with your <BrandName /> Organization through an IDP so your team could leverage the Single Sign-on setup. With Okta, you can integrate your <BrandName /> organization in two ways i.e. through the Dev Console or the SAML.

After you integrate your Okta instance with your <BrandName /> for Single Sign-on, you can benefit from the following features:
* SP-initiated SSO.
* IdP-initiated SSO.

To know more, refer to <a href="https://help.okta.com/en/prod/Content/Topics/Reference/glossary.htm">Okta's glossary</a>.

## Prerequisites
To enable <BrandName /> SSO through Okta integration:

* You will need an Enterprise plan with <BrandName />.
* The Admin of your <BrandName /> organization needs to raise a request for enabling SSO Self Serve UI. They could drop us an email over <a href="mailto:support@lambdatest.com">support@lambdatest.com</a> or could reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in app chat support**</span>.
* You will also need the admin level access of Okta  to configure the SSO.

## Configuring <BrandName /> & Okta Integration Using SAML

1. Go to <BrandName /> <a href="https://accounts.lambdatest.com/auth/sso">Authentication & SSO settings</a> and click on **Setup SSO**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/setup-sso.png').default} alt="setup sso button" width="944" height="409" className="doc_img"/>

2. Enter Connection Name and Click on  **Add New Connection**.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/connection-name.png').default} alt="connection name button" width="944" height="409" className="doc_img"/>

3. Select **Okta** as your identity provider.
   <img loading="lazy" src={require('../assets/images/sso-self-serve/select-idp.png').default} alt="select identity provider" width="944" height="407" className="doc_img"/>

4. Now copy the details required for setting up SSO connection in your **Identity Provider**.
   Once configured, click on continue
   <img loading="lazy" src={require('../assets/images/sso-self-serve/copy-info.png').default} alt="configure IDP details" width="945" height="542" className="doc_img"/>

5. Now Configure the Attributes and Claims in your **Identity Provider**.
   Once configured, click on continue
   <img loading="lazy" src={require('../assets/images/sso-self-serve/attributes.png').default} alt="configure attributes" width="945" height="542" className="doc_img"/>

6. Login to your okta account. 
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-7.webp').default} alt="okta integration" width="944" height="487" className="doc_img"/>

7. Go to Application menu from the toolbar and click on **Create App Integration**.
<img loading="lazy" src={require('../assets/images/sso/img.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
8. Select the **SAML 2.0** option and click on **Next**.
<img loading="lazy" src={require('../assets/images/sso/img_1.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
9. Give the created app a name of your choice, in the **App Name** box, and click Next.
<img loading="lazy" src={require('../assets/images/sso/img_2.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
10. Fill in the details as per in step 4 and step 5 and then click Next.
<img loading="lazy" src={require('../assets/images/sso/img_7.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
12. Set the Attribute Statements as per the image below and click Next.
<img loading="lazy" src={require('../assets/images/sso-self-serve/okta-claims.png').default} alt="oktra integration" width="944" height="670" className="doc_img"/>
13. In the next window of this Okta SAML integration, choose App Type as **This is an internal app that we have created**, as shown in the image below, and then click on **Finish** to complete the app creation.
<img loading="lazy" src={require('../assets/images/sso/img_8.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
14. Once the app is created, you will be redirected to the app's general settings. Click on the **Sign On** tab. Copy the Metadata URL and paste it in the <BrandName /> SSO setup page.
<img loading="lazy" src={require('../assets/images/sso/img_9.png').default} alt="okta integration" width="944" height="487" className="doc_img"/>
15. Fill the required fields  and click on **Create Connection**:

* SSO Domains (Comma-separated list of the domains that can be authenticated in the Identity Provider.)
* Have Metadata URL (Select this option if you have metadata file URL of your Identity Provider.)
* Metadata URL (Enter the metadata file URL of your Identity Provider.)
* Sign In URL (Enter the sign-in URL of your Identity Provider.)
* X509 Certificate (Upload the base64 encoded X509 certificate of your Identity Provider.)

<h4>Create Connection with Metadata URL </h4>
<img loading="lazy" src={require('../assets/images/sso-self-serve/finalize-sso-metadata.png').default} alt="sso-self serve" width="945" height="542" className="doc_img"/>

> That's all you need to know for Configuring <BrandName /> SSO Integration with Okta. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).


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
