---
id: real-time-self-signed-certificate
title: Self Signed Certificate Support
hide_title: false
sidebar_label: Self Signed Certificate
description: Discover how to use the self signed certificate support by LambdaTest to test your non-certified websites.
keywords:
  - real time testing in lambdatest
  - lambdatest real time testing feature
  - online real time testing
  - free cross browser testing tool
  - cross browser compatibility testing tool
  - online real time website testing
  - test website in different screen sizes
  - ie browser compatibility testing tool
  - test on gionee elfie e7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.lambdatest.com/support/docs/real-time-self-signed-certificate/
site_name: LambdaTest
slug: real-time-self-signed-certificate/
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
          "name": "Real Time Self Signed Certificate",
          "item": "https://www.lambdatest.com/support/docs/real-time-self-signed-certificate/"
        }]
      })
    }}
></script>
In modern web development, many features require a secure context to function properly. This typically means using HTTPS, which ensures that the communication between the client and server is encrypted. However, in development and staging environments, teams often use self-signed certificates instead of publicly trusted ones. These certificates are not automatically recognized by browsers as secure, which can lead to warnings, blocked features, and failed tests.

LambdaTest addresses this challenge with the Self-Signed Certificates Support feature. When enabled, this feature allows self-signed HTTPS sites to be treated as secure within remote testing environments. It enables testing of HTTPS-only APIs, service workers, WebRTC, and other secure-context-dependent features without encountering issues that typically arise with self-signed certificates.

With Self-Signed Certificates Support, LambdaTest ensures that testing workflows remain consistent, reliable, and realistic, even when self-signed certificates are used in development and staging environments.

## Steps to toggle the Self-Signed Certificate feature in a Realtime session:

**Step 1 :** Log in to the [Web Browser Testing](https://app.lambdatest.com/console/realtime/browser/desktop) dashboard.

**Step 2 :** Select your required OS and relevant browser, and device from the listing to launch your test session.

**Step 3 :** Click on Settings from the toolbar.

**Step 4 :** Toggle the switch next to `Self Signed Certificate Support` to enable the settings.

<img loading="lazy" src={require('../assets/images/real-time-testing/web-browser/self-signed-certificate.gif').default} alt="Image" className="doc_img"/>


## Key Features
- **Bypass Browser Security Warnings :** Self-signed certificates are not inherently trusted by browsers, leading to security warnings or even blocked features. By enabling Self-Signed Certificates Support in LambdaTest, these warnings are bypassed, allowing the site to function as if it had a publicly trusted certificate.
- **Secure Testing of HTTPS-only Features :** Many modern web features, such as WebRTC, service workers, and HTTPS-only APIs, rely on a secure connection to operate. This feature ensures that testing such features works as expected without any interruptions caused by self-signed certificates.
- **Cross-Platform Compatibility :** Self-Signed Certificates Support is available across various platforms, ensuring that it works uniformly across different operating systems and devices:
- **Seamless Integration with LambdaTest :** The process of enabling this feature is straightforward and integrated into the LambdaTest UI. With a simple toggle in the session toolbar, users can activate or deactivate self-signed certificate handling without manual intervention or complicated setup steps.
