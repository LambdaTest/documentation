---
id: lambdatest-sso-okta-integration
title: LambdaTest SSO & Okta Integration
hide_title: true
sidebar_label: Okta
description: LambdaTest allows you to integrate an external user directory with your LambdaTest Organization through an IDP so your team could leverage the Single Sign-on setup. This document will help you integrate your LambdaTest organization with your Okta directory.
keywords:
  - sso
  - lambdatest sso
  - okta
  - lambdatest okta integration
  - lambdatest okta sso
url: https://www.lambdatest.com/support/docs/lambdatest-sso-okta-integration/
site_name: LambdaTest
slug: lambdatest-sso-okta-integration/
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
          "name": "SSO Okta Integration",
          "item": "https://www.lambdatest.com/support/docs/lambdatest-sso-okta-integration/"
        }]
      })
    }}
></script>

# LambdaTest SSO & Okta Integration

* * *

LambdaTest allows you to integrate an external user directory with your LambdaTest Organization through an IDP so your team could leverage the Single Sign-on setup. With Okta, you can integrate your LambdaTest organization in two ways i.e. through the Dev Console or the SAML.

After you integrate your Okta instance with your LambdaTest for Single Sign-on, you can benefit from the following features:
* SP-initiated SSO.
* IdP-initiated SSO.
* Group Assignment via Groups on Okta.

To know more, refer to <a href="https://help.okta.com/en/prod/Content/Topics/Reference/glossary.htm">Okta's glossary</a>.

## Prerequisites ##
---
To enable LambdaTest SSO through Okta integration:

* You will need an Enterprise plan with LambdaTest.
* The Admin of your LambdaTest organization needs to raise a request for enabling SSO. They could drop us an email over <a href="mailto:support@lambdatest.com">support@lambdatest.com</a> or could reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in app chat support**</span>.
* You will also need the admin level access of your organization in Okta.


## Configuring LambdaTest & Okta Integration Using SAML
---

You can also integrate SSO option of LambdaTest and Okta, with the help of SAML. To do so, follow the steps mentioned below:

1. Login to your okta account. 
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-7.webp').default} alt="okta integration" width="944" height="487" className="doc_img"/>

2. Go to Application menu from the toolbar and click on **Add Application**.
<img loading="lazy" src={require('../assets/images/uploads/59657a57-6023-4050-b0a4-e7d19bbe9019-1.webp').default} alt="okta integration application" width="944" height="409" className="doc_img"/> 

3. In the Add Application window, click on Create New App button, to create a new LambdaTest SSO integration app.
<img loading="lazy" src={require('../assets/images/uploads/okta-saml.webp').default} alt="oktra integration app" width="944" height="407" className="doc_img"/>

4. Now in the new app window, choose the **Platform** as **Web**, and then choose against the option **SAML 2.0**. Once done, click on **Create** to move forward. 
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-1.webp').default} alt="oktra integration" width="945" height="542" className="doc_img"/>

5. Give the created app a name of your choice, in the **App Name** box, and click Next. For instance, in the image below, the name provided is "LambdaTest-SAML-POC".
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-2.webp').default} alt="oktra integration" width="945" height="477" className="doc_img"/>

6. Fill in the details as per LambdaTest email received on request. Make sure Name ID format is set to *x5095SubjectName*, and Application username is set to <em>Email</em>. Enter the information and click Next
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-3.webp').default} alt="oktra integration" width="957" height="670" className="doc_img"/>

7. Set the Attribute Statements as per the image below and click Next.
<img loading="lazy" src={require('../assets/images/sso-self-serve/okta-claims.png').default} alt="oktra integration" width="944" height="670" className="doc_img"/>

8. In the next window of this Okta SAML integration, choose the setting **I am okta Customer adding to Internal app** and check the box against **This is an internal app that we have created**, as shown in the image below, and then click on **Finish** to complete the app creation.
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-4.webp').default} alt="oktra integration" width="944" height="346" className="doc_img"/> 

9. Now for the newly created app, click on **View setup instructions**.
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-5.webp').default} alt="Oktra Integration" width="944" height="378" className="doc_img"/>

10. From the setup instructions, copy the **SSO URL**, **download the certificate**, and share these with the LambdaTest team over same email thread.
<img loading="lazy" src={require('../assets/images/uploads/okta-saml-6.webp').default} alt="oktra integration" width="944" height="431" className="doc_img"/>


11. Once the email is shared, sit back and relax. We will revert with a confirmation email over your registered email address after the SSO is enabled for your organization.
>
That's all you need to know to integrate your LambdaTest Organization with the Okta. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).

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